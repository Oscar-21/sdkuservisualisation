(function (unit, model) {

	/*
	 * JavaScript code generated by mendixmodelsdk.sdk.extras.JavaScriptSerializer
	 * from unit with id "611578bb-4ce6-4ad4-9b30-484d5bef44ce" of type Microflows$Microflow
	 * in working copy "SoccerSquad"
	 * on 20-12-2024.
	 */

	var startEvent1 = microflows.StartEvent.create(model);
	startEvent1.relativeMiddlePoint = {"x":50,"y":165};
	startEvent1.size = {"width":20,"height":20};

	var endEvent1 = microflows.EndEvent.create(model);
	endEvent1.relativeMiddlePoint = {"x":1365,"y":165};
	endEvent1.size = {"width":20,"height":20};
	endEvent1.returnValue = "$Commit";

	var objectType1 = datatypes.ObjectType.create(model);
	objectType1.entity = model.findEntityByQualifiedName("SoccerSquad.Match");

	var match1 = microflows.MicroflowParameterObject.create(model);
	match1.relativeMiddlePoint = {"x":50,"y":5};
	match1.size = {"width":30,"height":30};
	match1.name = "Match";
	match1.variableType = objectType1;   // Note: for this property a default value is defined.

	var booleanType1 = datatypes.BooleanType.create(model);

	var createVariableAction1 = microflows.CreateVariableAction.create(model);
	createVariableAction1.variableName = "Commit";
	createVariableAction1.variableType = booleanType1;   // Note: for this property a default value is defined.
	createVariableAction1.initialValue = "true";

	var actionActivity1 = microflows.ActionActivity.create(model);
	actionActivity1.relativeMiddlePoint = {"x":190,"y":165};
	actionActivity1.size = {"width":120,"height":60};
	actionActivity1.action = createVariableAction1;

	var expressionSplitCondition1 = microflows.ExpressionSplitCondition.create(model);
	expressionSplitCondition1.expression = "$Match/SoccerSquad.Match_TeamHome != empty";

	var exclusiveSplit1 = microflows.ExclusiveSplit.create(model);
	exclusiveSplit1.relativeMiddlePoint = {"x":365,"y":165};
	exclusiveSplit1.size = {"width":90,"height":60};
	exclusiveSplit1.splitCondition = expressionSplitCondition1;   // Note: for this property a default value is defined.
	exclusiveSplit1.caption = "Home team set?";

	var translation1 = texts.Translation.create(model);
	translation1.languageCode = "en_US";
	translation1.text = "Please select a team";

	var text1 = texts.Text.create(model);
	text1.translations.push(translation1);

	var textTemplate1 = microflows.TextTemplate.create(model);
	textTemplate1.text = text1;   // Note: for this property a default value is defined.

	var validationFeedbackAction1 = microflows.ValidationFeedbackAction.create(model);
	validationFeedbackAction1.feedbackTemplate = textTemplate1;   // Note: for this property a default value is defined.
	validationFeedbackAction1.objectVariableName = "Match";
	validationFeedbackAction1.association = model.findAssociationBaseByQualifiedName("SoccerSquad.Match_TeamHome");

	var actionActivity2 = microflows.ActionActivity.create(model);
	actionActivity2.relativeMiddlePoint = {"x":365,"y":410};
	actionActivity2.size = {"width":120,"height":60};
	actionActivity2.action = validationFeedbackAction1;

	var changeVariableAction1 = microflows.ChangeVariableAction.create(model);
	changeVariableAction1.changeVariableName = "Commit";
	changeVariableAction1.value = "false";

	var actionActivity3 = microflows.ActionActivity.create(model);
	actionActivity3.relativeMiddlePoint = {"x":365,"y":295};
	actionActivity3.size = {"width":120,"height":60};
	actionActivity3.action = changeVariableAction1;

	var translation2 = texts.Translation.create(model);
	translation2.languageCode = "en_US";
	translation2.text = "Please select a team";

	var text2 = texts.Text.create(model);
	text2.translations.push(translation2);

	var textTemplate2 = microflows.TextTemplate.create(model);
	textTemplate2.text = text2;   // Note: for this property a default value is defined.

	var validationFeedbackAction2 = microflows.ValidationFeedbackAction.create(model);
	validationFeedbackAction2.feedbackTemplate = textTemplate2;   // Note: for this property a default value is defined.
	validationFeedbackAction2.objectVariableName = "Match";
	validationFeedbackAction2.attribute = model.findAttributeByQualifiedName("SoccerSquad.Match.ScoreAwayTeam");

	var actionActivity4 = microflows.ActionActivity.create(model);
	actionActivity4.relativeMiddlePoint = {"x":700,"y":410};
	actionActivity4.size = {"width":120,"height":60};
	actionActivity4.action = validationFeedbackAction2;

	var changeVariableAction2 = microflows.ChangeVariableAction.create(model);
	changeVariableAction2.changeVariableName = "Commit";
	changeVariableAction2.value = "false";

	var actionActivity5 = microflows.ActionActivity.create(model);
	actionActivity5.relativeMiddlePoint = {"x":700,"y":295};
	actionActivity5.size = {"width":120,"height":60};
	actionActivity5.action = changeVariableAction2;

	var translation3 = texts.Translation.create(model);
	translation3.languageCode = "en_US";
	translation3.text = "Please select a date";

	var text3 = texts.Text.create(model);
	text3.translations.push(translation3);

	var textTemplate3 = microflows.TextTemplate.create(model);
	textTemplate3.text = text3;   // Note: for this property a default value is defined.

	var validationFeedbackAction3 = microflows.ValidationFeedbackAction.create(model);
	validationFeedbackAction3.feedbackTemplate = textTemplate3;   // Note: for this property a default value is defined.
	validationFeedbackAction3.objectVariableName = "Match";
	validationFeedbackAction3.attribute = model.findAttributeByQualifiedName("SoccerSquad.Match.StartDateTime");

	var actionActivity6 = microflows.ActionActivity.create(model);
	actionActivity6.relativeMiddlePoint = {"x":1035,"y":410};
	actionActivity6.size = {"width":120,"height":60};
	actionActivity6.action = validationFeedbackAction3;

	var changeVariableAction3 = microflows.ChangeVariableAction.create(model);
	changeVariableAction3.changeVariableName = "Commit";
	changeVariableAction3.value = "false";

	var actionActivity7 = microflows.ActionActivity.create(model);
	actionActivity7.relativeMiddlePoint = {"x":1035,"y":295};
	actionActivity7.size = {"width":120,"height":60};
	actionActivity7.action = changeVariableAction3;

	var expressionSplitCondition2 = microflows.ExpressionSplitCondition.create(model);
	expressionSplitCondition2.expression = "$Match/SoccerSquad.Match_TeamAway != empty";

	var exclusiveSplit2 = microflows.ExclusiveSplit.create(model);
	exclusiveSplit2.relativeMiddlePoint = {"x":700,"y":165};
	exclusiveSplit2.size = {"width":90,"height":60};
	exclusiveSplit2.splitCondition = expressionSplitCondition2;   // Note: for this property a default value is defined.
	exclusiveSplit2.caption = "Away team set?";

	var expressionSplitCondition3 = microflows.ExpressionSplitCondition.create(model);
	expressionSplitCondition3.expression = "trimToHours($Match/StartDateTime) != empty";

	var exclusiveSplit3 = microflows.ExclusiveSplit.create(model);
	exclusiveSplit3.relativeMiddlePoint = {"x":1035,"y":165};
	exclusiveSplit3.size = {"width":90,"height":60};
	exclusiveSplit3.splitCondition = expressionSplitCondition3;   // Note: for this property a default value is defined.
	exclusiveSplit3.caption = "Date set?";

	var exclusiveMerge1 = microflows.ExclusiveMerge.create(model);
	exclusiveMerge1.relativeMiddlePoint = {"x":540,"y":165};
	exclusiveMerge1.size = {"width":90,"height":60};

	var exclusiveMerge2 = microflows.ExclusiveMerge.create(model);
	exclusiveMerge2.relativeMiddlePoint = {"x":870,"y":165};
	exclusiveMerge2.size = {"width":90,"height":60};

	var exclusiveMerge3 = microflows.ExclusiveMerge.create(model);
	exclusiveMerge3.relativeMiddlePoint = {"x":1205,"y":165};
	exclusiveMerge3.size = {"width":90,"height":60};

	var microflowObjectCollection1 = microflows.MicroflowObjectCollection.create(model);
	microflowObjectCollection1.objects.push(startEvent1);
	microflowObjectCollection1.objects.push(endEvent1);
	microflowObjectCollection1.objects.push(match1);
	microflowObjectCollection1.objects.push(actionActivity1);
	microflowObjectCollection1.objects.push(exclusiveSplit1);
	microflowObjectCollection1.objects.push(actionActivity2);
	microflowObjectCollection1.objects.push(actionActivity3);
	microflowObjectCollection1.objects.push(actionActivity4);
	microflowObjectCollection1.objects.push(actionActivity5);
	microflowObjectCollection1.objects.push(actionActivity6);
	microflowObjectCollection1.objects.push(actionActivity7);
	microflowObjectCollection1.objects.push(exclusiveSplit2);
	microflowObjectCollection1.objects.push(exclusiveSplit3);
	microflowObjectCollection1.objects.push(exclusiveMerge1);
	microflowObjectCollection1.objects.push(exclusiveMerge2);
	microflowObjectCollection1.objects.push(exclusiveMerge3);

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
	enumerationCase1.value = "false";

	var sequenceFlow3 = microflows.SequenceFlow.create(model);
	sequenceFlow3.originConnectionIndex = 2;
	sequenceFlow3.originBezierVector = {"width":0,"height":15};
	sequenceFlow3.destinationBezierVector = {"width":0,"height":-30};
	sequenceFlow3.caseValue = enumerationCase1;   // Note: for this property a default value is defined.

	var noCase3 = microflows.NoCase.create(model);

	var sequenceFlow4 = microflows.SequenceFlow.create(model);
	sequenceFlow4.originConnectionIndex = 2;
	sequenceFlow4.originBezierVector = {"width":0,"height":30};
	sequenceFlow4.destinationBezierVector = {"width":0,"height":-30};
	sequenceFlow4.caseValue = noCase3;   // Note: for this property a default value is defined.

	var enumerationCase2 = microflows.EnumerationCase.create(model);
	enumerationCase2.value = "true";

	var sequenceFlow5 = microflows.SequenceFlow.create(model);
	sequenceFlow5.originConnectionIndex = 1;
	sequenceFlow5.destinationConnectionIndex = 3;
	sequenceFlow5.originBezierVector = {"width":15,"height":0};
	sequenceFlow5.destinationBezierVector = {"width":-15,"height":0};
	sequenceFlow5.caseValue = enumerationCase2;   // Note: for this property a default value is defined.

	var noCase4 = microflows.NoCase.create(model);

	var sequenceFlow6 = microflows.SequenceFlow.create(model);
	sequenceFlow6.originConnectionIndex = 2;
	sequenceFlow6.originBezierVector = {"width":0,"height":30};
	sequenceFlow6.destinationBezierVector = {"width":0,"height":-30};
	sequenceFlow6.caseValue = noCase4;   // Note: for this property a default value is defined.

	var noCase5 = microflows.NoCase.create(model);

	var sequenceFlow7 = microflows.SequenceFlow.create(model);
	sequenceFlow7.originConnectionIndex = 2;
	sequenceFlow7.originBezierVector = {"width":0,"height":30};
	sequenceFlow7.destinationBezierVector = {"width":0,"height":-30};
	sequenceFlow7.caseValue = noCase5;   // Note: for this property a default value is defined.

	var enumerationCase3 = microflows.EnumerationCase.create(model);
	enumerationCase3.value = "true";

	var sequenceFlow8 = microflows.SequenceFlow.create(model);
	sequenceFlow8.originConnectionIndex = 1;
	sequenceFlow8.destinationConnectionIndex = 3;
	sequenceFlow8.originBezierVector = {"width":15,"height":0};
	sequenceFlow8.destinationBezierVector = {"width":-15,"height":0};
	sequenceFlow8.caseValue = enumerationCase3;   // Note: for this property a default value is defined.

	var enumerationCase4 = microflows.EnumerationCase.create(model);
	enumerationCase4.value = "true";

	var sequenceFlow9 = microflows.SequenceFlow.create(model);
	sequenceFlow9.originConnectionIndex = 1;
	sequenceFlow9.destinationConnectionIndex = 3;
	sequenceFlow9.originBezierVector = {"width":15,"height":0};
	sequenceFlow9.destinationBezierVector = {"width":-15,"height":0};
	sequenceFlow9.caseValue = enumerationCase4;   // Note: for this property a default value is defined.

	var noCase6 = microflows.NoCase.create(model);

	var sequenceFlow10 = microflows.SequenceFlow.create(model);
	sequenceFlow10.originConnectionIndex = 1;
	sequenceFlow10.destinationConnectionIndex = 3;
	sequenceFlow10.originBezierVector = {"width":15,"height":0};
	sequenceFlow10.destinationBezierVector = {"width":-15,"height":0};
	sequenceFlow10.caseValue = noCase6;   // Note: for this property a default value is defined.

	var noCase7 = microflows.NoCase.create(model);

	var sequenceFlow11 = microflows.SequenceFlow.create(model);
	sequenceFlow11.originConnectionIndex = 1;
	sequenceFlow11.destinationConnectionIndex = 3;
	sequenceFlow11.originBezierVector = {"width":15,"height":0};
	sequenceFlow11.destinationBezierVector = {"width":-15,"height":0};
	sequenceFlow11.caseValue = noCase7;   // Note: for this property a default value is defined.

	var enumerationCase5 = microflows.EnumerationCase.create(model);
	enumerationCase5.value = "false";

	var sequenceFlow12 = microflows.SequenceFlow.create(model);
	sequenceFlow12.originConnectionIndex = 2;
	sequenceFlow12.originBezierVector = {"width":0,"height":15};
	sequenceFlow12.destinationBezierVector = {"width":0,"height":-30};
	sequenceFlow12.caseValue = enumerationCase5;   // Note: for this property a default value is defined.

	var enumerationCase6 = microflows.EnumerationCase.create(model);
	enumerationCase6.value = "false";

	var sequenceFlow13 = microflows.SequenceFlow.create(model);
	sequenceFlow13.originConnectionIndex = 2;
	sequenceFlow13.originBezierVector = {"width":0,"height":15};
	sequenceFlow13.destinationBezierVector = {"width":0,"height":-30};
	sequenceFlow13.caseValue = enumerationCase6;   // Note: for this property a default value is defined.

	var noCase8 = microflows.NoCase.create(model);

	var sequenceFlow14 = microflows.SequenceFlow.create(model);
	sequenceFlow14.originConnectionIndex = 1;
	sequenceFlow14.destinationConnectionIndex = 2;
	sequenceFlow14.originBezierVector = {"width":30,"height":0};
	sequenceFlow14.destinationBezierVector = {"width":0,"height":15};
	sequenceFlow14.caseValue = noCase8;   // Note: for this property a default value is defined.

	var noCase9 = microflows.NoCase.create(model);

	var sequenceFlow15 = microflows.SequenceFlow.create(model);
	sequenceFlow15.originConnectionIndex = 1;
	sequenceFlow15.destinationConnectionIndex = 2;
	sequenceFlow15.originBezierVector = {"width":30,"height":0};
	sequenceFlow15.destinationBezierVector = {"width":0,"height":15};
	sequenceFlow15.caseValue = noCase9;   // Note: for this property a default value is defined.

	var noCase10 = microflows.NoCase.create(model);

	var sequenceFlow16 = microflows.SequenceFlow.create(model);
	sequenceFlow16.originConnectionIndex = 1;
	sequenceFlow16.destinationConnectionIndex = 3;
	sequenceFlow16.originBezierVector = {"width":15,"height":0};
	sequenceFlow16.destinationBezierVector = {"width":-15,"height":0};
	sequenceFlow16.caseValue = noCase10;   // Note: for this property a default value is defined.

	var noCase11 = microflows.NoCase.create(model);

	var sequenceFlow17 = microflows.SequenceFlow.create(model);
	sequenceFlow17.originConnectionIndex = 1;
	sequenceFlow17.destinationConnectionIndex = 2;
	sequenceFlow17.originBezierVector = {"width":30,"height":0};
	sequenceFlow17.destinationBezierVector = {"width":0,"height":15};
	sequenceFlow17.caseValue = noCase11;   // Note: for this property a default value is defined.

	var booleanType2 = datatypes.BooleanType.create(model);

	var translation4 = texts.Translation.create(model);
	translation4.languageCode = "en_US";

	var text4 = texts.Text.create(model);
	text4.translations.push(translation4);

	var sUB_Match_Validate1 = microflows.Microflow.createIn(unit);
	sUB_Match_Validate1.name = "SUB_Match_Validate";
	sUB_Match_Validate1.objectCollection = microflowObjectCollection1;   // Note: for this property a default value is defined.
	sUB_Match_Validate1.flows.push(sequenceFlow1);
	sUB_Match_Validate1.flows.push(sequenceFlow2);
	sUB_Match_Validate1.flows.push(sequenceFlow3);
	sUB_Match_Validate1.flows.push(sequenceFlow4);
	sUB_Match_Validate1.flows.push(sequenceFlow5);
	sUB_Match_Validate1.flows.push(sequenceFlow6);
	sUB_Match_Validate1.flows.push(sequenceFlow7);
	sUB_Match_Validate1.flows.push(sequenceFlow8);
	sUB_Match_Validate1.flows.push(sequenceFlow9);
	sUB_Match_Validate1.flows.push(sequenceFlow10);
	sUB_Match_Validate1.flows.push(sequenceFlow11);
	sUB_Match_Validate1.flows.push(sequenceFlow12);
	sUB_Match_Validate1.flows.push(sequenceFlow13);
	sUB_Match_Validate1.flows.push(sequenceFlow14);
	sUB_Match_Validate1.flows.push(sequenceFlow15);
	sUB_Match_Validate1.flows.push(sequenceFlow16);
	sUB_Match_Validate1.flows.push(sequenceFlow17);
	sUB_Match_Validate1.microflowReturnType = booleanType2;
	sUB_Match_Validate1.concurrencyErrorMessage = text4;   // Note: for this property a default value is defined.

	sequenceFlow1.origin = startEvent1;
	sequenceFlow1.destination = actionActivity1;

	sequenceFlow2.origin = actionActivity1;
	sequenceFlow2.destination = exclusiveSplit1;

	sequenceFlow3.origin = exclusiveSplit1;
	sequenceFlow3.destination = actionActivity3;

	sequenceFlow4.origin = actionActivity3;
	sequenceFlow4.destination = actionActivity2;

	sequenceFlow5.origin = exclusiveSplit1;
	sequenceFlow5.destination = exclusiveMerge1;

	sequenceFlow6.origin = actionActivity5;
	sequenceFlow6.destination = actionActivity4;

	sequenceFlow7.origin = actionActivity7;
	sequenceFlow7.destination = actionActivity6;

	sequenceFlow8.origin = exclusiveSplit2;
	sequenceFlow8.destination = exclusiveMerge2;

	sequenceFlow9.origin = exclusiveSplit3;
	sequenceFlow9.destination = exclusiveMerge3;

	sequenceFlow10.origin = exclusiveMerge1;
	sequenceFlow10.destination = exclusiveSplit2;

	sequenceFlow11.origin = exclusiveMerge2;
	sequenceFlow11.destination = exclusiveSplit3;

	sequenceFlow12.origin = exclusiveSplit2;
	sequenceFlow12.destination = actionActivity5;

	sequenceFlow13.origin = exclusiveSplit3;
	sequenceFlow13.destination = actionActivity7;

	sequenceFlow14.origin = actionActivity2;
	sequenceFlow14.destination = exclusiveMerge1;

	sequenceFlow15.origin = actionActivity4;
	sequenceFlow15.destination = exclusiveMerge2;

	sequenceFlow16.origin = exclusiveMerge3;
	sequenceFlow16.destination = endEvent1;

	sequenceFlow17.origin = actionActivity6;
	sequenceFlow17.destination = exclusiveMerge3;

})