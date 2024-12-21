(function (unit, model) {

	/*
	 * JavaScript code generated by mendixmodelsdk.sdk.extras.JavaScriptSerializer
	 * from unit with id "8ffa7a68-cbea-44e9-9a0c-59be2e97e3ee" of type Microflows$Microflow
	 * in working copy "SoccerSquad"
	 * on 20-12-2024.
	 */

	var startEvent1 = microflows.StartEvent.create(model);
	startEvent1.relativeMiddlePoint = {"x":135,"y":225};
	startEvent1.size = {"width":20,"height":20};

	var endEvent1 = microflows.EndEvent.create(model);
	endEvent1.relativeMiddlePoint = {"x":1170,"y":225};
	endEvent1.size = {"width":20,"height":20};

	var deleteAction1 = microflows.DeleteAction.create(model);
	deleteAction1.deleteVariableName = "allObjTypes";
	deleteAction1.refreshInClient = true;

	var actionActivity1 = microflows.ActionActivity.create(model);
	actionActivity1.relativeMiddlePoint = {"x":380,"y":225};
	actionActivity1.size = {"width":100,"height":60};
	actionActivity1.action = deleteAction1;

	var constantRange1 = microflows.ConstantRange.create(model);

	var sortItemList1 = microflows.SortItemList.create(model);

	var databaseRetrieveSource1 = microflows.DatabaseRetrieveSource.create(model);
	databaseRetrieveSource1.entity = model.findEntityByQualifiedName("MxModelReflection.Microflows");
	databaseRetrieveSource1.range = constantRange1;   // Note: for this property a default value is defined.
	databaseRetrieveSource1.sortItemList = sortItemList1;   // Note: for this property a default value is defined.

	var retrieveAction1 = microflows.RetrieveAction.create(model);
	retrieveAction1.retrieveSource = databaseRetrieveSource1;   // Note: for this property a default value is defined.
	retrieveAction1.outputVariableName = "allMicroflows";

	var actionActivity2 = microflows.ActionActivity.create(model);
	actionActivity2.relativeMiddlePoint = {"x":555,"y":225};
	actionActivity2.size = {"width":120,"height":60};
	actionActivity2.action = retrieveAction1;

	var constantRange2 = microflows.ConstantRange.create(model);

	var sortItemList2 = microflows.SortItemList.create(model);

	var databaseRetrieveSource2 = microflows.DatabaseRetrieveSource.create(model);
	databaseRetrieveSource2.entity = model.findEntityByQualifiedName("MxModelReflection.MxObjectType");
	databaseRetrieveSource2.range = constantRange2;   // Note: for this property a default value is defined.
	databaseRetrieveSource2.sortItemList = sortItemList2;   // Note: for this property a default value is defined.

	var retrieveAction2 = microflows.RetrieveAction.create(model);
	retrieveAction2.retrieveSource = databaseRetrieveSource2;   // Note: for this property a default value is defined.
	retrieveAction2.outputVariableName = "allObjTypes";

	var actionActivity3 = microflows.ActionActivity.create(model);
	actionActivity3.relativeMiddlePoint = {"x":250,"y":225};
	actionActivity3.size = {"width":120,"height":60};
	actionActivity3.action = retrieveAction2;

	var deleteAction2 = microflows.DeleteAction.create(model);
	deleteAction2.deleteVariableName = "allMicroflows";
	deleteAction2.refreshInClient = true;

	var actionActivity4 = microflows.ActionActivity.create(model);
	actionActivity4.relativeMiddlePoint = {"x":690,"y":225};
	actionActivity4.size = {"width":110,"height":60};
	actionActivity4.action = deleteAction2;

	var constantRange3 = microflows.ConstantRange.create(model);

	var sortItemList3 = microflows.SortItemList.create(model);

	var databaseRetrieveSource3 = microflows.DatabaseRetrieveSource.create(model);
	databaseRetrieveSource3.entity = model.findEntityByQualifiedName("MxModelReflection.ValueType");
	databaseRetrieveSource3.range = constantRange3;   // Note: for this property a default value is defined.
	databaseRetrieveSource3.sortItemList = sortItemList3;   // Note: for this property a default value is defined.

	var retrieveAction3 = microflows.RetrieveAction.create(model);
	retrieveAction3.retrieveSource = databaseRetrieveSource3;   // Note: for this property a default value is defined.
	retrieveAction3.outputVariableName = "allValueTypes";

	var actionActivity5 = microflows.ActionActivity.create(model);
	actionActivity5.relativeMiddlePoint = {"x":910,"y":225};
	actionActivity5.size = {"width":130,"height":60};
	actionActivity5.action = retrieveAction3;

	var deleteAction3 = microflows.DeleteAction.create(model);
	deleteAction3.deleteVariableName = "allValueTypes";
	deleteAction3.refreshInClient = true;

	var actionActivity6 = microflows.ActionActivity.create(model);
	actionActivity6.relativeMiddlePoint = {"x":1055,"y":225};
	actionActivity6.size = {"width":120,"height":60};
	actionActivity6.action = deleteAction3;

	var microflowObjectCollection1 = microflows.MicroflowObjectCollection.create(model);
	microflowObjectCollection1.objects.push(startEvent1);
	microflowObjectCollection1.objects.push(endEvent1);
	microflowObjectCollection1.objects.push(actionActivity1);
	microflowObjectCollection1.objects.push(actionActivity2);
	microflowObjectCollection1.objects.push(actionActivity3);
	microflowObjectCollection1.objects.push(actionActivity4);
	microflowObjectCollection1.objects.push(actionActivity5);
	microflowObjectCollection1.objects.push(actionActivity6);

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
	sequenceFlow6.destinationBezierVector = {"width":-30,"height":0};
	sequenceFlow6.caseValue = noCase6;   // Note: for this property a default value is defined.

	var noCase7 = microflows.NoCase.create(model);

	var sequenceFlow7 = microflows.SequenceFlow.create(model);
	sequenceFlow7.originConnectionIndex = 1;
	sequenceFlow7.destinationConnectionIndex = 3;
	sequenceFlow7.originBezierVector = {"width":30,"height":0};
	sequenceFlow7.destinationBezierVector = {"width":-15,"height":0};
	sequenceFlow7.caseValue = noCase7;   // Note: for this property a default value is defined.

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

	var iVK_deleteAll1 = microflows.Microflow.createIn(unit);
	iVK_deleteAll1.name = "IVK_deleteAll";
	iVK_deleteAll1.excluded = true;
	iVK_deleteAll1.objectCollection = microflowObjectCollection1;   // Note: for this property a default value is defined.
	iVK_deleteAll1.flows.push(sequenceFlow1);
	iVK_deleteAll1.flows.push(sequenceFlow2);
	iVK_deleteAll1.flows.push(sequenceFlow3);
	iVK_deleteAll1.flows.push(sequenceFlow4);
	iVK_deleteAll1.flows.push(sequenceFlow5);
	iVK_deleteAll1.flows.push(sequenceFlow6);
	iVK_deleteAll1.flows.push(sequenceFlow7);
	iVK_deleteAll1.microflowReturnType = voidType1;
	iVK_deleteAll1.allowedModuleRoles.push(model.findModuleRoleByQualifiedName("MxModelReflection.ModelAdministrator"));
	iVK_deleteAll1.concurrencyErrorMessage = text1;   // Note: for this property a default value is defined.

	sequenceFlow1.origin = startEvent1;
	sequenceFlow1.destination = actionActivity3;

	sequenceFlow2.origin = actionActivity3;
	sequenceFlow2.destination = actionActivity1;

	sequenceFlow3.origin = actionActivity2;
	sequenceFlow3.destination = actionActivity4;

	sequenceFlow4.origin = actionActivity5;
	sequenceFlow4.destination = actionActivity6;

	sequenceFlow5.origin = actionActivity1;
	sequenceFlow5.destination = actionActivity2;

	sequenceFlow6.origin = actionActivity4;
	sequenceFlow6.destination = actionActivity5;

	sequenceFlow7.origin = actionActivity6;
	sequenceFlow7.destination = endEvent1;

})