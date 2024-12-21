(function (unit, model) {

	/*
	 * JavaScript code generated by mendixmodelsdk.sdk.extras.JavaScriptSerializer
	 * from unit with id "74bb7e97-b7d2-40cc-add8-7aefb0779d03" of type Microflows$Microflow
	 * in working copy "SoccerSquad"
	 * on 20-12-2024.
	 */

	var startEvent1 = microflows.StartEvent.create(model);
	startEvent1.relativeMiddlePoint = {"x":-95,"y":200};
	startEvent1.size = {"width":20,"height":20};

	var endEvent1 = microflows.EndEvent.create(model);
	endEvent1.relativeMiddlePoint = {"x":850,"y":200};
	endEvent1.size = {"width":20,"height":20};
	endEvent1.returnValue = "$NewInheritsFromContainer";

	var objectType1 = datatypes.ObjectType.create(model);
	objectType1.entity = model.findEntityByQualifiedName("MxModelReflection.MxObjectType");

	var mxObjectType1 = microflows.MicroflowParameterObject.create(model);
	mxObjectType1.relativeMiddlePoint = {"x":-95,"y":0};
	mxObjectType1.size = {"width":30,"height":30};
	mxObjectType1.name = "MxObjectType";
	mxObjectType1.variableType = objectType1;   // Note: for this property a default value is defined.

	var createObjectAction1 = microflows.CreateObjectAction.create(model);
	createObjectAction1.entity = model.findEntityByQualifiedName("MxModelReflection.InheritsFromContainer");
	createObjectAction1.outputVariableName = "NewInheritsFromContainer";

	var actionActivity1 = microflows.ActionActivity.create(model);
	actionActivity1.relativeMiddlePoint = {"x":25,"y":200};
	actionActivity1.size = {"width":120,"height":60};
	actionActivity1.action = createObjectAction1;

	var associationRetrieveSource1 = microflows.AssociationRetrieveSource.create(model);
	associationRetrieveSource1.startVariableName = "MxObjectType";
	associationRetrieveSource1.association = model.findAssociationBaseByQualifiedName("MxModelReflection.MxObjectType_SubClassOf_MxObjectType");

	var retrieveAction1 = microflows.RetrieveAction.create(model);
	retrieveAction1.retrieveSource = associationRetrieveSource1;   // Note: for this property a default value is defined.
	retrieveAction1.outputVariableName = "MxObjectTypeList";

	var actionActivity2 = microflows.ActionActivity.create(model);
	actionActivity2.relativeMiddlePoint = {"x":220,"y":200};
	actionActivity2.size = {"width":120,"height":60};
	actionActivity2.action = retrieveAction1;

	var expressionSplitCondition1 = microflows.ExpressionSplitCondition.create(model);
	expressionSplitCondition1.expression = "$MxObjectTypeList = empty";

	var exclusiveSplit1 = microflows.ExclusiveSplit.create(model);
	exclusiveSplit1.relativeMiddlePoint = {"x":385,"y":200};
	exclusiveSplit1.size = {"width":60,"height":40};
	exclusiveSplit1.splitCondition = expressionSplitCondition1;   // Note: for this property a default value is defined.
	exclusiveSplit1.caption = "empty";

	var memberChange1 = microflows.MemberChange.create(model);
	memberChange1.attribute = model.findAttributeByQualifiedName("MxModelReflection.InheritsFromContainer.Summary");
	memberChange1.value = "'None \n(make sure a related module is synchronized too)'";

	var changeObjectAction1 = microflows.ChangeObjectAction.create(model);
	changeObjectAction1.items.push(memberChange1);
	changeObjectAction1.changeVariableName = "NewInheritsFromContainer";

	var actionActivity3 = microflows.ActionActivity.create(model);
	actionActivity3.relativeMiddlePoint = {"x":665,"y":200};
	actionActivity3.size = {"width":150,"height":60};
	actionActivity3.action = changeObjectAction1;

	var endEvent2 = microflows.EndEvent.create(model);
	endEvent2.relativeMiddlePoint = {"x":850,"y":15};
	endEvent2.size = {"width":20,"height":20};
	endEvent2.returnValue = "$NewInheritsFromContainer";

	var memberChange2 = microflows.MemberChange.create(model);
	memberChange2.attribute = model.findAttributeByQualifiedName("MxModelReflection.InheritsFromContainer.Summary");
	memberChange2.value = "if $NewInheritsFromContainer/Summary = empty then\n\t$IteratorMxObjectType/CompleteName\nelse\n\t$NewInheritsFromContainer/Summary +', ' + $IteratorMxObjectType/CompleteName\n";

	var changeObjectAction2 = microflows.ChangeObjectAction.create(model);
	changeObjectAction2.items.push(memberChange2);
	changeObjectAction2.changeVariableName = "NewInheritsFromContainer";

	var actionActivity4 = microflows.ActionActivity.create(model);
	actionActivity4.relativeMiddlePoint = {"x":165,"y":110};
	actionActivity4.size = {"width":150,"height":60};
	actionActivity4.action = changeObjectAction2;

	var microflowObjectCollection1 = microflows.MicroflowObjectCollection.create(model);
	microflowObjectCollection1.objects.push(actionActivity4);

	var iterableList1 = microflows.IterableList.create(model);
	iterableList1.listVariableName = "MxObjectTypeList";
	iterableList1.variableName = "IteratorMxObjectType";

	var loopedActivity1 = microflows.LoopedActivity.create(model);
	loopedActivity1.relativeMiddlePoint = {"x":640,"y":15};
	loopedActivity1.size = {"width":300,"height":200};
	loopedActivity1.objectCollection = microflowObjectCollection1;   // Note: for this property a default value is defined.
	loopedActivity1.loopSource = iterableList1;   // Note: for this property a default value is defined.

	var microflowObjectCollection2 = microflows.MicroflowObjectCollection.create(model);
	microflowObjectCollection2.objects.push(startEvent1);
	microflowObjectCollection2.objects.push(endEvent1);
	microflowObjectCollection2.objects.push(mxObjectType1);
	microflowObjectCollection2.objects.push(actionActivity1);
	microflowObjectCollection2.objects.push(actionActivity2);
	microflowObjectCollection2.objects.push(exclusiveSplit1);
	microflowObjectCollection2.objects.push(actionActivity3);
	microflowObjectCollection2.objects.push(endEvent2);
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

	var enumerationCase2 = microflows.EnumerationCase.create(model);
	enumerationCase2.value = "false";

	var sequenceFlow6 = microflows.SequenceFlow.create(model);
	sequenceFlow6.destinationConnectionIndex = 3;
	sequenceFlow6.originBezierVector = {"width":0,"height":-15};
	sequenceFlow6.destinationBezierVector = {"width":-30,"height":0};
	sequenceFlow6.caseValue = enumerationCase2;   // Note: for this property a default value is defined.

	var noCase5 = microflows.NoCase.create(model);

	var sequenceFlow7 = microflows.SequenceFlow.create(model);
	sequenceFlow7.originConnectionIndex = 1;
	sequenceFlow7.destinationConnectionIndex = 3;
	sequenceFlow7.originBezierVector = {"width":30,"height":0};
	sequenceFlow7.destinationBezierVector = {"width":-15,"height":0};
	sequenceFlow7.caseValue = noCase5;   // Note: for this property a default value is defined.

	var objectType2 = datatypes.ObjectType.create(model);
	objectType2.entity = model.findEntityByQualifiedName("MxModelReflection.InheritsFromContainer");

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

	var dSO_InheritsFromContainer1 = microflows.Microflow.createIn(unit);
	dSO_InheritsFromContainer1.name = "DSO_InheritsFromContainer";
	dSO_InheritsFromContainer1.objectCollection = microflowObjectCollection2;   // Note: for this property a default value is defined.
	dSO_InheritsFromContainer1.flows.push(sequenceFlow1);
	dSO_InheritsFromContainer1.flows.push(sequenceFlow2);
	dSO_InheritsFromContainer1.flows.push(sequenceFlow3);
	dSO_InheritsFromContainer1.flows.push(sequenceFlow4);
	dSO_InheritsFromContainer1.flows.push(sequenceFlow5);
	dSO_InheritsFromContainer1.flows.push(sequenceFlow6);
	dSO_InheritsFromContainer1.flows.push(sequenceFlow7);
	dSO_InheritsFromContainer1.microflowReturnType = objectType2;
	dSO_InheritsFromContainer1.allowedModuleRoles.push(model.findModuleRoleByQualifiedName("MxModelReflection.ModelAdministrator"));
	dSO_InheritsFromContainer1.concurrencyErrorMessage = text1;   // Note: for this property a default value is defined.

	sequenceFlow1.origin = startEvent1;
	sequenceFlow1.destination = actionActivity1;

	sequenceFlow2.origin = actionActivity1;
	sequenceFlow2.destination = actionActivity2;

	sequenceFlow3.origin = actionActivity2;
	sequenceFlow3.destination = exclusiveSplit1;

	sequenceFlow4.origin = exclusiveSplit1;
	sequenceFlow4.destination = actionActivity3;

	sequenceFlow5.origin = actionActivity3;
	sequenceFlow5.destination = endEvent1;

	sequenceFlow6.origin = exclusiveSplit1;
	sequenceFlow6.destination = loopedActivity1;

	sequenceFlow7.origin = loopedActivity1;
	sequenceFlow7.destination = endEvent2;

})