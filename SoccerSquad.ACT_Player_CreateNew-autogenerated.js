(function (unit, model) {

	/*
	 * JavaScript code generated by mendixmodelsdk.sdk.extras.JavaScriptSerializer
	 * from unit with id "cf1eee54-49fa-41ce-9965-af704eae180b" of type Microflows$Microflow
	 * in working copy "SoccerSquad"
	 * on 20-12-2024.
	 */

	var startEvent1 = microflows.StartEvent.create(model);
	startEvent1.relativeMiddlePoint = {"x":-95,"y":200};
	startEvent1.size = {"width":20,"height":20};

	var endEvent1 = microflows.EndEvent.create(model);
	endEvent1.relativeMiddlePoint = {"x":1290,"y":200};
	endEvent1.size = {"width":20,"height":20};

	var objectType1 = datatypes.ObjectType.create(model);
	objectType1.entity = model.findEntityByQualifiedName("SoccerSquad.Team");

	var team1 = microflows.MicroflowParameterObject.create(model);
	team1.relativeMiddlePoint = {"x":-95,"y":0};
	team1.size = {"width":30,"height":30};
	team1.name = "Team";
	team1.variableType = objectType1;   // Note: for this property a default value is defined.

	var constantRange1 = microflows.ConstantRange.create(model);
	constantRange1.singleObject = true;

	var attributeRef1 = domainmodels.AttributeRef.create(model);
	attributeRef1.attribute = model.findAttributeByQualifiedName("SoccerSquad.Player.ShirtNumber");

	var sortItem1 = microflows.SortItem.create(model);
	sortItem1.attributeRef = attributeRef1;   // Note: for this property a default value is defined.
	sortItem1.sortOrder = microflows.SortOrderEnum.Descending;

	var sortItemList1 = microflows.SortItemList.create(model);
	sortItemList1.items.push(sortItem1);

	var databaseRetrieveSource1 = microflows.DatabaseRetrieveSource.create(model);
	databaseRetrieveSource1.entity = model.findEntityByQualifiedName("SoccerSquad.Player");
	databaseRetrieveSource1.range = constantRange1;   // Note: for this property a default value is defined.
	databaseRetrieveSource1.xPathConstraint = "[SoccerSquad.Player_Team = $Team]";
	databaseRetrieveSource1.sortItemList = sortItemList1;   // Note: for this property a default value is defined.

	var retrieveAction1 = microflows.RetrieveAction.create(model);
	retrieveAction1.retrieveSource = databaseRetrieveSource1;   // Note: for this property a default value is defined.
	retrieveAction1.outputVariableName = "PlayerLast";

	var actionActivity1 = microflows.ActionActivity.create(model);
	actionActivity1.relativeMiddlePoint = {"x":240,"y":200};
	actionActivity1.size = {"width":120,"height":60};
	actionActivity1.action = retrieveAction1;

	var memberChange1 = microflows.MemberChange.create(model);
	memberChange1.association = model.findAssociationBaseByQualifiedName("SoccerSquad.Player_Team");
	memberChange1.value = "$Team";

	var memberChange2 = microflows.MemberChange.create(model);
	memberChange2.attribute = model.findAttributeByQualifiedName("SoccerSquad.Player.ShirtNumber");
	memberChange2.value = "$PlayerNumber";

	var createObjectAction1 = microflows.CreateObjectAction.create(model);
	createObjectAction1.items.push(memberChange1);
	createObjectAction1.items.push(memberChange2);
	createObjectAction1.entity = model.findEntityByQualifiedName("SoccerSquad.Player");
	createObjectAction1.outputVariableName = "NewPlayer";

	var actionActivity2 = microflows.ActionActivity.create(model);
	actionActivity2.relativeMiddlePoint = {"x":960,"y":200};
	actionActivity2.size = {"width":120,"height":60};
	actionActivity2.action = createObjectAction1;

	var expressionSplitCondition1 = microflows.ExpressionSplitCondition.create(model);
	expressionSplitCondition1.expression = "$PlayerLast != empty";

	var exclusiveSplit1 = microflows.ExclusiveSplit.create(model);
	exclusiveSplit1.relativeMiddlePoint = {"x":405,"y":200};
	exclusiveSplit1.size = {"width":90,"height":60};
	exclusiveSplit1.splitCondition = expressionSplitCondition1;   // Note: for this property a default value is defined.
	exclusiveSplit1.caption = "Existing player found?";

	var integerType1 = datatypes.IntegerType.create(model);

	var createVariableAction1 = microflows.CreateVariableAction.create(model);
	createVariableAction1.variableName = "PlayerNumber";
	createVariableAction1.variableType = integerType1;   // Note: for this property a default value is defined.
	createVariableAction1.initialValue = "1";

	var actionActivity3 = microflows.ActionActivity.create(model);
	actionActivity3.relativeMiddlePoint = {"x":50,"y":200};
	actionActivity3.size = {"width":120,"height":60};
	actionActivity3.action = createVariableAction1;

	var exclusiveMerge1 = microflows.ExclusiveMerge.create(model);
	exclusiveMerge1.relativeMiddlePoint = {"x":785,"y":200};
	exclusiveMerge1.size = {"width":90,"height":60};

	var changeVariableAction1 = microflows.ChangeVariableAction.create(model);
	changeVariableAction1.changeVariableName = "PlayerNumber";
	changeVariableAction1.value = "$PlayerLast/ShirtNumber + 1";

	var actionActivity4 = microflows.ActionActivity.create(model);
	actionActivity4.relativeMiddlePoint = {"x":600,"y":200};
	actionActivity4.size = {"width":150,"height":60};
	actionActivity4.action = changeVariableAction1;

	var pageSettings1 = pages.PageSettings.create(model);
	pageSettings1.page = model.findPageByQualifiedName("SoccerSquad.Player_NewEdit");

	var showPageAction1 = microflows.ShowPageAction.create(model);
	showPageAction1.pageSettings = pageSettings1;   // Note: for this property a default value is defined.
	showPageAction1.passedObjectVariableName = "NewPlayer";

	var actionActivity5 = microflows.ActionActivity.create(model);
	actionActivity5.relativeMiddlePoint = {"x":1150,"y":200};
	actionActivity5.size = {"width":120,"height":60};
	actionActivity5.action = showPageAction1;

	var microflowObjectCollection1 = microflows.MicroflowObjectCollection.create(model);
	microflowObjectCollection1.objects.push(startEvent1);
	microflowObjectCollection1.objects.push(endEvent1);
	microflowObjectCollection1.objects.push(team1);
	microflowObjectCollection1.objects.push(actionActivity1);
	microflowObjectCollection1.objects.push(actionActivity2);
	microflowObjectCollection1.objects.push(exclusiveSplit1);
	microflowObjectCollection1.objects.push(actionActivity3);
	microflowObjectCollection1.objects.push(exclusiveMerge1);
	microflowObjectCollection1.objects.push(actionActivity4);
	microflowObjectCollection1.objects.push(actionActivity5);

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
	sequenceFlow2.destinationBezierVector = {"width":-15,"height":0};
	sequenceFlow2.caseValue = noCase2;   // Note: for this property a default value is defined.

	var noCase3 = microflows.NoCase.create(model);

	var sequenceFlow3 = microflows.SequenceFlow.create(model);
	sequenceFlow3.originConnectionIndex = 1;
	sequenceFlow3.destinationConnectionIndex = 3;
	sequenceFlow3.originBezierVector = {"width":30,"height":0};
	sequenceFlow3.destinationBezierVector = {"width":-30,"height":0};
	sequenceFlow3.caseValue = noCase3;   // Note: for this property a default value is defined.

	var enumerationCase1 = microflows.EnumerationCase.create(model);
	enumerationCase1.value = "true";

	var sequenceFlow4 = microflows.SequenceFlow.create(model);
	sequenceFlow4.originConnectionIndex = 1;
	sequenceFlow4.destinationConnectionIndex = 3;
	sequenceFlow4.originBezierVector = {"width":15,"height":0};
	sequenceFlow4.destinationBezierVector = {"width":-30,"height":0};
	sequenceFlow4.caseValue = enumerationCase1;   // Note: for this property a default value is defined.

	var noCase4 = microflows.NoCase.create(model);

	var sequenceFlow5 = microflows.SequenceFlow.create(model);
	sequenceFlow5.originConnectionIndex = 1;
	sequenceFlow5.destinationConnectionIndex = 3;
	sequenceFlow5.originBezierVector = {"width":30,"height":0};
	sequenceFlow5.destinationBezierVector = {"width":-30,"height":0};
	sequenceFlow5.caseValue = noCase4;   // Note: for this property a default value is defined.

	var noCase5 = microflows.NoCase.create(model);

	var sequenceFlow6 = microflows.SequenceFlow.create(model);
	sequenceFlow6.originConnectionIndex = 1;
	sequenceFlow6.destinationConnectionIndex = 3;
	sequenceFlow6.originBezierVector = {"width":15,"height":0};
	sequenceFlow6.destinationBezierVector = {"width":-30,"height":0};
	sequenceFlow6.caseValue = noCase5;   // Note: for this property a default value is defined.

	var noCase6 = microflows.NoCase.create(model);

	var sequenceFlow7 = microflows.SequenceFlow.create(model);
	sequenceFlow7.originConnectionIndex = 1;
	sequenceFlow7.destinationConnectionIndex = 3;
	sequenceFlow7.originBezierVector = {"width":30,"height":0};
	sequenceFlow7.destinationBezierVector = {"width":-15,"height":0};
	sequenceFlow7.caseValue = noCase6;   // Note: for this property a default value is defined.

	var enumerationCase2 = microflows.EnumerationCase.create(model);
	enumerationCase2.value = "false";

	var sequenceFlow8 = microflows.SequenceFlow.create(model);
	sequenceFlow8.originConnectionIndex = 2;
	sequenceFlow8.destinationConnectionIndex = 2;
	sequenceFlow8.originBezierVector = {"width":0,"height":15};
	sequenceFlow8.destinationBezierVector = {"width":0,"height":15};
	sequenceFlow8.caseValue = enumerationCase2;   // Note: for this property a default value is defined.

	var noCase7 = microflows.NoCase.create(model);

	var sequenceFlow9 = microflows.SequenceFlow.create(model);
	sequenceFlow9.originConnectionIndex = 1;
	sequenceFlow9.destinationConnectionIndex = 3;
	sequenceFlow9.originBezierVector = {"width":30,"height":0};
	sequenceFlow9.destinationBezierVector = {"width":-15,"height":0};
	sequenceFlow9.caseValue = noCase7;   // Note: for this property a default value is defined.

	var voidType1 = datatypes.VoidType.create(model);

	var translation1 = texts.Translation.create(model);
	translation1.languageCode = "en_US";

	var text1 = texts.Text.create(model);
	text1.translations.push(translation1);

	var aCT_Player_CreateNew1 = microflows.Microflow.createIn(unit);
	aCT_Player_CreateNew1.name = "ACT_Player_CreateNew";
	aCT_Player_CreateNew1.objectCollection = microflowObjectCollection1;   // Note: for this property a default value is defined.
	aCT_Player_CreateNew1.flows.push(sequenceFlow1);
	aCT_Player_CreateNew1.flows.push(sequenceFlow2);
	aCT_Player_CreateNew1.flows.push(sequenceFlow3);
	aCT_Player_CreateNew1.flows.push(sequenceFlow4);
	aCT_Player_CreateNew1.flows.push(sequenceFlow5);
	aCT_Player_CreateNew1.flows.push(sequenceFlow6);
	aCT_Player_CreateNew1.flows.push(sequenceFlow7);
	aCT_Player_CreateNew1.flows.push(sequenceFlow8);
	aCT_Player_CreateNew1.flows.push(sequenceFlow9);
	aCT_Player_CreateNew1.microflowReturnType = voidType1;
	aCT_Player_CreateNew1.allowedModuleRoles.push(model.findModuleRoleByQualifiedName("SoccerSquad.Administrator"));
	aCT_Player_CreateNew1.allowedModuleRoles.push(model.findModuleRoleByQualifiedName("SoccerSquad.TeamMember"));
	aCT_Player_CreateNew1.concurrencyErrorMessage = text1;   // Note: for this property a default value is defined.

	sequenceFlow1.origin = startEvent1;
	sequenceFlow1.destination = actionActivity3;

	sequenceFlow2.origin = actionActivity1;
	sequenceFlow2.destination = exclusiveSplit1;

	sequenceFlow3.origin = actionActivity2;
	sequenceFlow3.destination = actionActivity5;

	sequenceFlow4.origin = exclusiveSplit1;
	sequenceFlow4.destination = actionActivity4;

	sequenceFlow5.origin = actionActivity3;
	sequenceFlow5.destination = actionActivity1;

	sequenceFlow6.origin = exclusiveMerge1;
	sequenceFlow6.destination = actionActivity2;

	sequenceFlow7.origin = actionActivity4;
	sequenceFlow7.destination = exclusiveMerge1;

	sequenceFlow8.origin = exclusiveSplit1;
	sequenceFlow8.destination = exclusiveMerge1;

	sequenceFlow9.origin = actionActivity5;
	sequenceFlow9.destination = endEvent1;

})