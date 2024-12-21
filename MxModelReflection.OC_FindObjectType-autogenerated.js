(function (unit, model) {

	/*
	 * JavaScript code generated by mendixmodelsdk.sdk.extras.JavaScriptSerializer
	 * from unit with id "9c01388c-750c-45c1-92ad-80a8a0275356" of type Microflows$Microflow
	 * in working copy "SoccerSquad"
	 * on 20-12-2024.
	 */

	var startEvent1 = microflows.StartEvent.create(model);
	startEvent1.relativeMiddlePoint = {"x":100,"y":200};
	startEvent1.size = {"width":20,"height":20};

	var endEvent1 = microflows.EndEvent.create(model);
	endEvent1.relativeMiddlePoint = {"x":580,"y":200};
	endEvent1.size = {"width":20,"height":20};

	var objectType1 = datatypes.ObjectType.create(model);
	objectType1.entity = model.findEntityByQualifiedName("MxModelReflection.DbSizeEstimate");

	var dbSizeEstimate1 = microflows.MicroflowParameterObject.create(model);
	dbSizeEstimate1.relativeMiddlePoint = {"x":100,"y":0};
	dbSizeEstimate1.size = {"width":30,"height":30};
	dbSizeEstimate1.name = "DbSizeEstimate";
	dbSizeEstimate1.variableType = objectType1;   // Note: for this property a default value is defined.

	var microflowCallParameterMapping1 = microflows.MicroflowCallParameterMapping.create(model);
	// Note: this is an unsupported internal property of the Model SDK which is subject to change.
	microflowCallParameterMapping1.__parameter.updateWithRawValue("MxModelReflection.FindObjectType.ObjectTypeSearchString");
	microflowCallParameterMapping1.argument = "$DbSizeEstimate/FindObjectType";

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

	var actionActivity1 = microflows.ActionActivity.create(model);
	actionActivity1.relativeMiddlePoint = {"x":230,"y":200};
	actionActivity1.size = {"width":140,"height":60};
	actionActivity1.action = microflowCallAction1;

	var memberChange1 = microflows.MemberChange.create(model);
	memberChange1.association = model.findAssociationBaseByQualifiedName("MxModelReflection.DbSizeEstimate_MxObjectType");
	memberChange1.value = "$MxObjectType";

	var memberChange2 = microflows.MemberChange.create(model);
	memberChange2.attribute = model.findAttributeByQualifiedName("MxModelReflection.DbSizeEstimate.FindObjectType");
	memberChange2.value = "if $MxObjectType != empty\nthen $MxObjectType/CompleteName\nelse $DbSizeEstimate/FindObjectType";

	var changeObjectAction1 = microflows.ChangeObjectAction.create(model);
	changeObjectAction1.items.push(memberChange1);
	changeObjectAction1.items.push(memberChange2);
	changeObjectAction1.refreshInClient = true;
	changeObjectAction1.changeVariableName = "DbSizeEstimate";

	var actionActivity2 = microflows.ActionActivity.create(model);
	actionActivity2.relativeMiddlePoint = {"x":430,"y":200};
	actionActivity2.size = {"width":190,"height":60};
	actionActivity2.action = changeObjectAction1;

	var microflowObjectCollection1 = microflows.MicroflowObjectCollection.create(model);
	microflowObjectCollection1.objects.push(startEvent1);
	microflowObjectCollection1.objects.push(endEvent1);
	microflowObjectCollection1.objects.push(dbSizeEstimate1);
	microflowObjectCollection1.objects.push(actionActivity1);
	microflowObjectCollection1.objects.push(actionActivity2);

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

	var oC_FindObjectType1 = microflows.Microflow.createIn(unit);
	oC_FindObjectType1.name = "OC_FindObjectType";
	oC_FindObjectType1.objectCollection = microflowObjectCollection1;   // Note: for this property a default value is defined.
	oC_FindObjectType1.flows.push(sequenceFlow1);
	oC_FindObjectType1.flows.push(sequenceFlow2);
	oC_FindObjectType1.flows.push(sequenceFlow3);
	oC_FindObjectType1.microflowReturnType = voidType1;
	oC_FindObjectType1.allowedModuleRoles.push(model.findModuleRoleByQualifiedName("MxModelReflection.ModelAdministrator"));
	oC_FindObjectType1.concurrencyErrorMessage = text1;   // Note: for this property a default value is defined.

	sequenceFlow1.origin = startEvent1;
	sequenceFlow1.destination = actionActivity1;

	sequenceFlow2.origin = actionActivity1;
	sequenceFlow2.destination = actionActivity2;

	sequenceFlow3.origin = actionActivity2;
	sequenceFlow3.destination = endEvent1;

})