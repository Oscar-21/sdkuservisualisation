(function (unit, model) {

	/*
	 * JavaScript code generated by mendixmodelsdk.sdk.extras.JavaScriptSerializer
	 * from unit with id "5be82159-d69d-4eb5-816e-616f04247647" of type Microflows$Microflow
	 * in working copy "SoccerSquad"
	 * on 20-12-2024.
	 */

	var startEvent1 = microflows.StartEvent.create(model);
	startEvent1.relativeMiddlePoint = {"x":-35,"y":200};
	startEvent1.size = {"width":20,"height":20};

	var endEvent1 = microflows.EndEvent.create(model);
	endEvent1.relativeMiddlePoint = {"x":740,"y":200};
	endEvent1.size = {"width":20,"height":20};
	endEvent1.returnValue = "$Product";

	var integerType1 = datatypes.IntegerType.create(model);

	var base1 = microflows.MicroflowParameterObject.create(model);
	base1.relativeMiddlePoint = {"x":-40,"y":115};
	base1.size = {"width":30,"height":30};
	base1.name = "Base";
	base1.variableType = integerType1;   // Note: for this property a default value is defined.

	var integerType2 = datatypes.IntegerType.create(model);

	var x1 = microflows.MicroflowParameterObject.create(model);
	x1.relativeMiddlePoint = {"x":-40,"y":45};
	x1.size = {"width":30,"height":30};
	x1.name = "x";
	x1.variableType = integerType2;   // Note: for this property a default value is defined.

	var integerType3 = datatypes.IntegerType.create(model);

	var createVariableAction1 = microflows.CreateVariableAction.create(model);
	createVariableAction1.variableName = "Comparator";
	createVariableAction1.variableType = integerType3;   // Note: for this property a default value is defined.
	createVariableAction1.initialValue = "$Base";

	var actionActivity1 = microflows.ActionActivity.create(model);
	actionActivity1.relativeMiddlePoint = {"x":235,"y":200};
	actionActivity1.size = {"width":120,"height":60};
	actionActivity1.action = createVariableAction1;

	var integerType4 = datatypes.IntegerType.create(model);

	var createVariableAction2 = microflows.CreateVariableAction.create(model);
	createVariableAction2.variableName = "Product";
	createVariableAction2.variableType = integerType4;   // Note: for this property a default value is defined.
	createVariableAction2.initialValue = "1";

	var actionActivity2 = microflows.ActionActivity.create(model);
	actionActivity2.relativeMiddlePoint = {"x":65,"y":200};
	actionActivity2.size = {"width":120,"height":60};
	actionActivity2.action = createVariableAction2;

	var exclusiveMerge1 = microflows.ExclusiveMerge.create(model);
	exclusiveMerge1.relativeMiddlePoint = {"x":405,"y":200};
	exclusiveMerge1.size = {"width":30,"height":40};

	var changeVariableAction1 = microflows.ChangeVariableAction.create(model);
	changeVariableAction1.changeVariableName = "Comparator";
	changeVariableAction1.value = "$Comparator * $Base";

	var actionActivity3 = microflows.ActionActivity.create(model);
	actionActivity3.relativeMiddlePoint = {"x":405,"y":290};
	actionActivity3.size = {"width":120,"height":40};
	actionActivity3.action = changeVariableAction1;
	actionActivity3.caption = "Product +1";
	actionActivity3.autoGenerateCaption = false;

	var changeVariableAction2 = microflows.ChangeVariableAction.create(model);
	changeVariableAction2.changeVariableName = "Comparator";
	changeVariableAction2.value = "$Comparator * $Base";

	var actionActivity4 = microflows.ActionActivity.create(model);
	actionActivity4.relativeMiddlePoint = {"x":565,"y":290};
	actionActivity4.size = {"width":110,"height":60};
	actionActivity4.action = changeVariableAction2;
	actionActivity4.caption = "Comperator * Base";
	actionActivity4.autoGenerateCaption = false;

	var expressionSplitCondition1 = microflows.ExpressionSplitCondition.create(model);
	expressionSplitCondition1.expression = "$Comparator >= $x";

	var exclusiveSplit1 = microflows.ExclusiveSplit.create(model);
	exclusiveSplit1.relativeMiddlePoint = {"x":565,"y":200};
	exclusiveSplit1.size = {"width":110,"height":50};
	exclusiveSplit1.splitCondition = expressionSplitCondition1;   // Note: for this property a default value is defined.
	exclusiveSplit1.caption = "Comparator = x";

	var microflowObjectCollection1 = microflows.MicroflowObjectCollection.create(model);
	microflowObjectCollection1.objects.push(startEvent1);
	microflowObjectCollection1.objects.push(endEvent1);
	microflowObjectCollection1.objects.push(base1);
	microflowObjectCollection1.objects.push(x1);
	microflowObjectCollection1.objects.push(actionActivity1);
	microflowObjectCollection1.objects.push(actionActivity2);
	microflowObjectCollection1.objects.push(exclusiveMerge1);
	microflowObjectCollection1.objects.push(actionActivity3);
	microflowObjectCollection1.objects.push(actionActivity4);
	microflowObjectCollection1.objects.push(exclusiveSplit1);

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
	sequenceFlow3.originBezierVector = {"width":15,"height":0};
	sequenceFlow3.destinationBezierVector = {"width":-15,"height":0};
	sequenceFlow3.caseValue = noCase3;   // Note: for this property a default value is defined.

	var enumerationCase1 = microflows.EnumerationCase.create(model);
	enumerationCase1.value = "true";

	var sequenceFlow4 = microflows.SequenceFlow.create(model);
	sequenceFlow4.originConnectionIndex = 1;
	sequenceFlow4.destinationConnectionIndex = 3;
	sequenceFlow4.originBezierVector = {"width":15,"height":0};
	sequenceFlow4.destinationBezierVector = {"width":-15,"height":0};
	sequenceFlow4.caseValue = enumerationCase1;   // Note: for this property a default value is defined.

	var noCase4 = microflows.NoCase.create(model);

	var sequenceFlow5 = microflows.SequenceFlow.create(model);
	sequenceFlow5.originConnectionIndex = 1;
	sequenceFlow5.destinationConnectionIndex = 3;
	sequenceFlow5.originBezierVector = {"width":30,"height":0};
	sequenceFlow5.destinationBezierVector = {"width":-30,"height":0};
	sequenceFlow5.caseValue = noCase4;   // Note: for this property a default value is defined.

	var enumerationCase2 = microflows.EnumerationCase.create(model);
	enumerationCase2.value = "false";

	var sequenceFlow6 = microflows.SequenceFlow.create(model);
	sequenceFlow6.originConnectionIndex = 2;
	sequenceFlow6.originBezierVector = {"width":0,"height":15};
	sequenceFlow6.destinationBezierVector = {"width":0,"height":-30};
	sequenceFlow6.caseValue = enumerationCase2;   // Note: for this property a default value is defined.

	var noCase5 = microflows.NoCase.create(model);

	var sequenceFlow7 = microflows.SequenceFlow.create(model);
	sequenceFlow7.originConnectionIndex = 3;
	sequenceFlow7.destinationConnectionIndex = 1;
	sequenceFlow7.originBezierVector = {"width":-30,"height":0};
	sequenceFlow7.destinationBezierVector = {"width":30,"height":0};
	sequenceFlow7.caseValue = noCase5;   // Note: for this property a default value is defined.

	var noCase6 = microflows.NoCase.create(model);

	var sequenceFlow8 = microflows.SequenceFlow.create(model);
	sequenceFlow8.destinationConnectionIndex = 2;
	sequenceFlow8.originBezierVector = {"width":0,"height":-30};
	sequenceFlow8.destinationBezierVector = {"width":0,"height":15};
	sequenceFlow8.caseValue = noCase6;   // Note: for this property a default value is defined.

	var integerType5 = datatypes.IntegerType.create(model);

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

	var log1 = microflows.Microflow.createIn(unit);
	log1.name = "Log";
	log1.objectCollection = microflowObjectCollection1;   // Note: for this property a default value is defined.
	log1.flows.push(sequenceFlow1);
	log1.flows.push(sequenceFlow2);
	log1.flows.push(sequenceFlow3);
	log1.flows.push(sequenceFlow4);
	log1.flows.push(sequenceFlow5);
	log1.flows.push(sequenceFlow6);
	log1.flows.push(sequenceFlow7);
	log1.flows.push(sequenceFlow8);
	log1.microflowReturnType = integerType5;
	log1.concurrencyErrorMessage = text1;   // Note: for this property a default value is defined.

	sequenceFlow1.origin = startEvent1;
	sequenceFlow1.destination = actionActivity2;

	sequenceFlow2.origin = actionActivity1;
	sequenceFlow2.destination = exclusiveMerge1;

	sequenceFlow3.origin = exclusiveMerge1;
	sequenceFlow3.destination = exclusiveSplit1;

	sequenceFlow4.origin = exclusiveSplit1;
	sequenceFlow4.destination = endEvent1;

	sequenceFlow5.origin = actionActivity2;
	sequenceFlow5.destination = actionActivity1;

	sequenceFlow6.origin = exclusiveSplit1;
	sequenceFlow6.destination = actionActivity4;

	sequenceFlow7.origin = actionActivity4;
	sequenceFlow7.destination = actionActivity3;

	sequenceFlow8.origin = actionActivity3;
	sequenceFlow8.destination = exclusiveMerge1;

})