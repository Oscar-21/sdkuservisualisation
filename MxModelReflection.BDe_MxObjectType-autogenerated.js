(function (unit, model) {

	/*
	 * JavaScript code generated by mendixmodelsdk.sdk.extras.JavaScriptSerializer
	 * from unit with id "e7d757f4-af21-4e27-8526-dff2feae5711" of type Microflows$Microflow
	 * in working copy "SoccerSquad"
	 * on 20-12-2024.
	 */

	var startEvent1 = microflows.StartEvent.create(model);
	startEvent1.relativeMiddlePoint = {"x":100,"y":200};
	startEvent1.size = {"width":20,"height":20};

	var endEvent1 = microflows.EndEvent.create(model);
	endEvent1.relativeMiddlePoint = {"x":1195,"y":200};
	endEvent1.size = {"width":20,"height":20};
	endEvent1.returnValue = "true";

	var objectType1 = datatypes.ObjectType.create(model);
	objectType1.entity = model.findEntityByQualifiedName("MxModelReflection.MxObjectType");

	var mxObjectType1 = microflows.MicroflowParameterObject.create(model);
	mxObjectType1.relativeMiddlePoint = {"x":100,"y":115};
	mxObjectType1.size = {"width":30,"height":30};
	mxObjectType1.name = "MxObjectType";
	mxObjectType1.variableType = objectType1;   // Note: for this property a default value is defined.

	var associationRetrieveSource1 = microflows.AssociationRetrieveSource.create(model);
	associationRetrieveSource1.startVariableName = "MxObjectType";
	associationRetrieveSource1.association = model.findAssociationBaseByQualifiedName("MxModelReflection.MxObjectReference_MxObjectType_Parent");

	var retrieveAction1 = microflows.RetrieveAction.create(model);
	retrieveAction1.retrieveSource = associationRetrieveSource1;   // Note: for this property a default value is defined.
	retrieveAction1.outputVariableName = "MxObjectReferenceList_Parent";

	var actionActivity1 = microflows.ActionActivity.create(model);
	actionActivity1.relativeMiddlePoint = {"x":280,"y":200};
	actionActivity1.size = {"width":270,"height":60};
	actionActivity1.action = retrieveAction1;

	var associationRetrieveSource2 = microflows.AssociationRetrieveSource.create(model);
	associationRetrieveSource2.startVariableName = "Reference";
	associationRetrieveSource2.association = model.findAssociationBaseByQualifiedName("MxModelReflection.MxObjectReference_MxObjectType_Parent");

	var retrieveAction2 = microflows.RetrieveAction.create(model);
	retrieveAction2.retrieveSource = associationRetrieveSource2;   // Note: for this property a default value is defined.
	retrieveAction2.outputVariableName = "MxObjectReferenceList";

	var actionActivity2 = microflows.ActionActivity.create(model);
	actionActivity2.relativeMiddlePoint = {"x":125,"y":155};
	actionActivity2.size = {"width":230,"height":60};
	actionActivity2.action = retrieveAction2;

	var expressionSplitCondition1 = microflows.ExpressionSplitCondition.create(model);
	expressionSplitCondition1.expression = "$Reference/MxModelReflection.MxObjectReference_MxObjectType_Child = empty";

	var exclusiveSplit1 = microflows.ExclusiveSplit.create(model);
	exclusiveSplit1.relativeMiddlePoint = {"x":125,"y":55};
	exclusiveSplit1.size = {"width":60,"height":40};
	exclusiveSplit1.splitCondition = expressionSplitCondition1;   // Note: for this property a default value is defined.
	exclusiveSplit1.caption = "child object empty?";

	var deleteAction1 = microflows.DeleteAction.create(model);
	deleteAction1.deleteVariableName = "Reference";

	var actionActivity3 = microflows.ActionActivity.create(model);
	actionActivity3.relativeMiddlePoint = {"x":560,"y":55};
	actionActivity3.size = {"width":120,"height":60};
	actionActivity3.action = deleteAction1;

	var aggregateListAction1 = microflows.AggregateListAction.create(model);
	aggregateListAction1.inputListVariableName = "MxObjectReferenceList";
	aggregateListAction1.outputVariableName = "count";

	var actionActivity4 = microflows.ActionActivity.create(model);
	actionActivity4.relativeMiddlePoint = {"x":310,"y":155};
	actionActivity4.size = {"width":120,"height":60};
	actionActivity4.action = aggregateListAction1;

	var expressionSplitCondition2 = microflows.ExpressionSplitCondition.create(model);
	expressionSplitCondition2.expression = "$count = 1";

	var exclusiveSplit2 = microflows.ExclusiveSplit.create(model);
	exclusiveSplit2.relativeMiddlePoint = {"x":420,"y":155};
	exclusiveSplit2.size = {"width":60,"height":40};
	exclusiveSplit2.splitCondition = expressionSplitCondition2;   // Note: for this property a default value is defined.
	exclusiveSplit2.caption = " = 1";

	var exclusiveMerge1 = microflows.ExclusiveMerge.create(model);
	exclusiveMerge1.relativeMiddlePoint = {"x":420,"y":55};
	exclusiveMerge1.size = {"width":60,"height":40};

	var continueEvent1 = microflows.ContinueEvent.create(model);
	continueEvent1.relativeMiddlePoint = {"x":560,"y":155};
	continueEvent1.size = {"width":20,"height":20};

	var microflowObjectCollection1 = microflows.MicroflowObjectCollection.create(model);
	microflowObjectCollection1.objects.push(actionActivity2);
	microflowObjectCollection1.objects.push(exclusiveSplit1);
	microflowObjectCollection1.objects.push(actionActivity3);
	microflowObjectCollection1.objects.push(actionActivity4);
	microflowObjectCollection1.objects.push(exclusiveSplit2);
	microflowObjectCollection1.objects.push(exclusiveMerge1);
	microflowObjectCollection1.objects.push(continueEvent1);

	var iterableList1 = microflows.IterableList.create(model);
	iterableList1.listVariableName = "MxObjectReferenceList_Parent";
	iterableList1.variableName = "Reference";

	var loopedActivity1 = microflows.LoopedActivity.create(model);
	loopedActivity1.relativeMiddlePoint = {"x":795,"y":200};
	loopedActivity1.size = {"width":650,"height":200};
	loopedActivity1.objectCollection = microflowObjectCollection1;   // Note: for this property a default value is defined.
	loopedActivity1.loopSource = iterableList1;   // Note: for this property a default value is defined.

	var microflowObjectCollection2 = microflows.MicroflowObjectCollection.create(model);
	microflowObjectCollection2.objects.push(startEvent1);
	microflowObjectCollection2.objects.push(endEvent1);
	microflowObjectCollection2.objects.push(mxObjectType1);
	microflowObjectCollection2.objects.push(actionActivity1);
	microflowObjectCollection2.objects.push(loopedActivity1);

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
	sequenceFlow3.destinationBezierVector = {"width":-15,"height":0};
	sequenceFlow3.caseValue = noCase3;   // Note: for this property a default value is defined.

	var enumerationCase1 = microflows.EnumerationCase.create(model);
	enumerationCase1.value = "false";

	var sequenceFlow4 = microflows.SequenceFlow.create(model);
	sequenceFlow4.originConnectionIndex = 2;
	sequenceFlow4.originBezierVector = {"width":0,"height":15};
	sequenceFlow4.destinationBezierVector = {"width":0,"height":-30};
	sequenceFlow4.caseValue = enumerationCase1;   // Note: for this property a default value is defined.

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

	var enumerationCase3 = microflows.EnumerationCase.create(model);
	enumerationCase3.value = "true";

	var sequenceFlow8 = microflows.SequenceFlow.create(model);
	sequenceFlow8.destinationConnectionIndex = 2;
	sequenceFlow8.originBezierVector = {"width":0,"height":-15};
	sequenceFlow8.destinationBezierVector = {"width":0,"height":15};
	sequenceFlow8.caseValue = enumerationCase3;   // Note: for this property a default value is defined.

	var noCase6 = microflows.NoCase.create(model);

	var sequenceFlow9 = microflows.SequenceFlow.create(model);
	sequenceFlow9.originConnectionIndex = 1;
	sequenceFlow9.destinationConnectionIndex = 3;
	sequenceFlow9.originBezierVector = {"width":15,"height":0};
	sequenceFlow9.destinationBezierVector = {"width":-30,"height":0};
	sequenceFlow9.caseValue = noCase6;   // Note: for this property a default value is defined.

	var enumerationCase4 = microflows.EnumerationCase.create(model);
	enumerationCase4.value = "false";

	var sequenceFlow10 = microflows.SequenceFlow.create(model);
	sequenceFlow10.originConnectionIndex = 1;
	sequenceFlow10.destinationConnectionIndex = 3;
	sequenceFlow10.originBezierVector = {"width":15,"height":0};
	sequenceFlow10.destinationBezierVector = {"width":-15,"height":0};
	sequenceFlow10.caseValue = enumerationCase4;   // Note: for this property a default value is defined.

	var booleanType1 = datatypes.BooleanType.create(model);

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

	var bDe_MxObjectType1 = microflows.Microflow.createIn(unit);
	bDe_MxObjectType1.name = "BDe_MxObjectType";
	bDe_MxObjectType1.objectCollection = microflowObjectCollection2;   // Note: for this property a default value is defined.
	bDe_MxObjectType1.flows.push(sequenceFlow1);
	bDe_MxObjectType1.flows.push(sequenceFlow2);
	bDe_MxObjectType1.flows.push(sequenceFlow3);
	bDe_MxObjectType1.flows.push(sequenceFlow4);
	bDe_MxObjectType1.flows.push(sequenceFlow5);
	bDe_MxObjectType1.flows.push(sequenceFlow6);
	bDe_MxObjectType1.flows.push(sequenceFlow7);
	bDe_MxObjectType1.flows.push(sequenceFlow8);
	bDe_MxObjectType1.flows.push(sequenceFlow9);
	bDe_MxObjectType1.flows.push(sequenceFlow10);
	bDe_MxObjectType1.microflowReturnType = booleanType1;
	bDe_MxObjectType1.concurrencyErrorMessage = text1;   // Note: for this property a default value is defined.

	sequenceFlow1.origin = startEvent1;
	sequenceFlow1.destination = actionActivity1;

	sequenceFlow2.origin = actionActivity1;
	sequenceFlow2.destination = loopedActivity1;

	sequenceFlow3.origin = loopedActivity1;
	sequenceFlow3.destination = endEvent1;

	sequenceFlow4.origin = exclusiveSplit1;
	sequenceFlow4.destination = actionActivity2;

	sequenceFlow5.origin = exclusiveSplit1;
	sequenceFlow5.destination = exclusiveMerge1;

	sequenceFlow6.origin = actionActivity2;
	sequenceFlow6.destination = actionActivity4;

	sequenceFlow7.origin = actionActivity4;
	sequenceFlow7.destination = exclusiveSplit2;

	sequenceFlow8.origin = exclusiveSplit2;
	sequenceFlow8.destination = exclusiveMerge1;

	sequenceFlow9.origin = exclusiveMerge1;
	sequenceFlow9.destination = actionActivity3;

	sequenceFlow10.origin = exclusiveSplit2;
	sequenceFlow10.destination = continueEvent1;

})