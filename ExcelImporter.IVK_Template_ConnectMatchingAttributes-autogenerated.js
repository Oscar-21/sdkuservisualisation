(function (unit, model) {

	/*
	 * JavaScript code generated by mendixmodelsdk.sdk.extras.JavaScriptSerializer
	 * from unit with id "d0f218d7-5faf-43bc-ad0a-7ee21045580a" of type Microflows$Microflow
	 * in working copy "SoccerSquad"
	 * on 20-12-2024.
	 */

	var startEvent1 = microflows.StartEvent.create(model);
	startEvent1.relativeMiddlePoint = {"x":100,"y":200};
	startEvent1.size = {"width":20,"height":20};

	var objectType1 = datatypes.ObjectType.create(model);
	objectType1.entity = model.findEntityByQualifiedName("ExcelImporter.Template");

	var template1 = microflows.MicroflowParameterObject.create(model);
	template1.relativeMiddlePoint = {"x":100,"y":120};
	template1.size = {"width":30,"height":30};
	template1.name = "Template";
	template1.variableType = objectType1;   // Note: for this property a default value is defined.

	var expressionSplitCondition1 = microflows.ExpressionSplitCondition.create(model);
	expressionSplitCondition1.expression = "$Template/ExcelImporter.Template_MxObjectType != empty";

	var exclusiveSplit1 = microflows.ExclusiveSplit.create(model);
	exclusiveSplit1.relativeMiddlePoint = {"x":185,"y":200};
	exclusiveSplit1.size = {"width":60,"height":40};
	exclusiveSplit1.splitCondition = expressionSplitCondition1;   // Note: for this property a default value is defined.

	var translation1 = texts.Translation.create(model);
	translation1.languageCode = "en_US";
	translation1.text = "A MetaObject must be selected before a column can be created or changed.";

	var translation2 = texts.Translation.create(model);
	translation2.languageCode = "nl_NL";
	translation2.text = "Er moet eerst een objecttype geselecteerd zijn voor je een kolom kan aanmaken of wijzigen";

	var translation3 = texts.Translation.create(model);
	translation3.languageCode = "en_GB";
	translation3.text = "A MetaObject must be selected before a column can be created or changed.";

	var translation4 = texts.Translation.create(model);
	translation4.languageCode = "en_ZA";
	translation4.text = "A MetaObject must be selected before a column can be created or changed.";

	var text1 = texts.Text.create(model);
	text1.translations.push(translation1);
	text1.translations.push(translation2);
	text1.translations.push(translation3);
	text1.translations.push(translation4);

	var textTemplate1 = microflows.TextTemplate.create(model);
	textTemplate1.text = text1;   // Note: for this property a default value is defined.

	var showMessageAction1 = microflows.ShowMessageAction.create(model);
	showMessageAction1.template = textTemplate1;   // Note: for this property a default value is defined.
	showMessageAction1.type = microflows.ShowMessageType.Error;

	var actionActivity1 = microflows.ActionActivity.create(model);
	actionActivity1.relativeMiddlePoint = {"x":185,"y":300};
	actionActivity1.size = {"width":110,"height":60};
	actionActivity1.action = showMessageAction1;
	actionActivity1.caption = "Send error message";
	actionActivity1.autoGenerateCaption = false;

	var endEvent1 = microflows.EndEvent.create(model);
	endEvent1.relativeMiddlePoint = {"x":185,"y":370};
	endEvent1.size = {"width":20,"height":20};

	var endEvent2 = microflows.EndEvent.create(model);
	endEvent2.relativeMiddlePoint = {"x":1865,"y":200};
	endEvent2.size = {"width":20,"height":20};

	var constantRange1 = microflows.ConstantRange.create(model);

	var attributeRef1 = domainmodels.AttributeRef.create(model);
	attributeRef1.attribute = model.findAttributeByQualifiedName("MxModelReflection.MxObjectMember.AttributeName");

	var sortItem1 = microflows.SortItem.create(model);
	sortItem1.attributeRef = attributeRef1;   // Note: for this property a default value is defined.

	var sortItemList1 = microflows.SortItemList.create(model);
	sortItemList1.items.push(sortItem1);

	var databaseRetrieveSource1 = microflows.DatabaseRetrieveSource.create(model);
	databaseRetrieveSource1.entity = model.findEntityByQualifiedName("MxModelReflection.MxObjectMember");
	databaseRetrieveSource1.range = constantRange1;   // Note: for this property a default value is defined.
	databaseRetrieveSource1.xPathConstraint = "[MxModelReflection.MxObjectMember_MxObjectType = $MxObjectType]\n[MxModelReflection.MxObjectMember_Type/MxModelReflection.ValueType/TypeEnum != 'AutoNumber']\n[contains(AttributeName, $ColumnTitle)]";
	databaseRetrieveSource1.sortItemList = sortItemList1;   // Note: for this property a default value is defined.

	var retrieveAction1 = microflows.RetrieveAction.create(model);
	retrieveAction1.retrieveSource = databaseRetrieveSource1;   // Note: for this property a default value is defined.
	retrieveAction1.outputVariableName = "MxObjectMemberList";

	var actionActivity2 = microflows.ActionActivity.create(model);
	actionActivity2.relativeMiddlePoint = {"x":105,"y":210};
	actionActivity2.size = {"width":160,"height":60};
	actionActivity2.action = retrieveAction1;

	var aggregateListAction1 = microflows.AggregateListAction.create(model);
	aggregateListAction1.inputListVariableName = "MxObjectMemberList";
	aggregateListAction1.outputVariableName = "count";

	var actionActivity3 = microflows.ActionActivity.create(model);
	actionActivity3.relativeMiddlePoint = {"x":270,"y":210};
	actionActivity3.size = {"width":120,"height":60};
	actionActivity3.action = aggregateListAction1;

	var expressionSplitCondition2 = microflows.ExpressionSplitCondition.create(model);
	expressionSplitCondition2.expression = " $count > 1";

	var exclusiveSplit2 = microflows.ExclusiveSplit.create(model);
	exclusiveSplit2.relativeMiddlePoint = {"x":385,"y":210};
	exclusiveSplit2.size = {"width":60,"height":40};
	exclusiveSplit2.splitCondition = expressionSplitCondition2;   // Note: for this property a default value is defined.
	exclusiveSplit2.caption = " > 1";

	var booleanType1 = datatypes.BooleanType.create(model);

	var createVariableAction1 = microflows.CreateVariableAction.create(model);
	createVariableAction1.variableName = "MemberMatched";
	createVariableAction1.variableType = booleanType1;   // Note: for this property a default value is defined.
	createVariableAction1.initialValue = "false";

	var actionActivity4 = microflows.ActionActivity.create(model);
	actionActivity4.relativeMiddlePoint = {"x":385,"y":90};
	actionActivity4.size = {"width":90,"height":60};
	actionActivity4.action = createVariableAction1;

	var continueEvent1 = microflows.ContinueEvent.create(model);
	continueEvent1.relativeMiddlePoint = {"x":215,"y":40};
	continueEvent1.size = {"width":20,"height":20};

	var expressionSplitCondition3 = microflows.ExpressionSplitCondition.create(model);
	expressionSplitCondition3.expression = "trim( toLowerCase( $MxObjectMember/AttributeName ) ) =\ntrim( toLowerCase( $ColumnTitle ) )";

	var exclusiveSplit3 = microflows.ExclusiveSplit.create(model);
	exclusiveSplit3.relativeMiddlePoint = {"x":65,"y":115};
	exclusiveSplit3.size = {"width":100,"height":50};
	exclusiveSplit3.splitCondition = expressionSplitCondition3;   // Note: for this property a default value is defined.
	exclusiveSplit3.caption = "Names identical";

	var memberChange1 = microflows.MemberChange.create(model);
	memberChange1.attribute = model.findAttributeByQualifiedName("ExcelImporter.Column.MappingType");
	memberChange1.value = "ExcelImporter.MappingType.Attribute";

	var memberChange2 = microflows.MemberChange.create(model);
	memberChange2.attribute = model.findAttributeByQualifiedName("ExcelImporter.Column.FindAttribute");
	memberChange2.value = "$MxObjectMember/AttributeName";

	var memberChange3 = microflows.MemberChange.create(model);
	memberChange3.association = model.findAssociationBaseByQualifiedName("ExcelImporter.Column_MxObjectMember");
	memberChange3.value = "$MxObjectMember";

	var changeObjectAction1 = microflows.ChangeObjectAction.create(model);
	changeObjectAction1.items.push(memberChange1);
	changeObjectAction1.items.push(memberChange2);
	changeObjectAction1.items.push(memberChange3);
	changeObjectAction1.refreshInClient = true;
	changeObjectAction1.commit = microflows.CommitEnum.Yes;
	changeObjectAction1.changeVariableName = "Column";

	var actionActivity5 = microflows.ActionActivity.create(model);
	actionActivity5.relativeMiddlePoint = {"x":300,"y":115};
	actionActivity5.size = {"width":240,"height":60};
	actionActivity5.action = changeObjectAction1;

	var changeVariableAction1 = microflows.ChangeVariableAction.create(model);
	changeVariableAction1.changeVariableName = "MemberMatched";
	changeVariableAction1.value = "true";

	var actionActivity6 = microflows.ActionActivity.create(model);
	actionActivity6.relativeMiddlePoint = {"x":515,"y":115};
	actionActivity6.size = {"width":140,"height":60};
	actionActivity6.action = changeVariableAction1;

	var microflowObjectCollection1 = microflows.MicroflowObjectCollection.create(model);
	microflowObjectCollection1.objects.push(continueEvent1);
	microflowObjectCollection1.objects.push(exclusiveSplit3);
	microflowObjectCollection1.objects.push(actionActivity5);
	microflowObjectCollection1.objects.push(actionActivity6);

	var iterableList1 = microflows.IterableList.create(model);
	iterableList1.listVariableName = "MxObjectMemberList";
	iterableList1.variableName = "MxObjectMember";

	var loopedActivity1 = microflows.LoopedActivity.create(model);
	loopedActivity1.relativeMiddlePoint = {"x":755,"y":90};
	loopedActivity1.size = {"width":590,"height":150};
	loopedActivity1.objectCollection = microflowObjectCollection1;   // Note: for this property a default value is defined.
	loopedActivity1.loopSource = iterableList1;   // Note: for this property a default value is defined.

	var expressionSplitCondition4 = microflows.ExpressionSplitCondition.create(model);
	expressionSplitCondition4.expression = "$MemberMatched";

	var exclusiveSplit4 = microflows.ExclusiveSplit.create(model);
	exclusiveSplit4.relativeMiddlePoint = {"x":755,"y":210};
	exclusiveSplit4.size = {"width":80,"height":40};
	exclusiveSplit4.splitCondition = expressionSplitCondition4;   // Note: for this property a default value is defined.
	exclusiveSplit4.caption = "Matched?";

	var continueEvent2 = microflows.ContinueEvent.create(model);
	continueEvent2.relativeMiddlePoint = {"x":890,"y":210};
	continueEvent2.size = {"width":20,"height":20};

	var exclusiveMerge1 = microflows.ExclusiveMerge.create(model);
	exclusiveMerge1.relativeMiddlePoint = {"x":755,"y":295};
	exclusiveMerge1.size = {"width":20,"height":20};

	var memberChange4 = microflows.MemberChange.create(model);
	memberChange4.attribute = model.findAttributeByQualifiedName("ExcelImporter.Column.MappingType");
	memberChange4.value = "ExcelImporter.MappingType.Attribute";

	var memberChange5 = microflows.MemberChange.create(model);
	memberChange5.attribute = model.findAttributeByQualifiedName("ExcelImporter.Column.FindAttribute");
	memberChange5.value = "$MxObjectMember_1/AttributeName";

	var memberChange6 = microflows.MemberChange.create(model);
	memberChange6.association = model.findAssociationBaseByQualifiedName("ExcelImporter.Column_MxObjectMember");
	memberChange6.value = "$MxObjectMember_1";

	var changeObjectAction2 = microflows.ChangeObjectAction.create(model);
	changeObjectAction2.items.push(memberChange4);
	changeObjectAction2.items.push(memberChange5);
	changeObjectAction2.items.push(memberChange6);
	changeObjectAction2.refreshInClient = true;
	changeObjectAction2.commit = microflows.CommitEnum.Yes;
	changeObjectAction2.changeVariableName = "Column";

	var actionActivity7 = microflows.ActionActivity.create(model);
	actionActivity7.relativeMiddlePoint = {"x":235,"y":50};
	actionActivity7.size = {"width":240,"height":60};
	actionActivity7.action = changeObjectAction2;

	var breakEvent1 = microflows.BreakEvent.create(model);
	breakEvent1.relativeMiddlePoint = {"x":395,"y":50};
	breakEvent1.size = {"width":20,"height":20};

	var microflowObjectCollection2 = microflows.MicroflowObjectCollection.create(model);
	microflowObjectCollection2.objects.push(actionActivity7);
	microflowObjectCollection2.objects.push(breakEvent1);

	var iterableList2 = microflows.IterableList.create(model);
	iterableList2.listVariableName = "MxObjectMemberList";
	iterableList2.variableName = "MxObjectMember_1";

	var loopedActivity2 = microflows.LoopedActivity.create(model);
	loopedActivity2.relativeMiddlePoint = {"x":755,"y":370};
	loopedActivity2.size = {"width":420,"height":100};
	loopedActivity2.objectCollection = microflowObjectCollection2;   // Note: for this property a default value is defined.
	loopedActivity2.loopSource = iterableList2;   // Note: for this property a default value is defined.

	var stringType1 = datatypes.StringType.create(model);

	var createVariableAction2 = microflows.CreateVariableAction.create(model);
	createVariableAction2.variableName = "ColumnTitle";
	createVariableAction2.variableType = stringType1;   // Note: for this property a default value is defined.
	createVariableAction2.initialValue = "if $Column/Text != empty\nthen replaceAll(trim( $Column/Text), ' ', '')\nelse ''";

	var actionActivity8 = microflows.ActionActivity.create(model);
	actionActivity8.relativeMiddlePoint = {"x":105,"y":120};
	actionActivity8.size = {"width":120,"height":60};
	actionActivity8.action = createVariableAction2;

	var microflowObjectCollection3 = microflows.MicroflowObjectCollection.create(model);
	microflowObjectCollection3.objects.push(actionActivity2);
	microflowObjectCollection3.objects.push(actionActivity3);
	microflowObjectCollection3.objects.push(exclusiveSplit2);
	microflowObjectCollection3.objects.push(actionActivity4);
	microflowObjectCollection3.objects.push(loopedActivity1);
	microflowObjectCollection3.objects.push(exclusiveSplit4);
	microflowObjectCollection3.objects.push(continueEvent2);
	microflowObjectCollection3.objects.push(exclusiveMerge1);
	microflowObjectCollection3.objects.push(loopedActivity2);
	microflowObjectCollection3.objects.push(actionActivity8);

	var iterableList3 = microflows.IterableList.create(model);
	iterableList3.listVariableName = "ColumnList";
	iterableList3.variableName = "Column";

	var loopedActivity3 = microflows.LoopedActivity.create(model);
	loopedActivity3.relativeMiddlePoint = {"x":1275,"y":200};
	loopedActivity3.size = {"width":1070,"height":440};
	loopedActivity3.objectCollection = microflowObjectCollection3;   // Note: for this property a default value is defined.
	loopedActivity3.loopSource = iterableList3;   // Note: for this property a default value is defined.

	var associationRetrieveSource1 = microflows.AssociationRetrieveSource.create(model);
	associationRetrieveSource1.startVariableName = "Template";
	associationRetrieveSource1.association = model.findAssociationBaseByQualifiedName("ExcelImporter.Template_MxObjectType");

	var retrieveAction2 = microflows.RetrieveAction.create(model);
	retrieveAction2.retrieveSource = associationRetrieveSource1;   // Note: for this property a default value is defined.
	retrieveAction2.outputVariableName = "MxObjectType";

	var actionActivity9 = microflows.ActionActivity.create(model);
	actionActivity9.relativeMiddlePoint = {"x":415,"y":200};
	actionActivity9.size = {"width":260,"height":60};
	actionActivity9.action = retrieveAction2;

	var constantRange2 = microflows.ConstantRange.create(model);

	var attributeRef2 = domainmodels.AttributeRef.create(model);
	attributeRef2.attribute = model.findAttributeByQualifiedName("ExcelImporter.Column.ColNumber");

	var sortItem2 = microflows.SortItem.create(model);
	sortItem2.attributeRef = attributeRef2;   // Note: for this property a default value is defined.

	var sortItemList2 = microflows.SortItemList.create(model);
	sortItemList2.items.push(sortItem2);

	var databaseRetrieveSource2 = microflows.DatabaseRetrieveSource.create(model);
	databaseRetrieveSource2.entity = model.findEntityByQualifiedName("ExcelImporter.Column");
	databaseRetrieveSource2.range = constantRange2;   // Note: for this property a default value is defined.
	databaseRetrieveSource2.xPathConstraint = "[ExcelImporter.Column_Template = $Template]";
	databaseRetrieveSource2.sortItemList = sortItemList2;   // Note: for this property a default value is defined.

	var retrieveAction3 = microflows.RetrieveAction.create(model);
	retrieveAction3.retrieveSource = databaseRetrieveSource2;   // Note: for this property a default value is defined.
	retrieveAction3.outputVariableName = "ColumnList";

	var actionActivity10 = microflows.ActionActivity.create(model);
	actionActivity10.relativeMiddlePoint = {"x":645,"y":200};
	actionActivity10.size = {"width":130,"height":60};
	actionActivity10.action = retrieveAction3;

	var microflowObjectCollection4 = microflows.MicroflowObjectCollection.create(model);
	microflowObjectCollection4.objects.push(startEvent1);
	microflowObjectCollection4.objects.push(template1);
	microflowObjectCollection4.objects.push(exclusiveSplit1);
	microflowObjectCollection4.objects.push(actionActivity1);
	microflowObjectCollection4.objects.push(endEvent1);
	microflowObjectCollection4.objects.push(endEvent2);
	microflowObjectCollection4.objects.push(loopedActivity3);
	microflowObjectCollection4.objects.push(actionActivity9);
	microflowObjectCollection4.objects.push(actionActivity10);

	var noCase1 = microflows.NoCase.create(model);

	var sequenceFlow1 = microflows.SequenceFlow.create(model);
	sequenceFlow1.originConnectionIndex = 1;
	sequenceFlow1.destinationConnectionIndex = 3;
	sequenceFlow1.originBezierVector = {"width":0,"height":0};
	sequenceFlow1.destinationBezierVector = {"width":-15,"height":0};
	sequenceFlow1.caseValue = noCase1;   // Note: for this property a default value is defined.

	var enumerationCase1 = microflows.EnumerationCase.create(model);
	enumerationCase1.value = "false";

	var sequenceFlow2 = microflows.SequenceFlow.create(model);
	sequenceFlow2.originConnectionIndex = 2;
	sequenceFlow2.originBezierVector = {"width":0,"height":15};
	sequenceFlow2.destinationBezierVector = {"width":0,"height":-30};
	sequenceFlow2.caseValue = enumerationCase1;   // Note: for this property a default value is defined.

	var noCase2 = microflows.NoCase.create(model);

	var sequenceFlow3 = microflows.SequenceFlow.create(model);
	sequenceFlow3.originConnectionIndex = 2;
	sequenceFlow3.originBezierVector = {"width":0,"height":30};
	sequenceFlow3.destinationBezierVector = {"width":0,"height":-15};
	sequenceFlow3.caseValue = noCase2;   // Note: for this property a default value is defined.

	var enumerationCase2 = microflows.EnumerationCase.create(model);
	enumerationCase2.value = "true";

	var sequenceFlow4 = microflows.SequenceFlow.create(model);
	sequenceFlow4.originConnectionIndex = 1;
	sequenceFlow4.destinationConnectionIndex = 3;
	sequenceFlow4.originBezierVector = {"width":15,"height":0};
	sequenceFlow4.destinationBezierVector = {"width":-30,"height":0};
	sequenceFlow4.caseValue = enumerationCase2;   // Note: for this property a default value is defined.

	var noCase3 = microflows.NoCase.create(model);

	var sequenceFlow5 = microflows.SequenceFlow.create(model);
	sequenceFlow5.originConnectionIndex = 1;
	sequenceFlow5.destinationConnectionIndex = 3;
	sequenceFlow5.originBezierVector = {"width":30,"height":0};
	sequenceFlow5.destinationBezierVector = {"width":-30,"height":0};
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
	sequenceFlow7.destinationBezierVector = {"width":-15,"height":0};
	sequenceFlow7.caseValue = noCase5;   // Note: for this property a default value is defined.

	var noCase6 = microflows.NoCase.create(model);

	var sequenceFlow8 = microflows.SequenceFlow.create(model);
	sequenceFlow8.originConnectionIndex = 1;
	sequenceFlow8.destinationConnectionIndex = 3;
	sequenceFlow8.originBezierVector = {"width":30,"height":0};
	sequenceFlow8.destinationBezierVector = {"width":-30,"height":0};
	sequenceFlow8.caseValue = noCase6;   // Note: for this property a default value is defined.

	var noCase7 = microflows.NoCase.create(model);

	var sequenceFlow9 = microflows.SequenceFlow.create(model);
	sequenceFlow9.originConnectionIndex = 1;
	sequenceFlow9.destinationConnectionIndex = 3;
	sequenceFlow9.originBezierVector = {"width":30,"height":0};
	sequenceFlow9.destinationBezierVector = {"width":-15,"height":0};
	sequenceFlow9.caseValue = noCase7;   // Note: for this property a default value is defined.

	var enumerationCase3 = microflows.EnumerationCase.create(model);
	enumerationCase3.value = "true";

	var sequenceFlow10 = microflows.SequenceFlow.create(model);
	sequenceFlow10.destinationConnectionIndex = 2;
	sequenceFlow10.originBezierVector = {"width":0,"height":-15};
	sequenceFlow10.destinationBezierVector = {"width":0,"height":30};
	sequenceFlow10.caseValue = enumerationCase3;   // Note: for this property a default value is defined.

	var noCase8 = microflows.NoCase.create(model);

	var sequenceFlow11 = microflows.SequenceFlow.create(model);
	sequenceFlow11.originConnectionIndex = 1;
	sequenceFlow11.destinationConnectionIndex = 3;
	sequenceFlow11.originBezierVector = {"width":30,"height":0};
	sequenceFlow11.destinationBezierVector = {"width":-30,"height":0};
	sequenceFlow11.caseValue = noCase8;   // Note: for this property a default value is defined.

	var enumerationCase4 = microflows.EnumerationCase.create(model);
	enumerationCase4.value = "false";

	var sequenceFlow12 = microflows.SequenceFlow.create(model);
	sequenceFlow12.destinationConnectionIndex = 3;
	sequenceFlow12.originBezierVector = {"width":0,"height":-15};
	sequenceFlow12.destinationBezierVector = {"width":-15,"height":0};
	sequenceFlow12.caseValue = enumerationCase4;   // Note: for this property a default value is defined.

	var enumerationCase5 = microflows.EnumerationCase.create(model);
	enumerationCase5.value = "true";

	var sequenceFlow13 = microflows.SequenceFlow.create(model);
	sequenceFlow13.originConnectionIndex = 1;
	sequenceFlow13.destinationConnectionIndex = 3;
	sequenceFlow13.originBezierVector = {"width":15,"height":0};
	sequenceFlow13.destinationBezierVector = {"width":-30,"height":0};
	sequenceFlow13.caseValue = enumerationCase5;   // Note: for this property a default value is defined.

	var noCase9 = microflows.NoCase.create(model);

	var sequenceFlow14 = microflows.SequenceFlow.create(model);
	sequenceFlow14.originConnectionIndex = 1;
	sequenceFlow14.destinationConnectionIndex = 3;
	sequenceFlow14.originBezierVector = {"width":30,"height":0};
	sequenceFlow14.destinationBezierVector = {"width":-30,"height":0};
	sequenceFlow14.caseValue = noCase9;   // Note: for this property a default value is defined.

	var noCase10 = microflows.NoCase.create(model);

	var sequenceFlow15 = microflows.SequenceFlow.create(model);
	sequenceFlow15.originConnectionIndex = 2;
	sequenceFlow15.originBezierVector = {"width":0,"height":30};
	sequenceFlow15.destinationBezierVector = {"width":0,"height":-15};
	sequenceFlow15.caseValue = noCase10;   // Note: for this property a default value is defined.

	var enumerationCase6 = microflows.EnumerationCase.create(model);
	enumerationCase6.value = "false";

	var sequenceFlow16 = microflows.SequenceFlow.create(model);
	sequenceFlow16.originConnectionIndex = 2;
	sequenceFlow16.originBezierVector = {"width":0,"height":15};
	sequenceFlow16.destinationBezierVector = {"width":0,"height":-15};
	sequenceFlow16.caseValue = enumerationCase6;   // Note: for this property a default value is defined.

	var enumerationCase7 = microflows.EnumerationCase.create(model);
	enumerationCase7.value = "true";

	var sequenceFlow17 = microflows.SequenceFlow.create(model);
	sequenceFlow17.originConnectionIndex = 1;
	sequenceFlow17.destinationConnectionIndex = 3;
	sequenceFlow17.originBezierVector = {"width":15,"height":0};
	sequenceFlow17.destinationBezierVector = {"width":-15,"height":0};
	sequenceFlow17.caseValue = enumerationCase7;   // Note: for this property a default value is defined.

	var enumerationCase8 = microflows.EnumerationCase.create(model);
	enumerationCase8.value = "false";

	var sequenceFlow18 = microflows.SequenceFlow.create(model);
	sequenceFlow18.originConnectionIndex = 2;
	sequenceFlow18.destinationConnectionIndex = 3;
	sequenceFlow18.originBezierVector = {"width":0,"height":75};
	sequenceFlow18.destinationBezierVector = {"width":-15,"height":0};
	sequenceFlow18.caseValue = enumerationCase8;   // Note: for this property a default value is defined.

	var noCase11 = microflows.NoCase.create(model);

	var sequenceFlow19 = microflows.SequenceFlow.create(model);
	sequenceFlow19.originConnectionIndex = 2;
	sequenceFlow19.originBezierVector = {"width":0,"height":15};
	sequenceFlow19.destinationBezierVector = {"width":0,"height":-30};
	sequenceFlow19.caseValue = noCase11;   // Note: for this property a default value is defined.

	var noCase12 = microflows.NoCase.create(model);

	var sequenceFlow20 = microflows.SequenceFlow.create(model);
	sequenceFlow20.originConnectionIndex = 1;
	sequenceFlow20.destinationConnectionIndex = 3;
	sequenceFlow20.originBezierVector = {"width":30,"height":0};
	sequenceFlow20.destinationBezierVector = {"width":-15,"height":0};
	sequenceFlow20.caseValue = noCase12;   // Note: for this property a default value is defined.

	var noCase13 = microflows.NoCase.create(model);

	var sequenceFlow21 = microflows.SequenceFlow.create(model);
	sequenceFlow21.originConnectionIndex = 2;
	sequenceFlow21.originBezierVector = {"width":0,"height":30};
	sequenceFlow21.destinationBezierVector = {"width":0,"height":-30};
	sequenceFlow21.caseValue = noCase13;   // Note: for this property a default value is defined.

	var voidType1 = datatypes.VoidType.create(model);

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

	var iVK_Template_ConnectMatchingAttributes1 = microflows.Microflow.createIn(unit);
	iVK_Template_ConnectMatchingAttributes1.name = "IVK_Template_ConnectMatchingAttributes";
	iVK_Template_ConnectMatchingAttributes1.objectCollection = microflowObjectCollection4;   // Note: for this property a default value is defined.
	iVK_Template_ConnectMatchingAttributes1.flows.push(sequenceFlow1);
	iVK_Template_ConnectMatchingAttributes1.flows.push(sequenceFlow2);
	iVK_Template_ConnectMatchingAttributes1.flows.push(sequenceFlow3);
	iVK_Template_ConnectMatchingAttributes1.flows.push(sequenceFlow4);
	iVK_Template_ConnectMatchingAttributes1.flows.push(sequenceFlow5);
	iVK_Template_ConnectMatchingAttributes1.flows.push(sequenceFlow6);
	iVK_Template_ConnectMatchingAttributes1.flows.push(sequenceFlow7);
	iVK_Template_ConnectMatchingAttributes1.flows.push(sequenceFlow8);
	iVK_Template_ConnectMatchingAttributes1.flows.push(sequenceFlow9);
	iVK_Template_ConnectMatchingAttributes1.flows.push(sequenceFlow10);
	iVK_Template_ConnectMatchingAttributes1.flows.push(sequenceFlow11);
	iVK_Template_ConnectMatchingAttributes1.flows.push(sequenceFlow12);
	iVK_Template_ConnectMatchingAttributes1.flows.push(sequenceFlow13);
	iVK_Template_ConnectMatchingAttributes1.flows.push(sequenceFlow14);
	iVK_Template_ConnectMatchingAttributes1.flows.push(sequenceFlow15);
	iVK_Template_ConnectMatchingAttributes1.flows.push(sequenceFlow16);
	iVK_Template_ConnectMatchingAttributes1.flows.push(sequenceFlow17);
	iVK_Template_ConnectMatchingAttributes1.flows.push(sequenceFlow18);
	iVK_Template_ConnectMatchingAttributes1.flows.push(sequenceFlow19);
	iVK_Template_ConnectMatchingAttributes1.flows.push(sequenceFlow20);
	iVK_Template_ConnectMatchingAttributes1.flows.push(sequenceFlow21);
	iVK_Template_ConnectMatchingAttributes1.microflowReturnType = voidType1;
	iVK_Template_ConnectMatchingAttributes1.applyEntityAccess = true;
	iVK_Template_ConnectMatchingAttributes1.allowedModuleRoles.push(model.findModuleRoleByQualifiedName("ExcelImporter.Configurator"));
	iVK_Template_ConnectMatchingAttributes1.concurrencyErrorMessage = text2;   // Note: for this property a default value is defined.

	sequenceFlow1.origin = startEvent1;
	sequenceFlow1.destination = exclusiveSplit1;

	sequenceFlow2.origin = exclusiveSplit1;
	sequenceFlow2.destination = actionActivity1;

	sequenceFlow3.origin = actionActivity1;
	sequenceFlow3.destination = endEvent1;

	sequenceFlow4.origin = exclusiveSplit1;
	sequenceFlow4.destination = actionActivity9;

	sequenceFlow5.origin = actionActivity9;
	sequenceFlow5.destination = actionActivity10;

	sequenceFlow6.origin = actionActivity10;
	sequenceFlow6.destination = loopedActivity3;

	sequenceFlow7.origin = loopedActivity3;
	sequenceFlow7.destination = endEvent2;

	sequenceFlow8.origin = actionActivity2;
	sequenceFlow8.destination = actionActivity3;

	sequenceFlow9.origin = actionActivity3;
	sequenceFlow9.destination = exclusiveSplit2;

	sequenceFlow10.origin = exclusiveSplit2;
	sequenceFlow10.destination = actionActivity4;

	sequenceFlow11.origin = actionActivity4;
	sequenceFlow11.destination = loopedActivity1;

	sequenceFlow12.origin = exclusiveSplit3;
	sequenceFlow12.destination = continueEvent1;

	sequenceFlow13.origin = exclusiveSplit3;
	sequenceFlow13.destination = actionActivity5;

	sequenceFlow14.origin = actionActivity5;
	sequenceFlow14.destination = actionActivity6;

	sequenceFlow15.origin = loopedActivity1;
	sequenceFlow15.destination = exclusiveSplit4;

	sequenceFlow16.origin = exclusiveSplit4;
	sequenceFlow16.destination = exclusiveMerge1;

	sequenceFlow17.origin = exclusiveSplit4;
	sequenceFlow17.destination = continueEvent2;

	sequenceFlow18.origin = exclusiveSplit2;
	sequenceFlow18.destination = exclusiveMerge1;

	sequenceFlow19.origin = exclusiveMerge1;
	sequenceFlow19.destination = loopedActivity2;

	sequenceFlow20.origin = actionActivity7;
	sequenceFlow20.destination = breakEvent1;

	sequenceFlow21.origin = actionActivity8;
	sequenceFlow21.destination = actionActivity2;

})