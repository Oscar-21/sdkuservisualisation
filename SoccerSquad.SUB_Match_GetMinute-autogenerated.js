
(function (unit, model) {

	/*
	 * JavaScript code generated by mendixmodelsdk.sdk.extras.JavaScriptSerializer
	 * from unit with id "ff21d35e-b9cf-44ce-a326-c6d80e78872a" of type Microflows$Microflow
	 * in working copy "SoccerSquad"
	 * on 20-12-2024.
	 */

	var startEvent1 = microflows.StartEvent.create(model);
	startEvent1.relativeMiddlePoint = {"x":95,"y":200};
	startEvent1.size = {"width":20,"height":20};

	var endEvent1 = microflows.EndEvent.create(model);
	endEvent1.relativeMiddlePoint = {"x":730,"y":200};
	endEvent1.size = {"width":20,"height":20};
	endEvent1.returnValue = "$Minute";

	var objectType1 = datatypes.ObjectType.create(model);
	objectType1.entity = model.findEntityByQualifiedName("SoccerSquad.Match");

	var match1 = microflows.MicroflowParameterObject.create(model);
	match1.relativeMiddlePoint = {"x":95,"y":35};
	match1.size = {"width":30,"height":30};
	match1.name = "Match";
	match1.variableType = objectType1;   // Note: for this property a default value is defined.

	var integerType1 = datatypes.IntegerType.create(model);

	var createVariableAction1 = microflows.CreateVariableAction.create(model);
	createVariableAction1.variableName = "Minute";
	createVariableAction1.variableType = integerType1;   // Note: for this property a default value is defined.
	createVariableAction1.initialValue = "round(minutesBetween($Match/StartDateTime, [%CurrentDateTime%]))\n";

	var actionActivity1 = microflows.ActionActivity.create(model);
	actionActivity1.relativeMiddlePoint = {"x":235,"y":200};
	actionActivity1.size = {"width":120,"height":60};
	actionActivity1.action = createVariableAction1;

	var expressionSplitCondition1 = microflows.ExpressionSplitCondition.create(model);
	expressionSplitCondition1.expression = "$Minute < 60\n";

	// var exclusiveSplit1 = microflows.ExclusiveSplit.create(model);
	exclusiveSplit1.relativeMiddlePoint = {"x":420,"y":200};
	exclusiveSplit1.size = {"width":90,"height":60};
	exclusiveSplit1.splitCondition = expressionSplitCondition1;   // Note: for this property a default value is defined.
	exclusiveSplit1.caption = "Before halftime?";

	var changeVariableAction1 = microflows.ChangeVariableAction.create(model);
	changeVariableAction1.changeVariableName = "Minute";
	changeVariableAction1.value = "$Minute - 15";

	var actionActivity2 = microflows.ActionActivity.create(model);
	actionActivity2.relativeMiddlePoint = {"x":420,"y":335};
	actionActivity2.size = {"width":120,"height":60};
	actionActivity2.action = changeVariableAction1;

	var exclusiveMerge1 = microflows.ExclusiveMerge.create(model);
	exclusiveMerge1.relativeMiddlePoint = {"x":605,"y":200};
	exclusiveMerge1.size = {"width":90,"height":60};

	var microflowObjectCollection1 = microflows.MicroflowObjectCollection.create(model);
	microflowObjectCollection1.objects.push(startEvent1);
	microflowObjectCollection1.objects.push(endEvent1);
	microflowObjectCollection1.objects.push(match1);
	microflowObjectCollection1.objects.push(actionActivity1);
	microflowObjectCollection1.objects.push(exclusiveSplit1);
	microflowObjectCollection1.objects.push(actionActivity2);
	microflowObjectCollection1.objects.push(exclusiveMerge1);

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
	sequenceFlow5.originBezierVector = {"width":15,"height":0};
	sequenceFlow5.destinationBezierVector = {"width":-15,"height":0};
	sequenceFlow5.caseValue = noCase3;   // Note: for this property a default value is defined.

	var noCase4 = microflows.NoCase.create(model);

	var sequenceFlow6 = microflows.SequenceFlow.create(model);
	sequenceFlow6.originConnectionIndex = 1;
	sequenceFlow6.destinationConnectionIndex = 2;
	sequenceFlow6.originBezierVector = {"width":30,"height":0};
	sequenceFlow6.destinationBezierVector = {"width":0,"height":15};
	sequenceFlow6.caseValue = noCase4;   // Note: for this property a default value is defined.

	var integerType2 = datatypes.IntegerType.create(model);

	var translation1 = texts.Translation.create(model);
	translation1.languageCode = "en_US";

	var text1 = texts.Text.create(model);
	text1.translations.push(translation1);

	var sUB_Match_GetMinute1 = microflows.Microflow.createIn(unit);
	sUB_Match_GetMinute1.name = "SUB_Match_GetMinute";
	sUB_Match_GetMinute1.objectCollection = microflowObjectCollection1;   // Note: for this property a default value is defined.
	sUB_Match_GetMinute1.flows.push(sequenceFlow1);
	sUB_Match_GetMinute1.flows.push(sequenceFlow2);
	sUB_Match_GetMinute1.flows.push(sequenceFlow3);
	sUB_Match_GetMinute1.flows.push(sequenceFlow4);
	sUB_Match_GetMinute1.flows.push(sequenceFlow5);
	sUB_Match_GetMinute1.flows.push(sequenceFlow6);
	sUB_Match_GetMinute1.microflowReturnType = integerType2;
	sUB_Match_GetMinute1.concurrencyErrorMessage = text1;   // Note: for this property a default value is defined.

	sequenceFlow1.origin = startEvent1;
	sequenceFlow1.destination = actionActivity1;

	sequenceFlow2.origin = actionActivity1;
	sequenceFlow2.destination = exclusiveSplit1;

	sequenceFlow3.origin = exclusiveSplit1;
	sequenceFlow3.destination = exclusiveMerge1;

	sequenceFlow4.origin = exclusiveSplit1;
	sequenceFlow4.destination = actionActivity2;

	sequenceFlow5.origin = exclusiveMerge1;
	sequenceFlow5.destination = endEvent1;

	sequenceFlow6.origin = actionActivity2;
	sequenceFlow6.destination = exclusiveMerge1;

})