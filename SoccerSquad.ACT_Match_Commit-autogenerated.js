(function (unit, model) {

	/*
	 * JavaScript code generated by mendixmodelsdk.sdk.extras.JavaScriptSerializer
	 * from unit with id "7f0a7eac-bbdc-4e12-af2d-73aa006a99d5" of type Microflows$Microflow
	 * in working copy "SoccerSquad"
	 * on 20-12-2024.
	 */

	var startEvent1 = microflows.StartEvent.create(model);
	startEvent1.relativeMiddlePoint = {"x":-80,"y":200};
	startEvent1.size = {"width":20,"height":20};

	var endEvent1 = microflows.EndEvent.create(model);
	endEvent1.relativeMiddlePoint = {"x":930,"y":200};
	endEvent1.size = {"width":20,"height":20};

	var objectType1 = datatypes.ObjectType.create(model);
	objectType1.entity = model.findEntityByQualifiedName("SoccerSquad.Match");

	var match1 = microflows.MicroflowParameterObject.create(model);
	match1.relativeMiddlePoint = {"x":-80,"y":0};
	match1.size = {"width":30,"height":30};
	match1.name = "Match";
	match1.variableType = objectType1;   // Note: for this property a default value is defined.

	var expressionSplitCondition1 = microflows.ExpressionSplitCondition.create(model);
	expressionSplitCondition1.expression = "$Commit";

	var exclusiveSplit1 = microflows.ExclusiveSplit.create(model);
	exclusiveSplit1.relativeMiddlePoint = {"x":235,"y":200};
	exclusiveSplit1.size = {"width":90,"height":60};
	exclusiveSplit1.splitCondition = expressionSplitCondition1;   // Note: for this property a default value is defined.
	exclusiveSplit1.caption = "Commit?";

	var commitAction1 = microflows.CommitAction.create(model);
	commitAction1.commitVariableName = "Match";
	commitAction1.refreshInClient = true;

	var actionActivity1 = microflows.ActionActivity.create(model);
	actionActivity1.relativeMiddlePoint = {"x":625,"y":200};
	actionActivity1.size = {"width":120,"height":60};
	actionActivity1.action = commitAction1;

	var closeFormAction1 = microflows.CloseFormAction.create(model);

	var actionActivity2 = microflows.ActionActivity.create(model);
	actionActivity2.relativeMiddlePoint = {"x":810,"y":200};
	actionActivity2.size = {"width":120,"height":60};
	actionActivity2.action = closeFormAction1;

	var microflowCallParameterMapping1 = microflows.MicroflowCallParameterMapping.create(model);
	// Note: this is an unsupported internal property of the Model SDK which is subject to change.
	microflowCallParameterMapping1.__parameter.updateWithRawValue("SoccerSquad.SUB_Match_Validate.Match");
	microflowCallParameterMapping1.argument = "$Match";

	var microflowCall1 = microflows.MicroflowCall.create(model);
	microflowCall1.microflow = model.findMicroflowByQualifiedName("SoccerSquad.SUB_Match_Validate");
	microflowCall1.parameterMappings.push(microflowCallParameterMapping1);

	var microflowCallAction1 = microflows.MicroflowCallAction.create(model);
	microflowCallAction1.microflowCall = microflowCall1;   // Note: for this property a default value is defined.
	microflowCallAction1.outputVariableName = "Commit";

	var actionActivity3 = microflows.ActionActivity.create(model);
	actionActivity3.relativeMiddlePoint = {"x":70,"y":200};
	actionActivity3.size = {"width":140,"height":60};
	actionActivity3.action = microflowCallAction1;

	var endEvent2 = microflows.EndEvent.create(model);
	endEvent2.relativeMiddlePoint = {"x":235,"y":330};
	endEvent2.size = {"width":20,"height":20};

	var microflowCallParameterMapping2 = microflows.MicroflowCallParameterMapping.create(model);
	// Note: this is an unsupported internal property of the Model SDK which is subject to change.
	microflowCallParameterMapping2.__parameter.updateWithRawValue("SoccerSquad.SUB_Match_SetStadium.Match");
	microflowCallParameterMapping2.argument = "$Match";

	var microflowCall2 = microflows.MicroflowCall.create(model);
	microflowCall2.microflow = model.findMicroflowByQualifiedName("SoccerSquad.SUB_Match_SetStadium");
	microflowCall2.parameterMappings.push(microflowCallParameterMapping2);

	var microflowCallAction2 = microflows.MicroflowCallAction.create(model);
	microflowCallAction2.microflowCall = microflowCall2;   // Note: for this property a default value is defined.

	var actionActivity4 = microflows.ActionActivity.create(model);
	actionActivity4.relativeMiddlePoint = {"x":430,"y":200};
	actionActivity4.size = {"width":160,"height":60};
	actionActivity4.action = microflowCallAction2;

	var microflowObjectCollection1 = microflows.MicroflowObjectCollection.create(model);
	microflowObjectCollection1.objects.push(startEvent1);
	microflowObjectCollection1.objects.push(endEvent1);
	microflowObjectCollection1.objects.push(match1);
	microflowObjectCollection1.objects.push(exclusiveSplit1);
	microflowObjectCollection1.objects.push(actionActivity1);
	microflowObjectCollection1.objects.push(actionActivity2);
	microflowObjectCollection1.objects.push(actionActivity3);
	microflowObjectCollection1.objects.push(endEvent2);
	microflowObjectCollection1.objects.push(actionActivity4);

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
	sequenceFlow3.destinationBezierVector = {"width":-30,"height":0};
	sequenceFlow3.caseValue = enumerationCase1;   // Note: for this property a default value is defined.

	var noCase3 = microflows.NoCase.create(model);

	var sequenceFlow4 = microflows.SequenceFlow.create(model);
	sequenceFlow4.originConnectionIndex = 1;
	sequenceFlow4.destinationConnectionIndex = 3;
	sequenceFlow4.originBezierVector = {"width":30,"height":0};
	sequenceFlow4.destinationBezierVector = {"width":-30,"height":0};
	sequenceFlow4.caseValue = noCase3;   // Note: for this property a default value is defined.

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
	sequenceFlow6.originBezierVector = {"width":30,"height":0};
	sequenceFlow6.destinationBezierVector = {"width":-15,"height":0};
	sequenceFlow6.caseValue = noCase5;   // Note: for this property a default value is defined.

	var enumerationCase2 = microflows.EnumerationCase.create(model);
	enumerationCase2.value = "false";

	var sequenceFlow7 = microflows.SequenceFlow.create(model);
	sequenceFlow7.originConnectionIndex = 2;
	sequenceFlow7.originBezierVector = {"width":0,"height":15};
	sequenceFlow7.destinationBezierVector = {"width":0,"height":-15};
	sequenceFlow7.caseValue = enumerationCase2;   // Note: for this property a default value is defined.

	var voidType1 = datatypes.VoidType.create(model);

	var translation1 = texts.Translation.create(model);
	translation1.languageCode = "en_US";

	var text1 = texts.Text.create(model);
	text1.translations.push(translation1);

	var aCT_Match_Commit1 = microflows.Microflow.createIn(unit);
	aCT_Match_Commit1.name = "ACT_Match_Commit";
	aCT_Match_Commit1.objectCollection = microflowObjectCollection1;   // Note: for this property a default value is defined.
	aCT_Match_Commit1.flows.push(sequenceFlow1);
	aCT_Match_Commit1.flows.push(sequenceFlow2);
	aCT_Match_Commit1.flows.push(sequenceFlow3);
	aCT_Match_Commit1.flows.push(sequenceFlow4);
	aCT_Match_Commit1.flows.push(sequenceFlow5);
	aCT_Match_Commit1.flows.push(sequenceFlow6);
	aCT_Match_Commit1.flows.push(sequenceFlow7);
	aCT_Match_Commit1.microflowReturnType = voidType1;
	aCT_Match_Commit1.allowedModuleRoles.push(model.findModuleRoleByQualifiedName("SoccerSquad.Administrator"));
	aCT_Match_Commit1.allowedModuleRoles.push(model.findModuleRoleByQualifiedName("SoccerSquad.TeamMember"));
	aCT_Match_Commit1.concurrencyErrorMessage = text1;   // Note: for this property a default value is defined.

	sequenceFlow1.origin = startEvent1;
	sequenceFlow1.destination = actionActivity3;

	sequenceFlow2.origin = actionActivity3;
	sequenceFlow2.destination = exclusiveSplit1;

	sequenceFlow3.origin = exclusiveSplit1;
	sequenceFlow3.destination = actionActivity4;

	sequenceFlow4.origin = actionActivity4;
	sequenceFlow4.destination = actionActivity1;

	sequenceFlow5.origin = actionActivity1;
	sequenceFlow5.destination = actionActivity2;

	sequenceFlow6.origin = actionActivity2;
	sequenceFlow6.destination = endEvent1;

	sequenceFlow7.origin = exclusiveSplit1;
	sequenceFlow7.destination = endEvent2;

})