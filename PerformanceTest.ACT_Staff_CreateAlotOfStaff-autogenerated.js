(function (unit, model) {

	/*
	 * JavaScript code generated by mendixmodelsdk.sdk.extras.JavaScriptSerializer
	 * from unit with id "2d40aae3-bbcb-44c6-90df-459adbdae385" of type Microflows$Microflow
	 * in working copy "SoccerSquad"
	 * on 20-12-2024.
	 */

	var memberChange1 = microflows.MemberChange.create(model);
	memberChange1.attribute = model.findAttributeByQualifiedName("PerformanceTest.Staff_4.FullName");
	memberChange1.value = "$FullName";

	var memberChange2 = microflows.MemberChange.create(model);
	memberChange2.attribute = model.findAttributeByQualifiedName("PerformanceTest.Staff_4.LicenseNumber");
	memberChange2.value = "'Mx' + $CounterStaff";

	var memberChange3 = microflows.MemberChange.create(model);
	memberChange3.attribute = model.findAttributeByQualifiedName("PerformanceTest.Staff_4.EmailAddress");
	memberChange3.value = "replaceAll($FullName,' ','.') + '@gomake.it'";

	var memberChange4 = microflows.MemberChange.create(model);
	memberChange4.attribute = model.findAttributeByQualifiedName("PerformanceTest.Staff_4.Function");
	memberChange4.value = "if\n$CounterStaff = 1\nthen\nPerformanceTest.StaffFunction.Head_coach\nelse\nif\n$CounterStaff = 2\nor\n$CounterStaff = 3\nthen\nPerformanceTest.StaffFunction.Assistant_coach\nelse\nif\n$CounterStaff = 4\nthen\nPerformanceTest.StaffFunction.Goalkeeper_coach\nelse\nif\n$CounterStaff = 5\nor\n$CounterStaff = 6\nthen\nPerformanceTest.StaffFunction.Medical_staff\nelse\nif\n$CounterStaff = 7\nthen\nPerformanceTest.StaffFunction.Team_manager\nelse\nPerformanceTest.StaffFunction.Equipment_staff";

	var createObjectAction1 = microflows.CreateObjectAction.create(model);
	createObjectAction1.items.push(memberChange1);
	createObjectAction1.items.push(memberChange2);
	createObjectAction1.items.push(memberChange3);
	createObjectAction1.items.push(memberChange4);
	createObjectAction1.entity = model.findEntityByQualifiedName("PerformanceTest.Staff_4");
	createObjectAction1.outputVariableName = "NewStaff";

	var actionActivity1 = microflows.ActionActivity.create(model);
	actionActivity1.relativeMiddlePoint = {"x":1300,"y":200};
	actionActivity1.size = {"width":120,"height":60};
	actionActivity1.action = createObjectAction1;

	var exclusiveMerge1 = microflows.ExclusiveMerge.create(model);
	exclusiveMerge1.relativeMiddlePoint = {"x":935,"y":200};
	exclusiveMerge1.size = {"width":90,"height":60};

	var changeListAction1 = microflows.ChangeListAction.create(model);
	changeListAction1.changeVariableName = "StaffList";
	changeListAction1.value = "$NewStaff";

	var actionActivity2 = microflows.ActionActivity.create(model);
	actionActivity2.relativeMiddlePoint = {"x":1485,"y":200};
	actionActivity2.size = {"width":120,"height":60};
	actionActivity2.action = changeListAction1;

	var integerType1 = datatypes.IntegerType.create(model);

	var createVariableAction1 = microflows.CreateVariableAction.create(model);
	createVariableAction1.variableName = "CounterStaff";
	createVariableAction1.variableType = integerType1;   // Note: for this property a default value is defined.
	createVariableAction1.initialValue = "1";

	var actionActivity3 = microflows.ActionActivity.create(model);
	actionActivity3.relativeMiddlePoint = {"x":735,"y":200};
	actionActivity3.size = {"width":120,"height":60};
	actionActivity3.action = createVariableAction1;

	var startEvent1 = microflows.StartEvent.create(model);
	startEvent1.relativeMiddlePoint = {"x":60,"y":200};
	startEvent1.size = {"width":20,"height":20};

	var endEvent1 = microflows.EndEvent.create(model);
	endEvent1.relativeMiddlePoint = {"x":2165,"y":200};
	endEvent1.size = {"width":20,"height":20};

	var createListAction1 = microflows.CreateListAction.create(model);
	createListAction1.entity = model.findEntityByQualifiedName("PerformanceTest.Staff_4");
	createListAction1.outputVariableName = "StaffList";

	var actionActivity4 = microflows.ActionActivity.create(model);
	actionActivity4.relativeMiddlePoint = {"x":545,"y":200};
	actionActivity4.size = {"width":120,"height":60};
	actionActivity4.action = createListAction1;

	var commitAction1 = microflows.CommitAction.create(model);
	commitAction1.commitVariableName = "StaffList";

	var actionActivity5 = microflows.ActionActivity.create(model);
	actionActivity5.relativeMiddlePoint = {"x":2025,"y":200};
	actionActivity5.size = {"width":120,"height":60};
	actionActivity5.action = commitAction1;

	var microflowCall1 = microflows.MicroflowCall.create(model);
	microflowCall1.microflow = model.findMicroflowByQualifiedName("PerformanceTest.SUB_GetName");

	var microflowCallAction1 = microflows.MicroflowCallAction.create(model);
	microflowCallAction1.microflowCall = microflowCall1;   // Note: for this property a default value is defined.
	microflowCallAction1.outputVariableName = "FullName";

	var actionActivity6 = microflows.ActionActivity.create(model);
	actionActivity6.relativeMiddlePoint = {"x":1095,"y":200};
	actionActivity6.size = {"width":120,"height":60};
	actionActivity6.action = microflowCallAction1;

	var expressionSplitCondition1 = microflows.ExpressionSplitCondition.create(model);
	expressionSplitCondition1.expression = "$CounterStaff = 100000";

	var exclusiveSplit1 = microflows.ExclusiveSplit.create(model);
	exclusiveSplit1.relativeMiddlePoint = {"x":1825,"y":200};
	exclusiveSplit1.size = {"width":90,"height":60};
	exclusiveSplit1.splitCondition = expressionSplitCondition1;   // Note: for this property a default value is defined.
	exclusiveSplit1.caption = "100.000 done?";

	var constantRange1 = microflows.ConstantRange.create(model);

	var sortItemList1 = microflows.SortItemList.create(model);

	var databaseRetrieveSource1 = microflows.DatabaseRetrieveSource.create(model);
	databaseRetrieveSource1.entity = model.findEntityByQualifiedName("PerformanceTest.Staff_4");
	databaseRetrieveSource1.range = constantRange1;   // Note: for this property a default value is defined.
	databaseRetrieveSource1.sortItemList = sortItemList1;   // Note: for this property a default value is defined.

	var retrieveAction1 = microflows.RetrieveAction.create(model);
	retrieveAction1.retrieveSource = databaseRetrieveSource1;   // Note: for this property a default value is defined.
	retrieveAction1.outputVariableName = "Staff_4List";

	var actionActivity7 = microflows.ActionActivity.create(model);
	actionActivity7.relativeMiddlePoint = {"x":200,"y":200};
	actionActivity7.size = {"width":120,"height":60};
	actionActivity7.action = retrieveAction1;

	var deleteAction1 = microflows.DeleteAction.create(model);
	deleteAction1.deleteVariableName = "Staff_4List";

	var actionActivity8 = microflows.ActionActivity.create(model);
	actionActivity8.relativeMiddlePoint = {"x":375,"y":200};
	actionActivity8.size = {"width":120,"height":60};
	actionActivity8.action = deleteAction1;

	var changeVariableAction1 = microflows.ChangeVariableAction.create(model);
	changeVariableAction1.changeVariableName = "CounterStaff";
	changeVariableAction1.value = "$CounterStaff +1";

	var actionActivity9 = microflows.ActionActivity.create(model);
	actionActivity9.relativeMiddlePoint = {"x":1660,"y":200};
	actionActivity9.size = {"width":120,"height":60};
	actionActivity9.action = changeVariableAction1;

	var microflowObjectCollection1 = microflows.MicroflowObjectCollection.create(model);
	microflowObjectCollection1.objects.push(actionActivity1);
	microflowObjectCollection1.objects.push(exclusiveMerge1);
	microflowObjectCollection1.objects.push(actionActivity2);
	microflowObjectCollection1.objects.push(actionActivity3);
	microflowObjectCollection1.objects.push(startEvent1);
	microflowObjectCollection1.objects.push(endEvent1);
	microflowObjectCollection1.objects.push(actionActivity4);
	microflowObjectCollection1.objects.push(actionActivity5);
	microflowObjectCollection1.objects.push(actionActivity6);
	microflowObjectCollection1.objects.push(exclusiveSplit1);
	microflowObjectCollection1.objects.push(actionActivity7);
	microflowObjectCollection1.objects.push(actionActivity8);
	microflowObjectCollection1.objects.push(actionActivity9);

	var noCase1 = microflows.NoCase.create(model);

	var sequenceFlow1 = microflows.SequenceFlow.create(model);
	sequenceFlow1.originConnectionIndex = 1;
	sequenceFlow1.destinationConnectionIndex = 3;
	sequenceFlow1.originBezierVector = {"width":30,"height":0};
	sequenceFlow1.destinationBezierVector = {"width":-30,"height":0};
	sequenceFlow1.caseValue = noCase1;   // Note: for this property a default value is defined.

	var noCase2 = microflows.NoCase.create(model);

	var sequenceFlow2 = microflows.SequenceFlow.create(model);
	sequenceFlow2.originConnectionIndex = 1;
	sequenceFlow2.destinationConnectionIndex = 3;
	sequenceFlow2.originBezierVector = {"width":15,"height":0};
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
	sequenceFlow4.destinationBezierVector = {"width":-15,"height":0};
	sequenceFlow4.caseValue = noCase4;   // Note: for this property a default value is defined.

	var noCase5 = microflows.NoCase.create(model);

	var sequenceFlow5 = microflows.SequenceFlow.create(model);
	sequenceFlow5.originConnectionIndex = 1;
	sequenceFlow5.destinationConnectionIndex = 3;
	sequenceFlow5.originBezierVector = {"width":0,"height":0};
	sequenceFlow5.destinationBezierVector = {"width":-30,"height":0};
	sequenceFlow5.caseValue = noCase5;   // Note: for this property a default value is defined.

	var noCase6 = microflows.NoCase.create(model);

	var sequenceFlow6 = microflows.SequenceFlow.create(model);
	sequenceFlow6.originConnectionIndex = 1;
	sequenceFlow6.destinationConnectionIndex = 3;
	sequenceFlow6.originBezierVector = {"width":30,"height":0};
	sequenceFlow6.destinationBezierVector = {"width":-30,"height":0};
	sequenceFlow6.caseValue = noCase6;   // Note: for this property a default value is defined.

	var noCase7 = microflows.NoCase.create(model);

	var sequenceFlow7 = microflows.SequenceFlow.create(model);
	sequenceFlow7.originConnectionIndex = 1;
	sequenceFlow7.destinationConnectionIndex = 3;
	sequenceFlow7.originBezierVector = {"width":30,"height":0};
	sequenceFlow7.destinationBezierVector = {"width":-15,"height":0};
	sequenceFlow7.caseValue = noCase7;   // Note: for this property a default value is defined.

	var noCase8 = microflows.NoCase.create(model);

	var sequenceFlow8 = microflows.SequenceFlow.create(model);
	sequenceFlow8.originConnectionIndex = 1;
	sequenceFlow8.destinationConnectionIndex = 3;
	sequenceFlow8.originBezierVector = {"width":30,"height":0};
	sequenceFlow8.destinationBezierVector = {"width":-30,"height":0};
	sequenceFlow8.caseValue = noCase8;   // Note: for this property a default value is defined.

	var enumerationCase1 = microflows.EnumerationCase.create(model);
	enumerationCase1.value = "true";

	var sequenceFlow9 = microflows.SequenceFlow.create(model);
	sequenceFlow9.originConnectionIndex = 1;
	sequenceFlow9.destinationConnectionIndex = 3;
	sequenceFlow9.originBezierVector = {"width":15,"height":0};
	sequenceFlow9.destinationBezierVector = {"width":-30,"height":0};
	sequenceFlow9.caseValue = enumerationCase1;   // Note: for this property a default value is defined.

	var enumerationCase2 = microflows.EnumerationCase.create(model);
	enumerationCase2.value = "false";

	var sequenceFlow10 = microflows.SequenceFlow.create(model);
	sequenceFlow10.originConnectionIndex = 2;
	sequenceFlow10.destinationConnectionIndex = 2;
	sequenceFlow10.originBezierVector = {"width":-145,"height":115};
	sequenceFlow10.destinationBezierVector = {"width":85,"height":110};
	sequenceFlow10.caseValue = enumerationCase2;   // Note: for this property a default value is defined.

	var noCase9 = microflows.NoCase.create(model);

	var sequenceFlow11 = microflows.SequenceFlow.create(model);
	sequenceFlow11.originConnectionIndex = 1;
	sequenceFlow11.destinationConnectionIndex = 3;
	sequenceFlow11.originBezierVector = {"width":30,"height":0};
	sequenceFlow11.destinationBezierVector = {"width":-30,"height":0};
	sequenceFlow11.caseValue = noCase9;   // Note: for this property a default value is defined.

	var noCase10 = microflows.NoCase.create(model);

	var sequenceFlow12 = microflows.SequenceFlow.create(model);
	sequenceFlow12.originConnectionIndex = 1;
	sequenceFlow12.destinationConnectionIndex = 3;
	sequenceFlow12.originBezierVector = {"width":30,"height":0};
	sequenceFlow12.destinationBezierVector = {"width":-30,"height":0};
	sequenceFlow12.caseValue = noCase10;   // Note: for this property a default value is defined.

	var noCase11 = microflows.NoCase.create(model);

	var sequenceFlow13 = microflows.SequenceFlow.create(model);
	sequenceFlow13.originConnectionIndex = 1;
	sequenceFlow13.destinationConnectionIndex = 3;
	sequenceFlow13.originBezierVector = {"width":30,"height":0};
	sequenceFlow13.destinationBezierVector = {"width":-15,"height":0};
	sequenceFlow13.caseValue = noCase11;   // Note: for this property a default value is defined.

	var voidType1 = datatypes.VoidType.create(model);

	var translation1 = texts.Translation.create(model);
	translation1.languageCode = "en_US";

	var text1 = texts.Text.create(model);
	text1.translations.push(translation1);

	var aCT_Staff_CreateAlotOfStaff1 = microflows.Microflow.createIn(unit);
	aCT_Staff_CreateAlotOfStaff1.name = "ACT_Staff_CreateAlotOfStaff";
	aCT_Staff_CreateAlotOfStaff1.objectCollection = microflowObjectCollection1;   // Note: for this property a default value is defined.
	aCT_Staff_CreateAlotOfStaff1.flows.push(sequenceFlow1);
	aCT_Staff_CreateAlotOfStaff1.flows.push(sequenceFlow2);
	aCT_Staff_CreateAlotOfStaff1.flows.push(sequenceFlow3);
	aCT_Staff_CreateAlotOfStaff1.flows.push(sequenceFlow4);
	aCT_Staff_CreateAlotOfStaff1.flows.push(sequenceFlow5);
	aCT_Staff_CreateAlotOfStaff1.flows.push(sequenceFlow6);
	aCT_Staff_CreateAlotOfStaff1.flows.push(sequenceFlow7);
	aCT_Staff_CreateAlotOfStaff1.flows.push(sequenceFlow8);
	aCT_Staff_CreateAlotOfStaff1.flows.push(sequenceFlow9);
	aCT_Staff_CreateAlotOfStaff1.flows.push(sequenceFlow10);
	aCT_Staff_CreateAlotOfStaff1.flows.push(sequenceFlow11);
	aCT_Staff_CreateAlotOfStaff1.flows.push(sequenceFlow12);
	aCT_Staff_CreateAlotOfStaff1.flows.push(sequenceFlow13);
	aCT_Staff_CreateAlotOfStaff1.microflowReturnType = voidType1;
	aCT_Staff_CreateAlotOfStaff1.allowedModuleRoles.push(model.findModuleRoleByQualifiedName("PerformanceTest.PerformanceTester"));
	aCT_Staff_CreateAlotOfStaff1.concurrencyErrorMessage = text1;   // Note: for this property a default value is defined.

	sequenceFlow1.origin = actionActivity1;
	sequenceFlow1.destination = actionActivity2;

	sequenceFlow2.origin = exclusiveMerge1;
	sequenceFlow2.destination = actionActivity6;

	sequenceFlow3.origin = actionActivity2;
	sequenceFlow3.destination = actionActivity9;

	sequenceFlow4.origin = actionActivity3;
	sequenceFlow4.destination = exclusiveMerge1;

	sequenceFlow5.origin = startEvent1;
	sequenceFlow5.destination = actionActivity7;

	sequenceFlow6.origin = actionActivity4;
	sequenceFlow6.destination = actionActivity3;

	sequenceFlow7.origin = actionActivity5;
	sequenceFlow7.destination = endEvent1;

	sequenceFlow8.origin = actionActivity6;
	sequenceFlow8.destination = actionActivity1;

	sequenceFlow9.origin = exclusiveSplit1;
	sequenceFlow9.destination = actionActivity5;

	sequenceFlow10.origin = exclusiveSplit1;
	sequenceFlow10.destination = exclusiveMerge1;

	sequenceFlow11.origin = actionActivity7;
	sequenceFlow11.destination = actionActivity8;

	sequenceFlow12.origin = actionActivity8;
	sequenceFlow12.destination = actionActivity4;

	sequenceFlow13.origin = actionActivity9;
	sequenceFlow13.destination = exclusiveSplit1;

})