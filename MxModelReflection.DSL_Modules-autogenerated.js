(function (unit, model) {

	/*
	 * JavaScript code generated by mendixmodelsdk.sdk.extras.JavaScriptSerializer
	 * from unit with id "edbc5d93-dac2-4c8d-8ad4-30a9d746d97a" of type Microflows$Microflow
	 * in working copy "SoccerSquad"
	 * on 20-12-2024.
	 */

	var startEvent1 = microflows.StartEvent.create(model);
	startEvent1.relativeMiddlePoint = {"x":-60,"y":200};
	startEvent1.size = {"width":20,"height":20};

	var endEvent1 = microflows.EndEvent.create(model);
	endEvent1.relativeMiddlePoint = {"x":700,"y":200};
	endEvent1.size = {"width":20,"height":20};
	endEvent1.returnValue = "$ModuleList";

	var constantRange1 = microflows.ConstantRange.create(model);

	var attributeRef1 = domainmodels.AttributeRef.create(model);
	attributeRef1.attribute = model.findAttributeByQualifiedName("MxModelReflection.Module.ModuleName");

	var sortItem1 = microflows.SortItem.create(model);
	sortItem1.attributeRef = attributeRef1;   // Note: for this property a default value is defined.

	var sortItemList1 = microflows.SortItemList.create(model);
	sortItemList1.items.push(sortItem1);

	var databaseRetrieveSource1 = microflows.DatabaseRetrieveSource.create(model);
	databaseRetrieveSource1.entity = model.findEntityByQualifiedName("MxModelReflection.Module");
	databaseRetrieveSource1.range = constantRange1;   // Note: for this property a default value is defined.
	databaseRetrieveSource1.sortItemList = sortItemList1;   // Note: for this property a default value is defined.

	var retrieveAction1 = microflows.RetrieveAction.create(model);
	retrieveAction1.retrieveSource = databaseRetrieveSource1;   // Note: for this property a default value is defined.
	retrieveAction1.outputVariableName = "ModuleList";

	var actionActivity1 = microflows.ActionActivity.create(model);
	actionActivity1.relativeMiddlePoint = {"x":180,"y":200};
	actionActivity1.size = {"width":120,"height":60};
	actionActivity1.action = retrieveAction1;

	var expressionSplitCondition1 = microflows.ExpressionSplitCondition.create(model);
	expressionSplitCondition1.expression = "$ModuleList != empty";

	var exclusiveSplit1 = microflows.ExclusiveSplit.create(model);
	exclusiveSplit1.relativeMiddlePoint = {"x":350,"y":200};
	exclusiveSplit1.size = {"width":60,"height":40};
	exclusiveSplit1.splitCondition = expressionSplitCondition1;   // Note: for this property a default value is defined.
	exclusiveSplit1.caption = "not empty";

	var microflowCall1 = microflows.MicroflowCall.create(model);
	microflowCall1.microflow = model.findMicroflowByQualifiedName("MxModelReflection.IVK_SyncObjects");

	var microflowCallAction1 = microflows.MicroflowCallAction.create(model);
	microflowCallAction1.microflowCall = microflowCall1;   // Note: for this property a default value is defined.

	var actionActivity2 = microflows.ActionActivity.create(model);
	actionActivity2.relativeMiddlePoint = {"x":350,"y":320};
	actionActivity2.size = {"width":120,"height":60};
	actionActivity2.action = microflowCallAction1;

	var exclusiveMerge1 = microflows.ExclusiveMerge.create(model);
	exclusiveMerge1.relativeMiddlePoint = {"x":45,"y":200};
	exclusiveMerge1.size = {"width":60,"height":40};

	var microflowObjectCollection1 = microflows.MicroflowObjectCollection.create(model);
	microflowObjectCollection1.objects.push(startEvent1);
	microflowObjectCollection1.objects.push(endEvent1);
	microflowObjectCollection1.objects.push(actionActivity1);
	microflowObjectCollection1.objects.push(exclusiveSplit1);
	microflowObjectCollection1.objects.push(actionActivity2);
	microflowObjectCollection1.objects.push(exclusiveMerge1);

	var noCase1 = microflows.NoCase.create(model);

	var sequenceFlow1 = microflows.SequenceFlow.create(model);
	sequenceFlow1.originConnectionIndex = 1;
	sequenceFlow1.destinationConnectionIndex = 3;
	sequenceFlow1.originBezierVector = {"width":0,"height":0};
	sequenceFlow1.destinationBezierVector = {"width":-15,"height":0};
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
	sequenceFlow5.destinationBezierVector = {"width":-30,"height":0};
	sequenceFlow5.caseValue = noCase3;   // Note: for this property a default value is defined.

	var noCase4 = microflows.NoCase.create(model);

	var sequenceFlow6 = microflows.SequenceFlow.create(model);
	sequenceFlow6.originConnectionIndex = 3;
	sequenceFlow6.destinationConnectionIndex = 2;
	sequenceFlow6.originBezierVector = {"width":-30,"height":0};
	sequenceFlow6.destinationBezierVector = {"width":0,"height":15};
	sequenceFlow6.caseValue = noCase4;   // Note: for this property a default value is defined.

	var listType1 = datatypes.ListType.create(model);
	listType1.entity = model.findEntityByQualifiedName("MxModelReflection.Module");

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

	var dSL_Modules1 = microflows.Microflow.createIn(unit);
	dSL_Modules1.name = "DSL_Modules";
	dSL_Modules1.objectCollection = microflowObjectCollection1;   // Note: for this property a default value is defined.
	dSL_Modules1.flows.push(sequenceFlow1);
	dSL_Modules1.flows.push(sequenceFlow2);
	dSL_Modules1.flows.push(sequenceFlow3);
	dSL_Modules1.flows.push(sequenceFlow4);
	dSL_Modules1.flows.push(sequenceFlow5);
	dSL_Modules1.flows.push(sequenceFlow6);
	dSL_Modules1.microflowReturnType = listType1;
	dSL_Modules1.allowedModuleRoles.push(model.findModuleRoleByQualifiedName("MxModelReflection.ModelAdministrator"));
	dSL_Modules1.concurrencyErrorMessage = text1;   // Note: for this property a default value is defined.

	sequenceFlow1.origin = startEvent1;
	sequenceFlow1.destination = exclusiveMerge1;

	sequenceFlow2.origin = actionActivity1;
	sequenceFlow2.destination = exclusiveSplit1;

	sequenceFlow3.origin = exclusiveSplit1;
	sequenceFlow3.destination = endEvent1;

	sequenceFlow4.origin = exclusiveSplit1;
	sequenceFlow4.destination = actionActivity2;

	sequenceFlow5.origin = exclusiveMerge1;
	sequenceFlow5.destination = actionActivity1;

	sequenceFlow6.origin = actionActivity2;
	sequenceFlow6.destination = exclusiveMerge1;

})