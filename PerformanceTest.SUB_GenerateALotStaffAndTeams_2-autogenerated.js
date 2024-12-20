(function (unit, model) {

	/*
	 * JavaScript code generated by mendixmodelsdk.sdk.extras.JavaScriptSerializer
	 * from unit with id "5d1483be-4094-49b7-89c2-e6da723c74c6" of type Microflows$Microflow
	 * in working copy "SoccerSquad"
	 * on 20-12-2024.
	 */

	var startEvent1 = microflows.StartEvent.create(model);
	startEvent1.relativeMiddlePoint = {"x":-695,"y":200};
	startEvent1.size = {"width":20,"height":20};

	var endEvent1 = microflows.EndEvent.create(model);
	endEvent1.relativeMiddlePoint = {"x":2170,"y":200};
	endEvent1.size = {"width":20,"height":20};

	var integerType1 = datatypes.IntegerType.create(model);

	var createVariableAction1 = microflows.CreateVariableAction.create(model);
	createVariableAction1.variableName = "Sequence";
	createVariableAction1.variableType = integerType1;   // Note: for this property a default value is defined.
	createVariableAction1.initialValue = "100";

	var actionActivity1 = microflows.ActionActivity.create(model);
	actionActivity1.relativeMiddlePoint = {"x":-375,"y":200};
	actionActivity1.size = {"width":120,"height":60};
	actionActivity1.action = createVariableAction1;

	var memberChange1 = microflows.MemberChange.create(model);
	memberChange1.attribute = model.findAttributeByQualifiedName("PerformanceTest.Team_2.Name");
	memberChange1.value = "'Team ' + $Sequence";

	var memberChange2 = microflows.MemberChange.create(model);
	memberChange2.association = model.findAssociationBaseByQualifiedName("PerformanceTest.Team_2_Staff_2");
	memberChange2.value = "$StaffList";

	var createObjectAction1 = microflows.CreateObjectAction.create(model);
	createObjectAction1.items.push(memberChange1);
	createObjectAction1.items.push(memberChange2);
	createObjectAction1.entity = model.findEntityByQualifiedName("PerformanceTest.Team_2");
	createObjectAction1.outputVariableName = "NewTeam";

	var actionActivity2 = microflows.ActionActivity.create(model);
	actionActivity2.relativeMiddlePoint = {"x":725,"y":200};
	actionActivity2.size = {"width":120,"height":60};
	actionActivity2.action = createObjectAction1;

	var expressionSplitCondition1 = microflows.ExpressionSplitCondition.create(model);
	expressionSplitCondition1.expression = "$Sequence = 100000";

	var exclusiveSplit1 = microflows.ExclusiveSplit.create(model);
	exclusiveSplit1.relativeMiddlePoint = {"x":1605,"y":200};
	exclusiveSplit1.size = {"width":90,"height":60};
	exclusiveSplit1.splitCondition = expressionSplitCondition1;   // Note: for this property a default value is defined.
	exclusiveSplit1.caption = "100 teams added?";

	var createListAction1 = microflows.CreateListAction.create(model);
	createListAction1.entity = model.findEntityByQualifiedName("PerformanceTest.Team_2");
	createListAction1.outputVariableName = "TeamList";

	var actionActivity3 = microflows.ActionActivity.create(model);
	actionActivity3.relativeMiddlePoint = {"x":-190,"y":200};
	actionActivity3.size = {"width":120,"height":60};
	actionActivity3.action = createListAction1;

	var changeListAction1 = microflows.ChangeListAction.create(model);
	changeListAction1.changeVariableName = "TeamList";
	changeListAction1.value = "$NewTeam";

	var actionActivity4 = microflows.ActionActivity.create(model);
	actionActivity4.relativeMiddlePoint = {"x":890,"y":200};
	actionActivity4.size = {"width":120,"height":60};
	actionActivity4.action = changeListAction1;

	var commitAction1 = microflows.CommitAction.create(model);
	commitAction1.commitVariableName = "TeamList";

	var actionActivity5 = microflows.ActionActivity.create(model);
	actionActivity5.relativeMiddlePoint = {"x":1850,"y":200};
	actionActivity5.size = {"width":120,"height":60};
	actionActivity5.action = commitAction1;

	var dateTimeType1 = datatypes.DateTimeType.create(model);

	var createVariableAction2 = microflows.CreateVariableAction.create(model);
	createVariableAction2.variableName = "Start";
	createVariableAction2.variableType = dateTimeType1;   // Note: for this property a default value is defined.
	createVariableAction2.initialValue = "[%CurrentDateTime%]";

	var actionActivity6 = microflows.ActionActivity.create(model);
	actionActivity6.relativeMiddlePoint = {"x":-565,"y":200};
	actionActivity6.size = {"width":120,"height":60};
	actionActivity6.action = createVariableAction2;

	var templateArgument1 = microflows.TemplateArgument.create(model);
	templateArgument1.expression = "toString(secondsBetween([%CurrentDateTime%], $Start))";

	var stringTemplate1 = microflows.StringTemplate.create(model);
	stringTemplate1.arguments.push(templateArgument1);
	stringTemplate1.text = "done in {1} seconds";

	var logMessageAction1 = microflows.LogMessageAction.create(model);
	logMessageAction1.node = "getCaption(PerformanceTest.LogNodes.Generate_data)";
	logMessageAction1.messageTemplate = stringTemplate1;   // Note: for this property a default value is defined.

	var actionActivity7 = microflows.ActionActivity.create(model);
	actionActivity7.relativeMiddlePoint = {"x":2030,"y":200};
	actionActivity7.size = {"width":120,"height":60};
	actionActivity7.action = logMessageAction1;

	var expressionSplitCondition2 = microflows.ExpressionSplitCondition.create(model);
	expressionSplitCondition2.expression = "$CounterTeam >= 10";

	var exclusiveSplit2 = microflows.ExclusiveSplit.create(model);
	exclusiveSplit2.relativeMiddlePoint = {"x":1450,"y":200};
	exclusiveSplit2.size = {"width":90,"height":60};
	exclusiveSplit2.splitCondition = expressionSplitCondition2;   // Note: for this property a default value is defined.
	exclusiveSplit2.caption = "10 teams added?";

	var exclusiveMerge1 = microflows.ExclusiveMerge.create(model);
	exclusiveMerge1.relativeMiddlePoint = {"x":550,"y":200};
	exclusiveMerge1.size = {"width":90,"height":60};

	var exclusiveMerge2 = microflows.ExclusiveMerge.create(model);
	exclusiveMerge2.relativeMiddlePoint = {"x":-15,"y":200};
	exclusiveMerge2.size = {"width":90,"height":60};

	var microflowCallParameterMapping1 = microflows.MicroflowCallParameterMapping.create(model);
	// Note: this is an unsupported internal property of the Model SDK which is subject to change.
	microflowCallParameterMapping1.__parameter.updateWithRawValue("PerformanceTest.SUB_Staff_CreateTenStaff.Sequence");
	microflowCallParameterMapping1.argument = "$Sequence";

	var microflowCall1 = microflows.MicroflowCall.create(model);
	microflowCall1.microflow = model.findMicroflowByQualifiedName("PerformanceTest.SUB_Staff_CreateTenStaff_2");
	microflowCall1.parameterMappings.push(microflowCallParameterMapping1);

	var microflowCallAction1 = microflows.MicroflowCallAction.create(model);
	microflowCallAction1.microflowCall = microflowCall1;   // Note: for this property a default value is defined.
	microflowCallAction1.outputVariableName = "StaffList";

	var actionActivity8 = microflows.ActionActivity.create(model);
	actionActivity8.relativeMiddlePoint = {"x":175,"y":200};
	actionActivity8.size = {"width":140,"height":60};
	actionActivity8.action = microflowCallAction1;
	actionActivity8.caption = "Sub microflow";

	var changeVariableAction1 = microflows.ChangeVariableAction.create(model);
	changeVariableAction1.changeVariableName = "Sequence";
	changeVariableAction1.value = "$Sequence +100";

	var actionActivity9 = microflows.ActionActivity.create(model);
	actionActivity9.relativeMiddlePoint = {"x":1085,"y":200};
	actionActivity9.size = {"width":120,"height":60};
	actionActivity9.action = changeVariableAction1;

	var changeVariableAction2 = microflows.ChangeVariableAction.create(model);
	changeVariableAction2.changeVariableName = "CounterTeam";
	changeVariableAction2.value = "$CounterTeam +1";

	var actionActivity10 = microflows.ActionActivity.create(model);
	actionActivity10.relativeMiddlePoint = {"x":1275,"y":200};
	actionActivity10.size = {"width":120,"height":60};
	actionActivity10.action = changeVariableAction2;

	var integerType2 = datatypes.IntegerType.create(model);

	var createVariableAction3 = microflows.CreateVariableAction.create(model);
	createVariableAction3.variableName = "CounterTeam";
	createVariableAction3.variableType = integerType2;   // Note: for this property a default value is defined.
	createVariableAction3.initialValue = "1";

	var actionActivity11 = microflows.ActionActivity.create(model);
	actionActivity11.relativeMiddlePoint = {"x":375,"y":200};
	actionActivity11.size = {"width":120,"height":60};
	actionActivity11.action = createVariableAction3;

	var microflowObjectCollection1 = microflows.MicroflowObjectCollection.create(model);
	microflowObjectCollection1.objects.push(startEvent1);
	microflowObjectCollection1.objects.push(endEvent1);
	microflowObjectCollection1.objects.push(actionActivity1);
	microflowObjectCollection1.objects.push(actionActivity2);
	microflowObjectCollection1.objects.push(exclusiveSplit1);
	microflowObjectCollection1.objects.push(actionActivity3);
	microflowObjectCollection1.objects.push(actionActivity4);
	microflowObjectCollection1.objects.push(actionActivity5);
	microflowObjectCollection1.objects.push(actionActivity6);
	microflowObjectCollection1.objects.push(actionActivity7);
	microflowObjectCollection1.objects.push(exclusiveSplit2);
	microflowObjectCollection1.objects.push(exclusiveMerge1);
	microflowObjectCollection1.objects.push(exclusiveMerge2);
	microflowObjectCollection1.objects.push(actionActivity8);
	microflowObjectCollection1.objects.push(actionActivity9);
	microflowObjectCollection1.objects.push(actionActivity10);
	microflowObjectCollection1.objects.push(actionActivity11);

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
	sequenceFlow5.destinationBezierVector = {"width":-15,"height":0};
	sequenceFlow5.caseValue = noCase4;   // Note: for this property a default value is defined.

	var noCase5 = microflows.NoCase.create(model);

	var sequenceFlow6 = microflows.SequenceFlow.create(model);
	sequenceFlow6.originConnectionIndex = 1;
	sequenceFlow6.destinationConnectionIndex = 3;
	sequenceFlow6.originBezierVector = {"width":30,"height":0};
	sequenceFlow6.destinationBezierVector = {"width":-30,"height":0};
	sequenceFlow6.caseValue = noCase5;   // Note: for this property a default value is defined.

	var noCase6 = microflows.NoCase.create(model);

	var sequenceFlow7 = microflows.SequenceFlow.create(model);
	sequenceFlow7.originConnectionIndex = 1;
	sequenceFlow7.destinationConnectionIndex = 3;
	sequenceFlow7.originBezierVector = {"width":30,"height":0};
	sequenceFlow7.destinationBezierVector = {"width":-30,"height":0};
	sequenceFlow7.caseValue = noCase6;   // Note: for this property a default value is defined.

	var noCase7 = microflows.NoCase.create(model);

	var sequenceFlow8 = microflows.SequenceFlow.create(model);
	sequenceFlow8.originConnectionIndex = 1;
	sequenceFlow8.destinationConnectionIndex = 3;
	sequenceFlow8.originBezierVector = {"width":30,"height":0};
	sequenceFlow8.destinationBezierVector = {"width":-15,"height":0};
	sequenceFlow8.caseValue = noCase7;   // Note: for this property a default value is defined.

	var noCase8 = microflows.NoCase.create(model);

	var sequenceFlow9 = microflows.SequenceFlow.create(model);
	sequenceFlow9.originConnectionIndex = 1;
	sequenceFlow9.destinationConnectionIndex = 3;
	sequenceFlow9.originBezierVector = {"width":0,"height":0};
	sequenceFlow9.destinationBezierVector = {"width":-30,"height":0};
	sequenceFlow9.caseValue = noCase8;   // Note: for this property a default value is defined.

	var enumerationCase2 = microflows.EnumerationCase.create(model);
	enumerationCase2.value = "true";

	var sequenceFlow10 = microflows.SequenceFlow.create(model);
	sequenceFlow10.originConnectionIndex = 1;
	sequenceFlow10.destinationConnectionIndex = 3;
	sequenceFlow10.originBezierVector = {"width":15,"height":0};
	sequenceFlow10.destinationBezierVector = {"width":-15,"height":0};
	sequenceFlow10.caseValue = enumerationCase2;   // Note: for this property a default value is defined.

	var enumerationCase3 = microflows.EnumerationCase.create(model);
	enumerationCase3.value = "false";

	var sequenceFlow11 = microflows.SequenceFlow.create(model);
	sequenceFlow11.originConnectionIndex = 2;
	sequenceFlow11.destinationConnectionIndex = 2;
	sequenceFlow11.originBezierVector = {"width":-80,"height":110};
	sequenceFlow11.destinationBezierVector = {"width":155,"height":95};
	sequenceFlow11.caseValue = enumerationCase3;   // Note: for this property a default value is defined.

	var noCase9 = microflows.NoCase.create(model);

	var sequenceFlow12 = microflows.SequenceFlow.create(model);
	sequenceFlow12.originConnectionIndex = 1;
	sequenceFlow12.destinationConnectionIndex = 3;
	sequenceFlow12.originBezierVector = {"width":15,"height":0};
	sequenceFlow12.destinationBezierVector = {"width":-30,"height":0};
	sequenceFlow12.caseValue = noCase9;   // Note: for this property a default value is defined.

	var noCase10 = microflows.NoCase.create(model);

	var sequenceFlow13 = microflows.SequenceFlow.create(model);
	sequenceFlow13.originConnectionIndex = 1;
	sequenceFlow13.destinationConnectionIndex = 3;
	sequenceFlow13.originBezierVector = {"width":15,"height":0};
	sequenceFlow13.destinationBezierVector = {"width":-30,"height":0};
	sequenceFlow13.caseValue = noCase10;   // Note: for this property a default value is defined.

	var enumerationCase4 = microflows.EnumerationCase.create(model);
	enumerationCase4.value = "false";

	var sequenceFlow14 = microflows.SequenceFlow.create(model);
	sequenceFlow14.originBezierVector = {"width":-200,"height":-110};
	sequenceFlow14.destinationBezierVector = {"width":265,"height":-125};
	sequenceFlow14.caseValue = enumerationCase4;   // Note: for this property a default value is defined.

	var noCase11 = microflows.NoCase.create(model);

	var sequenceFlow15 = microflows.SequenceFlow.create(model);
	sequenceFlow15.originConnectionIndex = 1;
	sequenceFlow15.destinationConnectionIndex = 3;
	sequenceFlow15.originBezierVector = {"width":30,"height":0};
	sequenceFlow15.destinationBezierVector = {"width":-30,"height":0};
	sequenceFlow15.caseValue = noCase11;   // Note: for this property a default value is defined.

	var noCase12 = microflows.NoCase.create(model);

	var sequenceFlow16 = microflows.SequenceFlow.create(model);
	sequenceFlow16.originConnectionIndex = 1;
	sequenceFlow16.destinationConnectionIndex = 3;
	sequenceFlow16.originBezierVector = {"width":30,"height":0};
	sequenceFlow16.destinationBezierVector = {"width":-30,"height":0};
	sequenceFlow16.caseValue = noCase12;   // Note: for this property a default value is defined.

	var noCase13 = microflows.NoCase.create(model);

	var sequenceFlow17 = microflows.SequenceFlow.create(model);
	sequenceFlow17.originConnectionIndex = 1;
	sequenceFlow17.destinationConnectionIndex = 3;
	sequenceFlow17.originBezierVector = {"width":30,"height":0};
	sequenceFlow17.destinationBezierVector = {"width":-15,"height":0};
	sequenceFlow17.caseValue = noCase13;   // Note: for this property a default value is defined.

	var noCase14 = microflows.NoCase.create(model);

	var sequenceFlow18 = microflows.SequenceFlow.create(model);
	sequenceFlow18.originConnectionIndex = 1;
	sequenceFlow18.destinationConnectionIndex = 3;
	sequenceFlow18.originBezierVector = {"width":30,"height":0};
	sequenceFlow18.destinationBezierVector = {"width":-15,"height":0};
	sequenceFlow18.caseValue = noCase14;   // Note: for this property a default value is defined.

	var voidType1 = datatypes.VoidType.create(model);

	var translation1 = texts.Translation.create(model);
	translation1.languageCode = "en_US";

	var text1 = texts.Text.create(model);
	text1.translations.push(translation1);

	var sUB_GenerateALotStaffAndTeams_2_1 = microflows.Microflow.createIn(unit);
	sUB_GenerateALotStaffAndTeams_2_1.name = "SUB_GenerateALotStaffAndTeams_2";
	sUB_GenerateALotStaffAndTeams_2_1.objectCollection = microflowObjectCollection1;   // Note: for this property a default value is defined.
	sUB_GenerateALotStaffAndTeams_2_1.flows.push(sequenceFlow1);
	sUB_GenerateALotStaffAndTeams_2_1.flows.push(sequenceFlow2);
	sUB_GenerateALotStaffAndTeams_2_1.flows.push(sequenceFlow3);
	sUB_GenerateALotStaffAndTeams_2_1.flows.push(sequenceFlow4);
	sUB_GenerateALotStaffAndTeams_2_1.flows.push(sequenceFlow5);
	sUB_GenerateALotStaffAndTeams_2_1.flows.push(sequenceFlow6);
	sUB_GenerateALotStaffAndTeams_2_1.flows.push(sequenceFlow7);
	sUB_GenerateALotStaffAndTeams_2_1.flows.push(sequenceFlow8);
	sUB_GenerateALotStaffAndTeams_2_1.flows.push(sequenceFlow9);
	sUB_GenerateALotStaffAndTeams_2_1.flows.push(sequenceFlow10);
	sUB_GenerateALotStaffAndTeams_2_1.flows.push(sequenceFlow11);
	sUB_GenerateALotStaffAndTeams_2_1.flows.push(sequenceFlow12);
	sUB_GenerateALotStaffAndTeams_2_1.flows.push(sequenceFlow13);
	sUB_GenerateALotStaffAndTeams_2_1.flows.push(sequenceFlow14);
	sUB_GenerateALotStaffAndTeams_2_1.flows.push(sequenceFlow15);
	sUB_GenerateALotStaffAndTeams_2_1.flows.push(sequenceFlow16);
	sUB_GenerateALotStaffAndTeams_2_1.flows.push(sequenceFlow17);
	sUB_GenerateALotStaffAndTeams_2_1.flows.push(sequenceFlow18);
	sUB_GenerateALotStaffAndTeams_2_1.microflowReturnType = voidType1;
	sUB_GenerateALotStaffAndTeams_2_1.concurrencyErrorMessage = text1;   // Note: for this property a default value is defined.

	sequenceFlow1.origin = startEvent1;
	sequenceFlow1.destination = actionActivity6;

	sequenceFlow2.origin = actionActivity1;
	sequenceFlow2.destination = actionActivity3;

	sequenceFlow3.origin = actionActivity2;
	sequenceFlow3.destination = actionActivity4;

	sequenceFlow4.origin = exclusiveSplit1;
	sequenceFlow4.destination = actionActivity5;

	sequenceFlow5.origin = actionActivity3;
	sequenceFlow5.destination = exclusiveMerge2;

	sequenceFlow6.origin = actionActivity5;
	sequenceFlow6.destination = actionActivity7;

	sequenceFlow7.origin = actionActivity6;
	sequenceFlow7.destination = actionActivity1;

	sequenceFlow8.origin = actionActivity7;
	sequenceFlow8.destination = endEvent1;

	sequenceFlow9.origin = actionActivity4;
	sequenceFlow9.destination = actionActivity9;

	sequenceFlow10.origin = exclusiveSplit2;
	sequenceFlow10.destination = exclusiveSplit1;

	sequenceFlow11.origin = exclusiveSplit2;
	sequenceFlow11.destination = exclusiveMerge1;

	sequenceFlow12.origin = exclusiveMerge1;
	sequenceFlow12.destination = actionActivity2;

	sequenceFlow13.origin = exclusiveMerge2;
	sequenceFlow13.destination = actionActivity8;

	sequenceFlow14.origin = exclusiveSplit1;
	sequenceFlow14.destination = exclusiveMerge2;

	sequenceFlow15.origin = actionActivity8;
	sequenceFlow15.destination = actionActivity11;

	sequenceFlow16.origin = actionActivity9;
	sequenceFlow16.destination = actionActivity10;

	sequenceFlow17.origin = actionActivity10;
	sequenceFlow17.destination = exclusiveSplit2;

	sequenceFlow18.origin = actionActivity11;
	sequenceFlow18.destination = exclusiveMerge1;

})