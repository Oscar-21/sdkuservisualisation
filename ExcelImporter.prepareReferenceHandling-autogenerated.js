(function (unit, model) {

	/*
	 * JavaScript code generated by mendixmodelsdk.sdk.extras.JavaScriptSerializer
	 * from unit with id "671c1b90-76bd-4cec-be0a-0ffa4ec819af" of type Microflows$Microflow
	 * in working copy "SoccerSquad"
	 * on 20-12-2024.
	 */

	var associationRetrieveSource1 = microflows.AssociationRetrieveSource.create(model);
	associationRetrieveSource1.startVariableName = "pColumn";
	associationRetrieveSource1.association = model.findAssociationBaseByQualifiedName("ExcelImporter.Column_MxObjectReference");

	var retrieveAction1 = microflows.RetrieveAction.create(model);
	retrieveAction1.retrieveSource = associationRetrieveSource1;   // Note: for this property a default value is defined.
	retrieveAction1.outputVariableName = "vMxReference";

	var actionActivity1 = microflows.ActionActivity.create(model);
	actionActivity1.relativeMiddlePoint = {"x":220,"y":200};
	actionActivity1.size = {"width":140,"height":60};
	actionActivity1.action = retrieveAction1;
	actionActivity1.caption = "Get the reference from the column";
	actionActivity1.autoGenerateCaption = false;

	var constantRange1 = microflows.ConstantRange.create(model);
	constantRange1.singleObject = true;

	var sortItemList1 = microflows.SortItemList.create(model);

	var databaseRetrieveSource1 = microflows.DatabaseRetrieveSource.create(model);
	databaseRetrieveSource1.entity = model.findEntityByQualifiedName("ExcelImporter.ReferenceHandling");
	databaseRetrieveSource1.range = constantRange1;   // Note: for this property a default value is defined.
	databaseRetrieveSource1.xPathConstraint = "[ExcelImporter.ReferenceHandling_MxObjectReference=$vMxReference]\n[ExcelImporter.ReferenceHandling_Template=$pColumn/ExcelImporter.Column_Template]";
	databaseRetrieveSource1.sortItemList = sortItemList1;   // Note: for this property a default value is defined.

	var retrieveAction2 = microflows.RetrieveAction.create(model);
	retrieveAction2.retrieveSource = databaseRetrieveSource1;   // Note: for this property a default value is defined.
	retrieveAction2.outputVariableName = "vReferenceHandling";

	var actionActivity2 = microflows.ActionActivity.create(model);
	actionActivity2.relativeMiddlePoint = {"x":405,"y":200};
	actionActivity2.size = {"width":160,"height":60};
	actionActivity2.action = retrieveAction2;
	actionActivity2.caption = "Try to find the reference handling for this reference";
	actionActivity2.autoGenerateCaption = false;

	var expressionSplitCondition1 = microflows.ExpressionSplitCondition.create(model);
	expressionSplitCondition1.expression = "$vReferenceHandling != empty";

	var exclusiveSplit1 = microflows.ExclusiveSplit.create(model);
	exclusiveSplit1.relativeMiddlePoint = {"x":550,"y":200};
	exclusiveSplit1.size = {"width":60,"height":40};
	exclusiveSplit1.splitCondition = expressionSplitCondition1;   // Note: for this property a default value is defined.
	exclusiveSplit1.caption = "found?";

	var endEvent1 = microflows.EndEvent.create(model);
	endEvent1.relativeMiddlePoint = {"x":710,"y":200};
	endEvent1.size = {"width":20,"height":20};

	var createObjectAction1 = microflows.CreateObjectAction.create(model);
	createObjectAction1.entity = model.findEntityByQualifiedName("ExcelImporter.ReferenceHandling");
	createObjectAction1.outputVariableName = "vNewReferenceHandling";

	var actionActivity3 = microflows.ActionActivity.create(model);
	actionActivity3.relativeMiddlePoint = {"x":550,"y":305};
	actionActivity3.size = {"width":160,"height":60};
	actionActivity3.action = createObjectAction1;
	actionActivity3.caption = "Create the reference handling for the reference";
	actionActivity3.autoGenerateCaption = false;

	var memberChange1 = microflows.MemberChange.create(model);
	memberChange1.association = model.findAssociationBaseByQualifiedName("ExcelImporter.ReferenceHandling_Template");
	memberChange1.value = "$pColumn/ExcelImporter.Column_Template";

	var memberChange2 = microflows.MemberChange.create(model);
	memberChange2.association = model.findAssociationBaseByQualifiedName("ExcelImporter.ReferenceHandling_MxObjectReference");
	memberChange2.value = "$vMxReference";

	var changeObjectAction1 = microflows.ChangeObjectAction.create(model);
	changeObjectAction1.items.push(memberChange1);
	changeObjectAction1.items.push(memberChange2);
	changeObjectAction1.refreshInClient = true;
	changeObjectAction1.commit = microflows.CommitEnum.Yes;
	changeObjectAction1.changeVariableName = "vNewReferenceHandling";

	var actionActivity4 = microflows.ActionActivity.create(model);
	actionActivity4.relativeMiddlePoint = {"x":550,"y":410};
	actionActivity4.size = {"width":150,"height":60};
	actionActivity4.action = changeObjectAction1;
	actionActivity4.caption = "Set the references and commit";
	actionActivity4.autoGenerateCaption = false;

	var endEvent2 = microflows.EndEvent.create(model);
	endEvent2.relativeMiddlePoint = {"x":710,"y":410};
	endEvent2.size = {"width":20,"height":20};

	var startEvent1 = microflows.StartEvent.create(model);
	startEvent1.relativeMiddlePoint = {"x":-435,"y":200};
	startEvent1.size = {"width":20,"height":20};

	var objectType1 = datatypes.ObjectType.create(model);
	objectType1.entity = model.findEntityByQualifiedName("ExcelImporter.Column");

	var pColumn1 = microflows.MicroflowParameterObject.create(model);
	pColumn1.relativeMiddlePoint = {"x":-435,"y":105};
	pColumn1.size = {"width":30,"height":30};
	pColumn1.name = "pColumn";
	pColumn1.variableType = objectType1;   // Note: for this property a default value is defined.

	var expressionSplitCondition2 = microflows.ExpressionSplitCondition.create(model);
	expressionSplitCondition2.expression = "$vOriColumn = empty";

	var exclusiveSplit2 = microflows.ExclusiveSplit.create(model);
	exclusiveSplit2.relativeMiddlePoint = {"x":-190,"y":200};
	exclusiveSplit2.size = {"width":60,"height":40};
	exclusiveSplit2.splitCondition = expressionSplitCondition2;   // Note: for this property a default value is defined.
	exclusiveSplit2.caption = "is new";

	var expressionSplitCondition3 = microflows.ExpressionSplitCondition.create(model);
	expressionSplitCondition3.expression = "$vOriColumn/ExcelImporter.Column_MxObjectReference != $pColumn/ExcelImporter.Column_MxObjectReference\nand\n$vOriColumn/MappingType = ExcelImporter.MappingType.Reference \nor\n( $vOriColumn/MappingType = ExcelImporter.MappingType.Reference and ($pColumn/MappingType = ExcelImporter.MappingType.Attribute or $pColumn/MappingType = ExcelImporter.MappingType.DoNotUse))";

	var exclusiveSplit3 = microflows.ExclusiveSplit.create(model);
	exclusiveSplit3.relativeMiddlePoint = {"x":-190,"y":315};
	exclusiveSplit3.size = {"width":100,"height":50};
	exclusiveSplit3.splitCondition = expressionSplitCondition3;   // Note: for this property a default value is defined.
	exclusiveSplit3.caption = "mxreference has changed?";

	var exclusiveMerge1 = microflows.ExclusiveMerge.create(model);
	exclusiveMerge1.relativeMiddlePoint = {"x":-70,"y":200};
	exclusiveMerge1.size = {"width":20,"height":20};

	var expressionSplitCondition4 = microflows.ExpressionSplitCondition.create(model);
	expressionSplitCondition4.expression = "$pColumn/MappingType = ExcelImporter.MappingType.Reference\nand\n$pColumn/ExcelImporter.Column_MxObjectReference != empty";

	var exclusiveSplit4 = microflows.ExclusiveSplit.create(model);
	exclusiveSplit4.relativeMiddlePoint = {"x":30,"y":200};
	exclusiveSplit4.size = {"width":90,"height":60};
	exclusiveSplit4.splitCondition = expressionSplitCondition4;   // Note: for this property a default value is defined.
	exclusiveSplit4.caption = "is reference mapping";

	var endEvent3 = microflows.EndEvent.create(model);
	endEvent3.relativeMiddlePoint = {"x":30,"y":90};
	endEvent3.size = {"width":20,"height":20};

	var constantRange2 = microflows.ConstantRange.create(model);

	var sortItemList2 = microflows.SortItemList.create(model);

	var databaseRetrieveSource2 = microflows.DatabaseRetrieveSource.create(model);
	databaseRetrieveSource2.entity = model.findEntityByQualifiedName("ExcelImporter.Column");
	databaseRetrieveSource2.range = constantRange2;   // Note: for this property a default value is defined.
	databaseRetrieveSource2.xPathConstraint = "[id!=$vOriColumn]\n[ExcelImporter.Column_MxObjectReference=$vOriColumn/ExcelImporter.Column_MxObjectReference]\n[MappingType='Reference']";
	databaseRetrieveSource2.sortItemList = sortItemList2;   // Note: for this property a default value is defined.

	var retrieveAction3 = microflows.RetrieveAction.create(model);
	retrieveAction3.retrieveSource = databaseRetrieveSource2;   // Note: for this property a default value is defined.
	retrieveAction3.outputVariableName = "vOtherColumnWithThisRef";

	var actionActivity5 = microflows.ActionActivity.create(model);
	actionActivity5.relativeMiddlePoint = {"x":-190,"y":415};
	actionActivity5.size = {"width":160,"height":60};
	actionActivity5.action = retrieveAction3;
	actionActivity5.caption = "Get all other columns with a mapping for the same reference";
	actionActivity5.autoGenerateCaption = false;

	var aggregateListAction1 = microflows.AggregateListAction.create(model);
	aggregateListAction1.inputListVariableName = "vOtherColumnWithThisRef";
	aggregateListAction1.outputVariableName = "Count";

	var actionActivity6 = microflows.ActionActivity.create(model);
	actionActivity6.relativeMiddlePoint = {"x":-190,"y":505};
	actionActivity6.size = {"width":70,"height":30};
	actionActivity6.action = aggregateListAction1;
	actionActivity6.caption = "count";
	actionActivity6.autoGenerateCaption = false;

	var expressionSplitCondition5 = microflows.ExpressionSplitCondition.create(model);
	expressionSplitCondition5.expression = "$Count > 0";

	var exclusiveSplit5 = microflows.ExclusiveSplit.create(model);
	exclusiveSplit5.relativeMiddlePoint = {"x":-190,"y":590};
	exclusiveSplit5.size = {"width":60,"height":40};
	exclusiveSplit5.splitCondition = expressionSplitCondition5;   // Note: for this property a default value is defined.
	exclusiveSplit5.caption = "> 0";

	var constantRange3 = microflows.ConstantRange.create(model);
	constantRange3.singleObject = true;

	var sortItemList3 = microflows.SortItemList.create(model);

	var databaseRetrieveSource3 = microflows.DatabaseRetrieveSource.create(model);
	databaseRetrieveSource3.entity = model.findEntityByQualifiedName("ExcelImporter.ReferenceHandling");
	databaseRetrieveSource3.range = constantRange3;   // Note: for this property a default value is defined.
	databaseRetrieveSource3.xPathConstraint = "[ExcelImporter.ReferenceHandling_MxObjectReference=$vOriColumn/ExcelImporter.Column_MxObjectReference]\n[ExcelImporter.ReferenceHandling_Template=$pColumn/ExcelImporter.Column_Template]";
	databaseRetrieveSource3.sortItemList = sortItemList3;   // Note: for this property a default value is defined.

	var retrieveAction4 = microflows.RetrieveAction.create(model);
	retrieveAction4.retrieveSource = databaseRetrieveSource3;   // Note: for this property a default value is defined.
	retrieveAction4.outputVariableName = "vReferenceHandlingToRemove";

	var actionActivity7 = microflows.ActionActivity.create(model);
	actionActivity7.relativeMiddlePoint = {"x":-190,"y":675};
	actionActivity7.size = {"width":160,"height":60};
	actionActivity7.action = retrieveAction4;
	actionActivity7.caption = "Try to find the reference handling for this reference";
	actionActivity7.autoGenerateCaption = false;

	var expressionSplitCondition6 = microflows.ExpressionSplitCondition.create(model);
	expressionSplitCondition6.expression = "$vReferenceHandlingToRemove != empty";

	var exclusiveSplit6 = microflows.ExclusiveSplit.create(model);
	exclusiveSplit6.relativeMiddlePoint = {"x":-190,"y":770};
	exclusiveSplit6.size = {"width":60,"height":40};
	exclusiveSplit6.splitCondition = expressionSplitCondition6;   // Note: for this property a default value is defined.
	exclusiveSplit6.caption = "found?";

	var exclusiveMerge2 = microflows.ExclusiveMerge.create(model);
	exclusiveMerge2.relativeMiddlePoint = {"x":-70,"y":770};
	exclusiveMerge2.size = {"width":60,"height":40};

	var deleteAction1 = microflows.DeleteAction.create(model);
	deleteAction1.deleteVariableName = "vReferenceHandlingToRemove";
	deleteAction1.refreshInClient = true;

	var actionActivity8 = microflows.ActionActivity.create(model);
	actionActivity8.relativeMiddlePoint = {"x":-190,"y":855};
	actionActivity8.size = {"width":80,"height":30};
	actionActivity8.action = deleteAction1;
	actionActivity8.caption = "Remove";
	actionActivity8.autoGenerateCaption = false;

	var constantRange4 = microflows.ConstantRange.create(model);
	constantRange4.singleObject = true;

	var sortItemList4 = microflows.SortItemList.create(model);

	var databaseRetrieveSource4 = microflows.DatabaseRetrieveSource.create(model);
	databaseRetrieveSource4.entity = model.findEntityByQualifiedName("ExcelImporter.Column");
	databaseRetrieveSource4.range = constantRange4;   // Note: for this property a default value is defined.
	databaseRetrieveSource4.xPathConstraint = "[id=$pColumn]";
	databaseRetrieveSource4.sortItemList = sortItemList4;   // Note: for this property a default value is defined.

	var retrieveAction5 = microflows.RetrieveAction.create(model);
	retrieveAction5.retrieveSource = databaseRetrieveSource4;   // Note: for this property a default value is defined.
	retrieveAction5.outputVariableName = "vOriColumn";

	var actionActivity9 = microflows.ActionActivity.create(model);
	actionActivity9.relativeMiddlePoint = {"x":-315,"y":200};
	actionActivity9.size = {"width":130,"height":60};
	actionActivity9.action = retrieveAction5;
	actionActivity9.caption = "Get the original column from the db";
	actionActivity9.autoGenerateCaption = false;

	var microflowObjectCollection1 = microflows.MicroflowObjectCollection.create(model);
	microflowObjectCollection1.objects.push(actionActivity1);
	microflowObjectCollection1.objects.push(actionActivity2);
	microflowObjectCollection1.objects.push(exclusiveSplit1);
	microflowObjectCollection1.objects.push(endEvent1);
	microflowObjectCollection1.objects.push(actionActivity3);
	microflowObjectCollection1.objects.push(actionActivity4);
	microflowObjectCollection1.objects.push(endEvent2);
	microflowObjectCollection1.objects.push(startEvent1);
	microflowObjectCollection1.objects.push(pColumn1);
	microflowObjectCollection1.objects.push(exclusiveSplit2);
	microflowObjectCollection1.objects.push(exclusiveSplit3);
	microflowObjectCollection1.objects.push(exclusiveMerge1);
	microflowObjectCollection1.objects.push(exclusiveSplit4);
	microflowObjectCollection1.objects.push(endEvent3);
	microflowObjectCollection1.objects.push(actionActivity5);
	microflowObjectCollection1.objects.push(actionActivity6);
	microflowObjectCollection1.objects.push(exclusiveSplit5);
	microflowObjectCollection1.objects.push(actionActivity7);
	microflowObjectCollection1.objects.push(exclusiveSplit6);
	microflowObjectCollection1.objects.push(exclusiveMerge2);
	microflowObjectCollection1.objects.push(actionActivity8);
	microflowObjectCollection1.objects.push(actionActivity9);

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

	var enumerationCase1 = microflows.EnumerationCase.create(model);
	enumerationCase1.value = "true";

	var sequenceFlow4 = microflows.SequenceFlow.create(model);
	sequenceFlow4.originConnectionIndex = 1;
	sequenceFlow4.destinationConnectionIndex = 3;
	sequenceFlow4.originBezierVector = {"width":15,"height":0};
	sequenceFlow4.destinationBezierVector = {"width":-15,"height":0};
	sequenceFlow4.caseValue = enumerationCase1;   // Note: for this property a default value is defined.

	var enumerationCase2 = microflows.EnumerationCase.create(model);
	enumerationCase2.value = "false";

	var sequenceFlow5 = microflows.SequenceFlow.create(model);
	sequenceFlow5.originConnectionIndex = 2;
	sequenceFlow5.originBezierVector = {"width":0,"height":15};
	sequenceFlow5.destinationBezierVector = {"width":0,"height":-30};
	sequenceFlow5.caseValue = enumerationCase2;   // Note: for this property a default value is defined.

	var noCase4 = microflows.NoCase.create(model);

	var sequenceFlow6 = microflows.SequenceFlow.create(model);
	sequenceFlow6.originConnectionIndex = 2;
	sequenceFlow6.originBezierVector = {"width":0,"height":30};
	sequenceFlow6.destinationBezierVector = {"width":0,"height":-30};
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
	sequenceFlow8.destinationBezierVector = {"width":-15,"height":0};
	sequenceFlow8.caseValue = noCase6;   // Note: for this property a default value is defined.

	var enumerationCase3 = microflows.EnumerationCase.create(model);
	enumerationCase3.value = "true";

	var sequenceFlow9 = microflows.SequenceFlow.create(model);
	sequenceFlow9.originConnectionIndex = 1;
	sequenceFlow9.destinationConnectionIndex = 3;
	sequenceFlow9.originBezierVector = {"width":15,"height":0};
	sequenceFlow9.destinationBezierVector = {"width":-15,"height":0};
	sequenceFlow9.caseValue = enumerationCase3;   // Note: for this property a default value is defined.

	var enumerationCase4 = microflows.EnumerationCase.create(model);
	enumerationCase4.value = "false";

	var sequenceFlow10 = microflows.SequenceFlow.create(model);
	sequenceFlow10.originConnectionIndex = 2;
	sequenceFlow10.originBezierVector = {"width":0,"height":15};
	sequenceFlow10.destinationBezierVector = {"width":0,"height":-15};
	sequenceFlow10.caseValue = enumerationCase4;   // Note: for this property a default value is defined.

	var noCase7 = microflows.NoCase.create(model);

	var sequenceFlow11 = microflows.SequenceFlow.create(model);
	sequenceFlow11.originConnectionIndex = 1;
	sequenceFlow11.destinationConnectionIndex = 3;
	sequenceFlow11.originBezierVector = {"width":15,"height":0};
	sequenceFlow11.destinationBezierVector = {"width":-15,"height":0};
	sequenceFlow11.caseValue = noCase7;   // Note: for this property a default value is defined.

	var enumerationCase5 = microflows.EnumerationCase.create(model);
	enumerationCase5.value = "false";

	var sequenceFlow12 = microflows.SequenceFlow.create(model);
	sequenceFlow12.originConnectionIndex = 1;
	sequenceFlow12.destinationConnectionIndex = 2;
	sequenceFlow12.originBezierVector = {"width":15,"height":0};
	sequenceFlow12.destinationBezierVector = {"width":0,"height":15};
	sequenceFlow12.caseValue = enumerationCase5;   // Note: for this property a default value is defined.

	var enumerationCase6 = microflows.EnumerationCase.create(model);
	enumerationCase6.value = "true";

	var sequenceFlow13 = microflows.SequenceFlow.create(model);
	sequenceFlow13.originConnectionIndex = 2;
	sequenceFlow13.originBezierVector = {"width":0,"height":15};
	sequenceFlow13.destinationBezierVector = {"width":0,"height":-30};
	sequenceFlow13.caseValue = enumerationCase6;   // Note: for this property a default value is defined.

	var enumerationCase7 = microflows.EnumerationCase.create(model);
	enumerationCase7.value = "true";

	var sequenceFlow14 = microflows.SequenceFlow.create(model);
	sequenceFlow14.originConnectionIndex = 1;
	sequenceFlow14.destinationConnectionIndex = 3;
	sequenceFlow14.originBezierVector = {"width":15,"height":0};
	sequenceFlow14.destinationBezierVector = {"width":-30,"height":0};
	sequenceFlow14.caseValue = enumerationCase7;   // Note: for this property a default value is defined.

	var enumerationCase8 = microflows.EnumerationCase.create(model);
	enumerationCase8.value = "false";

	var sequenceFlow15 = microflows.SequenceFlow.create(model);
	sequenceFlow15.destinationConnectionIndex = 2;
	sequenceFlow15.originBezierVector = {"width":0,"height":-15};
	sequenceFlow15.destinationBezierVector = {"width":0,"height":15};
	sequenceFlow15.caseValue = enumerationCase8;   // Note: for this property a default value is defined.

	var noCase8 = microflows.NoCase.create(model);

	var sequenceFlow16 = microflows.SequenceFlow.create(model);
	sequenceFlow16.originConnectionIndex = 2;
	sequenceFlow16.originBezierVector = {"width":0,"height":30};
	sequenceFlow16.destinationBezierVector = {"width":0,"height":-30};
	sequenceFlow16.caseValue = noCase8;   // Note: for this property a default value is defined.

	var noCase9 = microflows.NoCase.create(model);

	var sequenceFlow17 = microflows.SequenceFlow.create(model);
	sequenceFlow17.originConnectionIndex = 2;
	sequenceFlow17.originBezierVector = {"width":0,"height":30};
	sequenceFlow17.destinationBezierVector = {"width":0,"height":-15};
	sequenceFlow17.caseValue = noCase9;   // Note: for this property a default value is defined.

	var enumerationCase9 = microflows.EnumerationCase.create(model);
	enumerationCase9.value = "true";

	var sequenceFlow18 = microflows.SequenceFlow.create(model);
	sequenceFlow18.originConnectionIndex = 1;
	sequenceFlow18.destinationConnectionIndex = 2;
	sequenceFlow18.originBezierVector = {"width":85,"height":0};
	sequenceFlow18.destinationBezierVector = {"width":0,"height":15};
	sequenceFlow18.caseValue = enumerationCase9;   // Note: for this property a default value is defined.

	var enumerationCase10 = microflows.EnumerationCase.create(model);
	enumerationCase10.value = "false";

	var sequenceFlow19 = microflows.SequenceFlow.create(model);
	sequenceFlow19.originConnectionIndex = 2;
	sequenceFlow19.originBezierVector = {"width":0,"height":15};
	sequenceFlow19.destinationBezierVector = {"width":0,"height":-30};
	sequenceFlow19.caseValue = enumerationCase10;   // Note: for this property a default value is defined.

	var noCase10 = microflows.NoCase.create(model);

	var sequenceFlow20 = microflows.SequenceFlow.create(model);
	sequenceFlow20.originConnectionIndex = 2;
	sequenceFlow20.originBezierVector = {"width":0,"height":30};
	sequenceFlow20.destinationBezierVector = {"width":0,"height":-15};
	sequenceFlow20.caseValue = noCase10;   // Note: for this property a default value is defined.

	var enumerationCase11 = microflows.EnumerationCase.create(model);
	enumerationCase11.value = "true";

	var sequenceFlow21 = microflows.SequenceFlow.create(model);
	sequenceFlow21.originConnectionIndex = 2;
	sequenceFlow21.originBezierVector = {"width":0,"height":15};
	sequenceFlow21.destinationBezierVector = {"width":0,"height":-30};
	sequenceFlow21.caseValue = enumerationCase11;   // Note: for this property a default value is defined.

	var enumerationCase12 = microflows.EnumerationCase.create(model);
	enumerationCase12.value = "false";

	var sequenceFlow22 = microflows.SequenceFlow.create(model);
	sequenceFlow22.originConnectionIndex = 1;
	sequenceFlow22.destinationConnectionIndex = 3;
	sequenceFlow22.originBezierVector = {"width":15,"height":0};
	sequenceFlow22.destinationBezierVector = {"width":-15,"height":0};
	sequenceFlow22.caseValue = enumerationCase12;   // Note: for this property a default value is defined.

	var noCase11 = microflows.NoCase.create(model);

	var sequenceFlow23 = microflows.SequenceFlow.create(model);
	sequenceFlow23.originConnectionIndex = 1;
	sequenceFlow23.destinationConnectionIndex = 2;
	sequenceFlow23.originBezierVector = {"width":30,"height":0};
	sequenceFlow23.destinationBezierVector = {"width":0,"height":15};
	sequenceFlow23.caseValue = noCase11;   // Note: for this property a default value is defined.

	var noCase12 = microflows.NoCase.create(model);

	var sequenceFlow24 = microflows.SequenceFlow.create(model);
	sequenceFlow24.destinationConnectionIndex = 2;
	sequenceFlow24.originBezierVector = {"width":0,"height":-15};
	sequenceFlow24.destinationBezierVector = {"width":0,"height":15};
	sequenceFlow24.caseValue = noCase12;   // Note: for this property a default value is defined.

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

	var prepareReferenceHandling1 = microflows.Microflow.createIn(unit);
	prepareReferenceHandling1.name = "prepareReferenceHandling";
	prepareReferenceHandling1.objectCollection = microflowObjectCollection1;   // Note: for this property a default value is defined.
	prepareReferenceHandling1.flows.push(sequenceFlow1);
	prepareReferenceHandling1.flows.push(sequenceFlow2);
	prepareReferenceHandling1.flows.push(sequenceFlow3);
	prepareReferenceHandling1.flows.push(sequenceFlow4);
	prepareReferenceHandling1.flows.push(sequenceFlow5);
	prepareReferenceHandling1.flows.push(sequenceFlow6);
	prepareReferenceHandling1.flows.push(sequenceFlow7);
	prepareReferenceHandling1.flows.push(sequenceFlow8);
	prepareReferenceHandling1.flows.push(sequenceFlow9);
	prepareReferenceHandling1.flows.push(sequenceFlow10);
	prepareReferenceHandling1.flows.push(sequenceFlow11);
	prepareReferenceHandling1.flows.push(sequenceFlow12);
	prepareReferenceHandling1.flows.push(sequenceFlow13);
	prepareReferenceHandling1.flows.push(sequenceFlow14);
	prepareReferenceHandling1.flows.push(sequenceFlow15);
	prepareReferenceHandling1.flows.push(sequenceFlow16);
	prepareReferenceHandling1.flows.push(sequenceFlow17);
	prepareReferenceHandling1.flows.push(sequenceFlow18);
	prepareReferenceHandling1.flows.push(sequenceFlow19);
	prepareReferenceHandling1.flows.push(sequenceFlow20);
	prepareReferenceHandling1.flows.push(sequenceFlow21);
	prepareReferenceHandling1.flows.push(sequenceFlow22);
	prepareReferenceHandling1.flows.push(sequenceFlow23);
	prepareReferenceHandling1.flows.push(sequenceFlow24);
	prepareReferenceHandling1.microflowReturnType = voidType1;
	prepareReferenceHandling1.concurrencyErrorMessage = text1;   // Note: for this property a default value is defined.

	sequenceFlow1.origin = startEvent1;
	sequenceFlow1.destination = actionActivity9;

	sequenceFlow2.origin = actionActivity1;
	sequenceFlow2.destination = actionActivity2;

	sequenceFlow3.origin = actionActivity2;
	sequenceFlow3.destination = exclusiveSplit1;

	sequenceFlow4.origin = exclusiveSplit1;
	sequenceFlow4.destination = endEvent1;

	sequenceFlow5.origin = exclusiveSplit1;
	sequenceFlow5.destination = actionActivity3;

	sequenceFlow6.origin = actionActivity3;
	sequenceFlow6.destination = actionActivity4;

	sequenceFlow7.origin = actionActivity4;
	sequenceFlow7.destination = endEvent2;

	sequenceFlow8.origin = actionActivity9;
	sequenceFlow8.destination = exclusiveSplit2;

	sequenceFlow9.origin = exclusiveSplit2;
	sequenceFlow9.destination = exclusiveMerge1;

	sequenceFlow10.origin = exclusiveSplit2;
	sequenceFlow10.destination = exclusiveSplit3;

	sequenceFlow11.origin = exclusiveMerge1;
	sequenceFlow11.destination = exclusiveSplit4;

	sequenceFlow12.origin = exclusiveSplit3;
	sequenceFlow12.destination = exclusiveMerge1;

	sequenceFlow13.origin = exclusiveSplit3;
	sequenceFlow13.destination = actionActivity5;

	sequenceFlow14.origin = exclusiveSplit4;
	sequenceFlow14.destination = actionActivity1;

	sequenceFlow15.origin = exclusiveSplit4;
	sequenceFlow15.destination = endEvent3;

	sequenceFlow16.origin = actionActivity5;
	sequenceFlow16.destination = actionActivity6;

	sequenceFlow17.origin = actionActivity6;
	sequenceFlow17.destination = exclusiveSplit5;

	sequenceFlow18.origin = exclusiveSplit5;
	sequenceFlow18.destination = exclusiveMerge1;

	sequenceFlow19.origin = exclusiveSplit5;
	sequenceFlow19.destination = actionActivity7;

	sequenceFlow20.origin = actionActivity7;
	sequenceFlow20.destination = exclusiveSplit6;

	sequenceFlow21.origin = exclusiveSplit6;
	sequenceFlow21.destination = actionActivity8;

	sequenceFlow22.origin = exclusiveSplit6;
	sequenceFlow22.destination = exclusiveMerge2;

	sequenceFlow23.origin = actionActivity8;
	sequenceFlow23.destination = exclusiveMerge2;

	sequenceFlow24.origin = exclusiveMerge2;
	sequenceFlow24.destination = exclusiveMerge1;

})