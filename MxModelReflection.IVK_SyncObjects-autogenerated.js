(function (unit, model) {

	/*
	 * JavaScript code generated by mendixmodelsdk.sdk.extras.JavaScriptSerializer
	 * from unit with id "f7d0a1c7-95ae-457e-81cc-682900d03d53" of type Microflows$Microflow
	 * in working copy "SoccerSquad"
	 * on 20-12-2024.
	 */

	var javaActionCallAction1 = microflows.JavaActionCallAction.create(model);
	javaActionCallAction1.javaAction = model.findJavaActionByQualifiedName("MxModelReflection.SyncObjects");
	javaActionCallAction1.outputVariableName = "none";

	var actionActivity1 = microflows.ActionActivity.create(model);
	actionActivity1.relativeMiddlePoint = {"x":390,"y":215};
	actionActivity1.size = {"width":160,"height":60};
	actionActivity1.action = javaActionCallAction1;
	actionActivity1.caption = "Sync all mx model reflection objects with the metamodel";
	actionActivity1.autoGenerateCaption = false;

	var endEvent1 = microflows.EndEvent.create(model);
	endEvent1.relativeMiddlePoint = {"x":520,"y":215};
	endEvent1.size = {"width":20,"height":20};

	var startEvent1 = microflows.StartEvent.create(model);
	startEvent1.relativeMiddlePoint = {"x":260,"y":215};
	startEvent1.size = {"width":20,"height":20};

	var microflowObjectCollection1 = microflows.MicroflowObjectCollection.create(model);
	microflowObjectCollection1.objects.push(actionActivity1);
	microflowObjectCollection1.objects.push(endEvent1);
	microflowObjectCollection1.objects.push(startEvent1);

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

	var iVK_SyncObjects1 = microflows.Microflow.createIn(unit);
	iVK_SyncObjects1.name = "IVK_SyncObjects";
	iVK_SyncObjects1.objectCollection = microflowObjectCollection1;   // Note: for this property a default value is defined.
	iVK_SyncObjects1.flows.push(sequenceFlow1);
	iVK_SyncObjects1.flows.push(sequenceFlow2);
	iVK_SyncObjects1.microflowReturnType = voidType1;
	iVK_SyncObjects1.allowedModuleRoles.push(model.findModuleRoleByQualifiedName("MxModelReflection.ModelAdministrator"));
	iVK_SyncObjects1.concurrencyErrorMessage = text1;   // Note: for this property a default value is defined.

	sequenceFlow1.origin = startEvent1;
	sequenceFlow1.destination = actionActivity1;

	sequenceFlow2.origin = actionActivity1;
	sequenceFlow2.destination = endEvent1;

})