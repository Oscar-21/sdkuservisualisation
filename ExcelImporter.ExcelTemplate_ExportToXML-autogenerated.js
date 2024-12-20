(function (unit, model) {

	/*
	 * JavaScript code generated by mendixmodelsdk.sdk.extras.JavaScriptSerializer
	 * from unit with id "548e75bc-3204-479d-8f63-2e961700eba4" of type Microflows$Microflow
	 * in working copy "SoccerSquad"
	 * on 20-12-2024.
	 */

	var startEvent1 = microflows.StartEvent.create(model);
	startEvent1.relativeMiddlePoint = {"x":100,"y":200};
	startEvent1.size = {"width":20,"height":20};

	var createObjectAction1 = microflows.CreateObjectAction.create(model);
	createObjectAction1.entity = model.findEntityByQualifiedName("ExcelImporter.XMLDocumentTemplate");
	createObjectAction1.outputVariableName = "NewXMLDocumentTemplate";

	var actionActivity1 = microflows.ActionActivity.create(model);
	actionActivity1.relativeMiddlePoint = {"x":205,"y":200};
	actionActivity1.size = {"width":120,"height":60};
	actionActivity1.action = createObjectAction1;

	var memberChange1 = microflows.MemberChange.create(model);
	memberChange1.association = model.findAssociationBaseByQualifiedName("ExcelImporter.XMLDocumentTemplate_Template");
	memberChange1.value = "$Template";

	var changeObjectAction1 = microflows.ChangeObjectAction.create(model);
	changeObjectAction1.items.push(memberChange1);
	changeObjectAction1.commit = microflows.CommitEnum.Yes;
	changeObjectAction1.changeVariableName = "NewXMLDocumentTemplate";

	var actionActivity2 = microflows.ActionActivity.create(model);
	actionActivity2.relativeMiddlePoint = {"x":350,"y":200};
	actionActivity2.size = {"width":120,"height":60};
	actionActivity2.action = changeObjectAction1;

	var mappingRequestHandling1 = microflows.MappingRequestHandling.create(model);
	mappingRequestHandling1.mapping = model.findExportMappingByQualifiedName("ExcelImporter.DomToXML_ExcelTemplate");
	mappingRequestHandling1.mappingArgumentVariableName = "Template";
	mappingRequestHandling1.contentType = microflows.ContentType.Xml;

	var fileDocumentExport1 = microflows.FileDocumentExport.create(model);
	fileDocumentExport1.targetDocumentVariableName = "NewXMLDocumentTemplate";

	var exportXmlAction1 = microflows.ExportXmlAction.create(model);
	exportXmlAction1.errorHandlingType = microflows.ErrorHandlingType.Custom;
	exportXmlAction1.resultHandling = mappingRequestHandling1;   // Note: for this property a default value is defined.
	exportXmlAction1.outputMethod = fileDocumentExport1;   // Note: for this property a default value is defined.

	var actionActivity3 = microflows.ActionActivity.create(model);
	actionActivity3.relativeMiddlePoint = {"x":640,"y":200};
	actionActivity3.size = {"width":120,"height":60};
	actionActivity3.action = exportXmlAction1;

	var memberChange2 = microflows.MemberChange.create(model);
	// Note: this is an unsupported internal property of the Model SDK which is subject to change.
	memberChange2.__attribute.updateWithRawValue("System.FileDocument.Name");
	memberChange2.value = "'ExcelTemplate_' + $Template/Title + '_' + formatDateTime([%CurrentDateTime%], 'yyyy-MM-dd_HHmm') + '.xml'";

	var changeObjectAction2 = microflows.ChangeObjectAction.create(model);
	changeObjectAction2.items.push(memberChange2);
	changeObjectAction2.commit = microflows.CommitEnum.Yes;
	changeObjectAction2.changeVariableName = "NewXMLDocumentTemplate";

	var actionActivity4 = microflows.ActionActivity.create(model);
	actionActivity4.relativeMiddlePoint = {"x":785,"y":200};
	actionActivity4.size = {"width":120,"height":60};
	actionActivity4.action = changeObjectAction2;

	var downloadFileAction1 = microflows.DownloadFileAction.create(model);
	downloadFileAction1.fileDocumentVariableName = "NewXMLDocumentTemplate";

	var actionActivity5 = microflows.ActionActivity.create(model);
	actionActivity5.relativeMiddlePoint = {"x":930,"y":200};
	actionActivity5.size = {"width":120,"height":60};
	actionActivity5.action = downloadFileAction1;

	var endEvent1 = microflows.EndEvent.create(model);
	endEvent1.relativeMiddlePoint = {"x":1140,"y":200};
	endEvent1.size = {"width":20,"height":20};
	endEvent1.returnValue = "$NewXMLDocumentTemplate";

	var templateArgument1 = microflows.TemplateArgument.create(model);
	templateArgument1.expression = "$latestError/Message";

	var translation1 = texts.Translation.create(model);
	translation1.languageCode = "nl_NL";
	translation1.text = "{1}";

	var translation2 = texts.Translation.create(model);
	translation2.languageCode = "en_US";
	translation2.text = "{1}";

	var translation3 = texts.Translation.create(model);
	translation3.languageCode = "en_GB";
	translation3.text = "{1}";

	var translation4 = texts.Translation.create(model);
	translation4.languageCode = "en_ZA";
	translation4.text = "{1}";

	var text1 = texts.Text.create(model);
	text1.translations.push(translation1);
	text1.translations.push(translation2);
	text1.translations.push(translation3);
	text1.translations.push(translation4);

	var textTemplate1 = microflows.TextTemplate.create(model);
	textTemplate1.arguments.push(templateArgument1);
	textTemplate1.text = text1;   // Note: for this property a default value is defined.

	var showMessageAction1 = microflows.ShowMessageAction.create(model);
	showMessageAction1.template = textTemplate1;   // Note: for this property a default value is defined.
	showMessageAction1.type = microflows.ShowMessageType.Error;

	var actionActivity6 = microflows.ActionActivity.create(model);
	actionActivity6.relativeMiddlePoint = {"x":640,"y":295};
	actionActivity6.size = {"width":120,"height":60};
	actionActivity6.action = showMessageAction1;
	actionActivity6.backgroundColor = microflows.ActionActivityColor.Red;

	var endEvent2 = microflows.EndEvent.create(model);
	endEvent2.relativeMiddlePoint = {"x":640,"y":460};
	endEvent2.size = {"width":20,"height":20};
	endEvent2.returnValue = "empty";

	var templateArgument2 = microflows.TemplateArgument.create(model);
	templateArgument2.expression = "$Template/Title";

	var stringTemplate1 = microflows.StringTemplate.create(model);
	stringTemplate1.arguments.push(templateArgument2);
	stringTemplate1.text = "Exception while exporting template: {1}";

	var logMessageAction1 = microflows.LogMessageAction.create(model);
	logMessageAction1.level = microflows.LogLevel.Error;
	logMessageAction1.node = "'ExcelTemplateManager'";
	logMessageAction1.messageTemplate = stringTemplate1;   // Note: for this property a default value is defined.
	logMessageAction1.includeLatestStackTrace = true;

	var actionActivity7 = microflows.ActionActivity.create(model);
	actionActivity7.relativeMiddlePoint = {"x":640,"y":385};
	actionActivity7.size = {"width":120,"height":60};
	actionActivity7.action = logMessageAction1;
	actionActivity7.backgroundColor = microflows.ActionActivityColor.Red;

	var objectType1 = datatypes.ObjectType.create(model);
	objectType1.entity = model.findEntityByQualifiedName("ExcelImporter.Template");

	var template1 = microflows.MicroflowParameterObject.create(model);
	template1.relativeMiddlePoint = {"x":100,"y":100};
	template1.size = {"width":30,"height":30};
	template1.name = "Template";
	template1.variableType = objectType1;   // Note: for this property a default value is defined.

	var annotation1 = microflows.Annotation.create(model);
	annotation1.relativeMiddlePoint = {"x":260,"y":0};
	annotation1.size = {"width":390,"height":110};
	annotation1.caption = "Based on MB_ExportToXML in the DatabaseReplication module.\r\n\r\nThis microflow is used to export the Excel Template in the Template parameter to XML.";

	var microflowObjectCollection1 = microflows.MicroflowObjectCollection.create(model);
	microflowObjectCollection1.objects.push(startEvent1);
	microflowObjectCollection1.objects.push(actionActivity1);
	microflowObjectCollection1.objects.push(actionActivity2);
	microflowObjectCollection1.objects.push(actionActivity3);
	microflowObjectCollection1.objects.push(actionActivity4);
	microflowObjectCollection1.objects.push(actionActivity5);
	microflowObjectCollection1.objects.push(endEvent1);
	microflowObjectCollection1.objects.push(actionActivity6);
	microflowObjectCollection1.objects.push(endEvent2);
	microflowObjectCollection1.objects.push(actionActivity7);
	microflowObjectCollection1.objects.push(template1);
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
	sequenceFlow4.destinationBezierVector = {"width":-15,"height":0};
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
	sequenceFlow6.destinationBezierVector = {"width":-30,"height":0};
	sequenceFlow6.caseValue = noCase6;   // Note: for this property a default value is defined.

	var noCase7 = microflows.NoCase.create(model);

	var sequenceFlow7 = microflows.SequenceFlow.create(model);
	sequenceFlow7.originConnectionIndex = 2;
	sequenceFlow7.originBezierVector = {"width":0,"height":30};
	sequenceFlow7.destinationBezierVector = {"width":0,"height":-30};
	sequenceFlow7.caseValue = noCase7;   // Note: for this property a default value is defined.
	sequenceFlow7.isErrorHandler = true;

	var noCase8 = microflows.NoCase.create(model);

	var sequenceFlow8 = microflows.SequenceFlow.create(model);
	sequenceFlow8.originConnectionIndex = 2;
	sequenceFlow8.originBezierVector = {"width":0,"height":30};
	sequenceFlow8.destinationBezierVector = {"width":0,"height":-30};
	sequenceFlow8.caseValue = noCase8;   // Note: for this property a default value is defined.

	var noCase9 = microflows.NoCase.create(model);

	var sequenceFlow9 = microflows.SequenceFlow.create(model);
	sequenceFlow9.originConnectionIndex = 2;
	sequenceFlow9.originBezierVector = {"width":0,"height":30};
	sequenceFlow9.destinationBezierVector = {"width":0,"height":-15};
	sequenceFlow9.caseValue = noCase9;   // Note: for this property a default value is defined.

	var objectType2 = datatypes.ObjectType.create(model);
	objectType2.entity = model.findEntityByQualifiedName("ExcelImporter.XMLDocumentTemplate");

	var translation5 = texts.Translation.create(model);
	translation5.languageCode = "en_US";

	var translation6 = texts.Translation.create(model);
	translation6.languageCode = "en_GB";

	var translation7 = texts.Translation.create(model);
	translation7.languageCode = "en_ZA";

	var text2 = texts.Text.create(model);
	text2.translations.push(translation5);
	text2.translations.push(translation6);
	text2.translations.push(translation7);

	var excelTemplate_ExportToXML1 = microflows.Microflow.createIn(unit);
	excelTemplate_ExportToXML1.name = "ExcelTemplate_ExportToXML";
	excelTemplate_ExportToXML1.objectCollection = microflowObjectCollection1;   // Note: for this property a default value is defined.
	excelTemplate_ExportToXML1.flows.push(sequenceFlow1);
	excelTemplate_ExportToXML1.flows.push(sequenceFlow2);
	excelTemplate_ExportToXML1.flows.push(sequenceFlow3);
	excelTemplate_ExportToXML1.flows.push(sequenceFlow4);
	excelTemplate_ExportToXML1.flows.push(sequenceFlow5);
	excelTemplate_ExportToXML1.flows.push(sequenceFlow6);
	excelTemplate_ExportToXML1.flows.push(sequenceFlow7);
	excelTemplate_ExportToXML1.flows.push(sequenceFlow8);
	excelTemplate_ExportToXML1.flows.push(sequenceFlow9);
	excelTemplate_ExportToXML1.microflowReturnType = objectType2;
	excelTemplate_ExportToXML1.allowedModuleRoles.push(model.findModuleRoleByQualifiedName("ExcelImporter.Configurator"));
	excelTemplate_ExportToXML1.concurrencyErrorMessage = text2;   // Note: for this property a default value is defined.

	sequenceFlow1.origin = startEvent1;
	sequenceFlow1.destination = actionActivity1;

	sequenceFlow2.origin = actionActivity1;
	sequenceFlow2.destination = actionActivity2;

	sequenceFlow3.origin = actionActivity2;
	sequenceFlow3.destination = actionActivity3;

	sequenceFlow4.origin = actionActivity5;
	sequenceFlow4.destination = endEvent1;

	sequenceFlow5.origin = actionActivity4;
	sequenceFlow5.destination = actionActivity5;

	sequenceFlow6.origin = actionActivity3;
	sequenceFlow6.destination = actionActivity4;

	sequenceFlow7.origin = actionActivity3;
	sequenceFlow7.destination = actionActivity6;

	sequenceFlow8.origin = actionActivity6;
	sequenceFlow8.destination = actionActivity7;

	sequenceFlow9.origin = actionActivity7;
	sequenceFlow9.destination = endEvent2;

})