(function (unit, model) {

	/*
	 * JavaScript code generated by mendixmodelsdk.sdk.extras.JavaScriptSerializer
	 * from unit with id "0897cafd-d36c-4058-8e46-56159da9ec74" of type Microflows$Microflow
	 * in working copy "SoccerSquad"
	 * on 20-12-2024.
	 */

	var startEvent1 = microflows.StartEvent.create(model);
	startEvent1.relativeMiddlePoint = {"x":-165,"y":200};
	startEvent1.size = {"width":20,"height":20};

	var endEvent1 = microflows.EndEvent.create(model);
	endEvent1.relativeMiddlePoint = {"x":1075,"y":200};
	endEvent1.size = {"width":20,"height":20};

	var dateTimeType1 = datatypes.DateTimeType.create(model);

	var createVariableAction1 = microflows.CreateVariableAction.create(model);
	createVariableAction1.variableName = "Start";
	createVariableAction1.variableType = dateTimeType1;   // Note: for this property a default value is defined.
	createVariableAction1.initialValue = "[%CurrentDateTime%]";

	var actionActivity1 = microflows.ActionActivity.create(model);
	actionActivity1.relativeMiddlePoint = {"x":-25,"y":200};
	actionActivity1.size = {"width":120,"height":60};
	actionActivity1.action = createVariableAction1;
	actionActivity1.backgroundColor = microflows.ActionActivityColor.Gray;

	var constantRange1 = microflows.ConstantRange.create(model);
	constantRange1.singleObject = true;

	var sortItemList1 = microflows.SortItemList.create(model);

	var databaseRetrieveSource1 = microflows.DatabaseRetrieveSource.create(model);
	databaseRetrieveSource1.entity = model.findEntityByQualifiedName("PerformanceTest.Team");
	databaseRetrieveSource1.range = constantRange1;   // Note: for this property a default value is defined.
	databaseRetrieveSource1.sortItemList = sortItemList1;   // Note: for this property a default value is defined.

	var retrieveAction1 = microflows.RetrieveAction.create(model);
	retrieveAction1.retrieveSource = databaseRetrieveSource1;   // Note: for this property a default value is defined.
	retrieveAction1.outputVariableName = "Team";

	var actionActivity2 = microflows.ActionActivity.create(model);
	actionActivity2.relativeMiddlePoint = {"x":160,"y":200};
	actionActivity2.size = {"width":120,"height":60};
	actionActivity2.action = retrieveAction1;

	var constantRange2 = microflows.ConstantRange.create(model);

	var sortItemList2 = microflows.SortItemList.create(model);

	var databaseRetrieveSource2 = microflows.DatabaseRetrieveSource.create(model);
	databaseRetrieveSource2.entity = model.findEntityByQualifiedName("PerformanceTest.Staff");
	databaseRetrieveSource2.range = constantRange2;   // Note: for this property a default value is defined.
	databaseRetrieveSource2.xPathConstraint = "[PerformanceTest.Staff_Team = $Team]";
	databaseRetrieveSource2.sortItemList = sortItemList2;   // Note: for this property a default value is defined.

	var retrieveAction2 = microflows.RetrieveAction.create(model);
	retrieveAction2.retrieveSource = databaseRetrieveSource2;   // Note: for this property a default value is defined.
	retrieveAction2.outputVariableName = "StaffList";

	var actionActivity3 = microflows.ActionActivity.create(model);
	actionActivity3.relativeMiddlePoint = {"x":350,"y":200};
	actionActivity3.size = {"width":120,"height":60};
	actionActivity3.action = retrieveAction2;

	var memberChange1 = microflows.MemberChange.create(model);
	memberChange1.attribute = model.findAttributeByQualifiedName("PerformanceTest.Result.ReferenceSetBoth");
	memberChange1.value = "$Duration";

	var changeObjectAction1 = microflows.ChangeObjectAction.create(model);
	changeObjectAction1.items.push(memberChange1);
	changeObjectAction1.changeVariableName = "Result";

	var actionActivity4 = microflows.ActionActivity.create(model);
	actionActivity4.relativeMiddlePoint = {"x":735,"y":200};
	actionActivity4.size = {"width":120,"height":60};
	actionActivity4.action = changeObjectAction1;
	actionActivity4.backgroundColor = microflows.ActionActivityColor.Gray;

	var objectType1 = datatypes.ObjectType.create(model);
	objectType1.entity = model.findEntityByQualifiedName("PerformanceTest.Result");

	var result1 = microflows.MicroflowParameterObject.create(model);
	result1.relativeMiddlePoint = {"x":-165,"y":65};
	result1.size = {"width":30,"height":30};
	result1.name = "Result";
	result1.variableType = objectType1;   // Note: for this property a default value is defined.

	var templateArgument1 = microflows.TemplateArgument.create(model);
	templateArgument1.expression = "$Duration";

	var stringTemplate1 = microflows.StringTemplate.create(model);
	stringTemplate1.arguments.push(templateArgument1);
	stringTemplate1.text = "{1}";

	var logMessageAction1 = microflows.LogMessageAction.create(model);
	logMessageAction1.node = "getCaption(PerformanceTest.LogNodes.Reference_set_both)";
	logMessageAction1.messageTemplate = stringTemplate1;   // Note: for this property a default value is defined.

	var actionActivity5 = microflows.ActionActivity.create(model);
	actionActivity5.relativeMiddlePoint = {"x":930,"y":200};
	actionActivity5.size = {"width":120,"height":60};
	actionActivity5.action = logMessageAction1;
	actionActivity5.backgroundColor = microflows.ActionActivityColor.Gray;

	var stringType1 = datatypes.StringType.create(model);

	var createVariableAction2 = microflows.CreateVariableAction.create(model);
	createVariableAction2.variableName = "Duration";
	createVariableAction2.variableType = stringType1;   // Note: for this property a default value is defined.
	createVariableAction2.initialValue = "'Done in ' + toString(millisecondsBetween([%CurrentDateTime%], $Start)) + ' milliseconds' \n";

	var actionActivity6 = microflows.ActionActivity.create(model);
	actionActivity6.relativeMiddlePoint = {"x":540,"y":200};
	actionActivity6.size = {"width":120,"height":60};
	actionActivity6.action = createVariableAction2;
	actionActivity6.backgroundColor = microflows.ActionActivityColor.Gray;

	var microflowObjectCollection1 = microflows.MicroflowObjectCollection.create(model);
	microflowObjectCollection1.objects.push(startEvent1);
	microflowObjectCollection1.objects.push(endEvent1);
	microflowObjectCollection1.objects.push(actionActivity1);
	microflowObjectCollection1.objects.push(actionActivity2);
	microflowObjectCollection1.objects.push(actionActivity3);
	microflowObjectCollection1.objects.push(actionActivity4);
	microflowObjectCollection1.objects.push(result1);
	microflowObjectCollection1.objects.push(actionActivity5);
	microflowObjectCollection1.objects.push(actionActivity6);

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

	var noCase4 = microflows.NoCase.create(model);

	var sequenceFlow4 = microflows.SequenceFlow.create(model);
	sequenceFlow4.originConnectionIndex = 1;
	sequenceFlow4.destinationConnectionIndex = 3;
	sequenceFlow4.originBezierVector = {"width":30,"height":0};
	sequenceFlow4.destinationBezierVector = {"width":-30,"height":0};
	sequenceFlow4.caseValue = noCase4;   // Note: for this property a default value is defined.

	var noCase5 = microflows.NoCase.create(model);

	var sequenceFlow5 = microflows.SequenceFlow.create(model);
	sequenceFlow5.originConnectionIndex = 1;
	sequenceFlow5.destinationConnectionIndex = 3;
	sequenceFlow5.originBezierVector = {"width":30,"height":0};
	sequenceFlow5.destinationBezierVector = {"width":-30,"height":0};
	sequenceFlow5.caseValue = noCase5;   // Note: for this property a default value is defined.

	var noCase6 = microflows.NoCase.create(model);

	var sequenceFlow6 = microflows.SequenceFlow.create(model);
	sequenceFlow6.originConnectionIndex = 1;
	sequenceFlow6.destinationConnectionIndex = 3;
	sequenceFlow6.originBezierVector = {"width":30,"height":0};
	sequenceFlow6.destinationBezierVector = {"width":-15,"height":0};
	sequenceFlow6.caseValue = noCase6;   // Note: for this property a default value is defined.

	var noCase7 = microflows.NoCase.create(model);

	var sequenceFlow7 = microflows.SequenceFlow.create(model);
	sequenceFlow7.originConnectionIndex = 1;
	sequenceFlow7.destinationConnectionIndex = 3;
	sequenceFlow7.originBezierVector = {"width":30,"height":0};
	sequenceFlow7.destinationBezierVector = {"width":-30,"height":0};
	sequenceFlow7.caseValue = noCase7;   // Note: for this property a default value is defined.

	var voidType1 = datatypes.VoidType.create(model);

	var translation1 = texts.Translation.create(model);
	translation1.languageCode = "en_US";

	var text1 = texts.Text.create(model);
	text1.translations.push(translation1);

	var aCT_RetrieveStaffOfTeam_RefSetBoth1 = microflows.Microflow.createIn(unit);
	aCT_RetrieveStaffOfTeam_RefSetBoth1.name = "ACT_RetrieveStaffOfTeam_RefSetBoth";
	aCT_RetrieveStaffOfTeam_RefSetBoth1.objectCollection = microflowObjectCollection1;   // Note: for this property a default value is defined.
	aCT_RetrieveStaffOfTeam_RefSetBoth1.flows.push(sequenceFlow1);
	aCT_RetrieveStaffOfTeam_RefSetBoth1.flows.push(sequenceFlow2);
	aCT_RetrieveStaffOfTeam_RefSetBoth1.flows.push(sequenceFlow3);
	aCT_RetrieveStaffOfTeam_RefSetBoth1.flows.push(sequenceFlow4);
	aCT_RetrieveStaffOfTeam_RefSetBoth1.flows.push(sequenceFlow5);
	aCT_RetrieveStaffOfTeam_RefSetBoth1.flows.push(sequenceFlow6);
	aCT_RetrieveStaffOfTeam_RefSetBoth1.flows.push(sequenceFlow7);
	aCT_RetrieveStaffOfTeam_RefSetBoth1.microflowReturnType = voidType1;
	aCT_RetrieveStaffOfTeam_RefSetBoth1.allowedModuleRoles.push(model.findModuleRoleByQualifiedName("PerformanceTest.PerformanceTester"));
	aCT_RetrieveStaffOfTeam_RefSetBoth1.concurrencyErrorMessage = text1;   // Note: for this property a default value is defined.

	sequenceFlow1.origin = startEvent1;
	sequenceFlow1.destination = actionActivity1;

	sequenceFlow2.origin = actionActivity1;
	sequenceFlow2.destination = actionActivity2;

	sequenceFlow3.origin = actionActivity2;
	sequenceFlow3.destination = actionActivity3;

	sequenceFlow4.origin = actionActivity3;
	sequenceFlow4.destination = actionActivity6;

	sequenceFlow5.origin = actionActivity4;
	sequenceFlow5.destination = actionActivity5;

	sequenceFlow6.origin = actionActivity5;
	sequenceFlow6.destination = endEvent1;

	sequenceFlow7.origin = actionActivity6;
	sequenceFlow7.destination = actionActivity4;

})