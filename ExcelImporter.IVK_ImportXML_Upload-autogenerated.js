(function (unit, model) {

	/*
	 * JavaScript code generated by mendixmodelsdk.sdk.extras.JavaScriptSerializer
	 * from unit with id "ea2fa208-2e25-47a0-a36e-a1c25bd62703" of type Microflows$Microflow
	 * in working copy "SoccerSquad"
	 * on 20-12-2024.
	 */

	var startEvent1 = microflows.StartEvent.create(model);
	startEvent1.relativeMiddlePoint = {"x":100,"y":200};
	startEvent1.size = {"width":20,"height":20};

	var createObjectAction1 = microflows.CreateObjectAction.create(model);
	createObjectAction1.entity = model.findEntityByQualifiedName("ExcelImporter.XMLDocumentTemplate");
	createObjectAction1.outputVariableName = "NewXMLDocumentTemplate";

	var actionActivity1 = microflows.ActionActivity.create(model);
	actionActivity1.relativeMiddlePoint = {"x":195,"y":200};
	actionActivity1.size = {"width":120,"height":60};
	actionActivity1.action = createObjectAction1;

	var changeObjectAction1 = microflows.ChangeObjectAction.create(model);
	changeObjectAction1.commit = microflows.CommitEnum.Yes;
	changeObjectAction1.changeVariableName = "NewXMLDocumentTemplate";

	var actionActivity2 = microflows.ActionActivity.create(model);
	actionActivity2.relativeMiddlePoint = {"x":340,"y":200};
	actionActivity2.size = {"width":120,"height":60};
	actionActivity2.action = changeObjectAction1;

	var pageSettings1 = pages.PageSettings.create(model);
	pageSettings1.page = model.findPageByQualifiedName("ExcelImporter.ImportXML_Upload");

	var showPageAction1 = microflows.ShowPageAction.create(model);
	showPageAction1.pageSettings = pageSettings1;   // Note: for this property a default value is defined.
	showPageAction1.passedObjectVariableName = "NewXMLDocumentTemplate";

	var actionActivity3 = microflows.ActionActivity.create(model);
	actionActivity3.relativeMiddlePoint = {"x":485,"y":200};
	actionActivity3.size = {"width":120,"height":60};
	actionActivity3.action = showPageAction1;

	var endEvent1 = microflows.EndEvent.create(model);
	endEvent1.relativeMiddlePoint = {"x":580,"y":200};
	endEvent1.size = {"width":20,"height":20};

	var annotation1 = microflows.Annotation.create(model);
	annotation1.relativeMiddlePoint = {"x":205,"y":20};
	annotation1.size = {"width":210,"height":90};
	annotation1.caption = "BPO:\r\n\r\nFUNCTION: Open upload form\r\n\r\nPRE: \t-\r\nPOST:\tPop-up";

	var microflowObjectCollection1 = microflows.MicroflowObjectCollection.create(model);
	microflowObjectCollection1.objects.push(startEvent1);
	microflowObjectCollection1.objects.push(actionActivity1);
	microflowObjectCollection1.objects.push(actionActivity2);
	microflowObjectCollection1.objects.push(actionActivity3);
	microflowObjectCollection1.objects.push(endEvent1);
	microflowObjectCollection1.objects.push(annotation1);

	var noCase1 = microflows.NoCase.create(model);

	var sequenceFlow1 = microflows.SequenceFlow.create(model);
	sequenceFlow1.originConnectionIndex = 1;
	sequenceFlow1.destinationConnectionIndex = 3;
	sequenceFlow1.originBezierVector = {"width":0,"height":0};
	sequenceFlow1.destinationBezierVector = {"width":-30,"height":0};
	sequenceFlow1.caseValue = noCase1;   // Note: for this property a default value is defined.

	var noCase2 = microflows.NoCase.create(model);

	var sequenceFlow2 = microflows.SequenceFlow.create(model);
	sequenceFlow2.originConnectionIndex = 1;
	sequenceFlow2.destinationConnectionIndex = 3;
	sequenceFlow2.originBezierVector = {"width":30,"height":0};
	sequenceFlow2.destinationBezierVector = {"width":-30,"height":0};
	sequenceFlow2.caseValue = noCase2;   // Note: for this property a default value is defined.

	var noCase3 = microflows.NoCase.create(model);

	var sequenceFlow3 = microflows.SequenceFlow.create(model);
	sequenceFlow3.originConnectionIndex = 1;
	sequenceFlow3.destinationConnectionIndex = 3;
	sequenceFlow3.originBezierVector = {"width":30,"height":0};
	sequenceFlow3.destinationBezierVector = {"width":-15,"height":0};
	sequenceFlow3.caseValue = noCase3;   // Note: for this property a default value is defined.

	var noCase4 = microflows.NoCase.create(model);

	var sequenceFlow4 = microflows.SequenceFlow.create(model);
	sequenceFlow4.originConnectionIndex = 1;
	sequenceFlow4.destinationConnectionIndex = 3;
	sequenceFlow4.originBezierVector = {"width":30,"height":0};
	sequenceFlow4.destinationBezierVector = {"width":-30,"height":0};
	sequenceFlow4.caseValue = noCase4;   // Note: for this property a default value is defined.

	var voidType1 = datatypes.VoidType.create(model);

	var translation1 = texts.Translation.create(model);
	translation1.languageCode = "en_US";

	var translation2 = texts.Translation.create(model);
	translation2.languageCode = "en_GB";

	var translation3 = texts.Translation.create(model);
	translation3.languageCode = "en_ZA";

	var text1 = texts.Text.create(model);
	text1.translations.push(translation1);
	text1.translations.push(translation2);
	text1.translations.push(translation3);

	var iVK_ImportXML_Upload1 = microflows.Microflow.createIn(unit);
	iVK_ImportXML_Upload1.name = "IVK_ImportXML_Upload";
	iVK_ImportXML_Upload1.documentation = "Create an XMLDocumentTemplate object and op the upload form.";
	iVK_ImportXML_Upload1.objectCollection = microflowObjectCollection1;   // Note: for this property a default value is defined.
	iVK_ImportXML_Upload1.flows.push(sequenceFlow1);
	iVK_ImportXML_Upload1.flows.push(sequenceFlow2);
	iVK_ImportXML_Upload1.flows.push(sequenceFlow3);
	iVK_ImportXML_Upload1.flows.push(sequenceFlow4);
	iVK_ImportXML_Upload1.microflowReturnType = voidType1;
	iVK_ImportXML_Upload1.allowedModuleRoles.push(model.findModuleRoleByQualifiedName("ExcelImporter.Configurator"));
	iVK_ImportXML_Upload1.concurrencyErrorMessage = text1;   // Note: for this property a default value is defined.

	sequenceFlow1.origin = startEvent1;
	sequenceFlow1.destination = actionActivity1;

	sequenceFlow2.origin = actionActivity1;
	sequenceFlow2.destination = actionActivity2;

	sequenceFlow3.origin = actionActivity3;
	sequenceFlow3.destination = endEvent1;

	sequenceFlow4.origin = actionActivity2;
	sequenceFlow4.destination = actionActivity3;

})