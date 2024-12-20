(function (unit, model) {

	/*
	 * JavaScript code generated by mendixmodelsdk.sdk.extras.JavaScriptSerializer
	 * from unit with id "13b4774d-9a0b-473d-bb05-c263c387f4c6" of type Microflows$Microflow
	 * in working copy "SoccerSquad"
	 * on 20-12-2024.
	 */

	var startEvent1 = microflows.StartEvent.create(model);
	startEvent1.relativeMiddlePoint = {"x":210,"y":200};
	startEvent1.size = {"width":20,"height":20};

	var objectType1 = datatypes.ObjectType.create(model);
	objectType1.entity = model.findEntityByQualifiedName("ExcelImporter.XMLDocumentTemplate");

	var xMLDocumentTemplate1 = microflows.MicroflowParameterObject.create(model);
	xMLDocumentTemplate1.relativeMiddlePoint = {"x":210,"y":50};
	xMLDocumentTemplate1.size = {"width":30,"height":30};
	xMLDocumentTemplate1.name = "XMLDocumentTemplate";
	xMLDocumentTemplate1.variableType = objectType1;   // Note: for this property a default value is defined.

	var closeFormAction1 = microflows.CloseFormAction.create(model);

	var actionActivity1 = microflows.ActionActivity.create(model);
	actionActivity1.relativeMiddlePoint = {"x":360,"y":200};
	actionActivity1.size = {"width":120,"height":60};
	actionActivity1.action = closeFormAction1;

	var constantRange1 = microflows.ConstantRange.create(model);

	var importMappingCall1 = microflows.ImportMappingCall.create(model);
	importMappingCall1.mapping = model.findImportMappingByQualifiedName("ExcelImporter.XMLToDom_ExcelTemplate");
	importMappingCall1.range = constantRange1;   // Note: for this property a default value is defined.
	importMappingCall1.contentType = microflows.ContentType.Xml;

	var voidType1 = datatypes.VoidType.create(model);

	var resultHandling1 = microflows.ResultHandling.create(model);
	resultHandling1.importMappingCall = importMappingCall1;
	resultHandling1.variableType = voidType1;   // Note: for this property a default value is defined.

	var importXmlAction1 = microflows.ImportXmlAction.create(model);
	importXmlAction1.errorHandlingType = microflows.ErrorHandlingType.Custom;
	importXmlAction1.xmlDocumentVariableName = "XMLDocumentTemplate";
	importXmlAction1.resultHandling = resultHandling1;   // Note: for this property a default value is defined.

	var actionActivity2 = microflows.ActionActivity.create(model);
	actionActivity2.relativeMiddlePoint = {"x":600,"y":200};
	actionActivity2.size = {"width":120,"height":60};
	actionActivity2.action = importXmlAction1;
	actionActivity2.caption = "Import XML document";
	actionActivity2.autoGenerateCaption = false;

	var memberChange1 = microflows.MemberChange.create(model);
	memberChange1.association = model.findAssociationBaseByQualifiedName("ExcelImporter.Log_XMLDocumentTemplate");
	memberChange1.value = "$XMLDocumentTemplate";

	var memberChange2 = microflows.MemberChange.create(model);
	memberChange2.attribute = model.findAttributeByQualifiedName("ExcelImporter.Log.Logline");
	memberChange2.value = "'The mapping from XML to Domain throwed an error. Be sure the MxModelReflection and selected DB is synchronized.\n' + 'LastErrorMessage: ' + $latestError/Message + '.\n' + '' + 'LastErrorStackTrace' + $latestError/Stacktrace";

	var changeObjectAction1 = microflows.ChangeObjectAction.create(model);
	changeObjectAction1.items.push(memberChange1);
	changeObjectAction1.items.push(memberChange2);
	changeObjectAction1.commit = microflows.CommitEnum.Yes;
	changeObjectAction1.changeVariableName = "NewLogXMLToDom";

	var actionActivity3 = microflows.ActionActivity.create(model);
	actionActivity3.relativeMiddlePoint = {"x":940,"y":340};
	actionActivity3.size = {"width":120,"height":60};
	actionActivity3.action = changeObjectAction1;
	actionActivity3.backgroundColor = microflows.ActionActivityColor.Red;

	var endEvent1 = microflows.EndEvent.create(model);
	endEvent1.relativeMiddlePoint = {"x":1195,"y":340};
	endEvent1.size = {"width":20,"height":20};

	var endEvent2 = microflows.EndEvent.create(model);
	endEvent2.relativeMiddlePoint = {"x":1195,"y":200};
	endEvent2.size = {"width":20,"height":20};

	var annotation1 = microflows.Annotation.create(model);
	annotation1.relativeMiddlePoint = {"x":290,"y":-75};
	annotation1.size = {"width":350,"height":120};
	annotation1.caption = "Based on the MB_ImportXMLFile microflow in the DatabaseReplication module.\r\n\r\nImport the XML containing the ExcelTemplate.\r\n";

	var createObjectAction1 = microflows.CreateObjectAction.create(model);
	createObjectAction1.entity = model.findEntityByQualifiedName("ExcelImporter.Log");
	createObjectAction1.outputVariableName = "NewLogXMLToDom";

	var actionActivity4 = microflows.ActionActivity.create(model);
	actionActivity4.relativeMiddlePoint = {"x":790,"y":340};
	actionActivity4.size = {"width":120,"height":60};
	actionActivity4.action = createObjectAction1;
	actionActivity4.backgroundColor = microflows.ActionActivityColor.Red;

	var pageSettings1 = pages.PageSettings.create(model);
	pageSettings1.page = model.findPageByQualifiedName("ExcelImporter.LogMessages_View");

	var showPageAction1 = microflows.ShowPageAction.create(model);
	showPageAction1.pageSettings = pageSettings1;   // Note: for this property a default value is defined.
	showPageAction1.passedObjectVariableName = "XMLDocumentTemplate";

	var actionActivity5 = microflows.ActionActivity.create(model);
	actionActivity5.relativeMiddlePoint = {"x":1095,"y":340};
	actionActivity5.size = {"width":120,"height":60};
	actionActivity5.action = showPageAction1;
	actionActivity5.backgroundColor = microflows.ActionActivityColor.Red;

	var templateArgument1 = microflows.TemplateArgument.create(model);
	templateArgument1.expression = "$XMLDocumentTemplate/Name";

	var stringTemplate1 = microflows.StringTemplate.create(model);
	stringTemplate1.arguments.push(templateArgument1);
	stringTemplate1.text = "Exception while importing Excel template {1}";

	var logMessageAction1 = microflows.LogMessageAction.create(model);
	logMessageAction1.level = microflows.LogLevel.Error;
	logMessageAction1.node = "'ExcelTemplateManager'";
	logMessageAction1.messageTemplate = stringTemplate1;   // Note: for this property a default value is defined.
	logMessageAction1.includeLatestStackTrace = true;

	var actionActivity6 = microflows.ActionActivity.create(model);
	actionActivity6.relativeMiddlePoint = {"x":600,"y":340};
	actionActivity6.size = {"width":120,"height":60};
	actionActivity6.action = logMessageAction1;
	actionActivity6.backgroundColor = microflows.ActionActivityColor.Red;

	var basicCodeActionParameterValue1 = microflows.BasicCodeActionParameterValue.create(model);
	basicCodeActionParameterValue1.argument = "'ExcelImporter.Template'";

	var javaActionParameterMapping1 = microflows.JavaActionParameterMapping.create(model);
	javaActionParameterMapping1.parameter = model.findJavaActionParameterByQualifiedName("ExcelImporter.RefreshClass.objectType");
	javaActionParameterMapping1.parameterValue = basicCodeActionParameterValue1;   // Note: for this property a default value is defined.

	var javaActionCallAction1 = microflows.JavaActionCallAction.create(model);
	javaActionCallAction1.javaAction = model.findJavaActionByQualifiedName("ExcelImporter.RefreshClass");
	javaActionCallAction1.parameterMappings.push(javaActionParameterMapping1);
	javaActionCallAction1.outputVariableName = "Result";

	var actionActivity7 = microflows.ActionActivity.create(model);
	actionActivity7.relativeMiddlePoint = {"x":790,"y":200};
	actionActivity7.size = {"width":120,"height":60};
	actionActivity7.action = javaActionCallAction1;

	var microflowObjectCollection1 = microflows.MicroflowObjectCollection.create(model);
	microflowObjectCollection1.objects.push(startEvent1);
	microflowObjectCollection1.objects.push(xMLDocumentTemplate1);
	microflowObjectCollection1.objects.push(actionActivity1);
	microflowObjectCollection1.objects.push(actionActivity2);
	microflowObjectCollection1.objects.push(actionActivity3);
	microflowObjectCollection1.objects.push(endEvent1);
	microflowObjectCollection1.objects.push(endEvent2);
	microflowObjectCollection1.objects.push(annotation1);
	microflowObjectCollection1.objects.push(actionActivity4);
	microflowObjectCollection1.objects.push(actionActivity5);
	microflowObjectCollection1.objects.push(actionActivity6);
	microflowObjectCollection1.objects.push(actionActivity7);

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
	sequenceFlow3.originConnectionIndex = 2;
	sequenceFlow3.originBezierVector = {"width":0,"height":30};
	sequenceFlow3.destinationBezierVector = {"width":0,"height":-30};
	sequenceFlow3.caseValue = noCase3;   // Note: for this property a default value is defined.
	sequenceFlow3.isErrorHandler = true;

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
	sequenceFlow5.destinationBezierVector = {"width":-30,"height":0};
	sequenceFlow5.caseValue = noCase5;   // Note: for this property a default value is defined.

	var noCase6 = microflows.NoCase.create(model);

	var sequenceFlow6 = microflows.SequenceFlow.create(model);
	sequenceFlow6.originConnectionIndex = 1;
	sequenceFlow6.destinationConnectionIndex = 3;
	sequenceFlow6.originBezierVector = {"width":30,"height":0};
	sequenceFlow6.destinationBezierVector = {"width":-15,"height":0};
	sequenceFlow6.caseValue = noCase6;   // Note: for this property a default value is defined.

	var noCase7 = microflows.NoCase.create(model);

	var sequenceFlow7 = microflows.SequenceFlow.create(model);
	sequenceFlow7.originConnectionIndex = 1;
	sequenceFlow7.destinationConnectionIndex = 3;
	sequenceFlow7.originBezierVector = {"width":30,"height":0};
	sequenceFlow7.destinationBezierVector = {"width":-30,"height":0};
	sequenceFlow7.caseValue = noCase7;   // Note: for this property a default value is defined.

	var noCase8 = microflows.NoCase.create(model);

	var sequenceFlow8 = microflows.SequenceFlow.create(model);
	sequenceFlow8.originConnectionIndex = 1;
	sequenceFlow8.destinationConnectionIndex = 3;
	sequenceFlow8.originBezierVector = {"width":30,"height":0};
	sequenceFlow8.destinationBezierVector = {"width":-30,"height":0};
	sequenceFlow8.caseValue = noCase8;   // Note: for this property a default value is defined.

	var noCase9 = microflows.NoCase.create(model);

	var sequenceFlow9 = microflows.SequenceFlow.create(model);
	sequenceFlow9.originConnectionIndex = 1;
	sequenceFlow9.destinationConnectionIndex = 3;
	sequenceFlow9.originBezierVector = {"width":30,"height":0};
	sequenceFlow9.destinationBezierVector = {"width":-15,"height":0};
	sequenceFlow9.caseValue = noCase9;   // Note: for this property a default value is defined.

	var voidType2 = datatypes.VoidType.create(model);

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

	var excelTemplate_ImportFromXml1 = microflows.Microflow.createIn(unit);
	excelTemplate_ImportFromXml1.name = "ExcelTemplate_ImportFromXml";
	excelTemplate_ImportFromXml1.objectCollection = microflowObjectCollection1;   // Note: for this property a default value is defined.
	excelTemplate_ImportFromXml1.flows.push(sequenceFlow1);
	excelTemplate_ImportFromXml1.flows.push(sequenceFlow2);
	excelTemplate_ImportFromXml1.flows.push(sequenceFlow3);
	excelTemplate_ImportFromXml1.flows.push(sequenceFlow4);
	excelTemplate_ImportFromXml1.flows.push(sequenceFlow5);
	excelTemplate_ImportFromXml1.flows.push(sequenceFlow6);
	excelTemplate_ImportFromXml1.flows.push(sequenceFlow7);
	excelTemplate_ImportFromXml1.flows.push(sequenceFlow8);
	excelTemplate_ImportFromXml1.flows.push(sequenceFlow9);
	excelTemplate_ImportFromXml1.microflowReturnType = voidType2;
	excelTemplate_ImportFromXml1.allowedModuleRoles.push(model.findModuleRoleByQualifiedName("ExcelImporter.Configurator"));
	excelTemplate_ImportFromXml1.concurrencyErrorMessage = text1;   // Note: for this property a default value is defined.

	sequenceFlow1.origin = startEvent1;
	sequenceFlow1.destination = actionActivity1;

	sequenceFlow2.origin = actionActivity1;
	sequenceFlow2.destination = actionActivity2;

	sequenceFlow3.origin = actionActivity2;
	sequenceFlow3.destination = actionActivity6;

	sequenceFlow4.origin = actionActivity4;
	sequenceFlow4.destination = actionActivity3;

	sequenceFlow5.origin = actionActivity3;
	sequenceFlow5.destination = actionActivity5;

	sequenceFlow6.origin = actionActivity5;
	sequenceFlow6.destination = endEvent1;

	sequenceFlow7.origin = actionActivity6;
	sequenceFlow7.destination = actionActivity4;

	sequenceFlow8.origin = actionActivity2;
	sequenceFlow8.destination = actionActivity7;

	sequenceFlow9.origin = actionActivity7;
	sequenceFlow9.destination = endEvent2;

})