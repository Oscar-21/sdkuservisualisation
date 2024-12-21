(function (unit, model) {

	/*
	 * JavaScript code generated by mendixmodelsdk.sdk.extras.JavaScriptSerializer
	 * from unit with id "5d5bb4df-d70f-44e4-8beb-9f386768495c" of type Microflows$Microflow
	 * in working copy "SoccerSquad"
	 * on 20-12-2024.
	 */

	var startEvent1 = microflows.StartEvent.create(model);
	startEvent1.relativeMiddlePoint = {"x":100,"y":200};
	startEvent1.size = {"width":20,"height":20};

	var endEvent1 = microflows.EndEvent.create(model);
	endEvent1.relativeMiddlePoint = {"x":700,"y":200};
	endEvent1.size = {"width":20,"height":20};
	endEvent1.returnValue = "true";

	var objectType1 = datatypes.ObjectType.create(model);
	objectType1.entity = model.findEntityByQualifiedName("MxModelReflection.MxObjectMember");

	var mxObjectMember1 = microflows.MicroflowParameterObject.create(model);
	mxObjectMember1.relativeMiddlePoint = {"x":100,"y":0};
	mxObjectMember1.size = {"width":30,"height":30};
	mxObjectMember1.name = "MxObjectMember";
	mxObjectMember1.variableType = objectType1;   // Note: for this property a default value is defined.

	var associationRetrieveSource1 = microflows.AssociationRetrieveSource.create(model);
	associationRetrieveSource1.startVariableName = "MxObjectMember";
	associationRetrieveSource1.association = model.findAssociationBaseByQualifiedName("MxModelReflection.MxObjectMember_MxObjectType");

	var retrieveAction1 = microflows.RetrieveAction.create(model);
	retrieveAction1.retrieveSource = associationRetrieveSource1;   // Note: for this property a default value is defined.
	retrieveAction1.outputVariableName = "MxObjectType";

	var actionActivity1 = microflows.ActionActivity.create(model);
	actionActivity1.relativeMiddlePoint = {"x":205,"y":200};
	actionActivity1.size = {"width":100,"height":60};
	actionActivity1.action = retrieveAction1;
	actionActivity1.caption = "Get the object type";
	actionActivity1.autoGenerateCaption = false;

	var expressionSplitCondition1 = microflows.ExpressionSplitCondition.create(model);
	expressionSplitCondition1.expression = "$MxObjectType != empty";

	var exclusiveSplit1 = microflows.ExclusiveSplit.create(model);
	exclusiveSplit1.relativeMiddlePoint = {"x":315,"y":200};
	exclusiveSplit1.size = {"width":60,"height":40};
	exclusiveSplit1.splitCondition = expressionSplitCondition1;   // Note: for this property a default value is defined.

	var memberChange1 = microflows.MemberChange.create(model);
	memberChange1.attribute = model.findAttributeByQualifiedName("MxModelReflection.MxObjectMember.CompleteName");
	memberChange1.value = "$MxObjectType/CompleteName + ' / ' + $MxObjectMember/AttributeName";

	var changeObjectAction1 = microflows.ChangeObjectAction.create(model);
	changeObjectAction1.items.push(memberChange1);
	changeObjectAction1.changeVariableName = "MxObjectMember";

	var actionActivity2 = microflows.ActionActivity.create(model);
	actionActivity2.relativeMiddlePoint = {"x":515,"y":200};
	actionActivity2.size = {"width":160,"height":60};
	actionActivity2.action = changeObjectAction1;
	actionActivity2.caption = "Set the Complete name for the Member";
	actionActivity2.autoGenerateCaption = false;

	var memberChange2 = microflows.MemberChange.create(model);
	memberChange2.attribute = model.findAttributeByQualifiedName("MxModelReflection.MxObjectMember.CompleteName");
	memberChange2.value = "' / ' + $MxObjectMember/AttributeName";

	var changeObjectAction2 = microflows.ChangeObjectAction.create(model);
	changeObjectAction2.items.push(memberChange2);
	changeObjectAction2.changeVariableName = "MxObjectMember";

	var actionActivity3 = microflows.ActionActivity.create(model);
	actionActivity3.relativeMiddlePoint = {"x":315,"y":305};
	actionActivity3.size = {"width":160,"height":60};
	actionActivity3.action = changeObjectAction2;
	actionActivity3.caption = "Set the Complete name for the Member";
	actionActivity3.autoGenerateCaption = false;

	var endEvent2 = microflows.EndEvent.create(model);
	endEvent2.relativeMiddlePoint = {"x":575,"y":305};
	endEvent2.size = {"width":20,"height":20};
	endEvent2.returnValue = "true";

	var microflowObjectCollection1 = microflows.MicroflowObjectCollection.create(model);
	microflowObjectCollection1.objects.push(startEvent1);
	microflowObjectCollection1.objects.push(endEvent1);
	microflowObjectCollection1.objects.push(mxObjectMember1);
	microflowObjectCollection1.objects.push(actionActivity1);
	microflowObjectCollection1.objects.push(exclusiveSplit1);
	microflowObjectCollection1.objects.push(actionActivity2);
	microflowObjectCollection1.objects.push(actionActivity3);
	microflowObjectCollection1.objects.push(endEvent2);

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
	sequenceFlow4.destinationBezierVector = {"width":-15,"height":0};
	sequenceFlow4.caseValue = noCase3;   // Note: for this property a default value is defined.

	var enumerationCase2 = microflows.EnumerationCase.create(model);
	enumerationCase2.value = "false";

	var sequenceFlow5 = microflows.SequenceFlow.create(model);
	sequenceFlow5.originConnectionIndex = 2;
	sequenceFlow5.originBezierVector = {"width":0,"height":15};
	sequenceFlow5.destinationBezierVector = {"width":0,"height":-30};
	sequenceFlow5.caseValue = enumerationCase2;   // Note: for this property a default value is defined.

	var noCase4 = microflows.NoCase.create(model);

	var sequenceFlow6 = microflows.SequenceFlow.create(model);
	sequenceFlow6.originConnectionIndex = 1;
	sequenceFlow6.destinationConnectionIndex = 3;
	sequenceFlow6.originBezierVector = {"width":30,"height":0};
	sequenceFlow6.destinationBezierVector = {"width":-15,"height":0};
	sequenceFlow6.caseValue = noCase4;   // Note: for this property a default value is defined.

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

	var bCo_MxObjectMember_CreateCompleteMemberName1 = microflows.Microflow.createIn(unit);
	bCo_MxObjectMember_CreateCompleteMemberName1.name = "BCo_MxObjectMember_CreateCompleteMemberName";
	bCo_MxObjectMember_CreateCompleteMemberName1.objectCollection = microflowObjectCollection1;   // Note: for this property a default value is defined.
	bCo_MxObjectMember_CreateCompleteMemberName1.flows.push(sequenceFlow1);
	bCo_MxObjectMember_CreateCompleteMemberName1.flows.push(sequenceFlow2);
	bCo_MxObjectMember_CreateCompleteMemberName1.flows.push(sequenceFlow3);
	bCo_MxObjectMember_CreateCompleteMemberName1.flows.push(sequenceFlow4);
	bCo_MxObjectMember_CreateCompleteMemberName1.flows.push(sequenceFlow5);
	bCo_MxObjectMember_CreateCompleteMemberName1.flows.push(sequenceFlow6);
	bCo_MxObjectMember_CreateCompleteMemberName1.microflowReturnType = booleanType1;
	bCo_MxObjectMember_CreateCompleteMemberName1.concurrencyErrorMessage = text1;   // Note: for this property a default value is defined.

	sequenceFlow1.origin = startEvent1;
	sequenceFlow1.destination = actionActivity1;

	sequenceFlow2.origin = actionActivity1;
	sequenceFlow2.destination = exclusiveSplit1;

	sequenceFlow3.origin = exclusiveSplit1;
	sequenceFlow3.destination = actionActivity2;

	sequenceFlow4.origin = actionActivity2;
	sequenceFlow4.destination = endEvent1;

	sequenceFlow5.origin = exclusiveSplit1;
	sequenceFlow5.destination = actionActivity3;

	sequenceFlow6.origin = actionActivity3;
	sequenceFlow6.destination = endEvent2;

})