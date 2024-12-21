import {
  IModel,
  domainmodels,
  microflows,
  pages,
  datatypes,
  security,
  texts,
  projects,
} from "mendixmodelsdk";
import IEntity = domainmodels.IEntity;
import IFolderBase = projects.IFolderBase;
import IModuleRole = security.IModuleRole;

interface ActionActivityCreateObject extends microflows.ActionActivity {

}

function foo(unit: IFolderBase, model: IModel) {
  /*
   * JavaScript code generated by mendixmodelsdk.sdk.extras.JavaScriptSerializer
   * from unit with id "0c4a8d0f-2768-4e64-9d3a-f48ea8f80371" of type Microflows$Microflow
   * in working copy "SoccerSquad"
   * on 20-12-2024.
   */

  const matchParam = createObjectParameter(
    "Match",
    "SoccerSquad.Match",
    model,
    1
  );

  const startEvent = createStartEvent();
  const endEvent = createEndEvent();
  const variableAction = createVariableAction();
  const objectVariableAction = createObjectAction();
  var pageSettings1 = pages.PageSettings.create(model);
  pageSettings1.page = model.findPageByQualifiedName("SoccerSquad.DateTimeTest_NewEdit");

  var showPageAction1 = microflows.ShowPageAction.create(model);
  showPageAction1.pageSettings = pageSettings1;   // Note: for this property a default value is defined.
  showPageAction1.passedObjectVariableName = "NewDateTimeTest";

  var actionActivity3 = microflows.ActionActivity.create(model);
  actionActivity3.relativeMiddlePoint = {"x": 585, "y": 200};
  actionActivity3.size = {"width": 120, "height": 60};
  actionActivity3.action = showPageAction1;

  var microflowObjectCollection1 = microflows.MicroflowObjectCollection.create(model);
  microflowObjectCollection1.objects.push(startEvent);
  microflowObjectCollection1.objects.push(endEvent);
  microflowObjectCollection1.objects.push(matchParam);
  microflowObjectCollection1.objects.push(variableAction);
  microflowObjectCollection1.objects.push(objectVariableAction);
  microflowObjectCollection1.objects.push(actionActivity3);

  var noCase1 = microflows.NoCase.create(model);

  var sequenceFlow1 = microflows.SequenceFlow.create(model);
  sequenceFlow1.originConnectionIndex = 1;
  sequenceFlow1.destinationConnectionIndex = 3;
  sequenceFlow1.originBezierVector = {"width": 0, "height": 0};
  sequenceFlow1.destinationBezierVector = {"width": -30, "height": 0};
  sequenceFlow1.caseValue = noCase1;   // Note: for this property a default value is defined.

  var noCase2 = microflows.NoCase.create(model);

  var sequenceFlow2 = microflows.SequenceFlow.create(model);
  sequenceFlow2.originConnectionIndex = 1;
  sequenceFlow2.destinationConnectionIndex = 3;
  sequenceFlow2.originBezierVector = {"width": 30, "height": 0};
  sequenceFlow2.destinationBezierVector = {"width": -30, "height": 0};
  sequenceFlow2.caseValue = noCase2;   // Note: for this property a default value is defined.

  var noCase3 = microflows.NoCase.create(model);

  var sequenceFlow3 = microflows.SequenceFlow.create(model);
  sequenceFlow3.originConnectionIndex = 1;
  sequenceFlow3.destinationConnectionIndex = 3;
  sequenceFlow3.originBezierVector = {"width": 30, "height": 0};
  sequenceFlow3.destinationBezierVector = {"width": -30, "height": 0};
  sequenceFlow3.caseValue = noCase3;   // Note: for this property a default value is defined.

  var noCase4 = microflows.NoCase.create(model);

  var sequenceFlow4 = microflows.SequenceFlow.create(model);
  sequenceFlow4.originConnectionIndex = 1;
  sequenceFlow4.destinationConnectionIndex = 3;
  sequenceFlow4.originBezierVector = {"width": 30, "height": 0};
  sequenceFlow4.destinationBezierVector = {"width": -15, "height": 0};
  sequenceFlow4.caseValue = noCase4;   // Note: for this property a default value is defined.

  var voidType1 = datatypes.VoidType.create(model);

  var translation1 = texts.Translation.create(model);
  translation1.languageCode = "en_US";

  var text1 = texts.Text.create(model);
  text1.translations.push(translation1);

  var aCT_Match_TestDates1 = microflows.Microflow.createIn(unit);
  aCT_Match_TestDates1.name = "ACT_Match_TestDates";
  aCT_Match_TestDates1.objectCollection = microflowObjectCollection1;   // Note: for this property a default value is defined.
  aCT_Match_TestDates1.flows.push(sequenceFlow1);
  aCT_Match_TestDates1.flows.push(sequenceFlow2);
  aCT_Match_TestDates1.flows.push(sequenceFlow3);
  aCT_Match_TestDates1.flows.push(sequenceFlow4);
  aCT_Match_TestDates1.microflowReturnType = voidType1;
  aCT_Match_TestDates1.allowedModuleRoles.push(model.findModuleRoleByQualifiedName("SoccerSquad.Administrator") as IModuleRole);
  aCT_Match_TestDates1.concurrencyErrorMessage = text1;   // Note: for this property a default value is defined.

  sequenceFlow1.origin = startEvent;
  sequenceFlow1.destination = variableAction;

  sequenceFlow2.origin = variableAction;
  sequenceFlow2.destination = objectVariableAction;

  sequenceFlow3.origin = variableAction;
  sequenceFlow3.destination = actionActivity3;

  sequenceFlow4.origin = actionActivity3;
  sequenceFlow4.destination = endEvent;

  function createObjectParameter(
    name: string,
    entityType: string,
    appModel: IModel,
    order: number,
  ) {
    const objectType = datatypes.ObjectType.create(model);
    objectType.entity = model.findEntityByQualifiedName(entityType) as IEntity;
    const param = microflows.MicroflowParameterObject.create(appModel);
    const x = order * 30;
    param.relativeMiddlePoint = {x, "y": 0}
    param.size = {"width": 30, "height": 30};
    param.name = name;
    param.variableType = objectType;   // Note: for this property a default value is defined.
    return param;
  }

  function createStartEvent(): microflows.StartEvent {
    const startEvent = microflows.StartEvent.create(model);
    startEvent.relativeMiddlePoint = {"x": 30, "y": 200};
    startEvent.size = {"width": 20, "height": 20};
    return startEvent;
  }

  function createEndEvent(): microflows.EndEvent {
    const endEvent = microflows.EndEvent.create(model);
    endEvent.relativeMiddlePoint = {"x": 765, "y": 200};
    endEvent.size = {"width": 20, "height": 20};
    return endEvent;
  }

  function createVariableAction(): microflows.ActionActivity {
    const createVariableAction1 = microflows.CreateVariableAction.create(model);
    createVariableAction1.variableName = "FormattedDates";
    createVariableAction1.variableType = datatypes.StringType.create(model);
    // Note: for this property a default value is defined.
    createVariableAction1.initialValue =
      `'FormatDateTime - Localized                formatDateTime($Match/StartDateTime, 'd MMM yyyy HH:mm Z')
    'FormatDateTime - NonLocalized         formatDateTime($Match/StartDateTimeNonLocalized, 'd MMM yyyy HH:mm Z')
    'FormatDateTimeUTC - Localized         formatDateTimeUTC($Match/StartDateTime, 'd MMM yyyy HH:mm Z')
    'FormatDateTimeUTC - NonLocalized  formatDateTimeUTC($Match/StartDateTimeNonLocalized, 'd MMM yyyy HH:mm Z')

    `;
    const actionActivity1 = microflows.ActionActivity.create(model);
    actionActivity1.relativeMiddlePoint = {"x": 170, "y": 200};
    actionActivity1.size = {"width": 120, "height": 60};
    actionActivity1.action = createVariableAction1;
    return actionActivity1;
  }

  function createObjectAction(): ActionActivityCreateObject {
    const memberChange1 = microflows.MemberChange.create(model);
    memberChange1.attribute = model.findAttributeByQualifiedName("SoccerSquad.DateTimeTest.Result");
    memberChange1.value = "$FormattedDates";
    const createObjectAction1 = microflows.CreateObjectAction.create(model);
    createObjectAction1.items.push(memberChange1);
    createObjectAction1.entity = model.findEntityByQualifiedName("SoccerSquad.DateTimeTest");
    createObjectAction1.outputVariableName = "NewDateTimeTest";
    const actionActivity2 = microflows.ActionActivity.create(model);
    actionActivity2.relativeMiddlePoint = {"x": 390, "y": 200};
    actionActivity2.size = {"width": 120, "height": 60};
    actionActivity2.action = createObjectAction1;
    return actionActivity2;
  }
}
