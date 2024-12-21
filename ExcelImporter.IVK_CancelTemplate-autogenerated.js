(function (unit, model) {

	/*
	 * JavaScript code generated by mendixmodelsdk.sdk.extras.JavaScriptSerializer
	 * from unit with id "1fa114dd-46b9-4f89-b6e1-ff0b45bc0571" of type Microflows$Microflow
	 * in working copy "SoccerSquad"
	 * on 20-12-2024.
	 */

	var rollbackAction1 = microflows.RollbackAction.create(model);
	rollbackAction1.rollbackVariableName = "Template";
	rollbackAction1.refreshInClient = true;

	var actionActivity1 = microflows.ActionActivity.create(model);
	actionActivity1.relativeMiddlePoint = {"x":230,"y":200};
	actionActivity1.size = {"width":160,"height":60};
	actionActivity1.action = rollbackAction1;
	actionActivity1.caption = "Rollback the changes in the template";
	actionActivity1.autoGenerateCaption = false;

	var microflowCallParameterMapping1 = microflows.MicroflowCallParameterMapping.create(model);
	// Note: this is an unsupported internal property of the Model SDK which is subject to change.
	microflowCallParameterMapping1.__parameter.updateWithRawValue("ExcelImporter.ValidateTemplate.Template");
	microflowCallParameterMapping1.argument = "$Template";

	var microflowCallParameterMapping2 = microflows.MicroflowCallParameterMapping.create(model);
	// Note: this is an unsupported internal property of the Model SDK which is subject to change.
	microflowCallParameterMapping2.__parameter.updateWithRawValue("ExcelImporter.ValidateTemplate.ShowWarningPopup");
	microflowCallParameterMapping2.argument = "true";

	var microflowCall1 = microflows.MicroflowCall.create(model);
	microflowCall1.microflow = model.findMicroflowByQualifiedName("ExcelImporter.ValidateTemplate");
	microflowCall1.parameterMappings.push(microflowCallParameterMapping1);
	microflowCall1.parameterMappings.push(microflowCallParameterMapping2);

	var microflowCallAction1 = microflows.MicroflowCallAction.create(model);
	microflowCallAction1.microflowCall = microflowCall1;   // Note: for this property a default value is defined.
	microflowCallAction1.outputVariableName = "valid";

	var actionActivity2 = microflows.ActionActivity.create(model);
	actionActivity2.relativeMiddlePoint = {"x":395,"y":200};
	actionActivity2.size = {"width":110,"height":60};
	actionActivity2.action = microflowCallAction1;
	actionActivity2.caption = "Re-validate the template";
	actionActivity2.autoGenerateCaption = false;

	var endEvent1 = microflows.EndEvent.create(model);
	endEvent1.relativeMiddlePoint = {"x":760,"y":200};
	endEvent1.size = {"width":20,"height":20};

	var startEvent1 = microflows.StartEvent.create(model);
	startEvent1.relativeMiddlePoint = {"x":-45,"y":200};
	startEvent1.size = {"width":20,"height":20};

	var objectType1 = datatypes.ObjectType.create(model);
	objectType1.entity = model.findEntityByQualifiedName("ExcelImporter.Template");

	var template1 = microflows.MicroflowParameterObject.create(model);
	template1.relativeMiddlePoint = {"x":-45,"y":95};
	template1.size = {"width":30,"height":30};
	template1.name = "Template";
	template1.variableType = objectType1;   // Note: for this property a default value is defined.

	var expressionSplitCondition1 = microflows.ExpressionSplitCondition.create(model);
	expressionSplitCondition1.expression = "isNew( $Template )";

	var exclusiveSplit1 = microflows.ExclusiveSplit.create(model);
	exclusiveSplit1.relativeMiddlePoint = {"x":50,"y":200};
	exclusiveSplit1.size = {"width":90,"height":70};
	exclusiveSplit1.splitCondition = expressionSplitCondition1;   // Note: for this property a default value is defined.
	exclusiveSplit1.caption = "template was new?";

	var rollbackAction2 = microflows.RollbackAction.create(model);
	rollbackAction2.rollbackVariableName = "Template";
	rollbackAction2.refreshInClient = true;

	var actionActivity3 = microflows.ActionActivity.create(model);
	actionActivity3.relativeMiddlePoint = {"x":50,"y":325};
	actionActivity3.size = {"width":160,"height":60};
	actionActivity3.action = rollbackAction2;
	actionActivity3.caption = "Rollback the changes in the template";
	actionActivity3.autoGenerateCaption = false;

	var closeFormAction1 = microflows.CloseFormAction.create(model);

	var actionActivity4 = microflows.ActionActivity.create(model);
	actionActivity4.relativeMiddlePoint = {"x":200,"y":325};
	actionActivity4.size = {"width":90,"height":60};
	actionActivity4.action = closeFormAction1;

	var endEvent2 = microflows.EndEvent.create(model);
	endEvent2.relativeMiddlePoint = {"x":290,"y":325};
	endEvent2.size = {"width":20,"height":20};

	var closeFormAction2 = microflows.CloseFormAction.create(model);

	var actionActivity5 = microflows.ActionActivity.create(model);
	actionActivity5.relativeMiddlePoint = {"x":525,"y":200};
	actionActivity5.size = {"width":100,"height":60};
	actionActivity5.action = closeFormAction2;
	actionActivity5.caption = "Close the form";
	actionActivity5.autoGenerateCaption = false;

	var endEvent3 = microflows.EndEvent.create(model);
	endEvent3.relativeMiddlePoint = {"x":645,"y":290};
	endEvent3.size = {"width":20,"height":20};

	var expressionSplitCondition2 = microflows.ExpressionSplitCondition.create(model);
	expressionSplitCondition2.expression = "$valid";

	var exclusiveSplit2 = microflows.ExclusiveSplit.create(model);
	exclusiveSplit2.relativeMiddlePoint = {"x":645,"y":200};
	exclusiveSplit2.size = {"width":60,"height":40};
	exclusiveSplit2.splitCondition = expressionSplitCondition2;   // Note: for this property a default value is defined.
	exclusiveSplit2.caption = "valid?";

	var microflowObjectCollection1 = microflows.MicroflowObjectCollection.create(model);
	microflowObjectCollection1.objects.push(actionActivity1);
	microflowObjectCollection1.objects.push(actionActivity2);
	microflowObjectCollection1.objects.push(endEvent1);
	microflowObjectCollection1.objects.push(startEvent1);
	microflowObjectCollection1.objects.push(template1);
	microflowObjectCollection1.objects.push(exclusiveSplit1);
	microflowObjectCollection1.objects.push(actionActivity3);
	microflowObjectCollection1.objects.push(actionActivity4);
	microflowObjectCollection1.objects.push(endEvent2);
	microflowObjectCollection1.objects.push(actionActivity5);
	microflowObjectCollection1.objects.push(endEvent3);
	microflowObjectCollection1.objects.push(exclusiveSplit2);

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
	enumerationCase1.value = "false";

	var sequenceFlow4 = microflows.SequenceFlow.create(model);
	sequenceFlow4.originConnectionIndex = 2;
	sequenceFlow4.originBezierVector = {"width":0,"height":15};
	sequenceFlow4.destinationBezierVector = {"width":0,"height":-15};
	sequenceFlow4.caseValue = enumerationCase1;   // Note: for this property a default value is defined.

	var enumerationCase2 = microflows.EnumerationCase.create(model);
	enumerationCase2.value = "true";

	var sequenceFlow5 = microflows.SequenceFlow.create(model);
	sequenceFlow5.originConnectionIndex = 1;
	sequenceFlow5.destinationConnectionIndex = 3;
	sequenceFlow5.originBezierVector = {"width":15,"height":0};
	sequenceFlow5.destinationBezierVector = {"width":-15,"height":0};
	sequenceFlow5.caseValue = enumerationCase2;   // Note: for this property a default value is defined.

	var enumerationCase3 = microflows.EnumerationCase.create(model);
	enumerationCase3.value = "false";

	var sequenceFlow6 = microflows.SequenceFlow.create(model);
	sequenceFlow6.originConnectionIndex = 1;
	sequenceFlow6.destinationConnectionIndex = 3;
	sequenceFlow6.originBezierVector = {"width":15,"height":0};
	sequenceFlow6.destinationBezierVector = {"width":-30,"height":0};
	sequenceFlow6.caseValue = enumerationCase3;   // Note: for this property a default value is defined.

	var enumerationCase4 = microflows.EnumerationCase.create(model);
	enumerationCase4.value = "true";

	var sequenceFlow7 = microflows.SequenceFlow.create(model);
	sequenceFlow7.originConnectionIndex = 2;
	sequenceFlow7.originBezierVector = {"width":0,"height":15};
	sequenceFlow7.destinationBezierVector = {"width":0,"height":-30};
	sequenceFlow7.caseValue = enumerationCase4;   // Note: for this property a default value is defined.

	var noCase4 = microflows.NoCase.create(model);

	var sequenceFlow8 = microflows.SequenceFlow.create(model);
	sequenceFlow8.originConnectionIndex = 1;
	sequenceFlow8.destinationConnectionIndex = 3;
	sequenceFlow8.originBezierVector = {"width":30,"height":0};
	sequenceFlow8.destinationBezierVector = {"width":-30,"height":0};
	sequenceFlow8.caseValue = noCase4;   // Note: for this property a default value is defined.

	var noCase5 = microflows.NoCase.create(model);

	var sequenceFlow9 = microflows.SequenceFlow.create(model);
	sequenceFlow9.originConnectionIndex = 1;
	sequenceFlow9.destinationConnectionIndex = 3;
	sequenceFlow9.originBezierVector = {"width":30,"height":0};
	sequenceFlow9.destinationBezierVector = {"width":-15,"height":0};
	sequenceFlow9.caseValue = noCase5;   // Note: for this property a default value is defined.

	var noCase6 = microflows.NoCase.create(model);

	var sequenceFlow10 = microflows.SequenceFlow.create(model);
	sequenceFlow10.originConnectionIndex = 1;
	sequenceFlow10.destinationConnectionIndex = 3;
	sequenceFlow10.originBezierVector = {"width":30,"height":0};
	sequenceFlow10.destinationBezierVector = {"width":-15,"height":0};
	sequenceFlow10.caseValue = noCase6;   // Note: for this property a default value is defined.

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

	var iVK_CancelTemplate1 = microflows.Microflow.createIn(unit);
	iVK_CancelTemplate1.name = "IVK_CancelTemplate";
	iVK_CancelTemplate1.objectCollection = microflowObjectCollection1;   // Note: for this property a default value is defined.
	iVK_CancelTemplate1.flows.push(sequenceFlow1);
	iVK_CancelTemplate1.flows.push(sequenceFlow2);
	iVK_CancelTemplate1.flows.push(sequenceFlow3);
	iVK_CancelTemplate1.flows.push(sequenceFlow4);
	iVK_CancelTemplate1.flows.push(sequenceFlow5);
	iVK_CancelTemplate1.flows.push(sequenceFlow6);
	iVK_CancelTemplate1.flows.push(sequenceFlow7);
	iVK_CancelTemplate1.flows.push(sequenceFlow8);
	iVK_CancelTemplate1.flows.push(sequenceFlow9);
	iVK_CancelTemplate1.flows.push(sequenceFlow10);
	iVK_CancelTemplate1.microflowReturnType = voidType1;
	iVK_CancelTemplate1.allowedModuleRoles.push(model.findModuleRoleByQualifiedName("ExcelImporter.Configurator"));
	iVK_CancelTemplate1.concurrencyErrorMessage = text1;   // Note: for this property a default value is defined.

	sequenceFlow1.origin = startEvent1;
	sequenceFlow1.destination = exclusiveSplit1;

	sequenceFlow2.origin = actionActivity1;
	sequenceFlow2.destination = actionActivity2;

	sequenceFlow3.origin = actionActivity2;
	sequenceFlow3.destination = actionActivity5;

	sequenceFlow4.origin = exclusiveSplit2;
	sequenceFlow4.destination = endEvent3;

	sequenceFlow5.origin = exclusiveSplit2;
	sequenceFlow5.destination = endEvent1;

	sequenceFlow6.origin = exclusiveSplit1;
	sequenceFlow6.destination = actionActivity1;

	sequenceFlow7.origin = exclusiveSplit1;
	sequenceFlow7.destination = actionActivity3;

	sequenceFlow8.origin = actionActivity3;
	sequenceFlow8.destination = actionActivity4;

	sequenceFlow9.origin = actionActivity4;
	sequenceFlow9.destination = endEvent2;

	sequenceFlow10.origin = actionActivity5;
	sequenceFlow10.destination = exclusiveSplit2;

})