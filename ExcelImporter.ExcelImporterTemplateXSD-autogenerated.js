(function (unit, model) {

	/*
	 * JavaScript code generated by mendixmodelsdk.sdk.extras.JavaScriptSerializer
	 * from unit with id "052c0a76-06c2-4c0e-8347-b7cf7cca5fae" of type Microflows$Microflow
	 * in working copy "SoccerSquad"
	 * on 20-12-2024.
	 */

	var startEvent1 = microflows.StartEvent.create(model);
	startEvent1.relativeMiddlePoint = {"x":100,"y":200};
	startEvent1.size = {"width":20,"height":20};

	var endEvent1 = microflows.EndEvent.create(model);
	endEvent1.relativeMiddlePoint = {"x":700,"y":200};
	endEvent1.size = {"width":20,"height":20};
	endEvent1.returnValue = "$Template";

	var constantRange1 = microflows.ConstantRange.create(model);
	constantRange1.singleObject = true;

	var sortItemList1 = microflows.SortItemList.create(model);

	var databaseRetrieveSource1 = microflows.DatabaseRetrieveSource.create(model);
	databaseRetrieveSource1.entity = model.findEntityByQualifiedName("ExcelImporter.Template");
	databaseRetrieveSource1.range = constantRange1;   // Note: for this property a default value is defined.
	databaseRetrieveSource1.sortItemList = sortItemList1;   // Note: for this property a default value is defined.

	var retrieveAction1 = microflows.RetrieveAction.create(model);
	retrieveAction1.retrieveSource = databaseRetrieveSource1;   // Note: for this property a default value is defined.
	retrieveAction1.outputVariableName = "Template";

	var actionActivity1 = microflows.ActionActivity.create(model);
	actionActivity1.relativeMiddlePoint = {"x":280,"y":200};
	actionActivity1.size = {"width":120,"height":60};
	actionActivity1.action = retrieveAction1;

	var annotation1 = microflows.Annotation.create(model);
	annotation1.relativeMiddlePoint = {"x":150,"y":60};
	annotation1.size = {"width":260,"height":140};
	annotation1.caption = "This microflow is only used by the ExcelImporterTemplateXSD web service. We use this to generate the XSD to export and import Excel Templates";

	var microflowObjectCollection1 = microflows.MicroflowObjectCollection.create(model);
	microflowObjectCollection1.objects.push(startEvent1);
	microflowObjectCollection1.objects.push(endEvent1);
	microflowObjectCollection1.objects.push(actionActivity1);
	microflowObjectCollection1.objects.push(annotation1);

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

	var objectType1 = datatypes.ObjectType.create(model);
	objectType1.entity = model.findEntityByQualifiedName("ExcelImporter.Template");

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

	var excelImporterTemplateXSD1 = microflows.Microflow.createIn(unit);
	excelImporterTemplateXSD1.name = "ExcelImporterTemplateXSD";
	excelImporterTemplateXSD1.objectCollection = microflowObjectCollection1;   // Note: for this property a default value is defined.
	excelImporterTemplateXSD1.flows.push(sequenceFlow1);
	excelImporterTemplateXSD1.flows.push(sequenceFlow2);
	excelImporterTemplateXSD1.microflowReturnType = objectType1;
	excelImporterTemplateXSD1.allowedModuleRoles.push(model.findModuleRoleByQualifiedName("ExcelImporter.Configurator"));
	excelImporterTemplateXSD1.concurrencyErrorMessage = text1;   // Note: for this property a default value is defined.

	sequenceFlow1.origin = startEvent1;
	sequenceFlow1.destination = actionActivity1;

	sequenceFlow2.origin = actionActivity1;
	sequenceFlow2.destination = endEvent1;

})