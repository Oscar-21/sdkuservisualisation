import { MendixPlatformClient } from "mendixplatformsdk";
import { IModel, domainmodels, microflows, pages, navigation, security, IStructure, menus } from "mendixmodelsdk";
import * as fs from "fs";
import NativeNavigationProfile = navigation.NativeNavigationProfile;
import NavigationProfile = navigation.NavigationProfile;

(async function doThing() {

    try {
        const ws = fs.createWriteStream('./web/mendix.json');

        const jsonObj: {
            name?: string
            children?: {
                name: string
                children: never[]
                parent: string
            }[]
            parent?: null | Record<string, unknown>
        } = {};

        const appId = "{{appId}}";
        const branchName = "{{branchName}}"
        const client = new MendixPlatformClient();


        /*
         * App TO ANALYZE
         */
        const app = client.getApp(appId);
        const workingCopy = await app.createTemporaryWorkingCopy(branchName);
        const model = await workingCopy.openModel();
        const projectSecurity = await loadProjectSecurity(model);
        if (projectSecurity) {
            const userRoles = getAllUserRoles(projectSecurity);
            await loadAllUserNavigation(userRoles);
            const jsonString = JSON.stringify(jsonObj);
            ws.write(jsonString);
            ws.end();
            console.log("Done.");
            const connect = require('connect');
            const serveStatic = require('serve-static');
            connect().use(serveStatic(__dirname)).listen(8000, function() {
                console.log('Server running on 8000...');
            });
            const openurl = require('openurl').open;
            openurl("http://localhost:8000/web/");
        }

        /**
         * This function picks the first navigation document in the project.
         */
        function pickNavigationDocument(model: IModel): navigation.INavigationDocument {
            return model.allNavigationDocuments()[0];
        }
        /**
         * This function processes a given user navigation
         */
        async function processNavigation(role: security.UserRole, navDoc: navigation.NavigationDocument, element: any): Promise<void | undefined> {
            const navigationProfile = await getNavigationProfile(navDoc);
            let usersHomepage = navigationProfile.roleBasedHomePages.filter(roleBasedHomepage => roleBasedHomepage?.userRole?.name === role.name)[0];
            if (usersHomepage != null) {
                if (usersHomepage.page != null) {
                    console.log(`${role.name} homepage = ${usersHomepage.page.name}`);
                    const pg = await usersHomepage.page?.load();
                    await processStructures(element, pg, role, false);
                    await processOtherNavigation(navDoc, element, role);
                } else if (usersHomepage.microflow != null) {
                    console.log(`${role.name} homepage = ${usersHomepage.microflow.name}`);
                    const mf = await usersHomepage.microflow.load();
                    await traverseMicroflow(mf, element, role);
                    await processOtherNavigation(navDoc, element, role);
                }
            } else {
                if (navigationProfile) {
                    const defaultHomepage = navigationProfile.homePage;
                    if (defaultHomepage.page != null) {
                        console.log(`${role.name} homepage = ${defaultHomepage.page.name}`);
                        const pg = await defaultHomepage.page.load();
                        await processStructures(element, pg, role, false);
                        await processOtherNavigation(navDoc, element, role);
                    } else if (defaultHomepage.microflow != null) {
                        console.log(`${role.name} homepage = ${defaultHomepage.microflow.name}`);
                        const mf = await defaultHomepage.microflow.load();
                        await traverseMicroflow(mf, element, role);
                        await processOtherNavigation(navDoc, element, role);
                    }
                }
            }
        }
        /**
         * This function processes the other users navigation
         */
        async function processOtherNavigation(navDoc: navigation.NavigationDocument, element: any, userRole: any): Promise<void | undefined> {
            const navigationProfile = await getNavigationProfile(navDoc);
            const items = navigationProfile.menuItemCollection.items;
            if (items != null) {
                await Promise.all(items.map(async item => await processItem(item, element, userRole)));
            }
        }
        /**
         * This function processes a menu item.
         */
        async function processItem(item: menus.MenuItem, element: any, role: security.UserRole): Promise<void | undefined> {
            const action = item.action;
            if (action != null) {
                if (action instanceof pages.PageClientAction) {
                    if (action.pageSettings.page != null) {
                        const pagesSettings = await action.pageSettings.page.load();
                        await processStructures(element, pagesSettings, role, false);
                    }
                } else if (action instanceof pages.MicroflowClientAction) {
                    if (action.microflowSettings.microflow != null) {
                        const mf = await action.microflowSettings.microflow.load();
                        await traverseMicroflow(mf, element, role);
                    }
                }
            }
        }

        /**
         * This function loads the project security.
         */
        async function loadProjectSecurity(model: IModel): Promise<security.ProjectSecurity | undefined> {
            try {
                const security = model.allProjectSecurities()[0];
                if (security) {
                    const secure = await security.load();
                    if (secure) {
                        console.log(`Loaded security`);
                    }
                    return secure;
                } else {
                    console.log("Security is undefined");
                }
            } catch (e) {
                console.log(`Failed to load security`);
            }
        }
        /**
         * This function loads all the users navigation
         */
        async function loadAllUserNavigation(userRoles: security.UserRole[]): Promise<Awaited<void | undefined>[]> {
            jsonObj[`name`] = "User Roles";
            jsonObj[`children`] = [];
            jsonObj[`parent`] = null;
            return Promise.all(userRoles.map(async ur => await processUsersNavigation(ur)));
        }
        function getAllUserRoles(projectSecurity: security.ProjectSecurity): security.UserRole[] {
            return projectSecurity.userRoles;
        }
        /**
         * This function processes the navigation for a given user.
         */
        async function processUsersNavigation(role: security.UserRole): Promise<void | undefined> {
            const nav = role.model.allNavigationDocuments()[0];
            const child = { name: role.name, children: [], parent: "User Roles" };
            jsonObj[`children`]?.push(child);
            console.log(`Processing user navigation for: ${role.name}`);
            if (nav != null) {
                const loadedNav = await nav.load();
                await processNavigation(role, loadedNav, child);
            }
        }

        /**
         * Traverses a given structure and returns all buttons, controlbar buttons and listviews
         */
        function getStructures(structure: IStructure): IStructure[] {

            const structures: any[] = [];
            structure.traverse(function(structure) {
                if (structure instanceof pages.Button || structure instanceof pages.ControlBarButton || structure instanceof pages.ListView || structure instanceof pages.SnippetCallWidget) {
                    structures.push(structure);
                }
            });
            return structures;
        }

        /**
         * This function processes a button and adds it to the jsonObj.
         */
        async function processStructures(element: any, page: pages.Page, userRole: security.UserRole, calledFromMicroflow: boolean): Promise<void | undefined> {
            const structures = getStructures(page);
            const child = { name: page.name, children: [], parent: element.name + ","+ element.parent };
            if (page) {
                if (calledFromMicroflow) {
                    if (!checkIfInElement(page.name, element)) {
                        element["children"].push(child);
                        if (structures.length > 0) {
                            await Promise.all(structures.map(async strut => await traverseElement(child, strut, userRole)));
                        }
                    }
                } else {
                    if (checkElementSecurity(page, userRole)) {
                        if (!checkIfInElement(page.name, element)) {
                            element["children"].push(child);
                            if (structures.length > 0) {
                                await Promise.all(structures.map(async strut => await traverseElement(child, strut, userRole)));
                            }
                        }
                    }
                }
            }
        }
        /**
         * This function traverses a page element
         */
        async function traverseElement(element: any, structure: IStructure, userRole: security.UserRole): Promise<void | undefined> {
            if (structure != null) {
                if (structure instanceof pages.Button) {
                    await processButton(structure, element, userRole);
                } else if (structure instanceof pages.ControlBarButton) {
                    await processControlBarButton(structure, element, userRole);
                } else if (structure instanceof pages.ListView) {
                    await processListView(structure, element, userRole);
                } else if (structure instanceof pages.SnippetCallWidget) {
                    await processSnippet(structure, element, userRole);
                }
            }
        }
        /**
         * This Function processes the listview structure.
         */
        async function processListView(listView: pages.ListView, element: any, userRole: security.UserRole): Promise<void | undefined> {
            if (listView.clickAction != null) {
                await processClientAction(listView.clickAction, element, userRole);
            }
        }

        async function processClientAction(action: pages.ClientAction, element: any, userRole: security.UserRole) {
            if (action instanceof pages.MicroflowClientAction) {
                if (action.microflowSettings.microflow != null) {
                    const mf = await action.microflowSettings.microflow.load();
                    await traverseMicroflow(mf, element, userRole);
                }
            } else if (action instanceof pages.PageClientAction) {
                if (action.pageSettings.page != null) {
                    const pg = await action.pageSettings.page.load();
                    await processStructures(element, pg, userRole, false);
                }
            }
        }

        async function processSnippet(snippetCallWidget: pages.SnippetCallWidget, element: any, userRole: security.UserRole): Promise<void | undefined> {
            if (snippetCallWidget != null) {
                const snippetCall = snippetCallWidget.snippetCall;
                if (snippetCall != null) {
                    const snippet = snippetCall.snippet;
                    if (snippet != null) {
                        const snip = await snippet.load();
                        await processSnippetStructures(element,userRole,snip);
                    }
                }
            }
        }

        /**
         * Process snippet Structures
         */
        async function processSnippetStructures(element: any, userRole: security.UserRole,snip:pages.Snippet): Promise<void | undefined> {
            const structures = getStructures(snip);
            if (structures.length > 0) {
                await Promise.all<void>(structures.map(async strut => await traverseElement(element, strut, userRole)));
            }
        }

        /**
         * This function is used to process a control bar button
         */
        async function processControlBarButton(button: pages.ControlBarButton, element: any, userRole: security.UserRole): Promise<void | undefined> {
            if (button instanceof pages.GridEditButton) {
                if (button.pageSettings.page != null) {
                    const pg = await button.pageSettings.page.load();
                    await processStructures(element, pg, userRole, false);
                }
            } else if (button instanceof pages.DataViewActionButton) {
                const action = button.action;
                if (action != null) {
                    await processClientAction(action, element, userRole);
                }
            }
        }

        /**
         * This function is used to processes a button found on a page. Depending on the button type it will process the button differently.
         */
        async function processButton(button: pages.Button, element: any, userRole: security.UserRole): Promise<void | undefined> {
            if (button instanceof pages.ActionButton) {
                const action = button.action;
                if (action != null) {
                    await processClientAction(action, element, userRole);
                }
            } else if (button instanceof pages.DropDownButton) {

            } else if (button instanceof pages.NewButton) {
                const pg = await button.pageSettings.page?.load();
                if (pg) {
                    const entity = button.entity;
                    if (entity != null) {
                        const ent = await entity.load();
                        if (checkEntitySecurityCanCreate(ent, userRole)) {
                            await processStructures(element, pg, userRole, false);
                        }
                    }
                }
            }
        }
        /**
         * This function traverses all the microflow actions that are passed to it and returns once all actions are processed.
         */
        async function traverseMicroflowActions(actions: microflows.MicroflowObject[], element: any, userRole: security.UserRole): Promise<void> {
            await Promise.all(
                actions.map(async act => await processAction(act, element, userRole))
            );
        }
        /**
         * This function checks what the type of microflow action is either a show page, show homepage or microflow call. Then processes accordingly.
         */
        async function processAction(mfObj: microflows.MicroflowObject, element: any, userRole: security.UserRole): Promise<void | undefined> {
            if (mfObj instanceof microflows.ActionActivity) {
                const action = mfObj.action;
                if (action != null) {
                    if (action instanceof microflows.ShowPageAction) {
                        console.log(`Microflow action to open page ${action?.pageSettings?.page?.name}`);
                        if (action.pageSettings.page != null) {
                            const pg = await action.pageSettings.page.load();
                            await processStructures(element, pg, userRole, true);
                        }
                    }
                    else if (action instanceof microflows.ShowHomePageAction) {
                        const child = { name: "ShowHomepage", children: [], parent: element.name + ","+ element.parent };
                        element["children"].push(child);
                    } else if (action instanceof microflows.MicroflowCallAction) {
                        console.log(`Microflow action to open microflow ${action?.microflowCall?.microflow?.name}`);
                        if (action.microflowCall.microflow != null) {
                            const mf = await action.microflowCall.microflow.load();
                            await traverseMicroflow(mf, element, userRole);
                        }
                    }
                }
            }
        }
        /**
         * This function traverses a microflow to find all actions that either open up a page or sub microflow
         */
        async function traverseMicroflow(microflow: microflows.Microflow, element: any, userRole: security.UserRole): Promise<void | undefined> {
            if (checkElementSecurity(microflow, userRole)) {
                console.log(`Traversing Microflow for: ${microflow.name}`);
                if (!checkIfInElement(microflow.name, element)) {
                    const child = { name: microflow.name, children: [], parent: element.name + + ","+ element.parent };
                    element["children"].push(child);
                    await traverseMicroflowActions(microflow.objectCollection.objects.filter(o => o instanceof microflows.ActionActivity), child, userRole);
                }
            }
        }

        function checkElementSecurity(element: microflows.Microflow | pages.Page, userRole: security.UserRole): boolean {
            const moduleRolesAllowed: string[] = [];
            const userRolesModuleRoles = userRole.moduleRolesQualifiedNames;
            if (element instanceof microflows.Microflow) {
                moduleRolesAllowed.push(...element.allowedModuleRolesQualifiedNames);
            } else {
                moduleRolesAllowed.push(...element.allowedRolesQualifiedNames);
            }
            let i;
            let a;
            for (i = 0; i < moduleRolesAllowed.length; i++) {
                for (a = 0; a < userRolesModuleRoles.length; a++) {
                    if (userRolesModuleRoles[a] === moduleRolesAllowed[i]) {
                        return true;
                    }
                }
            }
            return false;
        }


        /**
         * This function checks to see whether a given user role is able to create the given entity.
         */
        function checkEntitySecurityCanCreate(entity: domainmodels.Entity, userRole: security.UserRole): boolean {
            const accessRules = entity.accessRules;
            const userRolesModuleRoles = userRole.moduleRolesQualifiedNames;
            let i, a, b;
            for (i = 0; i < userRolesModuleRoles.length; i++) {
                for (a = 0; a < accessRules.length; a++) {
                    for (b = 0; b < accessRules[a].moduleRoles.length; b++) {
                        if (userRolesModuleRoles[i] === accessRules[a].moduleRoles[b].qualifiedName) {
                            if (accessRules[i].allowCreate) {
                                return true;
                            }

                        }
                    }
                }
            }
            return false;
        }

        /**
         * This function checks to see if the user role has access to delete the given entity.
         */
        function checkEntitySecurityCanDelete(entity: domainmodels.Entity, userRole: security.UserRole): boolean {
            const accessRules = entity.accessRules;
            const userRolesModuleRoles = userRole.moduleRolesQualifiedNames;
            userRolesModuleRoles.forEach(role => {
                const filteredAccessRules = accessRules.filter(accessRule => accessRule.moduleRoles.filter(moduleRole => moduleRole.qualifiedName === role).length >= 1)
                filteredAccessRules.forEach(filteredAccessRule => {
                    if (filteredAccessRule.allowDelete) {
                        return true;
                    }
                });
            });
            return false;
        }

        /**
         * This function checks to see if the new element already exists in the jsonObj.
         * Returns true if the element exists as a parent of the current element.
         * This function also checks to see if it exists a child already.
         */
        function checkIfInElement(newElement: String, element: any): boolean {
            return !!(element.parent.includes(newElement) || checkIfInChildren(newElement, element));
        }

        function checkIfInChildren(newElement: String, element: any): boolean {
            let i;
            for (i = 0; i < element.children.length; i++) {
                if (element.children[i].name === newElement) {
                    return true;
                }
            }
            return false;
        }
    } catch (e) {
        console.log(e);
    }

    async function getNavigationProfile(navDoc: navigation.NavigationDocument): Promise<navigation.NavigationProfile> {
        const navProfiles = await Promise.all(
            navDoc.profiles.map(async profile => profile.isLoaded ? profile : await profile.load())
        );
        if (Array.isArray(navProfiles) && !!navProfiles.length) {
            navProfiles.forEach(prof => {
                console.log("NavProfileName: " + prof.name);
                prof.publicProperties().forEach(prop => {
                    console.log("publicProp: " + prop.name);
                });
                if (prof instanceof NativeNavigationProfile) {
                    console.log("IS NATIVE NAV");
                } else if (prof instanceof NavigationProfile) {
                    console.log("NAV PROFILE");
                } else {
                    console.log("NONE PROFILE");
                }
            });
        }
        return (navProfiles.find(profile => profile instanceof NavigationProfile)) as NavigationProfile;
    }
})();

