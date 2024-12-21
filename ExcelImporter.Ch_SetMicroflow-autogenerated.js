(function (unit, model) {

	/*
	 * JavaScript code generated by mendixmodelsdk.sdk.extras.JavaScriptSerializer
	 * from unit with id "fe4c1269-ac30-422a-b222-a14bc1e677de" of type Microflows$Microflow
	 * in working copy "SoccerSquad"
	 * on 20-12-2024.
	 */

	var startEvent1 = microflows.StartEvent.create(model);
	startEvent1.relativeMiddlePoint = {"x":100,"y":200};
	startEvent1.size = {"width":20,"height":20};

	var objectType1 = datatypes.ObjectType.create(model);
	objectType1.entity = model.findEntityByQualifiedName("ExcelImporter.Column");

	var column1 = microflows.MicroflowParameterObject.create(model);
	column1.relativeMiddlePoint = {"x":100,"y":115};
	column1.size = {"width":30,"height":30};
	column1.name = "column";
	column1.variableType = objectType1;   // Note: for this property a default value is defined.

	var expressionSplitCondition1 = microflows.ExpressionSplitCondition.create(model);
	expressionSplitCondition1.expression = "$column/ExcelImporter.Column_Microflows != empty";

	var exclusiveSplit1 = microflows.ExclusiveSplit.create(model);
	exclusiveSplit1.relativeMiddlePoint = {"x":215,"y":200};
	exclusiveSplit1.size = {"width":110,"height":50};
	exclusiveSplit1.splitCondition = expressionSplitCondition1;   // Note: for this property a default value is defined.
	exclusiveSplit1.caption = "has microflow selected";

	var associationRetrieveSource1 = microflows.AssociationRetrieveSource.create(model);
	associationRetrieveSource1.startVariableName = "column";
	associationRetrieveSource1.association = model.findAssociationBaseByQualifiedName("ExcelImporter.Column_Microflows");

	var retrieveAction1 = microflows.RetrieveAction.create(model);
	retrieveAction1.retrieveSource = associationRetrieveSource1;   // Note: for this property a default value is defined.
	retrieveAction1.outputVariableName = "Microflow";

	var actionActivity1 = microflows.ActionActivity.create(model);
	actionActivity1.relativeMiddlePoint = {"x":405,"y":200};
	actionActivity1.size = {"width":130,"height":60};
	actionActivity1.action = retrieveAction1;
	actionActivity1.caption = "Get the selected microflow";
	actionActivity1.autoGenerateCaption = false;

	var endEvent1 = microflows.EndEvent.create(model);
	endEvent1.relativeMiddlePoint = {"x":215,"y":370};
	endEvent1.size = {"width":20,"height":20};

	var memberChange1 = microflows.MemberChange.create(model);
	memberChange1.attribute = model.findAttributeByQualifiedName("ExcelImporter.Column.FindMicroflow");
	memberChange1.value = "empty";

	var changeObjectAction1 = microflows.ChangeObjectAction.create(model);
	changeObjectAction1.items.push(memberChange1);
	changeObjectAction1.refreshInClient = true;
	changeObjectAction1.changeVariableName = "column";

	var actionActivity2 = microflows.ActionActivity.create(model);
	actionActivity2.relativeMiddlePoint = {"x":215,"y":300};
	actionActivity2.size = {"width":110,"height":60};
	actionActivity2.action = changeObjectAction1;
	actionActivity2.caption = "Reset the mf search string";
	actionActivity2.autoGenerateCaption = false;

	var endEvent2 = microflows.EndEvent.create(model);
	endEvent2.relativeMiddlePoint = {"x":680,"y":200};
	endEvent2.size = {"width":20,"height":20};

	var memberChange2 = microflows.MemberChange.create(model);
	memberChange2.attribute = model.findAttributeByQualifiedName("ExcelImporter.Column.FindMicroflow");
	memberChange2.value = "$Microflow/CompleteName";

	var changeObjectAction2 = microflows.ChangeObjectAction.create(model);
	changeObjectAction2.items.push(memberChange2);
	changeObjectAction2.refreshInClient = true;
	changeObjectAction2.changeVariableName = "column";

	var actionActivity3 = microflows.ActionActivity.create(model);
	actionActivity3.relativeMiddlePoint = {"x":570,"y":200};
	actionActivity3.size = {"width":130,"height":60};
	actionActivity3.action = changeObjectAction2;
	actionActivity3.caption = "Copy the microflow name";
	actionActivity3.autoGenerateCaption = false;

	var microflowObjectCollection1 = microflows.MicroflowObjectCollection.create(model);
	microflowObjectCollection1.objects.push(startEvent1);
	microflowObjectCollection1.objects.push(column1);
	microflowObjectCollection1.objects.push(exclusiveSplit1);
	microflowObjectCollection1.objects.push(actionActivity1);
	microflowObjectCollection1.objects.push(endEvent1);
	microflowObjectCollection1.objects.push(actionActivity2);
	microflowObjectCollection1.objects.push(endEvent2);
	microflowObjectCollection1.objects.push(actionActivity3);

	var noCase1 = microflows.NoCase.create(model);

	var sequenceFlow1 = microflows.SequenceFlow.create(model);
	sequenceFlow1.originConnectionIndex = 1;
	sequenceFlow1.destinationConnectionIndex = 3;
	sequenceFlow1.originBezierVector = {"width":0,"height":0};
	sequenceFlow1.destinationBezierVector = {"width":-15,"height":0};
	sequenceFlow1.caseValue = noCase1;   // Note: for this property a default value is defined.

	var enumerationCase1 = microflows.EnumerationCase.create(model);
	enumerationCase1.value = "true";

	var sequenceFlow2 = microflows.SequenceFlow.create(model);
	sequenceFlow2.originConnectionIndex = 1;
	sequenceFlow2.destinationConnectionIndex = 3;
	sequenceFlow2.originBezierVector = {"width":15,"height":0};
	sequenceFlow2.destinationBezierVector = {"width":-30,"height":0};
	sequenceFlow2.caseValue = enumerationCase1;   // Note: for this property a default value is defined.

	var noCase2 = microflows.NoCase.create(model);

	var sequenceFlow3 = microflows.SequenceFlow.create(model);
	sequenceFlow3.originConnectionIndex = 1;
	sequenceFlow3.destinationConnectionIndex = 3;
	sequenceFlow3.originBezierVector = {"width":30,"height":0};
	sequenceFlow3.destinationBezierVector = {"width":-15,"height":0};
	sequenceFlow3.caseValue = noCase2;   // Note: for this property a default value is defined.

	var noCase3 = microflows.NoCase.create(model);

	var sequenceFlow4 = microflows.SequenceFlow.create(model);
	sequenceFlow4.originConnectionIndex = 1;
	sequenceFlow4.destinationConnectionIndex = 3;
	sequenceFlow4.originBezierVector = {"width":30,"height":0};
	sequenceFlow4.destinationBezierVector = {"width":-30,"height":0};
	sequenceFlow4.caseValue = noCase3;   // Note: for this property a default value is defined.

	var enumerationCase2 = microflows.EnumerationCase.create(model);
	enumerationCase2.value = "false";

	var sequenceFlow5 = microflows.SequenceFlow.create(model);
	sequenceFlow5.originConnectionIndex = 2;
	sequenceFlow5.originBezierVector = {"width":0,"height":15};
	sequenceFlow5.destinationBezierVector = {"width":0,"height":-30};
	sequenceFlow5.caseValue = enumerationCase2;   // Note: for this property a default value is defined.

	var noCase4 = microflows.NoCase.create(model);

	var sequenceFlow6 = microflows.SequenceFlow.create(model);
	sequenceFlow6.originConnectionIndex = 2;
	sequenceFlow6.originBezierVector = {"width":0,"height":30};
	sequenceFlow6.destinationBezierVector = {"width":0,"height":-15};
	sequenceFlow6.caseValue = noCase4;   // Note: for this property a default value is defined.

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

	var ch_SetMicroflow1 = microflows.Microflow.createIn(unit);
	ch_SetMicroflow1.name = "Ch_SetMicroflow";
	ch_SetMicroflow1.objectCollection = microflowObjectCollection1;   // Note: for this property a default value is defined.
	ch_SetMicroflow1.flows.push(sequenceFlow1);
	ch_SetMicroflow1.flows.push(sequenceFlow2);
	ch_SetMicroflow1.flows.push(sequenceFlow3);
	ch_SetMicroflow1.flows.push(sequenceFlow4);
	ch_SetMicroflow1.flows.push(sequenceFlow5);
	ch_SetMicroflow1.flows.push(sequenceFlow6);
	ch_SetMicroflow1.microflowReturnType = voidType1;
	ch_SetMicroflow1.applyEntityAccess = true;
	ch_SetMicroflow1.allowedModuleRoles.push(model.findModuleRoleByQualifiedName("ExcelImporter.Configurator"));
	ch_SetMicroflow1.concurrencyErrorMessage = text1;   // Note: for this property a default value is defined.

	sequenceFlow1.origin = startEvent1;
	sequenceFlow1.destination = exclusiveSplit1;

	sequenceFlow2.origin = exclusiveSplit1;
	sequenceFlow2.destination = actionActivity1;

	sequenceFlow3.origin = actionActivity3;
	sequenceFlow3.destination = endEvent2;

	sequenceFlow4.origin = actionActivity1;
	sequenceFlow4.destination = actionActivity3;

	sequenceFlow5.origin = exclusiveSplit1;
	sequenceFlow5.destination = actionActivity2;

	sequenceFlow6.origin = actionActivity2;
	sequenceFlow6.destination = endEvent1;

})