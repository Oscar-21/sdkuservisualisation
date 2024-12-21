(function (unit, model) {

	/*
	 * JavaScript code generated by mendixmodelsdk.sdk.extras.JavaScriptSerializer
	 * from unit with id "b1433bc7-a79d-4b4c-8bcf-ebfc3f659209" of type Microflows$Microflow
	 * in working copy "SoccerSquad"
	 * on 20-12-2024.
	 */

	var startEvent1 = microflows.StartEvent.create(model);
	startEvent1.relativeMiddlePoint = {"x":100,"y":200};
	startEvent1.size = {"width":20,"height":20};

	var endEvent1 = microflows.EndEvent.create(model);
	endEvent1.relativeMiddlePoint = {"x":700,"y":200};
	endEvent1.size = {"width":20,"height":20};
	endEvent1.returnValue = "$ReferenceTypeString";

	var enumerationType1 = datatypes.EnumerationType.create(model);
	enumerationType1.enumeration = model.findEnumerationByQualifiedName("MxModelReflection.ReferenceType");

	var referenceTypeEnum1 = microflows.MicroflowParameterObject.create(model);
	referenceTypeEnum1.relativeMiddlePoint = {"x":100,"y":95};
	referenceTypeEnum1.size = {"width":30,"height":30};
	referenceTypeEnum1.name = "ReferenceTypeEnum";
	referenceTypeEnum1.variableType = enumerationType1;   // Note: for this property a default value is defined.

	var stringType1 = datatypes.StringType.create(model);

	var createVariableAction1 = microflows.CreateVariableAction.create(model);
	createVariableAction1.variableName = "ReferenceTypeString";
	createVariableAction1.variableType = stringType1;   // Note: for this property a default value is defined.
	createVariableAction1.initialValue = "getKey($ReferenceTypeEnum)";

	var actionActivity1 = microflows.ActionActivity.create(model);
	actionActivity1.relativeMiddlePoint = {"x":330,"y":200};
	actionActivity1.size = {"width":120,"height":60};
	actionActivity1.action = createVariableAction1;

	var annotation1 = microflows.Annotation.create(model);
	annotation1.relativeMiddlePoint = {"x":190,"y":20};
	annotation1.size = {"width":340,"height":70};
	annotation1.caption = "Parse Enum ReferenceType to a String";

	var microflowObjectCollection1 = microflows.MicroflowObjectCollection.create(model);
	microflowObjectCollection1.objects.push(startEvent1);
	microflowObjectCollection1.objects.push(endEvent1);
	microflowObjectCollection1.objects.push(referenceTypeEnum1);
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

	var stringType2 = datatypes.StringType.create(model);

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

	var mxObjectReferenceReferenceTypeToString1 = microflows.Microflow.createIn(unit);
	mxObjectReferenceReferenceTypeToString1.name = "MxObjectReferenceReferenceTypeToString";
	mxObjectReferenceReferenceTypeToString1.objectCollection = microflowObjectCollection1;   // Note: for this property a default value is defined.
	mxObjectReferenceReferenceTypeToString1.flows.push(sequenceFlow1);
	mxObjectReferenceReferenceTypeToString1.flows.push(sequenceFlow2);
	mxObjectReferenceReferenceTypeToString1.microflowReturnType = stringType2;
	mxObjectReferenceReferenceTypeToString1.concurrencyErrorMessage = text1;   // Note: for this property a default value is defined.

	sequenceFlow1.origin = startEvent1;
	sequenceFlow1.destination = actionActivity1;

	sequenceFlow2.origin = actionActivity1;
	sequenceFlow2.destination = endEvent1;

})