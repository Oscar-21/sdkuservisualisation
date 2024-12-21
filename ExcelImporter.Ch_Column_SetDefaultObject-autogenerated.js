(function (unit, model) {

	/*
	 * JavaScript code generated by mendixmodelsdk.sdk.extras.JavaScriptSerializer
	 * from unit with id "ce646a0b-d7a2-4445-b15b-08353a84cbda" of type Microflows$Microflow
	 * in working copy "SoccerSquad"
	 * on 20-12-2024.
	 */

	var associationRetrieveSource1 = microflows.AssociationRetrieveSource.create(model);
	associationRetrieveSource1.startVariableName = "Columns";
	associationRetrieveSource1.association = model.findAssociationBaseByQualifiedName("ExcelImporter.Column_MxObjectReference");

	var retrieveAction1 = microflows.RetrieveAction.create(model);
	retrieveAction1.retrieveSource = associationRetrieveSource1;   // Note: for this property a default value is defined.
	retrieveAction1.outputVariableName = "Reference";

	var actionActivity1 = microflows.ActionActivity.create(model);
	actionActivity1.relativeMiddlePoint = {"x":135,"y":200};
	actionActivity1.size = {"width":130,"height":60};
	actionActivity1.action = retrieveAction1;
	actionActivity1.caption = "Get the selected reference";
	actionActivity1.autoGenerateCaption = false;

	var expressionSplitCondition1 = microflows.ExpressionSplitCondition.create(model);
	expressionSplitCondition1.expression = "$Reference != empty";

	var exclusiveSplit1 = microflows.ExclusiveSplit.create(model);
	exclusiveSplit1.relativeMiddlePoint = {"x":260,"y":200};
	exclusiveSplit1.size = {"width":60,"height":40};
	exclusiveSplit1.splitCondition = expressionSplitCondition1;   // Note: for this property a default value is defined.
	exclusiveSplit1.caption = "found?";

	var endEvent1 = microflows.EndEvent.create(model);
	endEvent1.relativeMiddlePoint = {"x":260,"y":375};
	endEvent1.size = {"width":20,"height":20};

	var memberChange1 = microflows.MemberChange.create(model);
	memberChange1.association = model.findAssociationBaseByQualifiedName("ExcelImporter.Column_MxObjectType_Reference");
	memberChange1.value = "empty";

	var memberChange2 = microflows.MemberChange.create(model);
	memberChange2.association = model.findAssociationBaseByQualifiedName("ExcelImporter.Column_MxObjectMember_Reference");
	memberChange2.value = "empty";

	var changeObjectAction1 = microflows.ChangeObjectAction.create(model);
	changeObjectAction1.items.push(memberChange1);
	changeObjectAction1.items.push(memberChange2);
	changeObjectAction1.refreshInClient = true;
	changeObjectAction1.changeVariableName = "Columns";

	var actionActivity2 = microflows.ActionActivity.create(model);
	actionActivity2.relativeMiddlePoint = {"x":260,"y":295};
	actionActivity2.size = {"width":100,"height":50};
	actionActivity2.action = changeObjectAction1;
	actionActivity2.caption = "Empty the selection";
	actionActivity2.autoGenerateCaption = false;

	var startEvent1 = microflows.StartEvent.create(model);
	startEvent1.relativeMiddlePoint = {"x":-165,"y":200};
	startEvent1.size = {"width":20,"height":20};

	var objectType1 = datatypes.ObjectType.create(model);
	objectType1.entity = model.findEntityByQualifiedName("ExcelImporter.Column");

	var columns1 = microflows.MicroflowParameterObject.create(model);
	columns1.relativeMiddlePoint = {"x":-165,"y":105};
	columns1.size = {"width":30,"height":30};
	columns1.name = "Columns";
	columns1.variableType = objectType1;   // Note: for this property a default value is defined.

	var microflowCallParameterMapping1 = microflows.MicroflowCallParameterMapping.create(model);
	// Note: this is an unsupported internal property of the Model SDK which is subject to change.
	microflowCallParameterMapping1.__parameter.updateWithRawValue("ExcelImporter.Ch_SetReference.column");
	microflowCallParameterMapping1.argument = "$Columns";

	var microflowCall1 = microflows.MicroflowCall.create(model);
	microflowCall1.microflow = model.findMicroflowByQualifiedName("ExcelImporter.Ch_SetReference");
	microflowCall1.parameterMappings.push(microflowCallParameterMapping1);

	var microflowCallAction1 = microflows.MicroflowCallAction.create(model);
	microflowCallAction1.microflowCall = microflowCall1;   // Note: for this property a default value is defined.

	var actionActivity3 = microflows.ActionActivity.create(model);
	actionActivity3.relativeMiddlePoint = {"x":-40,"y":200};
	actionActivity3.size = {"width":140,"height":60};
	actionActivity3.action = microflowCallAction1;
	actionActivity3.caption = "Try to set the search string for the reference";
	actionActivity3.autoGenerateCaption = false;

	var endEvent2 = microflows.EndEvent.create(model);
	endEvent2.relativeMiddlePoint = {"x":820,"y":200};
	endEvent2.size = {"width":20,"height":20};

	var associationRetrieveSource2 = microflows.AssociationRetrieveSource.create(model);
	associationRetrieveSource2.startVariableName = "Columns";
	associationRetrieveSource2.association = model.findAssociationBaseByQualifiedName("ExcelImporter.Column_MxObjectType");

	var retrieveAction2 = microflows.RetrieveAction.create(model);
	retrieveAction2.retrieveSource = associationRetrieveSource2;   // Note: for this property a default value is defined.
	retrieveAction2.outputVariableName = "MxObjectType";

	var actionActivity4 = microflows.ActionActivity.create(model);
	actionActivity4.relativeMiddlePoint = {"x":475,"y":200};
	actionActivity4.size = {"width":150,"height":60};
	actionActivity4.action = retrieveAction2;

	var microflowCallParameterMapping2 = microflows.MicroflowCallParameterMapping.create(model);
	// Note: this is an unsupported internal property of the Model SDK which is subject to change.
	microflowCallParameterMapping2.__parameter.updateWithRawValue("ExcelImporter.Column_SetCorrectRefObjectType.Reference");
	microflowCallParameterMapping2.argument = "$Reference";

	var microflowCallParameterMapping3 = microflows.MicroflowCallParameterMapping.create(model);
	// Note: this is an unsupported internal property of the Model SDK which is subject to change.
	microflowCallParameterMapping3.__parameter.updateWithRawValue("ExcelImporter.Column_SetCorrectRefObjectType.Column");
	microflowCallParameterMapping3.argument = "$Columns";

	var microflowCallParameterMapping4 = microflows.MicroflowCallParameterMapping.create(model);
	// Note: this is an unsupported internal property of the Model SDK which is subject to change.
	microflowCallParameterMapping4.__parameter.updateWithRawValue("ExcelImporter.Column_SetCorrectRefObjectType.StartMxObjectType");
	microflowCallParameterMapping4.argument = "$MxObjectType";

	var microflowCall2 = microflows.MicroflowCall.create(model);
	microflowCall2.microflow = model.findMicroflowByQualifiedName("ExcelImporter.Column_SetCorrectRefObjectType");
	microflowCall2.parameterMappings.push(microflowCallParameterMapping2);
	microflowCall2.parameterMappings.push(microflowCallParameterMapping3);
	microflowCall2.parameterMappings.push(microflowCallParameterMapping4);

	var microflowCallAction2 = microflows.MicroflowCallAction.create(model);
	microflowCallAction2.microflowCall = microflowCall2;   // Note: for this property a default value is defined.

	var actionActivity5 = microflows.ActionActivity.create(model);
	actionActivity5.relativeMiddlePoint = {"x":675,"y":200};
	actionActivity5.size = {"width":190,"height":60};
	actionActivity5.action = microflowCallAction2;
	actionActivity5.caption = "Call microflow 'SetCorrectRefObjectType'";
	actionActivity5.autoGenerateCaption = false;

	var microflowObjectCollection1 = microflows.MicroflowObjectCollection.create(model);
	microflowObjectCollection1.objects.push(actionActivity1);
	microflowObjectCollection1.objects.push(exclusiveSplit1);
	microflowObjectCollection1.objects.push(endEvent1);
	microflowObjectCollection1.objects.push(actionActivity2);
	microflowObjectCollection1.objects.push(startEvent1);
	microflowObjectCollection1.objects.push(columns1);
	microflowObjectCollection1.objects.push(actionActivity3);
	microflowObjectCollection1.objects.push(endEvent2);
	microflowObjectCollection1.objects.push(actionActivity4);
	microflowObjectCollection1.objects.push(actionActivity5);

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
	sequenceFlow4.destinationBezierVector = {"width":0,"height":-15};
	sequenceFlow4.caseValue = noCase3;   // Note: for this property a default value is defined.

	var noCase4 = microflows.NoCase.create(model);

	var sequenceFlow5 = microflows.SequenceFlow.create(model);
	sequenceFlow5.originConnectionIndex = 1;
	sequenceFlow5.destinationConnectionIndex = 3;
	sequenceFlow5.originBezierVector = {"width":30,"height":0};
	sequenceFlow5.destinationBezierVector = {"width":-30,"height":0};
	sequenceFlow5.caseValue = noCase4;   // Note: for this property a default value is defined.

	var enumerationCase2 = microflows.EnumerationCase.create(model);
	enumerationCase2.value = "true";

	var sequenceFlow6 = microflows.SequenceFlow.create(model);
	sequenceFlow6.originConnectionIndex = 1;
	sequenceFlow6.destinationConnectionIndex = 3;
	sequenceFlow6.originBezierVector = {"width":15,"height":0};
	sequenceFlow6.destinationBezierVector = {"width":-30,"height":0};
	sequenceFlow6.caseValue = enumerationCase2;   // Note: for this property a default value is defined.

	var noCase5 = microflows.NoCase.create(model);

	var sequenceFlow7 = microflows.SequenceFlow.create(model);
	sequenceFlow7.originConnectionIndex = 1;
	sequenceFlow7.destinationConnectionIndex = 3;
	sequenceFlow7.originBezierVector = {"width":30,"height":0};
	sequenceFlow7.destinationBezierVector = {"width":-15,"height":0};
	sequenceFlow7.caseValue = noCase5;   // Note: for this property a default value is defined.

	var noCase6 = microflows.NoCase.create(model);

	var sequenceFlow8 = microflows.SequenceFlow.create(model);
	sequenceFlow8.originConnectionIndex = 1;
	sequenceFlow8.destinationConnectionIndex = 3;
	sequenceFlow8.originBezierVector = {"width":30,"height":0};
	sequenceFlow8.destinationBezierVector = {"width":-30,"height":0};
	sequenceFlow8.caseValue = noCase6;   // Note: for this property a default value is defined.

	var voidType1 = datatypes.VoidType.create(model);

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

	var ch_Column_SetDefaultObject1 = microflows.Microflow.createIn(unit);
	ch_Column_SetDefaultObject1.name = "Ch_Column_SetDefaultObject";
	ch_Column_SetDefaultObject1.objectCollection = microflowObjectCollection1;   // Note: for this property a default value is defined.
	ch_Column_SetDefaultObject1.flows.push(sequenceFlow1);
	ch_Column_SetDefaultObject1.flows.push(sequenceFlow2);
	ch_Column_SetDefaultObject1.flows.push(sequenceFlow3);
	ch_Column_SetDefaultObject1.flows.push(sequenceFlow4);
	ch_Column_SetDefaultObject1.flows.push(sequenceFlow5);
	ch_Column_SetDefaultObject1.flows.push(sequenceFlow6);
	ch_Column_SetDefaultObject1.flows.push(sequenceFlow7);
	ch_Column_SetDefaultObject1.flows.push(sequenceFlow8);
	ch_Column_SetDefaultObject1.microflowReturnType = voidType1;
	ch_Column_SetDefaultObject1.applyEntityAccess = true;
	ch_Column_SetDefaultObject1.allowedModuleRoles.push(model.findModuleRoleByQualifiedName("ExcelImporter.Configurator"));
	ch_Column_SetDefaultObject1.concurrencyErrorMessage = text1;   // Note: for this property a default value is defined.

	sequenceFlow1.origin = startEvent1;
	sequenceFlow1.destination = actionActivity3;

	sequenceFlow2.origin = actionActivity1;
	sequenceFlow2.destination = exclusiveSplit1;

	sequenceFlow3.origin = exclusiveSplit1;
	sequenceFlow3.destination = actionActivity2;

	sequenceFlow4.origin = actionActivity2;
	sequenceFlow4.destination = endEvent1;

	sequenceFlow5.origin = actionActivity3;
	sequenceFlow5.destination = actionActivity1;

	sequenceFlow6.origin = exclusiveSplit1;
	sequenceFlow6.destination = actionActivity4;

	sequenceFlow7.origin = actionActivity5;
	sequenceFlow7.destination = endEvent2;

	sequenceFlow8.origin = actionActivity4;
	sequenceFlow8.destination = actionActivity5;

})