(function (unit, model) {

	/*
	 * JavaScript code generated by mendixmodelsdk.sdk.extras.JavaScriptSerializer
	 * from unit with id "47ea9d39-27f3-4465-8646-52211a3bad12" of type Microflows$Microflow
	 * in working copy "SoccerSquad"
	 * on 20-12-2024.
	 */

	var startEvent1 = microflows.StartEvent.create(model);
	startEvent1.relativeMiddlePoint = {"x":190,"y":270};
	startEvent1.size = {"width":20,"height":20};

	var constantRange1 = microflows.ConstantRange.create(model);
	constantRange1.singleObject = true;

	var sortItemList1 = microflows.SortItemList.create(model);

	var databaseRetrieveSource1 = microflows.DatabaseRetrieveSource.create(model);
	databaseRetrieveSource1.entity = model.findEntityByQualifiedName("ExcelImporter.Template");
	databaseRetrieveSource1.range = constantRange1;   // Note: for this property a default value is defined.
	databaseRetrieveSource1.xPathConstraint = "[Title= $TemplateName]";
	databaseRetrieveSource1.sortItemList = sortItemList1;   // Note: for this property a default value is defined.

	var retrieveAction1 = microflows.RetrieveAction.create(model);
	retrieveAction1.retrieveSource = databaseRetrieveSource1;   // Note: for this property a default value is defined.
	retrieveAction1.outputVariableName = "Template";

	var actionActivity1 = microflows.ActionActivity.create(model);
	actionActivity1.relativeMiddlePoint = {"x":400,"y":270};
	actionActivity1.size = {"width":120,"height":60};
	actionActivity1.action = retrieveAction1;

	var exclusiveMerge1 = microflows.ExclusiveMerge.create(model);
	exclusiveMerge1.relativeMiddlePoint = {"x":285,"y":270};
	exclusiveMerge1.size = {"width":40,"height":30};

	var expressionSplitCondition1 = microflows.ExpressionSplitCondition.create(model);
	expressionSplitCondition1.expression = "$Template != empty";

	var exclusiveSplit1 = microflows.ExclusiveSplit.create(model);
	exclusiveSplit1.relativeMiddlePoint = {"x":535,"y":270};
	exclusiveSplit1.size = {"width":60,"height":40};
	exclusiveSplit1.splitCondition = expressionSplitCondition1;   // Note: for this property a default value is defined.
	exclusiveSplit1.caption = "found?";

	var memberChange1 = microflows.MemberChange.create(model);
	memberChange1.attribute = model.findAttributeByQualifiedName("ExcelImporter.Template.Title");
	memberChange1.value = "$TemplateName";

	var createObjectAction1 = microflows.CreateObjectAction.create(model);
	createObjectAction1.items.push(memberChange1);
	createObjectAction1.commit = microflows.CommitEnum.Yes;
	createObjectAction1.entity = model.findEntityByQualifiedName("ExcelImporter.Template");
	createObjectAction1.outputVariableName = "NewTemplate";

	var actionActivity2 = microflows.ActionActivity.create(model);
	actionActivity2.relativeMiddlePoint = {"x":400,"y":375};
	actionActivity2.size = {"width":120,"height":60};
	actionActivity2.action = createObjectAction1;

	var microflowCallParameterMapping1 = microflows.MicroflowCallParameterMapping.create(model);
	// Note: this is an unsupported internal property of the Model SDK which is subject to change.
	microflowCallParameterMapping1.__parameter.updateWithRawValue("MxModelReflection.FindObjectType.ObjectTypeSearchString");
	microflowCallParameterMapping1.argument = "$ImportObjectTypeName";

	var microflowCallParameterMapping2 = microflows.MicroflowCallParameterMapping.create(model);
	// Note: this is an unsupported internal property of the Model SDK which is subject to change.
	microflowCallParameterMapping2.__parameter.updateWithRawValue("MxModelReflection.FindObjectType.MxObjectReference_optional");
	microflowCallParameterMapping2.argument = "empty";

	var microflowCall1 = microflows.MicroflowCall.create(model);
	microflowCall1.microflow = model.findMicroflowByQualifiedName("MxModelReflection.FindObjectType");
	microflowCall1.parameterMappings.push(microflowCallParameterMapping1);
	microflowCall1.parameterMappings.push(microflowCallParameterMapping2);

	var microflowCallAction1 = microflows.MicroflowCallAction.create(model);
	microflowCallAction1.microflowCall = microflowCall1;   // Note: for this property a default value is defined.
	microflowCallAction1.outputVariableName = "MxObjectType";

	var actionActivity3 = microflows.ActionActivity.create(model);
	actionActivity3.relativeMiddlePoint = {"x":705,"y":270};
	actionActivity3.size = {"width":130,"height":60};
	actionActivity3.action = microflowCallAction1;

	var microflowCallParameterMapping3 = microflows.MicroflowCallParameterMapping.create(model);
	// Note: this is an unsupported internal property of the Model SDK which is subject to change.
	microflowCallParameterMapping3.__parameter.updateWithRawValue("MxModelReflection.FindReference.ReferenceSearchString");
	microflowCallParameterMapping3.argument = "$ParentReferenceName";

	var microflowCallParameterMapping4 = microflows.MicroflowCallParameterMapping.create(model);
	// Note: this is an unsupported internal property of the Model SDK which is subject to change.
	microflowCallParameterMapping4.__parameter.updateWithRawValue("MxModelReflection.FindReference.MxObjectType_optional");
	microflowCallParameterMapping4.argument = "$MxObjectType";

	var microflowCall2 = microflows.MicroflowCall.create(model);
	microflowCall2.microflow = model.findMicroflowByQualifiedName("MxModelReflection.FindReference");
	microflowCall2.parameterMappings.push(microflowCallParameterMapping3);
	microflowCall2.parameterMappings.push(microflowCallParameterMapping4);

	var microflowCallAction2 = microflows.MicroflowCallAction.create(model);
	microflowCallAction2.microflowCall = microflowCall2;   // Note: for this property a default value is defined.
	microflowCallAction2.outputVariableName = "MxObjectReference";

	var actionActivity4 = microflows.ActionActivity.create(model);
	actionActivity4.relativeMiddlePoint = {"x":875,"y":270};
	actionActivity4.size = {"width":120,"height":60};
	actionActivity4.action = microflowCallAction2;

	var memberChange2 = microflows.MemberChange.create(model);
	memberChange2.attribute = model.findAttributeByQualifiedName("ExcelImporter.Template.SheetIndex");
	memberChange2.value = "1";

	var memberChange3 = microflows.MemberChange.create(model);
	memberChange3.attribute = model.findAttributeByQualifiedName("ExcelImporter.Template.HeaderRowNumber");
	memberChange3.value = "if $DataRowNr > 0 \nthen $DataRowNr - 1\n\nelse 0";

	var memberChange4 = microflows.MemberChange.create(model);
	memberChange4.attribute = model.findAttributeByQualifiedName("ExcelImporter.Template.FirstDataRowNumber");
	memberChange4.value = "$DataRowNr";

	var memberChange5 = microflows.MemberChange.create(model);
	memberChange5.attribute = model.findAttributeByQualifiedName("ExcelImporter.Template.ImportAction");
	memberChange5.value = "$ImportActions";

	var memberChange6 = microflows.MemberChange.create(model);
	memberChange6.attribute = model.findAttributeByQualifiedName("ExcelImporter.Template.TemplateType");
	memberChange6.value = "ExcelImporter.TemplateType.Normal";

	var memberChange7 = microflows.MemberChange.create(model);
	memberChange7.association = model.findAssociationBaseByQualifiedName("ExcelImporter.Template_MxObjectType");
	memberChange7.value = "$MxObjectType";

	var memberChange8 = microflows.MemberChange.create(model);
	memberChange8.association = model.findAssociationBaseByQualifiedName("ExcelImporter.Template_MxObjectReference_ParentAssociation");
	memberChange8.value = "$MxObjectReference";

	var changeObjectAction1 = microflows.ChangeObjectAction.create(model);
	changeObjectAction1.items.push(memberChange2);
	changeObjectAction1.items.push(memberChange3);
	changeObjectAction1.items.push(memberChange4);
	changeObjectAction1.items.push(memberChange5);
	changeObjectAction1.items.push(memberChange6);
	changeObjectAction1.items.push(memberChange7);
	changeObjectAction1.items.push(memberChange8);
	changeObjectAction1.commit = microflows.CommitEnum.Yes;
	changeObjectAction1.changeVariableName = "Template";

	var actionActivity5 = microflows.ActionActivity.create(model);
	actionActivity5.relativeMiddlePoint = {"x":1100,"y":270};
	actionActivity5.size = {"width":200,"height":120};
	actionActivity5.action = changeObjectAction1;

	var stringType1 = datatypes.StringType.create(model);

	var templateName1 = microflows.MicroflowParameterObject.create(model);
	templateName1.relativeMiddlePoint = {"x":190,"y":-55};
	templateName1.size = {"width":30,"height":30};
	templateName1.name = "TemplateName";
	templateName1.variableType = stringType1;   // Note: for this property a default value is defined.

	var stringType2 = datatypes.StringType.create(model);

	var importObjectTypeName1 = microflows.MicroflowParameterObject.create(model);
	importObjectTypeName1.relativeMiddlePoint = {"x":190,"y":35};
	importObjectTypeName1.size = {"width":30,"height":30};
	importObjectTypeName1.name = "ImportObjectTypeName";
	importObjectTypeName1.variableType = stringType2;   // Note: for this property a default value is defined.

	var stringType3 = datatypes.StringType.create(model);

	var parentReferenceName1 = microflows.MicroflowParameterObject.create(model);
	parentReferenceName1.relativeMiddlePoint = {"x":335,"y":35};
	parentReferenceName1.size = {"width":30,"height":30};
	parentReferenceName1.name = "ParentReferenceName";
	parentReferenceName1.variableType = stringType3;   // Note: for this property a default value is defined.

	var integerType1 = datatypes.IntegerType.create(model);

	var dataRowNr1 = microflows.MicroflowParameterObject.create(model);
	dataRowNr1.relativeMiddlePoint = {"x":190,"y":115};
	dataRowNr1.size = {"width":30,"height":30};
	dataRowNr1.name = "DataRowNr";
	dataRowNr1.variableType = integerType1;   // Note: for this property a default value is defined.

	var enumerationType1 = datatypes.EnumerationType.create(model);
	enumerationType1.enumeration = model.findEnumerationByQualifiedName("ExcelImporter.ImportActions");

	var importActions1 = microflows.MicroflowParameterObject.create(model);
	importActions1.relativeMiddlePoint = {"x":335,"y":115};
	importActions1.size = {"width":30,"height":30};
	importActions1.name = "ImportActions";
	importActions1.variableType = enumerationType1;   // Note: for this property a default value is defined.

	var endEvent1 = microflows.EndEvent.create(model);
	endEvent1.relativeMiddlePoint = {"x":1670,"y":270};
	endEvent1.size = {"width":20,"height":20};
	endEvent1.returnValue = "$Template";

	var commitAction1 = microflows.CommitAction.create(model);
	commitAction1.commitVariableName = "AdditionalProperties";

	var actionActivity6 = microflows.ActionActivity.create(model);
	actionActivity6.relativeMiddlePoint = {"x":1495,"y":270};
	actionActivity6.size = {"width":160,"height":60};
	actionActivity6.action = commitAction1;

	var microflowCallParameterMapping5 = microflows.MicroflowCallParameterMapping.create(model);
	// Note: this is an unsupported internal property of the Model SDK which is subject to change.
	microflowCallParameterMapping5.__parameter.updateWithRawValue("ExcelImporter.GetAddProperties.Template");
	microflowCallParameterMapping5.argument = "$Template";

	var microflowCall3 = microflows.MicroflowCall.create(model);
	microflowCall3.microflow = model.findMicroflowByQualifiedName("ExcelImporter.GetAddProperties");
	microflowCall3.parameterMappings.push(microflowCallParameterMapping5);

	var microflowCallAction3 = microflows.MicroflowCallAction.create(model);
	microflowCallAction3.microflowCall = microflowCall3;   // Note: for this property a default value is defined.
	microflowCallAction3.outputVariableName = "AdditionalProperties";

	var actionActivity7 = microflows.ActionActivity.create(model);
	actionActivity7.relativeMiddlePoint = {"x":1330,"y":270};
	actionActivity7.size = {"width":140,"height":60};
	actionActivity7.action = microflowCallAction3;

	var microflowObjectCollection1 = microflows.MicroflowObjectCollection.create(model);
	microflowObjectCollection1.objects.push(startEvent1);
	microflowObjectCollection1.objects.push(actionActivity1);
	microflowObjectCollection1.objects.push(exclusiveMerge1);
	microflowObjectCollection1.objects.push(exclusiveSplit1);
	microflowObjectCollection1.objects.push(actionActivity2);
	microflowObjectCollection1.objects.push(actionActivity3);
	microflowObjectCollection1.objects.push(actionActivity4);
	microflowObjectCollection1.objects.push(actionActivity5);
	microflowObjectCollection1.objects.push(templateName1);
	microflowObjectCollection1.objects.push(importObjectTypeName1);
	microflowObjectCollection1.objects.push(parentReferenceName1);
	microflowObjectCollection1.objects.push(dataRowNr1);
	microflowObjectCollection1.objects.push(importActions1);
	microflowObjectCollection1.objects.push(endEvent1);
	microflowObjectCollection1.objects.push(actionActivity6);
	microflowObjectCollection1.objects.push(actionActivity7);

	var noCase1 = microflows.NoCase.create(model);

	var sequenceFlow1 = microflows.SequenceFlow.create(model);
	sequenceFlow1.originConnectionIndex = 1;
	sequenceFlow1.destinationConnectionIndex = 3;
	sequenceFlow1.originBezierVector = {"width":30,"height":0};
	sequenceFlow1.destinationBezierVector = {"width":-15,"height":0};
	sequenceFlow1.caseValue = noCase1;   // Note: for this property a default value is defined.

	var noCase2 = microflows.NoCase.create(model);

	var sequenceFlow2 = microflows.SequenceFlow.create(model);
	sequenceFlow2.originConnectionIndex = 1;
	sequenceFlow2.destinationConnectionIndex = 3;
	sequenceFlow2.originBezierVector = {"width":15,"height":0};
	sequenceFlow2.destinationBezierVector = {"width":-30,"height":0};
	sequenceFlow2.caseValue = noCase2;   // Note: for this property a default value is defined.

	var enumerationCase1 = microflows.EnumerationCase.create(model);
	enumerationCase1.value = "true";

	var sequenceFlow3 = microflows.SequenceFlow.create(model);
	sequenceFlow3.originConnectionIndex = 1;
	sequenceFlow3.destinationConnectionIndex = 3;
	sequenceFlow3.originBezierVector = {"width":15,"height":0};
	sequenceFlow3.destinationBezierVector = {"width":-30,"height":0};
	sequenceFlow3.caseValue = enumerationCase1;   // Note: for this property a default value is defined.

	var enumerationCase2 = microflows.EnumerationCase.create(model);
	enumerationCase2.value = "false";

	var sequenceFlow4 = microflows.SequenceFlow.create(model);
	sequenceFlow4.originConnectionIndex = 2;
	sequenceFlow4.destinationConnectionIndex = 1;
	sequenceFlow4.originBezierVector = {"width":0,"height":15};
	sequenceFlow4.destinationBezierVector = {"width":30,"height":0};
	sequenceFlow4.caseValue = enumerationCase2;   // Note: for this property a default value is defined.

	var noCase3 = microflows.NoCase.create(model);

	var sequenceFlow5 = microflows.SequenceFlow.create(model);
	sequenceFlow5.originConnectionIndex = 3;
	sequenceFlow5.destinationConnectionIndex = 2;
	sequenceFlow5.originBezierVector = {"width":-30,"height":0};
	sequenceFlow5.destinationBezierVector = {"width":0,"height":15};
	sequenceFlow5.caseValue = noCase3;   // Note: for this property a default value is defined.

	var noCase4 = microflows.NoCase.create(model);

	var sequenceFlow6 = microflows.SequenceFlow.create(model);
	sequenceFlow6.originConnectionIndex = 1;
	sequenceFlow6.destinationConnectionIndex = 3;
	sequenceFlow6.originBezierVector = {"width":30,"height":0};
	sequenceFlow6.destinationBezierVector = {"width":-30,"height":0};
	sequenceFlow6.caseValue = noCase4;   // Note: for this property a default value is defined.

	var noCase5 = microflows.NoCase.create(model);

	var sequenceFlow7 = microflows.SequenceFlow.create(model);
	sequenceFlow7.originConnectionIndex = 1;
	sequenceFlow7.destinationConnectionIndex = 3;
	sequenceFlow7.originBezierVector = {"width":30,"height":0};
	sequenceFlow7.destinationBezierVector = {"width":-30,"height":0};
	sequenceFlow7.caseValue = noCase5;   // Note: for this property a default value is defined.

	var noCase6 = microflows.NoCase.create(model);

	var sequenceFlow8 = microflows.SequenceFlow.create(model);
	sequenceFlow8.originConnectionIndex = 1;
	sequenceFlow8.destinationConnectionIndex = 3;
	sequenceFlow8.originBezierVector = {"width":15,"height":0};
	sequenceFlow8.destinationBezierVector = {"width":-15,"height":0};
	sequenceFlow8.caseValue = noCase6;   // Note: for this property a default value is defined.

	var noCase7 = microflows.NoCase.create(model);

	var sequenceFlow9 = microflows.SequenceFlow.create(model);
	sequenceFlow9.originConnectionIndex = 1;
	sequenceFlow9.destinationConnectionIndex = 3;
	sequenceFlow9.originBezierVector = {"width":30,"height":0};
	sequenceFlow9.destinationBezierVector = {"width":-30,"height":0};
	sequenceFlow9.caseValue = noCase7;   // Note: for this property a default value is defined.

	var noCase8 = microflows.NoCase.create(model);

	var sequenceFlow10 = microflows.SequenceFlow.create(model);
	sequenceFlow10.originConnectionIndex = 1;
	sequenceFlow10.destinationConnectionIndex = 3;
	sequenceFlow10.originBezierVector = {"width":30,"height":0};
	sequenceFlow10.destinationBezierVector = {"width":-30,"height":0};
	sequenceFlow10.caseValue = noCase8;   // Note: for this property a default value is defined.

	var noCase9 = microflows.NoCase.create(model);

	var sequenceFlow11 = microflows.SequenceFlow.create(model);
	sequenceFlow11.originConnectionIndex = 1;
	sequenceFlow11.destinationConnectionIndex = 3;
	sequenceFlow11.originBezierVector = {"width":30,"height":0};
	sequenceFlow11.destinationBezierVector = {"width":-15,"height":0};
	sequenceFlow11.caseValue = noCase9;   // Note: for this property a default value is defined.

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

	var setupTemplate1 = microflows.Microflow.createIn(unit);
	setupTemplate1.name = "SetupTemplate";
	setupTemplate1.objectCollection = microflowObjectCollection1;   // Note: for this property a default value is defined.
	setupTemplate1.flows.push(sequenceFlow1);
	setupTemplate1.flows.push(sequenceFlow2);
	setupTemplate1.flows.push(sequenceFlow3);
	setupTemplate1.flows.push(sequenceFlow4);
	setupTemplate1.flows.push(sequenceFlow5);
	setupTemplate1.flows.push(sequenceFlow6);
	setupTemplate1.flows.push(sequenceFlow7);
	setupTemplate1.flows.push(sequenceFlow8);
	setupTemplate1.flows.push(sequenceFlow9);
	setupTemplate1.flows.push(sequenceFlow10);
	setupTemplate1.flows.push(sequenceFlow11);
	setupTemplate1.microflowReturnType = objectType1;
	setupTemplate1.concurrencyErrorMessage = text1;   // Note: for this property a default value is defined.

	sequenceFlow1.origin = actionActivity1;
	sequenceFlow1.destination = exclusiveSplit1;

	sequenceFlow2.origin = exclusiveMerge1;
	sequenceFlow2.destination = actionActivity1;

	sequenceFlow3.origin = exclusiveSplit1;
	sequenceFlow3.destination = actionActivity3;

	sequenceFlow4.origin = exclusiveSplit1;
	sequenceFlow4.destination = actionActivity2;

	sequenceFlow5.origin = actionActivity2;
	sequenceFlow5.destination = exclusiveMerge1;

	sequenceFlow6.origin = actionActivity3;
	sequenceFlow6.destination = actionActivity4;

	sequenceFlow7.origin = actionActivity4;
	sequenceFlow7.destination = actionActivity5;

	sequenceFlow8.origin = startEvent1;
	sequenceFlow8.destination = exclusiveMerge1;

	sequenceFlow9.origin = actionActivity5;
	sequenceFlow9.destination = actionActivity7;

	sequenceFlow10.origin = actionActivity7;
	sequenceFlow10.destination = actionActivity6;

	sequenceFlow11.origin = actionActivity6;
	sequenceFlow11.destination = endEvent1;

})