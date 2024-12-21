(function (unit, model) {

	/*
	 * JavaScript code generated by mendixmodelsdk.sdk.extras.JavaScriptSerializer
	 * from unit with id "65a758eb-5b46-477e-a490-7178e38bbe96" of type Microflows$Microflow
	 * in working copy "SoccerSquad"
	 * on 20-12-2024.
	 */

	var startEvent1 = microflows.StartEvent.create(model);
	startEvent1.relativeMiddlePoint = {"x":100,"y":200};
	startEvent1.size = {"width":20,"height":20};

	var objectType1 = datatypes.ObjectType.create(model);
	objectType1.entity = model.findEntityByQualifiedName("ExcelImporter.Column");

	var column1 = microflows.MicroflowParameterObject.create(model);
	column1.relativeMiddlePoint = {"x":100,"y":95};
	column1.size = {"width":30,"height":30};
	column1.name = "Column";
	column1.variableType = objectType1;   // Note: for this property a default value is defined.

	var endEvent1 = microflows.EndEvent.create(model);
	endEvent1.relativeMiddlePoint = {"x":335,"y":410};
	endEvent1.size = {"width":20,"height":20};

	var memberChange1 = microflows.MemberChange.create(model);
	memberChange1.attribute = model.findAttributeByQualifiedName("ExcelImporter.Column.Status");
	memberChange1.value = "ExcelImporter.Status.INFO";

	var changeObjectAction1 = microflows.ChangeObjectAction.create(model);
	changeObjectAction1.items.push(memberChange1);
	changeObjectAction1.changeVariableName = "Column";

	var actionActivity1 = microflows.ActionActivity.create(model);
	actionActivity1.relativeMiddlePoint = {"x":335,"y":355};
	actionActivity1.size = {"width":80,"height":30};
	actionActivity1.action = changeObjectAction1;
	actionActivity1.caption = "Set info ";
	actionActivity1.autoGenerateCaption = false;

	var exclusiveMerge1 = microflows.ExclusiveMerge.create(model);
	exclusiveMerge1.relativeMiddlePoint = {"x":335,"y":300};
	exclusiveMerge1.size = {"width":60,"height":40};

	var exclusiveMerge2 = microflows.ExclusiveMerge.create(model);
	exclusiveMerge2.relativeMiddlePoint = {"x":590,"y":200};
	exclusiveMerge2.size = {"width":60,"height":40};

	var memberChange2 = microflows.MemberChange.create(model);
	memberChange2.attribute = model.findAttributeByQualifiedName("ExcelImporter.Column.Status");
	memberChange2.value = "ExcelImporter.Status.INVALID";

	var changeObjectAction2 = microflows.ChangeObjectAction.create(model);
	changeObjectAction2.items.push(memberChange2);
	changeObjectAction2.changeVariableName = "Column";

	var actionActivity2 = microflows.ActionActivity.create(model);
	actionActivity2.relativeMiddlePoint = {"x":335,"y":-125};
	actionActivity2.size = {"width":100,"height":30};
	actionActivity2.action = changeObjectAction2;
	actionActivity2.caption = "Set invalid";
	actionActivity2.autoGenerateCaption = false;

	var endEvent2 = microflows.EndEvent.create(model);
	endEvent2.relativeMiddlePoint = {"x":335,"y":-190};
	endEvent2.size = {"width":20,"height":20};

	var exclusiveMerge3 = microflows.ExclusiveMerge.create(model);
	exclusiveMerge3.relativeMiddlePoint = {"x":335,"y":-60};
	exclusiveMerge3.size = {"width":60,"height":40};

	var endEvent3 = microflows.EndEvent.create(model);
	endEvent3.relativeMiddlePoint = {"x":980,"y":200};
	endEvent3.size = {"width":20,"height":20};

	var memberChange3 = microflows.MemberChange.create(model);
	memberChange3.attribute = model.findAttributeByQualifiedName("ExcelImporter.Column.Status");
	memberChange3.value = "ExcelImporter.Status.VALID";

	var changeObjectAction3 = microflows.ChangeObjectAction.create(model);
	changeObjectAction3.items.push(memberChange3);
	changeObjectAction3.changeVariableName = "Column";

	var actionActivity3 = microflows.ActionActivity.create(model);
	actionActivity3.relativeMiddlePoint = {"x":900,"y":200};
	actionActivity3.size = {"width":90,"height":30};
	actionActivity3.action = changeObjectAction3;
	actionActivity3.caption = "Set valid";
	actionActivity3.autoGenerateCaption = false;

	var ruleCallParameterMapping1 = microflows.RuleCallParameterMapping.create(model);
	// Note: this is an unsupported internal property of the Model SDK which is subject to change.
	ruleCallParameterMapping1.__parameter.updateWithRawValue("ExcelImporter.ValidateColumn.Column");
	ruleCallParameterMapping1.argument = "$Column";

	var ruleCallParameterMapping2 = microflows.RuleCallParameterMapping.create(model);
	// Note: this is an unsupported internal property of the Model SDK which is subject to change.
	ruleCallParameterMapping2.__parameter.updateWithRawValue("ExcelImporter.ValidateColumn.Template");
	ruleCallParameterMapping2.argument = "$Template";

	var ruleCall1 = microflows.RuleCall.create(model);
	ruleCall1.rule = model.findRuleByQualifiedName("ExcelImporter.ValidateColumn");
	ruleCall1.parameterMappings.push(ruleCallParameterMapping1);
	ruleCall1.parameterMappings.push(ruleCallParameterMapping2);

	var ruleSplitCondition1 = microflows.RuleSplitCondition.create(model);
	ruleSplitCondition1.ruleCall = ruleCall1;   // Note: for this property a default value is defined.

	var exclusiveSplit1 = microflows.ExclusiveSplit.create(model);
	exclusiveSplit1.relativeMiddlePoint = {"x":335,"y":200};
	exclusiveSplit1.size = {"width":120,"height":90};
	exclusiveSplit1.splitCondition = ruleSplitCondition1;   // Note: for this property a default value is defined.
	exclusiveSplit1.caption = "Validate the column";

	var ruleCallParameterMapping3 = microflows.RuleCallParameterMapping.create(model);
	// Note: this is an unsupported internal property of the Model SDK which is subject to change.
	ruleCallParameterMapping3.__parameter.updateWithRawValue("ExcelImporter.ValidateColumnMF.Column");
	ruleCallParameterMapping3.argument = "$Column";

	var ruleCall2 = microflows.RuleCall.create(model);
	ruleCall2.rule = model.findRuleByQualifiedName("ExcelImporter.ValidateColumnMF");
	ruleCall2.parameterMappings.push(ruleCallParameterMapping3);

	var ruleSplitCondition2 = microflows.RuleSplitCondition.create(model);
	ruleSplitCondition2.ruleCall = ruleCall2;   // Note: for this property a default value is defined.

	var exclusiveSplit2 = microflows.ExclusiveSplit.create(model);
	exclusiveSplit2.relativeMiddlePoint = {"x":725,"y":200};
	exclusiveSplit2.size = {"width":60,"height":40};
	exclusiveSplit2.splitCondition = ruleSplitCondition2;   // Note: for this property a default value is defined.

	var objectType2 = datatypes.ObjectType.create(model);
	objectType2.entity = model.findEntityByQualifiedName("ExcelImporter.Template");

	var template1 = microflows.MicroflowParameterObject.create(model);
	template1.relativeMiddlePoint = {"x":100,"y":30};
	template1.size = {"width":30,"height":30};
	template1.name = "Template";
	template1.variableType = objectType2;   // Note: for this property a default value is defined.

	var microflowObjectCollection1 = microflows.MicroflowObjectCollection.create(model);
	microflowObjectCollection1.objects.push(startEvent1);
	microflowObjectCollection1.objects.push(column1);
	microflowObjectCollection1.objects.push(endEvent1);
	microflowObjectCollection1.objects.push(actionActivity1);
	microflowObjectCollection1.objects.push(exclusiveMerge1);
	microflowObjectCollection1.objects.push(exclusiveMerge2);
	microflowObjectCollection1.objects.push(actionActivity2);
	microflowObjectCollection1.objects.push(endEvent2);
	microflowObjectCollection1.objects.push(exclusiveMerge3);
	microflowObjectCollection1.objects.push(endEvent3);
	microflowObjectCollection1.objects.push(actionActivity3);
	microflowObjectCollection1.objects.push(exclusiveSplit1);
	microflowObjectCollection1.objects.push(exclusiveSplit2);
	microflowObjectCollection1.objects.push(template1);

	var noCase1 = microflows.NoCase.create(model);

	var sequenceFlow1 = microflows.SequenceFlow.create(model);
	sequenceFlow1.originConnectionIndex = 1;
	sequenceFlow1.destinationConnectionIndex = 3;
	sequenceFlow1.originBezierVector = {"width":0,"height":0};
	sequenceFlow1.destinationBezierVector = {"width":-15,"height":0};
	sequenceFlow1.caseValue = noCase1;   // Note: for this property a default value is defined.

	var enumerationCase1 = microflows.EnumerationCase.create(model);
	enumerationCase1.value = "ValidAttribute";

	var sequenceFlow2 = microflows.SequenceFlow.create(model);
	sequenceFlow2.originConnectionIndex = 1;
	sequenceFlow2.originBezierVector = {"width":15,"height":0};
	sequenceFlow2.destinationBezierVector = {"width":0,"height":-15};
	sequenceFlow2.caseValue = enumerationCase1;   // Note: for this property a default value is defined.

	var enumerationCase2 = microflows.EnumerationCase.create(model);
	enumerationCase2.value = "NoReferenceSelected";

	var sequenceFlow3 = microflows.SequenceFlow.create(model);
	sequenceFlow3.destinationConnectionIndex = 3;
	sequenceFlow3.originBezierVector = {"width":-290,"height":-160};
	sequenceFlow3.destinationBezierVector = {"width":-30,"height":0};
	sequenceFlow3.caseValue = enumerationCase2;   // Note: for this property a default value is defined.

	var enumerationCase3 = microflows.EnumerationCase.create(model);
	enumerationCase3.value = "(empty)";

	var sequenceFlow4 = microflows.SequenceFlow.create(model);
	sequenceFlow4.originConnectionIndex = 2;
	sequenceFlow4.destinationConnectionIndex = 3;
	sequenceFlow4.originBezierVector = {"width":-20,"height":15};
	sequenceFlow4.destinationBezierVector = {"width":-15,"height":0};
	sequenceFlow4.caseValue = enumerationCase3;   // Note: for this property a default value is defined.

	var noCase2 = microflows.NoCase.create(model);

	var sequenceFlow5 = microflows.SequenceFlow.create(model);
	sequenceFlow5.originConnectionIndex = 2;
	sequenceFlow5.originBezierVector = {"width":0,"height":30};
	sequenceFlow5.destinationBezierVector = {"width":0,"height":-15};
	sequenceFlow5.caseValue = noCase2;   // Note: for this property a default value is defined.

	var noCase3 = microflows.NoCase.create(model);

	var sequenceFlow6 = microflows.SequenceFlow.create(model);
	sequenceFlow6.originConnectionIndex = 1;
	sequenceFlow6.destinationConnectionIndex = 3;
	sequenceFlow6.originBezierVector = {"width":30,"height":0};
	sequenceFlow6.destinationBezierVector = {"width":-15,"height":0};
	sequenceFlow6.caseValue = noCase3;   // Note: for this property a default value is defined.

	var noCase4 = microflows.NoCase.create(model);

	var sequenceFlow7 = microflows.SequenceFlow.create(model);
	sequenceFlow7.originConnectionIndex = 2;
	sequenceFlow7.originBezierVector = {"width":0,"height":15};
	sequenceFlow7.destinationBezierVector = {"width":0,"height":-30};
	sequenceFlow7.caseValue = noCase4;   // Note: for this property a default value is defined.

	var enumerationCase4 = microflows.EnumerationCase.create(model);
	enumerationCase4.value = "UnUsed";

	var sequenceFlow8 = microflows.SequenceFlow.create(model);
	sequenceFlow8.originConnectionIndex = 2;
	sequenceFlow8.destinationConnectionIndex = 1;
	sequenceFlow8.originBezierVector = {"width":25,"height":15};
	sequenceFlow8.destinationBezierVector = {"width":15,"height":0};
	sequenceFlow8.caseValue = enumerationCase4;   // Note: for this property a default value is defined.

	var noCase5 = microflows.NoCase.create(model);

	var sequenceFlow9 = microflows.SequenceFlow.create(model);
	sequenceFlow9.destinationConnectionIndex = 2;
	sequenceFlow9.originBezierVector = {"width":0,"height":-30};
	sequenceFlow9.destinationBezierVector = {"width":0,"height":15};
	sequenceFlow9.caseValue = noCase5;   // Note: for this property a default value is defined.

	var noCase6 = microflows.NoCase.create(model);

	var sequenceFlow10 = microflows.SequenceFlow.create(model);
	sequenceFlow10.originConnectionIndex = 1;
	sequenceFlow10.destinationConnectionIndex = 3;
	sequenceFlow10.originBezierVector = {"width":15,"height":0};
	sequenceFlow10.destinationBezierVector = {"width":-15,"height":0};
	sequenceFlow10.caseValue = noCase6;   // Note: for this property a default value is defined.

	var enumerationCase5 = microflows.EnumerationCase.create(model);
	enumerationCase5.value = "ValidReference";

	var sequenceFlow11 = microflows.SequenceFlow.create(model);
	sequenceFlow11.originConnectionIndex = 1;
	sequenceFlow11.destinationConnectionIndex = 2;
	sequenceFlow11.originBezierVector = {"width":15,"height":0};
	sequenceFlow11.destinationBezierVector = {"width":0,"height":15};
	sequenceFlow11.caseValue = enumerationCase5;   // Note: for this property a default value is defined.

	var noCase7 = microflows.NoCase.create(model);

	var sequenceFlow12 = microflows.SequenceFlow.create(model);
	sequenceFlow12.destinationConnectionIndex = 2;
	sequenceFlow12.originBezierVector = {"width":0,"height":-15};
	sequenceFlow12.destinationBezierVector = {"width":0,"height":30};
	sequenceFlow12.caseValue = noCase7;   // Note: for this property a default value is defined.

	var enumerationCase6 = microflows.EnumerationCase.create(model);
	enumerationCase6.value = "NoReferencedObjectSelected";

	var sequenceFlow13 = microflows.SequenceFlow.create(model);
	sequenceFlow13.destinationConnectionIndex = 3;
	sequenceFlow13.originBezierVector = {"width":-125,"height":-85};
	sequenceFlow13.destinationBezierVector = {"width":-45,"height":0};
	sequenceFlow13.caseValue = enumerationCase6;   // Note: for this property a default value is defined.

	var enumerationCase7 = microflows.EnumerationCase.create(model);
	enumerationCase7.value = "NoAttributeSelected";

	var sequenceFlow14 = microflows.SequenceFlow.create(model);
	sequenceFlow14.destinationConnectionIndex = 2;
	sequenceFlow14.originBezierVector = {"width":-60,"height":-75};
	sequenceFlow14.destinationBezierVector = {"width":-45,"height":70};
	sequenceFlow14.caseValue = enumerationCase7;   // Note: for this property a default value is defined.

	var enumerationCase8 = microflows.EnumerationCase.create(model);
	enumerationCase8.value = "InvalidAttribute";

	var sequenceFlow15 = microflows.SequenceFlow.create(model);
	sequenceFlow15.destinationConnectionIndex = 2;
	sequenceFlow15.originBezierVector = {"width":85,"height":-90};
	sequenceFlow15.destinationBezierVector = {"width":30,"height":30};
	sequenceFlow15.caseValue = enumerationCase8;   // Note: for this property a default value is defined.

	var enumerationCase9 = microflows.EnumerationCase.create(model);
	enumerationCase9.value = "InvalidReference";

	var sequenceFlow16 = microflows.SequenceFlow.create(model);
	sequenceFlow16.destinationConnectionIndex = 1;
	sequenceFlow16.originBezierVector = {"width":185,"height":-135};
	sequenceFlow16.destinationBezierVector = {"width":30,"height":40};
	sequenceFlow16.caseValue = enumerationCase9;   // Note: for this property a default value is defined.

	var enumerationCase10 = microflows.EnumerationCase.create(model);
	enumerationCase10.value = "InvalidReferencedObject";

	var sequenceFlow17 = microflows.SequenceFlow.create(model);
	sequenceFlow17.destinationConnectionIndex = 1;
	sequenceFlow17.originBezierVector = {"width":315,"height":-165};
	sequenceFlow17.destinationBezierVector = {"width":15,"height":0};
	sequenceFlow17.caseValue = enumerationCase10;   // Note: for this property a default value is defined.

	var enumerationCase11 = microflows.EnumerationCase.create(model);
	enumerationCase11.value = "Valid";

	var sequenceFlow18 = microflows.SequenceFlow.create(model);
	sequenceFlow18.originConnectionIndex = 1;
	sequenceFlow18.destinationConnectionIndex = 3;
	sequenceFlow18.originBezierVector = {"width":15,"height":0};
	sequenceFlow18.destinationBezierVector = {"width":-30,"height":0};
	sequenceFlow18.caseValue = enumerationCase11;   // Note: for this property a default value is defined.

	var enumerationCase12 = microflows.EnumerationCase.create(model);
	enumerationCase12.value = "(empty)";

	var sequenceFlow19 = microflows.SequenceFlow.create(model);
	sequenceFlow19.destinationConnectionIndex = 1;
	sequenceFlow19.originBezierVector = {"width":210,"height":-265};
	sequenceFlow19.destinationBezierVector = {"width":280,"height":-20};
	sequenceFlow19.caseValue = enumerationCase12;   // Note: for this property a default value is defined.

	var enumerationCase13 = microflows.EnumerationCase.create(model);
	enumerationCase13.value = "NoInputParams";

	var sequenceFlow20 = microflows.SequenceFlow.create(model);
	sequenceFlow20.destinationConnectionIndex = 1;
	sequenceFlow20.originBezierVector = {"width":85,"height":-205};
	sequenceFlow20.destinationBezierVector = {"width":370,"height":-25};
	sequenceFlow20.caseValue = enumerationCase13;   // Note: for this property a default value is defined.

	var enumerationCase14 = microflows.EnumerationCase.create(model);
	enumerationCase14.value = "WrongNrOfInputParams";

	var sequenceFlow21 = microflows.SequenceFlow.create(model);
	sequenceFlow21.destinationConnectionIndex = 1;
	sequenceFlow21.originBezierVector = {"width":5,"height":-120};
	sequenceFlow21.destinationBezierVector = {"width":400,"height":-15};
	sequenceFlow21.caseValue = enumerationCase14;   // Note: for this property a default value is defined.

	var enumerationCase15 = microflows.EnumerationCase.create(model);
	enumerationCase15.value = "WrongReturnType";

	var sequenceFlow22 = microflows.SequenceFlow.create(model);
	sequenceFlow22.destinationConnectionIndex = 1;
	sequenceFlow22.originBezierVector = {"width":0,"height":-65};
	sequenceFlow22.destinationBezierVector = {"width":260,"height":-5};
	sequenceFlow22.caseValue = enumerationCase15;   // Note: for this property a default value is defined.

	var enumerationCase16 = microflows.EnumerationCase.create(model);
	enumerationCase16.value = "NoAssociationKeys";

	var sequenceFlow23 = microflows.SequenceFlow.create(model);
	sequenceFlow23.destinationConnectionIndex = 2;
	sequenceFlow23.originBezierVector = {"width":0,"height":-15};
	sequenceFlow23.destinationBezierVector = {"width":0,"height":115};
	sequenceFlow23.caseValue = enumerationCase16;   // Note: for this property a default value is defined.

	var enumerationCase17 = microflows.EnumerationCase.create(model);
	enumerationCase17.value = "InvalidAutoNumberSelection";

	var sequenceFlow24 = microflows.SequenceFlow.create(model);
	sequenceFlow24.destinationConnectionIndex = 1;
	sequenceFlow24.originBezierVector = {"width":270,"height":-85};
	sequenceFlow24.destinationBezierVector = {"width":160,"height":30};
	sequenceFlow24.caseValue = enumerationCase17;   // Note: for this property a default value is defined.

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

	var setColumnStatus1 = microflows.Microflow.createIn(unit);
	setColumnStatus1.name = "SetColumnStatus";
	setColumnStatus1.objectCollection = microflowObjectCollection1;   // Note: for this property a default value is defined.
	setColumnStatus1.flows.push(sequenceFlow1);
	setColumnStatus1.flows.push(sequenceFlow2);
	setColumnStatus1.flows.push(sequenceFlow3);
	setColumnStatus1.flows.push(sequenceFlow4);
	setColumnStatus1.flows.push(sequenceFlow5);
	setColumnStatus1.flows.push(sequenceFlow6);
	setColumnStatus1.flows.push(sequenceFlow7);
	setColumnStatus1.flows.push(sequenceFlow8);
	setColumnStatus1.flows.push(sequenceFlow9);
	setColumnStatus1.flows.push(sequenceFlow10);
	setColumnStatus1.flows.push(sequenceFlow11);
	setColumnStatus1.flows.push(sequenceFlow12);
	setColumnStatus1.flows.push(sequenceFlow13);
	setColumnStatus1.flows.push(sequenceFlow14);
	setColumnStatus1.flows.push(sequenceFlow15);
	setColumnStatus1.flows.push(sequenceFlow16);
	setColumnStatus1.flows.push(sequenceFlow17);
	setColumnStatus1.flows.push(sequenceFlow18);
	setColumnStatus1.flows.push(sequenceFlow19);
	setColumnStatus1.flows.push(sequenceFlow20);
	setColumnStatus1.flows.push(sequenceFlow21);
	setColumnStatus1.flows.push(sequenceFlow22);
	setColumnStatus1.flows.push(sequenceFlow23);
	setColumnStatus1.flows.push(sequenceFlow24);
	setColumnStatus1.microflowReturnType = voidType1;
	setColumnStatus1.concurrencyErrorMessage = text1;   // Note: for this property a default value is defined.

	sequenceFlow1.origin = startEvent1;
	sequenceFlow1.destination = exclusiveSplit1;

	sequenceFlow2.origin = exclusiveSplit1;
	sequenceFlow2.destination = exclusiveMerge2;

	sequenceFlow3.origin = exclusiveSplit1;
	sequenceFlow3.destination = exclusiveMerge3;

	sequenceFlow4.origin = exclusiveSplit1;
	sequenceFlow4.destination = exclusiveMerge1;

	sequenceFlow5.origin = actionActivity1;
	sequenceFlow5.destination = endEvent1;

	sequenceFlow6.origin = actionActivity3;
	sequenceFlow6.destination = endEvent3;

	sequenceFlow7.origin = exclusiveMerge1;
	sequenceFlow7.destination = actionActivity1;

	sequenceFlow8.origin = exclusiveSplit1;
	sequenceFlow8.destination = exclusiveMerge1;

	sequenceFlow9.origin = actionActivity2;
	sequenceFlow9.destination = endEvent2;

	sequenceFlow10.origin = exclusiveMerge2;
	sequenceFlow10.destination = exclusiveSplit2;

	sequenceFlow11.origin = exclusiveSplit1;
	sequenceFlow11.destination = exclusiveMerge2;

	sequenceFlow12.origin = exclusiveMerge3;
	sequenceFlow12.destination = actionActivity2;

	sequenceFlow13.origin = exclusiveSplit1;
	sequenceFlow13.destination = exclusiveMerge3;

	sequenceFlow14.origin = exclusiveSplit1;
	sequenceFlow14.destination = exclusiveMerge3;

	sequenceFlow15.origin = exclusiveSplit1;
	sequenceFlow15.destination = exclusiveMerge3;

	sequenceFlow16.origin = exclusiveSplit1;
	sequenceFlow16.destination = exclusiveMerge3;

	sequenceFlow17.origin = exclusiveSplit1;
	sequenceFlow17.destination = exclusiveMerge3;

	sequenceFlow18.origin = exclusiveSplit2;
	sequenceFlow18.destination = actionActivity3;

	sequenceFlow19.origin = exclusiveSplit2;
	sequenceFlow19.destination = exclusiveMerge3;

	sequenceFlow20.origin = exclusiveSplit2;
	sequenceFlow20.destination = exclusiveMerge3;

	sequenceFlow21.origin = exclusiveSplit2;
	sequenceFlow21.destination = exclusiveMerge3;

	sequenceFlow22.origin = exclusiveSplit2;
	sequenceFlow22.destination = exclusiveMerge3;

	sequenceFlow23.origin = exclusiveSplit1;
	sequenceFlow23.destination = exclusiveMerge3;

	sequenceFlow24.origin = exclusiveSplit1;
	sequenceFlow24.destination = exclusiveMerge3;

})