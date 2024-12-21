(function (unit, model) {

	/*
	 * JavaScript code generated by mendixmodelsdk.sdk.extras.JavaScriptSerializer
	 * from unit with id "69912335-ca98-4e35-b579-c650dd03aca2" of type Microflows$Microflow
	 * in working copy "SoccerSquad"
	 * on 20-12-2024.
	 */

	var startEvent1 = microflows.StartEvent.create(model);
	startEvent1.relativeMiddlePoint = {"x":40,"y":200};
	startEvent1.size = {"width":20,"height":20};

	var endEvent1 = microflows.EndEvent.create(model);
	endEvent1.relativeMiddlePoint = {"x":710,"y":200};
	endEvent1.size = {"width":20,"height":20};

	var createObjectAction1 = microflows.CreateObjectAction.create(model);
	createObjectAction1.entity = model.findEntityByQualifiedName("SoccerSquad.Team");
	createObjectAction1.outputVariableName = "NewTeam";

	var actionActivity1 = microflows.ActionActivity.create(model);
	actionActivity1.relativeMiddlePoint = {"x":185,"y":200};
	actionActivity1.size = {"width":120,"height":60};
	actionActivity1.action = createObjectAction1;

	var translation1 = texts.Translation.create(model);
	translation1.languageCode = "en_US";
	translation1.text = "New Team";

	var text1 = texts.Text.create(model);
	text1.translations.push(translation1);

	var textTemplate1 = microflows.TextTemplate.create(model);
	textTemplate1.text = text1;   // Note: for this property a default value is defined.

	var pageSettings1 = pages.PageSettings.create(model);
	pageSettings1.page = model.findPageByQualifiedName("SoccerSquad.Team_NewEdit");
	pageSettings1.titleOverride = textTemplate1;

	var showPageAction1 = microflows.ShowPageAction.create(model);
	showPageAction1.pageSettings = pageSettings1;   // Note: for this property a default value is defined.
	showPageAction1.passedObjectVariableName = "NewTeam";

	var actionActivity2 = microflows.ActionActivity.create(model);
	actionActivity2.relativeMiddlePoint = {"x":570,"y":200};
	actionActivity2.size = {"width":120,"height":60};
	actionActivity2.action = showPageAction1;

	var microflowCallParameterMapping1 = microflows.MicroflowCallParameterMapping.create(model);
	// Note: this is an unsupported internal property of the Model SDK which is subject to change.
	microflowCallParameterMapping1.__parameter.updateWithRawValue("SoccerSquad.SUB_Team_CreateLogo.Team");
	microflowCallParameterMapping1.argument = "$NewTeam";

	var microflowCall1 = microflows.MicroflowCall.create(model);
	microflowCall1.microflow = model.findMicroflowByQualifiedName("SoccerSquad.SUB_Team_CreateLogo");
	microflowCall1.parameterMappings.push(microflowCallParameterMapping1);

	var microflowCallAction1 = microflows.MicroflowCallAction.create(model);
	microflowCallAction1.microflowCall = microflowCall1;   // Note: for this property a default value is defined.

	var actionActivity3 = microflows.ActionActivity.create(model);
	actionActivity3.relativeMiddlePoint = {"x":365,"y":210};
	actionActivity3.size = {"width":120,"height":60};
	actionActivity3.action = microflowCallAction1;

	var microflowObjectCollection1 = microflows.MicroflowObjectCollection.create(model);
	microflowObjectCollection1.objects.push(startEvent1);
	microflowObjectCollection1.objects.push(endEvent1);
	microflowObjectCollection1.objects.push(actionActivity1);
	microflowObjectCollection1.objects.push(actionActivity2);
	microflowObjectCollection1.objects.push(actionActivity3);

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

	var noCase4 = microflows.NoCase.create(model);

	var sequenceFlow4 = microflows.SequenceFlow.create(model);
	sequenceFlow4.originConnectionIndex = 1;
	sequenceFlow4.destinationConnectionIndex = 3;
	sequenceFlow4.originBezierVector = {"width":30,"height":0};
	sequenceFlow4.destinationBezierVector = {"width":-30,"height":0};
	sequenceFlow4.caseValue = noCase4;   // Note: for this property a default value is defined.

	var voidType1 = datatypes.VoidType.create(model);

	var translation2 = texts.Translation.create(model);
	translation2.languageCode = "en_US";

	var text2 = texts.Text.create(model);
	text2.translations.push(translation2);

	var aCT_Team_CreateNew1 = microflows.Microflow.createIn(unit);
	aCT_Team_CreateNew1.name = "ACT_Team_CreateNew";
	aCT_Team_CreateNew1.objectCollection = microflowObjectCollection1;   // Note: for this property a default value is defined.
	aCT_Team_CreateNew1.flows.push(sequenceFlow1);
	aCT_Team_CreateNew1.flows.push(sequenceFlow2);
	aCT_Team_CreateNew1.flows.push(sequenceFlow3);
	aCT_Team_CreateNew1.flows.push(sequenceFlow4);
	aCT_Team_CreateNew1.microflowReturnType = voidType1;
	aCT_Team_CreateNew1.allowedModuleRoles.push(model.findModuleRoleByQualifiedName("SoccerSquad.Administrator"));
	aCT_Team_CreateNew1.concurrencyErrorMessage = text2;   // Note: for this property a default value is defined.

	sequenceFlow1.origin = startEvent1;
	sequenceFlow1.destination = actionActivity1;

	sequenceFlow2.origin = actionActivity1;
	sequenceFlow2.destination = actionActivity3;

	sequenceFlow3.origin = actionActivity2;
	sequenceFlow3.destination = endEvent1;

	sequenceFlow4.origin = actionActivity3;
	sequenceFlow4.destination = actionActivity2;

})