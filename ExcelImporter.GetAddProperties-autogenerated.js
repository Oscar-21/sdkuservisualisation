(function (unit, model) {

	/*
	 * JavaScript code generated by mendixmodelsdk.sdk.extras.JavaScriptSerializer
	 * from unit with id "b93441bd-f4ef-42eb-980b-3ea5398840d8" of type Microflows$Microflow
	 * in working copy "SoccerSquad"
	 * on 20-12-2024.
	 */

	var startEvent1 = microflows.StartEvent.create(model);
	startEvent1.relativeMiddlePoint = {"x":100,"y":200};
	startEvent1.size = {"width":20,"height":20};

	var endEvent1 = microflows.EndEvent.create(model);
	endEvent1.relativeMiddlePoint = {"x":700,"y":200};
	endEvent1.size = {"width":20,"height":20};
	endEvent1.returnValue = "$AddProperties";

	var objectType1 = datatypes.ObjectType.create(model);
	objectType1.entity = model.findEntityByQualifiedName("ExcelImporter.Template");

	var template1 = microflows.MicroflowParameterObject.create(model);
	template1.relativeMiddlePoint = {"x":100,"y":125};
	template1.size = {"width":30,"height":30};
	template1.name = "Template";
	template1.variableType = objectType1;   // Note: for this property a default value is defined.

	var associationRetrieveSource1 = microflows.AssociationRetrieveSource.create(model);
	associationRetrieveSource1.startVariableName = "Template";
	associationRetrieveSource1.association = model.findAssociationBaseByQualifiedName("ExcelImporter.Template_AdditionalProperties");

	var retrieveAction1 = microflows.RetrieveAction.create(model);
	retrieveAction1.retrieveSource = associationRetrieveSource1;   // Note: for this property a default value is defined.
	retrieveAction1.outputVariableName = "AddProperties";

	var actionActivity1 = microflows.ActionActivity.create(model);
	actionActivity1.relativeMiddlePoint = {"x":290,"y":200};
	actionActivity1.size = {"width":270,"height":60};
	actionActivity1.action = retrieveAction1;

	var expressionSplitCondition1 = microflows.ExpressionSplitCondition.create(model);
	expressionSplitCondition1.expression = "$AddProperties != empty";

	var exclusiveSplit1 = microflows.ExclusiveSplit.create(model);
	exclusiveSplit1.relativeMiddlePoint = {"x":505,"y":200};
	exclusiveSplit1.size = {"width":60,"height":40};
	exclusiveSplit1.splitCondition = expressionSplitCondition1;   // Note: for this property a default value is defined.
	exclusiveSplit1.caption = "found?";

	var createObjectAction1 = microflows.CreateObjectAction.create(model);
	createObjectAction1.entity = model.findEntityByQualifiedName("ExcelImporter.AdditionalProperties");
	createObjectAction1.outputVariableName = "NewAdditionalProperties";

	var actionActivity2 = microflows.ActionActivity.create(model);
	actionActivity2.relativeMiddlePoint = {"x":505,"y":340};
	actionActivity2.size = {"width":100,"height":60};
	actionActivity2.action = createObjectAction1;
	actionActivity2.caption = "Create Additional Properties";
	actionActivity2.autoGenerateCaption = false;

	var memberChange1 = microflows.MemberChange.create(model);
	memberChange1.association = model.findAssociationBaseByQualifiedName("ExcelImporter.Template_AdditionalProperties");
	memberChange1.value = "$NewAdditionalProperties";

	var changeObjectAction1 = microflows.ChangeObjectAction.create(model);
	changeObjectAction1.items.push(memberChange1);
	changeObjectAction1.changeVariableName = "Template";

	var actionActivity3 = microflows.ActionActivity.create(model);
	actionActivity3.relativeMiddlePoint = {"x":725,"y":340};
	actionActivity3.size = {"width":100,"height":60};
	actionActivity3.action = changeObjectAction1;
	actionActivity3.caption = "Set the association";
	actionActivity3.autoGenerateCaption = false;

	var memberChange2 = microflows.MemberChange.create(model);
	memberChange2.association = model.findAssociationBaseByQualifiedName("ExcelImporter.Template_AdditionalProperties");
	memberChange2.value = "$Template";

	var changeObjectAction2 = microflows.ChangeObjectAction.create(model);
	changeObjectAction2.items.push(memberChange2);
	changeObjectAction2.changeVariableName = "NewAdditionalProperties";

	var actionActivity4 = microflows.ActionActivity.create(model);
	actionActivity4.relativeMiddlePoint = {"x":615,"y":340};
	actionActivity4.size = {"width":100,"height":60};
	actionActivity4.action = changeObjectAction2;
	actionActivity4.caption = "Set the association";
	actionActivity4.autoGenerateCaption = false;

	var endEvent2 = microflows.EndEvent.create(model);
	endEvent2.relativeMiddlePoint = {"x":895,"y":340};
	endEvent2.size = {"width":20,"height":20};
	endEvent2.returnValue = "$NewAdditionalProperties";

	var microflowObjectCollection1 = microflows.MicroflowObjectCollection.create(model);
	microflowObjectCollection1.objects.push(startEvent1);
	microflowObjectCollection1.objects.push(endEvent1);
	microflowObjectCollection1.objects.push(template1);
	microflowObjectCollection1.objects.push(actionActivity1);
	microflowObjectCollection1.objects.push(exclusiveSplit1);
	microflowObjectCollection1.objects.push(actionActivity2);
	microflowObjectCollection1.objects.push(actionActivity3);
	microflowObjectCollection1.objects.push(actionActivity4);
	microflowObjectCollection1.objects.push(endEvent2);

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

	var enumerationCase1 = microflows.EnumerationCase.create(model);
	enumerationCase1.value = "true";

	var sequenceFlow3 = microflows.SequenceFlow.create(model);
	sequenceFlow3.originConnectionIndex = 1;
	sequenceFlow3.destinationConnectionIndex = 3;
	sequenceFlow3.originBezierVector = {"width":15,"height":0};
	sequenceFlow3.destinationBezierVector = {"width":-15,"height":0};
	sequenceFlow3.caseValue = enumerationCase1;   // Note: for this property a default value is defined.

	var enumerationCase2 = microflows.EnumerationCase.create(model);
	enumerationCase2.value = "false";

	var sequenceFlow4 = microflows.SequenceFlow.create(model);
	sequenceFlow4.originConnectionIndex = 2;
	sequenceFlow4.originBezierVector = {"width":0,"height":15};
	sequenceFlow4.destinationBezierVector = {"width":0,"height":-30};
	sequenceFlow4.caseValue = enumerationCase2;   // Note: for this property a default value is defined.

	var noCase3 = microflows.NoCase.create(model);

	var sequenceFlow5 = microflows.SequenceFlow.create(model);
	sequenceFlow5.originConnectionIndex = 1;
	sequenceFlow5.destinationConnectionIndex = 3;
	sequenceFlow5.originBezierVector = {"width":30,"height":0};
	sequenceFlow5.destinationBezierVector = {"width":-30,"height":0};
	sequenceFlow5.caseValue = noCase3;   // Note: for this property a default value is defined.

	var noCase4 = microflows.NoCase.create(model);

	var sequenceFlow6 = microflows.SequenceFlow.create(model);
	sequenceFlow6.originConnectionIndex = 1;
	sequenceFlow6.destinationConnectionIndex = 3;
	sequenceFlow6.originBezierVector = {"width":30,"height":0};
	sequenceFlow6.destinationBezierVector = {"width":-30,"height":0};
	sequenceFlow6.caseValue = noCase4;   // Note: for this property a default value is defined.

	var noCase5 = microflows.NoCase.create(model);

	var sequenceFlow7 = microflows.SequenceFlow.create(model);
	sequenceFlow7.originConnectionIndex = 1;
	sequenceFlow7.destinationConnectionIndex = 3;
	sequenceFlow7.originBezierVector = {"width":30,"height":0};
	sequenceFlow7.destinationBezierVector = {"width":-15,"height":0};
	sequenceFlow7.caseValue = noCase5;   // Note: for this property a default value is defined.

	var objectType2 = datatypes.ObjectType.create(model);
	objectType2.entity = model.findEntityByQualifiedName("ExcelImporter.AdditionalProperties");

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

	var getAddProperties1 = microflows.Microflow.createIn(unit);
	getAddProperties1.name = "GetAddProperties";
	getAddProperties1.objectCollection = microflowObjectCollection1;   // Note: for this property a default value is defined.
	getAddProperties1.flows.push(sequenceFlow1);
	getAddProperties1.flows.push(sequenceFlow2);
	getAddProperties1.flows.push(sequenceFlow3);
	getAddProperties1.flows.push(sequenceFlow4);
	getAddProperties1.flows.push(sequenceFlow5);
	getAddProperties1.flows.push(sequenceFlow6);
	getAddProperties1.flows.push(sequenceFlow7);
	getAddProperties1.microflowReturnType = objectType2;
	getAddProperties1.concurrencyErrorMessage = text1;   // Note: for this property a default value is defined.

	sequenceFlow1.origin = startEvent1;
	sequenceFlow1.destination = actionActivity1;

	sequenceFlow2.origin = actionActivity1;
	sequenceFlow2.destination = exclusiveSplit1;

	sequenceFlow3.origin = exclusiveSplit1;
	sequenceFlow3.destination = endEvent1;

	sequenceFlow4.origin = exclusiveSplit1;
	sequenceFlow4.destination = actionActivity2;

	sequenceFlow5.origin = actionActivity2;
	sequenceFlow5.destination = actionActivity4;

	sequenceFlow6.origin = actionActivity4;
	sequenceFlow6.destination = actionActivity3;

	sequenceFlow7.origin = actionActivity3;
	sequenceFlow7.destination = endEvent2;

})