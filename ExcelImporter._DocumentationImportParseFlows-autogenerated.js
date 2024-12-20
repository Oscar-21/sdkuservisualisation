(function (unit, model) {

	/*
	 * JavaScript code generated by mendixmodelsdk.sdk.extras.JavaScriptSerializer
	 * from unit with id "0e8a899c-a0af-460a-83cb-980273d2d7a4" of type Microflows$Microflow
	 * in working copy "SoccerSquad"
	 * on 20-12-2024.
	 */

	var startEvent1 = microflows.StartEvent.create(model);
	startEvent1.relativeMiddlePoint = {"x":100,"y":200};
	startEvent1.size = {"width":20,"height":20};

	var endEvent1 = microflows.EndEvent.create(model);
	endEvent1.relativeMiddlePoint = {"x":700,"y":200};
	endEvent1.size = {"width":20,"height":20};

	var annotation1 = microflows.Annotation.create(model);
	annotation1.relativeMiddlePoint = {"x":430,"y":100};
	annotation1.size = {"width":370,"height":110};
	annotation1.caption = "The microflows in this folder are used to parse the (string) values in the imported XML file to the correct Enumeration values, so they can be imported from XML.";

	var microflowObjectCollection1 = microflows.MicroflowObjectCollection.create(model);
	microflowObjectCollection1.objects.push(startEvent1);
	microflowObjectCollection1.objects.push(endEvent1);
	microflowObjectCollection1.objects.push(annotation1);

	var noCase1 = microflows.NoCase.create(model);

	var sequenceFlow1 = microflows.SequenceFlow.create(model);
	sequenceFlow1.originConnectionIndex = 1;
	sequenceFlow1.destinationConnectionIndex = 3;
	sequenceFlow1.originBezierVector = {"width":0,"height":0};
	sequenceFlow1.destinationBezierVector = {"width":0,"height":0};
	sequenceFlow1.caseValue = noCase1;   // Note: for this property a default value is defined.

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

	var _DocumentationImportParseFlows1 = microflows.Microflow.createIn(unit);
	_DocumentationImportParseFlows1.name = "_DocumentationImportParseFlows";
	_DocumentationImportParseFlows1.objectCollection = microflowObjectCollection1;   // Note: for this property a default value is defined.
	_DocumentationImportParseFlows1.flows.push(sequenceFlow1);
	_DocumentationImportParseFlows1.microflowReturnType = voidType1;
	_DocumentationImportParseFlows1.concurrencyErrorMessage = text1;   // Note: for this property a default value is defined.

	sequenceFlow1.origin = startEvent1;
	sequenceFlow1.destination = endEvent1;

})