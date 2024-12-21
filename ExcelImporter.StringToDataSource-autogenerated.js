(function (unit, model) {

	/*
	 * JavaScript code generated by mendixmodelsdk.sdk.extras.JavaScriptSerializer
	 * from unit with id "cf0b1cbc-11a1-4757-97e4-d0c706f2c787" of type Microflows$Microflow
	 * in working copy "SoccerSquad"
	 * on 20-12-2024.
	 */

	var startEvent1 = microflows.StartEvent.create(model);
	startEvent1.relativeMiddlePoint = {"x":100,"y":200};
	startEvent1.size = {"width":20,"height":20};

	var endEvent1 = microflows.EndEvent.create(model);
	endEvent1.relativeMiddlePoint = {"x":395,"y":200};
	endEvent1.size = {"width":20,"height":20};
	endEvent1.returnValue = "ExcelImporter.DataSource.CellValue";

	var stringType1 = datatypes.StringType.create(model);

	var dataSource1 = microflows.MicroflowParameterObject.create(model);
	dataSource1.relativeMiddlePoint = {"x":100,"y":0};
	dataSource1.size = {"width":30,"height":30};
	dataSource1.name = "DataSource";
	dataSource1.variableType = stringType1;   // Note: for this property a default value is defined.

	var expressionSplitCondition1 = microflows.ExpressionSplitCondition.create(model);
	expressionSplitCondition1.expression = "$DataSource = empty\nor\ntoString( ExcelImporter.DataSource.CellValue ) = $DataSource";

	var exclusiveSplit1 = microflows.ExclusiveSplit.create(model);
	exclusiveSplit1.relativeMiddlePoint = {"x":220,"y":200};
	exclusiveSplit1.size = {"width":60,"height":40};
	exclusiveSplit1.splitCondition = expressionSplitCondition1;   // Note: for this property a default value is defined.

	var endEvent2 = microflows.EndEvent.create(model);
	endEvent2.relativeMiddlePoint = {"x":395,"y":305};
	endEvent2.size = {"width":20,"height":20};
	endEvent2.returnValue = "ExcelImporter.DataSource.DocumentPropertyRowNr";

	var expressionSplitCondition2 = microflows.ExpressionSplitCondition.create(model);
	expressionSplitCondition2.expression = "toString( ExcelImporter.DataSource.DocumentPropertyRowNr ) = $DataSource";

	var exclusiveSplit2 = microflows.ExclusiveSplit.create(model);
	exclusiveSplit2.relativeMiddlePoint = {"x":220,"y":305};
	exclusiveSplit2.size = {"width":60,"height":40};
	exclusiveSplit2.splitCondition = expressionSplitCondition2;   // Note: for this property a default value is defined.

	var endEvent3 = microflows.EndEvent.create(model);
	endEvent3.relativeMiddlePoint = {"x":395,"y":400};
	endEvent3.size = {"width":20,"height":20};
	endEvent3.returnValue = "ExcelImporter.DataSource.DocumentPropertySheetNr";

	var expressionSplitCondition3 = microflows.ExpressionSplitCondition.create(model);
	expressionSplitCondition3.expression = "toString( ExcelImporter.DataSource.DocumentPropertySheetNr ) = $DataSource";

	var exclusiveSplit3 = microflows.ExclusiveSplit.create(model);
	exclusiveSplit3.relativeMiddlePoint = {"x":220,"y":400};
	exclusiveSplit3.size = {"width":60,"height":40};
	exclusiveSplit3.splitCondition = expressionSplitCondition3;   // Note: for this property a default value is defined.

	var endEvent4 = microflows.EndEvent.create(model);
	endEvent4.relativeMiddlePoint = {"x":220,"y":485};
	endEvent4.size = {"width":20,"height":20};
	endEvent4.returnValue = "ExcelImporter.DataSource.StaticValue";

	var microflowObjectCollection1 = microflows.MicroflowObjectCollection.create(model);
	microflowObjectCollection1.objects.push(startEvent1);
	microflowObjectCollection1.objects.push(endEvent1);
	microflowObjectCollection1.objects.push(dataSource1);
	microflowObjectCollection1.objects.push(exclusiveSplit1);
	microflowObjectCollection1.objects.push(endEvent2);
	microflowObjectCollection1.objects.push(exclusiveSplit2);
	microflowObjectCollection1.objects.push(endEvent3);
	microflowObjectCollection1.objects.push(exclusiveSplit3);
	microflowObjectCollection1.objects.push(endEvent4);

	var noCase1 = microflows.NoCase.create(model);

	var sequenceFlow1 = microflows.SequenceFlow.create(model);
	sequenceFlow1.originConnectionIndex = 1;
	sequenceFlow1.destinationConnectionIndex = 3;
	sequenceFlow1.originBezierVector = {"width":0,"height":0};
	sequenceFlow1.destinationBezierVector = {"width":-15,"height":0};
	sequenceFlow1.caseValue = noCase1;   // Note: for this property a default value is defined.

	var enumerationCase1 = microflows.EnumerationCase.create(model);
	enumerationCase1.value = "true";

	var sequenceFlow2 = microflows.SequenceFlow.create(model);
	sequenceFlow2.originConnectionIndex = 1;
	sequenceFlow2.destinationConnectionIndex = 3;
	sequenceFlow2.originBezierVector = {"width":15,"height":0};
	sequenceFlow2.destinationBezierVector = {"width":-15,"height":0};
	sequenceFlow2.caseValue = enumerationCase1;   // Note: for this property a default value is defined.

	var enumerationCase2 = microflows.EnumerationCase.create(model);
	enumerationCase2.value = "true";

	var sequenceFlow3 = microflows.SequenceFlow.create(model);
	sequenceFlow3.originConnectionIndex = 1;
	sequenceFlow3.destinationConnectionIndex = 3;
	sequenceFlow3.originBezierVector = {"width":15,"height":0};
	sequenceFlow3.destinationBezierVector = {"width":-15,"height":0};
	sequenceFlow3.caseValue = enumerationCase2;   // Note: for this property a default value is defined.

	var enumerationCase3 = microflows.EnumerationCase.create(model);
	enumerationCase3.value = "false";

	var sequenceFlow4 = microflows.SequenceFlow.create(model);
	sequenceFlow4.originConnectionIndex = 2;
	sequenceFlow4.originBezierVector = {"width":0,"height":15};
	sequenceFlow4.destinationBezierVector = {"width":0,"height":-15};
	sequenceFlow4.caseValue = enumerationCase3;   // Note: for this property a default value is defined.

	var enumerationCase4 = microflows.EnumerationCase.create(model);
	enumerationCase4.value = "true";

	var sequenceFlow5 = microflows.SequenceFlow.create(model);
	sequenceFlow5.originConnectionIndex = 1;
	sequenceFlow5.destinationConnectionIndex = 3;
	sequenceFlow5.originBezierVector = {"width":15,"height":0};
	sequenceFlow5.destinationBezierVector = {"width":-15,"height":0};
	sequenceFlow5.caseValue = enumerationCase4;   // Note: for this property a default value is defined.

	var enumerationCase5 = microflows.EnumerationCase.create(model);
	enumerationCase5.value = "false";

	var sequenceFlow6 = microflows.SequenceFlow.create(model);
	sequenceFlow6.originConnectionIndex = 2;
	sequenceFlow6.originBezierVector = {"width":0,"height":15};
	sequenceFlow6.destinationBezierVector = {"width":0,"height":-15};
	sequenceFlow6.caseValue = enumerationCase5;   // Note: for this property a default value is defined.

	var enumerationCase6 = microflows.EnumerationCase.create(model);
	enumerationCase6.value = "false";

	var sequenceFlow7 = microflows.SequenceFlow.create(model);
	sequenceFlow7.originConnectionIndex = 2;
	sequenceFlow7.originBezierVector = {"width":0,"height":15};
	sequenceFlow7.destinationBezierVector = {"width":0,"height":-15};
	sequenceFlow7.caseValue = enumerationCase6;   // Note: for this property a default value is defined.

	var enumerationType1 = datatypes.EnumerationType.create(model);
	enumerationType1.enumeration = model.findEnumerationByQualifiedName("ExcelImporter.DataSource");

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

	var stringToDataSource1 = microflows.Microflow.createIn(unit);
	stringToDataSource1.name = "StringToDataSource";
	stringToDataSource1.objectCollection = microflowObjectCollection1;   // Note: for this property a default value is defined.
	stringToDataSource1.flows.push(sequenceFlow1);
	stringToDataSource1.flows.push(sequenceFlow2);
	stringToDataSource1.flows.push(sequenceFlow3);
	stringToDataSource1.flows.push(sequenceFlow4);
	stringToDataSource1.flows.push(sequenceFlow5);
	stringToDataSource1.flows.push(sequenceFlow6);
	stringToDataSource1.flows.push(sequenceFlow7);
	stringToDataSource1.microflowReturnType = enumerationType1;
	stringToDataSource1.concurrencyErrorMessage = text1;   // Note: for this property a default value is defined.

	sequenceFlow1.origin = startEvent1;
	sequenceFlow1.destination = exclusiveSplit1;

	sequenceFlow2.origin = exclusiveSplit1;
	sequenceFlow2.destination = endEvent1;

	sequenceFlow3.origin = exclusiveSplit2;
	sequenceFlow3.destination = endEvent2;

	sequenceFlow4.origin = exclusiveSplit1;
	sequenceFlow4.destination = exclusiveSplit2;

	sequenceFlow5.origin = exclusiveSplit3;
	sequenceFlow5.destination = endEvent3;

	sequenceFlow6.origin = exclusiveSplit2;
	sequenceFlow6.destination = exclusiveSplit3;

	sequenceFlow7.origin = exclusiveSplit3;
	sequenceFlow7.destination = endEvent4;

})