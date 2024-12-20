(function (unit, model) {

	/*
	 * JavaScript code generated by mendixmodelsdk.sdk.extras.JavaScriptSerializer
	 * from unit with id "de2ee48b-cbac-4d70-bf14-faced1f61466" of type Microflows$Microflow
	 * in working copy "SoccerSquad"
	 * on 20-12-2024.
	 */

	var startEvent1 = microflows.StartEvent.create(model);
	startEvent1.relativeMiddlePoint = {"x":100,"y":200};
	startEvent1.size = {"width":20,"height":20};

	var objectType1 = datatypes.ObjectType.create(model);
	objectType1.entity = model.findEntityByQualifiedName("ExcelImporter.TemplateDocument");

	var templateDocument1 = microflows.MicroflowParameterObject.create(model);
	templateDocument1.relativeMiddlePoint = {"x":100,"y":105};
	templateDocument1.size = {"width":30,"height":30};
	templateDocument1.name = "TemplateDocument";
	templateDocument1.variableType = objectType1;   // Note: for this property a default value is defined.

	var associationRetrieveSource1 = microflows.AssociationRetrieveSource.create(model);
	associationRetrieveSource1.startVariableName = "TemplateDocument";
	associationRetrieveSource1.association = model.findAssociationBaseByQualifiedName("ExcelImporter.TemplateDocument_Template");

	var retrieveAction1 = microflows.RetrieveAction.create(model);
	retrieveAction1.retrieveSource = associationRetrieveSource1;   // Note: for this property a default value is defined.
	retrieveAction1.outputVariableName = "Template";

	var actionActivity1 = microflows.ActionActivity.create(model);
	actionActivity1.relativeMiddlePoint = {"x":205,"y":200};
	actionActivity1.size = {"width":120,"height":60};
	actionActivity1.action = retrieveAction1;

	var rollbackAction1 = microflows.RollbackAction.create(model);
	rollbackAction1.rollbackVariableName = "Template";

	var actionActivity2 = microflows.ActionActivity.create(model);
	actionActivity2.relativeMiddlePoint = {"x":330,"y":200};
	actionActivity2.size = {"width":90,"height":60};
	actionActivity2.action = rollbackAction1;

	var rollbackAction2 = microflows.RollbackAction.create(model);
	rollbackAction2.rollbackVariableName = "TemplateDocument";

	var actionActivity3 = microflows.ActionActivity.create(model);
	actionActivity3.relativeMiddlePoint = {"x":475,"y":200};
	actionActivity3.size = {"width":150,"height":60};
	actionActivity3.action = rollbackAction2;

	var closeFormAction1 = microflows.CloseFormAction.create(model);

	var actionActivity4 = microflows.ActionActivity.create(model);
	actionActivity4.relativeMiddlePoint = {"x":615,"y":200};
	actionActivity4.size = {"width":80,"height":60};
	actionActivity4.action = closeFormAction1;

	var endEvent1 = microflows.EndEvent.create(model);
	endEvent1.relativeMiddlePoint = {"x":700,"y":200};
	endEvent1.size = {"width":20,"height":20};

	var microflowObjectCollection1 = microflows.MicroflowObjectCollection.create(model);
	microflowObjectCollection1.objects.push(startEvent1);
	microflowObjectCollection1.objects.push(templateDocument1);
	microflowObjectCollection1.objects.push(actionActivity1);
	microflowObjectCollection1.objects.push(actionActivity2);
	microflowObjectCollection1.objects.push(actionActivity3);
	microflowObjectCollection1.objects.push(actionActivity4);
	microflowObjectCollection1.objects.push(endEvent1);

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
	sequenceFlow5.destinationBezierVector = {"width":-15,"height":0};
	sequenceFlow5.caseValue = noCase5;   // Note: for this property a default value is defined.

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

	var iVK_TemplateDoc_Cancel1 = microflows.Microflow.createIn(unit);
	iVK_TemplateDoc_Cancel1.name = "IVK_TemplateDoc_Cancel";
	iVK_TemplateDoc_Cancel1.objectCollection = microflowObjectCollection1;   // Note: for this property a default value is defined.
	iVK_TemplateDoc_Cancel1.flows.push(sequenceFlow1);
	iVK_TemplateDoc_Cancel1.flows.push(sequenceFlow2);
	iVK_TemplateDoc_Cancel1.flows.push(sequenceFlow3);
	iVK_TemplateDoc_Cancel1.flows.push(sequenceFlow4);
	iVK_TemplateDoc_Cancel1.flows.push(sequenceFlow5);
	iVK_TemplateDoc_Cancel1.microflowReturnType = voidType1;
	iVK_TemplateDoc_Cancel1.allowedModuleRoles.push(model.findModuleRoleByQualifiedName("ExcelImporter.Configurator"));
	iVK_TemplateDoc_Cancel1.concurrencyErrorMessage = text1;   // Note: for this property a default value is defined.

	sequenceFlow1.origin = startEvent1;
	sequenceFlow1.destination = actionActivity1;

	sequenceFlow2.origin = actionActivity1;
	sequenceFlow2.destination = actionActivity2;

	sequenceFlow3.origin = actionActivity2;
	sequenceFlow3.destination = actionActivity3;

	sequenceFlow4.origin = actionActivity3;
	sequenceFlow4.destination = actionActivity4;

	sequenceFlow5.origin = actionActivity4;
	sequenceFlow5.destination = endEvent1;

})