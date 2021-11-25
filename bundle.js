(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Activity", {
  enumerable: true,
  get: function () {
    return _Activity.default;
  }
});
Object.defineProperty(exports, "Association", {
  enumerable: true,
  get: function () {
    return _Association.default;
  }
});
Object.defineProperty(exports, "BoundaryEvent", {
  enumerable: true,
  get: function () {
    return _BoundaryEvent.default;
  }
});
Object.defineProperty(exports, "BpmnError", {
  enumerable: true,
  get: function () {
    return _BpmnError.default;
  }
});
Object.defineProperty(exports, "CancelEventDefinition", {
  enumerable: true,
  get: function () {
    return _CancelEventDefinition.default;
  }
});
Object.defineProperty(exports, "CompensateEventDefinition", {
  enumerable: true,
  get: function () {
    return _CompensateEventDefinition.default;
  }
});
Object.defineProperty(exports, "ConditionalEventDefinition", {
  enumerable: true,
  get: function () {
    return _ConditionalEventDefinition.default;
  }
});
Object.defineProperty(exports, "Context", {
  enumerable: true,
  get: function () {
    return _Context.default;
  }
});
Object.defineProperty(exports, "DataObject", {
  enumerable: true,
  get: function () {
    return _EnvironmentDataObject.default;
  }
});
Object.defineProperty(exports, "DataStore", {
  enumerable: true,
  get: function () {
    return _EnvironmentDataStore.default;
  }
});
Object.defineProperty(exports, "DataStoreReference", {
  enumerable: true,
  get: function () {
    return _EnvironmentDataStoreReference.default;
  }
});
Object.defineProperty(exports, "Definition", {
  enumerable: true,
  get: function () {
    return _Definition.default;
  }
});
Object.defineProperty(exports, "Dummy", {
  enumerable: true,
  get: function () {
    return _Dummy.default;
  }
});
Object.defineProperty(exports, "TextAnnotation", {
  enumerable: true,
  get: function () {
    return _Dummy.default;
  }
});
Object.defineProperty(exports, "Group", {
  enumerable: true,
  get: function () {
    return _Dummy.default;
  }
});
Object.defineProperty(exports, "Category", {
  enumerable: true,
  get: function () {
    return _Dummy.default;
  }
});
Object.defineProperty(exports, "EndEvent", {
  enumerable: true,
  get: function () {
    return _EndEvent.default;
  }
});
Object.defineProperty(exports, "Environment", {
  enumerable: true,
  get: function () {
    return _Environment.default;
  }
});
Object.defineProperty(exports, "ErrorEventDefinition", {
  enumerable: true,
  get: function () {
    return _ErrorEventDefinition.default;
  }
});
Object.defineProperty(exports, "Escalation", {
  enumerable: true,
  get: function () {
    return _Escalation.default;
  }
});
Object.defineProperty(exports, "EscalationEventDefinition", {
  enumerable: true,
  get: function () {
    return _EscalationEventDefinition.default;
  }
});
Object.defineProperty(exports, "EventBasedGateway", {
  enumerable: true,
  get: function () {
    return _EventBasedGateway.default;
  }
});
Object.defineProperty(exports, "ExclusiveGateway", {
  enumerable: true,
  get: function () {
    return _ExclusiveGateway.default;
  }
});
Object.defineProperty(exports, "InclusiveGateway", {
  enumerable: true,
  get: function () {
    return _InclusiveGateway.default;
  }
});
Object.defineProperty(exports, "InputOutputSpecification", {
  enumerable: true,
  get: function () {
    return _InputOutputSpecification.default;
  }
});
Object.defineProperty(exports, "IntermediateCatchEvent", {
  enumerable: true,
  get: function () {
    return _IntermediateCatchEvent.default;
  }
});
Object.defineProperty(exports, "IntermediateThrowEvent", {
  enumerable: true,
  get: function () {
    return _IntermediateThrowEvent.default;
  }
});
Object.defineProperty(exports, "LinkEventDefinition", {
  enumerable: true,
  get: function () {
    return _LinkEventDefinition.default;
  }
});
Object.defineProperty(exports, "MultiInstanceLoopCharacteristics", {
  enumerable: true,
  get: function () {
    return _LoopCharacteristics.default;
  }
});
Object.defineProperty(exports, "Message", {
  enumerable: true,
  get: function () {
    return _Message.default;
  }
});
Object.defineProperty(exports, "MessageEventDefinition", {
  enumerable: true,
  get: function () {
    return _MessageEventDefinition.default;
  }
});
Object.defineProperty(exports, "MessageFlow", {
  enumerable: true,
  get: function () {
    return _MessageFlow.default;
  }
});
Object.defineProperty(exports, "ParallelGateway", {
  enumerable: true,
  get: function () {
    return _ParallelGateway.default;
  }
});
Object.defineProperty(exports, "Process", {
  enumerable: true,
  get: function () {
    return _Process.default;
  }
});
Object.defineProperty(exports, "Properties", {
  enumerable: true,
  get: function () {
    return _Properties.default;
  }
});
Object.defineProperty(exports, "ReceiveTask", {
  enumerable: true,
  get: function () {
    return _ReceiveTask.default;
  }
});
Object.defineProperty(exports, "ScriptTask", {
  enumerable: true,
  get: function () {
    return _ScriptTask.default;
  }
});
Object.defineProperty(exports, "SequenceFlow", {
  enumerable: true,
  get: function () {
    return _SequenceFlow.default;
  }
});
Object.defineProperty(exports, "ServiceImplementation", {
  enumerable: true,
  get: function () {
    return _ServiceImplementation.default;
  }
});
Object.defineProperty(exports, "SendTask", {
  enumerable: true,
  get: function () {
    return _ServiceTask.default;
  }
});
Object.defineProperty(exports, "BusinessRuleTask", {
  enumerable: true,
  get: function () {
    return _ServiceTask.default;
  }
});
Object.defineProperty(exports, "ServiceTask", {
  enumerable: true,
  get: function () {
    return _ServiceTask.default;
  }
});
Object.defineProperty(exports, "Signal", {
  enumerable: true,
  get: function () {
    return _Signal.default;
  }
});
Object.defineProperty(exports, "SignalEventDefinition", {
  enumerable: true,
  get: function () {
    return _SignalEventDefinition.default;
  }
});
Object.defineProperty(exports, "ManualTask", {
  enumerable: true,
  get: function () {
    return _SignalTask.default;
  }
});
Object.defineProperty(exports, "UserTask", {
  enumerable: true,
  get: function () {
    return _SignalTask.default;
  }
});
Object.defineProperty(exports, "SignalTask", {
  enumerable: true,
  get: function () {
    return _SignalTask.default;
  }
});
Object.defineProperty(exports, "StandardLoopCharacteristics", {
  enumerable: true,
  get: function () {
    return _StandardLoopCharacteristics.default;
  }
});
Object.defineProperty(exports, "StartEvent", {
  enumerable: true,
  get: function () {
    return _StartEvent.default;
  }
});
Object.defineProperty(exports, "SubProcess", {
  enumerable: true,
  get: function () {
    return _SubProcess.default;
  }
});
Object.defineProperty(exports, "Task", {
  enumerable: true,
  get: function () {
    return _Task.default;
  }
});
Object.defineProperty(exports, "TerminateEventDefinition", {
  enumerable: true,
  get: function () {
    return _TerminateEventDefinition.default;
  }
});
Object.defineProperty(exports, "TimerEventDefinition", {
  enumerable: true,
  get: function () {
    return _TimerEventDefinition.default;
  }
});
Object.defineProperty(exports, "Transaction", {
  enumerable: true,
  get: function () {
    return _Transaction.default;
  }
});

var _Activity = _interopRequireDefault(require("./src/activity/Activity"));

var _Association = _interopRequireDefault(require("./src/flows/Association"));

var _BoundaryEvent = _interopRequireDefault(require("./src/events/BoundaryEvent"));

var _BpmnError = _interopRequireDefault(require("./src/error/BpmnError"));

var _CancelEventDefinition = _interopRequireDefault(require("./src/eventDefinitions/CancelEventDefinition"));

var _CompensateEventDefinition = _interopRequireDefault(require("./src/eventDefinitions/CompensateEventDefinition"));

var _ConditionalEventDefinition = _interopRequireDefault(require("./src/eventDefinitions/ConditionalEventDefinition"));

var _Context = _interopRequireDefault(require("./src/Context"));

var _EnvironmentDataObject = _interopRequireDefault(require("./src/io/EnvironmentDataObject"));

var _EnvironmentDataStore = _interopRequireDefault(require("./src/io/EnvironmentDataStore"));

var _EnvironmentDataStoreReference = _interopRequireDefault(require("./src/io/EnvironmentDataStoreReference"));

var _Definition = _interopRequireDefault(require("./src/definition/Definition"));

var _Dummy = _interopRequireDefault(require("./src/activity/Dummy"));

var _EndEvent = _interopRequireDefault(require("./src/events/EndEvent"));

var _Environment = _interopRequireDefault(require("./src/Environment"));

var _ErrorEventDefinition = _interopRequireDefault(require("./src/eventDefinitions/ErrorEventDefinition"));

var _Escalation = _interopRequireDefault(require("./src/activity/Escalation"));

var _EscalationEventDefinition = _interopRequireDefault(require("./src/eventDefinitions/EscalationEventDefinition"));

var _EventBasedGateway = _interopRequireDefault(require("./src/gateways/EventBasedGateway"));

var _ExclusiveGateway = _interopRequireDefault(require("./src/gateways/ExclusiveGateway"));

var _InclusiveGateway = _interopRequireDefault(require("./src/gateways/InclusiveGateway"));

var _InputOutputSpecification = _interopRequireDefault(require("./src/io/InputOutputSpecification"));

var _IntermediateCatchEvent = _interopRequireDefault(require("./src/events/IntermediateCatchEvent"));

var _IntermediateThrowEvent = _interopRequireDefault(require("./src/events/IntermediateThrowEvent"));

var _LinkEventDefinition = _interopRequireDefault(require("./src/eventDefinitions/LinkEventDefinition"));

var _LoopCharacteristics = _interopRequireDefault(require("./src/tasks/LoopCharacteristics"));

var _Message = _interopRequireDefault(require("./src/activity/Message"));

var _MessageEventDefinition = _interopRequireDefault(require("./src/eventDefinitions/MessageEventDefinition"));

var _MessageFlow = _interopRequireDefault(require("./src/flows/MessageFlow"));

var _ParallelGateway = _interopRequireDefault(require("./src/gateways/ParallelGateway"));

var _Process = _interopRequireDefault(require("./src/process/Process"));

var _Properties = _interopRequireDefault(require("./src/io/Properties"));

var _ReceiveTask = _interopRequireDefault(require("./src/tasks/ReceiveTask"));

var _ScriptTask = _interopRequireDefault(require("./src/tasks/ScriptTask"));

var _SequenceFlow = _interopRequireDefault(require("./src/flows/SequenceFlow"));

var _ServiceImplementation = _interopRequireDefault(require("./src/tasks/ServiceImplementation"));

var _ServiceTask = _interopRequireDefault(require("./src/tasks/ServiceTask"));

var _Signal = _interopRequireDefault(require("./src/activity/Signal"));

var _SignalEventDefinition = _interopRequireDefault(require("./src/eventDefinitions/SignalEventDefinition"));

var _SignalTask = _interopRequireDefault(require("./src/tasks/SignalTask"));

var _StandardLoopCharacteristics = _interopRequireDefault(require("./src/tasks/StandardLoopCharacteristics"));

var _StartEvent = _interopRequireDefault(require("./src/events/StartEvent"));

var _SubProcess = _interopRequireDefault(require("./src/tasks/SubProcess"));

var _Task = _interopRequireDefault(require("./src/tasks/Task"));

var _TerminateEventDefinition = _interopRequireDefault(require("./src/eventDefinitions/TerminateEventDefinition"));

var _TimerEventDefinition = _interopRequireDefault(require("./src/eventDefinitions/TimerEventDefinition"));

var _Transaction = _interopRequireDefault(require("./src/tasks/Transaction"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
},{"./src/Context":3,"./src/Environment":4,"./src/activity/Activity":11,"./src/activity/Dummy":13,"./src/activity/Escalation":14,"./src/activity/Message":16,"./src/activity/Signal":17,"./src/definition/Definition":18,"./src/error/BpmnError":20,"./src/eventDefinitions/CancelEventDefinition":22,"./src/eventDefinitions/CompensateEventDefinition":23,"./src/eventDefinitions/ConditionalEventDefinition":24,"./src/eventDefinitions/ErrorEventDefinition":25,"./src/eventDefinitions/EscalationEventDefinition":26,"./src/eventDefinitions/LinkEventDefinition":28,"./src/eventDefinitions/MessageEventDefinition":29,"./src/eventDefinitions/SignalEventDefinition":30,"./src/eventDefinitions/TerminateEventDefinition":31,"./src/eventDefinitions/TimerEventDefinition":32,"./src/events/BoundaryEvent":33,"./src/events/EndEvent":34,"./src/events/IntermediateCatchEvent":35,"./src/events/IntermediateThrowEvent":36,"./src/events/StartEvent":37,"./src/flows/Association":38,"./src/flows/MessageFlow":39,"./src/flows/SequenceFlow":40,"./src/gateways/EventBasedGateway":41,"./src/gateways/ExclusiveGateway":42,"./src/gateways/InclusiveGateway":43,"./src/gateways/ParallelGateway":44,"./src/io/EnvironmentDataObject":47,"./src/io/EnvironmentDataStore":48,"./src/io/EnvironmentDataStoreReference":49,"./src/io/InputOutputSpecification":50,"./src/io/Properties":51,"./src/process/Process":53,"./src/tasks/LoopCharacteristics":56,"./src/tasks/ReceiveTask":57,"./src/tasks/ScriptTask":58,"./src/tasks/ServiceImplementation":59,"./src/tasks/ServiceTask":60,"./src/tasks/SignalTask":61,"./src/tasks/StandardLoopCharacteristics":62,"./src/tasks/SubProcess":63,"./src/tasks/Task":64,"./src/tasks/Transaction":65}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ActivityApi = ActivityApi;
exports.DefinitionApi = DefinitionApi;
exports.ProcessApi = ProcessApi;
exports.FlowApi = FlowApi;
exports.Api = Api;

var _messageHelper = require("./messageHelper");

var _shared = require("./shared");

function ActivityApi(broker, apiMessage, environment) {
  return Api('activity', broker, apiMessage, environment);
}

function DefinitionApi(broker, apiMessage, environment) {
  return Api('definition', broker, apiMessage, environment);
}

function ProcessApi(broker, apiMessage, environment) {
  return Api('process', broker, apiMessage, environment);
}

function FlowApi(broker, apiMessage, environment) {
  return Api('flow', broker, apiMessage, environment);
}

function Api(pfx, broker, sourceMessage, environment) {
  if (!sourceMessage) throw new Error('Api requires message');
  const apiMessage = (0, _messageHelper.cloneMessage)(sourceMessage);
  const apiContent = apiMessage.content;
  const {
    id,
    type,
    name
  } = apiContent;
  const executionId = apiContent.executionId;
  const owner = broker.owner;
  environment = environment || broker.owner.environment;
  return {
    id,
    type,
    name,
    executionId,
    environment,
    fields: apiMessage.fields,
    content: apiContent,
    messageProperties: apiMessage.properties,

    get owner() {
      return owner;
    },

    cancel(message, options) {
      sendApiMessage('cancel', {
        message
      }, options);
    },

    discard() {
      sendApiMessage('discard');
    },

    signal(message, options) {
      sendApiMessage('signal', {
        message
      }, options);
    },

    stop() {
      sendApiMessage('stop');
    },

    resolveExpression(expression) {
      return environment.resolveExpression(expression, apiMessage, broker.owner);
    },

    sendApiMessage,
    createMessage,
    getPostponed
  };

  function sendApiMessage(action, content, options = {}) {
    if (!options.correlationId) options = { ...options,
      correlationId: (0, _shared.getUniqueId)(`${id || pfx}_signal`)
    };
    let key = `${pfx}.${action}`;
    if (executionId) key += `.${executionId}`;
    broker.publish('api', key, createMessage(content), { ...options,
      type: action
    });
  }

  function getPostponed(...args) {
    if (owner.getPostponed) return owner.getPostponed(...args);
    if (owner.isSubProcess && owner.execution) return owner.execution.getPostponed(...args);
    return [];
  }

  function createMessage(content = {}) {
    return { ...apiContent,
      ...content
    };
  }
}
},{"./messageHelper":52,"./shared":55}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Context;

var _Environment = _interopRequireDefault(require("./Environment"));

var _ExtensionsMapper = _interopRequireDefault(require("./ExtensionsMapper"));

var _shared = require("./shared");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Context(definitionContext, environment) {
  environment = environment ? environment.clone() : (0, _Environment.default)();
  return ContextInstance(definitionContext, environment);
}

function ContextInstance(definitionContext, environment) {
  const {
    id = 'Def',
    name,
    type = 'context'
  } = definitionContext;
  const sid = (0, _shared.getUniqueId)(id);
  const activityRefs = {},
        dataObjectRefs = {},
        dataStoreRefs = {},
        messageFlows = [],
        processes = [],
        processRefs = {},
        sequenceFlowRefs = {},
        sequenceFlows = [],
        associationRefs = [];
  const context = {
    id,
    name,
    type,
    sid,
    definitionContext,
    environment,
    clone,
    getActivities,
    getActivityById,
    getAssociations,
    getExecutableProcesses,
    getDataObjectById,
    getDataStoreById,
    getInboundAssociations,
    getInboundSequenceFlows,
    getMessageFlows,
    getOutboundSequenceFlows,
    getOutboundAssociations,
    getProcessById,
    getProcesses,
    getSequenceFlowById,
    getSequenceFlows,
    getStartActivities,
    loadExtensions
  };
  const extensionsMapper = (0, _ExtensionsMapper.default)(context);
  return context;

  function getActivityById(activityId) {
    const activityInstance = activityRefs[activityId];
    if (activityInstance) return activityInstance;
    const activity = definitionContext.getActivityById(activityId);
    if (!activity) return null;
    return upsertActivity(activity);
  }

  function upsertActivity(activityDef) {
    let activityInstance = activityRefs[activityDef.id];
    if (activityInstance) return activityInstance;
    activityInstance = activityRefs[activityDef.id] = activityDef.Behaviour(activityDef, context);
    return activityInstance;
  }

  function getSequenceFlowById(sequenceFlowId) {
    const flowInstance = sequenceFlowRefs[sequenceFlowId];
    if (flowInstance) return flowInstance;
    const flowDef = definitionContext.getSequenceFlowById(sequenceFlowId);
    if (!flowDef) return null;
    return upsertSequenceFlow(flowDef);
  }

  function getInboundSequenceFlows(activityId) {
    return (definitionContext.getInboundSequenceFlows(activityId) || []).map(flow => upsertSequenceFlow(flow));
  }

  function getOutboundSequenceFlows(activityId) {
    return (definitionContext.getOutboundSequenceFlows(activityId) || []).map(flow => upsertSequenceFlow(flow));
  }

  function getInboundAssociations(activityId) {
    return (definitionContext.getInboundAssociations(activityId) || []).map(association => upsertAssociation(association));
  }

  function getOutboundAssociations(activityId) {
    return (definitionContext.getOutboundAssociations(activityId) || []).map(association => upsertAssociation(association));
  }

  function getActivities(scopeId) {
    return (definitionContext.getActivities(scopeId) || []).map(activityDef => upsertActivity(activityDef));
  }

  function getSequenceFlows(scopeId) {
    return (definitionContext.getSequenceFlows(scopeId) || []).map(flow => upsertSequenceFlow(flow));
  }

  function upsertSequenceFlow(flowDefinition) {
    let flowInstance = sequenceFlowRefs[flowDefinition.id];
    if (flowInstance) return flowInstance;
    flowInstance = sequenceFlowRefs[flowDefinition.id] = flowDefinition.Behaviour(flowDefinition, context);
    sequenceFlows.push(flowInstance);
    return flowInstance;
  }

  function getAssociations(scopeId) {
    return (definitionContext.getAssociations(scopeId) || []).map(association => upsertAssociation(association));
  }

  function upsertAssociation(associationDefinition) {
    let instance = associationRefs[associationDefinition.id];
    if (instance) return instance;
    instance = associationRefs[associationDefinition.id] = associationDefinition.Behaviour(associationDefinition, context);
    return instance;
  }

  function clone(newEnvironment) {
    return ContextInstance(definitionContext, newEnvironment || environment);
  }

  function getProcessById(processId) {
    let processInstance = processRefs[processId];
    if (processInstance) return processInstance;
    const processDefinition = definitionContext.getProcessById(processId);
    if (!processDefinition) return null;
    processInstance = processRefs[processId] = processDefinition.Behaviour(processDefinition, context);
    processes.push(processInstance);
    return processInstance;
  }

  function getProcesses() {
    return definitionContext.getProcesses().map(({
      id: processId
    }) => getProcessById(processId));
  }

  function getExecutableProcesses() {
    return definitionContext.getExecutableProcesses().map(({
      id: processId
    }) => getProcessById(processId));
  }

  function getMessageFlows(sourceId) {
    if (!messageFlows.length) {
      const flows = definitionContext.getMessageFlows() || [];
      messageFlows.push(...flows.map(flow => flow.Behaviour(flow, context)));
    }

    return messageFlows.filter(flow => flow.source.processId === sourceId);
  }

  function getDataObjectById(referenceId) {
    let dataObject;
    if (dataObject = dataObjectRefs[referenceId]) return dataObject;
    const dataObjectDef = definitionContext.getDataObjectById(referenceId);
    if (!dataObjectDef) return;
    dataObject = dataObjectRefs[dataObjectDef.id] = dataObjectDef.Behaviour(dataObjectDef, context);
    return dataObject;
  }

  function getDataStoreById(referenceId) {
    let dataStore;
    if (dataStore = dataStoreRefs[referenceId]) return dataStore;
    const dataStoreDef = definitionContext.getDataStoreById(referenceId) || definitionContext.getDataStoreReferenceById(referenceId);
    if (!dataStoreDef) return;
    dataStore = dataStoreRefs[dataStoreDef.id] = dataStoreDef.Behaviour(dataStoreDef, context);
    return dataStore;
  }

  function getStartActivities(filterOptions, scopeId) {
    const {
      referenceId,
      referenceType = 'unknown'
    } = filterOptions || {};
    return getActivities().filter(activity => {
      if (!activity.isStart) return false;
      if (scopeId && activity.parent.id !== scopeId) return false;
      if (!filterOptions) return true;
      if (!activity.behaviour.eventDefinitions && !activity.behaviour.eventDefinitions) return false;
      return activity.eventDefinitions.some(ed => {
        return ed.reference && ed.reference.id === referenceId && ed.reference.referenceType === referenceType;
      });
    });
  }

  function loadExtensions(activity) {
    return extensionsMapper.get(activity);
  }
}
},{"./Environment":4,"./ExtensionsMapper":7,"./shared":55}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Environment;

var _Expressions = _interopRequireDefault(require("./Expressions"));

var _Scripts = require("./Scripts");

var _Timers = require("./Timers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const defaultOptions = ['extensions', 'output', 'services', 'scripts', 'settings', 'variables', 'Logger'];

function Environment(options = {}) {
  const initialOptions = validateOptions(options);
  let variables = options.variables || {};
  const settings = { ...options.settings
  };
  const output = options.output || {};
  const services = options.services || {};
  const scripts = options.scripts || (0, _Scripts.Scripts)();
  const timers = options.timers || (0, _Timers.Timers)();
  const expressions = options.expressions || (0, _Expressions.default)();
  const Logger = options.Logger || DummyLogger;
  const extensions = options.extensions;
  const environmentApi = {
    options: initialOptions,
    expressions,
    extensions,
    output,
    scripts,
    services,
    settings,
    timers,

    get variables() {
      return variables;
    },

    addService,
    assignVariables,
    clone,
    getScript,
    getServiceByName,
    getState,
    registerScript,
    resolveExpression,
    recover,
    Logger
  };
  return environmentApi;

  function getState() {
    return {
      settings: { ...settings
      },
      variables: { ...variables
      },
      output: { ...output
      }
    };
  }

  function recover(state) {
    if (!state) return environmentApi;
    const recoverOptions = validateOptions(state);
    Object.assign(options, recoverOptions);
    if (state.settings) Object.assign(settings, state.settings);
    if (state.variables) Object.assign(variables, state.variables);
    if (state.output) Object.assign(output, state.output);
    return environmentApi;
  }

  function clone(overrideOptions = {}) {
    const newOptions = {
      settings: { ...settings
      },
      variables: { ...variables
      },
      output: { ...output
      },
      Logger,
      extensions,
      scripts,
      timers,
      expressions,
      ...initialOptions,
      ...overrideOptions,
      services
    };
    if (overrideOptions.services) newOptions.services = { ...services,
      ...overrideOptions.services
    };
    return Environment(newOptions);
  }

  function assignVariables(newVars) {
    if (!newVars || typeof newVars !== 'object') return;
    variables = { ...variables,
      ...newVars
    };
  }

  function getScript(...args) {
    return scripts.getScript(...args);
  }

  function registerScript(...args) {
    return scripts.register(...args);
  }

  function getServiceByName(serviceName) {
    return services[serviceName];
  }

  function resolveExpression(expression, message = {}, expressionFnContext) {
    const from = {
      environment: environmentApi,
      ...message
    };
    return expressions.resolveExpression(expression, from, expressionFnContext);
  }

  function addService(name, fn) {
    services[name] = fn;
  }
}

function validateOptions(input) {
  const options = {};

  for (const key in input) {
    if (defaultOptions.indexOf(key) === -1) {
      options[key] = input[key];
    }
  }

  if (input.timers) {
    if (typeof input.timers.register !== 'function') throw new Error('timers.register is not a function');
    if (typeof input.timers.setTimeout !== 'function') throw new Error('timers.setTimeout is not a function');
    if (typeof input.timers.clearTimeout !== 'function') throw new Error('timers.clearTimeout is not a function');
  }

  if (input.scripts) {
    if (typeof input.scripts.register !== 'function') throw new Error('scripts.register is not a function');
    if (typeof input.scripts.getScript !== 'function') throw new Error('scripts.getScript is not a function');
  }

  if (input.extensions) {
    if (typeof input.extensions !== 'object') throw new Error('extensions is not an object');

    for (const key in input.extensions) {
      if (typeof input.extensions[key] !== 'function') throw new Error(`extensions[${key}] is not a function`);
    }
  }

  return options;
}

function DummyLogger() {
  return {
    debug,
    error,
    warn
  };

  function debug() {}

  function error() {}

  function warn() {}
}
},{"./Expressions":6,"./Scripts":9,"./Timers":10}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ActivityBroker = ActivityBroker;
exports.DefinitionBroker = DefinitionBroker;
exports.MessageFlowBroker = MessageFlowBroker;
exports.ProcessBroker = ProcessBroker;
exports.EventBroker = EventBroker;

var _smqp = require("smqp");

var _Errors = require("./error/Errors");

function ActivityBroker(activity) {
  const executionBroker = ExecutionBroker(activity, 'activity');
  return executionBroker;
}

function ProcessBroker(owner) {
  return ExecutionBroker(owner, 'process');
}

function DefinitionBroker(owner, onBrokerReturn) {
  return ExecutionBroker(owner, 'definition', onBrokerReturn);
}

function MessageFlowBroker(owner) {
  const eventBroker = EventBroker(owner, {
    prefix: 'messageflow',
    autoDelete: false,
    durable: false
  });
  const broker = eventBroker.broker;
  broker.assertExchange('message', 'topic', {
    durable: true,
    autoDelete: false
  });
  broker.assertQueue('message-q', {
    durable: true,
    autoDelete: false
  });
  broker.bindQueue('message-q', 'message', 'message.#');
  return eventBroker;
}

function ExecutionBroker(brokerOwner, prefix, onBrokerReturn) {
  const eventBroker = EventBroker(brokerOwner, {
    prefix,
    autoDelete: false,
    durable: false
  }, onBrokerReturn);
  const broker = eventBroker.broker;
  broker.assertExchange('api', 'topic', {
    autoDelete: false,
    durable: false
  });
  broker.assertExchange('run', 'topic', {
    autoDelete: false
  });
  broker.assertExchange('format', 'topic', {
    autoDelete: false
  });
  broker.assertExchange('execution', 'topic', {
    autoDelete: false
  });
  const runQ = broker.assertQueue('run-q', {
    durable: true,
    autoDelete: false
  });
  const formatRunQ = broker.assertQueue('format-run-q', {
    durable: true,
    autoDelete: false
  });
  const executionQ = broker.assertQueue('execution-q', {
    durable: true,
    autoDelete: false
  });
  broker.bindQueue(runQ.name, 'run', 'run.#');
  broker.bindQueue(formatRunQ.name, 'format', 'run.#');
  broker.bindQueue(executionQ.name, 'execution', 'execution.#');
  return eventBroker;
}

function EventBroker(brokerOwner, options, onBrokerReturn) {
  const broker = (0, _smqp.Broker)(brokerOwner);
  const pfx = options.prefix;
  broker.assertExchange('event', 'topic', options);
  broker.on('return', onBrokerReturn || onBrokerReturnFn);
  return {
    eventPrefix: pfx,
    broker,
    on,
    once,
    waitFor,
    emit,
    emitFatal
  };

  function on(eventName, callback, eventOptions = {
    once: false
  }) {
    const key = getEventRoutingKey(eventName);
    if (eventOptions.once) return broker.subscribeOnce('event', key, eventCallback, eventOptions);
    return broker.subscribeTmp('event', key, eventCallback, { ...eventOptions,
      noAck: true
    });

    function eventCallback(routingKey, message, owner) {
      if (eventName === 'error') return callback((0, _Errors.makeErrorFromMessage)(message));
      callback(owner.getApi(message));
    }
  }

  function once(eventName, callback, eventOptions = {}) {
    return on(eventName, callback, { ...eventOptions,
      once: true
    });
  }

  function waitFor(eventName, onMessage) {
    const key = getEventRoutingKey(eventName);
    return new Promise((resolve, reject) => {
      const consumers = [broker.subscribeTmp('event', key, eventCallback, {
        noAck: true
      }), broker.subscribeTmp('event', '*.error', errorCallback, {
        noAck: true
      })];

      function eventCallback(routingKey, message, owner) {
        if (onMessage && !onMessage(routingKey, message, owner)) return;
        unsubscribe();
        return resolve(owner.getApi(message));
      }

      function errorCallback(routingKey, message, owner) {
        if (!message.properties.mandatory) return;
        unsubscribe();
        return reject((0, _Errors.makeErrorFromMessage)(message, owner));
      }

      function unsubscribe() {
        consumers.forEach(consumer => consumer.cancel());
      }
    });
  }

  function onBrokerReturnFn(message) {
    if (message.properties.type === 'error') {
      const err = (0, _Errors.makeErrorFromMessage)(message);
      throw err;
    }
  }

  function getEventRoutingKey(eventName) {
    if (eventName.indexOf('.') > -1) return eventName;

    switch (eventName) {
      case 'wait':
        {
          return `activity.${eventName}`;
        }

      default:
        {
          return `${pfx}.${eventName}`;
        }
    }
  }

  function emit(eventName, content = {}, props = {}) {
    broker.publish('event', `${pfx}.${eventName}`, { ...content
    }, {
      type: eventName,
      ...props
    });
  }

  function emitFatal(error, content = {}) {
    emit('error', { ...content,
      error
    }, {
      mandatory: true
    });
  }
}
},{"./error/Errors":21,"smqp":85}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Expressions;

var _getPropertyValue = _interopRequireDefault(require("./getPropertyValue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const isExpressionPattern = /^\${(.+?)}$/;
const expressionPattern = /\${(.+?)}/;

function Expressions() {
  return {
    resolveExpression,
    isExpression,
    hasExpression
  };
}

function resolveExpression(templatedString, context, expressionFnContext) {
  let result = templatedString;

  while (expressionPattern.test(result)) {
    const expressionMatch = result.match(expressionPattern);
    const innerProperty = expressionMatch[1];

    if (innerProperty === 'true') {
      return true;
    } else if (innerProperty === 'false') {
      return false;
    } else if (innerProperty === 'null') {
      return null;
    } else {
      const n = Number(innerProperty);
      if (!isNaN(n)) return n;
    }

    const contextValue = (0, _getPropertyValue.default)(context, innerProperty, expressionFnContext);

    if (expressionMatch.input === expressionMatch[0]) {
      return contextValue;
    }

    result = result.replace(expressionMatch[0], contextValue === undefined ? '' : contextValue);
  }

  return result;
}

function isExpression(text) {
  if (!text) return false;
  return isExpressionPattern.test(text);
}

function hasExpression(text) {
  if (!text) return false;
  return expressionPattern.test(text);
}
},{"./getPropertyValue":45}],7:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ExtensionsMapper;

function ExtensionsMapper(context) {
  const {
    extensions: envExtensions
  } = context.environment;
  const extensions = getExtensions();
  return {
    get
  };

  function get(activity) {
    const activityExtensions = extensions.reduce(applyExtension, []);
    return {
      activate,
      deactivate
    };

    function applyExtension(result, Extension) {
      const extension = Extension(activity, context);
      if (extension) result.push(extension);
      return result;
    }

    function activate(message) {
      activityExtensions.forEach(extension => extension.activate(message));
    }

    function deactivate(message) {
      activityExtensions.forEach(extension => extension.deactivate(message));
    }
  }

  function getExtensions() {
    const result = [];
    if (!envExtensions) return result;

    for (const key in envExtensions) {
      const extension = envExtensions[key];

      if (extension) {
        result.push(extension);
      }
    }

    return result;
  }
}
},{}],8:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Formatter = Formatter;

var _messageHelper = require("./messageHelper");

var _shared = require("./shared");

var _Errors = require("./error/Errors");

var _smqp = require("smqp");

function Formatter(element, formatQ) {
  const {
    id,
    broker,
    logger
  } = element;
  return function formatRunMessage(runMessage, callback) {
    const startFormatMsg = formatQ.get();
    if (!startFormatMsg) return callback(null, runMessage.content, false);
    const pendingFormats = [];
    const {
      fields,
      content
    } = runMessage;
    const fundamentals = {
      id: content.id,
      type: content.type,
      parent: (0, _messageHelper.cloneParent)(content.parent),
      attachedTo: content.attachedTo,
      executionId: content.executionId,
      isSubProcess: content.isSubProcess,
      isMultiInstance: content.isMultiInstance
    };

    if (content.inbound) {
      fundamentals.inbound = content.inbound.slice();
    }

    if (content.outbound) {
      fundamentals.outbound = content.outbound.slice();
    }

    let formattingError;
    let formattedContent = (0, _messageHelper.cloneContent)(content);
    const depleted = formatQ.on('depleted', () => {
      if (pendingFormats.length) return;
      depleted.cancel();
      logger.debug(`<${id}> completed formatting ${fields.routingKey}`);
      broker.cancel('_format-consumer');
      if (formattingError) return callback(formattingError);
      return callback(null, (0, _shared.filterUndefined)(formattedContent), true);
    });
    startFormatMsg.nack(false, true);
    formatQ.assertConsumer(onFormatMessage, {
      consumerTag: '_format-consumer',
      prefetch: 100
    });

    function onFormatMessage(routingKey, message) {
      const {
        endRoutingKey,
        error
      } = message.content || {};

      if (endRoutingKey) {
        pendingFormats.push(message);
        return logger.debug(`<${id}> start formatting ${fields.routingKey} message content with formatter ${routingKey}`);
      }

      const {
        isError,
        message: formatStart
      } = popFormattingStart(routingKey);
      logger.debug(`<${id}> format ${fields.routingKey} message content with formatter ${routingKey}`);
      formattedContent = { ...formattedContent,
        ...message.content,
        ...fundamentals
      };
      message.ack();

      if (formatStart) {
        if (isError) {
          const errMessage = error && error.message || 'formatting failed';
          logger.debug(`<${id}> formatting of ${fields.routingKey} failed with ${routingKey}: ${errMessage}`);
          formattingError = new _Errors.ActivityError(errMessage, (0, _messageHelper.cloneMessage)(runMessage, formattedContent), error);
          pendingFormats.splice(0).forEach(({
            nack
          }) => nack(false, false));
        }

        formatStart.ack(isError);
      }
    }

    function popFormattingStart(routingKey) {
      for (let i = 0; i < pendingFormats.length; i++) {
        const pendingFormat = pendingFormats[i];
        const {
          endRoutingKey,
          errorRoutingKey = '#.error'
        } = pendingFormat.content;

        if ((0, _smqp.getRoutingKeyPattern)(endRoutingKey).test(routingKey)) {
          logger.debug(`<${id}> completed formatting ${fields.routingKey} message content with formatter ${routingKey}`);
          pendingFormats.splice(i, 1);
          return {
            message: pendingFormat
          };
        } else if ((0, _smqp.getRoutingKeyPattern)(errorRoutingKey).test(routingKey)) {
          pendingFormats.splice(i, 1);
          return {
            isError: true,
            message: pendingFormat
          };
        }
      }

      return {};
    }
  };
}
},{"./error/Errors":21,"./messageHelper":52,"./shared":55,"smqp":85}],9:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Scripts = Scripts;

function Scripts() {
  return {
    getScript,
    register
  };

  function getScript() {}

  function register() {}
}
},{}],10:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Timers = Timers;

function Timers(options) {
  let count = 0;
  const executing = [];
  options = {
    setTimeout,
    clearTimeout,
    ...options
  };
  const timersApi = {
    get executing() {
      return executing.slice();
    },

    register,
    setTimeout: wrappedSetTimeout,
    clearTimeout: wrappedClearTimeout
  };
  return timersApi;

  function register(owner) {
    return {
      setTimeout: registerTimeout(owner),
      clearTimeout: timersApi.clearTimeout
    };
  }

  function registerTimeout(owner) {
    return function registeredSetTimeout(...args) {
      return timersApi.setTimeout.call(owner, ...args);
    };
  }

  function wrappedSetTimeout(callback, delay, ...args) {
    const ref = {
      timerId: `timer_${count++}`,
      callback,
      delay,
      args,
      owner: this
    };
    executing.push(ref);
    ref.timerRef = options.setTimeout.call(null, onTimeout, delay, ...args);
    return ref;

    function onTimeout(...rargs) {
      const idx = executing.indexOf(ref);
      if (idx > -1) executing.splice(idx, 1);
      return callback(...rargs);
    }
  }

  function wrappedClearTimeout(ref) {
    const idx = executing.indexOf(ref);

    if (idx > -1) {
      executing.splice(idx, 1);
      return options.clearTimeout.call(null, ref.timerRef);
    }

    return options.clearTimeout.call(null, ref);
  }
}
},{}],11:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Activity;

var _ActivityExecution = _interopRequireDefault(require("./ActivityExecution"));

var _BpmnIO = _interopRequireDefault(require("../io/BpmnIO"));

var _shared = require("../shared");

var _Api = require("../Api");

var _EventBroker = require("../EventBroker");

var _MessageFormatter = require("../MessageFormatter");

var _messageHelper = require("../messageHelper");

var _Errors = require("../error/Errors");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Activity(Behaviour, activityDef, context) {
  const {
    id,
    type = 'activity',
    name,
    parent: originalParent = {},
    behaviour = {},
    isParallelGateway,
    isSubProcess,
    triggeredByEvent,
    isThrowing,
    isTransaction
  } = activityDef;
  const isForCompensation = behaviour.isForCompensation;
  const parent = (0, _messageHelper.cloneParent)(originalParent);
  const {
    environment,
    getInboundSequenceFlows,
    getOutboundSequenceFlows,
    getInboundAssociations
  } = context;
  const logger = environment.Logger(type.toLowerCase());
  const {
    step
  } = environment.settings;
  const {
    attachedTo: attachedToRef,
    eventDefinitions
  } = behaviour;
  let attachedToActivity, attachedTo;

  if (attachedToRef) {
    attachedTo = attachedToRef.id;
    attachedToActivity = context.getActivityById(attachedToRef.id);
  }

  const inboundSequenceFlows = getInboundSequenceFlows(id) || [];
  const outboundSequenceFlows = getOutboundSequenceFlows(id) || [];
  const inboundAssociations = getInboundAssociations(id) || [];
  const isStart = inboundSequenceFlows.length === 0 && !attachedTo && !triggeredByEvent && !isForCompensation;
  const isEnd = outboundSequenceFlows.length === 0;
  const isParallelJoin = inboundSequenceFlows.length > 1 && isParallelGateway;
  const isMultiInstance = !!behaviour.loopCharacteristics;
  let execution,
      initExecutionId,
      executionId,
      stateMessage,
      status,
      stopped = false,
      executeMessage,
      consumingRunQ;
  const inboundTriggers = attachedToActivity ? [attachedToActivity] : inboundSequenceFlows.slice();
  const inboundJoinFlows = [];
  let counters = {
    taken: 0,
    discarded: 0
  };
  const activityApi = {
    id,
    type,
    name,
    isEnd,
    isStart,
    isSubProcess,
    isThrowing,
    isForCompensation,
    triggeredByEvent,
    parent: (0, _messageHelper.cloneParent)(parent),
    behaviour: { ...behaviour,
      eventDefinitions
    },
    attachedTo: attachedToActivity,
    environment,
    inbound: inboundSequenceFlows,
    outbound: outboundSequenceFlows,

    get counters() {
      return { ...counters
      };
    },

    get executionId() {
      return executionId;
    },

    get status() {
      return status;
    },

    get stopped() {
      return stopped;
    },

    get isRunning() {
      if (!consumingRunQ) return false;
      return !!status;
    },

    Behaviour,
    activate,
    deactivate,
    evaluateOutbound,
    logger,
    discard,
    getApi,
    getActivityById,
    getState,
    init,
    recover,
    resume,
    run,
    shake,
    stop,
    next: step && next
  };
  const {
    broker,
    on,
    once,
    waitFor,
    emitFatal
  } = (0, _EventBroker.ActivityBroker)(activityApi);
  activityApi.on = on;
  activityApi.once = once;
  activityApi.waitFor = waitFor;
  activityApi.emitFatal = emitFatal;
  const runQ = broker.getQueue('run-q');
  const executionQ = broker.getQueue('execution-q');
  const inboundQ = broker.assertQueue('inbound-q', {
    durable: true,
    autoDelete: false
  });
  const formatRunQ = broker.getQueue('format-run-q');
  const formatter = (0, _MessageFormatter.Formatter)({
    id,
    broker,
    logger
  }, formatRunQ);

  if (isForCompensation) {
    inboundAssociations.forEach(trigger => {
      trigger.broker.subscribeTmp('event', '#', onInboundEvent, {
        noAck: true,
        consumerTag: `_inbound-${id}`
      });
    });
  } else {
    inboundTriggers.forEach(trigger => {
      if (trigger.isSequenceFlow) trigger.broker.subscribeTmp('event', 'flow.#', onInboundEvent, {
        noAck: true,
        consumerTag: `_inbound-${id}`
      });else trigger.broker.subscribeTmp('event', 'activity.#', onInboundEvent, {
        noAck: true,
        consumerTag: `_inbound-${id}`
      });
    });
  }

  Object.defineProperty(activityApi, 'broker', {
    enumerable: true,
    get: () => broker
  });
  Object.defineProperty(activityApi, 'execution', {
    enumerable: true,
    get: () => execution
  });
  const bpmnIo = (0, _BpmnIO.default)(activityApi, context);
  const loaedEventDefinitions = eventDefinitions && eventDefinitions.map(ed => ed.Behaviour(activityApi, ed, context));
  Object.defineProperty(activityApi, 'eventDefinitions', {
    enumerable: true,
    get: () => loaedEventDefinitions
  });
  const extensions = context.loadExtensions(activityApi);
  Object.defineProperty(activityApi, 'extensions', {
    enumerable: true,
    get: () => extensions
  });
  return activityApi;

  function init(initContent) {
    initExecutionId = initExecutionId || (0, _shared.getUniqueId)(id);
    logger.debug(`<${id}> initialized with executionId <${initExecutionId}>`);
    publishEvent('init', createMessage({ ...initContent,
      executionId: initExecutionId
    }));
  }

  function run(runContent) {
    if (activityApi.isRunning) throw new Error(`activity <${id}> is already running`);
    executionId = initExecutionId || (0, _shared.getUniqueId)(id);
    initExecutionId = undefined;
    consumeApi();
    const content = createMessage({ ...runContent,
      executionId
    });
    broker.publish('run', 'run.enter', content);
    broker.publish('run', 'run.start', (0, _messageHelper.cloneContent)(content));
    consumeRunQ();
  }

  function createMessage(override = {}) {
    const result = { ...override,
      id,
      type,
      ...(name ? {
        name
      } : undefined),
      ...(status ? {
        status
      } : undefined),
      parent: (0, _messageHelper.cloneParent)(parent)
    };
    const flags = {
      isEnd,
      isStart,
      isSubProcess,
      isMultiInstance,
      isForCompensation,
      attachedTo,
      isTransaction
    };

    for (const flag in flags) {
      if (flags[flag]) result[flag] = flags[flag];
    }

    return result;
  }

  function recover(state) {
    if (activityApi.isRunning) throw new Error(`cannot recover running activity <${id}>`);
    if (!state) return;
    stopped = state.stopped;
    status = state.status;
    executionId = state.executionId;
    counters = { ...counters,
      ...state.counters
    };

    if (state.execution) {
      execution = (0, _ActivityExecution.default)(activityApi, context).recover(state.execution);
    }

    broker.recover(state.broker);
    return activityApi;
  }

  function resume() {
    if (consumingRunQ) {
      throw new Error(`cannot resume running activity <${id}>`);
    }

    if (!status) return activate();
    stopped = false;
    consumeApi();
    const content = createMessage({
      executionId
    });
    broker.publish('run', 'run.resume', content, {
      persistent: false
    });
    consumeRunQ();
  }

  function discard(discardContent) {
    if (!status) return runDiscard(discardContent);
    if (execution && !execution.completed) return execution.discard();
    deactivateRunConsumers();
    runQ.purge();
    broker.publish('run', 'run.discard', (0, _messageHelper.cloneContent)(stateMessage.content));
    consumeRunQ();
  }

  function discardRun() {
    if (!status) return;
    if (execution && !execution.completed) return;

    switch (status) {
      case 'executing':
      case 'error':
      case 'discarded':
        return;
    }

    deactivateRunConsumers();
    if (extensions) extensions.deactivate();
    runQ.purge();
    broker.publish('run', 'run.discard', (0, _messageHelper.cloneContent)(stateMessage.content));
    consumeRunQ();
  }

  function runDiscard(discardContent = {}) {
    executionId = initExecutionId || (0, _shared.getUniqueId)(id);
    consumeApi();
    initExecutionId = undefined;
    const content = createMessage({ ...discardContent,
      executionId
    });
    broker.publish('run', 'run.discard', content);
    consumeRunQ();
  }

  function stop() {
    if (!consumingRunQ) return;
    return getApi().stop();
  }

  function onStop(message) {
    const running = consumingRunQ;
    stopped = true;
    consumingRunQ = false;
    broker.cancel('_activity-run');
    broker.cancel('_activity-api');
    broker.cancel('_activity-execution');
    broker.cancel('_run-on-inbound');
    broker.cancel('_format-consumer');

    if (running) {
      if (extensions) extensions.deactivate(message || createMessage());
      publishEvent('stop');
    }
  }

  function activate() {
    if (isForCompensation) return;
    return consumeInbound();
  }

  function deactivate() {
    broker.cancel('_run-on-inbound');
    broker.cancel('_format-consumer');
  }

  function consumeRunQ() {
    if (consumingRunQ) return;
    consumingRunQ = true;
    runQ.assertConsumer(onRunMessage, {
      exclusive: true,
      consumerTag: '_activity-run'
    });
  }

  function consumeApi() {
    if (!executionId) return;
    broker.cancel('_activity-api');
    broker.subscribeTmp('api', `activity.*.${executionId}`, onApiMessage, {
      noAck: true,
      consumerTag: '_activity-api',
      priority: 100
    });
  }

  function consumeInbound() {
    if (status) return;

    if (isParallelJoin) {
      return inboundQ.consume(onJoinInbound, {
        consumerTag: '_run-on-inbound',
        prefetch: 1000
      });
    }

    return inboundQ.consume(onInbound, {
      consumerTag: '_run-on-inbound'
    });
  }

  function deactivateRunConsumers() {
    broker.cancel('_activity-api');
    broker.cancel('_activity-run');
    broker.cancel('_activity-execution');
    consumingRunQ = false;
  }

  function onInboundEvent(routingKey, message) {
    const {
      fields,
      content,
      properties
    } = message;

    switch (routingKey) {
      case 'activity.enter':
      case 'activity.discard':
        {
          if (content.id === attachedToActivity.id) {
            inboundQ.queueMessage(fields, (0, _messageHelper.cloneContent)(content), properties);
          }

          break;
        }

      case 'flow.shake':
        {
          shakeOutbound(message);
          break;
        }

      case 'association.take':
      case 'flow.take':
      case 'flow.discard':
        inboundQ.queueMessage(fields, (0, _messageHelper.cloneContent)(content), properties);
        break;

      case 'association.discard':
        {
          logger.debug(`<${id}> compensation discarded`);
          inboundQ.purge();
          break;
        }

      case 'association.complete':
        {
          if (!isForCompensation) break;
          inboundQ.queueMessage(fields, (0, _messageHelper.cloneContent)(content), properties);
          const compensationId = `${(0, _shared.brokerSafeId)(id)}_${(0, _shared.brokerSafeId)(content.sequenceId)}`;
          publishEvent('compensation.start', createMessage({
            executionId: compensationId,
            placeholder: true
          }));
          logger.debug(`<${id}> start compensation with id <${compensationId}>`);
          consumeInbound();
          break;
        }
    }
  }

  function onInbound(routingKey, message) {
    message.ack();
    broker.cancel('_run-on-inbound');
    const content = message.content;
    const inbound = [(0, _messageHelper.cloneContent)(content)];

    switch (routingKey) {
      case 'association.take':
      case 'flow.take':
      case 'activity.enter':
        run({
          message: content.message,
          inbound
        });
        break;

      case 'flow.discard':
      case 'activity.discard':
        {
          let discardSequence;
          if (content.discardSequence) discardSequence = content.discardSequence.slice();
          runDiscard({
            inbound,
            discardSequence
          });
          break;
        }

      case 'association.complete':
        {
          broker.cancel('_run-on-inbound');
          const compensationId = `${(0, _shared.brokerSafeId)(id)}_${(0, _shared.brokerSafeId)(content.sequenceId)}`;
          logger.debug(`<${id}> completed compensation with id <${compensationId}>`);
          publishEvent('compensation.end', createMessage({
            executionId: compensationId
          }));
          break;
        }
    }
  }

  function onJoinInbound(routingKey, message) {
    const {
      content
    } = message;
    const idx = inboundJoinFlows.findIndex(msg => msg.content.id === content.id);
    inboundJoinFlows.push(message);
    if (idx > -1) return;
    const allTouched = inboundJoinFlows.length >= inboundTriggers.length;

    if (!allTouched) {
      const remaining = inboundSequenceFlows.filter((inb, i, list) => list.indexOf(inb) === i).length - inboundJoinFlows.length;
      return logger.debug(`<${id}> inbound ${message.content.action} from <${message.content.id}>, ${remaining} remaining`);
    }

    const evaluatedInbound = inboundJoinFlows.splice(0);
    let taken;
    const inbound = evaluatedInbound.map(im => {
      if (im.fields.routingKey === 'flow.take') taken = true;
      im.ack();
      return (0, _messageHelper.cloneContent)(im.content);
    });
    const discardSequence = !taken && evaluatedInbound.reduce((result, im) => {
      if (!im.content.discardSequence) return result;
      im.content.discardSequence.forEach(sourceId => {
        if (result.indexOf(sourceId) === -1) result.push(sourceId);
      });
      return result;
    }, []);
    broker.cancel('_run-on-inbound');
    if (!taken) return runDiscard({
      inbound,
      discardSequence
    });
    return run({
      inbound
    });
  }

  function onRunMessage(routingKey, message, messageProperties) {
    switch (routingKey) {
      case 'run.outbound.discard':
      case 'run.outbound.take':
      case 'run.next':
        return continueRunMessage(routingKey, message, messageProperties);

      case 'run.resume':
        {
          return onResumeMessage();
        }
    }

    const preStatus = status;
    status = 'formatting';
    return formatter(message, (err, formattedContent, formatted) => {
      if (err) return emitFatal(err, message.content);
      if (formatted) message.content = formattedContent;
      status = preStatus;
      continueRunMessage(routingKey, message, messageProperties);
    });

    function onResumeMessage() {
      message.ack();
      const {
        fields
      } = stateMessage;

      switch (fields.routingKey) {
        case 'run.enter':
        case 'run.start':
        case 'run.discarded':
        case 'run.end':
        case 'run.leave':
          break;

        default:
          return;
      }

      if (!fields.redelivered) return;
      logger.debug(`<${id}> resume from ${message.content.status}`);
      return broker.publish('run', fields.routingKey, (0, _messageHelper.cloneContent)(stateMessage.content), stateMessage.properties);
    }
  }

  function continueRunMessage(routingKey, message) {
    const {
      fields,
      content: originalContent,
      ack
    } = message;
    const isRedelivered = fields.redelivered;
    const content = (0, _messageHelper.cloneContent)(originalContent);
    const {
      correlationId
    } = message.properties;
    stateMessage = message;

    switch (routingKey) {
      case 'run.enter':
        {
          logger.debug(`<${id}> enter`, isRedelivered ? 'redelivered' : '');
          status = 'entered';

          if (!isRedelivered) {
            execution = undefined;
          }

          if (extensions) extensions.activate((0, _messageHelper.cloneMessage)(message), activityApi);
          if (bpmnIo) bpmnIo.activate(message);
          if (!isRedelivered) publishEvent('enter', content, {
            correlationId
          });
          break;
        }

      case 'run.discard':
        {
          logger.debug(`<${id}> discard`, isRedelivered ? 'redelivered' : '');
          status = 'discard';
          execution = undefined;
          if (extensions) extensions.activate((0, _messageHelper.cloneMessage)(message), activityApi);
          if (bpmnIo) bpmnIo.activate(message);

          if (!isRedelivered) {
            broker.publish('run', 'run.discarded', content, {
              correlationId
            });
            publishEvent('discard', content);
          }

          break;
        }

      case 'run.start':
        {
          logger.debug(`<${id}> start`, isRedelivered ? 'redelivered' : '');
          status = 'started';

          if (!isRedelivered) {
            broker.publish('run', 'run.execute', content, {
              correlationId
            });
            publishEvent('start', content, {
              correlationId
            });
          }

          break;
        }

      case 'run.execute.passthrough':
        {
          if (!isRedelivered && execution) {
            executeMessage = message;
            return execution.passthrough(message);
          }
        }

      case 'run.execute':
        {
          status = 'executing';
          executeMessage = message;
          executionQ.assertConsumer(onExecutionMessage, {
            exclusive: true,
            consumerTag: '_activity-execution'
          });
          execution = execution || (0, _ActivityExecution.default)(activityApi, context);

          if (isRedelivered) {
            return resumeExtensions(message, (err, formattedContent) => {
              if (err) return emitFatal(err, message.content);
              if (formattedContent) message.content = formattedContent;
              status = 'executing';
              return execution.execute(message);
            });
          }

          return execution.execute(message);
        }

      case 'run.end':
        {
          if (status === 'end') break;
          counters.taken++;
          status = 'end';
          if (isRedelivered) break;
          return doRunLeave(false, () => {
            publishEvent('end', content, {
              correlationId
            });
            if (!step) ack();
          });
        }

      case 'run.error':
        {
          publishEvent('error', (0, _messageHelper.cloneContent)(content, {
            error: fields.redelivered ? (0, _Errors.makeErrorFromMessage)(message) : content.error
          }), {
            correlationId
          });
          break;
        }

      case 'run.discarded':
        {
          logger.debug(`<${executionId} (${id})> discarded`);
          counters.discarded++;
          status = 'discarded';
          content.outbound = undefined;

          if (!isRedelivered) {
            return doRunLeave(true, () => {
              if (!step) ack();
            });
          }

          break;
        }

      case 'run.outbound.take':
        {
          const flow = getOutboundSequenceFlowById(content.flow.id);
          ack();
          return flow.take(content.flow);
        }

      case 'run.outbound.discard':
        {
          const flow = getOutboundSequenceFlowById(content.flow.id);
          ack();
          return flow.discard(content.flow);
        }

      case 'run.leave':
        {
          status = undefined;
          if (bpmnIo) bpmnIo.deactivate(message);
          if (extensions) extensions.deactivate(message);

          if (!isRedelivered) {
            broker.publish('run', 'run.next', (0, _messageHelper.cloneContent)(content), {
              persistent: false
            });
            publishEvent('leave', content, {
              correlationId
            });
          }

          break;
        }

      case 'run.next':
        consumeInbound();
        break;
    }

    if (!step) ack();

    function doRunLeave(isDiscarded, onOutbound) {
      if (content.ignoreOutbound) {
        broker.publish('run', 'run.leave', (0, _messageHelper.cloneContent)(content), {
          correlationId
        });
        if (onOutbound) onOutbound();
        return;
      }

      return doOutbound((0, _messageHelper.cloneMessage)(message), isDiscarded, (err, outbound) => {
        if (err) {
          return publishEvent('error', (0, _messageHelper.cloneContent)(content, {
            error: err
          }), {
            correlationId
          });
        }

        broker.publish('run', 'run.leave', (0, _messageHelper.cloneContent)(content, { ...(outbound.length ? {
            outbound
          } : undefined)
        }), {
          correlationId
        });
        if (onOutbound) onOutbound();
      });
    }
  }

  function resumeExtensions(message, callback) {
    if (!extensions && !bpmnIo) return callback();
    if (extensions) extensions.activate((0, _messageHelper.cloneMessage)(message), activityApi);
    if (bpmnIo) bpmnIo.activate((0, _messageHelper.cloneMessage)(message));
    status = 'formatting';
    return formatter(message, (err, formattedContent, formatted) => {
      if (err) return callback(err);
      return callback(null, formatted && formattedContent);
    });
  }

  function getOutboundSequenceFlowById(flowId) {
    return outboundSequenceFlows.find(flow => flow.id === flowId);
  }

  function onExecutionMessage(routingKey, message) {
    const content = (0, _messageHelper.cloneContent)({ ...executeMessage.content,
      ...message.content,
      executionId: executeMessage.content.executionId,
      parent: { ...parent
      }
    });
    const {
      correlationId
    } = message.properties;
    publishEvent(routingKey, content, message.properties);

    switch (routingKey) {
      case 'execution.outbound.take':
        {
          return doOutbound((0, _messageHelper.cloneMessage)(message), false, (err, outbound) => {
            message.ack();
            if (err) return emitFatal(err, content);
            broker.publish('run', 'run.execute.passthrough', (0, _messageHelper.cloneContent)(content, {
              outbound
            }));
            return ackRunExecuteMessage();
          });
        }

      case 'execution.error':
        {
          status = 'error';
          broker.publish('run', 'run.error', content, {
            correlationId
          });
          broker.publish('run', 'run.discarded', content, {
            correlationId
          });
          break;
        }

      case 'execution.discard':
        status = 'discarded';
        broker.publish('run', 'run.discarded', content, {
          correlationId
        });
        break;

      default:
        {
          status = 'executed';
          broker.publish('run', 'run.end', content, {
            correlationId
          });
        }
    }

    message.ack();
    ackRunExecuteMessage();

    function ackRunExecuteMessage() {
      if (step) return;
      if (!executeMessage) return;
      const ackMessage = executeMessage;
      executeMessage = null;
      ackMessage.ack();
    }
  }

  function onApiMessage(routingKey, message) {
    const messageType = message.properties.type;

    switch (messageType) {
      case 'discard':
        {
          discardRun(message);
          break;
        }

      case 'stop':
        {
          onStop(message);
          break;
        }

      case 'shake':
        {
          shakeOutbound(message);
          break;
        }
    }
  }

  function shake() {
    shakeOutbound({
      content: createMessage()
    });
  }

  function shakeOutbound(sourceMessage) {
    const message = (0, _messageHelper.cloneMessage)(sourceMessage);
    message.content.sequence = message.content.sequence || [];
    message.content.sequence.push({
      id,
      type
    });
    broker.publish('api', 'activity.shake.start', message.content, {
      persistent: false,
      type: 'shake'
    });

    if (isEnd) {
      return broker.publish('event', 'activity.shake.end', message.content, {
        persistent: false,
        type: 'shake'
      });
    }

    outboundSequenceFlows.forEach(f => f.shake(message));
  }

  function publishEvent(state, content, messageProperties = {}) {
    if (!state) return;
    if (!content) content = createMessage();
    broker.publish('event', `activity.${state}`, { ...content,
      state
    }, { ...messageProperties,
      type: state,
      mandatory: state === 'error',
      persistent: 'persistent' in messageProperties ? messageProperties.persistent : state !== 'stop'
    });
  }

  function doOutbound(fromMessage, isDiscarded, callback) {
    if (!outboundSequenceFlows.length) return callback(null, []);
    const fromContent = fromMessage.content;
    let discardSequence = fromContent.discardSequence;

    if (isDiscarded && !discardSequence && attachedTo && fromContent.inbound && fromContent.inbound[0]) {
      discardSequence = [fromContent.inbound[0].id];
    }

    let outboundFlows;

    if (isDiscarded) {
      outboundFlows = outboundSequenceFlows.map(flow => formatFlowAction(flow, {
        action: 'discard'
      }));
    } else if (fromContent.outbound && fromContent.outbound.length) {
      outboundFlows = outboundSequenceFlows.map(flow => formatFlowAction(flow, fromContent.outbound.filter(f => f.id === flow.id).pop()));
    }

    if (outboundFlows) {
      doRunOutbound(outboundFlows);
      return callback(null, outboundFlows);
    }

    return evaluateOutbound(fromMessage, fromContent.outboundTakeOne, (err, evaluatedOutbound) => {
      if (err) return callback(new _Errors.ActivityError(err.message, fromMessage, err));
      const outbound = doRunOutbound(evaluatedOutbound);
      return callback(null, outbound);
    });

    function doRunOutbound(outboundList) {
      return outboundList.map(outboundFlow => {
        const {
          id: flowId,
          action
        } = outboundFlow;
        broker.publish('run', 'run.outbound.' + action, (0, _messageHelper.cloneContent)(fromContent, {
          flow: { ...outboundFlow,
            sequenceId: (0, _shared.getUniqueId)(`${flowId}_${action}`),
            ...(discardSequence ? {
              discardSequence: discardSequence.slice()
            } : undefined)
          }
        }));
        return outboundFlow;
      });
    }
  }

  function formatFlowAction(flow, options) {
    if (!options) options = {
      action: 'discard'
    };
    const action = options.action;
    const message = options.message;
    return { ...options,
      id: flow.id,
      action,
      ...(flow.isDefault ? {
        isDefault: true
      } : undefined),
      ...(message !== undefined ? {
        message
      } : undefined)
    };
  }

  function evaluateOutbound(fromMessage, discardRestAtTake, callback) {
    let conditionMet;
    const outbound = {};
    if (!outboundSequenceFlows.length) return completed();
    const content = fromMessage.content;
    const message = content.message;
    const evaluateFlows = outboundSequenceFlows.slice();
    const defaultFlowIdx = outboundSequenceFlows.findIndex(({
      isDefault
    }) => isDefault);

    if (defaultFlowIdx > -1) {
      evaluateFlows.splice(defaultFlowIdx, 1);
      evaluateFlows.push(outboundSequenceFlows[defaultFlowIdx]);
    }

    let takenCount = 0;
    broker.subscribeTmp('execution', 'evaluate.flow.#', (routingKey, {
      content: evalContent,
      ack
    }) => {
      const {
        id: flowId,
        action
      } = evalContent;

      if (action === 'take') {
        takenCount++;
        conditionMet = true;
      }

      outbound[flowId] = evalContent;

      if ('result' in evalContent) {
        logger.debug(`<${content.executionId} (${id})> flow <${flowId}> evaluated to: ${evalContent.result}`);
      }

      let nextFlow = evaluateFlows.shift();
      if (!nextFlow) return completed();

      if (discardRestAtTake && conditionMet) {
        do {
          outbound[nextFlow.id] = formatFlowAction(nextFlow, {
            action: 'discard'
          });
        } while (nextFlow = evaluateFlows.shift());

        return completed();
      }

      if (conditionMet && nextFlow.isDefault) {
        outbound[nextFlow.id] = formatFlowAction(nextFlow, {
          action: 'discard'
        });
        return completed();
      }

      ack();
      evaluateSequenceFlows(nextFlow);
    }, {
      consumerTag: `_flow-evaluation-${executionId}`
    });
    return evaluateSequenceFlows(evaluateFlows.shift());

    function completed(err) {
      broker.cancel(`_flow-evaluation-${executionId}`);
      if (err) return callback(err);

      if (!takenCount) {
        const nonTakenError = new _Errors.ActivityError(`<${id}> no conditional flow taken`, fromMessage);
        logger.error(`<${id}>`, nonTakenError);
        return callback(nonTakenError);
      }

      const outboundList = Object.keys(outbound).reduce((result, flowId) => {
        const flow = outbound[flowId];
        result.push({ ...flow,
          ...(message !== undefined ? {
            message
          } : undefined)
        });
        return result;
      }, []);
      return callback(null, outboundList);
    }

    function evaluateSequenceFlows(flow) {
      if (!flow) return completed();

      if (flow.isDefault) {
        return broker.publish('execution', 'evaluate.flow.take', formatFlowAction(flow, {
          action: 'take'
        }), {
          persistent: false
        });
      }

      const flowCondition = flow.getCondition();

      if (!flowCondition) {
        return broker.publish('execution', 'evaluate.flow.take', formatFlowAction(flow, {
          action: 'take'
        }), {
          persistent: false
        });
      }

      flowCondition.execute((0, _messageHelper.cloneMessage)(fromMessage), (err, result) => {
        if (err) return completed(err);
        const action = result ? 'take' : 'discard';
        return broker.publish('execution', 'evaluate.flow.' + action, formatFlowAction(flow, {
          action,
          result
        }), {
          persistent: false
        });
      });
    }
  }

  function getActivityById(elementId) {
    return context.getActivityById(elementId);
  }

  function getState() {
    const msg = createMessage();
    return { ...msg,
      status,
      executionId,
      stopped,
      behaviour: { ...behaviour
      },
      counters: { ...counters
      },
      broker: broker.getState(true),
      execution: execution && execution.getState()
    };
  }

  function next() {
    if (!step) return;
    if (!stateMessage) return;
    if (status === 'executing') return false;
    if (status === 'formatting') return false;
    const current = stateMessage;
    stateMessage.ack();
    return current;
  }

  function getApi(message) {
    if (execution && !execution.completed) return execution.getApi(message);
    return (0, _Api.ActivityApi)(broker, message || stateMessage);
  }
}
},{"../Api":2,"../EventBroker":5,"../MessageFormatter":8,"../error/Errors":21,"../io/BpmnIO":46,"../messageHelper":52,"../shared":55,"./ActivityExecution":12}],12:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ActivityExecution;

var _Api = require("../Api");

var _messageHelper = require("../messageHelper");

function ActivityExecution(activity, context) {
  const {
    id,
    broker,
    logger,
    isSubProcess,
    Behaviour,
    environment
  } = activity;
  const {
    batchSize = 50
  } = environment.settings;
  const postponed = [];
  let source,
      initMessage,
      completed = false,
      executionId;
  const executeQ = broker.assertQueue('execute-q', {
    durable: true,
    autoDelete: false
  });
  const executionApi = {
    get completed() {
      return completed;
    },

    get source() {
      return source;
    },

    discard,
    execute,
    passthrough,
    getApi,
    getPostponed,
    getState,
    recover,
    stop
  };
  return executionApi;

  function getPostponed() {
    let apis = postponed.map(msg => getApi(msg));
    if (!isSubProcess || !source) return apis;
    apis = apis.concat(source.getPostponed());
    return apis;
  }

  function execute(executeMessage) {
    if (!executeMessage) throw new Error('Execution requires message');
    if (!executeMessage.content || !executeMessage.content.executionId) throw new Error('Execution requires execution id');
    const isRedelivered = executeMessage.fields.redelivered;
    executionId = executeMessage.content.executionId;
    initMessage = (0, _messageHelper.cloneMessage)(executeMessage);
    initMessage.content = { ...initMessage.content,
      executionId,
      state: 'start',
      isRootScope: true
    };

    if (isRedelivered) {
      postponed.splice(0);
      logger.debug(`<${executionId} (${id})> resume execution`);
      if (!source) source = Behaviour(activity, context);
      activate();
      return broker.publish('execution', 'execute.resume.execution', (0, _messageHelper.cloneContent)(initMessage.content), {
        persistent: false
      });
    }

    logger.debug(`<${executionId} (${id})> execute`);
    activate();
    source = Behaviour(activity, context);
    broker.publish('execution', 'execute.start', (0, _messageHelper.cloneContent)(initMessage.content));
  }

  function passthrough(executeMessage) {
    if (!source) return execute(executeMessage);
    return source.execute(executeMessage);
  }

  function discard() {
    if (completed) return;
    if (!initMessage) return logger.warn(`<${id}> is not executing`);
    getApi(initMessage).discard();
  }

  function stop() {
    if (!initMessage) return;
    getApi(initMessage).stop();
  }

  function getState() {
    const result = {
      completed
    };
    if (!source || !source.getState) return result;
    return { ...result,
      ...source.getState()
    };
  }

  function recover(state) {
    postponed.splice(0);
    if (!state) return executionApi;
    if ('completed' in state) completed = state.completed;
    source = Behaviour(activity, context);

    if (source.recover) {
      source.recover(state);
    }

    return executionApi;
  }

  function activate() {
    if (completed) return;
    broker.bindQueue(executeQ.name, 'execution', 'execute.#', {
      priority: 100
    });
    executeQ.assertConsumer(onExecuteMessage, {
      exclusive: true,
      prefetch: batchSize * 2,
      priority: 100,
      consumerTag: '_activity-execute'
    });
    if (completed) return deactivate();
    broker.subscribeTmp('api', `activity.*.${executionId}`, onParentApiMessage, {
      noAck: true,
      consumerTag: '_activity-api-execution',
      priority: 200
    });
  }

  function deactivate() {
    broker.cancel('_activity-api-execution');
    broker.cancel('_activity-execute');
    broker.unbindQueue(executeQ.name, 'execution', 'execute.#');
  }

  function onParentApiMessage(routingKey, message) {
    const messageType = message.properties.type;

    switch (messageType) {
      case 'discard':
        executeQ.queueMessage({
          routingKey: 'execute.discard'
        }, (0, _messageHelper.cloneContent)(initMessage.content));
        break;

      case 'stop':
        onStop(message);
        break;
    }
  }

  function onStop(message) {
    const stoppedId = message && message.content && message.content.executionId;
    const running = getPostponed();
    running.forEach(api => {
      if (stoppedId !== api.content.executionId) {
        api.stop();
      }
    });
    broker.cancel('_activity-execute');
    broker.cancel('_activity-api-execution');
  }

  function onExecuteMessage(routingKey, message) {
    const {
      fields = {},
      content = {},
      properties = {}
    } = message;
    const isRedelivered = fields.redelivered;
    const {
      isRootScope,
      ignoreIfExecuting,
      keep,
      executionId: cexid,
      error
    } = content;
    const {
      persistent,
      correlationId
    } = properties;
    if (isRedelivered && persistent === false) return message.ack();

    switch (routingKey) {
      case 'execute.resume.execution':
        {
          if (!postponed.length) return broker.publish('execution', 'execute.start', (0, _messageHelper.cloneContent)(initMessage.content));
          break;
        }

      case 'execute.error':
      case 'execute.discard':
        executionDiscard();
        break;

      case 'execute.cancel':
      case 'execute.completed':
        {
          if (isRedelivered) {
            message.ack();
            return broker.publish('execution', routingKey, getExecuteMessage().content);
          }

          executionCompleted();
          break;
        }

      case 'execute.start':
        {
          if (!stateChangeMessage()) return;
          return source.execute(getExecuteMessage());
        }

      case 'execute.outbound.take':
        {
          if (isRedelivered) {
            message.ack();
            break;
          }

          broker.publish('execution', 'execution.outbound.take', (0, _messageHelper.cloneContent)(content), {
            type: 'outbound'
          });
          break;
        }

      default:
        {
          if (!stateChangeMessage()) return;

          if (isRedelivered) {
            return source.execute(getExecuteMessage());
          }
        }
    }

    function stateChangeMessage() {
      const idx = postponed.findIndex(msg => msg.content.executionId === cexid);
      let previousMsg;

      if (idx > -1) {
        if (ignoreIfExecuting) {
          message.ack();
          return false;
        }

        previousMsg = postponed.splice(idx, 1, message)[0];
        previousMsg.ack();
        return true;
      }

      postponed.push(message);
      return true;
    }

    function getExecuteMessage() {
      const result = (0, _messageHelper.cloneMessage)(message, { ...(isRedelivered ? {
          isRecovered: true
        } : undefined)
      });
      result.content.ignoreIfExecuting = undefined;
      return result;
    }

    function executionCompleted() {
      const postponedMsg = ackPostponed(message);
      if (!postponedMsg) return;

      if (!isRootScope) {
        logger.debug(`<${cexid} (${id})> completed sub execution`);
        if (!keep) message.ack();

        if (postponed.length === 1 && postponed[0].content.isRootScope && !postponed[0].content.preventComplete) {
          return broker.publish('execution', 'execute.completed', (0, _messageHelper.cloneContent)(postponed[0].content));
        }

        return;
      }

      logger.debug(`<${cexid} (${id})> completed execution`);
      completed = true;
      message.ack(true);
      deactivate();
      const subApis = getPostponed();
      postponed.splice(0);
      subApis.forEach(api => api.discard());
      publishExecutionCompleted('completed', { ...postponedMsg.content,
        ...message.content
      });
    }

    function executionDiscard() {
      const postponedMsg = ackPostponed(message);
      if (!isRootScope && !postponedMsg) return;

      if (!error && !isRootScope) {
        message.ack();

        if (postponed.length === 1 && postponed[0].content.isRootScope) {
          return broker.publish('execution', 'execute.discard', { ...postponed[0].content
          }, {
            correlationId
          });
        }

        return;
      }

      message.ack(true);
      deactivate();
      const subApis = getPostponed();
      postponed.splice(0);
      subApis.forEach(api => api.discard());
      publishExecutionCompleted(error ? 'error' : 'discard', { ...content
      });
    }

    function publishExecutionCompleted(completionType, completeContent) {
      completed = true;
      broker.publish('execution', `execution.${completionType}`, { ...completeContent,
        state: completionType
      }, {
        type: completionType,
        correlationId
      });
    }
  }

  function ackPostponed(completeMessage) {
    const {
      executionId: eid
    } = completeMessage.content;
    const idx = postponed.findIndex(({
      content
    }) => content.executionId === eid);
    if (idx === -1) return;
    const [msg] = postponed.splice(idx, 1);
    msg.ack();
    return msg;
  }

  function getApi(apiMessage) {
    if (!apiMessage) apiMessage = initMessage;

    if (source.getApi) {
      const sourceApi = source.getApi(apiMessage);
      if (sourceApi) return sourceApi;
    }

    const api = (0, _Api.ActivityApi)(broker, apiMessage);

    api.getExecuting = function getExecuting() {
      return postponed.reduce((result, msg) => {
        if (msg.content.executionId === apiMessage.content.executionId) return result;
        result.push(getApi(msg));
        return result;
      }, []);
    };

    return api;
  }
}
},{"../Api":2,"../messageHelper":52}],13:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = DummyActivity;

var _messageHelper = require("../messageHelper");

function DummyActivity(activityDef) {
  const {
    id,
    type = 'dummy',
    name,
    parent: originalParent = {},
    behaviour = {}
  } = activityDef;
  return {
    id,
    type,
    name,
    behaviour: { ...behaviour
    },
    parent: (0, _messageHelper.cloneParent)(originalParent),
    placeholder: true
  };
}
},{"../messageHelper":52}],14:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Escalation;

function Escalation(signalDef, context) {
  const {
    id,
    type,
    name,
    parent: originalParent
  } = signalDef;
  const {
    environment
  } = context;
  const parent = { ...originalParent
  };
  return {
    id,
    type,
    name,
    parent,
    resolve
  };

  function resolve(executionMessage) {
    return {
      id,
      type,
      messageType: 'escalation',
      name: name && environment.resolveExpression(name, executionMessage),
      parent: { ...parent
      }
    };
  }
}
},{}],15:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ExecutionScope;

var _messageHelper = require("../messageHelper");

var _Errors = require("../error/Errors");

function ExecutionScope(activity, initMessage) {
  const {
    id,
    type,
    environment,
    logger
  } = activity;
  const {
    fields,
    content,
    properties
  } = (0, _messageHelper.cloneMessage)(initMessage);
  const scope = {
    id,
    type,
    fields,
    content,
    properties,
    environment,
    logger,
    resolveExpression,
    ActivityError: _Errors.ActivityError,
    BpmnError: _Errors.BpmnError
  };
  return scope;

  function resolveExpression(expression) {
    return environment.resolveExpression(expression, scope);
  }
}
},{"../error/Errors":21,"../messageHelper":52}],16:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Message;

function Message(messageDef, context) {
  const {
    id,
    type,
    name,
    parent: originalParent
  } = messageDef;
  const {
    environment
  } = context;
  const parent = { ...originalParent
  };
  return {
    id,
    type,
    name,
    parent,
    resolve
  };

  function resolve(executionMessage) {
    return {
      id,
      type,
      messageType: 'message',
      ...(name ? {
        name: environment.resolveExpression(name, executionMessage)
      } : undefined),
      parent: { ...parent
      }
    };
  }
}
},{}],17:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Signal;

function Signal(signalDef, context) {
  const {
    id,
    type = 'Signal',
    name,
    parent: originalParent
  } = signalDef;
  const {
    environment
  } = context;
  const parent = { ...originalParent
  };
  return {
    id,
    type,
    name,
    parent,
    resolve
  };

  function resolve(executionMessage) {
    return {
      id,
      type,
      messageType: 'signal',
      ...(name ? {
        name: environment.resolveExpression(name, executionMessage)
      } : undefined),
      parent: { ...parent
      }
    };
  }
}
},{}],18:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Definition = Definition;
exports.default = void 0;

var _DefinitionExecution = _interopRequireDefault(require("./DefinitionExecution"));

var _Api = require("../Api");

var _EventBroker = require("../EventBroker");

var _shared = require("../shared");

var _Errors = require("../error/Errors");

var _messageHelper = require("../messageHelper");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = Definition;
exports.default = _default;

function Definition(context, options) {
  if (!context) throw new Error('No context');
  const {
    id,
    name,
    type = 'definition'
  } = context;
  let environment = context.environment;

  if (options) {
    environment = environment.clone(options);
    context = context.clone(environment);
  }

  const logger = environment.Logger(type.toLowerCase());
  let execution, executionId, processes, executableProcesses, postponedMessage, stateMessage, stopped, consumingRunQ;
  let status;
  let counters = {
    completed: 0,
    discarded: 0
  };
  const definitionApi = {
    id,
    name,
    type,
    logger,
    context,

    get counters() {
      return { ...counters
      };
    },

    get executionId() {
      return executionId;
    },

    get status() {
      return status;
    },

    get execution() {
      return execution;
    },

    get isRunning() {
      if (!consumingRunQ) return false;
      return !!status;
    },

    get environment() {
      return environment;
    },

    run,
    getApi,
    getState,
    getActivityById,
    getElementById,
    getPostponed,
    getProcesses,
    getExecutableProcesses,
    getProcessById,
    sendMessage,
    recover,
    resume,
    shake,
    signal,
    cancelActivity,
    stop
  };
  const {
    broker,
    on,
    once,
    waitFor,
    emit,
    emitFatal
  } = (0, _EventBroker.DefinitionBroker)(definitionApi, onBrokerReturn);
  definitionApi.on = on;
  definitionApi.once = once;
  definitionApi.waitFor = waitFor;
  definitionApi.emit = emit;
  definitionApi.emitFatal = emitFatal;
  const runQ = broker.getQueue('run-q');
  const executionQ = broker.getQueue('execution-q');
  Object.defineProperty(definitionApi, 'broker', {
    enumerable: true,
    get: () => broker
  });
  Object.defineProperty(definitionApi, 'stopped', {
    enumerable: true,
    get: () => execution && execution.stopped
  });
  return definitionApi;

  function run(optionsOrCallback, optionalCallback) {
    const [runOptions, callback] = (0, _shared.getOptionsAndCallback)(optionsOrCallback, optionalCallback);

    if (definitionApi.isRunning) {
      const err = new Error('definition is already running');
      if (callback) return callback(err);
      throw err;
    }

    addConsumerCallbacks(callback);
    executionId = (0, _shared.getUniqueId)(id);
    const content = createMessage({ ...runOptions,
      executionId
    });
    broker.publish('run', 'run.enter', content);
    broker.publish('run', 'run.start', (0, _messageHelper.cloneContent)(content));
    broker.publish('run', 'run.execute', (0, _messageHelper.cloneContent)(content));
    logger.debug(`<${executionId} (${id})> run`);
    activateRunConsumers();
    return definitionApi;
  }

  function resume(callback) {
    if (definitionApi.isRunning) {
      const err = new Error('cannot resume running definition');
      if (callback) return callback(err);
      throw err;
    }

    stopped = false;
    if (!status) return definitionApi;
    addConsumerCallbacks(callback);
    logger.debug(`<${executionId} (${id})> resume`);
    const content = createMessage({
      executionId
    });
    broker.publish('run', 'run.resume', content, {
      persistent: false
    });
    activateRunConsumers();
    return definitionApi;
  }

  function recover(state) {
    if (definitionApi.isRunning) throw new Error('cannot recover running definition');
    if (!state) return definitionApi;
    stopped = state.stopped;
    status = state.status;
    executionId = state.executionId;

    if (state.counters) {
      counters = { ...counters,
        ...state.counters
      };
    }

    environment.recover(state.environment);

    if (state.execution) {
      execution = (0, _DefinitionExecution.default)(definitionApi, context).recover(state.execution);
    }

    broker.recover(state.broker);
    return definitionApi;
  }

  function shake(startId) {
    let result = {};
    let bps;

    if (startId) {
      const startActivity = getActivityById(startId);
      if (!startActivity) return;
      const bp = getProcessById(startActivity.parent.id);
      if (!bp) return;
      bps = [bp];
    } else bps = getProcesses();

    bps.forEach(shakeProcess);
    return result;

    function shakeProcess(shakeBp) {
      let shovel;

      if (!shakeBp.isRunning) {
        shovel = shakeBp.broker.createShovel('shaker', {
          exchange: 'event',
          pattern: '*.shake#'
        }, {
          broker,
          exchange: 'event'
        });
      }

      const shakeResult = shakeBp.shake(startId);
      if (shovel) shakeBp.broker.closeShovel('shaker');
      result = { ...result,
        ...shakeResult
      };
    }
  }

  function activateRunConsumers() {
    consumingRunQ = true;
    broker.subscribeTmp('api', `definition.*.${executionId}`, onApiMessage, {
      noAck: true,
      consumerTag: '_definition-api'
    });
    runQ.assertConsumer(onRunMessage, {
      exclusive: true,
      consumerTag: '_definition-run'
    });
  }

  function deactivateRunConsumers() {
    broker.cancel('_definition-api');
    broker.cancel('_definition-run');
    broker.cancel('_definition-execution');
    consumingRunQ = false;
  }

  function stop() {
    if (!definitionApi.isRunning) return;
    getApi().stop();
  }

  function addConsumerCallbacks(callback) {
    if (!callback) return;
    broker.off('return', onBrokerReturn);
    clearConsumers();
    broker.subscribeOnce('event', 'definition.stop', cbLeave, {
      consumerTag: '_definition-callback-stop'
    });
    broker.subscribeOnce('event', 'definition.leave', cbLeave, {
      consumerTag: '_definition-callback-leave'
    });
    broker.subscribeOnce('event', 'definition.error', cbError, {
      consumerTag: '_definition-callback-error'
    });

    function cbLeave(_, message) {
      clearConsumers();
      return callback(null, getApi(message));
    }

    function cbError(_, message) {
      clearConsumers();
      reset();
      const err = (0, _Errors.makeErrorFromMessage)(message);
      return callback(err);
    }

    function clearConsumers() {
      broker.cancel('_definition-callback-stop');
      broker.cancel('_definition-callback-leave');
      broker.cancel('_definition-callback-error');
      broker.on('return', onBrokerReturn);
    }
  }

  function createMessage(override) {
    return {
      id,
      type,
      name,
      ...override
    };
  }

  function onBrokerReturn(message) {
    if (message.properties.type === 'error') {
      deactivateRunConsumers();
      const err = (0, _Errors.makeErrorFromMessage)(message);
      throw err;
    }
  }

  function onRunMessage(routingKey, message) {
    const {
      content,
      ack,
      fields
    } = message;

    if (routingKey === 'run.resume') {
      return onResumeMessage();
    }

    stateMessage = message;

    switch (routingKey) {
      case 'run.enter':
        {
          logger.debug(`<${executionId} (${id})> enter`);
          status = 'entered';
          if (fields.redelivered) break;
          execution = undefined;
          publishEvent('enter', content);
          break;
        }

      case 'run.start':
        {
          logger.debug(`<${executionId} (${id})> start`);
          status = 'start';
          publishEvent('start', content);
          break;
        }

      case 'run.execute':
        {
          status = 'executing';
          const executeMessage = (0, _messageHelper.cloneMessage)(message);

          if (fields.redelivered && !execution) {
            executeMessage.fields.redelivered = undefined;
          }

          postponedMessage = message;
          executionQ.assertConsumer(onExecutionMessage, {
            exclusive: true,
            consumerTag: '_definition-execution'
          });
          execution = execution || (0, _DefinitionExecution.default)(definitionApi, context);

          if (executeMessage.fields.redelivered) {
            publishEvent('resume', content);
          }

          return execution.execute(executeMessage);
        }

      case 'run.end':
        {
          if (status === 'end') break;
          counters.completed++;
          logger.debug(`<${executionId} (${id})> completed`);
          status = 'end';
          broker.publish('run', 'run.leave', content);
          publishEvent('end', content);
          break;
        }

      case 'run.discarded':
        {
          if (status === 'discarded') break;
          counters.discarded++;
          status = 'discarded';
          broker.publish('run', 'run.leave', content);
          break;
        }

      case 'run.error':
        {
          publishEvent('error', (0, _messageHelper.cloneContent)(content, {
            error: fields.redelivered ? (0, _Errors.makeErrorFromMessage)(message) : content.error
          }), {
            mandatory: true
          });
          break;
        }

      case 'run.leave':
        {
          ack();
          status = undefined;
          deactivateRunConsumers();
          publishEvent('leave');
          break;
        }
    }

    ack();

    function onResumeMessage() {
      message.ack();

      switch (stateMessage.fields.routingKey) {
        case 'run.enter':
        case 'run.start':
        case 'run.discarded':
        case 'run.end':
        case 'run.leave':
          break;

        default:
          return;
      }

      if (!stateMessage.fields.redelivered) return;
      logger.debug(`<${id}> resume from ${status}`);
      return broker.publish('run', stateMessage.fields.routingKey, (0, _messageHelper.cloneContent)(stateMessage.content), stateMessage.properties);
    }
  }

  function onExecutionMessage(routingKey, message) {
    const {
      content,
      properties
    } = message;
    const messageType = properties.type;
    message.ack();

    switch (messageType) {
      case 'stopped':
        {
          deactivateRunConsumers();
          return publishEvent('stop');
        }

      case 'error':
        {
          broker.publish('run', 'run.error', content);
          broker.publish('run', 'run.discarded', content);
          break;
        }

      default:
        {
          broker.publish('run', 'run.end', content);
        }
    }

    if (postponedMessage) {
      const ackMessage = postponedMessage;
      postponedMessage = null;
      ackMessage.ack();
    }
  }

  function publishEvent(action, content = {}, msgOpts) {
    broker.publish('event', `definition.${action}`, execution ? execution.createMessage(content) : content, {
      type: action,
      ...msgOpts
    });
  }

  function getState() {
    return createMessage({
      executionId,
      status,
      stopped,
      counters: { ...counters
      },
      environment: environment.getState(),
      execution: execution && execution.getState(),
      broker: broker.getState(true)
    });
  }

  function getProcesses() {
    if (!processes) loadProcesses();
    return processes;
  }

  function getExecutableProcesses() {
    if (!processes) loadProcesses();
    return executableProcesses;
  }

  function getProcessById(processId) {
    return getProcesses().find(p => p.id === processId);
  }

  function loadProcesses() {
    if (processes) return processes;
    executableProcesses = context.getExecutableProcesses() || [];
    processes = context.getProcesses() || [];
    logger.debug(`<${id}> found ${processes.length} processes`);
  }

  function getActivityById(childId) {
    let child;
    const siblings = getProcesses();

    for (let i = 0; i < siblings.length; i++) {
      child = siblings[i].getActivityById(childId);
      if (child) return child;
    }

    return child;
  }

  function getElementById(elementId) {
    return context.getActivityById(elementId);
  }

  function getPostponed(...args) {
    if (!execution) return [];
    return execution.getPostponed(...args);
  }

  function getApi(message) {
    if (execution) return execution.getApi(message);
    if (!message || !stateMessage) throw new Error('Definition is not running');
    return (0, _Api.DefinitionApi)(broker, message || stateMessage);
  }

  function signal(message) {
    return getApi().signal(message, {
      delegate: true
    });
  }

  function cancelActivity(message) {
    return getApi().cancel(message, {
      delegate: true
    });
  }

  function sendMessage(message) {
    const messageContent = {
      message
    };
    let messageType = 'message';
    const reference = message && message.id && getElementById(message.id);

    if (reference && reference.resolve) {
      const resolvedReference = reference.resolve(createMessage({
        message
      }));
      messageType = resolvedReference.messageType || messageType;
      messageContent.message = { ...message,
        ...resolvedReference
      };
    }

    return getApi().sendApiMessage(messageType, messageContent, {
      delegate: true
    });
  }

  function onApiMessage(routingKey, message) {
    const messageType = message.properties.type;

    switch (messageType) {
      case 'stop':
        {
          if (execution && !execution.completed) return;
          onStop();
          break;
        }
    }
  }

  function onStop() {
    stopped = true;
    deactivateRunConsumers();
    return publishEvent('stop');
  }

  function reset() {
    executionId = undefined;
    deactivateRunConsumers();
    runQ.purge();
    executionQ.purge();
  }
}
},{"../Api":2,"../EventBroker":5,"../error/Errors":21,"../messageHelper":52,"../shared":55,"./DefinitionExecution":19}],19:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = DefinitionExecution;

var _Api = require("../Api");

var _messageHelper = require("../messageHelper");

var _getPropertyValue = _interopRequireDefault(require("../getPropertyValue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function DefinitionExecution(definition) {
  const {
    id,
    type,
    broker,
    logger,
    environment
  } = definition;
  const processes = definition.getProcesses();
  const processIds = processes.map(({
    id: childId
  }) => childId);
  let executableProcesses = definition.getExecutableProcesses();
  const postponed = [];
  broker.assertExchange('execution', 'topic', {
    autoDelete: false,
    durable: true
  });
  let activityQ,
      status = 'init',
      executionId,
      stopped,
      activated,
      initMessage,
      completed = false;
  const definitionExecution = {
    id,
    type,
    broker,

    get environment() {
      return environment;
    },

    get executionId() {
      return executionId;
    },

    get completed() {
      return completed;
    },

    get status() {
      return status;
    },

    get stopped() {
      return stopped;
    },

    get postponedCount() {
      return postponed.length;
    },

    get isRunning() {
      if (activated) return true;
      return false;
    },

    processes,
    createMessage,
    getApi,
    getState,
    getPostponed,
    execute,
    resume,
    recover,
    stop
  };
  return definitionExecution;

  function execute(executeMessage) {
    if (!executeMessage) throw new Error('Definition execution requires message');
    const {
      content,
      fields
    } = executeMessage;
    if (!content || !content.executionId) throw new Error('Definition execution requires execution id');
    const isRedelivered = fields.redelivered;
    executionId = content.executionId;
    initMessage = (0, _messageHelper.cloneMessage)(executeMessage, {
      executionId,
      state: 'start'
    });
    stopped = false;
    activityQ = broker.assertQueue(`execute-${executionId}-q`, {
      durable: true,
      autoDelete: false
    });

    if (isRedelivered) {
      return resume();
    }

    if (content.processId) {
      const startWithProcess = definition.getProcessById(content.processId);
      if (startWithProcess) executableProcesses = [startWithProcess];
    }

    logger.debug(`<${executionId} (${id})> execute definition`);
    activate();
    start();
    return true;
  }

  function resume() {
    logger.debug(`<${executionId} (${id})> resume`, status, 'definition execution');
    if (completed) return complete('completed');
    activate();
    postponed.splice(0);
    activityQ.consume(onProcessMessage, {
      prefetch: 1000,
      consumerTag: `_definition-activity-${executionId}`
    });
    if (completed) return complete('completed');

    switch (status) {
      case 'init':
        return start();

      case 'executing':
        {
          if (!postponed.length) return complete('completed');
          break;
        }
    }

    processes.forEach(p => p.resume());
  }

  function start() {
    if (!processes.length) {
      return publishCompletionMessage('completed');
    }

    if (!executableProcesses.length) {
      return complete('error', {
        error: new Error('No executable process')
      });
    }

    status = 'start';
    executableProcesses.forEach(p => p.init());
    executableProcesses.forEach(p => p.run());
    postponed.splice(0);
    activityQ.assertConsumer(onProcessMessage, {
      prefetch: 1000,
      consumerTag: `_definition-activity-${executionId}`
    });
  }

  function recover(state) {
    if (!state) return definitionExecution;
    executionId = state.executionId;
    stopped = state.stopped;
    completed = state.completed;
    status = state.status;
    logger.debug(`<${executionId} (${id})> recover`, status, 'definition execution');
    state.processes.forEach(processState => {
      const instance = definition.getProcessById(processState.id);
      if (!instance) return;
      instance.recover(processState);
    });
    return definitionExecution;
  }

  function stop() {
    getApi().stop();
  }

  function activate() {
    broker.subscribeTmp('api', '#', onApiMessage, {
      noAck: true,
      consumerTag: '_definition-api-consumer'
    });
    processes.forEach(p => {
      p.broker.subscribeTmp('message', 'message.outbound', onMessageOutbound, {
        noAck: true,
        consumerTag: '_definition-outbound-message-consumer'
      });
      p.broker.subscribeTmp('event', 'activity.signal', onDelegateMessage, {
        noAck: true,
        consumerTag: '_definition-signal-consumer',
        priority: 200
      });
      p.broker.subscribeTmp('event', 'activity.message', onDelegateMessage, {
        noAck: true,
        consumerTag: '_definition-message-consumer',
        priority: 200
      });
      p.broker.subscribeTmp('event', '#', onEvent, {
        noAck: true,
        consumerTag: '_definition-activity-consumer',
        priority: 100
      });
    });
    activated = true;

    function onEvent(routingKey, originalMessage) {
      const message = (0, _messageHelper.cloneMessage)(originalMessage);
      const content = message.content;
      const parent = content.parent = content.parent || {};
      const isDirectChild = processIds.indexOf(content.id) > -1;

      if (isDirectChild) {
        parent.executionId = executionId;
      } else {
        content.parent = (0, _messageHelper.pushParent)(parent, {
          id,
          type,
          executionId
        });
      }

      broker.publish('event', routingKey, content, { ...message.properties,
        mandatory: false
      });
      if (!isDirectChild) return;
      activityQ.queueMessage(message.fields, (0, _messageHelper.cloneContent)(content), message.properties);
    }
  }

  function deactivate() {
    broker.cancel('_definition-api-consumer');
    broker.cancel(`_definition-activity-${executionId}`);
    processes.forEach(p => {
      p.broker.cancel('_definition-outbound-message-consumer');
      p.broker.cancel('_definition-activity-consumer');
      p.broker.cancel('_definition-signal-consumer');
      p.broker.cancel('_definition-message-consumer');
    });
    activated = false;
  }

  function onProcessMessage(routingKey, message) {
    const content = message.content;
    const isRedelivered = message.fields.redelivered;
    const {
      id: childId,
      type: activityType,
      executionId: childExecutionId
    } = content;
    if (isRedelivered && message.properties.persistent === false) return;

    switch (routingKey) {
      case 'execution.stop':
        {
          if (childExecutionId === executionId) {
            message.ack();
            return onStopped();
          }

          break;
        }

      case 'process.leave':
        {
          return onChildCompleted();
        }
    }

    stateChangeMessage(true);

    switch (routingKey) {
      case 'process.discard':
      case 'process.enter':
        status = 'executing';
        break;

      case 'process.error':
        {
          processes.slice().forEach(p => {
            if (p.id !== childId) p.stop();
          });
          complete('error', {
            error: content.error
          });
          break;
        }
    }

    function stateChangeMessage(postponeMessage = true) {
      const previousMsg = popPostponed(childId);
      if (previousMsg) previousMsg.ack();
      if (postponeMessage) postponed.push(message);
    }

    function popPostponed(postponedId) {
      const idx = postponed.findIndex(msg => msg.content.id === postponedId);

      if (idx > -1) {
        return postponed.splice(idx, 1)[0];
      }
    }

    function onChildCompleted() {
      stateChangeMessage(false);
      if (isRedelivered) return message.ack();
      logger.debug(`<${executionId} (${id})> left <${childId}> (${activityType}), pending runs ${postponed.length}`);

      if (!postponed.length) {
        message.ack();
        complete('completed');
      }
    }

    function onStopped() {
      logger.debug(`<${executionId} (${id})> stop definition execution (stop process executions ${postponed.length})`);
      activityQ.close();
      deactivate();
      processes.slice().forEach(p => {
        p.stop();
      });
      stopped = true;
      return broker.publish('execution', `execution.stopped.${executionId}`, { ...initMessage.content,
        ...content
      }, {
        type: 'stopped',
        persistent: false
      });
    }
  }

  function onApiMessage(routingKey, message) {
    const messageType = message.properties.type;
    const delegate = message.properties.delegate;

    if (delegate && id === message.content.id) {
      const referenceId = (0, _getPropertyValue.default)(message, 'content.message.id');

      for (const bp of processes) {
        if (bp.isRunning) continue;

        if (bp.getStartActivities({
          referenceId,
          referenceType: messageType
        }).length) {
          logger.debug(`<${executionId} (${id})> start <${bp.id}>`);
          bp.run();
        }
      }
    }

    if (delegate) {
      for (const bp of processes) {
        bp.broker.publish('api', routingKey, (0, _messageHelper.cloneContent)(message.content), message.properties);
      }
    }

    if (executionId !== message.content.executionId) return;

    switch (messageType) {
      case 'stop':
        activityQ.queueMessage({
          routingKey: 'execution.stop'
        }, (0, _messageHelper.cloneContent)(message.content), {
          persistent: false
        });
        break;
    }
  }

  function getState() {
    return {
      executionId,
      stopped,
      completed,
      status,
      processes: processes.map(p => p.getState())
    };
  }

  function getPostponed(...args) {
    return processes.reduce((result, p) => {
      result = result.concat(p.getPostponed(...args));
      return result;
    }, []);
  }

  function complete(completionType, content, options) {
    deactivate();
    logger.debug(`<${executionId} (${id})> definition execution ${completionType} in ${Date.now() - initMessage.properties.timestamp}ms`);
    if (!content) content = createMessage();
    completed = true;
    if (status !== 'terminated') status = completionType;
    broker.deleteQueue(activityQ.name);
    return broker.publish('execution', `execution.${completionType}.${executionId}`, { ...initMessage.content,
      output: environment.output,
      ...content,
      state: completionType
    }, {
      type: completionType,
      mandatory: completionType === 'error',
      ...options
    });
  }

  function onMessageOutbound(routingKey, message) {
    const content = message.content;
    const {
      target,
      source
    } = content;
    logger.debug(`<${executionId} (${id})> conveying message from <${source.processId}.${source.id}> to`, target.id ? `<${target.processId}.${target.id}>` : `<${target.processId}>`);
    const targetProcess = getProcessById(target.processId);
    targetProcess.sendMessage(message);
  }

  function onDelegateMessage(routingKey, executeMessage) {
    const content = executeMessage.content;
    const messageType = executeMessage.properties.type;
    const delegateMessage = executeMessage.content.message;
    const reference = definition.getElementById(delegateMessage.id);
    const message = reference && reference.resolve(executeMessage);
    logger.debug(`<${executionId} (${id})>`, reference ? `${messageType} <${delegateMessage.id}>` : `anonymous ${messageType}`, `event received from <${content.parent.id}.${content.id}>. Delegating.`);
    getApi().sendApiMessage(messageType, {
      message: message,
      originalMessage: content.message
    }, {
      delegate: true,
      type: messageType
    });
    broker.publish('event', `definition.${messageType}`, createMessage({
      message: message && (0, _messageHelper.cloneContent)(message)
    }), {
      type: messageType
    });
  }

  function getProcessById(processId) {
    return processes.find(p => p.id === processId);
  }

  function publishCompletionMessage(completionType, content) {
    deactivate();
    logger.debug(`<${executionId} (${id})> ${completionType}`);
    if (!content) content = createMessage();
    return broker.publish('execution', `execution.${completionType}.${executionId}`, content, {
      type: completionType
    });
  }

  function createMessage(content = {}) {
    return {
      id,
      type,
      executionId,
      status,
      ...content
    };
  }

  function getApi(apiMessage) {
    if (!apiMessage) apiMessage = initMessage || {
      content: createMessage()
    };
    const content = apiMessage.content;

    if (content.executionId !== executionId) {
      return getProcessApi(apiMessage);
    }

    const api = (0, _Api.DefinitionApi)(broker, apiMessage);

    api.getExecuting = function getExecuting() {
      return postponed.reduce((result, msg) => {
        if (msg.content.executionId === content.executionId) return result;
        result.push(getApi(msg));
        return result;
      }, []);
    };

    return api;
  }

  function getProcessApi(message) {
    const content = message.content;
    let api = getApiByProcessId(content.id);
    if (api) return api;
    if (!content.parent) return;
    api = getApiByProcessId(content.parent.id);
    if (api) return api;
    if (!content.parent.path) return;

    for (let i = 0; i < content.parent.path.length; i++) {
      api = getApiByProcessId(content.parent.path[i].id);
      if (api) return api;
    }

    function getApiByProcessId(parentId) {
      const processInstance = getProcessById(parentId);
      if (!processInstance) return;
      return processInstance.getApi(message);
    }
  }
}
},{"../Api":2,"../getPropertyValue":45,"../messageHelper":52}],20:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = BpmnErrorActivity;

function BpmnErrorActivity(errorDef, context) {
  const {
    id,
    type,
    name = 'BpmnError',
    behaviour = {}
  } = errorDef;
  const {
    environment
  } = context;
  return {
    id,
    type,
    name,
    errorCode: behaviour.errorCode,
    resolve
  };

  function resolve(executionMessage, error) {
    const resolveCtx = { ...executionMessage,
      error
    };
    const result = {
      id,
      type,
      messageType: 'throw',
      name: name && environment.resolveExpression(name, resolveCtx),
      code: behaviour.errorCode && environment.resolveExpression(behaviour.errorCode, resolveCtx)
    };
    if (error) result.inner = error;
    return result;
  }
}
},{}],21:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeErrorFromMessage = makeErrorFromMessage;
exports.BpmnError = exports.ActivityError = void 0;

var _messageHelper = require("../messageHelper");

class ActivityError extends Error {
  constructor(description, sourceMessage, inner) {
    super(description);
    this.type = 'ActivityError';
    this.name = this.constructor.name;
    this.description = description;
    if (sourceMessage) this.source = (0, _messageHelper.cloneMessage)(sourceMessage, sourceMessage.content && sourceMessage.content.error && {
      error: undefined
    });

    if (inner) {
      this.inner = inner;
      if (inner.name) this.name = inner.name;
      if (inner.code) this.code = inner.code;
    }
  }

}

exports.ActivityError = ActivityError;

class BpmnError extends Error {
  constructor(description, behaviour = {}, sourceMessage, inner) {
    const {
      errorCode
    } = behaviour;
    super(description);
    this.type = 'BpmnError';
    this.name = behaviour.name || this.constructor.name;
    this.description = description;
    this.code = 'errorCode' in behaviour && errorCode && errorCode.toString() || behaviour.code;
    this.id = behaviour.id;
    if (sourceMessage) this.source = (0, _messageHelper.cloneMessage)(sourceMessage, sourceMessage.content && sourceMessage.content.error && {
      error: undefined
    });
    if (inner) this.inner = inner;
  }

}

exports.BpmnError = BpmnError;

function makeErrorFromMessage(errorMessage) {
  const {
    content
  } = errorMessage;
  if (isKnownError(content)) return content;
  const {
    error
  } = content;
  if (!error) return;
  if (isKnownError(error)) return error;

  switch (error.type) {
    case 'ActivityError':
      return new ActivityError(error.message || error.description, error.source, error.inner ? error.inner : {
        code: error.code,
        name: error.name
      });

    case 'BpmnError':
      return new BpmnError(error.message || error.description, error, error.source);
  }

  return error;

  function isKnownError(test) {
    if (test instanceof Error) return test;
    if (test instanceof ActivityError) return test;
    if (test instanceof BpmnError) return test;
  }
}
},{"../messageHelper":52}],22:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = CancelEventDefinition;

var _shared = require("../shared");

var _messageHelper = require("../messageHelper");

function CancelEventDefinition(activity, eventDefinition) {
  const {
    id,
    broker,
    environment,
    isThrowing
  } = activity;
  const {
    type
  } = eventDefinition;
  const {
    debug
  } = environment.Logger(type.toLowerCase());
  const cancelQueueName = `cancel-${(0, _shared.brokerSafeId)(id)}-q`;
  if (!isThrowing) setupCatch();
  const source = {
    id,
    type,
    reference: {
      referenceType: 'cancel'
    },
    execute: isThrowing ? executeThrow : executeCatch
  };
  return source;

  function executeCatch(executeMessage) {
    let completed;
    const messageContent = (0, _messageHelper.cloneContent)(executeMessage.content);
    const {
      executionId,
      parent,
      attachedTo
    } = messageContent;
    const parentExecutionId = parent && parent.executionId;
    broker.consume(cancelQueueName, onCatchMessage, {
      noAck: true,
      consumerTag: `_oncancel-${executionId}`
    });
    if (completed) return;
    broker.subscribeTmp('api', `activity.#.${parentExecutionId}`, onApiMessage, {
      noAck: true,
      consumerTag: `_api-parent-${parentExecutionId}`
    });
    broker.subscribeTmp('api', `activity.#.${executionId}`, onApiMessage, {
      noAck: true,
      consumerTag: `_api-${executionId}`
    });
    debug(`<${executionId} (${id})> expect cancel`);
    const exchangeKey = `execute.canceled.${executionId}`;
    broker.subscribeOnce('execution', exchangeKey, onCatchMessage, {
      consumerTag: `_onattached-cancel-${executionId}`
    });
    broker.publish('execution', 'execute.expect', (0, _messageHelper.cloneContent)(messageContent, {
      pattern: '#.cancel',
      exchange: 'execution',
      exchangeKey
    }));

    function onCatchMessage(_, message) {
      if (message.content && message.content.isTransaction) return onCancelTransaction(_, message);
      debug(`<${executionId} (${id})> cancel caught from <${message.content.id}>`);
      return complete(message.content.message);
    }

    function onCancelTransaction(_, message) {
      broker.cancel(`_oncancel-${executionId}`);
      debug(`<${executionId} (${id})> cancel transaction thrown by <${message.content.id}>`);
      broker.assertExchange('cancel', 'topic');
      broker.publish('execution', 'execute.detach', (0, _messageHelper.cloneContent)(messageContent, {
        pattern: '#',
        bindExchange: 'cancel',
        sourceExchange: 'event',
        sourcePattern: '#'
      }));
      broker.publish('event', 'activity.compensate', (0, _messageHelper.cloneContent)(message.content, {
        state: 'throw'
      }), {
        type: 'compensate',
        delegate: true
      });
      broker.subscribeTmp('cancel', 'activity.leave', (__, {
        content: msg
      }) => {
        if (msg.id !== attachedTo) return;
        return complete(message.content.message);
      }, {
        noAck: true,
        consumerTag: `_oncancelend-${executionId}`
      });
    }

    function complete(output) {
      completed = true;
      stop();
      debug(`<${executionId} (${id})> completed`);
      return broker.publish('execution', 'execute.completed', { ...messageContent,
        output,
        state: 'cancel'
      });
    }

    function onApiMessage(routingKey, message) {
      const messageType = message.properties.type;

      switch (messageType) {
        case 'discard':
          {
            completed = true;
            stop();
            return broker.publish('execution', 'execute.discard', { ...messageContent
            });
          }

        case 'stop':
          {
            stop();
            break;
          }
      }
    }

    function stop() {
      broker.cancel(`_api-parent-${parentExecutionId}`);
      broker.cancel(`_api-${executionId}`);
      broker.cancel(`_oncancel-${executionId}`);
      broker.cancel(`_oncancelend-${executionId}`);
      broker.cancel(`_onattached-cancel-${executionId}`);
      broker.purgeQueue(cancelQueueName);
    }
  }

  function executeThrow(executeMessage) {
    const {
      isTransaction
    } = environment.variables.content || {};
    const messageContent = (0, _messageHelper.cloneContent)(executeMessage.content);
    const {
      executionId,
      parent
    } = messageContent;
    const parentExecutionId = parent && parent.executionId;
    debug(`<${executionId} (${id})> throw cancel${isTransaction ? ' transaction' : ''}`);
    broker.publish('event', 'activity.cancel', { ...(0, _messageHelper.cloneContent)(messageContent),
      isTransaction,
      executionId: parentExecutionId,
      parent: (0, _messageHelper.shiftParent)(parent),
      state: 'throw'
    }, {
      type: 'cancel',
      delegate: isTransaction
    });
    return broker.publish('execution', 'execute.completed', { ...messageContent
    });
  }

  function setupCatch() {
    broker.assertQueue(cancelQueueName, {
      autoDelete: false,
      durable: true
    });
    broker.bindQueue(cancelQueueName, 'api', '*.cancel.#', {
      durable: true,
      priority: 400
    });
  }
}
},{"../messageHelper":52,"../shared":55}],23:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = CompensationEventDefinition;

var _shared = require("../shared");

var _messageHelper = require("../messageHelper");

function CompensationEventDefinition(activity, eventDefinition, context) {
  const {
    id,
    broker,
    environment,
    isThrowing
  } = activity;
  const {
    type
  } = eventDefinition;
  const {
    debug
  } = environment.Logger(type.toLowerCase());
  const compensationQueueName = `compensate-${(0, _shared.brokerSafeId)(id)}-q`;
  const associations = context.getOutboundAssociations(id) || [];
  if (!isThrowing) setupCatch();
  const source = {
    id,
    type,
    reference: {
      referenceType: 'compensate'
    },
    execute: isThrowing ? executeThrow : executeCatch
  };
  return source;

  function executeCatch(executeMessage) {
    let completed;
    const messageContent = (0, _messageHelper.cloneContent)(executeMessage.content);
    const {
      executionId,
      parent
    } = messageContent;
    const parentExecutionId = parent && parent.executionId;
    broker.consume(compensationQueueName, onCompensateApiMessage, {
      noAck: true,
      consumerTag: `_oncompensate-${executionId}`
    });
    if (completed) return;
    broker.subscribeTmp('api', `activity.#.${executionId}`, onApiMessage, {
      noAck: true,
      consumerTag: `_api-${executionId}`
    });
    if (completed) return stop();
    debug(`<${executionId} (${id})> expect compensate`);
    broker.assertExchange('compensate', 'topic');
    const compensateQ = broker.assertQueue('compensate-q', {
      durable: true,
      autoDelete: false
    });
    broker.subscribeTmp('compensate', 'execute.#', onCollect, {
      noAck: true,
      consumerTag: '_oncollect-messages'
    });
    broker.publish('execution', 'execute.detach', (0, _messageHelper.cloneContent)(messageContent, {
      bindExchange: 'compensate'
    }));
    broker.publish('event', 'activity.detach', { ...messageContent,
      executionId: parentExecutionId,
      parent: (0, _messageHelper.shiftParent)(parent),
      bindExchange: 'compensate'
    });

    function onCollect(routingKey, message) {
      switch (routingKey) {
        case 'execute.error':
        case 'execute.completed':
          {
            return compensateQ.queueMessage(message.fields, (0, _messageHelper.cloneContent)(message.content), message.properties);
          }
      }
    }

    function onCompensateApiMessage(routingKey, message) {
      const output = message.content.message;
      completed = true;
      stop();
      debug(`<${executionId} (${id})> caught compensate event`);
      broker.publish('event', 'activity.catch', { ...messageContent,
        message: { ...output
        },
        executionId: parentExecutionId,
        parent: (0, _messageHelper.shiftParent)(executeMessage.content.parent)
      }, {
        type: 'catch'
      });
      compensateQ.on('depleted', onDepleted);
      compensateQ.consume(onCollected, {
        noAck: true,
        consumerTag: '_convey-messages'
      });
      associations.forEach(association => {
        association.complete((0, _messageHelper.cloneMessage)(message));
      });

      function onDepleted() {
        compensateQ.off('depleted', onDepleted);
        return broker.publish('execution', 'execute.completed', { ...messageContent,
          output,
          state: 'catch'
        });
      }
    }

    function onCollected(routingKey, message) {
      associations.forEach(association => {
        association.take((0, _messageHelper.cloneMessage)(message));
      });
    }

    function onApiMessage(routingKey, message) {
      const messageType = message.properties.type;

      switch (messageType) {
        case 'compensate':
          {
            return onCompensateApiMessage(routingKey, message);
          }

        case 'discard':
          {
            completed = true;
            stop();
            associations.forEach(association => {
              association.discard((0, _messageHelper.cloneMessage)(message));
            });
            return broker.publish('execution', 'execute.discard', { ...messageContent
            });
          }

        case 'stop':
          {
            stop();
            break;
          }
      }
    }

    function stop() {
      broker.cancel(`_api-${executionId}`);
      broker.cancel(`_oncompensate-${executionId}`);
      broker.cancel('_oncollect-messages');
      broker.cancel('_convey-messages');
    }
  }

  function executeThrow(executeMessage) {
    const messageContent = (0, _messageHelper.cloneContent)(executeMessage.content);
    const {
      executionId,
      parent
    } = messageContent;
    const parentExecutionId = parent && parent.executionId;
    debug(`<${executionId} (${id})> throw compensate`);
    broker.publish('event', 'activity.compensate', { ...(0, _messageHelper.cloneContent)(messageContent),
      executionId: parentExecutionId,
      parent: (0, _messageHelper.shiftParent)(parent),
      state: 'throw'
    }, {
      type: 'compensate',
      delegate: true
    });
    return broker.publish('execution', 'execute.completed', { ...messageContent
    });
  }

  function setupCatch() {
    broker.assertQueue(compensationQueueName, {
      autoDelete: false,
      durable: true
    });
    broker.bindQueue(compensationQueueName, 'api', '*.compensate.#', {
      durable: true,
      priority: 400
    });
  }
}
},{"../messageHelper":52,"../shared":55}],24:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ConditionalEventDefinition;

var _messageHelper = require("../messageHelper");

function ConditionalEventDefinition(activity, eventDefinition) {
  const {
    id,
    broker,
    environment,
    attachedTo
  } = activity;
  const {
    type = 'ConditionalEventDefinition',
    behaviour = {}
  } = eventDefinition;
  const {
    debug
  } = environment.Logger(type.toLowerCase());
  const condition = behaviour.expression;
  const isWaiting = !attachedTo;
  const source = {
    type,
    condition,
    execute
  };
  return source;

  function execute(executeMessage) {
    return isWaiting ? executeWait(executeMessage) : executeCatch(executeMessage);
  }

  function executeCatch(executeMessage) {
    const attachedToBroker = attachedTo.broker;
    const messageContent = (0, _messageHelper.cloneContent)(executeMessage.content);
    const {
      executionId,
      index
    } = messageContent;
    messageContent.condition = condition;
    const apiConsumerTag = `_api-${executionId}_${index}`;
    const endConsumerTag = `_onend-${executionId}_${index}`;
    broker.subscribeTmp('api', `activity.#.${executionId}`, onApiMessage, {
      noAck: true,
      consumerTag: apiConsumerTag
    });
    debug(`<${executionId} (${id})> listen for execute completed from <${attachedTo.id}>`);
    attachedToBroker.subscribeOnce('execution', 'execute.completed', onAttachedCompleted, {
      priority: 300,
      consumerTag: endConsumerTag
    });

    function onAttachedCompleted(routingKey, endMessage) {
      stop();
      const output = environment.resolveExpression(condition, endMessage);
      debug(`<${executionId} (${id})> condition from <${endMessage.content.executionId}> evaluated to`, !!output);
      broker.publish('event', 'activity.condition', { ...(0, _messageHelper.cloneContent)(messageContent),
        conditionResult: output
      });

      if (output) {
        broker.publish('execution', 'execute.completed', { ...messageContent,
          output
        });
      }
    }

    function onApiMessage(routingKey, message) {
      const messageType = message.properties.type;

      switch (messageType) {
        case 'discard':
          {
            stop();
            debug(`<${executionId} (${id})> discarded`);
            return broker.publish('execution', 'execute.discard', { ...messageContent,
              state: 'discard'
            });
          }

        case 'stop':
          {
            stop();
            return debug(`<${executionId} (${id})> stopped`);
          }
      }
    }

    function stop() {
      attachedToBroker.cancel(endConsumerTag);
      broker.cancel(apiConsumerTag);
    }
  }

  function executeWait(executeMessage) {
    const messageContent = (0, _messageHelper.cloneContent)(executeMessage.content);
    messageContent.condition = condition;
    const {
      executionId,
      parent
    } = messageContent;
    const parentExecutionId = parent && parent.executionId;
    if (evaluate(executeMessage)) return;
    broker.subscribeTmp('api', `activity.#.${executionId}`, onApiMessage, {
      noAck: true,
      consumerTag: `_api-${executionId}`
    });
    broker.subscribeTmp('api', `activity.signal.${parentExecutionId}`, onApiMessage, {
      noAck: true,
      consumerTag: `_parent-signal-${executionId}`
    });
    broker.publish('event', 'activity.wait', { ...(0, _messageHelper.cloneContent)(messageContent),
      executionId: parentExecutionId,
      parent: (0, _messageHelper.shiftParent)(parent)
    });

    function onApiMessage(routingKey, message) {
      const messageType = message.properties.type;

      switch (messageType) {
        case 'signal':
          {
            return evaluate(message);
          }

        case 'discard':
          {
            stop();
            return broker.publish('execution', 'execute.discard', { ...messageContent,
              state: 'discard'
            });
          }

        case 'stop':
          {
            stop();
            break;
          }
      }
    }

    function evaluate(message) {
      const output = environment.resolveExpression(condition, message);
      debug(`<${executionId} (${id})> condition evaluated to`, !!output);
      broker.publish('event', 'activity.condition', { ...(0, _messageHelper.cloneContent)(messageContent),
        conditionResult: output
      });
      if (!output) return;
      stop();
      return broker.publish('execution', 'execute.completed', { ...messageContent,
        output
      });
    }

    function stop() {
      broker.cancel(`_api-${executionId}`);
      broker.cancel(`_parent-signal-${executionId}`);
    }
  }
}
},{"../messageHelper":52}],25:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ErrorEventDefinition;

var _shared = require("../shared");

var _messageHelper = require("../messageHelper");

function ErrorEventDefinition(activity, eventDefinition) {
  const {
    id,
    broker,
    environment,
    getActivityById,
    isThrowing
  } = activity;
  const {
    type = 'ErrorEventDefinition',
    behaviour = {}
  } = eventDefinition;
  const {
    debug
  } = environment.Logger(type.toLowerCase());
  const reference = behaviour.errorRef || {
    name: 'anonymous'
  };
  const referenceElement = reference.id && getActivityById(reference.id);
  const errorId = referenceElement ? referenceElement.id : 'anonymous';
  const errorQueueName = `error-${(0, _shared.brokerSafeId)(id)}-${(0, _shared.brokerSafeId)(errorId)}-q`;
  if (!isThrowing) setupCatch();
  const source = {
    type,
    reference: { ...reference,
      referenceType: 'throw'
    },
    execute: isThrowing ? executeThrow : executeCatch
  };
  return source;

  function executeCatch(executeMessage) {
    let completed;
    const messageContent = (0, _messageHelper.cloneContent)(executeMessage.content);
    const {
      executionId,
      parent
    } = messageContent;
    const parentExecutionId = parent && parent.executionId;
    const {
      message: referenceMessage,
      description
    } = resolveMessage(executeMessage);
    broker.consume(errorQueueName, onThrowApiMessage, {
      noAck: true,
      consumerTag: `_onthrow-${executionId}`
    });
    if (completed) return;
    broker.subscribeTmp('api', `activity.#.${executionId}`, onApiMessage, {
      noAck: true,
      consumerTag: `_api-${executionId}`
    });

    if (!environment.settings.strict) {
      const expectRoutingKey = `execute.throw.${executionId}`;
      broker.publish('execution', 'execute.expect', { ...(0, _messageHelper.cloneContent)(messageContent),
        expectRoutingKey,
        expect: { ...referenceMessage
        }
      });
      broker.subscribeOnce('execution', expectRoutingKey, onErrorMessage, {
        consumerTag: `_onerror-${executionId}`
      });
    }

    if (completed) return stop();
    debug(`<${executionId} (${id})> expect ${description}`);
    broker.publish('event', 'activity.wait', { ...messageContent,
      executionId: parentExecutionId,
      parent: (0, _messageHelper.shiftParent)(parent),
      expect: { ...referenceMessage
      }
    });

    function onErrorMessage(routingKey, message) {
      const error = message.content.error;
      if (!referenceElement) return catchError(routingKey, message, error);
      if (!error) return;
      if ('' + error.code !== '' + referenceMessage.code) return;
      return catchError(routingKey, message, error);
    }

    function onThrowApiMessage(routingKey, message) {
      const error = message.content.message;
      if (!referenceElement) return catchError(routingKey, message, error);
      if (referenceMessage.id !== (error && error.id)) return;
      return catchError(routingKey, message, error);
    }

    function catchError(routingKey, message, error) {
      completed = true;
      stop();
      debug(`<${executionId} (${id})> caught ${description}`);
      broker.publish('event', 'activity.catch', { ...messageContent,
        source: {
          id: message.content.id,
          type: message.content.type,
          executionId: message.content.executionId
        },
        error,
        executionId: parentExecutionId,
        parent: (0, _messageHelper.shiftParent)(executeMessage.content.parent)
      }, {
        type: 'catch'
      });
      return broker.publish('execution', 'execute.completed', { ...messageContent,
        output: error,
        cancelActivity: true,
        state: 'catch'
      });
    }

    function onApiMessage(routingKey, message) {
      const messageType = message.properties.type;

      switch (messageType) {
        case 'discard':
          {
            completed = true;
            stop();
            return broker.publish('execution', 'execute.discard', (0, _messageHelper.cloneContent)(messageContent));
          }

        case 'stop':
          {
            stop();
            break;
          }
      }
    }

    function stop() {
      broker.cancel(`_onthrow-${executionId}`);
      broker.cancel(`_onerror-${executionId}`);
      broker.cancel(`_api-${executionId}`);
      broker.purgeQueue(errorQueueName);
    }
  }

  function executeThrow(executeMessage) {
    const messageContent = (0, _messageHelper.cloneContent)(executeMessage.content);
    const {
      executionId,
      parent
    } = messageContent;
    const parentExecutionId = parent && parent.executionId;
    const {
      message: referenceMessage,
      description
    } = resolveMessage(executeMessage);
    debug(`<${executionId} (${id})> throw ${description}`);
    broker.publish('event', 'activity.throw', { ...(0, _messageHelper.cloneContent)(messageContent),
      executionId: parentExecutionId,
      parent: (0, _messageHelper.shiftParent)(parent),
      message: { ...referenceMessage
      },
      state: 'throw'
    }, {
      type: 'throw',
      delegate: true
    });
    return broker.publish('execution', 'execute.completed', { ...messageContent,
      message: referenceMessage
    });
  }

  function resolveMessage(message) {
    if (!referenceElement) {
      return {
        message: { ...reference
        },
        description: 'anonymous error'
      };
    }

    const result = {
      message: referenceElement.resolve(message)
    };
    result.description = `${result.message.name} <${result.message.id}>`;
    if (result.message.code) result.description += ` code ${result.message.code}`;
    return result;
  }

  function setupCatch() {
    broker.assertQueue(errorQueueName, {
      autoDelete: false,
      durable: true
    });
    broker.bindQueue(errorQueueName, 'api', '*.throw.#', {
      durable: true,
      priority: 300
    });
  }
}
},{"../messageHelper":52,"../shared":55}],26:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = EscalationEventDefinition;

var _getPropertyValue = _interopRequireDefault(require("../getPropertyValue"));

var _shared = require("../shared");

var _messageHelper = require("../messageHelper");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function EscalationEventDefinition(activity, eventDefinition) {
  const {
    id,
    broker,
    environment,
    isThrowing,
    getActivityById
  } = activity;
  const {
    type,
    behaviour = {}
  } = eventDefinition;
  const {
    debug
  } = environment.Logger(type.toLowerCase());
  const reference = behaviour.escalationRef || {
    name: 'anonymous'
  };
  const referenceElement = reference.id && getActivityById(reference.id);
  const escalationId = referenceElement ? referenceElement.id : 'anonymous';
  const escalationQueueName = `escalate-${(0, _shared.brokerSafeId)(id)}-${(0, _shared.brokerSafeId)(escalationId)}-q`;
  if (!isThrowing) setupCatch();
  const source = {
    id,
    type,
    reference: { ...reference,
      referenceType: 'escalate'
    },
    execute: isThrowing ? executeThrow : executeCatch
  };
  return source;

  function executeCatch(executeMessage) {
    let completed;
    const messageContent = (0, _messageHelper.cloneContent)(executeMessage.content);
    const {
      executionId,
      parent
    } = messageContent;
    const parentExecutionId = parent && parent.executionId;
    const {
      message: referenceMessage,
      description
    } = resolveMessage(executeMessage);
    broker.consume(escalationQueueName, onEscalationApiMessage, {
      noAck: true,
      consumerTag: `_onescalate-${executionId}`
    });
    if (completed) return;
    broker.subscribeTmp('api', `activity.#.${executionId}`, onApiMessage, {
      noAck: true,
      consumerTag: `_api-${executionId}`
    });
    if (completed) return stop();
    debug(`<${executionId} (${id})> expect ${description}`);
    broker.publish('event', 'activity.wait', { ...messageContent,
      executionId: parentExecutionId,
      parent: (0, _messageHelper.shiftParent)(parent),
      escalation: { ...referenceMessage
      }
    });

    function onEscalationApiMessage(routingKey, message) {
      if ((0, _getPropertyValue.default)(message, 'content.message.id') !== referenceMessage.id) return;
      const output = message.content.message;
      completed = true;
      stop();
      debug(`<${executionId} (${id})> caught ${description}`);
      broker.publish('event', 'activity.catch', { ...messageContent,
        message: { ...output
        },
        executionId: parentExecutionId,
        parent: (0, _messageHelper.shiftParent)(executeMessage.content.parent)
      }, {
        type: 'catch'
      });
      return broker.publish('execution', 'execute.completed', { ...messageContent,
        output,
        state: 'catch'
      });
    }

    function onApiMessage(routingKey, message) {
      const messageType = message.properties.type;

      switch (messageType) {
        case 'escalate':
          {
            return onEscalationApiMessage(routingKey, message);
          }

        case 'discard':
          {
            completed = true;
            stop();
            return broker.publish('execution', 'execute.discard', { ...messageContent
            });
          }

        case 'stop':
          {
            stop();
            break;
          }
      }
    }

    function stop() {
      broker.cancel(`_api-${executionId}`);
      broker.cancel(`_onescalate-${executionId}`);
    }
  }

  function executeThrow(executeMessage) {
    const messageContent = (0, _messageHelper.cloneContent)(executeMessage.content);
    const {
      executionId,
      parent
    } = messageContent;
    const parentExecutionId = parent && parent.executionId;
    const {
      message: referenceMessage,
      description
    } = resolveMessage(executeMessage);
    debug(`<${executionId} (${id})> escalate ${description}`);
    broker.publish('event', 'activity.escalate', { ...(0, _messageHelper.cloneContent)(messageContent),
      executionId: parentExecutionId,
      parent: (0, _messageHelper.shiftParent)(parent),
      message: { ...referenceMessage
      },
      state: 'throw'
    }, {
      type: 'escalate',
      delegate: true
    });
    return broker.publish('execution', 'execute.completed', { ...messageContent
    });
  }

  function resolveMessage(message) {
    if (!referenceElement) {
      return {
        message: { ...reference
        },
        description: 'anonymous escalation'
      };
    }

    const result = {
      message: referenceElement.resolve(message)
    };
    result.description = `${result.message.name} <${result.message.id}>`;
    return result;
  }

  function setupCatch() {
    broker.assertQueue(escalationQueueName, {
      autoDelete: false,
      durable: true
    });
    broker.bindQueue(escalationQueueName, 'api', '*.escalate.#', {
      durable: true,
      priority: 400
    });
  }
}
},{"../getPropertyValue":45,"../messageHelper":52,"../shared":55}],27:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = EventDefinitionExecution;

var _messageHelper = require("../messageHelper");

function EventDefinitionExecution(activity, eventDefinitions, completedRoutingKey = 'execute.completed') {
  const {
    id,
    broker,
    logger
  } = activity;
  const executeConsumerTag = '_eventdefinition-execution-execute-tag';
  const apiConsumerTag = '_eventdefinition-execution-api-tag';
  let parentExecutionContent,
      parent,
      completed = false,
      stopped = false;
  return {
    execute,

    get completed() {
      return completed;
    }

  };

  function execute(executeMessage) {
    const executeContent = executeMessage.content;
    const isRedelivered = executeMessage.fields.redelivered;
    const {
      isRootScope,
      isDefinitionScope,
      executionId: messageExecutionId
    } = executeContent;
    if (isDefinitionScope) return executeDefinition();
    let parentExecutionId;

    if (isRootScope) {
      parentExecutionId = messageExecutionId;
      parentExecutionContent = executeContent;
      broker.subscribeTmp('execution', 'execute.#', onExecuteMessage, {
        noAck: true,
        consumerTag: executeConsumerTag,
        priority: 300
      });
      broker.subscribeTmp('api', `activity.*.${parentExecutionId}`, onApiMessage, {
        noAck: true,
        consumerTag: apiConsumerTag,
        priority: 300
      });
      parent = (0, _messageHelper.unshiftParent)(parentExecutionContent.parent, parentExecutionContent);
      broker.publish('execution', 'execute.update', { ...(0, _messageHelper.cloneContent)(parentExecutionContent),
        preventComplete: true
      });
    }

    if (isRedelivered) return;

    for (let index = 0; index < eventDefinitions.length; ++index) {
      if (completed) break;
      if (stopped) break;
      const ed = eventDefinitions[index];
      const executionId = `${messageExecutionId}_${index}`;
      logger.debug(`<${messageExecutionId} (${id})> start event definition ${ed.type}, index ${index}`);
      broker.publish('execution', 'execute.start', { ...(0, _messageHelper.cloneContent)(parentExecutionContent),
        isRootScope: undefined,
        type: ed.type,
        executionId,
        isDefinitionScope: true,
        index,
        parent
      });
    }

    function onApiMessage(_, message) {
      const messageType = message.properties.type;

      switch (messageType) {
        case 'stop':
          stopped = true;

        case 'discard':
          return stop();
      }
    }

    function onExecuteMessage(routingKey, message) {
      const {
        correlationId
      } = message.properties;

      switch (routingKey) {
        case 'execute.completed':
          {
            stop();
            if (message.content.isDefinitionScope) return complete();
            break;
          }

        case 'execute.discard':
          {
            if (message.content.isDefinitionScope) {
              logger.debug(`<${message.content.executionId} (${id})> event definition ${message.content.type} discarded, index ${message.content.index}`);
              break;
            }

            stop();
            logger.debug(`<${message.content.executionId} (${id})> event definition parent execution discarded`);
            break;
          }
      }

      function complete() {
        const content = (0, _messageHelper.cloneContent)(message.content);
        completed = true;
        logger.debug(`<${content.executionId} (${id})> event definition ${content.type} completed, index ${content.index}`);
        broker.publish('execution', completedRoutingKey, { ...(0, _messageHelper.cloneContent)(content),
          executionId: parentExecutionId,
          isRootScope: true,
          parent: (0, _messageHelper.shiftParent)(content.parent)
        }, {
          correlationId
        });
      }
    }

    function executeDefinition() {
      const ed = eventDefinitions[executeContent.index];
      if (!ed) return logger.warn(`<${messageExecutionId} (${id})> found no event definition on index ${executeContent.index}`);
      logger.debug(`<${messageExecutionId} (${id})> execute event definition ${ed.type}, index ${executeContent.index}`);
      ed.execute(executeMessage);
    }

    function stop() {
      broker.cancel(executeConsumerTag);
      broker.cancel(apiConsumerTag);
    }
  }
}
},{"../messageHelper":52}],28:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = LinkEventDefinition;

var _getPropertyValue = _interopRequireDefault(require("../getPropertyValue"));

var _shared = require("../shared");

var _messageHelper = require("../messageHelper");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function LinkEventDefinition(activity, eventDefinition) {
  const {
    id,
    broker,
    environment,
    isThrowing
  } = activity;
  const {
    type
  } = eventDefinition;
  const {
    debug
  } = environment.Logger(type.toLowerCase());
  const reference = {
    linkName: eventDefinition.behaviour.name
  };
  const linkQueueName = `link-${(0, _shared.brokerSafeId)(id)}-${(0, _shared.brokerSafeId)(reference.linkName)}-q`;
  if (!isThrowing) setupCatch();else setupThrow();
  const source = {
    id,
    type,
    reference: { ...reference,
      referenceType: 'link'
    },
    execute: isThrowing ? executeThrow : executeCatch
  };
  return source;

  function executeCatch(executeMessage) {
    let completed;
    const messageContent = (0, _messageHelper.cloneContent)(executeMessage.content);
    const {
      executionId,
      parent
    } = messageContent;
    const parentExecutionId = parent && parent.executionId;
    const description = messageDescription();
    broker.consume(linkQueueName, onCatchLink, {
      noAck: true,
      consumerTag: `_api-link-${executionId}`
    });
    if (completed) return;
    broker.subscribeTmp('api', `activity.stop.${parentExecutionId}`, onApiMessage, {
      noAck: true,
      consumerTag: `_api-parent-${parentExecutionId}`
    });
    broker.subscribeTmp('api', `activity.#.${executionId}`, onApiMessage, {
      noAck: true,
      consumerTag: `_api-${executionId}`
    });
    debug(`<${executionId} (${id})> expect ${description}`);
    broker.publish('event', 'activity.wait', { ...messageContent,
      executionId: parentExecutionId,
      parent: (0, _messageHelper.shiftParent)(parent),
      link: { ...reference
      }
    });

    function onCatchLink(routingKey, message) {
      if ((0, _getPropertyValue.default)(message, 'content.message.linkName') !== reference.linkName) return;
      if (message.content.state === 'discard') return discard();
      return complete('caught', message.content.message);
    }

    function onApiMessage(routingKey, message) {
      const messageType = message.properties.type;

      switch (messageType) {
        case 'link':
          {
            return complete('got link with', message.content.message);
          }

        case 'discard':
          {
            return discard();
          }

        case 'stop':
          {
            stop();
            break;
          }
      }
    }

    function complete(verb, output) {
      completed = true;
      stop();
      debug(`<${executionId} (${id})> ${verb} ${description}`);
      broker.publish('event', 'activity.catch', { ...messageContent,
        link: { ...reference
        },
        message: { ...output
        },
        executionId: parentExecutionId || executionId,
        parent: (0, _messageHelper.shiftParent)(executeMessage.content.parent)
      }, {
        type: 'catch'
      });
      return broker.publish('execution', 'execute.completed', { ...messageContent,
        output,
        state: 'catch'
      });
    }

    function discard() {
      completed = true;
      stop();
      return broker.publish('execution', 'execute.discard', { ...messageContent
      });
    }

    function stop() {
      broker.cancel(`_api-link-${executionId}`);
      broker.cancel(`_api-parent-${parentExecutionId}`);
      broker.cancel(`_api-${executionId}`);
      broker.purgeQueue(linkQueueName);
    }
  }

  function executeThrow(executeMessage) {
    const messageContent = (0, _messageHelper.cloneContent)(executeMessage.content);
    const {
      executionId,
      parent
    } = messageContent;
    const parentExecutionId = parent && parent.executionId;
    const description = messageDescription();
    debug(`<${executionId} (${id})> throw ${description}`);
    broker.publish('event', 'activity.link', { ...(0, _messageHelper.cloneContent)(messageContent),
      executionId: parentExecutionId,
      parent: (0, _messageHelper.shiftParent)(parent),
      message: { ...reference
      },
      state: 'throw'
    }, {
      type: 'link',
      delegate: true
    });
    return broker.publish('execution', 'execute.completed', messageContent);
  }

  function messageDescription() {
    return `link ${reference.linkName}`;
  }

  function setupCatch() {
    broker.assertQueue(linkQueueName, {
      autoDelete: false,
      durable: true
    });
    broker.bindQueue(linkQueueName, 'api', '*.link.#', {
      durable: true
    });
  }

  function setupThrow() {
    broker.subscribeTmp('event', 'activity.discard', onDiscard, {
      noAck: true,
      consumerTag: '_link-parent-discard'
    });

    function onDiscard(_, message) {
      broker.publish('event', 'activity.link.discard', { ...(0, _messageHelper.cloneContent)(message.content),
        message: { ...reference
        },
        state: 'discard'
      }, {
        type: 'link',
        delegate: true
      });
    }
  }
}
},{"../getPropertyValue":45,"../messageHelper":52,"../shared":55}],29:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = MessageEventDefinition;

var _getPropertyValue = _interopRequireDefault(require("../getPropertyValue"));

var _shared = require("../shared");

var _messageHelper = require("../messageHelper");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function MessageEventDefinition(activity, eventDefinition) {
  const {
    id,
    broker,
    environment,
    isStart,
    isThrowing,
    getActivityById
  } = activity;
  const {
    type = 'MessageEventDefinition',
    behaviour = {}
  } = eventDefinition;
  const {
    debug
  } = environment.Logger(type.toLowerCase());
  const reference = behaviour.messageRef || {
    name: 'anonymous'
  };
  const referenceElement = reference.id && getActivityById(reference.id);
  const messageId = referenceElement ? referenceElement.id : 'anonymous';
  const messageQueueName = `message-${(0, _shared.brokerSafeId)(id)}-${(0, _shared.brokerSafeId)(messageId)}-q`;
  if (!isThrowing || isStart) setupCatch();
  const source = {
    id,
    type,
    reference: { ...reference,
      referenceType: 'message'
    },
    execute: isThrowing ? executeThrow : executeCatch
  };
  return source;

  function executeCatch(executeMessage) {
    let completed;
    const messageContent = (0, _messageHelper.cloneContent)(executeMessage.content);
    const {
      executionId,
      parent
    } = messageContent;
    const parentExecutionId = parent && parent.executionId;
    const {
      message: referenceMessage,
      description
    } = resolveReference(executeMessage);
    broker.consume(messageQueueName, onCatchMessage, {
      noAck: true,
      consumerTag: `_onmessage-${executionId}`
    });
    if (completed) return;
    broker.subscribeTmp('api', `activity.#.${executionId}`, onApiMessage, {
      noAck: true,
      consumerTag: `_api-${executionId}`,
      priority: 400
    });
    if (parentExecutionId) broker.subscribeTmp('api', `activity.#.${parentExecutionId}`, onApiMessage, {
      noAck: true,
      consumerTag: `_api-parent-${executionId}`,
      priority: 400
    });
    broker.subscribeTmp('api', '#.signal.*', onCatchMessage, {
      noAck: true,
      consumerTag: `_api-delegated-${executionId}`
    });
    debug(`<${executionId} (${id})> expect ${description}`);
    broker.publish('event', 'activity.wait', { ...messageContent,
      executionId: parentExecutionId || executionId,
      parent: (0, _messageHelper.shiftParent)(parent),
      message: { ...referenceMessage
      }
    });

    function onCatchMessage(routingKey, message) {
      if ((0, _getPropertyValue.default)(message, 'content.message.id') !== referenceMessage.id) return;
      const {
        type: messageType,
        correlationId
      } = message.properties;
      broker.publish('event', 'activity.consumed', (0, _messageHelper.cloneContent)(messageContent, {
        message: { ...message.content.message
        }
      }), {
        correlationId,
        type: messageType
      });
      complete('caught', message.content.message, {
        correlationId
      });
    }

    function onApiMessage(routingKey, message) {
      const {
        type: messageType,
        correlationId
      } = message.properties;

      switch (messageType) {
        case 'message':
        case 'signal':
          {
            return complete('got signal with', message.content.message, {
              correlationId
            });
          }

        case 'discard':
          {
            completed = true;
            stop();
            return broker.publish('execution', 'execute.discard', { ...messageContent
            }, {
              correlationId
            });
          }

        case 'stop':
          {
            return stop();
          }
      }
    }

    function complete(verb, output, options) {
      completed = true;
      stop();
      debug(`<${executionId} (${id})> ${verb} ${description}`);
      broker.publish('event', 'activity.catch', { ...messageContent,
        message: { ...output
        },
        executionId: parentExecutionId || executionId,
        parent: (0, _messageHelper.shiftParent)(executeMessage.content.parent)
      }, {
        type: 'catch'
      });
      return broker.publish('execution', 'execute.completed', { ...messageContent,
        output,
        state: 'catch'
      }, options);
    }

    function stop() {
      broker.cancel(`_onmessage-${executionId}`);
      broker.cancel(`_api-${executionId}`);
      broker.cancel(`_api-parent-${executionId}`);
      broker.cancel(`_api-delegated-${executionId}`);
      broker.purgeQueue(messageQueueName);
    }
  }

  function executeThrow(executeMessage) {
    const messageContent = (0, _messageHelper.cloneContent)(executeMessage.content);
    const {
      executionId,
      parent
    } = messageContent;
    const parentExecutionId = parent && parent.executionId;
    const {
      message: referenceMessage,
      description
    } = resolveReference(executeMessage);
    debug(`<${executionId} (${id})> message ${description}`);
    broker.publish('event', 'activity.message', { ...(0, _messageHelper.cloneContent)(messageContent),
      executionId: parentExecutionId || executionId,
      parent: (0, _messageHelper.shiftParent)(parent),
      message: { ...messageContent.input,
        ...referenceMessage
      },
      state: 'throw'
    }, {
      type: 'message',
      delegate: true
    });
    return broker.publish('execution', 'execute.completed', { ...messageContent
    });
  }

  function resolveReference(message) {
    if (!referenceElement) {
      return {
        message: { ...reference
        },
        description: 'anonymous message'
      };
    }

    const result = {
      message: referenceElement.resolve(message)
    };
    result.description = `${result.message.name} <${result.message.id}>`;
    return result;
  }

  function setupCatch() {
    broker.assertQueue(messageQueueName, {
      autoDelete: false,
      durable: true
    });
    broker.bindQueue(messageQueueName, 'api', '*.message.#', {
      durable: true
    });
  }
}
},{"../getPropertyValue":45,"../messageHelper":52,"../shared":55}],30:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = SignalEventDefinition;

var _getPropertyValue = _interopRequireDefault(require("../getPropertyValue"));

var _shared = require("../shared");

var _messageHelper = require("../messageHelper");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function SignalEventDefinition(activity, eventDefinition) {
  const {
    id,
    broker,
    environment,
    isStart,
    isThrowing,
    getActivityById
  } = activity;
  const {
    type,
    behaviour = {}
  } = eventDefinition;
  const {
    debug
  } = environment.Logger(type.toLowerCase());
  const reference = behaviour.signalRef || {
    name: 'anonymous'
  };
  const referenceElement = reference.id && getActivityById(reference.id);
  const signalId = referenceElement ? referenceElement.id : 'anonymous';
  const signalQueueName = `signal-${(0, _shared.brokerSafeId)(id)}-${(0, _shared.brokerSafeId)(signalId)}-q`;
  if (!isThrowing && isStart) setupCatch();
  const source = {
    id,
    type,
    reference: { ...reference,
      referenceType: 'signal'
    },
    execute: isThrowing ? executeThrow : executeCatch
  };
  return source;

  function executeCatch(executeMessage) {
    let completed;
    const messageContent = (0, _messageHelper.cloneContent)(executeMessage.content);
    const {
      executionId,
      parent
    } = messageContent;
    const parentExecutionId = parent && parent.executionId;
    const {
      message: referenceMessage,
      description
    } = resolveMessage(executeMessage);
    if (isStart) broker.consume(signalQueueName, onCatchSignal, {
      noAck: true,
      consumerTag: `_api-signal-${executionId}`
    });
    if (completed) return;
    broker.subscribeTmp('api', `activity.#.${parentExecutionId}`, onApiMessage, {
      noAck: true,
      consumerTag: `_api-parent-${parentExecutionId}`
    });
    broker.subscribeTmp('api', `activity.#.${executionId}`, onApiMessage, {
      noAck: true,
      consumerTag: `_api-${executionId}`
    });
    broker.subscribeTmp('api', '#.signal.*', onCatchSignal, {
      noAck: true,
      consumerTag: `_api-delegated-${executionId}`
    });
    debug(`<${executionId} (${id})> expect ${description}`);
    broker.publish('event', 'activity.wait', { ...messageContent,
      executionId: parentExecutionId,
      parent: (0, _messageHelper.shiftParent)(parent),
      signal: { ...referenceMessage
      }
    });

    function onCatchSignal(routingKey, message) {
      if ((0, _getPropertyValue.default)(message, 'content.message.id') !== referenceMessage.id) return;
      completed = true;
      stop();
      const {
        type: messageType,
        correlationId
      } = message.properties;
      broker.publish('event', 'activity.consumed', (0, _messageHelper.cloneContent)(messageContent, {
        message: { ...message.content.message
        }
      }), {
        correlationId,
        type: messageType
      });
      return complete(message.content.message, message.properties);
    }

    function onApiMessage(routingKey, message) {
      const {
        type: messageType,
        correlationId
      } = message.properties;

      switch (messageType) {
        case 'signal':
          {
            return complete(message.content.message, {
              correlationId
            });
          }

        case 'discard':
          {
            completed = true;
            stop();
            return broker.publish('execution', 'execute.discard', { ...messageContent
            }, {
              correlationId
            });
          }

        case 'stop':
          {
            stop();
            break;
          }
      }
    }

    function complete(output, options) {
      completed = true;
      stop();
      debug(`<${executionId} (${id})> signaled with`, description);
      return broker.publish('execution', 'execute.completed', { ...messageContent,
        output,
        state: 'signal'
      }, options);
    }

    function stop() {
      broker.cancel(`_api-signal-${executionId}`);
      broker.cancel(`_api-parent-${parentExecutionId}`);
      broker.cancel(`_api-${executionId}`);
      broker.cancel(`_api-delegated-${executionId}`);
      if (isStart) broker.purgeQueue(signalQueueName);
    }
  }

  function executeThrow(executeMessage) {
    const messageContent = (0, _messageHelper.cloneContent)(executeMessage.content);
    const {
      executionId,
      parent
    } = messageContent;
    const parentExecutionId = parent && parent.executionId;
    const {
      message: referenceMessage,
      description
    } = resolveMessage(executeMessage);
    debug(`<${executionId} (${id})> throw ${description}`);
    broker.publish('event', 'activity.signal', { ...(0, _messageHelper.cloneContent)(messageContent),
      executionId: parentExecutionId,
      parent: (0, _messageHelper.shiftParent)(parent),
      message: { ...messageContent.input,
        ...referenceMessage
      },
      state: 'throw'
    }, {
      type: 'signal'
    });
    return broker.publish('execution', 'execute.completed', messageContent);
  }

  function resolveMessage(message) {
    if (!referenceElement) {
      return {
        message: { ...reference
        },
        description: 'anonymous signal'
      };
    }

    const result = {
      message: referenceElement.resolve(message)
    };
    result.description = `${result.message.name} <${result.message.id}>`;
    return result;
  }

  function setupCatch() {
    broker.assertQueue(signalQueueName, {
      autoDelete: false,
      durable: true
    });
    broker.bindQueue(signalQueueName, 'api', '*.signal.#', {
      durable: true
    });
  }
}
},{"../getPropertyValue":45,"../messageHelper":52,"../shared":55}],31:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = TerminateEventDefinition;

var _messageHelper = require("../messageHelper");

function TerminateEventDefinition(activity, eventDefinition = {}) {
  const {
    id,
    broker,
    environment
  } = activity;
  const {
    type = 'terminateeventdefinition'
  } = eventDefinition;
  const {
    debug
  } = environment.Logger(type.toLowerCase());
  const source = {
    id,
    type,
    execute
  };
  return source;

  function execute(executeMessage) {
    const content = (0, _messageHelper.cloneContent)(executeMessage.content);
    const terminateContent = (0, _messageHelper.cloneContent)(content);
    terminateContent.parent = (0, _messageHelper.shiftParent)(terminateContent.parent);
    terminateContent.state = 'terminate';
    debug(`<${content.executionId} (${content.id})> terminate`);
    broker.publish('event', 'process.terminate', terminateContent, {
      type: 'terminate'
    });
    broker.publish('execution', 'execute.completed', content);
  }
}
},{"../messageHelper":52}],32:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = TimerEventDefinition;

var _messageHelper = require("../messageHelper");

var _iso8601Duration = require("iso8601-duration");

function TimerEventDefinition(activity, eventDefinition) {
  const {
    id,
    broker,
    environment
  } = activity;
  const {
    type = 'TimerEventDefinition',
    behaviour = {}
  } = eventDefinition;
  const logger = environment.Logger(type.toLowerCase());
  const {
    timeDuration,
    timeCycle,
    timeDate
  } = behaviour;
  const foundTimers = { ...(timeDuration ? {
      timeDuration
    } : undefined),
    ...(timeCycle ? {
      timeCycle
    } : undefined),
    ...(timeDate ? {
      timeDate
    } : undefined)
  };
  let stopped = false;
  let timerRef;
  const source = {
    type,
    ...foundTimers,
    execute,

    stop() {
      if (timerRef) timerRef = environment.timers.clearTimeout(timerRef);
    }

  };
  Object.defineProperty(source, 'timer', {
    get() {
      return timerRef;
    }

  });
  return source;

  function execute(executeMessage) {
    const {
      routingKey: executeKey,
      redelivered: isResumed
    } = executeMessage.fields;
    const running = !!timerRef;

    if (running && executeKey === 'execute.timer') {
      return;
    }

    if (timerRef) timerRef = environment.timers.clearTimeout(timerRef);
    stopped = false;
    const {
      executionId
    } = executeMessage.content;
    const messageContent = executeMessage.content;
    const startedAt = 'startedAt' in messageContent ? new Date(messageContent.startedAt) : new Date();
    const resolvedTimer = getTimers(foundTimers, executeMessage);
    const timerContent = (0, _messageHelper.cloneContent)(messageContent, { ...resolvedTimer,
      ...(isResumed ? {
        isResumed
      } : undefined),
      startedAt,
      state: 'timer'
    });
    broker.subscribeTmp('api', `activity.#.${executionId}`, onApiMessage, {
      noAck: true,
      consumerTag: `_api-${executionId}`,
      priority: 400
    });
    broker.subscribeTmp('api', '#.cancel.*', onDelegatedApiMessage, {
      noAck: true,
      consumerTag: `_api-delegated-${executionId}`
    });
    broker.publish('execution', 'execute.timer', timerContent);
    broker.publish('event', 'activity.timer', (0, _messageHelper.cloneContent)(timerContent));
    if (stopped) return;
    if (timerContent.timeout === undefined) return logger.debug(`<${executionId} (${id})> waiting for ${timerContent.timerType || 'signal'}`);
    if (timerContent.timeout <= 0) return completed();
    const timers = environment.timers.register(timerContent);
    timerRef = timers.setTimeout(completed, timerContent.timeout, (0, _messageHelper.cloneMessage)(executeMessage, timerContent));

    function completed(completeContent, options) {
      stop();
      const stoppedAt = new Date();
      const runningTime = stoppedAt.getTime() - startedAt.getTime();
      logger.debug(`<${executionId} (${id})> completed in ${runningTime}ms`);
      const completedContent = { ...timerContent,
        stoppedAt,
        runningTime,
        state: 'timeout',
        ...completeContent
      };
      broker.publish('event', 'activity.timeout', (0, _messageHelper.cloneContent)(messageContent, completedContent), options);
      broker.publish('execution', 'execute.completed', (0, _messageHelper.cloneContent)(messageContent, completedContent), options);
    }

    function onDelegatedApiMessage(routingKey, message) {
      if (!message.properties.delegate) return;
      const {
        content: delegateContent
      } = message;
      if (!delegateContent.message) return;
      const {
        id: signalId,
        executionId: signalExecutionId
      } = delegateContent.message;
      if (signalId !== id && signalExecutionId !== executionId) return;
      if (signalExecutionId && signalId === id && signalExecutionId !== executionId) return;
      const {
        type: messageType,
        correlationId
      } = message.properties;
      broker.publish('event', 'activity.consumed', (0, _messageHelper.cloneContent)(timerContent, {
        message: { ...delegateContent.message
        }
      }), {
        correlationId,
        type: messageType
      });
      return onApiMessage(routingKey, message);
    }

    function onApiMessage(routingKey, message) {
      const {
        type: messageType,
        correlationId
      } = message.properties;

      switch (messageType) {
        case 'cancel':
          {
            stop();
            return completed({
              state: 'cancel',
              ...(message.content.message ? {
                message: message.content.message
              } : undefined)
            }, {
              correlationId
            });
          }

        case 'stop':
          {
            stop();
            return logger.debug(`<${executionId} (${id})> stopped`);
          }

        case 'discard':
          {
            stop();
            logger.debug(`<${executionId} (${id})> discarded`);
            return broker.publish('execution', 'execute.discard', (0, _messageHelper.cloneContent)(timerContent, {
              state: 'discard'
            }), {
              correlationId
            });
          }
      }
    }

    function stop() {
      stopped = true;
      if (timerRef) timerRef = environment.timers.clearTimeout(timerRef);
      broker.cancel(`_api-${executionId}`);
      broker.cancel(`_api-delegated-${executionId}`);
    }
  }

  function getTimers(timers, executionMessage) {
    const content = executionMessage.content;
    let expireAt;

    if ('expireAt' in content) {
      expireAt = new Date(content.expireAt);
    }

    const now = Date.now();
    const timerContent = ['timeDuration', 'timeDate', 'timeCycle'].reduce((result, t) => {
      if (t in content) result[t] = content[t];else if (t in timers) result[t] = environment.resolveExpression(timers[t], executionMessage);else return result;
      let expireAtDate;

      switch (t) {
        case 'timeDuration':
          {
            const durationStr = result[t];

            if (durationStr) {
              const delay = getDurationInMilliseconds(durationStr);
              if (delay !== undefined) expireAtDate = new Date(now + delay);
            } else {
              expireAtDate = new Date(now);
            }

            break;
          }

        case 'timeDate':
          {
            const dateStr = result[t];

            if (dateStr) {
              const ms = Date.parse(dateStr);

              if (isNaN(ms)) {
                logger.warn(`<${content.executionId} (${id})> invalid timeDate >${dateStr}<`);
                break;
              }

              expireAtDate = new Date(ms);
            } else {
              expireAtDate = new Date(now);
            }

            break;
          }
      }

      if (!expireAtDate) return result;

      if (!('expireAt' in result) || result.expireAt > expireAtDate) {
        result.timerType = t;
        result.expireAt = expireAtDate;
      }

      return result;
    }, { ...(expireAt ? {
        expireAt
      } : undefined)
    });

    if ('expireAt' in timerContent) {
      timerContent.timeout = timerContent.expireAt - now;
    } else if ('timeout' in content) {
      timerContent.timeout = content.timeout;
    } else if (!Object.keys(timerContent).length) {
      timerContent.timeout = 0;
    }

    return timerContent;

    function getDurationInMilliseconds(duration) {
      try {
        return (0, _iso8601Duration.toSeconds)((0, _iso8601Duration.parse)(duration)) * 1000;
      } catch (err) {
        logger.warn(`<${content.executionId} (${id})> failed to parse timeDuration >${duration}<: ${err.message}`);
      }
    }
  }
}
},{"../messageHelper":52,"iso8601-duration":77}],33:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = BoundaryEvent;
exports.BoundaryEventBehaviour = BoundaryEventBehaviour;

var _Activity = _interopRequireDefault(require("../activity/Activity"));

var _EventDefinitionExecution = _interopRequireDefault(require("../eventDefinitions/EventDefinitionExecution"));

var _messageHelper = require("../messageHelper");

var _shared = require("../shared");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function BoundaryEvent(activityDef, context) {
  return (0, _Activity.default)(BoundaryEventBehaviour, activityDef, context);
}

function BoundaryEventBehaviour(activity) {
  const {
    id,
    type = 'BoundaryEvent',
    broker,
    environment,
    attachedTo,
    behaviour = {},
    eventDefinitions,
    logger
  } = activity;
  const attachedToId = attachedTo.id;
  const cancelActivity = 'cancelActivity' in behaviour ? behaviour.cancelActivity : true;
  const eventDefinitionExecution = eventDefinitions && (0, _EventDefinitionExecution.default)(activity, eventDefinitions, 'execute.bound.completed');
  return {
    id,
    type,
    attachedTo,
    cancelActivity,
    execute
  };

  function execute(executeMessage) {
    const executeContent = (0, _messageHelper.cloneContent)(executeMessage.content);
    const {
      isRootScope,
      executionId,
      inbound
    } = executeContent;
    let parentExecutionId, completeContent;
    const errorConsumerTags = [];
    const shovels = [];

    if (isRootScope) {
      parentExecutionId = executionId;

      if (eventDefinitionExecution && !environment.settings.strict) {
        broker.subscribeTmp('execution', 'execute.expect', onExpectMessage, {
          noAck: true,
          consumerTag: '_expect-tag'
        });
      }

      attachedTo.broker.subscribeTmp('event', 'activity.leave', onAttachedLeave, {
        noAck: true,
        consumerTag: `_bound-listener-${parentExecutionId}`,
        priority: 300
      });
      broker.subscribeOnce('execution', 'execute.detach', onDetachMessage, {
        consumerTag: '_detach-tag'
      });
      broker.subscribeOnce('api', `activity.#.${parentExecutionId}`, onApiMessage, {
        consumerTag: `_api-${parentExecutionId}`
      });
      broker.subscribeOnce('execution', 'execute.bound.completed', onCompleted, {
        consumerTag: `_execution-completed-${parentExecutionId}`
      });
    }

    if (eventDefinitionExecution) eventDefinitionExecution.execute(executeMessage);

    function onCompleted(_, message) {
      if (!cancelActivity && !message.content.cancelActivity) {
        stop();
        return broker.publish('execution', 'execute.completed', (0, _messageHelper.cloneContent)(message.content));
      }

      completeContent = message.content;
      const attachedToContent = inbound && inbound[0];
      logger.debug(`<${executionId} (id)> cancel ${attachedTo.status} activity <${attachedToContent.executionId} (${attachedToContent.id})>`);
      attachedTo.getApi({
        content: attachedToContent
      }).discard();
    }

    function onAttachedLeave(routingKey, message) {
      if (message.content.id !== attachedToId) return;
      stop();
      if (!completeContent) return broker.publish('execution', 'execute.discard', executeContent);
      return broker.publish('execution', 'execute.completed', completeContent);
    }

    function onExpectMessage(_, message) {
      const errorConsumerTag = `_bound-error-listener-${message.content.executionId}`;
      errorConsumerTags.push(errorConsumerTag);
      attachedTo.broker.subscribeTmp('event', 'activity.error', attachedErrorHandler(message.content.expectRoutingKey), {
        noAck: true,
        consumerTag: errorConsumerTag,
        priority: 300
      });
    }

    function attachedErrorHandler(routingKey) {
      return function onAttachedError(_, message) {
        if (message.content.id !== attachedToId) return;
        broker.publish('execution', routingKey, (0, _messageHelper.cloneContent)(message.content));
      };
    }

    function onDetachMessage(_, {
      content
    }) {
      logger.debug(`<${parentExecutionId} (${id})> detach from activity <${attachedTo.id}>`);
      stop(true);
      const {
        executionId: detachId,
        bindExchange,
        sourceExchange = 'execution',
        sourcePattern
      } = content;
      const shovelName = `_detached-${(0, _shared.brokerSafeId)(id)}_${detachId}`;
      shovels.push(shovelName);
      attachedTo.broker.createShovel(shovelName, {
        exchange: sourceExchange,
        pattern: sourcePattern
      }, {
        broker,
        exchange: bindExchange
      }, {
        cloneMessage: _messageHelper.cloneMessage
      });
      broker.subscribeOnce('execution', 'execute.bound.completed', onDetachedCompleted, {
        consumerTag: `_execution-completed-${parentExecutionId}`
      });
    }

    function onDetachedCompleted(_, message) {
      stop();
      return broker.publish('execution', 'execute.completed', (0, _messageHelper.cloneContent)(message.content));
    }

    function onApiMessage(_, message) {
      const messageType = message.properties.type;

      switch (messageType) {
        case 'discard':
          stop();
          break;

        case 'stop':
          stop();
          break;
      }
    }

    function stop(detach) {
      attachedTo.broker.cancel(`_bound-listener-${parentExecutionId}`);
      attachedTo.broker.cancel(`_bound-error-listener-${parentExecutionId}`);
      errorConsumerTags.splice(0).forEach(tag => attachedTo.broker.cancel(tag));
      shovels.splice(0).forEach(shovelName => attachedTo.broker.closeShovel(shovelName));
      broker.cancel('_expect-tag');
      broker.cancel('_detach-tag');
      broker.cancel(`_execution-completed-${parentExecutionId}`);
      if (detach) return;
      broker.cancel(`_api-${parentExecutionId}`);
    }
  }
}
},{"../activity/Activity":11,"../eventDefinitions/EventDefinitionExecution":27,"../messageHelper":52,"../shared":55}],34:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = EndEvent;
exports.EndEventBehaviour = EndEventBehaviour;

var _Activity = _interopRequireDefault(require("../activity/Activity"));

var _EventDefinitionExecution = _interopRequireDefault(require("../eventDefinitions/EventDefinitionExecution"));

var _messageHelper = require("../messageHelper");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function EndEvent(activityDef, context) {
  return (0, _Activity.default)(EndEventBehaviour, { ...activityDef,
    isThrowing: true
  }, context);
}

function EndEventBehaviour(activity) {
  const {
    id,
    type,
    broker,
    eventDefinitions
  } = activity;
  const eventDefinitionExecution = eventDefinitions && (0, _EventDefinitionExecution.default)(activity, eventDefinitions);
  const source = {
    id,
    type,
    execute
  };
  return source;

  function execute(executeMessage) {
    if (eventDefinitionExecution) {
      return eventDefinitionExecution.execute(executeMessage);
    }

    return broker.publish('execution', 'execute.completed', (0, _messageHelper.cloneContent)(executeMessage.content));
  }
}
},{"../activity/Activity":11,"../eventDefinitions/EventDefinitionExecution":27,"../messageHelper":52}],35:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = IntermediateCatchEvent;
exports.IntermediateCatchEventBehaviour = IntermediateCatchEventBehaviour;

var _Activity = _interopRequireDefault(require("../activity/Activity"));

var _EventDefinitionExecution = _interopRequireDefault(require("../eventDefinitions/EventDefinitionExecution"));

var _messageHelper = require("../messageHelper");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IntermediateCatchEvent(activityDef, context) {
  return (0, _Activity.default)(IntermediateCatchEventBehaviour, activityDef, context);
}

function IntermediateCatchEventBehaviour(activity) {
  const {
    id,
    type,
    broker,
    eventDefinitions
  } = activity;
  const eventDefinitionExecution = eventDefinitions && (0, _EventDefinitionExecution.default)(activity, eventDefinitions);
  const source = {
    id,
    type,
    execute
  };
  return source;

  function execute(executeMessage) {
    if (eventDefinitionExecution) {
      return eventDefinitionExecution.execute(executeMessage);
    }

    const content = (0, _messageHelper.cloneContent)(executeMessage.content);
    const {
      executionId
    } = content;
    broker.subscribeTmp('api', `activity.#.${executionId}`, onApiMessage, {
      noAck: true,
      consumerTag: `_api-${executionId}`
    });
    return broker.publish('event', 'activity.wait', (0, _messageHelper.cloneContent)(content));

    function onApiMessage(routingKey, message) {
      const messageType = message.properties.type;

      switch (messageType) {
        case 'message':
        case 'signal':
          {
            return complete(message.content.message);
          }

        case 'discard':
          {
            stop();
            return broker.publish('execution', 'execute.discard', (0, _messageHelper.cloneContent)(content));
          }

        case 'stop':
          {
            return stop();
          }
      }
    }

    function complete(output) {
      stop();
      return broker.publish('execution', 'execute.completed', (0, _messageHelper.cloneContent)(content, {
        output
      }));
    }

    function stop() {
      broker.cancel(`_api-${executionId}`);
    }
  }
}
},{"../activity/Activity":11,"../eventDefinitions/EventDefinitionExecution":27,"../messageHelper":52}],36:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = IntermediateThrowEvent;
exports.IntermediateThrowEventBehaviour = IntermediateThrowEventBehaviour;

var _Activity = _interopRequireDefault(require("../activity/Activity"));

var _EventDefinitionExecution = _interopRequireDefault(require("../eventDefinitions/EventDefinitionExecution"));

var _messageHelper = require("../messageHelper");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IntermediateThrowEvent(activityDef, context) {
  return (0, _Activity.default)(IntermediateThrowEventBehaviour, { ...activityDef,
    isThrowing: true
  }, context);
}

function IntermediateThrowEventBehaviour(activity) {
  const {
    id,
    type,
    broker,
    eventDefinitions
  } = activity;
  const eventDefinitionExecution = eventDefinitions && (0, _EventDefinitionExecution.default)(activity, eventDefinitions);
  const source = {
    id,
    type,
    execute
  };
  return source;

  function execute(executeMessage) {
    if (eventDefinitionExecution) {
      return eventDefinitionExecution.execute(executeMessage);
    }

    return broker.publish('execution', 'execute.completed', (0, _messageHelper.cloneContent)(executeMessage.content));
  }
}
},{"../activity/Activity":11,"../eventDefinitions/EventDefinitionExecution":27,"../messageHelper":52}],37:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = StartEvent;
exports.StartEventBehaviour = StartEventBehaviour;

var _Activity = _interopRequireDefault(require("../activity/Activity"));

var _EventDefinitionExecution = _interopRequireDefault(require("../eventDefinitions/EventDefinitionExecution"));

var _messageHelper = require("../messageHelper");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function StartEvent(activityDef, context) {
  return (0, _Activity.default)(StartEventBehaviour, activityDef, context);
}

function StartEventBehaviour(activity) {
  const {
    id,
    type = 'startevent',
    broker,
    eventDefinitions
  } = activity;
  const eventDefinitionExecution = eventDefinitions && (0, _EventDefinitionExecution.default)(activity, eventDefinitions);
  const event = {
    id,
    type,
    execute
  };
  return event;

  function execute(executeMessage) {
    if (eventDefinitionExecution) {
      return eventDefinitionExecution.execute(executeMessage);
    }

    const content = (0, _messageHelper.cloneContent)(executeMessage.content);

    if (!content.form) {
      return broker.publish('execution', 'execute.completed', content);
    }

    const {
      executionId
    } = content;
    broker.subscribeTmp('api', `activity.#.${executionId}`, onApiMessage, {
      noAck: true,
      consumerTag: `_api-${executionId}`,
      priority: 300
    });
    broker.subscribeTmp('api', '#.signal.*', onDelegatedApiMessage, {
      noAck: true,
      consumerTag: `_api-delegated-${executionId}`
    });
    broker.publish('event', 'activity.wait', { ...content,
      executionId,
      state: 'wait'
    });

    function onDelegatedApiMessage(routingKey, message) {
      if (!message.properties.delegate) return;
      const {
        content: delegateContent
      } = message;
      if (!delegateContent || !delegateContent.message) return;
      const {
        id: signalId,
        executionId: signalExecutionId
      } = delegateContent.message;
      if (signalId !== id && signalExecutionId !== executionId) return;
      const {
        type: messageType,
        correlationId
      } = message.properties;
      broker.publish('event', 'activity.consumed', (0, _messageHelper.cloneContent)(content, {
        message: { ...delegateContent.message
        }
      }), {
        correlationId,
        type: messageType
      });
      return onApiMessage(routingKey, message);
    }

    function onApiMessage(routingKey, message) {
      const {
        type: messageType,
        correlationId
      } = message.properties;

      switch (messageType) {
        case 'stop':
          return stop();

        case 'signal':
          stop();
          return broker.publish('execution', 'execute.completed', (0, _messageHelper.cloneContent)(content, {
            output: message.content.message,
            state: 'signal'
          }), {
            correlationId
          });

        case 'discard':
          stop();
          return broker.publish('execution', 'execute.discard', (0, _messageHelper.cloneContent)(content), {
            correlationId
          });
      }
    }

    function stop() {
      broker.cancel(`_api-${executionId}`);
      broker.cancel(`_api-delegated-${executionId}`);
    }
  }
}
},{"../activity/Activity":11,"../eventDefinitions/EventDefinitionExecution":27,"../messageHelper":52}],38:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Association;

var _messageHelper = require("../messageHelper");

var _EventBroker = require("../EventBroker");

var _Api = require("../Api");

var _shared = require("../shared");

function Association(associationDef, {
  environment
}) {
  const {
    id,
    type = 'association',
    name,
    parent: originalParent,
    targetId,
    sourceId,
    behaviour = {}
  } = associationDef;
  const parent = (0, _messageHelper.cloneParent)(originalParent);
  const logger = environment.Logger(type.toLowerCase());
  const counters = {
    complete: 0,
    take: 0,
    discard: 0
  };
  const associationApi = {
    id,
    type,
    name,
    parent,
    behaviour,
    sourceId,
    targetId,
    isAssociation: true,
    environment,

    get counters() {
      return { ...counters
      };
    },

    complete,
    discard,
    getApi,
    getState,
    recover,
    stop,
    take
  };
  const {
    broker,
    on,
    once,
    waitFor
  } = (0, _EventBroker.EventBroker)(associationApi, {
    prefix: 'association',
    durable: true,
    autoDelete: false
  });
  associationApi.on = on;
  associationApi.once = once;
  associationApi.waitFor = waitFor;
  Object.defineProperty(associationApi, 'broker', {
    enumerable: true,
    get: () => broker
  });
  logger.debug(`<${id}> init, <${sourceId}> -> <${targetId}>`);
  return associationApi;

  function take(content = {}) {
    logger.debug(`<${id}> take target <${targetId}>`);
    ++counters.take;
    publishEvent('take', content);
    return true;
  }

  function discard(content = {}) {
    logger.debug(`<${id}> discard target <${targetId}>`);
    ++counters.discard;
    publishEvent('discard', content);
    return true;
  }

  function complete(content = {}) {
    logger.debug(`<${id}> completed target <${targetId}>`);
    ++counters.complete;
    publishEvent('complete', content);
    return true;
  }

  function publishEvent(action, content) {
    const eventContent = createMessageContent({
      action,
      message: content,
      sequenceId: (0, _shared.getUniqueId)(id)
    });
    broker.publish('event', `association.${action}`, eventContent, {
      type: action
    });
  }

  function createMessageContent(override = {}) {
    return { ...override,
      id,
      type,
      name,
      sourceId,
      targetId,
      isAssociation: true,
      parent: (0, _messageHelper.cloneParent)(parent)
    };
  }

  function getState() {
    return {
      id,
      type,
      name,
      sourceId,
      targetId,
      counters: { ...counters
      },
      broker: broker.getState(true)
    };
  }

  function recover(state) {
    Object.assign(counters, state.counters);
    broker.recover(state.broker);
  }

  function getApi(message) {
    return (0, _Api.FlowApi)(broker, message || {
      content: createMessageContent()
    });
  }

  function stop() {
    broker.stop();
  }
}
},{"../Api":2,"../EventBroker":5,"../messageHelper":52,"../shared":55}],39:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = MessageFlow;

var _shared = require("../shared");

var _messageHelper = require("../messageHelper");

var _EventBroker = require("../EventBroker");

function MessageFlow(flowDef, context) {
  const {
    id,
    type = 'message',
    name,
    target,
    source,
    behaviour,
    parent
  } = flowDef;
  const sourceElement = context.getActivityById(source.id) || context.getProcessById(source.processId);
  const sourceEndConsumerTag = `_message-on-end-${(0, _shared.brokerSafeId)(id)}`;
  const sourceMessageConsumerTag = `_message-on-message-${(0, _shared.brokerSafeId)(id)}`;
  const {
    debug
  } = context.environment.Logger(type.toLowerCase());
  if (!sourceElement) return;
  const counters = {
    messages: 0,
    discard: 0
  };
  const flowApi = {
    id,
    type,
    name,
    target,
    source,
    behaviour,

    get counters() {
      return { ...counters
      };
    },

    activate,
    deactivate,
    getApi,
    getState,
    recover,
    resume,
    stop
  };
  const {
    broker,
    on,
    once,
    emit,
    waitFor
  } = (0, _EventBroker.MessageFlowBroker)(flowApi);
  flowApi.on = on;
  flowApi.once = once;
  flowApi.emit = emit;
  flowApi.waitFor = waitFor;
  Object.defineProperty(flowApi, 'broker', {
    enumerable: true,
    get: () => broker
  });
  return flowApi;

  function onSourceEnd({
    content
  }) {
    ++counters.messages;
    debug(`<${id}> sending message from <${source.processId}.${source.id}> to`, target.id ? `<${target.processId}.${target.id}>` : `<${target.processId}>`);
    broker.publish('event', 'message.outbound', createMessage(content.message));
  }

  function onSourceMessage() {
    deactivate();
  }

  function createMessage(message) {
    return {
      id,
      type,
      name,
      source: { ...source
      },
      target: { ...target
      },
      parent: parent && (0, _messageHelper.cloneParent)(parent),
      message
    };
  }

  function stop() {
    deactivate();
    broker.stop();
  }

  function getState() {
    return {
      id,
      type,
      counters: { ...counters
      }
    };
  }

  function recover(state) {
    Object.assign(counters, state.counters);
    broker.recover(state.broker);
  }

  function resume() {
    broker.resume();
  }

  function getApi() {
    return flowApi;
  }

  function activate() {
    sourceElement.on('message', onSourceMessage, {
      consumerTag: sourceMessageConsumerTag
    });
    sourceElement.on('end', onSourceEnd, {
      consumerTag: sourceEndConsumerTag
    });
  }

  function deactivate() {
    sourceElement.broker.cancel(sourceMessageConsumerTag);
    sourceElement.broker.cancel(sourceEndConsumerTag);
  }
}
},{"../EventBroker":5,"../messageHelper":52,"../shared":55}],40:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = SequenceFlow;

var _ExecutionScope = _interopRequireDefault(require("../activity/ExecutionScope"));

var _messageHelper = require("../messageHelper");

var _shared = require("../shared");

var _EventBroker = require("../EventBroker");

var _Api = require("../Api");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function SequenceFlow(flowDef, {
  environment
}) {
  const {
    id,
    type = 'sequenceflow',
    name,
    parent: originalParent,
    targetId,
    sourceId,
    isDefault,
    behaviour = {}
  } = flowDef;
  const parent = (0, _messageHelper.cloneParent)(originalParent);
  const logger = environment.Logger(type.toLowerCase());
  const flowBase = {
    id,
    type,
    name,
    parent,
    behaviour,
    sourceId,
    targetId,
    isDefault,
    isSequenceFlow: true,
    environment,
    logger
  };
  environment.registerScript({ ...flowBase
  });
  let counters = {
    looped: 0,
    take: 0,
    discard: 0
  };
  const flowApi = { ...flowBase,

    get counters() {
      return { ...counters
      };
    },

    discard,
    getApi,
    getCondition,
    getState,
    recover,
    shake,
    stop,
    take
  };
  const {
    broker,
    on,
    once,
    waitFor,
    emitFatal
  } = (0, _EventBroker.EventBroker)(flowApi, {
    prefix: 'flow',
    durable: true,
    autoDelete: false
  });
  flowApi.on = on;
  flowApi.once = once;
  flowApi.waitFor = waitFor;
  Object.defineProperty(flowApi, 'broker', {
    enumerable: true,
    get: () => broker
  });
  logger.debug(`<${id}> init, <${sourceId}> -> <${targetId}>`);
  return flowApi;

  function take(content = {}) {
    flowApi.looped = undefined;
    const {
      sequenceId
    } = content;
    logger.debug(`<${sequenceId} (${id})> take, target <${targetId}>`);
    ++counters.take;
    publishEvent('take', content);
    return true;
  }

  function discard(content = {}) {
    const {
      sequenceId = (0, _shared.getUniqueId)(id)
    } = content;
    const discardSequence = content.discardSequence = (content.discardSequence || []).slice();

    if (discardSequence.indexOf(targetId) > -1) {
      ++counters.looped;
      logger.debug(`<${id}> discard loop detected <${sourceId}> -> <${targetId}>. Stop.`);
      return publishEvent('looped', content);
    }

    discardSequence.push(sourceId);
    logger.debug(`<${sequenceId} (${id})> discard, target <${targetId}>`);
    ++counters.discard;
    publishEvent('discard', content);
  }

  function publishEvent(action, content) {
    const eventContent = createMessage({
      action,
      ...content
    });
    broker.publish('event', `flow.${action}`, eventContent, {
      type: action
    });
  }

  function createMessage(override) {
    return { ...override,
      id,
      type,
      name,
      sourceId,
      targetId,
      isSequenceFlow: true,
      isDefault,
      parent: (0, _messageHelper.cloneParent)(parent)
    };
  }

  function getState() {
    return {
      id,
      type,
      name,
      sourceId,
      targetId,
      isDefault,
      counters: { ...counters
      },
      broker: broker.getState(true)
    };
  }

  function recover(state) {
    counters = { ...counters,
      ...state.counters
    };
    broker.recover(state.broker);
  }

  function getApi(message) {
    return (0, _Api.FlowApi)(broker, message || {
      content: createMessage()
    });
  }

  function stop() {
    broker.stop();
  }

  function shake(message) {
    const content = (0, _messageHelper.cloneContent)(message.content);
    content.sequence = content.sequence || [];
    content.sequence.push({
      id,
      type,
      isSequenceFlow: true,
      targetId
    });
    if (content.id === targetId) return broker.publish('event', 'flow.shake.loop', content, {
      persistent: false,
      type: 'shake'
    });

    for (const s of message.content.sequence) {
      if (s.id === id) return broker.publish('event', 'flow.shake.loop', content, {
        persistent: false,
        type: 'shake'
      });
    }

    broker.publish('event', 'flow.shake', content, {
      persistent: false,
      type: 'shake'
    });
  }

  function getCondition() {
    const conditionExpression = behaviour.conditionExpression;
    if (!conditionExpression) return null;
    const {
      language
    } = conditionExpression;
    const script = environment.getScript(language, flowApi);

    if (script) {
      return ScriptCondition(script, language);
    }

    if (!conditionExpression.body) {
      const msg = language ? `Condition expression script ${language} is unsupported or was not registered` : 'Condition expression without body is unsupported';
      return emitFatal(new Error(msg), createMessage());
    }

    return ExpressionCondition(conditionExpression.body);
  }

  function ScriptCondition(script, language) {
    return {
      language,

      execute(message, callback) {
        try {
          return script.execute((0, _ExecutionScope.default)(flowApi, message), callback);
        } catch (err) {
          if (!callback) throw err;
          logger.error(`<${id}>`, err);
          callback(err);
        }
      }

    };
  }

  function ExpressionCondition(expression) {
    return {
      execute: (message, callback) => {
        try {
          const result = environment.resolveExpression(expression, createMessage(message));
          if (callback) return callback(null, result);
          return result;
        } catch (err) {
          if (callback) return callback(err);
          throw err;
        }
      }
    };
  }
}
},{"../Api":2,"../EventBroker":5,"../activity/ExecutionScope":15,"../messageHelper":52,"../shared":55}],41:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = EventBasedGateway;
exports.EventBasedGatewayBehaviour = EventBasedGatewayBehaviour;

var _Activity = _interopRequireDefault(require("../activity/Activity"));

var _messageHelper = require("../messageHelper");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function EventBasedGateway(activityDef, context) {
  return (0, _Activity.default)(EventBasedGatewayBehaviour, { ...activityDef
  }, context);
}

function EventBasedGatewayBehaviour(activity, context) {
  const {
    id,
    type,
    broker,
    logger,
    outbound: outboundSequenceFlows = []
  } = activity;
  let executing = false;
  const source = {
    id,
    type,
    execute
  };
  return source;

  function execute(executeMessage) {
    const isRedelivered = executeMessage.fields.redelivered;
    const content = executeMessage.content;
    const {
      executionId,
      outbound = [],
      outboundTaken
    } = content;
    const targets = [];

    for (let i = 0; i < outboundSequenceFlows.length; i++) {
      const flow = outboundSequenceFlows[i];
      targets.push(context.getActivityById(flow.targetId));
      outbound.push({
        id: flow.id,
        action: 'take'
      });
    }

    if (!targets.length) return complete(content);
    if (executing && outboundTaken) return;
    const targetConsumerTag = `_gateway-listener-${id}`;
    targets.forEach(target => {
      target.broker.subscribeOnce('event', 'activity.end', onTargetCompleted, {
        consumerTag: targetConsumerTag
      });
    });
    broker.subscribeOnce('api', `activity.stop.${executionId}`, stop, {
      noAck: true,
      consumerTag: `_api-stop-${executionId}`
    });
    executing = true;
    if (!isRedelivered) return broker.publish('execution', 'execute.outbound.take', (0, _messageHelper.cloneContent)(content, {
      outboundTaken: true
    }));

    function onTargetCompleted(_, message, owner) {
      const {
        id: targetId,
        exexutionId: targetExecutionId
      } = message.content;
      logger.debug(`<${executionId} (${id})> <${targetExecutionId}> completed run, discarding the rest`);
      targets.forEach(target => {
        if (target === owner) return;
        target.broker.cancel(targetConsumerTag);
        target.discard();
      });
      const completedContent = (0, _messageHelper.cloneContent)(executeMessage.content, {
        taken: {
          id: targetId,
          executionId: targetExecutionId
        },
        ignoreOutbound: true
      });
      complete(completedContent);
    }

    function complete(completedContent) {
      broker.publish('execution', 'execute.completed', completedContent);
    }

    function stop() {
      executing = false;
      targets.forEach(target => {
        target.broker.cancel(targetConsumerTag);
      });
      broker.cancel(`_api-stop-${executionId}`);
    }
  }
}
},{"../activity/Activity":11,"../messageHelper":52}],42:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ExclusiveGateway;
exports.ExclusiveGatewayBehaviour = ExclusiveGatewayBehaviour;

var _Activity = _interopRequireDefault(require("../activity/Activity"));

var _messageHelper = require("../messageHelper");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ExclusiveGateway(activityDef, context) {
  return (0, _Activity.default)(ExclusiveGatewayBehaviour, activityDef, context);
}

function ExclusiveGatewayBehaviour(activity) {
  const {
    id,
    type,
    broker
  } = activity;
  const source = {
    id,
    type,
    execute
  };
  return source;

  function execute({
    content
  }) {
    broker.publish('execution', 'execute.completed', (0, _messageHelper.cloneContent)(content, {
      outboundTakeOne: true
    }));
  }
}
},{"../activity/Activity":11,"../messageHelper":52}],43:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = InclusiveGateway;
exports.InclusiveGatewayBehaviour = InclusiveGatewayBehaviour;

var _Activity = _interopRequireDefault(require("../activity/Activity"));

var _messageHelper = require("../messageHelper");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function InclusiveGateway(activityDef, context) {
  return (0, _Activity.default)(InclusiveGatewayBehaviour, activityDef, context);
}

function InclusiveGatewayBehaviour(activity) {
  const {
    id,
    type,
    broker
  } = activity;
  const source = {
    id,
    type,
    execute
  };
  return source;

  function execute({
    content
  }) {
    broker.publish('execution', 'execute.completed', (0, _messageHelper.cloneContent)(content));
  }
}
},{"../activity/Activity":11,"../messageHelper":52}],44:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ParallelGateway;
exports.ParallelGatewayBehaviour = ParallelGatewayBehaviour;

var _Activity = _interopRequireDefault(require("../activity/Activity"));

var _messageHelper = require("../messageHelper");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ParallelGateway(activityDef, context) {
  return (0, _Activity.default)(ParallelGatewayBehaviour, { ...activityDef,
    isParallelGateway: true
  }, context);
}

function ParallelGatewayBehaviour(activity) {
  const {
    id,
    type,
    broker
  } = activity;
  const source = {
    id,
    type,
    execute
  };
  return source;

  function execute({
    content
  }) {
    broker.publish('execution', 'execute.completed', (0, _messageHelper.cloneContent)(content));
  }
}
},{"../activity/Activity":11,"../messageHelper":52}],45:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
const propertyPattern = /(\w+)\((.*?)(?:\))|(\.|\[|^)(.+?)(?:\]|\[|\.|$)/;
const stringConstantPattern = /^(['"])(.*)\1$/;
const numberConstantPattern = /^\W*-?\d+(.\d+)?\W*$/;
const negativeIndexPattern = /^-\d+$/;
var _default = getPropertyValue;
exports.default = _default;

function getPropertyValue(inputContext, propertyPath, fnScope) {
  if (!inputContext) return;
  let resultValue;
  let next = iterateProps(inputContext, inputContext, propertyPath.trim());

  while (next) {
    resultValue = next.getResult();
    next = next();
  }

  return resultValue;

  function iterateProps(base, iterateContext, iteratePropertyPath) {
    let result;
    const rest = iteratePropertyPath.replace(propertyPattern, (match, fnName, args, p, prop) => {
      if (fnName) {
        result = executeFn(getNamedValue(iterateContext, fnName), args, base);
      } else {
        result = getNamedValue(iterateContext, prop);
      }

      return '';
    });
    if (rest === iteratePropertyPath) return;
    if (result === undefined || result === null) return;

    const iterateNext = () => iterateProps(base, result, rest);

    iterateNext.getResult = () => {
      if (rest !== '') return;
      return result;
    };

    return iterateNext;
  }

  function executeFn(fn, args, base) {
    if (!fn) return;
    let callArguments = [];

    if (args) {
      callArguments = splitArguments(args, base, fnScope);
    } else {
      callArguments.push(base);
    }

    if (!fnScope) return fn.apply(null, callArguments);
    return function ScopedIIFE() {
      // eslint-disable-line no-extra-parens
      return fn.apply(this, callArguments);
    }.call(fnScope);
  }
}

function splitArguments(args, base, fnScope) {
  let insideString = false;
  let delimiter = '';
  let argCompleted = false;
  let arg = '';
  const callArguments = [];

  for (let i = 0; i < args.length; i++) {
    const charPos = args.charAt(i);

    if (!insideString) {
      if (charPos === ',') {
        argCompleted = true;
      } else if (charPos !== ' ') {
        arg += charPos;

        if (charPos === '\'' || charPos === '"') {
          insideString = true;
          delimiter = charPos;
        }
      }
    } else {
      arg += charPos;

      if (charPos === delimiter) {
        argCompleted = true;
        delimiter = '';
      }
    }

    if (argCompleted) {
      if (arg.length > 0) {
        callArguments.push(getFunctionArgument(base, arg.trim(), fnScope));
      }

      arg = '';
      insideString = false;
      argCompleted = false;
    }
  }

  if (arg.trim() !== '') {
    callArguments.push(getFunctionArgument(base, arg.trim(), fnScope));
  }

  return callArguments;
}

function getFunctionArgument(obj, argument, fnScope) {
  const stringMatch = argument.match(stringConstantPattern);

  if (stringMatch) {
    return stringMatch[2];
  } else if (numberConstantPattern.test(argument)) {
    return Number(argument);
  }

  switch (argument) {
    case 'true':
      return true;

    case 'false':
      return false;

    case 'null':
      return null;

    default:
      return getPropertyValue(obj, argument, fnScope);
  }
}

function getNamedValue(obj, property) {
  if (Array.isArray(obj)) {
    return getArrayItem(obj, property);
  }

  return obj[property];
}

function getArrayItem(list, idx) {
  if (negativeIndexPattern.test(idx)) {
    const nidx = Number(idx);
    const aidx = nidx === 0 ? 0 : list.length + nidx;
    return list[aidx];
  }

  return list[idx];
}
},{}],46:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = BpmnIO;

function BpmnIO(activity, context) {
  const {
    ioSpecification: ioSpecificationDef,
    properties: propertiesDef
  } = activity.behaviour;
  const ioSpecification = ioSpecificationDef && ioSpecificationDef.Behaviour(activity, ioSpecificationDef, context);
  const bpmnProperties = propertiesDef && propertiesDef.Behaviour(activity, propertiesDef, context);
  if (!ioSpecification && !bpmnProperties) return;
  return {
    activate(message) {
      if (bpmnProperties) bpmnProperties.activate(message);
      if (ioSpecification) ioSpecification.activate(message);
    },

    deactivate(message) {
      if (bpmnProperties) bpmnProperties.deactivate(message);
      if (ioSpecification) ioSpecification.deactivate(message);
    }

  };
}
},{}],47:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = EnvironmentDataObject;

function EnvironmentDataObject(dataObjectDef, {
  environment
}) {
  const {
    id,
    type,
    name,
    behaviour,
    parent
  } = dataObjectDef;
  const source = {
    id,
    name,
    type,
    behaviour,
    parent,

    read(broker, exchange, routingKeyPrefix, messageProperties) {
      const value = environment.variables._data && environment.variables._data[id];
      return broker.publish(exchange, `${routingKeyPrefix}response`, {
        id,
        name,
        type,
        value
      }, messageProperties);
    },

    write(broker, exchange, routingKeyPrefix, value, messageProperties) {
      environment.variables._data = environment.variables._data || {};
      environment.variables._data[id] = value;
      return broker.publish(exchange, `${routingKeyPrefix}response`, {
        id,
        name,
        type,
        value
      }, messageProperties);
    }

  };
  return source;
}
},{}],48:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = EnvironmentDataStore;

function EnvironmentDataStore(dataStoreDef, {
  environment
}) {
  const {
    id,
    type,
    name,
    behaviour,
    parent
  } = dataStoreDef;
  const source = {
    id,
    name,
    type,
    behaviour,
    parent,

    read(broker, exchange, routingKeyPrefix, messageProperties) {
      const value = environment.variables._data && environment.variables._data[id];
      return broker.publish(exchange, `${routingKeyPrefix}response`, {
        id,
        name,
        type,
        value
      }, messageProperties);
    },

    write(broker, exchange, routingKeyPrefix, value, messageProperties) {
      environment.variables._data = environment.variables._data || {};
      environment.variables._data[id] = value;
      return broker.publish(exchange, `${routingKeyPrefix}response`, {
        id,
        name,
        type,
        value
      }, messageProperties);
    }

  };
  return source;
}
},{}],49:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = EnvironmentDataStoreReference;

function EnvironmentDataStoreReference(dataStoreRefDef, {
  environment
}) {
  const {
    id,
    type,
    name,
    behaviour,
    parent
  } = dataStoreRefDef;
  const source = {
    id,
    name,
    type,
    behaviour,
    parent,

    read(broker, exchange, routingKeyPrefix, messageProperties) {
      const value = environment.variables._data && environment.variables._data[id];
      return broker.publish(exchange, `${routingKeyPrefix}response`, {
        id,
        name,
        type,
        value
      }, messageProperties);
    },

    write(broker, exchange, routingKeyPrefix, value, messageProperties) {
      environment.variables._data = environment.variables._data || {};
      environment.variables._data[id] = value;
      return broker.publish(exchange, `${routingKeyPrefix}response`, {
        id,
        name,
        type,
        value
      }, messageProperties);
    }

  };
  return source;
}
},{}],50:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = IoSpecification;

var _getPropertyValue = _interopRequireDefault(require("../getPropertyValue"));

var _shared = require("../shared");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IoSpecification(activity, ioSpecificationDef, context) {
  const {
    id,
    type = 'iospecification',
    behaviour = {}
  } = ioSpecificationDef;
  const {
    broker
  } = activity;
  const safeType = (0, _shared.brokerSafeId)(type).toLowerCase();
  let activityConsumer;
  const {
    dataInputs,
    dataOutputs
  } = behaviour;
  const ioApi = {
    id,
    type,
    behaviour,
    activate,
    deactivate
  };
  return ioApi;

  function activate() {
    if (activityConsumer) return;
    activityConsumer = broker.subscribeTmp('event', 'activity.#', onActivityEvent, {
      noAck: true
    });
  }

  function deactivate() {
    if (activityConsumer) activityConsumer = activityConsumer.cancel();
  }

  function onActivityEvent(routingKey, message) {
    if ((dataInputs || dataOutputs) && routingKey === 'activity.enter') {
      return formatOnEnter();
    }

    if (dataOutputs && routingKey === 'activity.execution.completed') {
      formatOnComplete(message);
    }
  }

  function formatOnEnter() {
    const startRoutingKey = `run.onstart.${safeType}`;

    if (!dataInputs) {
      return broker.publish('format', startRoutingKey, {
        ioSpecification: {
          dataOutputs: getDataOutputs()
        }
      });
    }

    const {
      dataObjects,
      sources
    } = dataInputs.reduce((result, ioSource, index) => {
      const source = {
        id: ioSource.id,
        type: ioSource.type,
        name: ioSource.name
      };
      result.sources.push(source);
      const dataObjectId = (0, _getPropertyValue.default)(ioSource, 'behaviour.association.source.dataObject.id');
      if (!dataObjectId) return result;
      const dataObject = context.getDataObjectById(dataObjectId);
      if (!dataObject) return result;
      result.dataObjects.push({
        index,
        dataObject
      });
      return result;
    }, {
      dataObjects: [],
      sources: []
    });

    if (!dataObjects.length) {
      return broker.publish('format', startRoutingKey, {
        ioSpecification: {
          dataInputs: sources,
          dataOutputs: getDataOutputs()
        }
      });
    }

    const endRoutingKey = `run.onstart.${safeType}.end`;
    broker.publish('format', `${startRoutingKey}.begin`, {
      endRoutingKey,
      ioSpecification: {
        dataInputs: sources.map(source => {
          return { ...source
          };
        }),
        dataOutputs: getDataOutputs()
      }
    });
    return read(broker, dataObjects, (_, responses) => {
      responses.forEach(response => {
        sources[response.index].value = response.value;
      });
      broker.publish('format', endRoutingKey, {
        ioSpecification: {
          dataInputs: sources,
          dataOutputs: getDataOutputs()
        }
      });
    });
  }

  function formatOnComplete(message) {
    const messageInputs = (0, _getPropertyValue.default)(message, 'content.ioSpecification.dataInputs');
    const messageOutputs = (0, _getPropertyValue.default)(message, 'content.output.ioSpecification.dataOutputs') || [];
    const {
      dataObjects,
      sources
    } = dataOutputs.reduce((result, ioSource, index) => {
      const {
        value
      } = messageOutputs.find(output => output.id === ioSource.id) || {};
      const source = {
        id: ioSource.id,
        type: ioSource.type,
        name: ioSource.name,
        value
      };
      result.sources.push(source);
      const dataObjectId = (0, _getPropertyValue.default)(ioSource, 'behaviour.association.target.dataObject.id');
      if (!dataObjectId) return result;
      const dataObject = context.getDataObjectById(dataObjectId);
      if (!dataObject) return result;
      result.dataObjects.push({
        index,
        dataObject,
        value
      });
      return result;
    }, {
      dataObjects: [],
      sources: []
    });
    const startRoutingKey = `run.onend.${safeType}`;

    if (!dataObjects.length) {
      return broker.publish('format', startRoutingKey, {
        ioSpecification: {
          dataInputs: messageInputs,
          dataOutputs: sources
        }
      });
    }

    const endRoutingKey = `run.onend.${safeType}.end`;
    broker.publish('format', `${startRoutingKey}.begin`, {
      endRoutingKey,
      ioSpecification: {
        dataInputs: sources.map(input => {
          return { ...input
          };
        }),
        dataOutputs: getDataOutputs()
      }
    });
    return write(broker, dataObjects, (_, responses) => {
      responses.forEach(response => {
        sources[response.index].value = response.value;
      });
      broker.publish('format', endRoutingKey, {
        ioSpecification: {
          dataInputs: sources,
          dataOutputs: getDataOutputs()
        }
      });
    });
  }

  function getDataOutputs() {
    if (!dataOutputs) return;
    return dataOutputs.map(dataOutput => {
      return {
        id: dataOutput.id,
        type: dataOutput.type,
        name: dataOutput.name
      };
    });
  }
}

function read(broker, dataObjectRefs, callback) {
  const responses = [];
  let count = 0;
  const dataReadConsumer = broker.subscribeTmp('data', 'data.read.#', onDataObjectResponse, {
    noAck: true
  });

  for (let i = 0; i < dataObjectRefs.length; i++) {
    const {
      dataObject
    } = dataObjectRefs[i];
    dataObject.read(broker, 'data', 'data.read.');
  }

  function onDataObjectResponse(routingKey, message) {
    const {
      index
    } = dataObjectRefs.find(({
      dataObject
    }) => dataObject.id === message.content.id);
    responses.push({ ...message.content,
      index
    });
    ++count;
    if (count < dataObjectRefs.length) return;
    dataReadConsumer.cancel();
    return callback(null, responses);
  }
}

function write(broker, dataObjectRefs, callback) {
  const responses = [];
  let count = 0;
  const dataWriteConsumer = broker.subscribeTmp('data', 'data.write.#', onDataObjectResponse, {
    noAck: true
  });

  for (let i = 0; i < dataObjectRefs.length; i++) {
    const {
      dataObject,
      value
    } = dataObjectRefs[i];
    dataObject.write(broker, 'data', 'data.write.', value);
  }

  function onDataObjectResponse(routingKey, message) {
    const idx = dataObjectRefs.findIndex(dobj => dobj.id === message.content.id);
    responses[idx] = message.content;
    ++count;
    if (count < dataObjectRefs.length) return;
    dataWriteConsumer.cancel();
    return callback(null, responses);
  }
}
},{"../getPropertyValue":45,"../shared":55}],51:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Properties;

var _getPropertyValue = _interopRequireDefault(require("../getPropertyValue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Properties(activity, propertiesDef, context) {
  if (!propertiesDef || !propertiesDef.values || !propertiesDef.values.length) return;
  const {
    broker,
    environment
  } = activity;
  const formatQ = broker.getQueue('format-run-q');
  let activityConsumer;
  const {
    properties,
    dataInputObjects,
    dataOutputObjects
  } = propertiesDef.values.reduce((result, {
    id,
    ...def
  }) => {
    const source = {
      id,
      type: def.type,
      name: def.name
    };
    result.properties.push(source);
    const inputDataObjectId = (0, _getPropertyValue.default)(def, 'behaviour.dataInput.association.source.dataObject.id');
    const outputDataObjectId = (0, _getPropertyValue.default)(def, 'behaviour.dataOutput.association.target.dataObject.id');
    const inputDataStoreId = (0, _getPropertyValue.default)(def, 'behaviour.dataInput.association.source.dataStore.id');
    const outputDataStoreId = (0, _getPropertyValue.default)(def, 'behaviour.dataOutput.association.target.dataStore.id');

    if (inputDataObjectId) {
      const reference = context.getDataObjectById(inputDataObjectId);
      result.dataInputObjects.push({
        id,
        reference
      });
      source.input = {
        reference
      };
    }

    if (outputDataObjectId) {
      const reference = context.getDataObjectById(outputDataObjectId);
      result.dataOutputObjects.push({
        id,
        reference: reference
      });
      source.output = {
        reference
      };
    }

    if (inputDataStoreId) {
      const reference = context.getDataStoreById(inputDataStoreId);
      result.dataInputObjects.push({
        id,
        reference
      });
      source.input = {
        reference
      };
    }

    if (outputDataStoreId) {
      const reference = context.getDataStoreById(outputDataStoreId);
      result.dataOutputObjects.push({
        id,
        reference
      });
      source.output = {
        reference
      };
    }

    return result;
  }, {
    properties: [],
    dataInputObjects: [],
    dataOutputObjects: []
  });
  const propertiesApi = {
    type: 'properties',
    activate,
    deactivate
  };
  return propertiesApi;

  function activate(message) {
    if (activityConsumer) return;

    if (message.fields.redelivered && message.content.properties) {
      onActivityEvent('activity.extension.resume', message);
    }

    activityConsumer = broker.subscribeTmp('event', 'activity.#', onActivityEvent, {
      noAck: true
    });
  }

  function deactivate() {
    if (activityConsumer) activityConsumer = activityConsumer.cancel();
  }

  function onActivityEvent(routingKey, message) {
    if (routingKey === 'activity.enter') {
      return formatOnEnter(message);
    }

    if (routingKey === 'activity.extension.resume') {
      return formatOnEnter(message);
    }

    if (routingKey === 'activity.execution.completed') {
      return formatOnComplete(message);
    }
  }

  function formatOnEnter(message) {
    const startRoutingKey = 'run.enter.bpmn-properties';

    if (!dataInputObjects.length) {
      return formatQ.queueMessage({
        routingKey: startRoutingKey
      }, {
        properties: getProperties(message)
      });
    }

    const endRoutingKey = 'run.enter.bpmn-properties.end';
    formatQ.queueMessage({
      routingKey: startRoutingKey
    }, {
      endRoutingKey,
      properties: getProperties(message)
    });
    return read(broker, dataInputObjects, (_, responses) => {
      broker.publish('format', endRoutingKey, {
        properties: getProperties(message, responses)
      });
    });
  }

  function formatOnComplete(message) {
    const startRoutingKey = 'run.end.bpmn-properties';
    const messageOutput = (0, _getPropertyValue.default)(message, 'content.output.properties') || {};
    const outputProperties = getProperties(message, messageOutput);

    if (!dataOutputObjects.length) {
      return formatQ.queueMessage({
        routingKey: startRoutingKey
      }, {
        properties: outputProperties
      });
    }

    const endRoutingKey = 'run.end.bpmn-properties.end';
    formatQ.queueMessage({
      routingKey: startRoutingKey
    }, {
      endRoutingKey,
      properties: outputProperties
    });
    return write(broker, dataOutputObjects, outputProperties, (_, responses) => {
      broker.publish('format', endRoutingKey, {
        properties: getProperties(message, responses)
      });
    });
  }

  function getProperties(message, values) {
    let response = {};

    if (message.content.properties) {
      response = { ...message.content.properties
      };
    }

    return properties.reduce((result, {
      id,
      type,
      name,
      value
    }) => {
      if (!(id in result)) {
        result[id] = {
          id,
          type,
          name
        };
      }

      if (value !== undefined) result[id].value = environment.resolveExpression(value, message);
      if (!values || !(id in values)) return result;
      result[id].value = values[id].value;
      return result;
    }, response);
  }
}

function read(broker, dataReferences, callback) {
  const responses = {};
  let count = 0;
  const dataReadConsumer = broker.subscribeTmp('data', 'data.read.#', onDataReadResponse, {
    noAck: true
  });

  for (let i = 0; i < dataReferences.length; i++) {
    const {
      id: propertyId,
      reference
    } = dataReferences[i];
    reference.read(broker, 'data', 'data.read.', {
      correlationId: propertyId
    });
  }

  function onDataReadResponse(routingKey, message) {
    responses[message.properties.correlationId] = { ...message.content
    };
    if (++count < dataReferences.length) return;
    dataReadConsumer.cancel();
    return callback(null, responses);
  }
}

function write(broker, dataReferences, properties, callback) {
  const responses = [];
  let count = 0;
  const dataWriteConsumer = broker.subscribeTmp('data', 'data.write.#', onDataWriteResponse, {
    noAck: true
  });

  for (let i = 0; i < dataReferences.length; i++) {
    const {
      id: propertyId,
      reference
    } = dataReferences[i];
    const value = propertyId in properties ? properties[propertyId].value : undefined;
    reference.write(broker, 'data', 'data.write.', value, {
      correlationId: propertyId
    });
  }

  function onDataWriteResponse(routingKey, message) {
    responses[message.properties.correlationId] = { ...message.content
    };
    if (++count < dataReferences.length) return;
    dataWriteConsumer.cancel();
    return callback(null, responses);
  }
}
},{"../getPropertyValue":45}],52:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cloneContent = cloneContent;
exports.cloneMessage = cloneMessage;
exports.cloneParent = cloneParent;
exports.shiftParent = shiftParent;
exports.unshiftParent = unshiftParent;
exports.pushParent = pushParent;

function cloneContent(content, extend) {
  const {
    discardSequence,
    inbound,
    outbound,
    parent,
    sequence
  } = content;
  const clone = { ...content,
    ...extend
  };

  if (parent) {
    clone.parent = cloneParent(parent);
  }

  if (discardSequence) {
    clone.discardSequence = discardSequence.slice();
  }

  if (inbound) {
    clone.inbound = inbound.map(c => cloneContent(c));
  }

  if (outbound) {
    clone.outbound = outbound.map(c => cloneContent(c));
  }

  if (Array.isArray(sequence)) {
    clone.sequence = sequence.map(c => cloneContent(c));
  }

  return clone;
}

function cloneMessage(message, overrideContent) {
  return {
    fields: { ...message.fields
    },
    content: cloneContent(message.content, overrideContent),
    properties: { ...message.properties
    }
  };
}

function cloneParent(parent) {
  const {
    path
  } = parent;
  const clone = { ...parent
  };
  if (!path) return clone;
  clone.path = path.map(p => {
    return { ...p
    };
  });
  return clone;
}

function unshiftParent(parent, adoptingParent) {
  const {
    id,
    type,
    executionId
  } = adoptingParent;

  if (!parent) {
    return {
      id,
      type,
      executionId
    };
  }

  const clone = cloneParent(parent);
  const {
    id: parentId,
    type: parentType,
    executionId: parentExecutionId
  } = parent;
  clone.id = id;
  clone.executionId = executionId;
  clone.type = type;
  const path = clone.path = clone.path || [];
  path.unshift({
    id: parentId,
    type: parentType,
    executionId: parentExecutionId
  });
  return clone;
}

function shiftParent(parent) {
  if (!parent) return;
  if (!parent.path || !parent.path.length) return;
  const clone = cloneParent(parent);
  const {
    id,
    executionId,
    type
  } = clone.path.shift();
  clone.id = id;
  clone.executionId = executionId;
  clone.type = type;
  clone.path = clone.path.length ? clone.path : undefined;
  return clone;
}

function pushParent(parent, ancestor) {
  const {
    id,
    type,
    executionId
  } = ancestor;
  if (!parent) return {
    id,
    type,
    executionId
  };
  const clone = cloneParent(parent);

  if (clone.id === id) {
    if (executionId) clone.executionId = executionId;
    return clone;
  }

  const path = clone.path = clone.path || [];

  for (const p of path) {
    if (p.id === id) {
      if (executionId) p.executionId = executionId;
      return clone;
    }
  }

  path.push({
    id,
    type,
    executionId
  });
  return clone;
}
},{}],53:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Process = Process;
exports.default = void 0;

var _ProcessExecution = _interopRequireDefault(require("./ProcessExecution"));

var _shared = require("../shared");

var _Api = require("../Api");

var _EventBroker = require("../EventBroker");

var _messageHelper = require("../messageHelper");

var _Errors = require("../error/Errors");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = Process;
exports.default = _default;

function Process(processDef, context) {
  const {
    id,
    type = 'process',
    name,
    parent,
    behaviour = {}
  } = processDef;
  const environment = context.environment;
  const {
    isExecutable
  } = behaviour;
  const logger = environment.Logger(type.toLowerCase());
  let execution, initExecutionId, executionId, status, stopped, postponedMessage, stateMessage, consumingRunQ;
  let counters = {
    completed: 0,
    discarded: 0,
    terminated: 0
  };
  const processApi = {
    id,
    type,
    name,
    isExecutable,
    behaviour,

    get counters() {
      return { ...counters
      };
    },

    get executionId() {
      return executionId;
    },

    get status() {
      return status;
    },

    get stopped() {
      return stopped;
    },

    get execution() {
      return execution;
    },

    get isRunning() {
      if (!consumingRunQ) return false;
      return !!status;
    },

    context,
    environment,
    parent: { ...parent
    },
    logger,
    getApi,
    getActivities,
    getActivityById,
    getSequenceFlows,
    getPostponed,
    getStartActivities,
    getState,
    init,
    recover,
    resume,
    run,
    sendMessage,
    shake,
    signal,
    cancelActivity,
    stop
  };
  const {
    broker,
    on,
    once,
    waitFor
  } = (0, _EventBroker.ProcessBroker)(processApi);
  processApi.on = on;
  processApi.once = once;
  processApi.waitFor = waitFor;
  const runQ = broker.getQueue('run-q');
  const executionQ = broker.getQueue('execution-q');
  Object.defineProperty(processApi, 'broker', {
    enumerable: true,
    get: () => broker
  });
  const extensions = context.loadExtensions(processApi);
  Object.defineProperty(processApi, 'extensions', {
    enumerable: true,
    get: () => extensions
  });
  return processApi;

  function init() {
    initExecutionId = (0, _shared.getUniqueId)(id);
    logger.debug(`<${id}> initialized with executionId <${initExecutionId}>`);
    publishEvent('init', createMessage({
      executionId: initExecutionId
    }));
  }

  function run(runContent) {
    if (processApi.isRunning) throw new Error(`process <${id}> is already running`);
    executionId = initExecutionId || (0, _shared.getUniqueId)(id);
    initExecutionId = undefined;
    const content = createMessage({ ...runContent,
      executionId
    });
    broker.publish('run', 'run.enter', content);
    broker.publish('run', 'run.start', (0, _messageHelper.cloneContent)(content));
    broker.publish('run', 'run.execute', (0, _messageHelper.cloneContent)(content));
    activateRunConsumers();
  }

  function resume() {
    if (processApi.isRunning) throw new Error(`cannot resume running process <${id}>`);
    if (!status) return processApi;
    stopped = false;
    const content = createMessage({
      executionId
    });
    broker.publish('run', 'run.resume', content, {
      persistent: false
    });
    activateRunConsumers();
    return processApi;
  }

  function recover(state) {
    if (processApi.isRunning) throw new Error(`cannot recover running process <${id}>`);
    if (!state) return processApi;
    stopped = state.stopped;
    status = state.status;
    executionId = state.executionId;
    counters = { ...counters,
      ...state.counters
    };

    if (state.execution) {
      execution = (0, _ProcessExecution.default)(processApi, context).recover(state.execution);
    }

    broker.recover(state.broker);
    return processApi;
  }

  function shake(startId) {
    if (processApi.isRunning) return execution.shake(startId);
    return (0, _ProcessExecution.default)(processApi, context).shake(startId);
  }

  function activateRunConsumers() {
    consumingRunQ = true;
    broker.subscribeTmp('api', `process.*.${executionId}`, onApiMessage, {
      noAck: true,
      consumerTag: '_process-api',
      priority: 100
    });
    runQ.assertConsumer(onRunMessage, {
      exclusive: true,
      consumerTag: '_process-run'
    });
  }

  function deactivateRunConsumers() {
    broker.cancel('_process-api');
    broker.cancel('_process-run');
    broker.cancel('_process-execution');
    consumingRunQ = false;
  }

  function stop() {
    if (!processApi.isRunning) return;
    getApi().stop();
  }

  function getApi(message) {
    if (execution) return execution.getApi(message);
    return (0, _Api.ProcessApi)(broker, message || stateMessage);
  }

  function signal(message) {
    return getApi().signal(message, {
      delegate: true
    });
  }

  function cancelActivity(message) {
    return getApi().cancel(message, {
      delegate: true
    });
  }

  function onRunMessage(routingKey, message) {
    const {
      content,
      ack,
      fields
    } = message;

    if (routingKey === 'run.resume') {
      return onResumeMessage();
    }

    stateMessage = message;

    switch (routingKey) {
      case 'run.enter':
        {
          logger.debug(`<${id}> enter`);
          status = 'entered';
          if (fields.redelivered) break;
          execution = undefined;
          publishEvent('enter', content);
          break;
        }

      case 'run.start':
        {
          logger.debug(`<${id}> start`);
          status = 'start';
          publishEvent('start', content);
          break;
        }

      case 'run.execute':
        {
          status = 'executing';
          const executeMessage = (0, _messageHelper.cloneMessage)(message);

          if (fields.redelivered && !execution) {
            executeMessage.fields.redelivered = undefined;
          }

          postponedMessage = message;
          executionQ.assertConsumer(onExecutionMessage, {
            exclusive: true,
            consumerTag: '_process-execution'
          });
          execution = execution || (0, _ProcessExecution.default)(processApi, context);
          return execution.execute(executeMessage);
        }

      case 'run.error':
        {
          publishEvent('error', (0, _messageHelper.cloneContent)(content, {
            error: fields.redelivered ? (0, _Errors.makeErrorFromMessage)(message) : content.error
          }));
          break;
        }

      case 'run.end':
        {
          status = 'end';
          if (fields.redelivered) break;
          logger.debug(`<${id}> completed`);
          counters.completed++;
          broker.publish('run', 'run.leave', content);
          publishEvent('end', content);
          break;
        }

      case 'run.discarded':
        {
          status = 'discarded';
          if (fields.redelivered) break;
          counters.discarded++;
          broker.publish('run', 'run.leave', content);
          break;
        }

      case 'run.leave':
        {
          status = undefined;
          broker.cancel('_process-api');
          publishEvent('leave');
          break;
        }
    }

    ack();

    function onResumeMessage() {
      message.ack();

      switch (stateMessage.fields.routingKey) {
        case 'run.enter':
        case 'run.start':
        case 'run.discarded':
        case 'run.end':
        case 'run.leave':
          break;

        default:
          return;
      }

      if (!stateMessage.fields.redelivered) return;
      logger.debug(`<${id}> resume from ${status}`);
      return broker.publish('run', stateMessage.fields.routingKey, (0, _messageHelper.cloneContent)(stateMessage.content), stateMessage.properties);
    }
  }

  function onExecutionMessage(routingKey, message) {
    const content = message.content;
    const messageType = message.properties.type;
    message.ack();

    switch (messageType) {
      case 'stopped':
        {
          return onStop();
        }

      case 'error':
        {
          broker.publish('run', 'run.error', content);
          broker.publish('run', 'run.discarded', content);
          break;
        }

      case 'discard':
        broker.publish('run', 'run.discarded', content);
        break;

      default:
        {
          broker.publish('run', 'run.end', content);
        }
    }

    if (postponedMessage) {
      const ackMessage = postponedMessage;
      postponedMessage = null;
      ackMessage.ack();
    }
  }

  function publishEvent(state, content) {
    if (!content) content = createMessage();
    broker.publish('event', `process.${state}`, { ...content,
      state
    }, {
      type: state,
      mandatory: state === 'error'
    });
  }

  function sendMessage(message) {
    const messageContent = message.content;
    if (!messageContent) return;
    let targetsFound = false;

    if (messageContent.target && messageContent.target.id && getActivityById(messageContent.target.id)) {
      targetsFound = true;
    } else if (messageContent.message && getStartActivities({
      referenceId: messageContent.message.id,
      referenceType: messageContent.message.messageType
    }).length) {
      targetsFound = true;
    }

    if (!targetsFound) return;
    if (!status) run();
    getApi().sendApiMessage(message.properties.type || 'message', (0, _messageHelper.cloneContent)(messageContent), {
      delegate: true
    });
  }

  function getActivityById(childId) {
    if (execution) return execution.getActivityById(childId);
    return context.getActivityById(childId);
  }

  function getActivities() {
    if (execution) return execution.getActivities();
    return context.getActivities(id);
  }

  function getStartActivities(filterOptions) {
    return context.getStartActivities(filterOptions, id);
  }

  function getSequenceFlows() {
    if (execution) return execution.getSequenceFlows();
    return context.getSequenceFlows();
  }

  function getPostponed(...args) {
    if (execution) return execution.getPostponed(...args);
    return [];
  }

  function onApiMessage(routingKey, message) {
    const messageType = message.properties.type;

    switch (messageType) {
      case 'stop':
        {
          if (execution && !execution.completed) return;
          onStop();
          break;
        }
    }
  }

  function onStop() {
    stopped = true;
    deactivateRunConsumers();
    return publishEvent('stop');
  }

  function createMessage(override = {}) {
    return {
      id,
      type,
      name,
      parent: { ...parent
      },
      ...override
    };
  }

  function getState() {
    return createMessage({
      executionId,
      status,
      stopped,
      counters: { ...counters
      },
      broker: broker.getState(true),
      execution: execution && execution.getState()
    });
  }
}
},{"../Api":2,"../EventBroker":5,"../error/Errors":21,"../messageHelper":52,"../shared":55,"./ProcessExecution":54}],54:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ProcessExecution;

var _Api = require("../Api");

var _messageHelper = require("../messageHelper");

var _shared = require("../shared");

function ProcessExecution(parentActivity, context) {
  const {
    id,
    type,
    broker,
    logger,
    isSubProcess
  } = parentActivity;
  const {
    environment
  } = context;
  const children = context.getActivities(id);
  const flows = context.getSequenceFlows(id);
  const associations = context.getAssociations(id);
  const outboundMessageFlows = context.getMessageFlows(id);
  const startActivities = [];
  const triggeredByEventActivities = [];
  const detachedActivities = [];
  const postponed = [];
  const startSequences = {};
  const exchangeName = isSubProcess ? 'subprocess-execution' : 'execution';
  broker.assertExchange(exchangeName, 'topic', {
    autoDelete: false,
    durable: true
  });
  let activityQ,
      status = 'init',
      executionId,
      stopped,
      activated,
      stateMessage,
      completed = false,
      executionName;
  const processExecution = {
    id,
    type,
    broker,

    get environment() {
      return environment;
    },

    get executionId() {
      return executionId;
    },

    get completed() {
      return completed;
    },

    get status() {
      return status;
    },

    get stopped() {
      return stopped;
    },

    get postponedCount() {
      return postponed.length;
    },

    get isRunning() {
      if (activated) return true;
      return false;
    },

    discard,
    execute,
    getApi,
    getActivityById,
    getActivities,
    getPostponed,
    getSequenceFlows,
    getState,
    recover,
    shake,
    stop
  };
  return processExecution;

  function execute(executeMessage) {
    if (!executeMessage) throw new Error('Process execution requires message');
    if (!executeMessage.content || !executeMessage.content.executionId) throw new Error('Process execution requires execution id');
    const isRedelivered = executeMessage.fields.redelivered;
    executionId = executeMessage.content.executionId;
    prepare();
    stateMessage = (0, _messageHelper.cloneMessage)(executeMessage);
    stateMessage.content = { ...stateMessage.content,
      executionId,
      state: 'start'
    };
    stopped = false;
    environment.assignVariables(executeMessage);
    activityQ = broker.assertQueue(`execute-${executionId}-q`, {
      durable: true,
      autoDelete: false
    });

    if (isRedelivered) {
      return resume();
    }

    logger.debug(`<${executionName}> execute`, isSubProcess ? 'sub process' : 'process');
    activate();
    start();
    return true;
  }

  function resume() {
    logger.debug(`<${executionName}> resume process execution at`, status);
    if (completed) return complete('completed');
    activate();

    if (startActivities.length > 1) {
      startActivities.forEach(a => a.shake());
    }

    postponed.splice(0);
    detachedActivities.splice(0);
    activityQ.consume(onChildMessage, {
      prefetch: 1000,
      consumerTag: `_process-activity-${executionId}`
    });
    if (completed) return complete('completed');

    switch (status) {
      case 'init':
        return start();

      case 'executing':
        {
          if (!postponed.length) return complete('completed');
          break;
        }
    }

    postponed.slice().forEach(({
      content
    }) => {
      const activity = getActivityById(content.id);
      if (!activity) return;
      if (content.placeholder) return;
      activity.resume();
    });
  }

  function start() {
    if (children.length === 0) {
      return complete('completed');
    }

    status = 'start';
    const executeContent = { ...stateMessage.content,
      state: status
    };
    broker.publish(exchangeName, 'execute.start', (0, _messageHelper.cloneContent)(executeContent));

    if (startActivities.length > 1) {
      startActivities.forEach(a => a.shake());
    }

    startActivities.forEach(activity => activity.init());
    startActivities.forEach(activity => activity.run());
    postponed.splice(0);
    detachedActivities.splice(0);
    activityQ.assertConsumer(onChildMessage, {
      prefetch: 1000,
      consumerTag: `_process-activity-${executionId}`
    });
  }

  function recover(state) {
    if (!state) return processExecution;
    executionId = state.executionId;
    prepare();
    stopped = state.stopped;
    completed = state.completed;
    status = state.status;
    logger.debug(`<${executionName}> recover process execution at`, status);

    if (state.messageFlows) {
      state.messageFlows.forEach(flowState => {
        const flow = getMessageFlowById(flowState.id);
        if (!flow) return;
        flow.recover(flowState);
      });
    }

    if (state.associations) {
      state.associations.forEach(associationState => {
        const association = getAssociationById(associationState.id);
        if (!association) return;
        association.recover(associationState);
      });
    }

    if (state.flows) {
      state.flows.forEach(flowState => {
        const flow = getFlowById(flowState.id);
        if (!flow) return;
        flow.recover(flowState);
      });
    }

    if (state.children) {
      state.children.forEach(childState => {
        const child = getActivityById(childState.id);
        if (!child) return;
        child.recover(childState);
      });
    }

    return processExecution;
  }

  function shake(fromId) {
    let executing = true;

    if (!processExecution.isRunning) {
      executing = false;
      executionId = (0, _shared.getUniqueId)(id);
      prepare();
      activate();
    }

    const toShake = fromId ? [getActivityById(fromId)].filter(Boolean) : startActivities;
    const result = {};
    broker.subscribeTmp('event', '*.shake.*', (routingKey, {
      content
    }) => {
      let isLooped = false;

      switch (routingKey) {
        case 'flow.shake.loop':
          isLooped = true;

        case 'activity.shake.end':
          onShakeEnd(content, isLooped);
          break;
      }
    }, {
      noAck: true,
      consumerTag: `_shaker-${executionId}`
    });
    toShake.forEach(a => a.shake());
    if (!executing) deactivate();
    broker.cancel(`_shaker-${executionId}`);
    return result;

    function onShakeEnd(content, isLooped) {
      const {
        id: shakeId,
        parent: shakeParent
      } = content;
      if (shakeParent.id !== id) return;
      result[shakeId] = result[shakeId] || [];
      result[shakeId].push({ ...content,
        isLooped
      });
    }
  }

  function stop() {
    getApi().stop();
  }

  function activate() {
    broker.subscribeTmp('api', '#', onApiMessage, {
      noAck: true,
      consumerTag: `_process-api-consumer-${executionId}`,
      priority: 200
    });
    outboundMessageFlows.forEach(flow => {
      flow.activate();
      flow.broker.subscribeTmp('event', '#', onMessageFlowEvent, {
        consumerTag: '_process-message-consumer',
        noAck: true,
        priority: 200
      });
    });
    flows.forEach(flow => {
      flow.broker.subscribeTmp('event', '#', onActivityEvent, {
        consumerTag: '_process-flow-controller',
        noAck: true,
        priority: 200
      });
    });
    associations.forEach(association => {
      association.broker.subscribeTmp('event', '#', onActivityEvent, {
        consumerTag: '_process-association-controller',
        noAck: true,
        priority: 200
      });
    });
    startActivities.splice(0);
    triggeredByEventActivities.splice(0);
    children.forEach(activity => {
      if (activity.placeholder) return;
      activity.activate(processExecution);
      activity.broker.subscribeTmp('event', '#', onActivityEvent, {
        noAck: true,
        consumerTag: '_process-activity-consumer',
        priority: 200
      });
      if (activity.isStart) startActivities.push(activity);
      if (activity.triggeredByEvent) triggeredByEventActivities.push(activity);
    });
    activated = true;

    function onActivityEvent(routingKey, activityMessage) {
      const message = (0, _messageHelper.cloneMessage)(activityMessage);
      if (message.fields.redelivered && message.properties.persistent === false) return;
      const content = message.content;
      const parent = content.parent = content.parent || {};
      let delegate = message.properties.delegate;
      const shaking = message.properties.type === 'shake';
      const isDirectChild = content.parent.id === id;

      if (isDirectChild) {
        parent.executionId = executionId;
      } else {
        content.parent = (0, _messageHelper.pushParent)(parent, {
          id,
          type,
          executionId
        });
      }

      if (delegate) delegate = onDelegateEvent(message);
      broker.publish('event', routingKey, content, { ...message.properties,
        delegate,
        mandatory: false
      });
      if (shaking) return onShookEnd(message);
      if (!isDirectChild) return;
      if (content.isAssociation) return;

      switch (routingKey) {
        case 'process.terminate':
          return activityQ.queueMessage({
            routingKey: 'execution.terminate'
          }, (0, _messageHelper.cloneContent)(content), {
            type: 'terminate',
            persistent: true
          });

        case 'activity.stop':
          return;
      }

      activityQ.queueMessage(message.fields, (0, _messageHelper.cloneContent)(content), {
        persistent: true,
        ...message.properties
      });
    }
  }

  function deactivate() {
    broker.cancel(`_process-api-consumer-${executionId}`);
    broker.cancel(`_process-activity-${executionId}`);
    children.forEach(activity => {
      if (activity.placeholder) return;
      activity.broker.cancel('_process-activity-consumer');
      activity.deactivate();
    });
    flows.forEach(flow => {
      flow.broker.cancel('_process-flow-controller');
    });
    associations.forEach(association => {
      association.broker.cancel('_process-association-controller');
    });
    outboundMessageFlows.forEach(flow => {
      flow.deactivate();
      flow.broker.cancel('_process-message-consumer');
    });
    activated = false;
  }

  function onDelegateEvent(message) {
    const eventType = message.properties.type;
    let delegate = true;
    const content = message.content;
    logger.debug(`<${executionName}> delegate`, eventType, content.message && content.message.id ? `event with id <${content.message.id}>` : 'anonymous event');
    triggeredByEventActivities.forEach(activity => {
      if (activity.getStartActivities({
        referenceId: content.message && content.message.id,
        referenceType: eventType
      }).length) {
        delegate = false;
        activity.run(content.message);
      }
    });
    getApi().sendApiMessage(eventType, content, {
      delegate: true
    });
    return delegate;
  }

  function onMessageFlowEvent(routingKey, message) {
    broker.publish('message', routingKey, (0, _messageHelper.cloneContent)(message.content), message.properties);
  }

  function onChildMessage(routingKey, message) {
    const content = message.content;
    const isRedelivered = message.fields.redelivered;
    const {
      id: childId,
      type: activityType,
      isEnd
    } = content;
    const {
      persistent
    } = message.properties;
    if (isRedelivered && persistent === false) return message.ack();

    switch (routingKey) {
      case 'execution.stop':
        message.ack();
        return stopExecution();

      case 'execution.terminate':
        message.ack();
        return terminate(message);

      case 'execution.discard':
        message.ack();
        return onDiscard(message);

      case 'activity.compensation.end':
      case 'flow.looped':
      case 'activity.leave':
        return onChildCompleted();
    }

    stateChangeMessage(true);

    switch (routingKey) {
      case 'activity.detach':
        {
          detachedActivities.push((0, _messageHelper.cloneMessage)(message));
          break;
        }

      case 'activity.discard':
      case 'activity.compensation.start':
      case 'activity.enter':
        {
          status = 'executing';
          popInbound();
          break;
        }

      case 'flow.error':
      case 'activity.error':
        {
          if (isEventCaught()) {
            logger.debug(`<${executionName}> error was caught`);
            break;
          }

          complete('error', {
            error: content.error
          });
          break;
        }
    }

    function stateChangeMessage(postponeMessage = true) {
      const previousMsg = popPostponed(content);
      if (previousMsg) previousMsg.ack();
      if (postponeMessage) postponed.push(message);
    }

    function popInbound() {
      if (!content.inbound) return;
      content.inbound.forEach(trigger => {
        if (!trigger.isSequenceFlow) return;
        const msg = popPostponed(trigger, postponed);
        if (msg) msg.ack();
      });
    }

    function popPostponed(byContent) {
      const postponedIdx = postponed.findIndex(msg => {
        if (msg.content.isSequenceFlow) return msg.content.sequenceId === byContent.sequenceId;
        return msg.content.executionId === byContent.executionId;
      });
      let postponedMsg;

      if (postponedIdx > -1) {
        postponedMsg = postponed.splice(postponedIdx, 1)[0];
      }

      const detachedIdx = detachedActivities.findIndex(msg => msg.content.executionId === byContent.executionId);
      if (detachedIdx > -1) detachedActivities.splice(detachedIdx, 1);
      return postponedMsg;
    }

    function onChildCompleted() {
      stateChangeMessage(false);
      if (isRedelivered) return message.ack();
      logger.debug(`<${executionName}> left <${childId}> (${activityType}), pending runs ${postponed.length}`, postponed.map(a => a.content.id));
      const postponedLength = postponed.length;

      if (!postponedLength) {
        message.ack();
        return complete('completed');
      } else if (postponedLength === detachedActivities.length) {
        getPostponed().forEach(api => api.discard());
      } else if (isEnd && startActivities.length) {
        discardPostponedIfNecessary();
      }
    }

    function discardPostponedIfNecessary() {
      for (const p of postponed) {
        const postponedId = p.content.id;
        const startSequence = startSequences[postponedId];

        if (startSequence) {
          if (startSequence.content.sequence.some(({
            id: sid
          }) => sid === childId)) {
            getApi(p).discard();
          }
        }
      }
    }

    function stopExecution() {
      if (stopped) return;
      logger.debug(`<${executionName}> stop process execution (stop child executions ${postponed.length})`);
      getPostponed().forEach(api => {
        api.stop();
      });
      deactivate();
      stopped = true;
      return broker.publish(exchangeName, `execution.stopped.${executionId}`, { ...stateMessage.content,
        ...content
      }, {
        type: 'stopped',
        persistent: false
      });
    }

    function onDiscard() {
      deactivate();
      const running = postponed.splice(0);
      logger.debug(`<${executionName}> discard process execution (discard child executions ${running.length})`);
      getSequenceFlows().forEach(flow => {
        flow.stop();
      });
      running.forEach(msg => {
        getApi(msg).discard();
      });
      activityQ.purge();
      return complete('discard');
    }

    function isEventCaught() {
      return postponed.find(msg => {
        if (msg.fields.routingKey !== 'activity.catch') return;
        return msg.content.source && msg.content.source.executionId === content.executionId;
      });
    }
  }

  function onApiMessage(routingKey, message) {
    if (message.properties.delegate) {
      return delegateApiMessage();
    }

    if (id !== message.content.id) {
      const child = getActivityById(message.content.id);
      if (!child) return null;
      return child.broker.publish('api', routingKey, message.content, message.properties);
    }

    if (executionId !== message.content.executionId) return;

    switch (message.properties.type) {
      case 'discard':
        return discard(message);

      case 'stop':
        activityQ.queueMessage({
          routingKey: 'execution.stop'
        }, (0, _messageHelper.cloneContent)(message.content), {
          persistent: false
        });
        break;
    }

    function delegateApiMessage() {
      const {
        correlationId
      } = message.properties || (0, _shared.getUniqueId)(executionId);
      logger.debug(`<${executionName}> delegate api`, routingKey, `message to children, with correlationId <${correlationId}>`);
      let consumed = false;
      broker.subscribeTmp('event', 'activity.consumed', (_, msg) => {
        if (msg.properties.correlationId === correlationId) {
          consumed = true;
          logger.debug(`<${executionName}> delegated api message was consumed by`, msg.content ? msg.content.executionId : 'unknown');
        }
      }, {
        consumerTag: `_ct-delegate-${correlationId}`,
        noAck: true
      });

      for (const child of children) {
        if (child.placeholder) continue;
        child.broker.publish('api', routingKey, (0, _messageHelper.cloneContent)(message.content), message.properties);
        if (consumed) break;
      }

      broker.cancel(`_ct-delegate-${correlationId}`);
    }
  }

  function getPostponed(filterFn) {
    return postponed.slice().reduce((result, p) => {
      const api = getApi(p);

      if (api) {
        if (filterFn && !filterFn(api)) return result;
        result.push(api);
      }

      return result;
    }, []);
  }

  function complete(completionType, content = {}) {
    deactivate();
    logger.debug(`<${executionName}> process execution ${completionType}`);
    completed = true;
    if (status !== 'terminated') status = completionType;
    broker.deleteQueue(activityQ.name);
    return broker.publish(exchangeName, `execution.${completionType}.${executionId}`, { ...stateMessage.content,
      output: environment.output,
      ...content,
      state: completionType
    }, {
      type: completionType,
      mandatory: completionType === 'error'
    });
  }

  function discard() {
    status = 'discard';
    return activityQ.queueMessage({
      routingKey: 'execution.discard'
    }, {
      id,
      type,
      executionId
    }, {
      type: 'discard'
    });
  }

  function terminate(message) {
    status = 'terminated';
    logger.debug(`<${executionName}> terminating process execution`);
    const running = postponed.splice(0);
    getSequenceFlows().forEach(flow => {
      flow.stop();
    });
    running.forEach(msg => {
      const {
        id: postponedId,
        isSequenceFlow
      } = msg.content;
      if (postponedId === message.content.id) return;
      if (isSequenceFlow) return;
      getApi(msg).stop();
      msg.ack();
    });
    activityQ.purge();
  }

  function getState() {
    return {
      executionId,
      stopped,
      completed,
      status,
      children: children.reduce((result, activity) => {
        if (activity.placeholder) return result;
        result.push(activity.getState());
        return result;
      }, []),
      flows: flows.map(f => f.getState()),
      messageFlows: outboundMessageFlows.map(f => f.getState()),
      associations: associations.map(f => f.getState())
    };
  }

  function getActivities() {
    return children.slice();
  }

  function getActivityById(activityId) {
    return children.find(child => child.id === activityId);
  }

  function getFlowById(flowId) {
    return flows.find(f => f.id === flowId);
  }

  function getAssociationById(associationId) {
    return associations.find(a => a.id === associationId);
  }

  function getMessageFlowById(flowId) {
    return outboundMessageFlows.find(f => f.id === flowId);
  }

  function getChildById(childId) {
    return getActivityById(childId) || getFlowById(childId);
  }

  function getSequenceFlows() {
    return flows.slice();
  }

  function getApi(message) {
    if (!message) return (0, _Api.ProcessApi)(broker, stateMessage);
    const content = message.content;

    if (content.executionId !== executionId) {
      return getChildApi(message);
    }

    const api = (0, _Api.ProcessApi)(broker, message);

    api.getExecuting = function getExecuting() {
      return postponed.reduce((result, msg) => {
        if (msg.content.executionId === content.executionId) return result;
        result.push(getApi(msg));
        return result;
      }, []);
    };

    return api;
  }

  function getChildApi(message) {
    const content = message.content;
    let api = getApiByChildId(content.id);
    if (api) return api;
    if (!content.parent) return;
    api = getApiByChildId(content.parent.id);
    if (api) return api;
    if (!content.parent.path) return;

    for (let i = 0; i < content.parent.path.length; i++) {
      api = getApiByChildId(content.parent.path[i].id);
      if (api) return api;
    }

    function getApiByChildId(childId) {
      const child = getChildById(childId);
      if (!child) return;
      return child.getApi(message);
    }
  }

  function onShookEnd(message) {
    const routingKey = message.fields.routingKey;
    if (routingKey !== 'activity.shake.end') return;
    startSequences[message.content.id] = (0, _messageHelper.cloneMessage)(message);
  }

  function prepare() {
    executionName = `${executionId} (${id})`;
  }
}
},{"../Api":2,"../messageHelper":52,"../shared":55}],55:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generateId = generateId;
exports.brokerSafeId = brokerSafeId;
exports.getUniqueId = getUniqueId;
exports.filterUndefined = filterUndefined;
exports.getOptionsAndCallback = getOptionsAndCallback;
const safePattern = /[./\\#*:\s]/g;

function generateId() {
  return Math.random().toString(16).substring(2, 12);
}

function brokerSafeId(id) {
  return id.replace(safePattern, '_');
}

function getUniqueId(prefix) {
  return `${brokerSafeId(prefix)}_${generateId()}`;
}

function filterUndefined(obj) {
  return Object.keys(obj).reduce((filtered, key) => {
    const objValue = obj[key];
    if (objValue !== undefined) filtered[key] = objValue;
    return filtered;
  }, {});
}

function getOptionsAndCallback(optionsOrCallback, callback) {
  let options;

  if (typeof optionsOrCallback === 'function') {
    callback = optionsOrCallback;
  } else {
    options = optionsOrCallback;
  }

  return [options, callback];
}
},{}],56:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = LoopCharacteristics;

var _Errors = require("../error/Errors");

var _messageHelper = require("../messageHelper");

function LoopCharacteristics(activity, loopCharacteristics) {
  const {
    id,
    broker,
    environment
  } = activity;
  const {
    batchSize = 50
  } = environment.settings;
  const {
    type = 'LoopCharacteristics',
    behaviour = {}
  } = loopCharacteristics;
  const {
    isSequential = false,
    collection: collectionExpression,
    elementVariable = 'item'
  } = behaviour;
  let completionCondition, startCondition, loopCardinality;
  if ('loopCardinality' in behaviour) loopCardinality = behaviour.loopCardinality;else if ('loopMaximum' in behaviour) loopCardinality = behaviour.loopMaximum;

  if (behaviour.loopCondition) {
    if (behaviour.testBefore) startCondition = behaviour.loopCondition;else completionCondition = behaviour.loopCondition;
  }

  if (behaviour.completionCondition) {
    completionCondition = behaviour.completionCondition;
  }

  const loopType = getLoopType();
  if (!loopType) return;
  const {
    debug
  } = environment.Logger(type.toLowerCase());
  const executeConsumerTag = '_execute-q-multi-instance-tag';
  broker.cancel(executeConsumerTag);
  const apiConsumerTag = '_api-multi-instance-tag';
  broker.cancel(apiConsumerTag);
  let loopSettings;
  const characteristicsApi = {
    type,
    loopType,
    collection: collectionExpression,
    elementVariable,
    isSequential,
    loopCardinality,
    execute
  };
  return characteristicsApi;

  function getLoopType() {
    if (collectionExpression) return 'collection';
    if (completionCondition) return 'complete condition';
    if (startCondition) return 'start condition';
    if (loopCardinality) return 'cardinality';
  }

  function execute(executeMessage) {
    if (!executeMessage) throw new Error('LoopCharacteristics execution requires message');
    const {
      routingKey: executeRoutingKey,
      redelivered: isRedelivered
    } = executeMessage.fields || {};
    const {
      executionId: parentExecutionId
    } = executeMessage.content;
    if (!getCharacteristics()) return;

    try {
      return isSequential ? executeSequential() : executeParallel();
    } catch (err) {
      return activity.emitFatal(new _Errors.ActivityError(err.message, executeMessage, err), executeMessage.content);
    }

    function executeSequential() {
      const {
        cardinality,
        getContent: getStartContent
      } = getCharacteristics();
      if (cardinality === 0) return complete();
      if (!cardinality && !startCondition && !completionCondition) return activity.emitFatal(new _Errors.ActivityError(`<${id}> cardinality, collection, or condition is required in sequential loops`, executeMessage), getStartContent());
      let startIndex = 0;

      if (isRedelivered && executeRoutingKey === 'execute.iteration.next') {
        startIndex = executeMessage.content.index;
      }

      subscribe(onCompleteMessage);
      return startNext(startIndex, isRedelivered);

      function startNext(index, ignoreIfExecuting) {
        const content = next(index);
        if (!content) return;
        const characteristics = getCharacteristics();

        if (startCondition && isConditionMet(startCondition, {
          content
        })) {
          debug(`<${parentExecutionId} (${id})> start condition met`);
          return;
        }

        debug(`<${content.executionId} (${id})>`, ignoreIfExecuting ? 'resume' : 'start', `sequential iteration index ${content.index}`);
        broker.publish('execution', 'execute.iteration.next', { ...content,
          ...characteristics.getContent(),
          index,
          preventComplete: true,
          output: characteristics.output.slice(),
          state: 'iteration.next'
        });
        broker.publish('execution', 'execute.start', { ...content,
          ignoreIfExecuting
        });
        return content;
      }

      function onCompleteMessage(_, message) {
        const {
          content
        } = message;
        const loopOutput = getCharacteristics().output;
        if (content.output !== undefined) loopOutput[content.index] = content.output;
        broker.publish('execution', 'execute.iteration.completed', { ...message.content,
          ...getCharacteristics().getContent(),
          preventComplete: true,
          output: loopOutput.slice(),
          state: 'iteration.completed'
        });

        if (isConditionMet(completionCondition, message, loopOutput)) {
          debug(`<${parentExecutionId} (${id})> complete condition met`);
        } else if (startNext(content.index + 1)) return;

        debug(`<${parentExecutionId} (${id})> sequential loop completed`);
        return complete(content);
      }

      function complete(content) {
        stop();
        const {
          getContent,
          output
        } = getCharacteristics();
        return broker.publish('execution', 'execute.completed', { ...content,
          ...getContent(),
          output
        });
      }
    }

    function executeParallel() {
      const {
        cardinality,
        getContent: getStartContent
      } = getCharacteristics();
      if (cardinality === 0) return complete();
      if (!cardinality) return activity.emitFatal(new _Errors.ActivityError(`<${id}> cardinality or collection is required in parallel loops`, executeMessage), getStartContent());
      let index = 0,
          running = 0;

      if (isRedelivered) {
        if (!isNaN(executeMessage.content.index)) index = executeMessage.content.index;
        if (!isNaN(executeMessage.content.running)) running = executeMessage.content.running;
      }

      subscribe(onCompleteMessage);
      if (isRedelivered) return;
      return startBatch();

      function startBatch() {
        const {
          output: loopOutput,
          getContent
        } = getCharacteristics();
        const batch = [];
        let startContent = next(index);

        do {
          debug(`<${parentExecutionId} (${id})> start parallel iteration index ${index}`);
          batch.push(startContent);
          running++;
          index++;

          if (index >= cardinality || running >= batchSize) {
            break;
          }
        } while (startContent = next(index));

        broker.publish('execution', 'execute.iteration.batch', { ...getContent(),
          index,
          running,
          output: loopOutput,
          preventComplete: true
        });

        for (const content of batch) {
          broker.publish('execution', 'execute.start', content);
        }
      }

      function onCompleteMessage(_, message) {
        const {
          content
        } = message;
        const {
          output: loopOutput
        } = getCharacteristics();
        if (content.output !== undefined) loopOutput[content.index] = content.output;
        running--;
        broker.publish('execution', 'execute.iteration.completed', { ...content,
          ...getCharacteristics().getContent(),
          index,
          running,
          output: loopOutput,
          state: 'iteration.completed',
          preventComplete: true
        });

        if (running <= 0 && !next(index)) {
          return complete(content);
        }

        if (isConditionMet(completionCondition, message)) {
          return complete(content);
        }

        if (running <= 0) {
          running = 0;
          startBatch();
        }
      }

      function complete(content) {
        stop();
        const {
          getContent,
          output
        } = getCharacteristics();
        return broker.publish('execution', 'execute.completed', { ...content,
          ...getContent(),
          output
        });
      }
    }

    function next(index) {
      const executionId = `${parentExecutionId}_${index}`;
      const {
        cardinality,
        collection,
        parent,
        getContent
      } = getCharacteristics();
      const content = { ...getContent(),
        isRootScope: undefined,
        executionId,
        isMultiInstance: true,
        index,
        parent
      };
      if (isComplete(content)) return;

      if (collection) {
        content[elementVariable] = collection[index];
      }

      return content;

      function isComplete() {
        if (cardinality > 0 && index >= cardinality) return true;
        if (collection && index >= collection.length) return true;
      }
    }

    function getCharacteristics() {
      if (loopSettings) return loopSettings;
      const collection = getCollection();
      const cardinality = getCardinality(collection);
      const messageContent = { ...(0, _messageHelper.cloneContent)(executeMessage.content),
        loopCardinality: cardinality,
        isSequential,
        output: undefined
      };

      if (cardinality !== undefined && isNaN(cardinality) || cardinality < 0) {
        return activity.emitFatal(new _Errors.ActivityError(`<${id}> invalid loop cardinality >${cardinality}<`, executeMessage), messageContent);
      }

      const output = executeMessage.content.output || [];
      const parent = (0, _messageHelper.unshiftParent)(executeMessage.content.parent, executeMessage.content);
      loopSettings = {
        cardinality,
        collection,
        messageContent,
        output,
        parent,

        getContent() {
          return (0, _messageHelper.cloneContent)(messageContent);
        }

      };
      return loopSettings;
    }

    function getCardinality(collection) {
      const collectionLen = Array.isArray(collection) ? collection.length : undefined;

      if (!loopCardinality) {
        return collectionLen;
      }

      const value = environment.resolveExpression(loopCardinality, executeMessage);
      if (value === undefined) return collectionLen;
      return Number(value);
    }

    function getCollection() {
      if (!collectionExpression) return;
      debug(`<${id}> has collection`);
      return environment.resolveExpression(collectionExpression, executeMessage);
    }

    function subscribe(onIterationCompleteMessage) {
      broker.subscribeTmp('api', `activity.*.${parentExecutionId}`, onApiMessage, {
        noAck: true,
        consumerTag: apiConsumerTag
      }, {
        priority: 400
      });
      broker.subscribeTmp('execution', 'execute.*', onComplete, {
        noAck: true,
        consumerTag: executeConsumerTag,
        priority: 300
      });

      function onComplete(routingKey, message, ...args) {
        if (!message.content.isMultiInstance) return;

        switch (routingKey) {
          case 'execute.cancel':
          case 'execute.completed':
            return onIterationCompleteMessage(routingKey, message, ...args);
        }
      }
    }
  }

  function onApiMessage(_, message) {
    switch (message.properties.type) {
      case 'stop':
      case 'discard':
        stop();
        break;
    }
  }

  function stop() {
    broker.cancel(executeConsumerTag);
    broker.cancel(apiConsumerTag);
  }

  function isConditionMet(condition, message, loopOutput) {
    if (!condition) return false;
    const testContext = (0, _messageHelper.cloneMessage)(message, {
      loopOutput
    });
    return environment.resolveExpression(condition, testContext);
  }
}
},{"../error/Errors":21,"../messageHelper":52}],57:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ReceiveTask;
exports.ReceiveTaskBehaviour = ReceiveTaskBehaviour;

var _Activity = _interopRequireDefault(require("../activity/Activity"));

var _messageHelper = require("../messageHelper");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ReceiveTask(activityDef, context) {
  const task = (0, _Activity.default)(ReceiveTaskBehaviour, activityDef, context);
  task.broker.assertQueue('message', {
    autoDelete: false,
    durable: true
  });
  task.broker.bindQueue('message', 'api', '*.message.#', {
    durable: true
  });
  return task;
}

function ReceiveTaskBehaviour(activity) {
  const {
    id,
    type,
    broker,
    logger,
    behaviour = {},
    getActivityById
  } = activity;
  const reference = behaviour.messageRef || {
    name: 'anonymous'
  };
  const referenceElement = reference.id && getActivityById(reference.id);
  const loopCharacteristics = behaviour.loopCharacteristics && behaviour.loopCharacteristics.Behaviour(activity, behaviour.loopCharacteristics);
  const source = {
    id,
    type,
    reference: { ...reference,
      referenceType: 'message'
    },
    execute
  };
  return source;

  function execute(executeMessage) {
    const content = executeMessage.content;
    const {
      executionId
    } = content;
    if (content.isRootScope) setupMessageHandling(executionId);

    if (loopCharacteristics && content.isRootScope) {
      return loopCharacteristics.execute(executeMessage);
    }

    let completed;
    const {
      message: referenceMessage,
      description
    } = resolveReference(executeMessage);
    broker.consume('message', onCatchMessage, {
      noAck: true,
      consumerTag: `_onmessage-${executionId}`
    });
    if (completed) return;
    broker.subscribeTmp('api', `activity.#.${executionId}`, onApiMessage, {
      noAck: true,
      consumerTag: `_api-${executionId}`,
      priority: 400
    });
    logger.debug(`<${executionId} (${id})> expect ${description}`);
    broker.publish('event', 'activity.wait', (0, _messageHelper.cloneContent)(content, {
      message: { ...referenceMessage
      }
    }));

    function onCatchMessage(routingKey, message) {
      const {
        content: delegateContent
      } = message;
      const {
        id: signalId,
        executionId: signalExecutionId
      } = delegateContent.message || {};

      if (!referenceMessage.id && signalId || signalExecutionId) {
        if (loopCharacteristics && signalExecutionId !== executionId) return;
        if (signalId !== id && signalExecutionId !== executionId) return;
        logger.debug(`<${executionId} (${id})> caught direct message`);
      } else if (referenceMessage.id !== signalId) return;else {
        logger.debug(`<${executionId} (${id})> caught ${description}`);
      }

      const {
        type: messageType,
        correlationId
      } = message.properties;
      broker.publish('event', 'activity.consumed', (0, _messageHelper.cloneContent)(content, {
        message: { ...message.content.message
        }
      }), {
        correlationId,
        type: messageType
      });
      broker.publish('event', 'activity.catch', (0, _messageHelper.cloneContent)(content, {
        message: message.content.message
      }), {
        type: 'catch',
        correlationId
      });
      complete(message.content.message, {
        correlationId
      });
    }

    function onApiMessage(routingKey, message) {
      const {
        type: messageType,
        correlationId
      } = message.properties;

      switch (messageType) {
        case 'message':
        case 'signal':
          {
            return complete(message.content.message, {
              correlationId
            });
          }

        case 'discard':
          {
            completed = true;
            stop();
            return broker.publish('execution', 'execute.discard', (0, _messageHelper.cloneContent)(content), {
              correlationId
            });
          }

        case 'stop':
          {
            return stop();
          }
      }
    }

    function complete(output, options) {
      completed = true;
      stop();
      return broker.publish('execution', 'execute.completed', (0, _messageHelper.cloneContent)(content, {
        output
      }), options);
    }

    function stop() {
      broker.cancel(`_onmessage-${executionId}`);
      broker.cancel(`_api-${executionId}`);
    }
  }

  function setupMessageHandling(executionId) {
    broker.subscribeTmp('api', '#.signal.*', onDelegateMessage, {
      noAck: true,
      consumerTag: `_api-delegated-${executionId}`
    }, {
      noAck: true
    });
    broker.subscribeTmp('api', `activity.stop.${executionId}`, onStopApiMessage, {
      noAck: true,
      consumerTag: `_api-stop-${executionId}`,
      priority: 400
    });
    broker.subscribeTmp('execution', 'execute.#', onComplete, {
      noAck: true,
      consumerTag: `_execution-complete-${executionId}`
    }, {
      noAck: true
    });

    function onDelegateMessage(_, message) {
      if (!message.properties.delegate) return;
      broker.sendToQueue('message', message.content, message.properties);
    }

    function onStopApiMessage() {
      stop(true);
    }

    function onComplete(routingKey, {
      content
    }) {
      if (!content.isRootScope) return;

      switch (routingKey) {
        case 'execute.completed':
        case 'execute.error':
        case 'execute.discard':
          stop();
          break;
      }
    }

    function stop(keepMessageQ) {
      broker.cancel(`_api-delegated-${executionId}`);
      broker.cancel(`_api-stop-${executionId}`);
      broker.cancel(`_execution-complete-${executionId}`);
      if (!keepMessageQ) broker.purgeQueue('message');
    }
  }

  function resolveReference(message) {
    if (!referenceElement) {
      return {
        message: { ...reference
        },
        description: 'anonymous message'
      };
    }

    const result = {
      message: referenceElement.resolve(message)
    };
    result.description = `${result.message.name} <${result.message.id}>`;
    return result;
  }
}
},{"../activity/Activity":11,"../messageHelper":52}],58:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ScriptTask;
exports.ScriptTaskBehaviour = ScriptTaskBehaviour;

var _Activity = _interopRequireDefault(require("../activity/Activity"));

var _ExecutionScope = _interopRequireDefault(require("../activity/ExecutionScope"));

var _Errors = require("../error/Errors");

var _messageHelper = require("../messageHelper");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ScriptTask(activityDef, context) {
  return (0, _Activity.default)(ScriptTaskBehaviour, activityDef, context);
}

function ScriptTaskBehaviour(activity) {
  const {
    id,
    type,
    behaviour,
    broker,
    logger,
    environment,
    emitFatal
  } = activity;
  const {
    scriptFormat
  } = activity.behaviour;
  const loopCharacteristics = behaviour.loopCharacteristics && behaviour.loopCharacteristics.Behaviour(activity, behaviour.loopCharacteristics);
  environment.registerScript(activity);
  const source = {
    id,
    type,
    loopCharacteristics,
    execute
  };
  return source;

  function execute(executeMessage) {
    const content = executeMessage.content;

    if (loopCharacteristics && content.isRootScope) {
      return loopCharacteristics.execute(executeMessage);
    }

    const script = environment.getScript(scriptFormat, activity, (0, _messageHelper.cloneMessage)(executeMessage));

    if (!script) {
      return emitFatal(new _Errors.ActivityError(`Script format ${scriptFormat} is unsupported or was not registered for <${activity.id}>`, executeMessage), content);
    }

    return script.execute((0, _ExecutionScope.default)(activity, executeMessage), scriptCallback);

    function scriptCallback(err, output) {
      if (err) {
        logger.error(`<${content.executionId} (${id})>`, err);
        return broker.publish('execution', 'execute.error', (0, _messageHelper.cloneContent)(content, {
          error: new _Errors.ActivityError(err.message, executeMessage, err)
        }, {
          mandatory: true
        }));
      }

      return broker.publish('execution', 'execute.completed', (0, _messageHelper.cloneContent)(content, {
        output
      }));
    }
  }
}
},{"../activity/Activity":11,"../activity/ExecutionScope":15,"../error/Errors":21,"../messageHelper":52}],59:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ServiceImplementation;

var _ExecutionScope = _interopRequireDefault(require("../activity/ExecutionScope"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ServiceImplementation(activity) {
  const {
    type: atype,
    behaviour,
    environment
  } = activity;
  const implementation = behaviour.implementation;
  const type = `${atype}:implementation`;
  return {
    type,
    implementation,
    execute
  };

  function execute(executionMessage, callback) {
    const serviceFn = environment.resolveExpression(implementation, executionMessage);
    if (typeof serviceFn !== 'function') return callback(new Error(`Implementation ${implementation} did not resolve to a function`));
    serviceFn.call(activity, (0, _ExecutionScope.default)(activity, executionMessage), (err, ...args) => {
      callback(err, args);
    });
  }
}
},{"../activity/ExecutionScope":15}],60:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ServiceTask;
exports.ServiceTaskBehaviour = ServiceTaskBehaviour;

var _Activity = _interopRequireDefault(require("../activity/Activity"));

var _Errors = require("../error/Errors");

var _messageHelper = require("../messageHelper");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ServiceTask(activityDef, context) {
  return (0, _Activity.default)(ServiceTaskBehaviour, activityDef, context);
}

function ServiceTaskBehaviour(activity) {
  const {
    id,
    type,
    broker,
    logger,
    behaviour,
    environment,
    emitFatal
  } = activity;
  const loopCharacteristics = behaviour.loopCharacteristics && behaviour.loopCharacteristics.Behaviour(activity, behaviour.loopCharacteristics);
  const source = {
    id,
    type,
    loopCharacteristics,
    execute,
    getService
  };
  return source;

  function execute(executeMessage) {
    const content = executeMessage.content;

    if (loopCharacteristics && content.isRootScope) {
      return loopCharacteristics.execute(executeMessage);
    }

    const {
      executionId
    } = content;
    const service = getService(executeMessage);
    if (!service) return emitFatal(new _Errors.ActivityError(`<${id}> service not defined`, executeMessage), content);
    broker.subscribeTmp('api', `activity.#.${content.executionId}`, onApiMessage, {
      consumerTag: `_api-${executionId}`
    });
    return service.execute(executeMessage, (err, output) => {
      broker.cancel(`_api-${executionId}`);

      if (err) {
        logger.error(`<${content.executionId} (${id})>`, err);
        return broker.publish('execution', 'execute.error', (0, _messageHelper.cloneContent)(content, {
          error: new _Errors.ActivityError(err.message, executeMessage, err)
        }, {
          mandatory: true
        }));
      }

      return broker.publish('execution', 'execute.completed', (0, _messageHelper.cloneContent)(content, {
        output,
        state: 'complete'
      }));
    });

    function onApiMessage(_, message) {
      if (message.properties.type === 'discard') {
        broker.cancel(`_api-${executionId}`);
        if (service && service.discard) service.discard(message);
        logger.debug(`<${content.executionId} (${id})> discarded`);
        return broker.publish('execution', 'execute.discard', (0, _messageHelper.cloneContent)(content, {
          state: 'discard'
        }));
      }

      if (message.properties.type === 'stop') {
        broker.cancel(`_api-${executionId}`);
        if (service && service.stop) service.stop(message);
        return logger.debug(`<${content.executionId} (${id})> stopped`);
      }
    }
  }

  function getService(message) {
    const Service = behaviour.Service;

    if (!Service) {
      return environment.settings.enableDummyService ? DummyService(activity) : null;
    }

    return Service(activity, (0, _messageHelper.cloneMessage)(message));
  }

  function DummyService() {
    logger.debug(`<${id}> returning dummy service`);
    return {
      type: 'dummyservice',
      execute: executeDummyService
    };

    function executeDummyService(...args) {
      logger.debug(`<${id}> executing dummy service`);
      const next = args.pop();
      next();
    }
  }
}
},{"../activity/Activity":11,"../error/Errors":21,"../messageHelper":52}],61:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = SignalTask;
exports.SignalTaskBehaviour = SignalTaskBehaviour;

var _Activity = _interopRequireDefault(require("../activity/Activity"));

var _Errors = require("../error/Errors");

var _messageHelper = require("../messageHelper");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function SignalTask(activityDef, context) {
  return (0, _Activity.default)(SignalTaskBehaviour, activityDef, context);
}

function SignalTaskBehaviour(activity) {
  const {
    id,
    type,
    behaviour,
    broker
  } = activity;
  const loopCharacteristics = behaviour.loopCharacteristics && behaviour.loopCharacteristics.Behaviour(activity, behaviour.loopCharacteristics);
  const source = {
    id,
    type,
    loopCharacteristics,
    execute
  };
  return source;

  function execute(executeMessage) {
    const content = executeMessage.content;

    if (loopCharacteristics && content.isRootScope) {
      return loopCharacteristics.execute(executeMessage);
    }

    const {
      executionId
    } = content;
    broker.subscribeTmp('api', `activity.#.${executionId}`, onApiMessage, {
      noAck: true,
      consumerTag: `_api-${executionId}`
    });
    broker.subscribeTmp('api', '#.signal.*', onDelegatedApiMessage, {
      noAck: true,
      consumerTag: `_api-delegated-${executionId}`
    });
    broker.publish('event', 'activity.wait', (0, _messageHelper.cloneContent)(content, {
      state: 'wait'
    }));

    function onDelegatedApiMessage(routingKey, message) {
      if (!message.properties.delegate) return;
      const {
        content: delegateContent
      } = message;
      if (!delegateContent || !delegateContent.message) return;
      const {
        id: signalId,
        executionId: signalExecutionId
      } = delegateContent.message;
      if (loopCharacteristics && signalExecutionId !== executionId) return;
      if (signalId !== id && signalExecutionId !== executionId) return;
      const {
        type: messageType,
        correlationId
      } = message.properties;
      broker.publish('event', 'activity.consumed', (0, _messageHelper.cloneContent)(content, {
        message: { ...delegateContent.message
        }
      }), {
        correlationId,
        type: messageType
      });
      return onApiMessage(routingKey, message);
    }

    function onApiMessage(routingKey, message) {
      const {
        type: messageType,
        correlationId
      } = message.properties;

      switch (messageType) {
        case 'stop':
          return stop();

        case 'signal':
          stop();
          return broker.publish('execution', 'execute.completed', (0, _messageHelper.cloneContent)(content, {
            output: message.content.message,
            state: 'signal'
          }), {
            correlationId
          });

        case 'error':
          stop();
          return broker.publish('execution', 'execute.error', (0, _messageHelper.cloneContent)(content, {
            error: new _Errors.ActivityError(message.content.message, executeMessage, message.content)
          }, {
            mandatory: true,
            correlationId
          }));

        case 'discard':
          stop();
          return broker.publish('execution', 'execute.discard', (0, _messageHelper.cloneContent)(content), {
            correlationId
          });
      }
    }

    function stop() {
      broker.cancel(`_api-${executionId}`);
      broker.cancel(`_api-delegated-${executionId}`);
    }
  }
}
},{"../activity/Activity":11,"../error/Errors":21,"../messageHelper":52}],62:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = StandardLoopCharacteristics;

var _LoopCharacteristics = _interopRequireDefault(require("./LoopCharacteristics"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function StandardLoopCharacteristics(activity, loopCharacteristics) {
  let {
    behaviour
  } = loopCharacteristics;
  behaviour = { ...behaviour,
    isSequential: true
  };
  return (0, _LoopCharacteristics.default)(activity, { ...loopCharacteristics,
    behaviour
  });
}
},{"./LoopCharacteristics":56}],63:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = SubProcess;
exports.SubProcessBehaviour = SubProcessBehaviour;

var _Activity = _interopRequireDefault(require("../activity/Activity"));

var _ProcessExecution = _interopRequireDefault(require("../process/ProcessExecution"));

var _messageHelper = require("../messageHelper");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function SubProcess(activityDef, context) {
  const triggeredByEvent = activityDef.behaviour && activityDef.behaviour.triggeredByEvent;
  const subProcess = (0, _Activity.default)(SubProcessBehaviour, { ...activityDef,
    isSubProcess: true,
    triggeredByEvent
  }, context);

  subProcess.getStartActivities = function getStartActivities(filterOptions) {
    return context.getStartActivities(filterOptions, activityDef.id);
  };

  subProcess.broker.cancel('_api-shake');
  subProcess.broker.subscribeTmp('api', 'activity.shake.*', onShake, {
    noAck: true,
    consumerTag: '_api-shake'
  });
  return subProcess;

  function onShake(_, message) {
    const {
      startId
    } = message.content;
    const last = message.content.sequence.pop();
    const sequence = (0, _ProcessExecution.default)(subProcess, context).shake(startId);
    message.content.sequence.push({ ...last,
      isSubProcess: true,
      sequence
    });
  }
}

function SubProcessBehaviour(activity, context) {
  const {
    id,
    type,
    broker,
    behaviour,
    environment,
    logger
  } = activity;
  const loopCharacteristics = behaviour.loopCharacteristics && behaviour.loopCharacteristics.Behaviour(activity, behaviour.loopCharacteristics);
  const processExecutions = [];
  let rootExecutionId;
  const source = {
    id,
    type,
    loopCharacteristics,

    get execution() {
      return processExecutions[0];
    },

    get executions() {
      return processExecutions;
    },

    execute,
    getApi,
    getState,

    getPostponed() {
      return this.executions.reduce((result, pe) => {
        result = result.concat(pe.getPostponed());
        return result;
      }, []);
    },

    recover
  };
  return source;

  function execute(executeMessage) {
    const content = executeMessage.content;

    if (content.isRootScope) {
      rootExecutionId = content.executionId;
    }

    if (loopCharacteristics && content.isRootScope) {
      broker.subscribeTmp('api', `activity.#.${rootExecutionId}`, onApiRootMessage, {
        noAck: true,
        consumerTag: `_api-${rootExecutionId}`,
        priority: 200
      });
      return loopCharacteristics.execute(executeMessage);
    }

    const processExecution = upsertExecution(executeMessage);
    if (!processExecution) return;
    return processExecution.execute(executeMessage);

    function onApiRootMessage(routingKey, message) {
      const messageType = message.properties.type;

      switch (messageType) {
        case 'stop':
          broker.cancel(`_api-${rootExecutionId}`);
          stop();
          break;

        case 'discard':
          broker.cancel(`_api-${rootExecutionId}`);
          discard();
          break;
      }
    }
  }

  function stop() {
    return processExecutions.forEach(pe => {
      broker.cancel(`_sub-process-execution-${pe.executionId}`);
      broker.cancel(`_sub-process-api-${pe.executionId}`);
      pe.stop();
    });
  }

  function discard() {
    return processExecutions.forEach(pe => {
      broker.cancel(`_sub-process-execution-${pe.executionId}`);
      broker.cancel(`_sub-process-api-${pe.executionId}`);
      pe.discard();
    });
  }

  function getState() {
    if (loopCharacteristics) {
      return {
        executions: processExecutions.map(getExecutionState)
      };
    }

    if (processExecutions.length) {
      return getExecutionState(processExecutions[0]);
    }

    function getExecutionState(pe) {
      const state = pe.getState();
      state.environment = pe.environment.getState();
      return state;
    }
  }

  function recover(state) {
    if (!state) return;

    if (loopCharacteristics && state.executions) {
      processExecutions.splice(0);
      return state.executions.forEach(recover);
    } else if (!loopCharacteristics) {
      processExecutions.splice(0);
    }

    const subEnvironment = environment.clone().recover(state.environment);
    const subContext = context.clone(subEnvironment);
    const execution = (0, _ProcessExecution.default)(activity, subContext).recover(state);
    processExecutions.push(execution);
    return execution;
  }

  function upsertExecution(executeMessage) {
    const content = executeMessage.content;
    const executionId = content.executionId;
    let execution = getExecutionById(executionId);

    if (execution) {
      if (executeMessage.fields.redelivered) addListeners(execution, executionId);
      return execution;
    }

    const subEnvironment = environment.clone({
      output: {}
    });
    const subContext = context.clone(subEnvironment);
    execution = (0, _ProcessExecution.default)(activity, subContext);
    processExecutions.push(execution);
    addListeners(execution, executionId);
    return execution;
  }

  function addListeners(processExecution, executionId) {
    const executionConsumerTag = `_sub-process-execution-${executionId}`;
    broker.subscribeTmp('subprocess-execution', `execution.#.${executionId}`, onExecutionCompleted, {
      noAck: true,
      consumerTag: executionConsumerTag
    });

    function onExecutionCompleted(_, message) {
      const content = message.content;
      const messageType = message.properties.type;
      if (message.fields.redelivered && message.properties.persistent === false) return;

      switch (messageType) {
        case 'stopped':
          {
            broker.cancel(executionConsumerTag);
            break;
          }

        case 'discard':
          {
            broker.cancel(executionConsumerTag);
            broker.publish('execution', 'execute.discard', (0, _messageHelper.cloneContent)(content));
            break;
          }

        case 'completed':
          {
            broker.cancel(executionConsumerTag);
            broker.publish('execution', 'execute.completed', (0, _messageHelper.cloneContent)(content));
            break;
          }

        case 'error':
          {
            broker.cancel(executionConsumerTag);
            const {
              error
            } = content;
            logger.error(`<${id}>`, error);
            broker.publish('execution', 'execute.error', (0, _messageHelper.cloneContent)(content));
            break;
          }
      }
    }
  }

  function getApi(apiMessage) {
    const content = apiMessage.content;
    if (content.id === id) return;
    let execution;

    if (execution = getExecutionById(content.parent.executionId)) {
      return execution.getApi(apiMessage);
    }

    const parentPath = content.parent.path;

    for (let i = 0; i < parentPath.length; i++) {
      if (execution = getExecutionById(parentPath[i].executionId)) return execution.getApi(apiMessage);
    }
  }

  function getExecutionById(executionId) {
    return processExecutions.find(pe => pe.executionId === executionId);
  }
}
},{"../activity/Activity":11,"../messageHelper":52,"../process/ProcessExecution":54}],64:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Task;
exports.TaskBehaviour = TaskBehaviour;

var _Activity = _interopRequireDefault(require("../activity/Activity"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Task(activityDef, context) {
  return (0, _Activity.default)(TaskBehaviour, activityDef, context);
}

function TaskBehaviour(activity) {
  const {
    id,
    type,
    behaviour,
    broker
  } = activity;
  const loopCharacteristics = behaviour.loopCharacteristics && behaviour.loopCharacteristics.Behaviour(activity, behaviour.loopCharacteristics);
  const source = {
    id,
    type,
    loopCharacteristics,
    execute
  };
  return source;

  function execute(executeMessage) {
    const content = executeMessage.content;

    if (loopCharacteristics && content.isRootScope) {
      return loopCharacteristics.execute(executeMessage);
    }

    return broker.publish('execution', 'execute.completed', { ...content
    });
  }
}
},{"../activity/Activity":11}],65:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Transaction;

var _SubProcess = _interopRequireDefault(require("./SubProcess"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Transaction(activityDef, context) {
  const transaction = {
    type: 'transaction',
    ...activityDef,
    isTransaction: true
  };
  const activity = (0, _SubProcess.default)(transaction, context);
  return activity;
}
},{"./SubProcess":63}],66:[function(require,module,exports){
(function (Buffer){(function (){
'use strict';

const BpmnModdle = require('bpmn-moddle');
const DebugLogger = require('./lib/Logger');
const elements = require('bpmn-elements');
const getOptionsAndCallback = require('./lib/getOptionsAndCallback');
const JavaScripts = require('./lib/JavaScripts');
const ProcessOutputDataObject = require('./lib/extensions/ProcessOutputDataObject');
const {Broker} = require('smqp');
const {default: serializer, deserialize, TypeResolver} = require('moddle-context-serializer');
const {EventEmitter} = require('events');
const {version: engineVersion} = require('./package.json');

module.exports = {Engine};

function Engine(options = {}) {
  options = {Logger: DebugLogger, scripts: JavaScripts(options.disableDummyScript), ...options};

  let {name, Logger, sourceContext} = options;

  let loadedDefinitions, execution;
  const logger = Logger('engine');

  const sources = [];
  const typeResolver = TypeResolver({
    ...elements,
    ...(options.elements || {})
  }, defaultTypeResolver);

  function defaultTypeResolver(elementTypes) {
    if (options.typeResolver) return options.typeResolver(elementTypes);
    elementTypes['bpmn:DataObject'] = ProcessOutputDataObject;
  }

  const pendingSources = [];
  if (options.source) pendingSources.push(serializeSource(options.source));
  if (options.moddleContext) pendingSources.push(serializeModdleContext(options.moddleContext));
  if (sourceContext) pendingSources.push(sourceContext);

  let environment = elements.Environment(options);
  const emitter = new EventEmitter();

  const engine = Object.assign(emitter, {
    logger,
    addSource,
    execute,
    getDefinitionById,
    getDefinitions,
    getState,
    recover,
    resume,
    stop,
    waitFor,
  });

  const broker = Broker(engine);
  broker.assertExchange('event', 'topic', {autoDelete: false});

  Object.defineProperty(engine, 'broker', {
    enumerable: true,
    get() {
      return broker;
    }
  });

  Object.defineProperty(engine, 'name', {
    enumerable: true,
    get() {
      return name;
    },
    set(value) {
      name = value;
    },
  });

  Object.defineProperty(engine, 'environment', {
    enumerable: true,
    get() {
      return environment;
    },
  });

  Object.defineProperty(engine, 'state', {
    enumerable: true,
    get() {
      if (execution) return execution.state;
      return 'idle';
    },
  });

  Object.defineProperty(engine, 'stopped', {
    enumerable: true,
    get() {
      if (execution) return execution.stopped;
      return false;
    },
  });

  Object.defineProperty(engine, 'execution', {
    enumerable: true,
    get() {
      return execution;
    },
  });

  return engine;

  async function execute(...args) {
    const [executeOptions, callback] = getOptionsAndCallback(...args);
    try {
      var definitions = await loadDefinitions(executeOptions); // eslint-disable-line no-var
    } catch (err) {
      if (callback) return callback(err);
      throw err;
    }

    execution = Execution(engine, definitions, options);
    return execution.execute(executeOptions, callback);
  }

  function stop() {
    if (!execution) return;
    return execution.stop();
  }

  function recover(savedState, recoverOptions) {
    if (!savedState) return engine;
    if (!name) name = savedState.name;

    logger.debug(`<${name}> recover`);

    if (recoverOptions) environment = elements.Environment(recoverOptions);
    if (savedState.environment) environment = environment.recover(savedState.environment);

    if (!savedState.definitions) return engine;

    const preSources = pendingSources.splice(0);

    loadedDefinitions = savedState.definitions.map((dState) => {
      let source;
      if (dState.source) source = deserialize(JSON.parse(dState.source), typeResolver);
      else source = preSources.find((s) => s.id === dState.id);

      pendingSources.push(source);

      logger.debug(`<${name}> recover ${dState.type} <${dState.id}>`);

      const definition = loadDefinition(source);
      definition.recover(dState);

      return definition;
    });

    execution = Execution(engine, loadedDefinitions, {}, true);

    return engine;
  }

  async function resume(...args) {
    const [resumeOptions, callback] = getOptionsAndCallback(...args);

    if (!execution) {
      const definitions = await getDefinitions();
      if (!definitions.length) {
        const err = new Error('nothing to resume');
        if (callback) return callback(err);
        throw err;
      }
      execution = Execution(engine, definitions, options);
    }

    return execution.resume(resumeOptions, callback);
  }

  function addSource({sourceContext: addContext} = {}) {
    if (!addContext) return;
    if (loadedDefinitions) loadedDefinitions.splice(0);
    pendingSources.push(addContext);
  }

  async function getDefinitions(executeOptions) {
    if (loadedDefinitions && loadedDefinitions.length) return loadedDefinitions;
    return loadDefinitions(executeOptions);
  }

  async function getDefinitionById(id) {
    return (await getDefinitions()).find((d) => d.id === id);
  }

  async function getState() {
    if (execution) return execution.getState();

    const definitions = await getDefinitions();
    return Execution(engine, definitions, options).getState();
  }

  async function loadDefinitions(executeOptions) {
    const runSources = await Promise.all(pendingSources);
    loadedDefinitions = runSources.map((source) => loadDefinition(source, executeOptions));
    return loadedDefinitions;
  }

  function loadDefinition(serializedContext, executeOptions = {}) {
    const {settings, variables} = executeOptions;

    const context = elements.Context(serializedContext, environment.clone({
      listener: environment.options.listener,
      ...executeOptions,
      settings: {
        ...environment.settings,
        ...settings,
      },
      variables: {
        ...environment.variables,
        ...variables,
      },
      source: serializedContext,
    }));

    return elements.Definition(context);
  }

  async function serializeSource(source) {
    const moddleContext = await getModdleContext(source);
    return serializeModdleContext(moddleContext);
  }

  function serializeModdleContext(moddleContext) {
    const serialized = serializer(moddleContext, typeResolver);
    sources.push(serialized);
    return serialized;
  }

  function getModdleContext(source) {
    const bpmnModdle = new BpmnModdle(options.moddleOptions);
    return bpmnModdle.fromXML(Buffer.isBuffer(source) ? source.toString() : source.trim());
  }

  async function waitFor(eventName) {
    return new Promise((resolve, reject) => {
      engine.once(eventName, onEvent);
      engine.once('error', onError);

      function onEvent(api) {
        engine.removeListener('error', onError);
        resolve(api);
      }
      function onError(err) {
        engine.removeListener(eventName, onError);
        reject(err);
      }
    });
  }
}

function Execution(engine, definitions, options, isRecovered = false) {
  const {environment, logger, waitFor, broker} = engine;
  broker.on('return', onBrokerReturn);

  let state = 'idle';
  let stopped = isRecovered;
  const executing = [];

  return {
    ...Api(),
    get state() {
      return state;
    },
    get stopped() {
      return stopped;
    },
    execute,
    resume,
  };

  function execute(executeOptions, callback) {
    setup(executeOptions);
    stopped = false;
    logger.debug(`<${engine.name}> execute`);

    addConsumerCallbacks(callback);
    const definitionExecutions = definitions.reduce((result, definition) => {
      if (!definition.getExecutableProcesses().length) return result;
      result.push(definition.run());
      return result;
    }, []);

    if (!definitionExecutions.length) {
      const error = new Error('No executable processes');
      if (!callback) return engine.emit('error', error);
      return callback(error);
    }

    return Api();
  }

  function resume(resumeOptions, callback) {
    setup(resumeOptions);

    stopped = false;
    logger.debug(`<${engine.name}> resume`);
    addConsumerCallbacks(callback);

    executing.splice(0);
    definitions.forEach((definition) => definition.resume());

    return Api();
  }

  function addConsumerCallbacks(callback) {
    if (!callback) return;

    broker.off('return', onBrokerReturn);

    clearConsumers();

    broker.subscribeOnce('event', 'engine.stop', cbLeave, {consumerTag: 'ctag-cb-stop'});
    broker.subscribeOnce('event', 'engine.end', cbLeave, {consumerTag: 'ctag-cb-end'});
    broker.subscribeOnce('event', 'engine.error', cbError, {consumerTag: 'ctag-cb-error'});

    return callback;

    function cbLeave() {
      clearConsumers();
      return callback(null, Api());
    }
    function cbError(_, message) {
      clearConsumers();
      return callback(message.content);
    }

    function clearConsumers() {
      broker.cancel('ctag-cb-stop');
      broker.cancel('ctag-cb-end');
      broker.cancel('ctag-cb-error');
      broker.on('return', onBrokerReturn);
    }
  }

  async function stop() {
    const prom = waitFor('stop');
    stopped = true;
    const timers = environment.timers;
    timers.executing.slice().forEach((ref) => timers.clearTimeout(ref));
    executing.splice(0).forEach((d) => d.stop());
    const result = await prom;
    state = 'stopped';
    return result;
  }

  function setup(setupOptions = {}) {
    const listener = setupOptions.listener || options.listener;
    if (listener && typeof listener.emit !== 'function') throw new Error('listener.emit is not a function');

    definitions.forEach(setupDefinition);

    function setupDefinition(definition) {
      if (listener) definition.environment.options.listener = listener;

      definition.broker.subscribeTmp('event', 'definition.#', onChildMessage, {noAck: true, consumerTag: '_engine_definition'});
      definition.broker.subscribeTmp('event', 'process.#', onChildMessage, {noAck: true, consumerTag: '_engine_process'});
      definition.broker.subscribeTmp('event', 'activity.#', onChildMessage, {noAck: true, consumerTag: '_engine_activity'});
      definition.broker.subscribeTmp('event', 'flow.#', onChildMessage, {noAck: true, consumerTag: '_engine_flow'});
    }
  }

  function onChildMessage(routingKey, message, owner) {
    const {environment: ownerEnvironment} = owner;
    const listener = ownerEnvironment.options && ownerEnvironment.options.listener;
    state = 'running';

    let executionStopped, executionCompleted, executionErrored;
    const elementApi = owner.getApi && owner.getApi(message);

    switch (routingKey) {
      case 'definition.resume':
      case 'definition.enter': {
        const idx = executing.indexOf(owner);
        if (idx > -1) break;
        executing.push(owner);
        break;
      }
      case 'definition.stop':
        teardownDefinition(owner);
        if (executing.some((d) => d.isRunning)) break;

        executionStopped = true;
        stopped = true;
        break;
      case 'definition.leave':
        teardownDefinition(owner);

        if (executing.some((d) => d.isRunning)) break;

        executionCompleted = true;
        break;
      case 'definition.error':
        teardownDefinition(owner);
        executionErrored = true;
        break;
      case 'activity.wait': {
        emitListenerEvent('wait', owner.getApi(message), Api());
        break;
      }
      case 'process.end': {
        if (!message.content.output) break;
        for (const key in message.content.output) {
          switch (key) {
            case 'data': {
              environment.output.data = environment.output.data || {};
              environment.output.data = {...environment.output.data, ...message.content.output.data};
              break;
            }
            default: {
              environment.output[key] = message.content.output[key];
            }
          }
        }
        break;
      }
    }

    emitListenerEvent(routingKey, elementApi, Api());
    broker.publish('event', routingKey, {...message.content}, {...message.properties, mandatory: false});

    if (executionStopped) {
      state = 'stopped';
      logger.debug(`<${engine.name}> stopped`);
      onComplete('stop');
    } else if (executionCompleted) {
      state = 'idle';
      logger.debug(`<${engine.name}> completed`);
      onComplete('end');
    } else if (executionErrored) {
      state = 'error';
      logger.debug(`<${engine.name}> error`);
      onError(message.content.error);
    }

    function onComplete(eventName) {
      broker.publish('event', `engine.${eventName}`, {}, {type: eventName});
      engine.emit(eventName, Api());
    }

    function onError(err) {
      broker.publish('event', 'engine.error', err, {type: 'error', mandatory: true});
    }

    function emitListenerEvent(...args) {
      if (!listener) return;
      listener.emit(...args);
    }
  }

  function teardownDefinition(definition) {
    const idx = executing.indexOf(definition);
    if (idx > -1) executing.splice(idx, 1);

    definition.broker.cancel('_engine_definition');
    definition.broker.cancel('_engine_process');
    definition.broker.cancel('_engine_activity');
    definition.broker.cancel('_engine_flow');
  }

  function getState() {
    return {
      name: engine.name,
      state,
      stopped,
      engineVersion,
      environment: environment.getState(),
      definitions: definitions.map(getDefinitionState),
    };
  }

  function getActivityById(activityId) {
    for (const definition of definitions) {
      const activity = definition.getActivityById(activityId);
      if (activity) return activity;
    }
  }

  function getPostponed() {
    const defs = stopped ? definitions : executing;
    return defs.reduce((result, definition) => {
      result = result.concat(definition.getPostponed());
      return result;
    }, []);
  }

  function signal(payload, {ignoreSameDefinition} = {}) {
    for (const definition of executing) {
      if (ignoreSameDefinition && payload && payload.parent && payload.parent.id === definition.id) continue;
      definition.signal(payload);
    }
  }

  function cancelActivity(payload) {
    for (const definition of executing) {
      definition.cancelActivity(payload);
    }
  }

  function getDefinitionState(definition) {
    return {
      ...definition.getState(),
      source: definition.environment.options.source.serialize(),
    };
  }

  function onBrokerReturn(message) {
    if (message.properties.type === 'error') {
      engine.emit('error', message.content);
    }
  }

  function Api() {
    return {
      name: engine.name,
      get state() {
        return state;
      },
      get stopped() {
        return stopped;
      },
      broker,
      environment,
      definitions,
      getActivityById,
      getState,
      getPostponed,
      signal,
      cancelActivity,
      stop,
      waitFor,
    };
  }
}

}).call(this)}).call(this,{"isBuffer":require("../is-buffer/index.js")})
},{"../is-buffer/index.js":76,"./lib/JavaScripts":67,"./lib/Logger":68,"./lib/extensions/ProcessOutputDataObject":69,"./lib/getOptionsAndCallback":70,"./package.json":71,"bpmn-elements":1,"bpmn-moddle":72,"events":75,"moddle-context-serializer":79,"smqp":85}],67:[function(require,module,exports){
'use strict';

const {Script} = require('vm');

module.exports = function Scripts(disableDummy) {
  const scripts = {};

  return {
    getScript,
    register,
  };

  function register({id, type, behaviour, logger, environment}) {
    let scriptBody, language;

    switch (type) {
      case 'bpmn:SequenceFlow': {
        if (!behaviour.conditionExpression) return;
        language = behaviour.conditionExpression.language;
        if (!language) return;
        scriptBody = behaviour.conditionExpression.body;
        break;
      }
      default: {
        language = behaviour.scriptFormat;
        scriptBody = behaviour.script;
      }
    }

    const filename = `${type}/${id}`;
    if (!language || !scriptBody) {
      if (disableDummy) return;
      const script = new DummyScript(language, filename, logger);
      scripts[id] = script;
      return script;
    }

    if (!/^javascript$/i.test(language)) return;

    const script = new JavaScript(language, filename, scriptBody, environment);
    scripts[id] = script;

    return script;
  }

  function getScript(language, {id}) {
    return scripts[id];
  }
};

function JavaScript(language, filename, scriptBody, environment) {
  this.id = filename;
  this.script = new Script(scriptBody, {filename});
  this.language = language;
  this.environment = environment;
}

JavaScript.prototype.execute = function execute(executionContext, callback) {
  const timers = this.environment.timers.register(executionContext);
  return this.script.runInNewContext({...executionContext, ...timers, next: callback});
};

function DummyScript(language, filename, logger) {
  this.id = filename;
  this.isDummy = true;
  this.language = language;
  this.logger = logger;
}

DummyScript.prototype.execute = function execute(executionContext, callback) {
  const {id, executionId} = executionContext.content;
  this.logger.debug(`<${executionId} (${id})> passthrough dummy script ${this.language || 'esperanto'}`);
  callback();
};


},{"vm":92}],68:[function(require,module,exports){
'use strict';

const Debug = require('debug');

module.exports = function Logger(scope) {
  return {
    debug: Debug('bpmn-engine:' + scope),
    error: Debug('bpmn-engine:error:' + scope),
    warn: Debug('bpmn-engine:warn:' + scope),
  };
};

},{"debug":73}],69:[function(require,module,exports){
'use strict';

module.exports = function ProcessOutputDataObject(dataObjectDef, {environment}) {
  const {id, type, name, behaviour, parent} = dataObjectDef;

  const source = {
    id,
    name,
    type,
    behaviour,
    parent,
    read(broker, exchange, routingKeyPrefix, messageProperties) {
      const value = environment.variables.data && environment.variables.data[id];
      return broker.publish(exchange, `${routingKeyPrefix}response`, {id, name, type, value}, messageProperties);
    },
    write(broker, exchange, routingKeyPrefix, value, messageProperties) {
      environment.variables.data = environment.variables.data || {};
      environment.variables.data[id] = value;

      environment.output.data = environment.output.data || {};
      environment.output.data[id] = value;

      return broker.publish(exchange, `${routingKeyPrefix}response`, {id, name, type, value}, messageProperties);
    },
  };

  return source;
};

},{}],70:[function(require,module,exports){
'use strict';

module.exports = function getOptionsAndCallback(optionsOrCallback, callback) {
  let options;
  if (typeof optionsOrCallback === 'function') {
    callback = optionsOrCallback;
  } else {
    options = optionsOrCallback;
  }

  return [options, callback];
};

},{}],71:[function(require,module,exports){
module.exports={
  "_args": [
    [
      "bpmn-engine@13.0.0",
      "C:\\Users\\Cardif\\Documents\\VSC\\Group-Projectt-CCC"
    ]
  ],
  "_from": "bpmn-engine@13.0.0",
  "_id": "bpmn-engine@13.0.0",
  "_inBundle": false,
  "_integrity": "sha512-TQCz5LkRS1qZA7zs9pGvd4rcWncH/qppyZYtlC09HjIVsp3Cg8Sm4/2kDgZZdUlMWrK+On8txr35oSH1aR//qA==",
  "_location": "/bpmn-engine",
  "_phantomChildren": {},
  "_requested": {
    "type": "version",
    "registry": true,
    "raw": "bpmn-engine@13.0.0",
    "name": "bpmn-engine",
    "escapedName": "bpmn-engine",
    "rawSpec": "13.0.0",
    "saveSpec": null,
    "fetchSpec": "13.0.0"
  },
  "_requiredBy": [
    "/"
  ],
  "_resolved": "https://registry.npmjs.org/bpmn-engine/-/bpmn-engine-13.0.0.tgz",
  "_spec": "13.0.0",
  "_where": "C:\\Users\\Cardif\\Documents\\VSC\\Group-Projectt-CCC",
  "author": {
    "name": "Pål Edman",
    "url": "https://github.com/paed01"
  },
  "bugs": {
    "url": "https://github.com/paed01/bpmn-engine/issues"
  },
  "dependencies": {
    "bpmn-elements": "^6.0.0",
    "bpmn-moddle": "^7.0.4",
    "debug": "^4.3.1",
    "moddle-context-serializer": "^1.1.1",
    "smqp": "^5.1.0"
  },
  "description": "BPMN 2.0 execution engine. Open source javascript workflow engine.",
  "devDependencies": {
    "bent": "^7.3.12",
    "camunda-bpmn-moddle": "^6.1.0",
    "chai": "^4.3.0",
    "chronokinesis": "^3.0.0",
    "eslint": "^7.23.0",
    "markdown-toc": "^1.2.0",
    "mocha": "^9.1.2",
    "mocha-cakes-2": "^3.3.0",
    "nock": "^13.0.7",
    "nyc": "^15.1.0"
  },
  "engines": {
    "node": ">=10"
  },
  "files": [
    "lib/",
    "types/",
    "index.js"
  ],
  "homepage": "https://github.com/paed01/bpmn-engine#readme",
  "keywords": [
    "workflow",
    "engine",
    "process",
    "automation",
    "bpmn",
    "bpmn 2"
  ],
  "license": "MIT",
  "licenses": [
    {
      "type": "MIT",
      "url": "https://github.com/paed01/bpmn-engine/master/LICENSE"
    }
  ],
  "main": "index.js",
  "name": "bpmn-engine",
  "nyc": {
    "exclude": [
      "test"
    ]
  },
  "repository": {
    "type": "git",
    "url": "git://github.com/paed01/bpmn-engine.git"
  },
  "scripts": {
    "cov:html": "nyc mocha -R dot && nyc report --reporter=html",
    "posttest": "eslint . --cache && npm run toc",
    "test": "mocha -R dot",
    "test-md": "node scripts/test-markdown.js ./docs/API.md && node scripts/test-markdown.js ./docs/Examples.md",
    "test:lcov": "nyc mocha -R dot && nyc report --reporter lcov && npm run posttest",
    "toc": "node scripts/generate-api-toc ./docs/API.md,./docs/Examples.md",
    "wintest": "mocha"
  },
  "types": "types/bpmn-engine.d.ts",
  "version": "13.0.0"
}

},{}],72:[function(require,module,exports){
'use strict';

var minDash = require('min-dash');
var moddle = require('moddle');
var moddleXml = require('moddle-xml');

/**
 * A sub class of {@link Moddle} with support for import and export of BPMN 2.0 xml files.
 *
 * @class BpmnModdle
 * @extends Moddle
 *
 * @param {Object|Array} packages to use for instantiating the model
 * @param {Object} [options] additional options to pass over
 */
function BpmnModdle(packages, options) {
  moddle.Moddle.call(this, packages, options);
}

BpmnModdle.prototype = Object.create(moddle.Moddle.prototype);

/**
 * The fromXML result.
 *
 * @typedef {Object} ParseResult
 *
 * @property {ModdleElement} rootElement
 * @property {Array<Object>} references
 * @property {Array<Error>} warnings
 * @property {Object} elementsById - a mapping containing each ID -> ModdleElement
 */

/**
 * The fromXML error.
 *
 * @typedef {Error} ParseError
 *
 * @property {Array<Error>} warnings
 */

/**
 * Instantiates a BPMN model tree from a given xml string.
 *
 * @param {String}   xmlStr
 * @param {String}   [typeName='bpmn:Definitions'] name of the root element
 * @param {Object}   [options]  options to pass to the underlying reader
 *
 * @returns {Promise<ParseResult, ParseError>}
 */
BpmnModdle.prototype.fromXML = function(xmlStr, typeName, options) {

  if (!minDash.isString(typeName)) {
    options = typeName;
    typeName = 'bpmn:Definitions';
  }

  var reader = new moddleXml.Reader(minDash.assign({ model: this, lax: true }, options));
  var rootHandler = reader.handler(typeName);

  return reader.fromXML(xmlStr, rootHandler);
};


/**
 * The toXML result.
 *
 * @typedef {Object} SerializationResult
 *
 * @property {String} xml
 */

/**
 * Serializes a BPMN 2.0 object tree to XML.
 *
 * @param {String}   element    the root element, typically an instance of `bpmn:Definitions`
 * @param {Object}   [options]  to pass to the underlying writer
 *
 * @returns {Promise<SerializationResult, Error>}
 */
BpmnModdle.prototype.toXML = function(element, options) {

  var writer = new moddleXml.Writer(options);

  return new Promise(function(resolve, reject) {
    try {
      var result = writer.toXML(element);

      return resolve({
        xml: result
      });
    } catch (err) {
      return reject(err);
    }
  });
};

var name = "BPMN20";
var uri = "http://www.omg.org/spec/BPMN/20100524/MODEL";
var prefix = "bpmn";
var associations = [
];
var types = [
	{
		name: "Interface",
		superClass: [
			"RootElement"
		],
		properties: [
			{
				name: "name",
				isAttr: true,
				type: "String"
			},
			{
				name: "operations",
				type: "Operation",
				isMany: true
			},
			{
				name: "implementationRef",
				isAttr: true,
				type: "String"
			}
		]
	},
	{
		name: "Operation",
		superClass: [
			"BaseElement"
		],
		properties: [
			{
				name: "name",
				isAttr: true,
				type: "String"
			},
			{
				name: "inMessageRef",
				type: "Message",
				isReference: true
			},
			{
				name: "outMessageRef",
				type: "Message",
				isReference: true
			},
			{
				name: "errorRef",
				type: "Error",
				isMany: true,
				isReference: true
			},
			{
				name: "implementationRef",
				isAttr: true,
				type: "String"
			}
		]
	},
	{
		name: "EndPoint",
		superClass: [
			"RootElement"
		]
	},
	{
		name: "Auditing",
		superClass: [
			"BaseElement"
		]
	},
	{
		name: "GlobalTask",
		superClass: [
			"CallableElement"
		],
		properties: [
			{
				name: "resources",
				type: "ResourceRole",
				isMany: true
			}
		]
	},
	{
		name: "Monitoring",
		superClass: [
			"BaseElement"
		]
	},
	{
		name: "Performer",
		superClass: [
			"ResourceRole"
		]
	},
	{
		name: "Process",
		superClass: [
			"FlowElementsContainer",
			"CallableElement"
		],
		properties: [
			{
				name: "processType",
				type: "ProcessType",
				isAttr: true
			},
			{
				name: "isClosed",
				isAttr: true,
				type: "Boolean"
			},
			{
				name: "auditing",
				type: "Auditing"
			},
			{
				name: "monitoring",
				type: "Monitoring"
			},
			{
				name: "properties",
				type: "Property",
				isMany: true
			},
			{
				name: "laneSets",
				isMany: true,
				replaces: "FlowElementsContainer#laneSets",
				type: "LaneSet"
			},
			{
				name: "flowElements",
				isMany: true,
				replaces: "FlowElementsContainer#flowElements",
				type: "FlowElement"
			},
			{
				name: "artifacts",
				type: "Artifact",
				isMany: true
			},
			{
				name: "resources",
				type: "ResourceRole",
				isMany: true
			},
			{
				name: "correlationSubscriptions",
				type: "CorrelationSubscription",
				isMany: true
			},
			{
				name: "supports",
				type: "Process",
				isMany: true,
				isReference: true
			},
			{
				name: "definitionalCollaborationRef",
				type: "Collaboration",
				isAttr: true,
				isReference: true
			},
			{
				name: "isExecutable",
				isAttr: true,
				type: "Boolean"
			}
		]
	},
	{
		name: "LaneSet",
		superClass: [
			"BaseElement"
		],
		properties: [
			{
				name: "lanes",
				type: "Lane",
				isMany: true
			},
			{
				name: "name",
				isAttr: true,
				type: "String"
			}
		]
	},
	{
		name: "Lane",
		superClass: [
			"BaseElement"
		],
		properties: [
			{
				name: "name",
				isAttr: true,
				type: "String"
			},
			{
				name: "partitionElementRef",
				type: "BaseElement",
				isAttr: true,
				isReference: true
			},
			{
				name: "partitionElement",
				type: "BaseElement"
			},
			{
				name: "flowNodeRef",
				type: "FlowNode",
				isMany: true,
				isReference: true
			},
			{
				name: "childLaneSet",
				type: "LaneSet",
				xml: {
					serialize: "xsi:type"
				}
			}
		]
	},
	{
		name: "GlobalManualTask",
		superClass: [
			"GlobalTask"
		]
	},
	{
		name: "ManualTask",
		superClass: [
			"Task"
		]
	},
	{
		name: "UserTask",
		superClass: [
			"Task"
		],
		properties: [
			{
				name: "renderings",
				type: "Rendering",
				isMany: true
			},
			{
				name: "implementation",
				isAttr: true,
				type: "String"
			}
		]
	},
	{
		name: "Rendering",
		superClass: [
			"BaseElement"
		]
	},
	{
		name: "HumanPerformer",
		superClass: [
			"Performer"
		]
	},
	{
		name: "PotentialOwner",
		superClass: [
			"HumanPerformer"
		]
	},
	{
		name: "GlobalUserTask",
		superClass: [
			"GlobalTask"
		],
		properties: [
			{
				name: "implementation",
				isAttr: true,
				type: "String"
			},
			{
				name: "renderings",
				type: "Rendering",
				isMany: true
			}
		]
	},
	{
		name: "Gateway",
		isAbstract: true,
		superClass: [
			"FlowNode"
		],
		properties: [
			{
				name: "gatewayDirection",
				type: "GatewayDirection",
				"default": "Unspecified",
				isAttr: true
			}
		]
	},
	{
		name: "EventBasedGateway",
		superClass: [
			"Gateway"
		],
		properties: [
			{
				name: "instantiate",
				"default": false,
				isAttr: true,
				type: "Boolean"
			},
			{
				name: "eventGatewayType",
				type: "EventBasedGatewayType",
				isAttr: true,
				"default": "Exclusive"
			}
		]
	},
	{
		name: "ComplexGateway",
		superClass: [
			"Gateway"
		],
		properties: [
			{
				name: "activationCondition",
				type: "Expression",
				xml: {
					serialize: "xsi:type"
				}
			},
			{
				name: "default",
				type: "SequenceFlow",
				isAttr: true,
				isReference: true
			}
		]
	},
	{
		name: "ExclusiveGateway",
		superClass: [
			"Gateway"
		],
		properties: [
			{
				name: "default",
				type: "SequenceFlow",
				isAttr: true,
				isReference: true
			}
		]
	},
	{
		name: "InclusiveGateway",
		superClass: [
			"Gateway"
		],
		properties: [
			{
				name: "default",
				type: "SequenceFlow",
				isAttr: true,
				isReference: true
			}
		]
	},
	{
		name: "ParallelGateway",
		superClass: [
			"Gateway"
		]
	},
	{
		name: "RootElement",
		isAbstract: true,
		superClass: [
			"BaseElement"
		]
	},
	{
		name: "Relationship",
		superClass: [
			"BaseElement"
		],
		properties: [
			{
				name: "type",
				isAttr: true,
				type: "String"
			},
			{
				name: "direction",
				type: "RelationshipDirection",
				isAttr: true
			},
			{
				name: "source",
				isMany: true,
				isReference: true,
				type: "Element"
			},
			{
				name: "target",
				isMany: true,
				isReference: true,
				type: "Element"
			}
		]
	},
	{
		name: "BaseElement",
		isAbstract: true,
		properties: [
			{
				name: "id",
				isAttr: true,
				type: "String",
				isId: true
			},
			{
				name: "documentation",
				type: "Documentation",
				isMany: true
			},
			{
				name: "extensionDefinitions",
				type: "ExtensionDefinition",
				isMany: true,
				isReference: true
			},
			{
				name: "extensionElements",
				type: "ExtensionElements"
			}
		]
	},
	{
		name: "Extension",
		properties: [
			{
				name: "mustUnderstand",
				"default": false,
				isAttr: true,
				type: "Boolean"
			},
			{
				name: "definition",
				type: "ExtensionDefinition",
				isAttr: true,
				isReference: true
			}
		]
	},
	{
		name: "ExtensionDefinition",
		properties: [
			{
				name: "name",
				isAttr: true,
				type: "String"
			},
			{
				name: "extensionAttributeDefinitions",
				type: "ExtensionAttributeDefinition",
				isMany: true
			}
		]
	},
	{
		name: "ExtensionAttributeDefinition",
		properties: [
			{
				name: "name",
				isAttr: true,
				type: "String"
			},
			{
				name: "type",
				isAttr: true,
				type: "String"
			},
			{
				name: "isReference",
				"default": false,
				isAttr: true,
				type: "Boolean"
			},
			{
				name: "extensionDefinition",
				type: "ExtensionDefinition",
				isAttr: true,
				isReference: true
			}
		]
	},
	{
		name: "ExtensionElements",
		properties: [
			{
				name: "valueRef",
				isAttr: true,
				isReference: true,
				type: "Element"
			},
			{
				name: "values",
				type: "Element",
				isMany: true
			},
			{
				name: "extensionAttributeDefinition",
				type: "ExtensionAttributeDefinition",
				isAttr: true,
				isReference: true
			}
		]
	},
	{
		name: "Documentation",
		superClass: [
			"BaseElement"
		],
		properties: [
			{
				name: "text",
				type: "String",
				isBody: true
			},
			{
				name: "textFormat",
				"default": "text/plain",
				isAttr: true,
				type: "String"
			}
		]
	},
	{
		name: "Event",
		isAbstract: true,
		superClass: [
			"FlowNode",
			"InteractionNode"
		],
		properties: [
			{
				name: "properties",
				type: "Property",
				isMany: true
			}
		]
	},
	{
		name: "IntermediateCatchEvent",
		superClass: [
			"CatchEvent"
		]
	},
	{
		name: "IntermediateThrowEvent",
		superClass: [
			"ThrowEvent"
		]
	},
	{
		name: "EndEvent",
		superClass: [
			"ThrowEvent"
		]
	},
	{
		name: "StartEvent",
		superClass: [
			"CatchEvent"
		],
		properties: [
			{
				name: "isInterrupting",
				"default": true,
				isAttr: true,
				type: "Boolean"
			}
		]
	},
	{
		name: "ThrowEvent",
		isAbstract: true,
		superClass: [
			"Event"
		],
		properties: [
			{
				name: "dataInputs",
				type: "DataInput",
				isMany: true
			},
			{
				name: "dataInputAssociations",
				type: "DataInputAssociation",
				isMany: true
			},
			{
				name: "inputSet",
				type: "InputSet"
			},
			{
				name: "eventDefinitions",
				type: "EventDefinition",
				isMany: true
			},
			{
				name: "eventDefinitionRef",
				type: "EventDefinition",
				isMany: true,
				isReference: true
			}
		]
	},
	{
		name: "CatchEvent",
		isAbstract: true,
		superClass: [
			"Event"
		],
		properties: [
			{
				name: "parallelMultiple",
				isAttr: true,
				type: "Boolean",
				"default": false
			},
			{
				name: "dataOutputs",
				type: "DataOutput",
				isMany: true
			},
			{
				name: "dataOutputAssociations",
				type: "DataOutputAssociation",
				isMany: true
			},
			{
				name: "outputSet",
				type: "OutputSet"
			},
			{
				name: "eventDefinitions",
				type: "EventDefinition",
				isMany: true
			},
			{
				name: "eventDefinitionRef",
				type: "EventDefinition",
				isMany: true,
				isReference: true
			}
		]
	},
	{
		name: "BoundaryEvent",
		superClass: [
			"CatchEvent"
		],
		properties: [
			{
				name: "cancelActivity",
				"default": true,
				isAttr: true,
				type: "Boolean"
			},
			{
				name: "attachedToRef",
				type: "Activity",
				isAttr: true,
				isReference: true
			}
		]
	},
	{
		name: "EventDefinition",
		isAbstract: true,
		superClass: [
			"RootElement"
		]
	},
	{
		name: "CancelEventDefinition",
		superClass: [
			"EventDefinition"
		]
	},
	{
		name: "ErrorEventDefinition",
		superClass: [
			"EventDefinition"
		],
		properties: [
			{
				name: "errorRef",
				type: "Error",
				isAttr: true,
				isReference: true
			}
		]
	},
	{
		name: "TerminateEventDefinition",
		superClass: [
			"EventDefinition"
		]
	},
	{
		name: "EscalationEventDefinition",
		superClass: [
			"EventDefinition"
		],
		properties: [
			{
				name: "escalationRef",
				type: "Escalation",
				isAttr: true,
				isReference: true
			}
		]
	},
	{
		name: "Escalation",
		properties: [
			{
				name: "structureRef",
				type: "ItemDefinition",
				isAttr: true,
				isReference: true
			},
			{
				name: "name",
				isAttr: true,
				type: "String"
			},
			{
				name: "escalationCode",
				isAttr: true,
				type: "String"
			}
		],
		superClass: [
			"RootElement"
		]
	},
	{
		name: "CompensateEventDefinition",
		superClass: [
			"EventDefinition"
		],
		properties: [
			{
				name: "waitForCompletion",
				isAttr: true,
				type: "Boolean",
				"default": true
			},
			{
				name: "activityRef",
				type: "Activity",
				isAttr: true,
				isReference: true
			}
		]
	},
	{
		name: "TimerEventDefinition",
		superClass: [
			"EventDefinition"
		],
		properties: [
			{
				name: "timeDate",
				type: "Expression",
				xml: {
					serialize: "xsi:type"
				}
			},
			{
				name: "timeCycle",
				type: "Expression",
				xml: {
					serialize: "xsi:type"
				}
			},
			{
				name: "timeDuration",
				type: "Expression",
				xml: {
					serialize: "xsi:type"
				}
			}
		]
	},
	{
		name: "LinkEventDefinition",
		superClass: [
			"EventDefinition"
		],
		properties: [
			{
				name: "name",
				isAttr: true,
				type: "String"
			},
			{
				name: "target",
				type: "LinkEventDefinition",
				isAttr: true,
				isReference: true
			},
			{
				name: "source",
				type: "LinkEventDefinition",
				isMany: true,
				isReference: true
			}
		]
	},
	{
		name: "MessageEventDefinition",
		superClass: [
			"EventDefinition"
		],
		properties: [
			{
				name: "messageRef",
				type: "Message",
				isAttr: true,
				isReference: true
			},
			{
				name: "operationRef",
				type: "Operation",
				isAttr: true,
				isReference: true
			}
		]
	},
	{
		name: "ConditionalEventDefinition",
		superClass: [
			"EventDefinition"
		],
		properties: [
			{
				name: "condition",
				type: "Expression",
				xml: {
					serialize: "xsi:type"
				}
			}
		]
	},
	{
		name: "SignalEventDefinition",
		superClass: [
			"EventDefinition"
		],
		properties: [
			{
				name: "signalRef",
				type: "Signal",
				isAttr: true,
				isReference: true
			}
		]
	},
	{
		name: "Signal",
		superClass: [
			"RootElement"
		],
		properties: [
			{
				name: "structureRef",
				type: "ItemDefinition",
				isAttr: true,
				isReference: true
			},
			{
				name: "name",
				isAttr: true,
				type: "String"
			}
		]
	},
	{
		name: "ImplicitThrowEvent",
		superClass: [
			"ThrowEvent"
		]
	},
	{
		name: "DataState",
		superClass: [
			"BaseElement"
		],
		properties: [
			{
				name: "name",
				isAttr: true,
				type: "String"
			}
		]
	},
	{
		name: "ItemAwareElement",
		superClass: [
			"BaseElement"
		],
		properties: [
			{
				name: "itemSubjectRef",
				type: "ItemDefinition",
				isAttr: true,
				isReference: true
			},
			{
				name: "dataState",
				type: "DataState"
			}
		]
	},
	{
		name: "DataAssociation",
		superClass: [
			"BaseElement"
		],
		properties: [
			{
				name: "sourceRef",
				type: "ItemAwareElement",
				isMany: true,
				isReference: true
			},
			{
				name: "targetRef",
				type: "ItemAwareElement",
				isReference: true
			},
			{
				name: "transformation",
				type: "FormalExpression",
				xml: {
					serialize: "property"
				}
			},
			{
				name: "assignment",
				type: "Assignment",
				isMany: true
			}
		]
	},
	{
		name: "DataInput",
		superClass: [
			"ItemAwareElement"
		],
		properties: [
			{
				name: "name",
				isAttr: true,
				type: "String"
			},
			{
				name: "isCollection",
				"default": false,
				isAttr: true,
				type: "Boolean"
			},
			{
				name: "inputSetRef",
				type: "InputSet",
				isMany: true,
				isVirtual: true,
				isReference: true
			},
			{
				name: "inputSetWithOptional",
				type: "InputSet",
				isMany: true,
				isVirtual: true,
				isReference: true
			},
			{
				name: "inputSetWithWhileExecuting",
				type: "InputSet",
				isMany: true,
				isVirtual: true,
				isReference: true
			}
		]
	},
	{
		name: "DataOutput",
		superClass: [
			"ItemAwareElement"
		],
		properties: [
			{
				name: "name",
				isAttr: true,
				type: "String"
			},
			{
				name: "isCollection",
				"default": false,
				isAttr: true,
				type: "Boolean"
			},
			{
				name: "outputSetRef",
				type: "OutputSet",
				isMany: true,
				isVirtual: true,
				isReference: true
			},
			{
				name: "outputSetWithOptional",
				type: "OutputSet",
				isMany: true,
				isVirtual: true,
				isReference: true
			},
			{
				name: "outputSetWithWhileExecuting",
				type: "OutputSet",
				isMany: true,
				isVirtual: true,
				isReference: true
			}
		]
	},
	{
		name: "InputSet",
		superClass: [
			"BaseElement"
		],
		properties: [
			{
				name: "name",
				isAttr: true,
				type: "String"
			},
			{
				name: "dataInputRefs",
				type: "DataInput",
				isMany: true,
				isReference: true
			},
			{
				name: "optionalInputRefs",
				type: "DataInput",
				isMany: true,
				isReference: true
			},
			{
				name: "whileExecutingInputRefs",
				type: "DataInput",
				isMany: true,
				isReference: true
			},
			{
				name: "outputSetRefs",
				type: "OutputSet",
				isMany: true,
				isReference: true
			}
		]
	},
	{
		name: "OutputSet",
		superClass: [
			"BaseElement"
		],
		properties: [
			{
				name: "dataOutputRefs",
				type: "DataOutput",
				isMany: true,
				isReference: true
			},
			{
				name: "name",
				isAttr: true,
				type: "String"
			},
			{
				name: "inputSetRefs",
				type: "InputSet",
				isMany: true,
				isReference: true
			},
			{
				name: "optionalOutputRefs",
				type: "DataOutput",
				isMany: true,
				isReference: true
			},
			{
				name: "whileExecutingOutputRefs",
				type: "DataOutput",
				isMany: true,
				isReference: true
			}
		]
	},
	{
		name: "Property",
		superClass: [
			"ItemAwareElement"
		],
		properties: [
			{
				name: "name",
				isAttr: true,
				type: "String"
			}
		]
	},
	{
		name: "DataInputAssociation",
		superClass: [
			"DataAssociation"
		]
	},
	{
		name: "DataOutputAssociation",
		superClass: [
			"DataAssociation"
		]
	},
	{
		name: "InputOutputSpecification",
		superClass: [
			"BaseElement"
		],
		properties: [
			{
				name: "dataInputs",
				type: "DataInput",
				isMany: true
			},
			{
				name: "dataOutputs",
				type: "DataOutput",
				isMany: true
			},
			{
				name: "inputSets",
				type: "InputSet",
				isMany: true
			},
			{
				name: "outputSets",
				type: "OutputSet",
				isMany: true
			}
		]
	},
	{
		name: "DataObject",
		superClass: [
			"FlowElement",
			"ItemAwareElement"
		],
		properties: [
			{
				name: "isCollection",
				"default": false,
				isAttr: true,
				type: "Boolean"
			}
		]
	},
	{
		name: "InputOutputBinding",
		properties: [
			{
				name: "inputDataRef",
				type: "InputSet",
				isAttr: true,
				isReference: true
			},
			{
				name: "outputDataRef",
				type: "OutputSet",
				isAttr: true,
				isReference: true
			},
			{
				name: "operationRef",
				type: "Operation",
				isAttr: true,
				isReference: true
			}
		]
	},
	{
		name: "Assignment",
		superClass: [
			"BaseElement"
		],
		properties: [
			{
				name: "from",
				type: "Expression",
				xml: {
					serialize: "xsi:type"
				}
			},
			{
				name: "to",
				type: "Expression",
				xml: {
					serialize: "xsi:type"
				}
			}
		]
	},
	{
		name: "DataStore",
		superClass: [
			"RootElement",
			"ItemAwareElement"
		],
		properties: [
			{
				name: "name",
				isAttr: true,
				type: "String"
			},
			{
				name: "capacity",
				isAttr: true,
				type: "Integer"
			},
			{
				name: "isUnlimited",
				"default": true,
				isAttr: true,
				type: "Boolean"
			}
		]
	},
	{
		name: "DataStoreReference",
		superClass: [
			"ItemAwareElement",
			"FlowElement"
		],
		properties: [
			{
				name: "dataStoreRef",
				type: "DataStore",
				isAttr: true,
				isReference: true
			}
		]
	},
	{
		name: "DataObjectReference",
		superClass: [
			"ItemAwareElement",
			"FlowElement"
		],
		properties: [
			{
				name: "dataObjectRef",
				type: "DataObject",
				isAttr: true,
				isReference: true
			}
		]
	},
	{
		name: "ConversationLink",
		superClass: [
			"BaseElement"
		],
		properties: [
			{
				name: "sourceRef",
				type: "InteractionNode",
				isAttr: true,
				isReference: true
			},
			{
				name: "targetRef",
				type: "InteractionNode",
				isAttr: true,
				isReference: true
			},
			{
				name: "name",
				isAttr: true,
				type: "String"
			}
		]
	},
	{
		name: "ConversationAssociation",
		superClass: [
			"BaseElement"
		],
		properties: [
			{
				name: "innerConversationNodeRef",
				type: "ConversationNode",
				isAttr: true,
				isReference: true
			},
			{
				name: "outerConversationNodeRef",
				type: "ConversationNode",
				isAttr: true,
				isReference: true
			}
		]
	},
	{
		name: "CallConversation",
		superClass: [
			"ConversationNode"
		],
		properties: [
			{
				name: "calledCollaborationRef",
				type: "Collaboration",
				isAttr: true,
				isReference: true
			},
			{
				name: "participantAssociations",
				type: "ParticipantAssociation",
				isMany: true
			}
		]
	},
	{
		name: "Conversation",
		superClass: [
			"ConversationNode"
		]
	},
	{
		name: "SubConversation",
		superClass: [
			"ConversationNode"
		],
		properties: [
			{
				name: "conversationNodes",
				type: "ConversationNode",
				isMany: true
			}
		]
	},
	{
		name: "ConversationNode",
		isAbstract: true,
		superClass: [
			"InteractionNode",
			"BaseElement"
		],
		properties: [
			{
				name: "name",
				isAttr: true,
				type: "String"
			},
			{
				name: "participantRef",
				type: "Participant",
				isMany: true,
				isReference: true
			},
			{
				name: "messageFlowRefs",
				type: "MessageFlow",
				isMany: true,
				isReference: true
			},
			{
				name: "correlationKeys",
				type: "CorrelationKey",
				isMany: true
			}
		]
	},
	{
		name: "GlobalConversation",
		superClass: [
			"Collaboration"
		]
	},
	{
		name: "PartnerEntity",
		superClass: [
			"RootElement"
		],
		properties: [
			{
				name: "name",
				isAttr: true,
				type: "String"
			},
			{
				name: "participantRef",
				type: "Participant",
				isMany: true,
				isReference: true
			}
		]
	},
	{
		name: "PartnerRole",
		superClass: [
			"RootElement"
		],
		properties: [
			{
				name: "name",
				isAttr: true,
				type: "String"
			},
			{
				name: "participantRef",
				type: "Participant",
				isMany: true,
				isReference: true
			}
		]
	},
	{
		name: "CorrelationProperty",
		superClass: [
			"RootElement"
		],
		properties: [
			{
				name: "correlationPropertyRetrievalExpression",
				type: "CorrelationPropertyRetrievalExpression",
				isMany: true
			},
			{
				name: "name",
				isAttr: true,
				type: "String"
			},
			{
				name: "type",
				type: "ItemDefinition",
				isAttr: true,
				isReference: true
			}
		]
	},
	{
		name: "Error",
		superClass: [
			"RootElement"
		],
		properties: [
			{
				name: "structureRef",
				type: "ItemDefinition",
				isAttr: true,
				isReference: true
			},
			{
				name: "name",
				isAttr: true,
				type: "String"
			},
			{
				name: "errorCode",
				isAttr: true,
				type: "String"
			}
		]
	},
	{
		name: "CorrelationKey",
		superClass: [
			"BaseElement"
		],
		properties: [
			{
				name: "correlationPropertyRef",
				type: "CorrelationProperty",
				isMany: true,
				isReference: true
			},
			{
				name: "name",
				isAttr: true,
				type: "String"
			}
		]
	},
	{
		name: "Expression",
		superClass: [
			"BaseElement"
		],
		isAbstract: false,
		properties: [
			{
				name: "body",
				isBody: true,
				type: "String"
			}
		]
	},
	{
		name: "FormalExpression",
		superClass: [
			"Expression"
		],
		properties: [
			{
				name: "language",
				isAttr: true,
				type: "String"
			},
			{
				name: "evaluatesToTypeRef",
				type: "ItemDefinition",
				isAttr: true,
				isReference: true
			}
		]
	},
	{
		name: "Message",
		superClass: [
			"RootElement"
		],
		properties: [
			{
				name: "name",
				isAttr: true,
				type: "String"
			},
			{
				name: "itemRef",
				type: "ItemDefinition",
				isAttr: true,
				isReference: true
			}
		]
	},
	{
		name: "ItemDefinition",
		superClass: [
			"RootElement"
		],
		properties: [
			{
				name: "itemKind",
				type: "ItemKind",
				isAttr: true
			},
			{
				name: "structureRef",
				isAttr: true,
				type: "String"
			},
			{
				name: "isCollection",
				"default": false,
				isAttr: true,
				type: "Boolean"
			},
			{
				name: "import",
				type: "Import",
				isAttr: true,
				isReference: true
			}
		]
	},
	{
		name: "FlowElement",
		isAbstract: true,
		superClass: [
			"BaseElement"
		],
		properties: [
			{
				name: "name",
				isAttr: true,
				type: "String"
			},
			{
				name: "auditing",
				type: "Auditing"
			},
			{
				name: "monitoring",
				type: "Monitoring"
			},
			{
				name: "categoryValueRef",
				type: "CategoryValue",
				isMany: true,
				isReference: true
			}
		]
	},
	{
		name: "SequenceFlow",
		superClass: [
			"FlowElement"
		],
		properties: [
			{
				name: "isImmediate",
				isAttr: true,
				type: "Boolean"
			},
			{
				name: "conditionExpression",
				type: "Expression",
				xml: {
					serialize: "xsi:type"
				}
			},
			{
				name: "sourceRef",
				type: "FlowNode",
				isAttr: true,
				isReference: true
			},
			{
				name: "targetRef",
				type: "FlowNode",
				isAttr: true,
				isReference: true
			}
		]
	},
	{
		name: "FlowElementsContainer",
		isAbstract: true,
		superClass: [
			"BaseElement"
		],
		properties: [
			{
				name: "laneSets",
				type: "LaneSet",
				isMany: true
			},
			{
				name: "flowElements",
				type: "FlowElement",
				isMany: true
			}
		]
	},
	{
		name: "CallableElement",
		isAbstract: true,
		superClass: [
			"RootElement"
		],
		properties: [
			{
				name: "name",
				isAttr: true,
				type: "String"
			},
			{
				name: "ioSpecification",
				type: "InputOutputSpecification",
				xml: {
					serialize: "property"
				}
			},
			{
				name: "supportedInterfaceRef",
				type: "Interface",
				isMany: true,
				isReference: true
			},
			{
				name: "ioBinding",
				type: "InputOutputBinding",
				isMany: true,
				xml: {
					serialize: "property"
				}
			}
		]
	},
	{
		name: "FlowNode",
		isAbstract: true,
		superClass: [
			"FlowElement"
		],
		properties: [
			{
				name: "incoming",
				type: "SequenceFlow",
				isMany: true,
				isReference: true
			},
			{
				name: "outgoing",
				type: "SequenceFlow",
				isMany: true,
				isReference: true
			},
			{
				name: "lanes",
				type: "Lane",
				isMany: true,
				isVirtual: true,
				isReference: true
			}
		]
	},
	{
		name: "CorrelationPropertyRetrievalExpression",
		superClass: [
			"BaseElement"
		],
		properties: [
			{
				name: "messagePath",
				type: "FormalExpression"
			},
			{
				name: "messageRef",
				type: "Message",
				isAttr: true,
				isReference: true
			}
		]
	},
	{
		name: "CorrelationPropertyBinding",
		superClass: [
			"BaseElement"
		],
		properties: [
			{
				name: "dataPath",
				type: "FormalExpression"
			},
			{
				name: "correlationPropertyRef",
				type: "CorrelationProperty",
				isAttr: true,
				isReference: true
			}
		]
	},
	{
		name: "Resource",
		superClass: [
			"RootElement"
		],
		properties: [
			{
				name: "name",
				isAttr: true,
				type: "String"
			},
			{
				name: "resourceParameters",
				type: "ResourceParameter",
				isMany: true
			}
		]
	},
	{
		name: "ResourceParameter",
		superClass: [
			"BaseElement"
		],
		properties: [
			{
				name: "name",
				isAttr: true,
				type: "String"
			},
			{
				name: "isRequired",
				isAttr: true,
				type: "Boolean"
			},
			{
				name: "type",
				type: "ItemDefinition",
				isAttr: true,
				isReference: true
			}
		]
	},
	{
		name: "CorrelationSubscription",
		superClass: [
			"BaseElement"
		],
		properties: [
			{
				name: "correlationKeyRef",
				type: "CorrelationKey",
				isAttr: true,
				isReference: true
			},
			{
				name: "correlationPropertyBinding",
				type: "CorrelationPropertyBinding",
				isMany: true
			}
		]
	},
	{
		name: "MessageFlow",
		superClass: [
			"BaseElement"
		],
		properties: [
			{
				name: "name",
				isAttr: true,
				type: "String"
			},
			{
				name: "sourceRef",
				type: "InteractionNode",
				isAttr: true,
				isReference: true
			},
			{
				name: "targetRef",
				type: "InteractionNode",
				isAttr: true,
				isReference: true
			},
			{
				name: "messageRef",
				type: "Message",
				isAttr: true,
				isReference: true
			}
		]
	},
	{
		name: "MessageFlowAssociation",
		superClass: [
			"BaseElement"
		],
		properties: [
			{
				name: "innerMessageFlowRef",
				type: "MessageFlow",
				isAttr: true,
				isReference: true
			},
			{
				name: "outerMessageFlowRef",
				type: "MessageFlow",
				isAttr: true,
				isReference: true
			}
		]
	},
	{
		name: "InteractionNode",
		isAbstract: true,
		properties: [
			{
				name: "incomingConversationLinks",
				type: "ConversationLink",
				isMany: true,
				isVirtual: true,
				isReference: true
			},
			{
				name: "outgoingConversationLinks",
				type: "ConversationLink",
				isMany: true,
				isVirtual: true,
				isReference: true
			}
		]
	},
	{
		name: "Participant",
		superClass: [
			"InteractionNode",
			"BaseElement"
		],
		properties: [
			{
				name: "name",
				isAttr: true,
				type: "String"
			},
			{
				name: "interfaceRef",
				type: "Interface",
				isMany: true,
				isReference: true
			},
			{
				name: "participantMultiplicity",
				type: "ParticipantMultiplicity"
			},
			{
				name: "endPointRefs",
				type: "EndPoint",
				isMany: true,
				isReference: true
			},
			{
				name: "processRef",
				type: "Process",
				isAttr: true,
				isReference: true
			}
		]
	},
	{
		name: "ParticipantAssociation",
		superClass: [
			"BaseElement"
		],
		properties: [
			{
				name: "innerParticipantRef",
				type: "Participant",
				isAttr: true,
				isReference: true
			},
			{
				name: "outerParticipantRef",
				type: "Participant",
				isAttr: true,
				isReference: true
			}
		]
	},
	{
		name: "ParticipantMultiplicity",
		properties: [
			{
				name: "minimum",
				"default": 0,
				isAttr: true,
				type: "Integer"
			},
			{
				name: "maximum",
				"default": 1,
				isAttr: true,
				type: "Integer"
			}
		],
		superClass: [
			"BaseElement"
		]
	},
	{
		name: "Collaboration",
		superClass: [
			"RootElement"
		],
		properties: [
			{
				name: "name",
				isAttr: true,
				type: "String"
			},
			{
				name: "isClosed",
				isAttr: true,
				type: "Boolean"
			},
			{
				name: "participants",
				type: "Participant",
				isMany: true
			},
			{
				name: "messageFlows",
				type: "MessageFlow",
				isMany: true
			},
			{
				name: "artifacts",
				type: "Artifact",
				isMany: true
			},
			{
				name: "conversations",
				type: "ConversationNode",
				isMany: true
			},
			{
				name: "conversationAssociations",
				type: "ConversationAssociation"
			},
			{
				name: "participantAssociations",
				type: "ParticipantAssociation",
				isMany: true
			},
			{
				name: "messageFlowAssociations",
				type: "MessageFlowAssociation",
				isMany: true
			},
			{
				name: "correlationKeys",
				type: "CorrelationKey",
				isMany: true
			},
			{
				name: "choreographyRef",
				type: "Choreography",
				isMany: true,
				isReference: true
			},
			{
				name: "conversationLinks",
				type: "ConversationLink",
				isMany: true
			}
		]
	},
	{
		name: "ChoreographyActivity",
		isAbstract: true,
		superClass: [
			"FlowNode"
		],
		properties: [
			{
				name: "participantRef",
				type: "Participant",
				isMany: true,
				isReference: true
			},
			{
				name: "initiatingParticipantRef",
				type: "Participant",
				isAttr: true,
				isReference: true
			},
			{
				name: "correlationKeys",
				type: "CorrelationKey",
				isMany: true
			},
			{
				name: "loopType",
				type: "ChoreographyLoopType",
				"default": "None",
				isAttr: true
			}
		]
	},
	{
		name: "CallChoreography",
		superClass: [
			"ChoreographyActivity"
		],
		properties: [
			{
				name: "calledChoreographyRef",
				type: "Choreography",
				isAttr: true,
				isReference: true
			},
			{
				name: "participantAssociations",
				type: "ParticipantAssociation",
				isMany: true
			}
		]
	},
	{
		name: "SubChoreography",
		superClass: [
			"ChoreographyActivity",
			"FlowElementsContainer"
		],
		properties: [
			{
				name: "artifacts",
				type: "Artifact",
				isMany: true
			}
		]
	},
	{
		name: "ChoreographyTask",
		superClass: [
			"ChoreographyActivity"
		],
		properties: [
			{
				name: "messageFlowRef",
				type: "MessageFlow",
				isMany: true,
				isReference: true
			}
		]
	},
	{
		name: "Choreography",
		superClass: [
			"Collaboration",
			"FlowElementsContainer"
		]
	},
	{
		name: "GlobalChoreographyTask",
		superClass: [
			"Choreography"
		],
		properties: [
			{
				name: "initiatingParticipantRef",
				type: "Participant",
				isAttr: true,
				isReference: true
			}
		]
	},
	{
		name: "TextAnnotation",
		superClass: [
			"Artifact"
		],
		properties: [
			{
				name: "text",
				type: "String"
			},
			{
				name: "textFormat",
				"default": "text/plain",
				isAttr: true,
				type: "String"
			}
		]
	},
	{
		name: "Group",
		superClass: [
			"Artifact"
		],
		properties: [
			{
				name: "categoryValueRef",
				type: "CategoryValue",
				isAttr: true,
				isReference: true
			}
		]
	},
	{
		name: "Association",
		superClass: [
			"Artifact"
		],
		properties: [
			{
				name: "associationDirection",
				type: "AssociationDirection",
				isAttr: true
			},
			{
				name: "sourceRef",
				type: "BaseElement",
				isAttr: true,
				isReference: true
			},
			{
				name: "targetRef",
				type: "BaseElement",
				isAttr: true,
				isReference: true
			}
		]
	},
	{
		name: "Category",
		superClass: [
			"RootElement"
		],
		properties: [
			{
				name: "categoryValue",
				type: "CategoryValue",
				isMany: true
			},
			{
				name: "name",
				isAttr: true,
				type: "String"
			}
		]
	},
	{
		name: "Artifact",
		isAbstract: true,
		superClass: [
			"BaseElement"
		]
	},
	{
		name: "CategoryValue",
		superClass: [
			"BaseElement"
		],
		properties: [
			{
				name: "categorizedFlowElements",
				type: "FlowElement",
				isMany: true,
				isVirtual: true,
				isReference: true
			},
			{
				name: "value",
				isAttr: true,
				type: "String"
			}
		]
	},
	{
		name: "Activity",
		isAbstract: true,
		superClass: [
			"FlowNode"
		],
		properties: [
			{
				name: "isForCompensation",
				"default": false,
				isAttr: true,
				type: "Boolean"
			},
			{
				name: "default",
				type: "SequenceFlow",
				isAttr: true,
				isReference: true
			},
			{
				name: "ioSpecification",
				type: "InputOutputSpecification",
				xml: {
					serialize: "property"
				}
			},
			{
				name: "boundaryEventRefs",
				type: "BoundaryEvent",
				isMany: true,
				isReference: true
			},
			{
				name: "properties",
				type: "Property",
				isMany: true
			},
			{
				name: "dataInputAssociations",
				type: "DataInputAssociation",
				isMany: true
			},
			{
				name: "dataOutputAssociations",
				type: "DataOutputAssociation",
				isMany: true
			},
			{
				name: "startQuantity",
				"default": 1,
				isAttr: true,
				type: "Integer"
			},
			{
				name: "resources",
				type: "ResourceRole",
				isMany: true
			},
			{
				name: "completionQuantity",
				"default": 1,
				isAttr: true,
				type: "Integer"
			},
			{
				name: "loopCharacteristics",
				type: "LoopCharacteristics"
			}
		]
	},
	{
		name: "ServiceTask",
		superClass: [
			"Task"
		],
		properties: [
			{
				name: "implementation",
				isAttr: true,
				type: "String"
			},
			{
				name: "operationRef",
				type: "Operation",
				isAttr: true,
				isReference: true
			}
		]
	},
	{
		name: "SubProcess",
		superClass: [
			"Activity",
			"FlowElementsContainer",
			"InteractionNode"
		],
		properties: [
			{
				name: "triggeredByEvent",
				"default": false,
				isAttr: true,
				type: "Boolean"
			},
			{
				name: "artifacts",
				type: "Artifact",
				isMany: true
			}
		]
	},
	{
		name: "LoopCharacteristics",
		isAbstract: true,
		superClass: [
			"BaseElement"
		]
	},
	{
		name: "MultiInstanceLoopCharacteristics",
		superClass: [
			"LoopCharacteristics"
		],
		properties: [
			{
				name: "isSequential",
				"default": false,
				isAttr: true,
				type: "Boolean"
			},
			{
				name: "behavior",
				type: "MultiInstanceBehavior",
				"default": "All",
				isAttr: true
			},
			{
				name: "loopCardinality",
				type: "Expression",
				xml: {
					serialize: "xsi:type"
				}
			},
			{
				name: "loopDataInputRef",
				type: "ItemAwareElement",
				isReference: true
			},
			{
				name: "loopDataOutputRef",
				type: "ItemAwareElement",
				isReference: true
			},
			{
				name: "inputDataItem",
				type: "DataInput",
				xml: {
					serialize: "property"
				}
			},
			{
				name: "outputDataItem",
				type: "DataOutput",
				xml: {
					serialize: "property"
				}
			},
			{
				name: "complexBehaviorDefinition",
				type: "ComplexBehaviorDefinition",
				isMany: true
			},
			{
				name: "completionCondition",
				type: "Expression",
				xml: {
					serialize: "xsi:type"
				}
			},
			{
				name: "oneBehaviorEventRef",
				type: "EventDefinition",
				isAttr: true,
				isReference: true
			},
			{
				name: "noneBehaviorEventRef",
				type: "EventDefinition",
				isAttr: true,
				isReference: true
			}
		]
	},
	{
		name: "StandardLoopCharacteristics",
		superClass: [
			"LoopCharacteristics"
		],
		properties: [
			{
				name: "testBefore",
				"default": false,
				isAttr: true,
				type: "Boolean"
			},
			{
				name: "loopCondition",
				type: "Expression",
				xml: {
					serialize: "xsi:type"
				}
			},
			{
				name: "loopMaximum",
				type: "Integer",
				isAttr: true
			}
		]
	},
	{
		name: "CallActivity",
		superClass: [
			"Activity",
			"InteractionNode"
		],
		properties: [
			{
				name: "calledElement",
				type: "String",
				isAttr: true
			}
		]
	},
	{
		name: "Task",
		superClass: [
			"Activity",
			"InteractionNode"
		]
	},
	{
		name: "SendTask",
		superClass: [
			"Task"
		],
		properties: [
			{
				name: "implementation",
				isAttr: true,
				type: "String"
			},
			{
				name: "operationRef",
				type: "Operation",
				isAttr: true,
				isReference: true
			},
			{
				name: "messageRef",
				type: "Message",
				isAttr: true,
				isReference: true
			}
		]
	},
	{
		name: "ReceiveTask",
		superClass: [
			"Task"
		],
		properties: [
			{
				name: "implementation",
				isAttr: true,
				type: "String"
			},
			{
				name: "instantiate",
				"default": false,
				isAttr: true,
				type: "Boolean"
			},
			{
				name: "operationRef",
				type: "Operation",
				isAttr: true,
				isReference: true
			},
			{
				name: "messageRef",
				type: "Message",
				isAttr: true,
				isReference: true
			}
		]
	},
	{
		name: "ScriptTask",
		superClass: [
			"Task"
		],
		properties: [
			{
				name: "scriptFormat",
				isAttr: true,
				type: "String"
			},
			{
				name: "script",
				type: "String"
			}
		]
	},
	{
		name: "BusinessRuleTask",
		superClass: [
			"Task"
		],
		properties: [
			{
				name: "implementation",
				isAttr: true,
				type: "String"
			}
		]
	},
	{
		name: "AdHocSubProcess",
		superClass: [
			"SubProcess"
		],
		properties: [
			{
				name: "completionCondition",
				type: "Expression",
				xml: {
					serialize: "xsi:type"
				}
			},
			{
				name: "ordering",
				type: "AdHocOrdering",
				isAttr: true
			},
			{
				name: "cancelRemainingInstances",
				"default": true,
				isAttr: true,
				type: "Boolean"
			}
		]
	},
	{
		name: "Transaction",
		superClass: [
			"SubProcess"
		],
		properties: [
			{
				name: "protocol",
				isAttr: true,
				type: "String"
			},
			{
				name: "method",
				isAttr: true,
				type: "String"
			}
		]
	},
	{
		name: "GlobalScriptTask",
		superClass: [
			"GlobalTask"
		],
		properties: [
			{
				name: "scriptLanguage",
				isAttr: true,
				type: "String"
			},
			{
				name: "script",
				isAttr: true,
				type: "String"
			}
		]
	},
	{
		name: "GlobalBusinessRuleTask",
		superClass: [
			"GlobalTask"
		],
		properties: [
			{
				name: "implementation",
				isAttr: true,
				type: "String"
			}
		]
	},
	{
		name: "ComplexBehaviorDefinition",
		superClass: [
			"BaseElement"
		],
		properties: [
			{
				name: "condition",
				type: "FormalExpression"
			},
			{
				name: "event",
				type: "ImplicitThrowEvent"
			}
		]
	},
	{
		name: "ResourceRole",
		superClass: [
			"BaseElement"
		],
		properties: [
			{
				name: "resourceRef",
				type: "Resource",
				isReference: true
			},
			{
				name: "resourceParameterBindings",
				type: "ResourceParameterBinding",
				isMany: true
			},
			{
				name: "resourceAssignmentExpression",
				type: "ResourceAssignmentExpression"
			},
			{
				name: "name",
				isAttr: true,
				type: "String"
			}
		]
	},
	{
		name: "ResourceParameterBinding",
		properties: [
			{
				name: "expression",
				type: "Expression",
				xml: {
					serialize: "xsi:type"
				}
			},
			{
				name: "parameterRef",
				type: "ResourceParameter",
				isAttr: true,
				isReference: true
			}
		],
		superClass: [
			"BaseElement"
		]
	},
	{
		name: "ResourceAssignmentExpression",
		properties: [
			{
				name: "expression",
				type: "Expression",
				xml: {
					serialize: "xsi:type"
				}
			}
		],
		superClass: [
			"BaseElement"
		]
	},
	{
		name: "Import",
		properties: [
			{
				name: "importType",
				isAttr: true,
				type: "String"
			},
			{
				name: "location",
				isAttr: true,
				type: "String"
			},
			{
				name: "namespace",
				isAttr: true,
				type: "String"
			}
		]
	},
	{
		name: "Definitions",
		superClass: [
			"BaseElement"
		],
		properties: [
			{
				name: "name",
				isAttr: true,
				type: "String"
			},
			{
				name: "targetNamespace",
				isAttr: true,
				type: "String"
			},
			{
				name: "expressionLanguage",
				"default": "http://www.w3.org/1999/XPath",
				isAttr: true,
				type: "String"
			},
			{
				name: "typeLanguage",
				"default": "http://www.w3.org/2001/XMLSchema",
				isAttr: true,
				type: "String"
			},
			{
				name: "imports",
				type: "Import",
				isMany: true
			},
			{
				name: "extensions",
				type: "Extension",
				isMany: true
			},
			{
				name: "rootElements",
				type: "RootElement",
				isMany: true
			},
			{
				name: "diagrams",
				isMany: true,
				type: "bpmndi:BPMNDiagram"
			},
			{
				name: "exporter",
				isAttr: true,
				type: "String"
			},
			{
				name: "relationships",
				type: "Relationship",
				isMany: true
			},
			{
				name: "exporterVersion",
				isAttr: true,
				type: "String"
			}
		]
	}
];
var enumerations = [
	{
		name: "ProcessType",
		literalValues: [
			{
				name: "None"
			},
			{
				name: "Public"
			},
			{
				name: "Private"
			}
		]
	},
	{
		name: "GatewayDirection",
		literalValues: [
			{
				name: "Unspecified"
			},
			{
				name: "Converging"
			},
			{
				name: "Diverging"
			},
			{
				name: "Mixed"
			}
		]
	},
	{
		name: "EventBasedGatewayType",
		literalValues: [
			{
				name: "Parallel"
			},
			{
				name: "Exclusive"
			}
		]
	},
	{
		name: "RelationshipDirection",
		literalValues: [
			{
				name: "None"
			},
			{
				name: "Forward"
			},
			{
				name: "Backward"
			},
			{
				name: "Both"
			}
		]
	},
	{
		name: "ItemKind",
		literalValues: [
			{
				name: "Physical"
			},
			{
				name: "Information"
			}
		]
	},
	{
		name: "ChoreographyLoopType",
		literalValues: [
			{
				name: "None"
			},
			{
				name: "Standard"
			},
			{
				name: "MultiInstanceSequential"
			},
			{
				name: "MultiInstanceParallel"
			}
		]
	},
	{
		name: "AssociationDirection",
		literalValues: [
			{
				name: "None"
			},
			{
				name: "One"
			},
			{
				name: "Both"
			}
		]
	},
	{
		name: "MultiInstanceBehavior",
		literalValues: [
			{
				name: "None"
			},
			{
				name: "One"
			},
			{
				name: "All"
			},
			{
				name: "Complex"
			}
		]
	},
	{
		name: "AdHocOrdering",
		literalValues: [
			{
				name: "Parallel"
			},
			{
				name: "Sequential"
			}
		]
	}
];
var xml = {
	tagAlias: "lowerCase",
	typePrefix: "t"
};
var BpmnPackage = {
	name: name,
	uri: uri,
	prefix: prefix,
	associations: associations,
	types: types,
	enumerations: enumerations,
	xml: xml
};

var name$1 = "BPMNDI";
var uri$1 = "http://www.omg.org/spec/BPMN/20100524/DI";
var prefix$1 = "bpmndi";
var types$1 = [
	{
		name: "BPMNDiagram",
		properties: [
			{
				name: "plane",
				type: "BPMNPlane",
				redefines: "di:Diagram#rootElement"
			},
			{
				name: "labelStyle",
				type: "BPMNLabelStyle",
				isMany: true
			}
		],
		superClass: [
			"di:Diagram"
		]
	},
	{
		name: "BPMNPlane",
		properties: [
			{
				name: "bpmnElement",
				isAttr: true,
				isReference: true,
				type: "bpmn:BaseElement",
				redefines: "di:DiagramElement#modelElement"
			}
		],
		superClass: [
			"di:Plane"
		]
	},
	{
		name: "BPMNShape",
		properties: [
			{
				name: "bpmnElement",
				isAttr: true,
				isReference: true,
				type: "bpmn:BaseElement",
				redefines: "di:DiagramElement#modelElement"
			},
			{
				name: "isHorizontal",
				isAttr: true,
				type: "Boolean"
			},
			{
				name: "isExpanded",
				isAttr: true,
				type: "Boolean"
			},
			{
				name: "isMarkerVisible",
				isAttr: true,
				type: "Boolean"
			},
			{
				name: "label",
				type: "BPMNLabel"
			},
			{
				name: "isMessageVisible",
				isAttr: true,
				type: "Boolean"
			},
			{
				name: "participantBandKind",
				type: "ParticipantBandKind",
				isAttr: true
			},
			{
				name: "choreographyActivityShape",
				type: "BPMNShape",
				isAttr: true,
				isReference: true
			}
		],
		superClass: [
			"di:LabeledShape"
		]
	},
	{
		name: "BPMNEdge",
		properties: [
			{
				name: "label",
				type: "BPMNLabel"
			},
			{
				name: "bpmnElement",
				isAttr: true,
				isReference: true,
				type: "bpmn:BaseElement",
				redefines: "di:DiagramElement#modelElement"
			},
			{
				name: "sourceElement",
				isAttr: true,
				isReference: true,
				type: "di:DiagramElement",
				redefines: "di:Edge#source"
			},
			{
				name: "targetElement",
				isAttr: true,
				isReference: true,
				type: "di:DiagramElement",
				redefines: "di:Edge#target"
			},
			{
				name: "messageVisibleKind",
				type: "MessageVisibleKind",
				isAttr: true,
				"default": "initiating"
			}
		],
		superClass: [
			"di:LabeledEdge"
		]
	},
	{
		name: "BPMNLabel",
		properties: [
			{
				name: "labelStyle",
				type: "BPMNLabelStyle",
				isAttr: true,
				isReference: true,
				redefines: "di:DiagramElement#style"
			}
		],
		superClass: [
			"di:Label"
		]
	},
	{
		name: "BPMNLabelStyle",
		properties: [
			{
				name: "font",
				type: "dc:Font"
			}
		],
		superClass: [
			"di:Style"
		]
	}
];
var enumerations$1 = [
	{
		name: "ParticipantBandKind",
		literalValues: [
			{
				name: "top_initiating"
			},
			{
				name: "middle_initiating"
			},
			{
				name: "bottom_initiating"
			},
			{
				name: "top_non_initiating"
			},
			{
				name: "middle_non_initiating"
			},
			{
				name: "bottom_non_initiating"
			}
		]
	},
	{
		name: "MessageVisibleKind",
		literalValues: [
			{
				name: "initiating"
			},
			{
				name: "non_initiating"
			}
		]
	}
];
var associations$1 = [
];
var BpmnDiPackage = {
	name: name$1,
	uri: uri$1,
	prefix: prefix$1,
	types: types$1,
	enumerations: enumerations$1,
	associations: associations$1
};

var name$2 = "DC";
var uri$2 = "http://www.omg.org/spec/DD/20100524/DC";
var prefix$2 = "dc";
var types$2 = [
	{
		name: "Boolean"
	},
	{
		name: "Integer"
	},
	{
		name: "Real"
	},
	{
		name: "String"
	},
	{
		name: "Font",
		properties: [
			{
				name: "name",
				type: "String",
				isAttr: true
			},
			{
				name: "size",
				type: "Real",
				isAttr: true
			},
			{
				name: "isBold",
				type: "Boolean",
				isAttr: true
			},
			{
				name: "isItalic",
				type: "Boolean",
				isAttr: true
			},
			{
				name: "isUnderline",
				type: "Boolean",
				isAttr: true
			},
			{
				name: "isStrikeThrough",
				type: "Boolean",
				isAttr: true
			}
		]
	},
	{
		name: "Point",
		properties: [
			{
				name: "x",
				type: "Real",
				"default": "0",
				isAttr: true
			},
			{
				name: "y",
				type: "Real",
				"default": "0",
				isAttr: true
			}
		]
	},
	{
		name: "Bounds",
		properties: [
			{
				name: "x",
				type: "Real",
				"default": "0",
				isAttr: true
			},
			{
				name: "y",
				type: "Real",
				"default": "0",
				isAttr: true
			},
			{
				name: "width",
				type: "Real",
				isAttr: true
			},
			{
				name: "height",
				type: "Real",
				isAttr: true
			}
		]
	}
];
var associations$2 = [
];
var DcPackage = {
	name: name$2,
	uri: uri$2,
	prefix: prefix$2,
	types: types$2,
	associations: associations$2
};

var name$3 = "DI";
var uri$3 = "http://www.omg.org/spec/DD/20100524/DI";
var prefix$3 = "di";
var types$3 = [
	{
		name: "DiagramElement",
		isAbstract: true,
		properties: [
			{
				name: "id",
				isAttr: true,
				isId: true,
				type: "String"
			},
			{
				name: "extension",
				type: "Extension"
			},
			{
				name: "owningDiagram",
				type: "Diagram",
				isReadOnly: true,
				isVirtual: true,
				isReference: true
			},
			{
				name: "owningElement",
				type: "DiagramElement",
				isReadOnly: true,
				isVirtual: true,
				isReference: true
			},
			{
				name: "modelElement",
				isReadOnly: true,
				isVirtual: true,
				isReference: true,
				type: "Element"
			},
			{
				name: "style",
				type: "Style",
				isReadOnly: true,
				isVirtual: true,
				isReference: true
			},
			{
				name: "ownedElement",
				type: "DiagramElement",
				isReadOnly: true,
				isMany: true,
				isVirtual: true
			}
		]
	},
	{
		name: "Node",
		isAbstract: true,
		superClass: [
			"DiagramElement"
		]
	},
	{
		name: "Edge",
		isAbstract: true,
		superClass: [
			"DiagramElement"
		],
		properties: [
			{
				name: "source",
				type: "DiagramElement",
				isReadOnly: true,
				isVirtual: true,
				isReference: true
			},
			{
				name: "target",
				type: "DiagramElement",
				isReadOnly: true,
				isVirtual: true,
				isReference: true
			},
			{
				name: "waypoint",
				isUnique: false,
				isMany: true,
				type: "dc:Point",
				xml: {
					serialize: "xsi:type"
				}
			}
		]
	},
	{
		name: "Diagram",
		isAbstract: true,
		properties: [
			{
				name: "id",
				isAttr: true,
				isId: true,
				type: "String"
			},
			{
				name: "rootElement",
				type: "DiagramElement",
				isReadOnly: true,
				isVirtual: true
			},
			{
				name: "name",
				isAttr: true,
				type: "String"
			},
			{
				name: "documentation",
				isAttr: true,
				type: "String"
			},
			{
				name: "resolution",
				isAttr: true,
				type: "Real"
			},
			{
				name: "ownedStyle",
				type: "Style",
				isReadOnly: true,
				isMany: true,
				isVirtual: true
			}
		]
	},
	{
		name: "Shape",
		isAbstract: true,
		superClass: [
			"Node"
		],
		properties: [
			{
				name: "bounds",
				type: "dc:Bounds"
			}
		]
	},
	{
		name: "Plane",
		isAbstract: true,
		superClass: [
			"Node"
		],
		properties: [
			{
				name: "planeElement",
				type: "DiagramElement",
				subsettedProperty: "DiagramElement-ownedElement",
				isMany: true
			}
		]
	},
	{
		name: "LabeledEdge",
		isAbstract: true,
		superClass: [
			"Edge"
		],
		properties: [
			{
				name: "ownedLabel",
				type: "Label",
				isReadOnly: true,
				subsettedProperty: "DiagramElement-ownedElement",
				isMany: true,
				isVirtual: true
			}
		]
	},
	{
		name: "LabeledShape",
		isAbstract: true,
		superClass: [
			"Shape"
		],
		properties: [
			{
				name: "ownedLabel",
				type: "Label",
				isReadOnly: true,
				subsettedProperty: "DiagramElement-ownedElement",
				isMany: true,
				isVirtual: true
			}
		]
	},
	{
		name: "Label",
		isAbstract: true,
		superClass: [
			"Node"
		],
		properties: [
			{
				name: "bounds",
				type: "dc:Bounds"
			}
		]
	},
	{
		name: "Style",
		isAbstract: true,
		properties: [
			{
				name: "id",
				isAttr: true,
				isId: true,
				type: "String"
			}
		]
	},
	{
		name: "Extension",
		properties: [
			{
				name: "values",
				isMany: true,
				type: "Element"
			}
		]
	}
];
var associations$3 = [
];
var xml$1 = {
	tagAlias: "lowerCase"
};
var DiPackage = {
	name: name$3,
	uri: uri$3,
	prefix: prefix$3,
	types: types$3,
	associations: associations$3,
	xml: xml$1
};

var name$4 = "bpmn.io colors for BPMN";
var uri$4 = "http://bpmn.io/schema/bpmn/biocolor/1.0";
var prefix$4 = "bioc";
var types$4 = [
	{
		name: "ColoredShape",
		"extends": [
			"bpmndi:BPMNShape"
		],
		properties: [
			{
				name: "stroke",
				isAttr: true,
				type: "String"
			},
			{
				name: "fill",
				isAttr: true,
				type: "String"
			}
		]
	},
	{
		name: "ColoredEdge",
		"extends": [
			"bpmndi:BPMNEdge"
		],
		properties: [
			{
				name: "stroke",
				isAttr: true,
				type: "String"
			},
			{
				name: "fill",
				isAttr: true,
				type: "String"
			}
		]
	}
];
var enumerations$2 = [
];
var associations$4 = [
];
var BiocPackage = {
	name: name$4,
	uri: uri$4,
	prefix: prefix$4,
	types: types$4,
	enumerations: enumerations$2,
	associations: associations$4
};

var name$5 = "BPMN in Color";
var uri$5 = "http://www.omg.org/spec/BPMN/non-normative/color/1.0";
var prefix$5 = "color";
var types$5 = [
	{
		name: "ColoredLabel",
		"extends": [
			"bpmndi:BPMNLabel"
		],
		properties: [
			{
				name: "color",
				isAttr: true,
				type: "String"
			}
		]
	},
	{
		name: "ColoredShape",
		"extends": [
			"bpmndi:BPMNShape"
		],
		properties: [
			{
				name: "background-color",
				isAttr: true,
				type: "String"
			},
			{
				name: "border-color",
				isAttr: true,
				type: "String"
			}
		]
	},
	{
		name: "ColoredEdge",
		"extends": [
			"bpmndi:BPMNEdge"
		],
		properties: [
			{
				name: "border-color",
				isAttr: true,
				type: "String"
			}
		]
	}
];
var enumerations$3 = [
];
var associations$5 = [
];
var BpmnInColorPackage = {
	name: name$5,
	uri: uri$5,
	prefix: prefix$5,
	types: types$5,
	enumerations: enumerations$3,
	associations: associations$5
};

var packages = {
  bpmn: BpmnPackage,
  bpmndi: BpmnDiPackage,
  dc: DcPackage,
  di: DiPackage,
  bioc: BiocPackage,
  color: BpmnInColorPackage
};

function simple(additionalPackages, options) {
  var pks = minDash.assign({}, packages, additionalPackages);

  return new BpmnModdle(pks, options);
}

module.exports = simple;

},{"min-dash":78,"moddle":81,"moddle-xml":80}],73:[function(require,module,exports){
(function (process){(function (){
/* eslint-env browser */

/**
 * This is the web browser implementation of `debug()`.
 */

exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.storage = localstorage();
exports.destroy = (() => {
	let warned = false;

	return () => {
		if (!warned) {
			warned = true;
			console.warn('Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.');
		}
	};
})();

/**
 * Colors.
 */

exports.colors = [
	'#0000CC',
	'#0000FF',
	'#0033CC',
	'#0033FF',
	'#0066CC',
	'#0066FF',
	'#0099CC',
	'#0099FF',
	'#00CC00',
	'#00CC33',
	'#00CC66',
	'#00CC99',
	'#00CCCC',
	'#00CCFF',
	'#3300CC',
	'#3300FF',
	'#3333CC',
	'#3333FF',
	'#3366CC',
	'#3366FF',
	'#3399CC',
	'#3399FF',
	'#33CC00',
	'#33CC33',
	'#33CC66',
	'#33CC99',
	'#33CCCC',
	'#33CCFF',
	'#6600CC',
	'#6600FF',
	'#6633CC',
	'#6633FF',
	'#66CC00',
	'#66CC33',
	'#9900CC',
	'#9900FF',
	'#9933CC',
	'#9933FF',
	'#99CC00',
	'#99CC33',
	'#CC0000',
	'#CC0033',
	'#CC0066',
	'#CC0099',
	'#CC00CC',
	'#CC00FF',
	'#CC3300',
	'#CC3333',
	'#CC3366',
	'#CC3399',
	'#CC33CC',
	'#CC33FF',
	'#CC6600',
	'#CC6633',
	'#CC9900',
	'#CC9933',
	'#CCCC00',
	'#CCCC33',
	'#FF0000',
	'#FF0033',
	'#FF0066',
	'#FF0099',
	'#FF00CC',
	'#FF00FF',
	'#FF3300',
	'#FF3333',
	'#FF3366',
	'#FF3399',
	'#FF33CC',
	'#FF33FF',
	'#FF6600',
	'#FF6633',
	'#FF9900',
	'#FF9933',
	'#FFCC00',
	'#FFCC33'
];

/**
 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
 * and the Firebug extension (any Firefox version) are known
 * to support "%c" CSS customizations.
 *
 * TODO: add a `localStorage` variable to explicitly enable/disable colors
 */

// eslint-disable-next-line complexity
function useColors() {
	// NB: In an Electron preload script, document will be defined but not fully
	// initialized. Since we know we're in Chrome, we'll just detect this case
	// explicitly
	if (typeof window !== 'undefined' && window.process && (window.process.type === 'renderer' || window.process.__nwjs)) {
		return true;
	}

	// Internet Explorer and Edge do not support colors.
	if (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) {
		return false;
	}

	// Is webkit? http://stackoverflow.com/a/16459606/376773
	// document is undefined in react-native: https://github.com/facebook/react-native/pull/1632
	return (typeof document !== 'undefined' && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance) ||
		// Is firebug? http://stackoverflow.com/a/398120/376773
		(typeof window !== 'undefined' && window.console && (window.console.firebug || (window.console.exception && window.console.table))) ||
		// Is firefox >= v31?
		// https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
		(typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31) ||
		// Double check webkit in userAgent just in case we are in a worker
		(typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/));
}

/**
 * Colorize log arguments if enabled.
 *
 * @api public
 */

function formatArgs(args) {
	args[0] = (this.useColors ? '%c' : '') +
		this.namespace +
		(this.useColors ? ' %c' : ' ') +
		args[0] +
		(this.useColors ? '%c ' : ' ') +
		'+' + module.exports.humanize(this.diff);

	if (!this.useColors) {
		return;
	}

	const c = 'color: ' + this.color;
	args.splice(1, 0, c, 'color: inherit');

	// The final "%c" is somewhat tricky, because there could be other
	// arguments passed either before or after the %c, so we need to
	// figure out the correct index to insert the CSS into
	let index = 0;
	let lastC = 0;
	args[0].replace(/%[a-zA-Z%]/g, match => {
		if (match === '%%') {
			return;
		}
		index++;
		if (match === '%c') {
			// We only are interested in the *last* %c
			// (the user may have provided their own)
			lastC = index;
		}
	});

	args.splice(lastC, 0, c);
}

/**
 * Invokes `console.debug()` when available.
 * No-op when `console.debug` is not a "function".
 * If `console.debug` is not available, falls back
 * to `console.log`.
 *
 * @api public
 */
exports.log = console.debug || console.log || (() => {});

/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */
function save(namespaces) {
	try {
		if (namespaces) {
			exports.storage.setItem('debug', namespaces);
		} else {
			exports.storage.removeItem('debug');
		}
	} catch (error) {
		// Swallow
		// XXX (@Qix-) should we be logging these?
	}
}

/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */
function load() {
	let r;
	try {
		r = exports.storage.getItem('debug');
	} catch (error) {
		// Swallow
		// XXX (@Qix-) should we be logging these?
	}

	// If debug isn't set in LS, and we're in Electron, try to load $DEBUG
	if (!r && typeof process !== 'undefined' && 'env' in process) {
		r = process.env.DEBUG;
	}

	return r;
}

/**
 * Localstorage attempts to return the localstorage.
 *
 * This is necessary because safari throws
 * when a user disables cookies/localstorage
 * and you attempt to access it.
 *
 * @return {LocalStorage}
 * @api private
 */

function localstorage() {
	try {
		// TVMLKit (Apple TV JS Runtime) does not have a window object, just localStorage in the global context
		// The Browser also has localStorage in the global context.
		return localStorage;
	} catch (error) {
		// Swallow
		// XXX (@Qix-) should we be logging these?
	}
}

module.exports = require('./common')(exports);

const {formatters} = module.exports;

/**
 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
 */

formatters.j = function (v) {
	try {
		return JSON.stringify(v);
	} catch (error) {
		return '[UnexpectedJSONParseError]: ' + error.message;
	}
};

}).call(this)}).call(this,require('_process'))
},{"./common":74,"_process":83}],74:[function(require,module,exports){

/**
 * This is the common logic for both the Node.js and web browser
 * implementations of `debug()`.
 */

function setup(env) {
	createDebug.debug = createDebug;
	createDebug.default = createDebug;
	createDebug.coerce = coerce;
	createDebug.disable = disable;
	createDebug.enable = enable;
	createDebug.enabled = enabled;
	createDebug.humanize = require('ms');
	createDebug.destroy = destroy;

	Object.keys(env).forEach(key => {
		createDebug[key] = env[key];
	});

	/**
	* The currently active debug mode names, and names to skip.
	*/

	createDebug.names = [];
	createDebug.skips = [];

	/**
	* Map of special "%n" handling functions, for the debug "format" argument.
	*
	* Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
	*/
	createDebug.formatters = {};

	/**
	* Selects a color for a debug namespace
	* @param {String} namespace The namespace string for the for the debug instance to be colored
	* @return {Number|String} An ANSI color code for the given namespace
	* @api private
	*/
	function selectColor(namespace) {
		let hash = 0;

		for (let i = 0; i < namespace.length; i++) {
			hash = ((hash << 5) - hash) + namespace.charCodeAt(i);
			hash |= 0; // Convert to 32bit integer
		}

		return createDebug.colors[Math.abs(hash) % createDebug.colors.length];
	}
	createDebug.selectColor = selectColor;

	/**
	* Create a debugger with the given `namespace`.
	*
	* @param {String} namespace
	* @return {Function}
	* @api public
	*/
	function createDebug(namespace) {
		let prevTime;
		let enableOverride = null;
		let namespacesCache;
		let enabledCache;

		function debug(...args) {
			// Disabled?
			if (!debug.enabled) {
				return;
			}

			const self = debug;

			// Set `diff` timestamp
			const curr = Number(new Date());
			const ms = curr - (prevTime || curr);
			self.diff = ms;
			self.prev = prevTime;
			self.curr = curr;
			prevTime = curr;

			args[0] = createDebug.coerce(args[0]);

			if (typeof args[0] !== 'string') {
				// Anything else let's inspect with %O
				args.unshift('%O');
			}

			// Apply any `formatters` transformations
			let index = 0;
			args[0] = args[0].replace(/%([a-zA-Z%])/g, (match, format) => {
				// If we encounter an escaped % then don't increase the array index
				if (match === '%%') {
					return '%';
				}
				index++;
				const formatter = createDebug.formatters[format];
				if (typeof formatter === 'function') {
					const val = args[index];
					match = formatter.call(self, val);

					// Now we need to remove `args[index]` since it's inlined in the `format`
					args.splice(index, 1);
					index--;
				}
				return match;
			});

			// Apply env-specific formatting (colors, etc.)
			createDebug.formatArgs.call(self, args);

			const logFn = self.log || createDebug.log;
			logFn.apply(self, args);
		}

		debug.namespace = namespace;
		debug.useColors = createDebug.useColors();
		debug.color = createDebug.selectColor(namespace);
		debug.extend = extend;
		debug.destroy = createDebug.destroy; // XXX Temporary. Will be removed in the next major release.

		Object.defineProperty(debug, 'enabled', {
			enumerable: true,
			configurable: false,
			get: () => {
				if (enableOverride !== null) {
					return enableOverride;
				}
				if (namespacesCache !== createDebug.namespaces) {
					namespacesCache = createDebug.namespaces;
					enabledCache = createDebug.enabled(namespace);
				}

				return enabledCache;
			},
			set: v => {
				enableOverride = v;
			}
		});

		// Env-specific initialization logic for debug instances
		if (typeof createDebug.init === 'function') {
			createDebug.init(debug);
		}

		return debug;
	}

	function extend(namespace, delimiter) {
		const newDebug = createDebug(this.namespace + (typeof delimiter === 'undefined' ? ':' : delimiter) + namespace);
		newDebug.log = this.log;
		return newDebug;
	}

	/**
	* Enables a debug mode by namespaces. This can include modes
	* separated by a colon and wildcards.
	*
	* @param {String} namespaces
	* @api public
	*/
	function enable(namespaces) {
		createDebug.save(namespaces);
		createDebug.namespaces = namespaces;

		createDebug.names = [];
		createDebug.skips = [];

		let i;
		const split = (typeof namespaces === 'string' ? namespaces : '').split(/[\s,]+/);
		const len = split.length;

		for (i = 0; i < len; i++) {
			if (!split[i]) {
				// ignore empty strings
				continue;
			}

			namespaces = split[i].replace(/\*/g, '.*?');

			if (namespaces[0] === '-') {
				createDebug.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
			} else {
				createDebug.names.push(new RegExp('^' + namespaces + '$'));
			}
		}
	}

	/**
	* Disable debug output.
	*
	* @return {String} namespaces
	* @api public
	*/
	function disable() {
		const namespaces = [
			...createDebug.names.map(toNamespace),
			...createDebug.skips.map(toNamespace).map(namespace => '-' + namespace)
		].join(',');
		createDebug.enable('');
		return namespaces;
	}

	/**
	* Returns true if the given mode name is enabled, false otherwise.
	*
	* @param {String} name
	* @return {Boolean}
	* @api public
	*/
	function enabled(name) {
		if (name[name.length - 1] === '*') {
			return true;
		}

		let i;
		let len;

		for (i = 0, len = createDebug.skips.length; i < len; i++) {
			if (createDebug.skips[i].test(name)) {
				return false;
			}
		}

		for (i = 0, len = createDebug.names.length; i < len; i++) {
			if (createDebug.names[i].test(name)) {
				return true;
			}
		}

		return false;
	}

	/**
	* Convert regexp to namespace
	*
	* @param {RegExp} regxep
	* @return {String} namespace
	* @api private
	*/
	function toNamespace(regexp) {
		return regexp.toString()
			.substring(2, regexp.toString().length - 2)
			.replace(/\.\*\?$/, '*');
	}

	/**
	* Coerce `val`.
	*
	* @param {Mixed} val
	* @return {Mixed}
	* @api private
	*/
	function coerce(val) {
		if (val instanceof Error) {
			return val.stack || val.message;
		}
		return val;
	}

	/**
	* XXX DO NOT USE. This is a temporary stub function.
	* XXX It WILL be removed in the next major release.
	*/
	function destroy() {
		console.warn('Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.');
	}

	createDebug.enable(createDebug.load());

	return createDebug;
}

module.exports = setup;

},{"ms":82}],75:[function(require,module,exports){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

'use strict';

var R = typeof Reflect === 'object' ? Reflect : null
var ReflectApply = R && typeof R.apply === 'function'
  ? R.apply
  : function ReflectApply(target, receiver, args) {
    return Function.prototype.apply.call(target, receiver, args);
  }

var ReflectOwnKeys
if (R && typeof R.ownKeys === 'function') {
  ReflectOwnKeys = R.ownKeys
} else if (Object.getOwnPropertySymbols) {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target)
      .concat(Object.getOwnPropertySymbols(target));
  };
} else {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target);
  };
}

function ProcessEmitWarning(warning) {
  if (console && console.warn) console.warn(warning);
}

var NumberIsNaN = Number.isNaN || function NumberIsNaN(value) {
  return value !== value;
}

function EventEmitter() {
  EventEmitter.init.call(this);
}
module.exports = EventEmitter;
module.exports.once = once;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.prototype._events = undefined;
EventEmitter.prototype._eventsCount = 0;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
var defaultMaxListeners = 10;

function checkListener(listener) {
  if (typeof listener !== 'function') {
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
  }
}

Object.defineProperty(EventEmitter, 'defaultMaxListeners', {
  enumerable: true,
  get: function() {
    return defaultMaxListeners;
  },
  set: function(arg) {
    if (typeof arg !== 'number' || arg < 0 || NumberIsNaN(arg)) {
      throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + arg + '.');
    }
    defaultMaxListeners = arg;
  }
});

EventEmitter.init = function() {

  if (this._events === undefined ||
      this._events === Object.getPrototypeOf(this)._events) {
    this._events = Object.create(null);
    this._eventsCount = 0;
  }

  this._maxListeners = this._maxListeners || undefined;
};

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {
  if (typeof n !== 'number' || n < 0 || NumberIsNaN(n)) {
    throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + n + '.');
  }
  this._maxListeners = n;
  return this;
};

function _getMaxListeners(that) {
  if (that._maxListeners === undefined)
    return EventEmitter.defaultMaxListeners;
  return that._maxListeners;
}

EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
  return _getMaxListeners(this);
};

EventEmitter.prototype.emit = function emit(type) {
  var args = [];
  for (var i = 1; i < arguments.length; i++) args.push(arguments[i]);
  var doError = (type === 'error');

  var events = this._events;
  if (events !== undefined)
    doError = (doError && events.error === undefined);
  else if (!doError)
    return false;

  // If there is no 'error' event listener then throw.
  if (doError) {
    var er;
    if (args.length > 0)
      er = args[0];
    if (er instanceof Error) {
      // Note: The comments on the `throw` lines are intentional, they show
      // up in Node's output if this results in an unhandled exception.
      throw er; // Unhandled 'error' event
    }
    // At least give some kind of context to the user
    var err = new Error('Unhandled error.' + (er ? ' (' + er.message + ')' : ''));
    err.context = er;
    throw err; // Unhandled 'error' event
  }

  var handler = events[type];

  if (handler === undefined)
    return false;

  if (typeof handler === 'function') {
    ReflectApply(handler, this, args);
  } else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);
    for (var i = 0; i < len; ++i)
      ReflectApply(listeners[i], this, args);
  }

  return true;
};

function _addListener(target, type, listener, prepend) {
  var m;
  var events;
  var existing;

  checkListener(listener);

  events = target._events;
  if (events === undefined) {
    events = target._events = Object.create(null);
    target._eventsCount = 0;
  } else {
    // To avoid recursion in the case that type === "newListener"! Before
    // adding it to the listeners, first emit "newListener".
    if (events.newListener !== undefined) {
      target.emit('newListener', type,
                  listener.listener ? listener.listener : listener);

      // Re-assign `events` because a newListener handler could have caused the
      // this._events to be assigned to a new object
      events = target._events;
    }
    existing = events[type];
  }

  if (existing === undefined) {
    // Optimize the case of one listener. Don't need the extra array object.
    existing = events[type] = listener;
    ++target._eventsCount;
  } else {
    if (typeof existing === 'function') {
      // Adding the second element, need to change to array.
      existing = events[type] =
        prepend ? [listener, existing] : [existing, listener];
      // If we've already got an array, just append.
    } else if (prepend) {
      existing.unshift(listener);
    } else {
      existing.push(listener);
    }

    // Check for listener leak
    m = _getMaxListeners(target);
    if (m > 0 && existing.length > m && !existing.warned) {
      existing.warned = true;
      // No error code for this since it is a Warning
      // eslint-disable-next-line no-restricted-syntax
      var w = new Error('Possible EventEmitter memory leak detected. ' +
                          existing.length + ' ' + String(type) + ' listeners ' +
                          'added. Use emitter.setMaxListeners() to ' +
                          'increase limit');
      w.name = 'MaxListenersExceededWarning';
      w.emitter = target;
      w.type = type;
      w.count = existing.length;
      ProcessEmitWarning(w);
    }
  }

  return target;
}

EventEmitter.prototype.addListener = function addListener(type, listener) {
  return _addListener(this, type, listener, false);
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.prependListener =
    function prependListener(type, listener) {
      return _addListener(this, type, listener, true);
    };

function onceWrapper() {
  if (!this.fired) {
    this.target.removeListener(this.type, this.wrapFn);
    this.fired = true;
    if (arguments.length === 0)
      return this.listener.call(this.target);
    return this.listener.apply(this.target, arguments);
  }
}

function _onceWrap(target, type, listener) {
  var state = { fired: false, wrapFn: undefined, target: target, type: type, listener: listener };
  var wrapped = onceWrapper.bind(state);
  wrapped.listener = listener;
  state.wrapFn = wrapped;
  return wrapped;
}

EventEmitter.prototype.once = function once(type, listener) {
  checkListener(listener);
  this.on(type, _onceWrap(this, type, listener));
  return this;
};

EventEmitter.prototype.prependOnceListener =
    function prependOnceListener(type, listener) {
      checkListener(listener);
      this.prependListener(type, _onceWrap(this, type, listener));
      return this;
    };

// Emits a 'removeListener' event if and only if the listener was removed.
EventEmitter.prototype.removeListener =
    function removeListener(type, listener) {
      var list, events, position, i, originalListener;

      checkListener(listener);

      events = this._events;
      if (events === undefined)
        return this;

      list = events[type];
      if (list === undefined)
        return this;

      if (list === listener || list.listener === listener) {
        if (--this._eventsCount === 0)
          this._events = Object.create(null);
        else {
          delete events[type];
          if (events.removeListener)
            this.emit('removeListener', type, list.listener || listener);
        }
      } else if (typeof list !== 'function') {
        position = -1;

        for (i = list.length - 1; i >= 0; i--) {
          if (list[i] === listener || list[i].listener === listener) {
            originalListener = list[i].listener;
            position = i;
            break;
          }
        }

        if (position < 0)
          return this;

        if (position === 0)
          list.shift();
        else {
          spliceOne(list, position);
        }

        if (list.length === 1)
          events[type] = list[0];

        if (events.removeListener !== undefined)
          this.emit('removeListener', type, originalListener || listener);
      }

      return this;
    };

EventEmitter.prototype.off = EventEmitter.prototype.removeListener;

EventEmitter.prototype.removeAllListeners =
    function removeAllListeners(type) {
      var listeners, events, i;

      events = this._events;
      if (events === undefined)
        return this;

      // not listening for removeListener, no need to emit
      if (events.removeListener === undefined) {
        if (arguments.length === 0) {
          this._events = Object.create(null);
          this._eventsCount = 0;
        } else if (events[type] !== undefined) {
          if (--this._eventsCount === 0)
            this._events = Object.create(null);
          else
            delete events[type];
        }
        return this;
      }

      // emit removeListener for all listeners on all events
      if (arguments.length === 0) {
        var keys = Object.keys(events);
        var key;
        for (i = 0; i < keys.length; ++i) {
          key = keys[i];
          if (key === 'removeListener') continue;
          this.removeAllListeners(key);
        }
        this.removeAllListeners('removeListener');
        this._events = Object.create(null);
        this._eventsCount = 0;
        return this;
      }

      listeners = events[type];

      if (typeof listeners === 'function') {
        this.removeListener(type, listeners);
      } else if (listeners !== undefined) {
        // LIFO order
        for (i = listeners.length - 1; i >= 0; i--) {
          this.removeListener(type, listeners[i]);
        }
      }

      return this;
    };

function _listeners(target, type, unwrap) {
  var events = target._events;

  if (events === undefined)
    return [];

  var evlistener = events[type];
  if (evlistener === undefined)
    return [];

  if (typeof evlistener === 'function')
    return unwrap ? [evlistener.listener || evlistener] : [evlistener];

  return unwrap ?
    unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);
}

EventEmitter.prototype.listeners = function listeners(type) {
  return _listeners(this, type, true);
};

EventEmitter.prototype.rawListeners = function rawListeners(type) {
  return _listeners(this, type, false);
};

EventEmitter.listenerCount = function(emitter, type) {
  if (typeof emitter.listenerCount === 'function') {
    return emitter.listenerCount(type);
  } else {
    return listenerCount.call(emitter, type);
  }
};

EventEmitter.prototype.listenerCount = listenerCount;
function listenerCount(type) {
  var events = this._events;

  if (events !== undefined) {
    var evlistener = events[type];

    if (typeof evlistener === 'function') {
      return 1;
    } else if (evlistener !== undefined) {
      return evlistener.length;
    }
  }

  return 0;
}

EventEmitter.prototype.eventNames = function eventNames() {
  return this._eventsCount > 0 ? ReflectOwnKeys(this._events) : [];
};

function arrayClone(arr, n) {
  var copy = new Array(n);
  for (var i = 0; i < n; ++i)
    copy[i] = arr[i];
  return copy;
}

function spliceOne(list, index) {
  for (; index + 1 < list.length; index++)
    list[index] = list[index + 1];
  list.pop();
}

function unwrapListeners(arr) {
  var ret = new Array(arr.length);
  for (var i = 0; i < ret.length; ++i) {
    ret[i] = arr[i].listener || arr[i];
  }
  return ret;
}

function once(emitter, name) {
  return new Promise(function (resolve, reject) {
    function errorListener(err) {
      emitter.removeListener(name, resolver);
      reject(err);
    }

    function resolver() {
      if (typeof emitter.removeListener === 'function') {
        emitter.removeListener('error', errorListener);
      }
      resolve([].slice.call(arguments));
    };

    eventTargetAgnosticAddListener(emitter, name, resolver, { once: true });
    if (name !== 'error') {
      addErrorHandlerIfEventEmitter(emitter, errorListener, { once: true });
    }
  });
}

function addErrorHandlerIfEventEmitter(emitter, handler, flags) {
  if (typeof emitter.on === 'function') {
    eventTargetAgnosticAddListener(emitter, 'error', handler, flags);
  }
}

function eventTargetAgnosticAddListener(emitter, name, listener, flags) {
  if (typeof emitter.on === 'function') {
    if (flags.once) {
      emitter.once(name, listener);
    } else {
      emitter.on(name, listener);
    }
  } else if (typeof emitter.addEventListener === 'function') {
    // EventTarget does not have `error` event semantics like Node
    // EventEmitters, we do not listen for `error` events here.
    emitter.addEventListener(name, function wrapListener(arg) {
      // IE does not have builtin `{ once: true }` support so we
      // have to do it manually.
      if (flags.once) {
        emitter.removeEventListener(name, wrapListener);
      }
      listener(arg);
    });
  } else {
    throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof emitter);
  }
}

},{}],76:[function(require,module,exports){
/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */

// The _isBuffer check is for Safari 5-7 support, because it's missing
// Object.prototype.constructor. Remove this eventually
module.exports = function (obj) {
  return obj != null && (isBuffer(obj) || isSlowBuffer(obj) || !!obj._isBuffer)
}

function isBuffer (obj) {
  return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
}

// For Node v0.10 support. Remove this eventually.
function isSlowBuffer (obj) {
  return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isBuffer(obj.slice(0, 0))
}

},{}],77:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * @description A module for parsing ISO8601 durations
 */

/**
 * The pattern used for parsing ISO8601 duration (PnYnMnDTnHnMnS).
 * This does not cover the week format PnW.
 */

// PnYnMnDTnHnMnS
var numbers = '\\d+(?:[\\.,]\\d+)?';
var weekPattern = '(' + numbers + 'W)';
var datePattern = '(' + numbers + 'Y)?(' + numbers + 'M)?(' + numbers + 'D)?';
var timePattern = 'T(' + numbers + 'H)?(' + numbers + 'M)?(' + numbers + 'S)?';

var iso8601 = 'P(?:' + weekPattern + '|' + datePattern + '(?:' + timePattern + ')?)';
var objMap = ['weeks', 'years', 'months', 'days', 'hours', 'minutes', 'seconds'];

var defaultDuration = Object.freeze({
  years: 0,
  months: 0,
  weeks: 0,
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0
});

/**
 * The ISO8601 regex for matching / testing durations
 */
var pattern = exports.pattern = new RegExp(iso8601);

/** Parse PnYnMnDTnHnMnS format to object
 * @param {string} durationString - PnYnMnDTnHnMnS formatted string
 * @return {Object} - With a property for each part of the pattern
 */
var parse = exports.parse = function parse(durationString) {
  // Slice away first entry in match-array
  return durationString.match(pattern).slice(1).reduce(function (prev, next, idx) {
    prev[objMap[idx]] = parseFloat(next) || 0;
    return prev;
  }, {});
};

/**
 * Convert ISO8601 duration object to an end Date.
 *
 * @param {Object} duration - The duration object
 * @param {Date} startDate - The starting Date for calculating the duration
 * @return {Date} - The resulting end Date
 */
var end = exports.end = function end(duration, startDate) {
  duration = Object.assign({}, defaultDuration, duration);

  // Create two equal timestamps, add duration to 'then' and return time difference
  var timestamp = startDate ? startDate.getTime() : Date.now();
  var then = new Date(timestamp);

  then.setFullYear(then.getFullYear() + duration.years);
  then.setMonth(then.getMonth() + duration.months);
  then.setDate(then.getDate() + duration.days);
  then.setHours(then.getHours() + duration.hours);
  then.setMinutes(then.getMinutes() + duration.minutes);
  // Then.setSeconds(then.getSeconds() + duration.seconds);
  then.setMilliseconds(then.getMilliseconds() + duration.seconds * 1000);
  // Special case weeks
  then.setDate(then.getDate() + duration.weeks * 7);

  return then;
};

/**
 * Convert ISO8601 duration object to seconds
 *
 * @param {Object} duration - The duration object
 * @param {Date} startDate - The starting point for calculating the duration
 * @return {Number}
 */
var toSeconds = exports.toSeconds = function toSeconds(duration, startDate) {
  duration = Object.assign({}, defaultDuration, duration);

  var timestamp = startDate ? startDate.getTime() : Date.now();
  var now = new Date(timestamp);
  var then = end(duration, now);

  var seconds = (then.getTime() - now.getTime()) / 1000;
  return seconds;
};

exports.default = {
  end: end,
  toSeconds: toSeconds,
  pattern: pattern,
  parse: parse
};
},{}],78:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/**
 * Flatten array, one level deep.
 *
 * @param {Array<?>} arr
 *
 * @return {Array<?>}
 */
function flatten(arr) {
  return Array.prototype.concat.apply([], arr);
}

var nativeToString = Object.prototype.toString;
var nativeHasOwnProperty = Object.prototype.hasOwnProperty;
function isUndefined(obj) {
  return obj === undefined;
}
function isDefined(obj) {
  return obj !== undefined;
}
function isNil(obj) {
  return obj == null;
}
function isArray(obj) {
  return nativeToString.call(obj) === '[object Array]';
}
function isObject(obj) {
  return nativeToString.call(obj) === '[object Object]';
}
function isNumber(obj) {
  return nativeToString.call(obj) === '[object Number]';
}
function isFunction(obj) {
  var tag = nativeToString.call(obj);
  return tag === '[object Function]' || tag === '[object AsyncFunction]' || tag === '[object GeneratorFunction]' || tag === '[object AsyncGeneratorFunction]' || tag === '[object Proxy]';
}
function isString(obj) {
  return nativeToString.call(obj) === '[object String]';
}
/**
 * Ensure collection is an array.
 *
 * @param {Object} obj
 */

function ensureArray(obj) {
  if (isArray(obj)) {
    return;
  }

  throw new Error('must supply array');
}
/**
 * Return true, if target owns a property with the given key.
 *
 * @param {Object} target
 * @param {String} key
 *
 * @return {Boolean}
 */

function has(target, key) {
  return nativeHasOwnProperty.call(target, key);
}

/**
 * Find element in collection.
 *
 * @param  {Array|Object} collection
 * @param  {Function|Object} matcher
 *
 * @return {Object}
 */

function find(collection, matcher) {
  matcher = toMatcher(matcher);
  var match;
  forEach(collection, function (val, key) {
    if (matcher(val, key)) {
      match = val;
      return false;
    }
  });
  return match;
}
/**
 * Find element index in collection.
 *
 * @param  {Array|Object} collection
 * @param  {Function} matcher
 *
 * @return {Object}
 */

function findIndex(collection, matcher) {
  matcher = toMatcher(matcher);
  var idx = isArray(collection) ? -1 : undefined;
  forEach(collection, function (val, key) {
    if (matcher(val, key)) {
      idx = key;
      return false;
    }
  });
  return idx;
}
/**
 * Find element in collection.
 *
 * @param  {Array|Object} collection
 * @param  {Function} matcher
 *
 * @return {Array} result
 */

function filter(collection, matcher) {
  var result = [];
  forEach(collection, function (val, key) {
    if (matcher(val, key)) {
      result.push(val);
    }
  });
  return result;
}
/**
 * Iterate over collection; returning something
 * (non-undefined) will stop iteration.
 *
 * @param  {Array|Object} collection
 * @param  {Function} iterator
 *
 * @return {Object} return result that stopped the iteration
 */

function forEach(collection, iterator) {
  var val, result;

  if (isUndefined(collection)) {
    return;
  }

  var convertKey = isArray(collection) ? toNum : identity;

  for (var key in collection) {
    if (has(collection, key)) {
      val = collection[key];
      result = iterator(val, convertKey(key));

      if (result === false) {
        return val;
      }
    }
  }
}
/**
 * Return collection without element.
 *
 * @param  {Array} arr
 * @param  {Function} matcher
 *
 * @return {Array}
 */

function without(arr, matcher) {
  if (isUndefined(arr)) {
    return [];
  }

  ensureArray(arr);
  matcher = toMatcher(matcher);
  return arr.filter(function (el, idx) {
    return !matcher(el, idx);
  });
}
/**
 * Reduce collection, returning a single result.
 *
 * @param  {Object|Array} collection
 * @param  {Function} iterator
 * @param  {Any} result
 *
 * @return {Any} result returned from last iterator
 */

function reduce(collection, iterator, result) {
  forEach(collection, function (value, idx) {
    result = iterator(result, value, idx);
  });
  return result;
}
/**
 * Return true if every element in the collection
 * matches the criteria.
 *
 * @param  {Object|Array} collection
 * @param  {Function} matcher
 *
 * @return {Boolean}
 */

function every(collection, matcher) {
  return !!reduce(collection, function (matches, val, key) {
    return matches && matcher(val, key);
  }, true);
}
/**
 * Return true if some elements in the collection
 * match the criteria.
 *
 * @param  {Object|Array} collection
 * @param  {Function} matcher
 *
 * @return {Boolean}
 */

function some(collection, matcher) {
  return !!find(collection, matcher);
}
/**
 * Transform a collection into another collection
 * by piping each member through the given fn.
 *
 * @param  {Object|Array}   collection
 * @param  {Function} fn
 *
 * @return {Array} transformed collection
 */

function map(collection, fn) {
  var result = [];
  forEach(collection, function (val, key) {
    result.push(fn(val, key));
  });
  return result;
}
/**
 * Get the collections keys.
 *
 * @param  {Object|Array} collection
 *
 * @return {Array}
 */

function keys(collection) {
  return collection && Object.keys(collection) || [];
}
/**
 * Shorthand for `keys(o).length`.
 *
 * @param  {Object|Array} collection
 *
 * @return {Number}
 */

function size(collection) {
  return keys(collection).length;
}
/**
 * Get the values in the collection.
 *
 * @param  {Object|Array} collection
 *
 * @return {Array}
 */

function values(collection) {
  return map(collection, function (val) {
    return val;
  });
}
/**
 * Group collection members by attribute.
 *
 * @param  {Object|Array} collection
 * @param  {Function} extractor
 *
 * @return {Object} map with { attrValue => [ a, b, c ] }
 */

function groupBy(collection, extractor) {
  var grouped = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  extractor = toExtractor(extractor);
  forEach(collection, function (val) {
    var discriminator = extractor(val) || '_';
    var group = grouped[discriminator];

    if (!group) {
      group = grouped[discriminator] = [];
    }

    group.push(val);
  });
  return grouped;
}
function uniqueBy(extractor) {
  extractor = toExtractor(extractor);
  var grouped = {};

  for (var _len = arguments.length, collections = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    collections[_key - 1] = arguments[_key];
  }

  forEach(collections, function (c) {
    return groupBy(c, extractor, grouped);
  });
  var result = map(grouped, function (val, key) {
    return val[0];
  });
  return result;
}
var unionBy = uniqueBy;
/**
 * Sort collection by criteria.
 *
 * @param  {Object|Array} collection
 * @param  {String|Function} extractor
 *
 * @return {Array}
 */

function sortBy(collection, extractor) {
  extractor = toExtractor(extractor);
  var sorted = [];
  forEach(collection, function (value, key) {
    var disc = extractor(value, key);
    var entry = {
      d: disc,
      v: value
    };

    for (var idx = 0; idx < sorted.length; idx++) {
      var d = sorted[idx].d;

      if (disc < d) {
        sorted.splice(idx, 0, entry);
        return;
      }
    } // not inserted, append (!)


    sorted.push(entry);
  });
  return map(sorted, function (e) {
    return e.v;
  });
}
/**
 * Create an object pattern matcher.
 *
 * @example
 *
 * const matcher = matchPattern({ id: 1 });
 *
 * let element = find(elements, matcher);
 *
 * @param  {Object} pattern
 *
 * @return {Function} matcherFn
 */

function matchPattern(pattern) {
  return function (el) {
    return every(pattern, function (val, key) {
      return el[key] === val;
    });
  };
}

function toExtractor(extractor) {
  return isFunction(extractor) ? extractor : function (e) {
    return e[extractor];
  };
}

function toMatcher(matcher) {
  return isFunction(matcher) ? matcher : function (e) {
    return e === matcher;
  };
}

function identity(arg) {
  return arg;
}

function toNum(arg) {
  return Number(arg);
}

/**
 * Debounce fn, calling it only once if the given time
 * elapsed between calls.
 *
 * Lodash-style the function exposes methods to `#clear`
 * and `#flush` to control internal behavior.
 *
 * @param  {Function} fn
 * @param  {Number} timeout
 *
 * @return {Function} debounced function
 */
function debounce(fn, timeout) {
  var timer;
  var lastArgs;
  var lastThis;
  var lastNow;

  function fire(force) {
    var now = Date.now();
    var scheduledDiff = force ? 0 : lastNow + timeout - now;

    if (scheduledDiff > 0) {
      return schedule(scheduledDiff);
    }

    fn.apply(lastThis, lastArgs);
    clear();
  }

  function schedule(timeout) {
    timer = setTimeout(fire, timeout);
  }

  function clear() {
    if (timer) {
      clearTimeout(timer);
    }

    timer = lastNow = lastArgs = lastThis = undefined;
  }

  function flush() {
    if (timer) {
      fire(true);
    }

    clear();
  }

  function callback() {
    lastNow = Date.now();

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    lastArgs = args;
    lastThis = this; // ensure an execution is scheduled

    if (!timer) {
      schedule(timeout);
    }
  }

  callback.flush = flush;
  callback.cancel = clear;
  return callback;
}
/**
 * Throttle fn, calling at most once
 * in the given interval.
 *
 * @param  {Function} fn
 * @param  {Number} interval
 *
 * @return {Function} throttled function
 */

function throttle(fn, interval) {
  var throttling = false;
  return function () {
    if (throttling) {
      return;
    }

    fn.apply(void 0, arguments);
    throttling = true;
    setTimeout(function () {
      throttling = false;
    }, interval);
  };
}
/**
 * Bind function against target <this>.
 *
 * @param  {Function} fn
 * @param  {Object}   target
 *
 * @return {Function} bound function
 */

function bind(fn, target) {
  return fn.bind(target);
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/**
 * Convenience wrapper for `Object.assign`.
 *
 * @param {Object} target
 * @param {...Object} others
 *
 * @return {Object} the target
 */

function assign(target) {
  for (var _len = arguments.length, others = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    others[_key - 1] = arguments[_key];
  }

  return _extends.apply(void 0, [target].concat(others));
}
/**
 * Sets a nested property of a given object to the specified value.
 *
 * This mutates the object and returns it.
 *
 * @param {Object} target The target of the set operation.
 * @param {(string|number)[]} path The path to the nested value.
 * @param {any} value The value to set.
 */

function set(target, path, value) {
  var currentTarget = target;
  forEach(path, function (key, idx) {
    if (key === '__proto__') {
      throw new Error('illegal key: __proto__');
    }

    var nextKey = path[idx + 1];
    var nextTarget = currentTarget[key];

    if (isDefined(nextKey) && isNil(nextTarget)) {
      nextTarget = currentTarget[key] = isNaN(+nextKey) ? {} : [];
    }

    if (isUndefined(nextKey)) {
      if (isUndefined(value)) {
        delete currentTarget[key];
      } else {
        currentTarget[key] = value;
      }
    } else {
      currentTarget = nextTarget;
    }
  });
  return target;
}
/**
 * Gets a nested property of a given object.
 *
 * @param {Object} target The target of the get operation.
 * @param {(string|number)[]} path The path to the nested value.
 * @param {any} [defaultValue] The value to return if no value exists.
 */

function get(target, path, defaultValue) {
  var currentTarget = target;
  forEach(path, function (key) {
    // accessing nil property yields <undefined>
    if (isNil(currentTarget)) {
      currentTarget = undefined;
      return false;
    }

    currentTarget = currentTarget[key];
  });
  return isUndefined(currentTarget) ? defaultValue : currentTarget;
}
/**
 * Pick given properties from the target object.
 *
 * @param {Object} target
 * @param {Array} properties
 *
 * @return {Object} target
 */

function pick(target, properties) {
  var result = {};
  var obj = Object(target);
  forEach(properties, function (prop) {
    if (prop in obj) {
      result[prop] = target[prop];
    }
  });
  return result;
}
/**
 * Pick all target properties, excluding the given ones.
 *
 * @param {Object} target
 * @param {Array} properties
 *
 * @return {Object} target
 */

function omit(target, properties) {
  var result = {};
  var obj = Object(target);
  forEach(obj, function (prop, key) {
    if (properties.indexOf(key) === -1) {
      result[key] = prop;
    }
  });
  return result;
}
/**
 * Recursively merge `...sources` into given target.
 *
 * Does support merging objects; does not support merging arrays.
 *
 * @param {Object} target
 * @param {...Object} sources
 *
 * @return {Object} the target
 */

function merge(target) {
  for (var _len2 = arguments.length, sources = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    sources[_key2 - 1] = arguments[_key2];
  }

  if (!sources.length) {
    return target;
  }

  forEach(sources, function (source) {
    // skip non-obj sources, i.e. null
    if (!source || !isObject(source)) {
      return;
    }

    forEach(source, function (sourceVal, key) {
      if (key === '__proto__') {
        return;
      }

      var targetVal = target[key];

      if (isObject(sourceVal)) {
        if (!isObject(targetVal)) {
          // override target[key] with object
          targetVal = {};
        }

        target[key] = merge(targetVal, sourceVal);
      } else {
        target[key] = sourceVal;
      }
    });
  });
  return target;
}

exports.assign = assign;
exports.bind = bind;
exports.debounce = debounce;
exports.ensureArray = ensureArray;
exports.every = every;
exports.filter = filter;
exports.find = find;
exports.findIndex = findIndex;
exports.flatten = flatten;
exports.forEach = forEach;
exports.get = get;
exports.groupBy = groupBy;
exports.has = has;
exports.isArray = isArray;
exports.isDefined = isDefined;
exports.isFunction = isFunction;
exports.isNil = isNil;
exports.isNumber = isNumber;
exports.isObject = isObject;
exports.isString = isString;
exports.isUndefined = isUndefined;
exports.keys = keys;
exports.map = map;
exports.matchPattern = matchPattern;
exports.merge = merge;
exports.omit = omit;
exports.pick = pick;
exports.reduce = reduce;
exports.set = set;
exports.size = size;
exports.some = some;
exports.sortBy = sortBy;
exports.throttle = throttle;
exports.unionBy = unionBy;
exports.uniqueBy = uniqueBy;
exports.values = values;
exports.without = without;

},{}],79:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TypeResolver = TypeResolver;
exports.resolveTypes = resolveTypes;
exports.map = mapModdleContext;
exports.deserialize = deserialize;
exports.default = void 0;
var _default = context;
exports.default = _default;

function TypeResolver(types, extender) {
  const {
    BpmnError,
    Definition,
    Dummy,
    ServiceImplementation
  } = types;
  const typeMapper = {};
  typeMapper['bpmn:DataObjectReference'] = Dummy;
  typeMapper['bpmn:Definitions'] = Definition;
  typeMapper['bpmn:Error'] = BpmnError;
  if (extender) extender(typeMapper);
  return function resolve(entity) {
    const {
      type,
      behaviour = {}
    } = entity;
    entity.Behaviour = getBehaviourFromType(type);

    if (behaviour.implementation) {
      behaviour.Service = ServiceImplementation;
    }

    if (behaviour.loopCharacteristics) {
      resolve(behaviour.loopCharacteristics);
    }

    if (behaviour.eventDefinitions) {
      behaviour.eventDefinitions.forEach(resolve);
    }

    if (behaviour.ioSpecification) {
      resolve(behaviour.ioSpecification);
    }

    if (behaviour.properties) {
      behaviour.properties.Behaviour = types.Properties;
    }
  };

  function getBehaviourFromType(type) {
    let activityType = typeMapper[type];

    if (!activityType && type) {
      const nonPrefixedType = type.split(':').slice(1).join(':');
      activityType = types[nonPrefixedType];
    }

    if (!activityType) {
      throw new Error(`Unknown activity type ${type}`);
    }

    return activityType;
  }
}

function context(moddleContext, typeResolver, extendFn) {
  const mapped = mapModdleContext(moddleContext, extendFn);
  return contextApi(resolveTypes(mapped, typeResolver));
}

function deserialize(deserializedContext, typeResolver) {
  return contextApi(resolveTypes(deserializedContext, typeResolver));
}

function contextApi(mapped) {
  const {
    activities,
    associations,
    dataObjects,
    dataStores = [],
    definition,
    messageFlows,
    processes,
    sequenceFlows,
    scripts = [],
    timers = []
  } = mapped;
  return {
    id: definition.id,
    type: definition.type,
    name: definition.name,
    getActivities,
    getActivityById,
    getAssociationById,
    getAssociations,
    getDataObjects,
    getDataObjectById,
    getDataStoreReferences,
    getDataStoreReferenceById,
    getDataStoreById,
    getDataStores,
    getExecutableProcesses,

    getExtendContext() {
      return getExtendContext({
        scripts,
        timers
      });
    },

    getInboundAssociations,
    getInboundSequenceFlows,
    getMessageFlows,
    getOutboundAssociations,
    getOutboundSequenceFlows,
    getProcessById,
    getProcesses,
    getSequenceFlowById,
    getSequenceFlows,
    getScripts,
    getScriptsByElementId,
    getTimers,
    getTimersByElementId,
    serialize
  };

  function serialize() {
    return JSON.stringify({
      id: definition.id,
      type: definition.type,
      name: definition.name,
      activities,
      associations,
      dataObjects,
      dataStores,
      definition,
      messageFlows,
      processes,
      sequenceFlows,
      scripts,
      timers
    });
  }

  function getProcessById(processId) {
    return processes.find(({
      id
    }) => id === processId);
  }

  function getProcesses() {
    return processes;
  }

  function getExecutableProcesses() {
    return processes.filter(p => p.behaviour.isExecutable);
  }

  function getInboundSequenceFlows(activityId) {
    return sequenceFlows.filter(flow => flow.targetId === activityId);
  }

  function getOutboundSequenceFlows(activityId) {
    return sequenceFlows.filter(flow => flow.sourceId === activityId);
  }

  function getMessageFlows(scopeId) {
    if (scopeId) return messageFlows.filter(flow => flow.source.processId === scopeId);
    return messageFlows;
  }

  function getSequenceFlows(scopeId) {
    if (scopeId) return sequenceFlows.filter(flow => flow.parent.id === scopeId);
    return sequenceFlows;
  }

  function getSequenceFlowById(flowId) {
    return sequenceFlows.find(({
      id
    }) => id === flowId);
  }

  function getActivities(scopeId) {
    if (!scopeId) return activities;
    return activities.filter(activity => activity.parent.id === scopeId);
  }

  function getDataObjects(scopeId) {
    if (!scopeId) return dataObjects;
    return dataObjects.filter(elm => elm.parent.id === scopeId);
  }

  function getDataObjectById(dataObjectId) {
    return dataObjects.find(({
      id
    }) => id === dataObjectId);
  }

  function getDataStoreReferences(scopeId) {
    if (!scopeId) return dataStores;
    return dataStores.filter(elm => elm.parent.id === scopeId);
  }

  function getDataStoreReferenceById(dataStoreId) {
    return dataStores.find(({
      id
    }) => id === dataStoreId);
  }

  function getDataStoreById(dataStoreId) {
    return dataStores.find(({
      id,
      type
    }) => id === dataStoreId && type === 'bpmn:DataStore');
  }

  function getDataStores() {
    return dataStores.filter(({
      type
    }) => type === 'bpmn:DataStore');
  }

  function getActivityById(activityId) {
    return activities.find(activity => activity.id === activityId);
  }

  function getAssociations(scopeId) {
    if (scopeId) return associations.filter(flow => flow.parent.id === scopeId);
    return associations;
  }

  function getAssociationById(associationId) {
    return associations.find(association => association.id === associationId);
  }

  function getInboundAssociations(activityId) {
    return associations.filter(flow => flow.targetId === activityId);
  }

  function getOutboundAssociations(activityId) {
    return associations.filter(flow => flow.sourceId === activityId);
  }

  function getScripts(elementType) {
    if (!elementType) return scripts.slice();
    return scripts.filter(({
      parent
    }) => parent.type === elementType);
  }

  function getScriptsByElementId(elementId) {
    return scripts.filter(({
      parent
    }) => parent.id === elementId);
  }

  function getTimers(elementType) {
    if (!elementType) return timers.slice();
    return timers.filter(({
      parent
    }) => parent.type === elementType);
  }

  function getTimersByElementId(elementId) {
    return timers.filter(({
      parent
    }) => parent.id === elementId);
  }
}

function resolveTypes(mappedContext, typeResolver) {
  const {
    activities,
    associations,
    dataObjects,
    dataStores = [],
    definition,
    messageFlows,
    processes,
    sequenceFlows
  } = mappedContext;
  definition.Behaviour = typeResolver(definition);
  processes.forEach(typeResolver);
  activities.forEach(typeResolver);
  dataObjects.forEach(typeResolver);
  dataStores.forEach(typeResolver);
  messageFlows.forEach(typeResolver);
  sequenceFlows.forEach(typeResolver);
  associations.forEach(typeResolver);
  return mappedContext;
}

function mapModdleContext(moddleContext, extendFn) {
  const {
    elementsById,
    references
  } = moddleContext;
  const refKeyPattern = /^(?!\$).+?Ref$/;
  const scripts = [];
  const timers = [];
  const rootElement = moddleContext.rootElement ? moddleContext.rootElement : moddleContext.rootHandler.element;
  const definition = {
    id: rootElement.id,
    type: rootElement.$type,
    name: rootElement.name,
    targetNamespace: rootElement.targetNamespace,
    exporter: rootElement.exporter,
    exporterVersion: rootElement.exporterVersion
  };
  const {
    dataInputAssociations,
    dataObjectRefs,
    dataOutputAssociations,
    dataStoreRefs,
    flowRefs,
    processRefs
  } = prepareReferences();
  const {
    activities,
    associations,
    dataObjects,
    dataStores,
    messageFlows,
    processes,
    sequenceFlows
  } = prepareElements(definition, rootElement.rootElements);
  return {
    activities,
    associations,
    dataObjects,
    dataStores,
    definition,
    messageFlows,
    processes,
    sequenceFlows,
    scripts,
    timers
  };

  function prepareReferences() {
    return references.reduce((result, r) => {
      const {
        property,
        element
      } = r;

      switch (property) {
        case 'bpmn:sourceRef':
          {
            const flow = upsertFlowRef(element.id, {
              id: element.id,
              $type: element.$type,
              sourceId: r.id,
              element: elementsById[element.id]
            });
            const outbound = result.sourceRefs[r.id] = result.sourceRefs[r.id] || [];
            outbound.push(flow);
            break;
          }

        case 'bpmn:targetRef':
          {
            const flow = upsertFlowRef(element.id, {
              targetId: r.id
            });
            const inbound = result.targetRefs[r.id] = result.targetRefs[r.id] || [];
            inbound.push(flow);
            break;
          }

        case 'bpmn:default':
          upsertFlowRef(r.id, {
            isDefault: true
          });
          break;

        case 'bpmn:dataStoreRef':
          result.dataStoreRefs.push(r);
          break;

        case 'bpmn:dataObjectRef':
          result.dataObjectRefs.push(r);
          break;

        case 'bpmn:processRef':
          {
            result.processRefs[element.id] = {
              id: r.id,
              $type: element.$type
            };
            break;
          }
      }

      switch (element.$type) {
        case 'bpmn:DataInputAssociation':
          result.dataInputAssociations.push(r);
          break;

        case 'bpmn:DataOutputAssociation':
          result.dataOutputAssociations.push(r);
          break;
      }

      return result;

      function upsertFlowRef(id, value) {
        const flow = result.flowRefs[id] = result.flowRefs[id] || {};
        Object.assign(flow, value);
        return flow;
      }
    }, {
      dataStoreRefs: [],
      dataObjectRefs: [],
      dataInputAssociations: [],
      dataOutputAssociations: [],
      flowRefs: {},
      processRefs: {},
      sourceRefs: {},
      targetRefs: {}
    });
  }

  function prepareElements(parent, elements) {
    if (!elements) return {};
    return elements.reduce((result, element) => {
      const {
        id,
        $type: type,
        name
      } = element;

      switch (type) {
        case 'bpmn:DataObjectReference':
          break;

        case 'bpmn:Collaboration':
          {
            if (element.messageFlows) {
              const {
                messageFlows: flows
              } = prepareElements(parent, element.messageFlows);
              result.messageFlows = result.messageFlows.concat(flows);
            }

            break;
          }

        case 'bpmn:DataObject':
          {
            result.dataObjects.push({
              id,
              name,
              type,
              parent: {
                id: parent.id,
                type: parent.type
              },
              references: prepareDataObjectReferences(),
              behaviour: prepareElementBehaviour()
            });
            break;
          }

        case 'bpmn:DataStore':
          {
            result.dataStores.push({
              id,
              name,
              type,
              parent: {
                id: parent.id,
                type: parent.type
              },
              references: prepareDataStoreReferences(),
              behaviour: prepareElementBehaviour()
            });
            break;
          }

        case 'bpmn:DataStoreReference':
          {
            result.dataStores.push({
              id,
              name,
              type,
              parent: {
                id: parent.id,
                type: parent.type
              },
              behaviour: prepareElementBehaviour()
            });
            break;
          }

        case 'bpmn:MessageFlow':
          {
            const flowRef = flowRefs[element.id];
            result.messageFlows.push({ ...flowRef,
              id,
              type,
              name,
              parent: {
                id: parent.id,
                type: parent.type
              },
              ...getMessageFlowSourceAndTarget(flowRef),
              behaviour: prepareElementBehaviour()
            });
            break;
          }

        case 'bpmn:Association':
          {
            const flowRef = flowRefs[element.id];
            result.associations.push({
              id,
              name,
              type,
              parent: {
                id: parent.id,
                type: parent.type
              },
              targetId: flowRef.targetId,
              sourceId: flowRef.sourceId,
              behaviour: prepareElementBehaviour()
            });
            break;
          }

        case 'bpmn:SequenceFlow':
          {
            const flowRef = flowRefs[element.id];
            result.sequenceFlows.push({
              id,
              name,
              type,
              parent: {
                id: parent.id,
                type: parent.type
              },
              isDefault: flowRef.isDefault,
              targetId: flowRef.targetId,
              sourceId: flowRef.sourceId,
              behaviour: prepareElementBehaviour()
            });
            break;
          }

        case 'bpmn:SubProcess':
        case 'bpmn:Transaction':
        case 'bpmn:Process':
          {
            const bp = {
              id,
              type,
              name,
              parent: {
                id: parent.id,
                type: parent.type
              },
              behaviour: prepareElementBehaviour()
            };
            if (type === 'bpmn:Process') result.processes.push(bp);else result.activities.push(bp);
            [prepareElements({
              id,
              type
            }, element.flowElements), prepareElements({
              id,
              type
            }, element.artifacts)].forEach(subElements => {
              if (subElements.activities) {
                result.activities = result.activities.concat(subElements.activities);
              }

              if (subElements.sequenceFlows) {
                result.sequenceFlows = result.sequenceFlows.concat(subElements.sequenceFlows);
              }

              if (subElements.dataObjects) {
                result.dataObjects = result.dataObjects.concat(subElements.dataObjects);
              }

              if (subElements.dataStores) {
                result.dataStores = result.dataStores.concat(subElements.dataStores);
              }

              if (subElements.associations) {
                result.associations = result.associations.concat(subElements.associations);
              }
            });
            break;
          }

        case 'bpmn:BoundaryEvent':
          {
            const attachedTo = spreadRef(element.attachedToRef);
            result.activities.push(prepareActivity({
              attachedTo
            }));
            break;
          }

        case 'bpmn:ScriptTask':
          {
            const {
              scriptFormat,
              script,
              resource
            } = element;
            getExtendContext({
              scripts
            }).addScript(element.id, {
              parent: {
                id,
                type
              },
              scriptFormat,
              ...(script ? {
                body: script
              } : undefined),
              ...(resource ? {
                resource
              } : undefined)
            });
            result.activities.push(prepareActivity());
            break;
          }

        default:
          {
            result.activities.push(prepareActivity());
          }
      }

      return result;

      function prepareActivity(behaviour) {
        return {
          id,
          type,
          name,
          parent: {
            id: parent.id,
            type: parent.type
          },
          behaviour: prepareElementBehaviour(behaviour)
        };
      }

      function prepareElementBehaviour(behaviour) {
        const resources = element.resources && element.resources.map(mapResource);
        const messageRef = spreadRef(element.messageRef);
        const {
          eventDefinitions: eds,
          loopCharacteristics,
          ioSpecification,
          conditionExpression,
          properties: props
        } = element;
        const extendContext = getExtendContext({
          scripts,
          timers,
          parent: {
            id,
            type
          }
        });
        const eventDefinitions = eds && eds.map(mapElementBehaviourDefinitions).filter(Boolean);
        const properties = props && props.map(mapElementBehaviourDefinitions).filter(Boolean);
        return runExtendFn({ ...behaviour,
          ...element,
          ...(eventDefinitions ? {
            eventDefinitions
          } : undefined),
          ...(loopCharacteristics ? {
            loopCharacteristics: mapActivityBehaviour(loopCharacteristics, extendContext)
          } : undefined),
          ...(ioSpecification ? {
            ioSpecification: mapActivityBehaviour(ioSpecification, extendContext)
          } : undefined),
          ...(properties ? {
            properties: {
              type: 'properties',
              values: properties
            }
          } : undefined),
          ...(conditionExpression ? prepareCondition(conditionExpression, behaviour) : undefined),
          ...(messageRef ? {
            messageRef
          } : undefined),
          ...(resources ? {
            resources
          } : undefined)
        }, extendContext);

        function mapElementBehaviourDefinitions(ed) {
          return mapActivityBehaviour(ed, extendContext);
        }

        function prepareCondition(expr) {
          const {
            language: scriptFormat,
            $type: exprType,
            ...rest
          } = expr;
          if (!scriptFormat) return;
          return extendContext.addScript(element.id, {
            scriptFormat,
            type: exprType,
            ...rest
          });
        }
      }

      function prepareDataObjectReferences() {
        const objectRefs = dataObjectRefs.filter(objectRef => objectRef.id === element.id);
        return objectRefs.map(objectRef => {
          return {
            id: objectRef.element.id,
            type: objectRef.element.$type,
            behaviour: { ...objectRef.element
            }
          };
        });
      }

      function prepareDataStoreReferences() {
        const objectRefs = dataStoreRefs.filter(objectRef => objectRef.id === element.id);
        return objectRefs.map(objectRef => {
          return {
            id: objectRef.element.id,
            type: objectRef.element.$type,
            behaviour: { ...objectRef.element
            }
          };
        });
      }

      function runExtendFn(preparedElement, extendContext) {
        if (!extendFn) return preparedElement;
        const mod = extendFn(preparedElement, extendContext);
        return { ...mod,
          ...preparedElement
        };
      }
    }, {
      activities: [],
      associations: [],
      dataObjects: [],
      dataStores: [],
      messageFlows: [],
      processes: [],
      sequenceFlows: []
    });
  }

  function getMessageFlowSourceAndTarget(flowRef) {
    return {
      source: getElementRef(flowRef.sourceId),
      target: getElementRef(flowRef.targetId)
    };

    function getElementRef(elementId) {
      const targetElement = elementsById[elementId];
      if (!targetElement) return;
      const result = {};

      switch (targetElement.$type) {
        case 'bpmn:Participant':
          {
            result.processId = processRefs[elementId].id;
            break;
          }

        default:
          {
            const bp = rootElement.rootElements.find(e => e.$type === 'bpmn:Process' && e.flowElements.find(ce => ce.id === elementId));
            result.processId = bp.id;
            result.id = elementId;
          }
      }

      return result;
    }
  }

  function mapResource(resource) {
    const {
      $type: type,
      resourceAssignmentExpression
    } = resource;
    return {
      type,
      expression: resourceAssignmentExpression.expression && resourceAssignmentExpression.expression.body,
      behaviour: { ...resource
      }
    };
  }

  function mapActivityBehaviour(ed, {
    addTimer
  }) {
    if (!ed) return;
    const {
      $type: type,
      id
    } = ed;
    let behaviour = { ...ed
    };
    const keys = Object.getOwnPropertyNames(ed);

    for (const key of keys) {
      if (refKeyPattern.test(key)) behaviour[key] = spreadRef(ed[key]);
    }

    switch (type) {
      case 'bpmn:ConditionalEventDefinition':
        {
          behaviour.expression = behaviour.condition && behaviour.condition.body;
          break;
        }

      case 'bpmn:InputOutputSpecification':
        {
          behaviour = prepareIoSpecificationBehaviour(ed);
          break;
        }

      case 'bpmn:Property':
        {
          behaviour = preparePropertyBehaviour(ed);
          break;
        }

      case 'bpmn:MultiInstanceLoopCharacteristics':
        {
          behaviour.loopCardinality = ed.loopCardinality && ed.loopCardinality.body;
          behaviour.completionCondition = ed.completionCondition && ed.completionCondition.body;
          break;
        }

      case 'bpmn:StandardLoopCharacteristics':
        {
          behaviour.loopCondition = ed.loopCondition && ed.loopCondition.body;
          break;
        }

      case 'bpmn:TimerEventDefinition':
        {
          for (const timerType of ['timeCycle', 'timeDuration', 'timeDate']) {
            if (timerType in behaviour && behaviour[timerType].body) {
              const value = behaviour[timerType] = behaviour[timerType].body;
              addTimer(id || timerType, {
                id,
                type,
                timerType,
                value
              });
            }
          }

          break;
        }
    }

    return {
      id,
      type,
      behaviour
    };
  }

  function prepareIoSpecificationBehaviour(ioSpecificationDef) {
    const {
      dataInputs,
      dataOutputs
    } = ioSpecificationDef;
    return {
      dataInputs: dataInputs && dataInputs.map(dataDef => {
        return { ...dataDef,
          type: dataDef.$type,
          behaviour: getDataInputBehaviour(dataDef.id)
        };
      }),
      dataOutputs: dataOutputs && dataOutputs.map(dataDef => {
        return { ...dataDef,
          type: dataDef.$type,
          behaviour: getDataOutputBehaviour(dataDef.id)
        };
      })
    };
  }

  function preparePropertyBehaviour(propertyDef) {
    const dataInput = getDataInputBehaviour(propertyDef.id);
    const dataOutput = getDataOutputBehaviour(propertyDef.id);
    return { ...propertyDef,
      ...(dataInput.association.source ? {
        dataInput
      } : undefined),
      ...(dataOutput.association.target ? {
        dataOutput
      } : undefined)
    };
  }

  function getDataInputBehaviour(dataInputId) {
    const target = dataInputAssociations.find(assoc => assoc.property === 'bpmn:targetRef' && assoc.id === dataInputId && assoc.element);
    const source = target && dataInputAssociations.find(assoc => assoc.property === 'bpmn:sourceRef' && assoc.element && assoc.element.id === target.element.id);
    return {
      association: {
        source: source && { ...source,
          ...getDataRef(source.id)
        },
        target: target && { ...target
        }
      }
    };
  }

  function getDataOutputBehaviour(dataOutputId) {
    const source = dataOutputAssociations.find(assoc => assoc.property === 'bpmn:sourceRef' && assoc.id === dataOutputId && assoc.element);
    const target = source && dataOutputAssociations.find(assoc => assoc.property === 'bpmn:targetRef' && assoc.element && assoc.element.id === source.element.id);
    return {
      association: {
        source: source && { ...source
        },
        target: target && { ...target,
          ...getDataRef(target.id)
        }
      }
    };
  }

  function getDataRef(referenceId) {
    const dataObject = getDataObject(referenceId);
    const dataStore = getDataStore(referenceId);
    return { ...(dataObject ? {
        dataObject
      } : undefined),
      ...(dataStore ? {
        dataStore
      } : undefined)
    };
  }

  function getDataObject(referenceId) {
    const dataReference = dataObjectRefs.find(dor => dor.element && dor.element.id === referenceId);

    if (!dataReference) {
      const dataElm = elementsById[referenceId];
      return dataElm && dataElm.$type === 'bpmn:DataObject' && { ...dataElm
      };
    }

    return { ...elementsById[dataReference.id]
    };
  }

  function getDataStore(referenceId) {
    const dataReference = dataStoreRefs.find(dor => dor.element && dor.element.id === referenceId);
    if (dataReference) return { ...elementsById[dataReference.id]
    };
    const dataElm = elementsById[referenceId];
    if (!dataElm) return;

    switch (dataElm.$type) {
      case 'bpmn:DataStore':
      case 'bpmn:DataStoreReference':
        return { ...dataElm
        };
    }
  }

  function spreadRef(ref) {
    if (!ref) return;
    const {
      id,
      $type: type,
      name
    } = ref;
    return {
      id,
      type,
      name
    };
  }
}

function getExtendContext({
  scripts,
  timers = [],
  parent: heritage
}) {
  return {
    addScript,
    scripts,
    addTimer,
    timers
  };

  function addScript(scriptName, {
    id,
    scriptFormat,
    body,
    resource,
    type,
    parent = heritage
  }) {
    scripts.push({ ...prepare(scriptName, parent),
      script: { ...(id ? {
          id
        } : undefined),
        scriptFormat,
        ...(body ? {
          body
        } : undefined),
        ...(resource ? {
          resource
        } : undefined),
        ...(type ? {
          type
        } : undefined)
      }
    });
  }

  function addTimer(timerName, {
    id,
    timerType,
    type,
    value,
    parent = heritage
  }) {
    timers.push({ ...prepare(timerName, parent),
      timer: { ...(id ? {
          id
        } : undefined),
        timerType,
        ...(value ? {
          value
        } : undefined),
        ...(type ? {
          type
        } : undefined)
      }
    });
  }

  function prepare(name, {
    id,
    type
  } = {}) {
    return {
      name,
      ...(id && type ? {
        parent: {
          id,
          type
        }
      } : undefined)
    };
  }
}
},{}],80:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var minDash = require('min-dash');
var saxen = require('saxen');
var moddle = require('moddle');

function hasLowerCaseAlias(pkg) {
  return pkg.xml && pkg.xml.tagAlias === 'lowerCase';
}

var DEFAULT_NS_MAP = {
  'xsi': 'http://www.w3.org/2001/XMLSchema-instance',
  'xml': 'http://www.w3.org/XML/1998/namespace'
};

var XSI_TYPE = 'xsi:type';

function serializeFormat(element) {
  return element.xml && element.xml.serialize;
}

function serializeAsType(element) {
  return serializeFormat(element) === XSI_TYPE;
}

function serializeAsProperty(element) {
  return serializeFormat(element) === 'property';
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function aliasToName(aliasNs, pkg) {

  if (!hasLowerCaseAlias(pkg)) {
    return aliasNs.name;
  }

  return aliasNs.prefix + ':' + capitalize(aliasNs.localName);
}

function prefixedToName(nameNs, pkg) {

  var name = nameNs.name,
      localName = nameNs.localName;

  var typePrefix = pkg.xml && pkg.xml.typePrefix;

  if (typePrefix && localName.indexOf(typePrefix) === 0) {
    return nameNs.prefix + ':' + localName.slice(typePrefix.length);
  } else {
    return name;
  }
}

function normalizeXsiTypeName(name, model) {

  var nameNs = moddle.parseNameNS(name);
  var pkg = model.getPackage(nameNs.prefix);

  return prefixedToName(nameNs, pkg);
}

function error(message) {
  return new Error(message);
}

/**
 * Get the moddle descriptor for a given instance or type.
 *
 * @param  {ModdleElement|Function} element
 *
 * @return {Object} the moddle descriptor
 */
function getModdleDescriptor(element) {
  return element.$descriptor;
}


/**
 * A parse context.
 *
 * @class
 *
 * @param {Object} options
 * @param {ElementHandler} options.rootHandler the root handler for parsing a document
 * @param {boolean} [options.lax=false] whether or not to ignore invalid elements
 */
function Context(options) {

  /**
   * @property {ElementHandler} rootHandler
   */

  /**
   * @property {Boolean} lax
   */

  minDash.assign(this, options);

  this.elementsById = {};
  this.references = [];
  this.warnings = [];

  /**
   * Add an unresolved reference.
   *
   * @param {Object} reference
   */
  this.addReference = function(reference) {
    this.references.push(reference);
  };

  /**
   * Add a processed element.
   *
   * @param {ModdleElement} element
   */
  this.addElement = function(element) {

    if (!element) {
      throw error('expected element');
    }

    var elementsById = this.elementsById;

    var descriptor = getModdleDescriptor(element);

    var idProperty = descriptor.idProperty,
        id;

    if (idProperty) {
      id = element.get(idProperty.name);

      if (id) {

        // for QName validation as per http://www.w3.org/TR/REC-xml/#NT-NameChar
        if (!/^([a-z][\w-.]*:)?[a-z_][\w-.]*$/i.test(id)) {
          throw new Error('illegal ID <' + id + '>');
        }

        if (elementsById[id]) {
          throw error('duplicate ID <' + id + '>');
        }

        elementsById[id] = element;
      }
    }
  };

  /**
   * Add an import warning.
   *
   * @param {Object} warning
   * @param {String} warning.message
   * @param {Error} [warning.error]
   */
  this.addWarning = function(warning) {
    this.warnings.push(warning);
  };
}

function BaseHandler() {}

BaseHandler.prototype.handleEnd = function() {};
BaseHandler.prototype.handleText = function() {};
BaseHandler.prototype.handleNode = function() {};


/**
 * A simple pass through handler that does nothing except for
 * ignoring all input it receives.
 *
 * This is used to ignore unknown elements and
 * attributes.
 */
function NoopHandler() { }

NoopHandler.prototype = Object.create(BaseHandler.prototype);

NoopHandler.prototype.handleNode = function() {
  return this;
};

function BodyHandler() {}

BodyHandler.prototype = Object.create(BaseHandler.prototype);

BodyHandler.prototype.handleText = function(text) {
  this.body = (this.body || '') + text;
};

function ReferenceHandler(property, context) {
  this.property = property;
  this.context = context;
}

ReferenceHandler.prototype = Object.create(BodyHandler.prototype);

ReferenceHandler.prototype.handleNode = function(node) {

  if (this.element) {
    throw error('expected no sub nodes');
  } else {
    this.element = this.createReference(node);
  }

  return this;
};

ReferenceHandler.prototype.handleEnd = function() {
  this.element.id = this.body;
};

ReferenceHandler.prototype.createReference = function(node) {
  return {
    property: this.property.ns.name,
    id: ''
  };
};

function ValueHandler(propertyDesc, element) {
  this.element = element;
  this.propertyDesc = propertyDesc;
}

ValueHandler.prototype = Object.create(BodyHandler.prototype);

ValueHandler.prototype.handleEnd = function() {

  var value = this.body || '',
      element = this.element,
      propertyDesc = this.propertyDesc;

  value = moddle.coerceType(propertyDesc.type, value);

  if (propertyDesc.isMany) {
    element.get(propertyDesc.name).push(value);
  } else {
    element.set(propertyDesc.name, value);
  }
};


function BaseElementHandler() {}

BaseElementHandler.prototype = Object.create(BodyHandler.prototype);

BaseElementHandler.prototype.handleNode = function(node) {
  var parser = this,
      element = this.element;

  if (!element) {
    element = this.element = this.createElement(node);

    this.context.addElement(element);
  } else {
    parser = this.handleChild(node);
  }

  return parser;
};

/**
 * @class Reader.ElementHandler
 *
 */
function ElementHandler(model, typeName, context) {
  this.model = model;
  this.type = model.getType(typeName);
  this.context = context;
}

ElementHandler.prototype = Object.create(BaseElementHandler.prototype);

ElementHandler.prototype.addReference = function(reference) {
  this.context.addReference(reference);
};

ElementHandler.prototype.handleText = function(text) {

  var element = this.element,
      descriptor = getModdleDescriptor(element),
      bodyProperty = descriptor.bodyProperty;

  if (!bodyProperty) {
    throw error('unexpected body text <' + text + '>');
  }

  BodyHandler.prototype.handleText.call(this, text);
};

ElementHandler.prototype.handleEnd = function() {

  var value = this.body,
      element = this.element,
      descriptor = getModdleDescriptor(element),
      bodyProperty = descriptor.bodyProperty;

  if (bodyProperty && value !== undefined) {
    value = moddle.coerceType(bodyProperty.type, value);
    element.set(bodyProperty.name, value);
  }
};

/**
 * Create an instance of the model from the given node.
 *
 * @param  {Element} node the xml node
 */
ElementHandler.prototype.createElement = function(node) {
  var attributes = node.attributes,
      Type = this.type,
      descriptor = getModdleDescriptor(Type),
      context = this.context,
      instance = new Type({}),
      model = this.model,
      propNameNs;

  minDash.forEach(attributes, function(value, name) {

    var prop = descriptor.propertiesByName[name],
        values;

    if (prop && prop.isReference) {

      if (!prop.isMany) {
        context.addReference({
          element: instance,
          property: prop.ns.name,
          id: value
        });
      } else {

        // IDREFS: parse references as whitespace-separated list
        values = value.split(' ');

        minDash.forEach(values, function(v) {
          context.addReference({
            element: instance,
            property: prop.ns.name,
            id: v
          });
        });
      }

    } else {
      if (prop) {
        value = moddle.coerceType(prop.type, value);
      } else
      if (name !== 'xmlns') {
        propNameNs = moddle.parseNameNS(name, descriptor.ns.prefix);

        // check whether attribute is defined in a well-known namespace
        // if that is the case we emit a warning to indicate potential misuse
        if (model.getPackage(propNameNs.prefix)) {

          context.addWarning({
            message: 'unknown attribute <' + name + '>',
            element: instance,
            property: name,
            value: value
          });
        }
      }

      instance.set(name, value);
    }
  });

  return instance;
};

ElementHandler.prototype.getPropertyForNode = function(node) {

  var name = node.name;
  var nameNs = moddle.parseNameNS(name);

  var type = this.type,
      model = this.model,
      descriptor = getModdleDescriptor(type);

  var propertyName = nameNs.name,
      property = descriptor.propertiesByName[propertyName],
      elementTypeName,
      elementType;

  // search for properties by name first

  if (property && !property.isAttr) {

    if (serializeAsType(property)) {
      elementTypeName = node.attributes[XSI_TYPE];

      // xsi type is optional, if it does not exists the
      // default type is assumed
      if (elementTypeName) {

        // take possible type prefixes from XML
        // into account, i.e.: xsi:type="t{ActualType}"
        elementTypeName = normalizeXsiTypeName(elementTypeName, model);

        elementType = model.getType(elementTypeName);

        return minDash.assign({}, property, {
          effectiveType: getModdleDescriptor(elementType).name
        });
      }
    }

    // search for properties by name first
    return property;
  }

  var pkg = model.getPackage(nameNs.prefix);

  if (pkg) {
    elementTypeName = aliasToName(nameNs, pkg);
    elementType = model.getType(elementTypeName);

    // search for collection members later
    property = minDash.find(descriptor.properties, function(p) {
      return !p.isVirtual && !p.isReference && !p.isAttribute && elementType.hasType(p.type);
    });

    if (property) {
      return minDash.assign({}, property, {
        effectiveType: getModdleDescriptor(elementType).name
      });
    }
  } else {

    // parse unknown element (maybe extension)
    property = minDash.find(descriptor.properties, function(p) {
      return !p.isReference && !p.isAttribute && p.type === 'Element';
    });

    if (property) {
      return property;
    }
  }

  throw error('unrecognized element <' + nameNs.name + '>');
};

ElementHandler.prototype.toString = function() {
  return 'ElementDescriptor[' + getModdleDescriptor(this.type).name + ']';
};

ElementHandler.prototype.valueHandler = function(propertyDesc, element) {
  return new ValueHandler(propertyDesc, element);
};

ElementHandler.prototype.referenceHandler = function(propertyDesc) {
  return new ReferenceHandler(propertyDesc, this.context);
};

ElementHandler.prototype.handler = function(type) {
  if (type === 'Element') {
    return new GenericElementHandler(this.model, type, this.context);
  } else {
    return new ElementHandler(this.model, type, this.context);
  }
};

/**
 * Handle the child element parsing
 *
 * @param  {Element} node the xml node
 */
ElementHandler.prototype.handleChild = function(node) {
  var propertyDesc, type, element, childHandler;

  propertyDesc = this.getPropertyForNode(node);
  element = this.element;

  type = propertyDesc.effectiveType || propertyDesc.type;

  if (moddle.isSimpleType(type)) {
    return this.valueHandler(propertyDesc, element);
  }

  if (propertyDesc.isReference) {
    childHandler = this.referenceHandler(propertyDesc).handleNode(node);
  } else {
    childHandler = this.handler(type).handleNode(node);
  }

  var newElement = childHandler.element;

  // child handles may decide to skip elements
  // by not returning anything
  if (newElement !== undefined) {

    if (propertyDesc.isMany) {
      element.get(propertyDesc.name).push(newElement);
    } else {
      element.set(propertyDesc.name, newElement);
    }

    if (propertyDesc.isReference) {
      minDash.assign(newElement, {
        element: element
      });

      this.context.addReference(newElement);
    } else {

      // establish child -> parent relationship
      newElement.$parent = element;
    }
  }

  return childHandler;
};

/**
 * An element handler that performs special validation
 * to ensure the node it gets initialized with matches
 * the handlers type (namespace wise).
 *
 * @param {Moddle} model
 * @param {String} typeName
 * @param {Context} context
 */
function RootElementHandler(model, typeName, context) {
  ElementHandler.call(this, model, typeName, context);
}

RootElementHandler.prototype = Object.create(ElementHandler.prototype);

RootElementHandler.prototype.createElement = function(node) {

  var name = node.name,
      nameNs = moddle.parseNameNS(name),
      model = this.model,
      type = this.type,
      pkg = model.getPackage(nameNs.prefix),
      typeName = pkg && aliasToName(nameNs, pkg) || name;

  // verify the correct namespace if we parse
  // the first element in the handler tree
  //
  // this ensures we don't mistakenly import wrong namespace elements
  if (!type.hasType(typeName)) {
    throw error('unexpected element <' + node.originalName + '>');
  }

  return ElementHandler.prototype.createElement.call(this, node);
};


function GenericElementHandler(model, typeName, context) {
  this.model = model;
  this.context = context;
}

GenericElementHandler.prototype = Object.create(BaseElementHandler.prototype);

GenericElementHandler.prototype.createElement = function(node) {

  var name = node.name,
      ns = moddle.parseNameNS(name),
      prefix = ns.prefix,
      uri = node.ns[prefix + '$uri'],
      attributes = node.attributes;

  return this.model.createAny(name, uri, attributes);
};

GenericElementHandler.prototype.handleChild = function(node) {

  var handler = new GenericElementHandler(this.model, 'Element', this.context).handleNode(node),
      element = this.element;

  var newElement = handler.element,
      children;

  if (newElement !== undefined) {
    children = element.$children = element.$children || [];
    children.push(newElement);

    // establish child -> parent relationship
    newElement.$parent = element;
  }

  return handler;
};

GenericElementHandler.prototype.handleEnd = function() {
  if (this.body) {
    this.element.$body = this.body;
  }
};

/**
 * A reader for a meta-model
 *
 * @param {Object} options
 * @param {Model} options.model used to read xml files
 * @param {Boolean} options.lax whether to make parse errors warnings
 */
function Reader(options) {

  if (options instanceof moddle.Moddle) {
    options = {
      model: options
    };
  }

  minDash.assign(this, { lax: false }, options);
}

/**
 * The fromXML result.
 *
 * @typedef {Object} ParseResult
 *
 * @property {ModdleElement} rootElement
 * @property {Array<Object>} references
 * @property {Array<Error>} warnings
 * @property {Object} elementsById - a mapping containing each ID -> ModdleElement
 */

/**
 * The fromXML result.
 *
 * @typedef {Error} ParseError
 *
 * @property {Array<Error>} warnings
 */

/**
 * Parse the given XML into a moddle document tree.
 *
 * @param {String} xml
 * @param {ElementHandler|Object} options or rootHandler
 *
 * @returns {Promise<ParseResult, ParseError>}
 */
Reader.prototype.fromXML = function(xml, options, done) {

  var rootHandler = options.rootHandler;

  if (options instanceof ElementHandler) {

    // root handler passed via (xml, { rootHandler: ElementHandler }, ...)
    rootHandler = options;
    options = {};
  } else {
    if (typeof options === 'string') {

      // rootHandler passed via (xml, 'someString', ...)
      rootHandler = this.handler(options);
      options = {};
    } else if (typeof rootHandler === 'string') {

      // rootHandler passed via (xml, { rootHandler: 'someString' }, ...)
      rootHandler = this.handler(rootHandler);
    }
  }

  var model = this.model,
      lax = this.lax;

  var context = new Context(minDash.assign({}, options, { rootHandler: rootHandler })),
      parser = new saxen.Parser({ proxy: true }),
      stack = createStack();

  rootHandler.context = context;

  // push root handler
  stack.push(rootHandler);


  /**
   * Handle error.
   *
   * @param  {Error} err
   * @param  {Function} getContext
   * @param  {boolean} lax
   *
   * @return {boolean} true if handled
   */
  function handleError(err, getContext, lax) {

    var ctx = getContext();

    var line = ctx.line,
        column = ctx.column,
        data = ctx.data;

    // we receive the full context data here,
    // for elements trim down the information
    // to the tag name, only
    if (data.charAt(0) === '<' && data.indexOf(' ') !== -1) {
      data = data.slice(0, data.indexOf(' ')) + '>';
    }

    var message =
      'unparsable content ' + (data ? data + ' ' : '') + 'detected\n\t' +
        'line: ' + line + '\n\t' +
        'column: ' + column + '\n\t' +
        'nested error: ' + err.message;

    if (lax) {
      context.addWarning({
        message: message,
        error: err
      });

      return true;
    } else {
      throw error(message);
    }
  }

  function handleWarning(err, getContext) {

    // just like handling errors in <lax=true> mode
    return handleError(err, getContext, true);
  }

  /**
   * Resolve collected references on parse end.
   */
  function resolveReferences() {

    var elementsById = context.elementsById;
    var references = context.references;

    var i, r;

    for (i = 0; (r = references[i]); i++) {
      var element = r.element;
      var reference = elementsById[r.id];
      var property = getModdleDescriptor(element).propertiesByName[r.property];

      if (!reference) {
        context.addWarning({
          message: 'unresolved reference <' + r.id + '>',
          element: r.element,
          property: r.property,
          value: r.id
        });
      }

      if (property.isMany) {
        var collection = element.get(property.name),
            idx = collection.indexOf(r);

        // we replace an existing place holder (idx != -1) or
        // append to the collection instead
        if (idx === -1) {
          idx = collection.length;
        }

        if (!reference) {

          // remove unresolvable reference
          collection.splice(idx, 1);
        } else {

          // add or update reference in collection
          collection[idx] = reference;
        }
      } else {
        element.set(property.name, reference);
      }
    }
  }

  function handleClose() {
    stack.pop().handleEnd();
  }

  var PREAMBLE_START_PATTERN = /^<\?xml /i;

  var ENCODING_PATTERN = / encoding="([^"]+)"/i;

  var UTF_8_PATTERN = /^utf-8$/i;

  function handleQuestion(question) {

    if (!PREAMBLE_START_PATTERN.test(question)) {
      return;
    }

    var match = ENCODING_PATTERN.exec(question);
    var encoding = match && match[1];

    if (!encoding || UTF_8_PATTERN.test(encoding)) {
      return;
    }

    context.addWarning({
      message:
        'unsupported document encoding <' + encoding + '>, ' +
        'falling back to UTF-8'
    });
  }

  function handleOpen(node, getContext) {
    var handler = stack.peek();

    try {
      stack.push(handler.handleNode(node));
    } catch (err) {

      if (handleError(err, getContext, lax)) {
        stack.push(new NoopHandler());
      }
    }
  }

  function handleCData(text, getContext) {

    try {
      stack.peek().handleText(text);
    } catch (err) {
      handleWarning(err, getContext);
    }
  }

  function handleText(text, getContext) {

    // strip whitespace only nodes, i.e. before
    // <!CDATA[ ... ]> sections and in between tags

    if (!text.trim()) {
      return;
    }

    handleCData(text, getContext);
  }

  var uriMap = model.getPackages().reduce(function(uriMap, p) {
    uriMap[p.uri] = p.prefix;

    return uriMap;
  }, {
    'http://www.w3.org/XML/1998/namespace': 'xml' // add default xml ns
  });
  parser
    .ns(uriMap)
    .on('openTag', function(obj, decodeStr, selfClosing, getContext) {

      // gracefully handle unparsable attributes (attrs=false)
      var attrs = obj.attrs || {};

      var decodedAttrs = Object.keys(attrs).reduce(function(d, key) {
        var value = decodeStr(attrs[key]);

        d[key] = value;

        return d;
      }, {});

      var node = {
        name: obj.name,
        originalName: obj.originalName,
        attributes: decodedAttrs,
        ns: obj.ns
      };

      handleOpen(node, getContext);
    })
    .on('question', handleQuestion)
    .on('closeTag', handleClose)
    .on('cdata', handleCData)
    .on('text', function(text, decodeEntities, getContext) {
      handleText(decodeEntities(text), getContext);
    })
    .on('error', handleError)
    .on('warn', handleWarning);

  // async XML parsing to make sure the execution environment
  // (node or brower) is kept responsive and that certain optimization
  // strategies can kick in.
  return new Promise(function(resolve, reject) {

    var err;

    try {
      parser.parse(xml);

      resolveReferences();
    } catch (e) {
      err = e;
    }

    var rootElement = rootHandler.element;

    if (!err && !rootElement) {
      err = error('failed to parse document as <' + rootHandler.type.$descriptor.name + '>');
    }

    var warnings = context.warnings;
    var references = context.references;
    var elementsById = context.elementsById;

    if (err) {
      err.warnings = warnings;

      return reject(err);
    } else {
      return resolve({
        rootElement: rootElement,
        elementsById: elementsById,
        references: references,
        warnings: warnings
      });
    }
  });
};

Reader.prototype.handler = function(name) {
  return new RootElementHandler(this.model, name);
};


// helpers //////////////////////////

function createStack() {
  var stack = [];

  Object.defineProperty(stack, 'peek', {
    value: function() {
      return this[this.length - 1];
    }
  });

  return stack;
}

var XML_PREAMBLE = '<?xml version="1.0" encoding="UTF-8"?>\n';

var ESCAPE_ATTR_CHARS = /<|>|'|"|&|\n\r|\n/g;
var ESCAPE_CHARS = /<|>|&/g;


function Namespaces(parent) {

  var prefixMap = {};
  var uriMap = {};
  var used = {};

  var wellknown = [];
  var custom = [];

  // API

  this.byUri = function(uri) {
    return uriMap[uri] || (
      parent && parent.byUri(uri)
    );
  };

  this.add = function(ns, isWellknown) {

    uriMap[ns.uri] = ns;

    if (isWellknown) {
      wellknown.push(ns);
    } else {
      custom.push(ns);
    }

    this.mapPrefix(ns.prefix, ns.uri);
  };

  this.uriByPrefix = function(prefix) {
    return prefixMap[prefix || 'xmlns'];
  };

  this.mapPrefix = function(prefix, uri) {
    prefixMap[prefix || 'xmlns'] = uri;
  };

  this.getNSKey = function(ns) {
    return (ns.prefix !== undefined) ? (ns.uri + '|' + ns.prefix) : ns.uri;
  };

  this.logUsed = function(ns) {

    var uri = ns.uri;
    var nsKey = this.getNSKey(ns);

    used[nsKey] = this.byUri(uri);

    // Inform parent recursively about the usage of this NS
    if (parent) {
      parent.logUsed(ns);
    }
  };

  this.getUsed = function(ns) {

    function isUsed(ns) {
      var nsKey = self.getNSKey(ns);

      return used[nsKey];
    }

    var self = this;

    var allNs = [].concat(wellknown, custom);

    return allNs.filter(isUsed);
  };

}

function lower(string) {
  return string.charAt(0).toLowerCase() + string.slice(1);
}

function nameToAlias(name, pkg) {
  if (hasLowerCaseAlias(pkg)) {
    return lower(name);
  } else {
    return name;
  }
}

function inherits(ctor, superCtor) {
  ctor.super_ = superCtor;
  ctor.prototype = Object.create(superCtor.prototype, {
    constructor: {
      value: ctor,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
}

function nsName(ns) {
  if (minDash.isString(ns)) {
    return ns;
  } else {
    return (ns.prefix ? ns.prefix + ':' : '') + ns.localName;
  }
}

function getNsAttrs(namespaces) {

  return namespaces.getUsed().filter(function(ns) {

    // do not serialize built in <xml> namespace
    return ns.prefix !== 'xml';
  }).map(function(ns) {
    var name = 'xmlns' + (ns.prefix ? ':' + ns.prefix : '');
    return { name: name, value: ns.uri };
  });

}

function getElementNs(ns, descriptor) {
  if (descriptor.isGeneric) {
    return minDash.assign({ localName: descriptor.ns.localName }, ns);
  } else {
    return minDash.assign({ localName: nameToAlias(descriptor.ns.localName, descriptor.$pkg) }, ns);
  }
}

function getPropertyNs(ns, descriptor) {
  return minDash.assign({ localName: descriptor.ns.localName }, ns);
}

function getSerializableProperties(element) {
  var descriptor = element.$descriptor;

  return minDash.filter(descriptor.properties, function(p) {
    var name = p.name;

    if (p.isVirtual) {
      return false;
    }

    // do not serialize defaults
    if (!minDash.has(element, name)) {
      return false;
    }

    var value = element[name];

    // do not serialize default equals
    if (value === p.default) {
      return false;
    }

    // do not serialize null properties
    if (value === null) {
      return false;
    }

    return p.isMany ? value.length : true;
  });
}

var ESCAPE_ATTR_MAP = {
  '\n': '#10',
  '\n\r': '#10',
  '"': '#34',
  '\'': '#39',
  '<': '#60',
  '>': '#62',
  '&': '#38'
};

var ESCAPE_MAP = {
  '<': 'lt',
  '>': 'gt',
  '&': 'amp'
};

function escape(str, charPattern, replaceMap) {

  // ensure we are handling strings here
  str = minDash.isString(str) ? str : '' + str;

  return str.replace(charPattern, function(s) {
    return '&' + replaceMap[s] + ';';
  });
}

/**
 * Escape a string attribute to not contain any bad values (line breaks, '"', ...)
 *
 * @param {String} str the string to escape
 * @return {String} the escaped string
 */
function escapeAttr(str) {
  return escape(str, ESCAPE_ATTR_CHARS, ESCAPE_ATTR_MAP);
}

function escapeBody(str) {
  return escape(str, ESCAPE_CHARS, ESCAPE_MAP);
}

function filterAttributes(props) {
  return minDash.filter(props, function(p) { return p.isAttr; });
}

function filterContained(props) {
  return minDash.filter(props, function(p) { return !p.isAttr; });
}


function ReferenceSerializer(tagName) {
  this.tagName = tagName;
}

ReferenceSerializer.prototype.build = function(element) {
  this.element = element;
  return this;
};

ReferenceSerializer.prototype.serializeTo = function(writer) {
  writer
    .appendIndent()
    .append('<' + this.tagName + '>' + this.element.id + '</' + this.tagName + '>')
    .appendNewLine();
};

function BodySerializer() {}

BodySerializer.prototype.serializeValue =
BodySerializer.prototype.serializeTo = function(writer) {
  writer.append(
    this.escape
      ? escapeBody(this.value)
      : this.value
  );
};

BodySerializer.prototype.build = function(prop, value) {
  this.value = value;

  if (prop.type === 'String' && value.search(ESCAPE_CHARS) !== -1) {
    this.escape = true;
  }

  return this;
};

function ValueSerializer(tagName) {
  this.tagName = tagName;
}

inherits(ValueSerializer, BodySerializer);

ValueSerializer.prototype.serializeTo = function(writer) {

  writer
    .appendIndent()
    .append('<' + this.tagName + '>');

  this.serializeValue(writer);

  writer
    .append('</' + this.tagName + '>')
    .appendNewLine();
};

function ElementSerializer(parent, propertyDescriptor) {
  this.body = [];
  this.attrs = [];

  this.parent = parent;
  this.propertyDescriptor = propertyDescriptor;
}

ElementSerializer.prototype.build = function(element) {
  this.element = element;

  var elementDescriptor = element.$descriptor,
      propertyDescriptor = this.propertyDescriptor;

  var otherAttrs,
      properties;

  var isGeneric = elementDescriptor.isGeneric;

  if (isGeneric) {
    otherAttrs = this.parseGeneric(element);
  } else {
    otherAttrs = this.parseNsAttributes(element);
  }

  if (propertyDescriptor) {
    this.ns = this.nsPropertyTagName(propertyDescriptor);
  } else {
    this.ns = this.nsTagName(elementDescriptor);
  }

  // compute tag name
  this.tagName = this.addTagName(this.ns);

  if (!isGeneric) {
    properties = getSerializableProperties(element);

    this.parseAttributes(filterAttributes(properties));
    this.parseContainments(filterContained(properties));
  }

  this.parseGenericAttributes(element, otherAttrs);

  return this;
};

ElementSerializer.prototype.nsTagName = function(descriptor) {
  var effectiveNs = this.logNamespaceUsed(descriptor.ns);
  return getElementNs(effectiveNs, descriptor);
};

ElementSerializer.prototype.nsPropertyTagName = function(descriptor) {
  var effectiveNs = this.logNamespaceUsed(descriptor.ns);
  return getPropertyNs(effectiveNs, descriptor);
};

ElementSerializer.prototype.isLocalNs = function(ns) {
  return ns.uri === this.ns.uri;
};

/**
 * Get the actual ns attribute name for the given element.
 *
 * @param {Object} element
 * @param {Boolean} [element.inherited=false]
 *
 * @return {Object} nsName
 */
ElementSerializer.prototype.nsAttributeName = function(element) {

  var ns;

  if (minDash.isString(element)) {
    ns = moddle.parseNameNS(element);
  } else {
    ns = element.ns;
  }

  // return just local name for inherited attributes
  if (element.inherited) {
    return { localName: ns.localName };
  }

  // parse + log effective ns
  var effectiveNs = this.logNamespaceUsed(ns);

  // LOG ACTUAL namespace use
  this.getNamespaces().logUsed(effectiveNs);

  // strip prefix if same namespace like parent
  if (this.isLocalNs(effectiveNs)) {
    return { localName: ns.localName };
  } else {
    return minDash.assign({ localName: ns.localName }, effectiveNs);
  }
};

ElementSerializer.prototype.parseGeneric = function(element) {

  var self = this,
      body = this.body;

  var attributes = [];

  minDash.forEach(element, function(val, key) {

    var nonNsAttr;

    if (key === '$body') {
      body.push(new BodySerializer().build({ type: 'String' }, val));
    } else
    if (key === '$children') {
      minDash.forEach(val, function(child) {
        body.push(new ElementSerializer(self).build(child));
      });
    } else
    if (key.indexOf('$') !== 0) {
      nonNsAttr = self.parseNsAttribute(element, key, val);

      if (nonNsAttr) {
        attributes.push({ name: key, value: val });
      }
    }
  });

  return attributes;
};

ElementSerializer.prototype.parseNsAttribute = function(element, name, value) {
  var model = element.$model;

  var nameNs = moddle.parseNameNS(name);

  var ns;

  // parse xmlns:foo="http://foo.bar"
  if (nameNs.prefix === 'xmlns') {
    ns = { prefix: nameNs.localName, uri: value };
  }

  // parse xmlns="http://foo.bar"
  if (!nameNs.prefix && nameNs.localName === 'xmlns') {
    ns = { uri: value };
  }

  if (!ns) {
    return {
      name: name,
      value: value
    };
  }

  if (model && model.getPackage(value)) {

    // register well known namespace
    this.logNamespace(ns, true, true);
  } else {

    // log custom namespace directly as used
    var actualNs = this.logNamespaceUsed(ns, true);

    this.getNamespaces().logUsed(actualNs);
  }
};


/**
 * Parse namespaces and return a list of left over generic attributes
 *
 * @param  {Object} element
 * @return {Array<Object>}
 */
ElementSerializer.prototype.parseNsAttributes = function(element, attrs) {
  var self = this;

  var genericAttrs = element.$attrs;

  var attributes = [];

  // parse namespace attributes first
  // and log them. push non namespace attributes to a list
  // and process them later
  minDash.forEach(genericAttrs, function(value, name) {

    var nonNsAttr = self.parseNsAttribute(element, name, value);

    if (nonNsAttr) {
      attributes.push(nonNsAttr);
    }
  });

  return attributes;
};

ElementSerializer.prototype.parseGenericAttributes = function(element, attributes) {

  var self = this;

  minDash.forEach(attributes, function(attr) {

    // do not serialize xsi:type attribute
    // it is set manually based on the actual implementation type
    if (attr.name === XSI_TYPE) {
      return;
    }

    try {
      self.addAttribute(self.nsAttributeName(attr.name), attr.value);
    } catch (e) {
      console.warn(
        'missing namespace information for ',
        attr.name, '=', attr.value, 'on', element,
        e);
    }
  });
};

ElementSerializer.prototype.parseContainments = function(properties) {

  var self = this,
      body = this.body,
      element = this.element;

  minDash.forEach(properties, function(p) {
    var value = element.get(p.name),
        isReference = p.isReference,
        isMany = p.isMany;

    if (!isMany) {
      value = [ value ];
    }

    if (p.isBody) {
      body.push(new BodySerializer().build(p, value[0]));
    } else
    if (moddle.isSimpleType(p.type)) {
      minDash.forEach(value, function(v) {
        body.push(new ValueSerializer(self.addTagName(self.nsPropertyTagName(p))).build(p, v));
      });
    } else
    if (isReference) {
      minDash.forEach(value, function(v) {
        body.push(new ReferenceSerializer(self.addTagName(self.nsPropertyTagName(p))).build(v));
      });
    } else {

      // allow serialization via type
      // rather than element name
      var asType = serializeAsType(p),
          asProperty = serializeAsProperty(p);

      minDash.forEach(value, function(v) {
        var serializer;

        if (asType) {
          serializer = new TypeSerializer(self, p);
        } else
        if (asProperty) {
          serializer = new ElementSerializer(self, p);
        } else {
          serializer = new ElementSerializer(self);
        }

        body.push(serializer.build(v));
      });
    }
  });
};

ElementSerializer.prototype.getNamespaces = function(local) {

  var namespaces = this.namespaces,
      parent = this.parent,
      parentNamespaces;

  if (!namespaces) {
    parentNamespaces = parent && parent.getNamespaces();

    if (local || !parentNamespaces) {
      this.namespaces = namespaces = new Namespaces(parentNamespaces);
    } else {
      namespaces = parentNamespaces;
    }
  }

  return namespaces;
};

ElementSerializer.prototype.logNamespace = function(ns, wellknown, local) {
  var namespaces = this.getNamespaces(local);

  var nsUri = ns.uri,
      nsPrefix = ns.prefix;

  var existing = namespaces.byUri(nsUri);

  if (!existing || local) {
    namespaces.add(ns, wellknown);
  }

  namespaces.mapPrefix(nsPrefix, nsUri);

  return ns;
};

ElementSerializer.prototype.logNamespaceUsed = function(ns, local) {
  var element = this.element,
      model = element.$model,
      namespaces = this.getNamespaces(local);

  // ns may be
  //
  //   * prefix only
  //   * prefix:uri
  //   * localName only

  var prefix = ns.prefix,
      uri = ns.uri,
      newPrefix, idx,
      wellknownUri;

  // handle anonymous namespaces (elementForm=unqualified), cf. #23
  if (!prefix && !uri) {
    return { localName: ns.localName };
  }

  wellknownUri = DEFAULT_NS_MAP[prefix] || model && (model.getPackage(prefix) || {}).uri;

  uri = uri || wellknownUri || namespaces.uriByPrefix(prefix);

  if (!uri) {
    throw new Error('no namespace uri given for prefix <' + prefix + '>');
  }

  ns = namespaces.byUri(uri);

  if (!ns) {
    newPrefix = prefix;
    idx = 1;

    // find a prefix that is not mapped yet
    while (namespaces.uriByPrefix(newPrefix)) {
      newPrefix = prefix + '_' + idx++;
    }

    ns = this.logNamespace({ prefix: newPrefix, uri: uri }, wellknownUri === uri);
  }

  if (prefix) {
    namespaces.mapPrefix(prefix, uri);
  }

  return ns;
};

ElementSerializer.prototype.parseAttributes = function(properties) {
  var self = this,
      element = this.element;

  minDash.forEach(properties, function(p) {

    var value = element.get(p.name);

    if (p.isReference) {

      if (!p.isMany) {
        value = value.id;
      }
      else {
        var values = [];
        minDash.forEach(value, function(v) {
          values.push(v.id);
        });

        // IDREFS is a whitespace-separated list of references.
        value = values.join(' ');
      }

    }

    self.addAttribute(self.nsAttributeName(p), value);
  });
};

ElementSerializer.prototype.addTagName = function(nsTagName) {
  var actualNs = this.logNamespaceUsed(nsTagName);

  this.getNamespaces().logUsed(actualNs);

  return nsName(nsTagName);
};

ElementSerializer.prototype.addAttribute = function(name, value) {
  var attrs = this.attrs;

  if (minDash.isString(value)) {
    value = escapeAttr(value);
  }

  attrs.push({ name: name, value: value });
};

ElementSerializer.prototype.serializeAttributes = function(writer) {
  var attrs = this.attrs,
      namespaces = this.namespaces;

  if (namespaces) {
    attrs = getNsAttrs(namespaces).concat(attrs);
  }

  minDash.forEach(attrs, function(a) {
    writer
      .append(' ')
      .append(nsName(a.name)).append('="').append(a.value).append('"');
  });
};

ElementSerializer.prototype.serializeTo = function(writer) {
  var firstBody = this.body[0],
      indent = firstBody && firstBody.constructor !== BodySerializer;

  writer
    .appendIndent()
    .append('<' + this.tagName);

  this.serializeAttributes(writer);

  writer.append(firstBody ? '>' : ' />');

  if (firstBody) {

    if (indent) {
      writer
        .appendNewLine()
        .indent();
    }

    minDash.forEach(this.body, function(b) {
      b.serializeTo(writer);
    });

    if (indent) {
      writer
        .unindent()
        .appendIndent();
    }

    writer.append('</' + this.tagName + '>');
  }

  writer.appendNewLine();
};

/**
 * A serializer for types that handles serialization of data types
 */
function TypeSerializer(parent, propertyDescriptor) {
  ElementSerializer.call(this, parent, propertyDescriptor);
}

inherits(TypeSerializer, ElementSerializer);

TypeSerializer.prototype.parseNsAttributes = function(element) {

  // extracted attributes
  var attributes = ElementSerializer.prototype.parseNsAttributes.call(this, element);

  var descriptor = element.$descriptor;

  // only serialize xsi:type if necessary
  if (descriptor.name === this.propertyDescriptor.type) {
    return attributes;
  }

  var typeNs = this.typeNs = this.nsTagName(descriptor);
  this.getNamespaces().logUsed(this.typeNs);

  // add xsi:type attribute to represent the elements
  // actual type

  var pkg = element.$model.getPackage(typeNs.uri),
      typePrefix = (pkg.xml && pkg.xml.typePrefix) || '';

  this.addAttribute(
    this.nsAttributeName(XSI_TYPE),
    (typeNs.prefix ? typeNs.prefix + ':' : '') + typePrefix + descriptor.ns.localName
  );

  return attributes;
};

TypeSerializer.prototype.isLocalNs = function(ns) {
  return ns.uri === (this.typeNs || this.ns).uri;
};

function SavingWriter() {
  this.value = '';

  this.write = function(str) {
    this.value += str;
  };
}

function FormatingWriter(out, format) {

  var indent = [''];

  this.append = function(str) {
    out.write(str);

    return this;
  };

  this.appendNewLine = function() {
    if (format) {
      out.write('\n');
    }

    return this;
  };

  this.appendIndent = function() {
    if (format) {
      out.write(indent.join('  '));
    }

    return this;
  };

  this.indent = function() {
    indent.push('');
    return this;
  };

  this.unindent = function() {
    indent.pop();
    return this;
  };
}

/**
 * A writer for meta-model backed document trees
 *
 * @param {Object} options output options to pass into the writer
 */
function Writer(options) {

  options = minDash.assign({ format: false, preamble: true }, options || {});

  function toXML(tree, writer) {
    var internalWriter = writer || new SavingWriter();
    var formatingWriter = new FormatingWriter(internalWriter, options.format);

    if (options.preamble) {
      formatingWriter.append(XML_PREAMBLE);
    }

    new ElementSerializer().build(tree).serializeTo(formatingWriter);

    if (!writer) {
      return internalWriter.value;
    }
  }

  return {
    toXML: toXML
  };
}

exports.Reader = Reader;
exports.Writer = Writer;

},{"min-dash":78,"moddle":81,"saxen":84}],81:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var minDash = require('min-dash');

/**
 * Moddle base element.
 */
function Base() { }

Base.prototype.get = function(name) {
  return this.$model.properties.get(this, name);
};

Base.prototype.set = function(name, value) {
  this.$model.properties.set(this, name, value);
};

/**
 * A model element factory.
 *
 * @param {Moddle} model
 * @param {Properties} properties
 */
function Factory(model, properties) {
  this.model = model;
  this.properties = properties;
}


Factory.prototype.createType = function(descriptor) {

  var model = this.model;

  var props = this.properties,
      prototype = Object.create(Base.prototype);

  // initialize default values
  minDash.forEach(descriptor.properties, function(p) {
    if (!p.isMany && p.default !== undefined) {
      prototype[p.name] = p.default;
    }
  });

  props.defineModel(prototype, model);
  props.defineDescriptor(prototype, descriptor);

  var name = descriptor.ns.name;

  /**
   * The new type constructor
   */
  function ModdleElement(attrs) {
    props.define(this, '$type', { value: name, enumerable: true });
    props.define(this, '$attrs', { value: {} });
    props.define(this, '$parent', { writable: true });

    minDash.forEach(attrs, minDash.bind(function(val, key) {
      this.set(key, val);
    }, this));
  }

  ModdleElement.prototype = prototype;

  ModdleElement.hasType = prototype.$instanceOf = this.model.hasType;

  // static links
  props.defineModel(ModdleElement, model);
  props.defineDescriptor(ModdleElement, descriptor);

  return ModdleElement;
};

/**
 * Built-in moddle types
 */
var BUILTINS = {
  String: true,
  Boolean: true,
  Integer: true,
  Real: true,
  Element: true
};

/**
 * Converters for built in types from string representations
 */
var TYPE_CONVERTERS = {
  String: function(s) { return s; },
  Boolean: function(s) { return s === 'true'; },
  Integer: function(s) { return parseInt(s, 10); },
  Real: function(s) { return parseFloat(s); }
};

/**
 * Convert a type to its real representation
 */
function coerceType(type, value) {

  var converter = TYPE_CONVERTERS[type];

  if (converter) {
    return converter(value);
  } else {
    return value;
  }
}

/**
 * Return whether the given type is built-in
 */
function isBuiltIn(type) {
  return !!BUILTINS[type];
}

/**
 * Return whether the given type is simple
 */
function isSimple(type) {
  return !!TYPE_CONVERTERS[type];
}

/**
 * Parses a namespaced attribute name of the form (ns:)localName to an object,
 * given a default prefix to assume in case no explicit namespace is given.
 *
 * @param {String} name
 * @param {String} [defaultPrefix] the default prefix to take, if none is present.
 *
 * @return {Object} the parsed name
 */
function parseName(name, defaultPrefix) {
  var parts = name.split(/:/),
      localName, prefix;

  // no prefix (i.e. only local name)
  if (parts.length === 1) {
    localName = name;
    prefix = defaultPrefix;
  } else
  // prefix + local name
  if (parts.length === 2) {
    localName = parts[1];
    prefix = parts[0];
  } else {
    throw new Error('expected <prefix:localName> or <localName>, got ' + name);
  }

  name = (prefix ? prefix + ':' : '') + localName;

  return {
    name: name,
    prefix: prefix,
    localName: localName
  };
}

/**
 * A utility to build element descriptors.
 */
function DescriptorBuilder(nameNs) {
  this.ns = nameNs;
  this.name = nameNs.name;
  this.allTypes = [];
  this.allTypesByName = {};
  this.properties = [];
  this.propertiesByName = {};
}


DescriptorBuilder.prototype.build = function() {
  return minDash.pick(this, [
    'ns',
    'name',
    'allTypes',
    'allTypesByName',
    'properties',
    'propertiesByName',
    'bodyProperty',
    'idProperty'
  ]);
};

/**
 * Add property at given index.
 *
 * @param {Object} p
 * @param {Number} [idx]
 * @param {Boolean} [validate=true]
 */
DescriptorBuilder.prototype.addProperty = function(p, idx, validate) {

  if (typeof idx === 'boolean') {
    validate = idx;
    idx = undefined;
  }

  this.addNamedProperty(p, validate !== false);

  var properties = this.properties;

  if (idx !== undefined) {
    properties.splice(idx, 0, p);
  } else {
    properties.push(p);
  }
};


DescriptorBuilder.prototype.replaceProperty = function(oldProperty, newProperty, replace) {
  var oldNameNs = oldProperty.ns;

  var props = this.properties,
      propertiesByName = this.propertiesByName,
      rename = oldProperty.name !== newProperty.name;

  if (oldProperty.isId) {
    if (!newProperty.isId) {
      throw new Error(
        'property <' + newProperty.ns.name + '> must be id property ' +
        'to refine <' + oldProperty.ns.name + '>');
    }

    this.setIdProperty(newProperty, false);
  }

  if (oldProperty.isBody) {

    if (!newProperty.isBody) {
      throw new Error(
        'property <' + newProperty.ns.name + '> must be body property ' +
        'to refine <' + oldProperty.ns.name + '>');
    }

    // TODO: Check compatibility
    this.setBodyProperty(newProperty, false);
  }

  // validate existence and get location of old property
  var idx = props.indexOf(oldProperty);
  if (idx === -1) {
    throw new Error('property <' + oldNameNs.name + '> not found in property list');
  }

  // remove old property
  props.splice(idx, 1);

  // replacing the named property is intentional
  //
  //  * validate only if this is a "rename" operation
  //  * add at specific index unless we "replace"
  //
  this.addProperty(newProperty, replace ? undefined : idx, rename);

  // make new property available under old name
  propertiesByName[oldNameNs.name] = propertiesByName[oldNameNs.localName] = newProperty;
};


DescriptorBuilder.prototype.redefineProperty = function(p, targetPropertyName, replace) {

  var nsPrefix = p.ns.prefix;
  var parts = targetPropertyName.split('#');

  var name = parseName(parts[0], nsPrefix);
  var attrName = parseName(parts[1], name.prefix).name;

  var redefinedProperty = this.propertiesByName[attrName];
  if (!redefinedProperty) {
    throw new Error('refined property <' + attrName + '> not found');
  } else {
    this.replaceProperty(redefinedProperty, p, replace);
  }

  delete p.redefines;
};

DescriptorBuilder.prototype.addNamedProperty = function(p, validate) {
  var ns = p.ns,
      propsByName = this.propertiesByName;

  if (validate) {
    this.assertNotDefined(p, ns.name);
    this.assertNotDefined(p, ns.localName);
  }

  propsByName[ns.name] = propsByName[ns.localName] = p;
};

DescriptorBuilder.prototype.removeNamedProperty = function(p) {
  var ns = p.ns,
      propsByName = this.propertiesByName;

  delete propsByName[ns.name];
  delete propsByName[ns.localName];
};

DescriptorBuilder.prototype.setBodyProperty = function(p, validate) {

  if (validate && this.bodyProperty) {
    throw new Error(
      'body property defined multiple times ' +
      '(<' + this.bodyProperty.ns.name + '>, <' + p.ns.name + '>)');
  }

  this.bodyProperty = p;
};

DescriptorBuilder.prototype.setIdProperty = function(p, validate) {

  if (validate && this.idProperty) {
    throw new Error(
      'id property defined multiple times ' +
      '(<' + this.idProperty.ns.name + '>, <' + p.ns.name + '>)');
  }

  this.idProperty = p;
};

DescriptorBuilder.prototype.assertNotDefined = function(p, name) {
  var propertyName = p.name,
      definedProperty = this.propertiesByName[propertyName];

  if (definedProperty) {
    throw new Error(
      'property <' + propertyName + '> already defined; ' +
      'override of <' + definedProperty.definedBy.ns.name + '#' + definedProperty.ns.name + '> by ' +
      '<' + p.definedBy.ns.name + '#' + p.ns.name + '> not allowed without redefines');
  }
};

DescriptorBuilder.prototype.hasProperty = function(name) {
  return this.propertiesByName[name];
};

DescriptorBuilder.prototype.addTrait = function(t, inherited) {

  var typesByName = this.allTypesByName,
      types = this.allTypes;

  var typeName = t.name;

  if (typeName in typesByName) {
    return;
  }

  minDash.forEach(t.properties, minDash.bind(function(p) {

    // clone property to allow extensions
    p = minDash.assign({}, p, {
      name: p.ns.localName,
      inherited: inherited
    });

    Object.defineProperty(p, 'definedBy', {
      value: t
    });

    var replaces = p.replaces,
        redefines = p.redefines;

    // add replace/redefine support
    if (replaces || redefines) {
      this.redefineProperty(p, replaces || redefines, replaces);
    } else {
      if (p.isBody) {
        this.setBodyProperty(p);
      }
      if (p.isId) {
        this.setIdProperty(p);
      }
      this.addProperty(p);
    }
  }, this));

  types.push(t);
  typesByName[typeName] = t;
};

/**
 * A registry of Moddle packages.
 *
 * @param {Array<Package>} packages
 * @param {Properties} properties
 */
function Registry(packages, properties) {
  this.packageMap = {};
  this.typeMap = {};

  this.packages = [];

  this.properties = properties;

  minDash.forEach(packages, minDash.bind(this.registerPackage, this));
}


Registry.prototype.getPackage = function(uriOrPrefix) {
  return this.packageMap[uriOrPrefix];
};

Registry.prototype.getPackages = function() {
  return this.packages;
};


Registry.prototype.registerPackage = function(pkg) {

  // copy package
  pkg = minDash.assign({}, pkg);

  var pkgMap = this.packageMap;

  ensureAvailable(pkgMap, pkg, 'prefix');
  ensureAvailable(pkgMap, pkg, 'uri');

  // register types
  minDash.forEach(pkg.types, minDash.bind(function(descriptor) {
    this.registerType(descriptor, pkg);
  }, this));

  pkgMap[pkg.uri] = pkgMap[pkg.prefix] = pkg;
  this.packages.push(pkg);
};


/**
 * Register a type from a specific package with us
 */
Registry.prototype.registerType = function(type, pkg) {

  type = minDash.assign({}, type, {
    superClass: (type.superClass || []).slice(),
    extends: (type.extends || []).slice(),
    properties: (type.properties || []).slice(),
    meta: minDash.assign((type.meta || {}))
  });

  var ns = parseName(type.name, pkg.prefix),
      name = ns.name,
      propertiesByName = {};

  // parse properties
  minDash.forEach(type.properties, minDash.bind(function(p) {

    // namespace property names
    var propertyNs = parseName(p.name, ns.prefix),
        propertyName = propertyNs.name;

    // namespace property types
    if (!isBuiltIn(p.type)) {
      p.type = parseName(p.type, propertyNs.prefix).name;
    }

    minDash.assign(p, {
      ns: propertyNs,
      name: propertyName
    });

    propertiesByName[propertyName] = p;
  }, this));

  // update ns + name
  minDash.assign(type, {
    ns: ns,
    name: name,
    propertiesByName: propertiesByName
  });

  minDash.forEach(type.extends, minDash.bind(function(extendsName) {
    var extended = this.typeMap[extendsName];

    extended.traits = extended.traits || [];
    extended.traits.push(name);
  }, this));

  // link to package
  this.definePackage(type, pkg);

  // register
  this.typeMap[name] = type;
};


/**
 * Traverse the type hierarchy from bottom to top,
 * calling iterator with (type, inherited) for all elements in
 * the inheritance chain.
 *
 * @param {Object} nsName
 * @param {Function} iterator
 * @param {Boolean} [trait=false]
 */
Registry.prototype.mapTypes = function(nsName, iterator, trait) {

  var type = isBuiltIn(nsName.name) ? { name: nsName.name } : this.typeMap[nsName.name];

  var self = this;

  /**
   * Traverse the selected trait.
   *
   * @param {String} cls
   */
  function traverseTrait(cls) {
    return traverseSuper(cls, true);
  }

  /**
   * Traverse the selected super type or trait
   *
   * @param {String} cls
   * @param {Boolean} [trait=false]
   */
  function traverseSuper(cls, trait) {
    var parentNs = parseName(cls, isBuiltIn(cls) ? '' : nsName.prefix);
    self.mapTypes(parentNs, iterator, trait);
  }

  if (!type) {
    throw new Error('unknown type <' + nsName.name + '>');
  }

  minDash.forEach(type.superClass, trait ? traverseTrait : traverseSuper);

  // call iterator with (type, inherited=!trait)
  iterator(type, !trait);

  minDash.forEach(type.traits, traverseTrait);
};


/**
 * Returns the effective descriptor for a type.
 *
 * @param  {String} type the namespaced name (ns:localName) of the type
 *
 * @return {Descriptor} the resulting effective descriptor
 */
Registry.prototype.getEffectiveDescriptor = function(name) {

  var nsName = parseName(name);

  var builder = new DescriptorBuilder(nsName);

  this.mapTypes(nsName, function(type, inherited) {
    builder.addTrait(type, inherited);
  });

  var descriptor = builder.build();

  // define package link
  this.definePackage(descriptor, descriptor.allTypes[descriptor.allTypes.length - 1].$pkg);

  return descriptor;
};


Registry.prototype.definePackage = function(target, pkg) {
  this.properties.define(target, '$pkg', { value: pkg });
};



///////// helpers ////////////////////////////

function ensureAvailable(packageMap, pkg, identifierKey) {

  var value = pkg[identifierKey];

  if (value in packageMap) {
    throw new Error('package with ' + identifierKey + ' <' + value + '> already defined');
  }
}

/**
 * A utility that gets and sets properties of model elements.
 *
 * @param {Model} model
 */
function Properties(model) {
  this.model = model;
}


/**
 * Sets a named property on the target element.
 * If the value is undefined, the property gets deleted.
 *
 * @param {Object} target
 * @param {String} name
 * @param {Object} value
 */
Properties.prototype.set = function(target, name, value) {

  var property = this.model.getPropertyDescriptor(target, name);

  var propertyName = property && property.name;

  if (isUndefined(value)) {
    // unset the property, if the specified value is undefined;
    // delete from $attrs (for extensions) or the target itself
    if (property) {
      delete target[propertyName];
    } else {
      delete target.$attrs[name];
    }
  } else {
    // set the property, defining well defined properties on the fly
    // or simply updating them in target.$attrs (for extensions)
    if (property) {
      if (propertyName in target) {
        target[propertyName] = value;
      } else {
        defineProperty(target, property, value);
      }
    } else {
      target.$attrs[name] = value;
    }
  }
};

/**
 * Returns the named property of the given element
 *
 * @param  {Object} target
 * @param  {String} name
 *
 * @return {Object}
 */
Properties.prototype.get = function(target, name) {

  var property = this.model.getPropertyDescriptor(target, name);

  if (!property) {
    return target.$attrs[name];
  }

  var propertyName = property.name;

  // check if access to collection property and lazily initialize it
  if (!target[propertyName] && property.isMany) {
    defineProperty(target, property, []);
  }

  return target[propertyName];
};


/**
 * Define a property on the target element
 *
 * @param  {Object} target
 * @param  {String} name
 * @param  {Object} options
 */
Properties.prototype.define = function(target, name, options) {
  Object.defineProperty(target, name, options);
};


/**
 * Define the descriptor for an element
 */
Properties.prototype.defineDescriptor = function(target, descriptor) {
  this.define(target, '$descriptor', { value: descriptor });
};

/**
 * Define the model for an element
 */
Properties.prototype.defineModel = function(target, model) {
  this.define(target, '$model', { value: model });
};


function isUndefined(val) {
  return typeof val === 'undefined';
}

function defineProperty(target, property, value) {
  Object.defineProperty(target, property.name, {
    enumerable: !property.isReference,
    writable: true,
    value: value,
    configurable: true
  });
}

//// Moddle implementation /////////////////////////////////////////////////

/**
 * @class Moddle
 *
 * A model that can be used to create elements of a specific type.
 *
 * @example
 *
 * var Moddle = require('moddle');
 *
 * var pkg = {
 *   name: 'mypackage',
 *   prefix: 'my',
 *   types: [
 *     { name: 'Root' }
 *   ]
 * };
 *
 * var moddle = new Moddle([pkg]);
 *
 * @param {Array<Package>} packages the packages to contain
 */
function Moddle(packages) {

  this.properties = new Properties(this);

  this.factory = new Factory(this, this.properties);
  this.registry = new Registry(packages, this.properties);

  this.typeCache = {};
}


/**
 * Create an instance of the specified type.
 *
 * @method Moddle#create
 *
 * @example
 *
 * var foo = moddle.create('my:Foo');
 * var bar = moddle.create('my:Bar', { id: 'BAR_1' });
 *
 * @param  {String|Object} descriptor the type descriptor or name know to the model
 * @param  {Object} attrs   a number of attributes to initialize the model instance with
 * @return {Object}         model instance
 */
Moddle.prototype.create = function(descriptor, attrs) {
  var Type = this.getType(descriptor);

  if (!Type) {
    throw new Error('unknown type <' + descriptor + '>');
  }

  return new Type(attrs);
};


/**
 * Returns the type representing a given descriptor
 *
 * @method Moddle#getType
 *
 * @example
 *
 * var Foo = moddle.getType('my:Foo');
 * var foo = new Foo({ 'id' : 'FOO_1' });
 *
 * @param  {String|Object} descriptor the type descriptor or name know to the model
 * @return {Object}         the type representing the descriptor
 */
Moddle.prototype.getType = function(descriptor) {

  var cache = this.typeCache;

  var name = minDash.isString(descriptor) ? descriptor : descriptor.ns.name;

  var type = cache[name];

  if (!type) {
    descriptor = this.registry.getEffectiveDescriptor(name);
    type = cache[name] = this.factory.createType(descriptor);
  }

  return type;
};


/**
 * Creates an any-element type to be used within model instances.
 *
 * This can be used to create custom elements that lie outside the meta-model.
 * The created element contains all the meta-data required to serialize it
 * as part of meta-model elements.
 *
 * @method Moddle#createAny
 *
 * @example
 *
 * var foo = moddle.createAny('vendor:Foo', 'http://vendor', {
 *   value: 'bar'
 * });
 *
 * var container = moddle.create('my:Container', 'http://my', {
 *   any: [ foo ]
 * });
 *
 * // go ahead and serialize the stuff
 *
 *
 * @param  {String} name  the name of the element
 * @param  {String} nsUri the namespace uri of the element
 * @param  {Object} [properties] a map of properties to initialize the instance with
 * @return {Object} the any type instance
 */
Moddle.prototype.createAny = function(name, nsUri, properties) {

  var nameNs = parseName(name);

  var element = {
    $type: name,
    $instanceOf: function(type) {
      return type === this.$type;
    }
  };

  var descriptor = {
    name: name,
    isGeneric: true,
    ns: {
      prefix: nameNs.prefix,
      localName: nameNs.localName,
      uri: nsUri
    }
  };

  this.properties.defineDescriptor(element, descriptor);
  this.properties.defineModel(element, this);
  this.properties.define(element, '$parent', { enumerable: false, writable: true });
  this.properties.define(element, '$instanceOf', { enumerable: false, writable: true });

  minDash.forEach(properties, function(a, key) {
    if (minDash.isObject(a) && a.value !== undefined) {
      element[a.name] = a.value;
    } else {
      element[key] = a;
    }
  });

  return element;
};

/**
 * Returns a registered package by uri or prefix
 *
 * @return {Object} the package
 */
Moddle.prototype.getPackage = function(uriOrPrefix) {
  return this.registry.getPackage(uriOrPrefix);
};

/**
 * Returns a snapshot of all known packages
 *
 * @return {Object} the package
 */
Moddle.prototype.getPackages = function() {
  return this.registry.getPackages();
};

/**
 * Returns the descriptor for an element
 */
Moddle.prototype.getElementDescriptor = function(element) {
  return element.$descriptor;
};

/**
 * Returns true if the given descriptor or instance
 * represents the given type.
 *
 * May be applied to this, if element is omitted.
 */
Moddle.prototype.hasType = function(element, type) {
  if (type === undefined) {
    type = element;
    element = this;
  }

  var descriptor = element.$model.getElementDescriptor(element);

  return (type in descriptor.allTypesByName);
};

/**
 * Returns the descriptor of an elements named property
 */
Moddle.prototype.getPropertyDescriptor = function(element, property) {
  return this.getElementDescriptor(element).propertiesByName[property];
};

/**
 * Returns a mapped type's descriptor
 */
Moddle.prototype.getTypeDescriptor = function(type) {
  return this.registry.typeMap[type];
};

exports.Moddle = Moddle;
exports.coerceType = coerceType;
exports.isBuiltInType = isBuiltIn;
exports.isSimpleType = isSimple;
exports.parseNameNS = parseName;

},{"min-dash":78}],82:[function(require,module,exports){
/**
 * Helpers.
 */

var s = 1000;
var m = s * 60;
var h = m * 60;
var d = h * 24;
var w = d * 7;
var y = d * 365.25;

/**
 * Parse or format the given `val`.
 *
 * Options:
 *
 *  - `long` verbose formatting [false]
 *
 * @param {String|Number} val
 * @param {Object} [options]
 * @throws {Error} throw an error if val is not a non-empty string or a number
 * @return {String|Number}
 * @api public
 */

module.exports = function(val, options) {
  options = options || {};
  var type = typeof val;
  if (type === 'string' && val.length > 0) {
    return parse(val);
  } else if (type === 'number' && isFinite(val)) {
    return options.long ? fmtLong(val) : fmtShort(val);
  }
  throw new Error(
    'val is not a non-empty string or a valid number. val=' +
      JSON.stringify(val)
  );
};

/**
 * Parse the given `str` and return milliseconds.
 *
 * @param {String} str
 * @return {Number}
 * @api private
 */

function parse(str) {
  str = String(str);
  if (str.length > 100) {
    return;
  }
  var match = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
    str
  );
  if (!match) {
    return;
  }
  var n = parseFloat(match[1]);
  var type = (match[2] || 'ms').toLowerCase();
  switch (type) {
    case 'years':
    case 'year':
    case 'yrs':
    case 'yr':
    case 'y':
      return n * y;
    case 'weeks':
    case 'week':
    case 'w':
      return n * w;
    case 'days':
    case 'day':
    case 'd':
      return n * d;
    case 'hours':
    case 'hour':
    case 'hrs':
    case 'hr':
    case 'h':
      return n * h;
    case 'minutes':
    case 'minute':
    case 'mins':
    case 'min':
    case 'm':
      return n * m;
    case 'seconds':
    case 'second':
    case 'secs':
    case 'sec':
    case 's':
      return n * s;
    case 'milliseconds':
    case 'millisecond':
    case 'msecs':
    case 'msec':
    case 'ms':
      return n;
    default:
      return undefined;
  }
}

/**
 * Short format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtShort(ms) {
  var msAbs = Math.abs(ms);
  if (msAbs >= d) {
    return Math.round(ms / d) + 'd';
  }
  if (msAbs >= h) {
    return Math.round(ms / h) + 'h';
  }
  if (msAbs >= m) {
    return Math.round(ms / m) + 'm';
  }
  if (msAbs >= s) {
    return Math.round(ms / s) + 's';
  }
  return ms + 'ms';
}

/**
 * Long format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtLong(ms) {
  var msAbs = Math.abs(ms);
  if (msAbs >= d) {
    return plural(ms, msAbs, d, 'day');
  }
  if (msAbs >= h) {
    return plural(ms, msAbs, h, 'hour');
  }
  if (msAbs >= m) {
    return plural(ms, msAbs, m, 'minute');
  }
  if (msAbs >= s) {
    return plural(ms, msAbs, s, 'second');
  }
  return ms + ' ms';
}

/**
 * Pluralization helper.
 */

function plural(ms, msAbs, n, name) {
  var isPlural = msAbs >= n * 1.5;
  return Math.round(ms / n) + ' ' + name + (isPlural ? 's' : '');
}

},{}],83:[function(require,module,exports){
// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };

},{}],84:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var fromCharCode = String.fromCharCode;

var hasOwnProperty = Object.prototype.hasOwnProperty;

var ENTITY_PATTERN = /&#(\d+);|&#x([0-9a-f]+);|&(\w+);/ig;

var ENTITY_MAPPING = {
  'amp': '&',
  'apos': '\'',
  'gt': '>',
  'lt': '<',
  'quot': '"'
};

// map UPPERCASE variants of supported special chars
Object.keys(ENTITY_MAPPING).forEach(function(k) {
  ENTITY_MAPPING[k.toUpperCase()] = ENTITY_MAPPING[k];
});


function replaceEntities(_, d, x, z) {

  // reserved names, i.e. &nbsp;
  if (z) {
    if (hasOwnProperty.call(ENTITY_MAPPING, z)) {
      return ENTITY_MAPPING[z];
    } else {

      // fall back to original value
      return '&' + z + ';';
    }
  }

  // decimal encoded char
  if (d) {
    return fromCharCode(d);
  }

  // hex encoded char
  return fromCharCode(parseInt(x, 16));
}


/**
 * A basic entity decoder that can decode a minimal
 * sub-set of reserved names (&amp;) as well as
 * hex (&#xaaf;) and decimal (&#1231;) encoded characters.
 *
 * @param {string} str
 *
 * @return {string} decoded string
 */
function decodeEntities(s) {
  if (s.length > 3 && s.indexOf('&') !== -1) {
    return s.replace(ENTITY_PATTERN, replaceEntities);
  }

  return s;
}

var XSI_URI = 'http://www.w3.org/2001/XMLSchema-instance';
var XSI_PREFIX = 'xsi';
var XSI_TYPE = 'xsi:type';

var NON_WHITESPACE_OUTSIDE_ROOT_NODE = 'non-whitespace outside of root node';

function error(msg) {
  return new Error(msg);
}

function missingNamespaceForPrefix(prefix) {
  return 'missing namespace for prefix <' + prefix + '>';
}

function getter(getFn) {
  return {
    'get': getFn,
    'enumerable': true
  };
}

function cloneNsMatrix(nsMatrix) {
  var clone = {}, key;
  for (key in nsMatrix) {
    clone[key] = nsMatrix[key];
  }
  return clone;
}

function uriPrefix(prefix) {
  return prefix + '$uri';
}

function buildNsMatrix(nsUriToPrefix) {
  var nsMatrix = {},
      uri,
      prefix;

  for (uri in nsUriToPrefix) {
    prefix = nsUriToPrefix[uri];
    nsMatrix[prefix] = prefix;
    nsMatrix[uriPrefix(prefix)] = uri;
  }

  return nsMatrix;
}

function noopGetContext() {
  return { 'line': 0, 'column': 0 };
}

function throwFunc(err) {
  throw err;
}

/**
 * Creates a new parser with the given options.
 *
 * @constructor
 *
 * @param  {!Object<string, ?>=} options
 */
function Parser(options) {

  if (!this) {
    return new Parser(options);
  }

  var proxy = options && options['proxy'];

  var onText,
      onOpenTag,
      onCloseTag,
      onCDATA,
      onError = throwFunc,
      onWarning,
      onComment,
      onQuestion,
      onAttention;

  var getContext = noopGetContext;

  /**
   * Do we need to parse the current elements attributes for namespaces?
   *
   * @type {boolean}
   */
  var maybeNS = false;

  /**
   * Do we process namespaces at all?
   *
   * @type {boolean}
   */
  var isNamespace = false;

  /**
   * The caught error returned on parse end
   *
   * @type {Error}
   */
  var returnError = null;

  /**
   * Should we stop parsing?
   *
   * @type {boolean}
   */
  var parseStop = false;

  /**
   * A map of { uri: prefix } used by the parser.
   *
   * This map will ensure we can normalize prefixes during processing;
   * for each uri, only one prefix will be exposed to the handlers.
   *
   * @type {!Object<string, string>}}
   */
  var nsUriToPrefix;

  /**
   * Handle parse error.
   *
   * @param  {string|Error} err
   */
  function handleError(err) {
    if (!(err instanceof Error)) {
      err = error(err);
    }

    returnError = err;

    onError(err, getContext);
  }

  /**
   * Handle parse error.
   *
   * @param  {string|Error} err
   */
  function handleWarning(err) {

    if (!onWarning) {
      return;
    }

    if (!(err instanceof Error)) {
      err = error(err);
    }

    onWarning(err, getContext);
  }

  /**
   * Register parse listener.
   *
   * @param  {string}   name
   * @param  {Function} cb
   *
   * @return {Parser}
   */
  this['on'] = function(name, cb) {

    if (typeof cb !== 'function') {
      throw error('required args <name, cb>');
    }

    switch (name) {
    case 'openTag': onOpenTag = cb; break;
    case 'text': onText = cb; break;
    case 'closeTag': onCloseTag = cb; break;
    case 'error': onError = cb; break;
    case 'warn': onWarning = cb; break;
    case 'cdata': onCDATA = cb; break;
    case 'attention': onAttention = cb; break; // <!XXXXX zzzz="eeee">
    case 'question': onQuestion = cb; break; // <? ....  ?>
    case 'comment': onComment = cb; break;
    default:
      throw error('unsupported event: ' + name);
    }

    return this;
  };

  /**
   * Set the namespace to prefix mapping.
   *
   * @example
   *
   * parser.ns({
   *   'http://foo': 'foo',
   *   'http://bar': 'bar'
   * });
   *
   * @param  {!Object<string, string>} nsMap
   *
   * @return {Parser}
   */
  this['ns'] = function(nsMap) {

    if (typeof nsMap === 'undefined') {
      nsMap = {};
    }

    if (typeof nsMap !== 'object') {
      throw error('required args <nsMap={}>');
    }

    var _nsUriToPrefix = {}, k;

    for (k in nsMap) {
      _nsUriToPrefix[k] = nsMap[k];
    }

    // FORCE default mapping for schema instance
    _nsUriToPrefix[XSI_URI] = XSI_PREFIX;

    isNamespace = true;
    nsUriToPrefix = _nsUriToPrefix;

    return this;
  };

  /**
   * Parse xml string.
   *
   * @param  {string} xml
   *
   * @return {Error} returnError, if not thrown
   */
  this['parse'] = function(xml) {
    if (typeof xml !== 'string') {
      throw error('required args <xml=string>');
    }

    returnError = null;

    parse(xml);

    getContext = noopGetContext;
    parseStop = false;

    return returnError;
  };

  /**
   * Stop parsing.
   */
  this['stop'] = function() {
    parseStop = true;
  };

  /**
   * Parse string, invoking configured listeners on element.
   *
   * @param  {string} xml
   */
  function parse(xml) {
    var nsMatrixStack = isNamespace ? [] : null,
        nsMatrix = isNamespace ? buildNsMatrix(nsUriToPrefix) : null,
        _nsMatrix,
        nodeStack = [],
        anonymousNsCount = 0,
        tagStart = false,
        tagEnd = false,
        i = 0, j = 0,
        x, y, q, w, v,
        xmlns,
        elementName,
        _elementName,
        elementProxy
        ;

    var attrsString = '',
        attrsStart = 0,
        cachedAttrs // false = parsed with errors, null = needs parsing
        ;

    /**
     * Parse attributes on demand and returns the parsed attributes.
     *
     * Return semantics: (1) `false` on attribute parse error,
     * (2) object hash on extracted attrs.
     *
     * @return {boolean|Object}
     */
    function getAttrs() {
      if (cachedAttrs !== null) {
        return cachedAttrs;
      }

      var nsUri,
          nsUriPrefix,
          nsName,
          defaultAlias = isNamespace && nsMatrix['xmlns'],
          attrList = isNamespace && maybeNS ? [] : null,
          i = attrsStart,
          s = attrsString,
          l = s.length,
          hasNewMatrix,
          newalias,
          value,
          alias,
          name,
          attrs = {},
          seenAttrs = {},
          skipAttr,
          w,
          j;

      parseAttr:
      for (; i < l; i++) {
        skipAttr = false;
        w = s.charCodeAt(i);

        if (w === 32 || (w < 14 && w > 8)) { // WHITESPACE={ \f\n\r\t\v}
          continue;
        }

        // wait for non whitespace character
        if (w < 65 || w > 122 || (w > 90 && w < 97)) {
          if (w !== 95 && w !== 58) { // char 95"_" 58":"
            handleWarning('illegal first char attribute name');
            skipAttr = true;
          }
        }

        // parse attribute name
        for (j = i + 1; j < l; j++) {
          w = s.charCodeAt(j);

          if (
            w > 96 && w < 123 ||
            w > 64 && w < 91 ||
            w > 47 && w < 59 ||
            w === 46 || // '.'
            w === 45 || // '-'
            w === 95 // '_'
          ) {
            continue;
          }

          // unexpected whitespace
          if (w === 32 || (w < 14 && w > 8)) { // WHITESPACE
            handleWarning('missing attribute value');
            i = j;

            continue parseAttr;
          }

          // expected "="
          if (w === 61) { // "=" == 61
            break;
          }

          handleWarning('illegal attribute name char');
          skipAttr = true;
        }

        name = s.substring(i, j);

        if (name === 'xmlns:xmlns') {
          handleWarning('illegal declaration of xmlns');
          skipAttr = true;
        }

        w = s.charCodeAt(j + 1);

        if (w === 34) { // '"'
          j = s.indexOf('"', i = j + 2);

          if (j === -1) {
            j = s.indexOf('\'', i);

            if (j !== -1) {
              handleWarning('attribute value quote missmatch');
              skipAttr = true;
            }
          }

        } else if (w === 39) { // "'"
          j = s.indexOf('\'', i = j + 2);

          if (j === -1) {
            j = s.indexOf('"', i);

            if (j !== -1) {
              handleWarning('attribute value quote missmatch');
              skipAttr = true;
            }
          }

        } else {
          handleWarning('missing attribute value quotes');
          skipAttr = true;

          // skip to next space
          for (j = j + 1; j < l; j++) {
            w = s.charCodeAt(j + 1);

            if (w === 32 || (w < 14 && w > 8)) { // WHITESPACE
              break;
            }
          }

        }

        if (j === -1) {
          handleWarning('missing closing quotes');

          j = l;
          skipAttr = true;
        }

        if (!skipAttr) {
          value = s.substring(i, j);
        }

        i = j;

        // ensure SPACE follows attribute
        // skip illegal content otherwise
        // example a="b"c
        for (; j + 1 < l; j++) {
          w = s.charCodeAt(j + 1);

          if (w === 32 || (w < 14 && w > 8)) { // WHITESPACE
            break;
          }

          // FIRST ILLEGAL CHAR
          if (i === j) {
            handleWarning('illegal character after attribute end');
            skipAttr = true;
          }
        }

        // advance cursor to next attribute
        i = j + 1;

        if (skipAttr) {
          continue parseAttr;
        }

        // check attribute re-declaration
        if (name in seenAttrs) {
          handleWarning('attribute <' + name + '> already defined');
          continue;
        }

        seenAttrs[name] = true;

        if (!isNamespace) {
          attrs[name] = value;
          continue;
        }

        // try to extract namespace information
        if (maybeNS) {
          newalias = (
            name === 'xmlns'
              ? 'xmlns'
              : (name.charCodeAt(0) === 120 && name.substr(0, 6) === 'xmlns:')
                ? name.substr(6)
                : null
          );

          // handle xmlns(:alias) assignment
          if (newalias !== null) {
            nsUri = decodeEntities(value);
            nsUriPrefix = uriPrefix(newalias);

            alias = nsUriToPrefix[nsUri];

            if (!alias) {

              // no prefix defined or prefix collision
              if (
                (newalias === 'xmlns') ||
                (nsUriPrefix in nsMatrix && nsMatrix[nsUriPrefix] !== nsUri)
              ) {

                // alocate free ns prefix
                do {
                  alias = 'ns' + (anonymousNsCount++);
                } while (typeof nsMatrix[alias] !== 'undefined');
              } else {
                alias = newalias;
              }

              nsUriToPrefix[nsUri] = alias;
            }

            if (nsMatrix[newalias] !== alias) {
              if (!hasNewMatrix) {
                nsMatrix = cloneNsMatrix(nsMatrix);
                hasNewMatrix = true;
              }

              nsMatrix[newalias] = alias;
              if (newalias === 'xmlns') {
                nsMatrix[uriPrefix(alias)] = nsUri;
                defaultAlias = alias;
              }

              nsMatrix[nsUriPrefix] = nsUri;
            }

            // expose xmlns(:asd)="..." in attributes
            attrs[name] = value;
            continue;
          }

          // collect attributes until all namespace
          // declarations are processed
          attrList.push(name, value);
          continue;

        } /** end if (maybeNs) */

        // handle attributes on element without
        // namespace declarations
        w = name.indexOf(':');
        if (w === -1) {
          attrs[name] = value;
          continue;
        }

        // normalize ns attribute name
        if (!(nsName = nsMatrix[name.substring(0, w)])) {
          handleWarning(missingNamespaceForPrefix(name.substring(0, w)));
          continue;
        }

        name = defaultAlias === nsName
          ? name.substr(w + 1)
          : nsName + name.substr(w);

        // end: normalize ns attribute name

        // normalize xsi:type ns attribute value
        if (name === XSI_TYPE) {
          w = value.indexOf(':');

          if (w !== -1) {
            nsName = value.substring(0, w);

            // handle default prefixes, i.e. xs:String gracefully
            nsName = nsMatrix[nsName] || nsName;
            value = nsName + value.substring(w);
          } else {
            value = defaultAlias + ':' + value;
          }
        }

        // end: normalize xsi:type ns attribute value

        attrs[name] = value;
      }


      // handle deferred, possibly namespaced attributes
      if (maybeNS) {

        // normalize captured attributes
        for (i = 0, l = attrList.length; i < l; i++) {

          name = attrList[i++];
          value = attrList[i];

          w = name.indexOf(':');

          if (w !== -1) {

            // normalize ns attribute name
            if (!(nsName = nsMatrix[name.substring(0, w)])) {
              handleWarning(missingNamespaceForPrefix(name.substring(0, w)));
              continue;
            }

            name = defaultAlias === nsName
              ? name.substr(w + 1)
              : nsName + name.substr(w);

            // end: normalize ns attribute name

            // normalize xsi:type ns attribute value
            if (name === XSI_TYPE) {
              w = value.indexOf(':');

              if (w !== -1) {
                nsName = value.substring(0, w);

                // handle default prefixes, i.e. xs:String gracefully
                nsName = nsMatrix[nsName] || nsName;
                value = nsName + value.substring(w);
              } else {
                value = defaultAlias + ':' + value;
              }
            }

            // end: normalize xsi:type ns attribute value
          }

          attrs[name] = value;
        }

        // end: normalize captured attributes
      }

      return cachedAttrs = attrs;
    }

    /**
     * Extract the parse context { line, column, part }
     * from the current parser position.
     *
     * @return {Object} parse context
     */
    function getParseContext() {
      var splitsRe = /(\r\n|\r|\n)/g;

      var line = 0;
      var column = 0;
      var startOfLine = 0;
      var endOfLine = j;
      var match;
      var data;

      while (i >= startOfLine) {

        match = splitsRe.exec(xml);

        if (!match) {
          break;
        }

        // end of line = (break idx + break chars)
        endOfLine = match[0].length + match.index;

        if (endOfLine > i) {
          break;
        }

        // advance to next line
        line += 1;

        startOfLine = endOfLine;
      }

      // EOF errors
      if (i == -1) {
        column = endOfLine;
        data = xml.substring(j);
      } else

      // start errors
      if (j === 0) {
        data = xml.substring(j, i);
      }

      // other errors
      else {
        column = i - startOfLine;
        data = (j == -1 ? xml.substring(i) : xml.substring(i, j + 1));
      }

      return {
        'data': data,
        'line': line,
        'column': column
      };
    }

    getContext = getParseContext;


    if (proxy) {
      elementProxy = Object.create({}, {
        'name': getter(function() {
          return elementName;
        }),
        'originalName': getter(function() {
          return _elementName;
        }),
        'attrs': getter(getAttrs),
        'ns': getter(function() {
          return nsMatrix;
        })
      });
    }

    // actual parse logic
    while (j !== -1) {

      if (xml.charCodeAt(j) === 60) { // "<"
        i = j;
      } else {
        i = xml.indexOf('<', j);
      }

      // parse end
      if (i === -1) {
        if (nodeStack.length) {
          return handleError('unexpected end of file');
        }

        if (j === 0) {
          return handleError('missing start tag');
        }

        if (j < xml.length) {
          if (xml.substring(j).trim()) {
            handleWarning(NON_WHITESPACE_OUTSIDE_ROOT_NODE);
          }
        }

        return;
      }

      // parse text
      if (j !== i) {

        if (nodeStack.length) {
          if (onText) {
            onText(xml.substring(j, i), decodeEntities, getContext);

            if (parseStop) {
              return;
            }
          }
        } else {
          if (xml.substring(j, i).trim()) {
            handleWarning(NON_WHITESPACE_OUTSIDE_ROOT_NODE);

            if (parseStop) {
              return;
            }
          }
        }
      }

      w = xml.charCodeAt(i+1);

      // parse comments + CDATA
      if (w === 33) { // "!"
        q = xml.charCodeAt(i+2);

        // CDATA section
        if (q === 91 && xml.substr(i + 3, 6) === 'CDATA[') { // 91 == "["
          j = xml.indexOf(']]>', i);
          if (j === -1) {
            return handleError('unclosed cdata');
          }

          if (onCDATA) {
            onCDATA(xml.substring(i + 9, j), getContext);
            if (parseStop) {
              return;
            }
          }

          j += 3;
          continue;
        }

        // comment
        if (q === 45 && xml.charCodeAt(i + 3) === 45) { // 45 == "-"
          j = xml.indexOf('-->', i);
          if (j === -1) {
            return handleError('unclosed comment');
          }


          if (onComment) {
            onComment(xml.substring(i + 4, j), decodeEntities, getContext);
            if (parseStop) {
              return;
            }
          }

          j += 3;
          continue;
        }
      }

      // parse question <? ... ?>
      if (w === 63) { // "?"
        j = xml.indexOf('?>', i);
        if (j === -1) {
          return handleError('unclosed question');
        }

        if (onQuestion) {
          onQuestion(xml.substring(i, j + 2), getContext);
          if (parseStop) {
            return;
          }
        }

        j += 2;
        continue;
      }

      // find matching closing tag for attention or standard tags
      // for that we must skip through attribute values
      // (enclosed in single or double quotes)
      for (x = i + 1; ; x++) {
        v = xml.charCodeAt(x);
        if (isNaN(v)) {
          j = -1;
          return handleError('unclosed tag');
        }

        // [10] AttValue ::= '"' ([^<&"] | Reference)* '"' | "'" ([^<&'] | Reference)* "'"
        // skips the quoted string
        // (double quotes) does not appear in a literal enclosed by (double quotes)
        // (single quote) does not appear in a literal enclosed by (single quote)
        if (v === 34) { //  '"'
          q = xml.indexOf('"', x + 1);
          x = q !== -1 ? q : x;
        } else if (v === 39) { // "'"
          q = xml.indexOf("'", x + 1);
          x = q !== -1 ? q : x;
        } else if (v === 62) { // '>'
          j = x;
          break;
        }
      }


      // parse attention <! ...>
      // previously comment and CDATA have already been parsed
      if (w === 33) { // "!"

        if (onAttention) {
          onAttention(xml.substring(i, j + 1), decodeEntities, getContext);
          if (parseStop) {
            return;
          }
        }

        j += 1;
        continue;
      }

      // don't process attributes;
      // there are none
      cachedAttrs = {};

      // if (xml.charCodeAt(i+1) === 47) { // </...
      if (w === 47) { // </...
        tagStart = false;
        tagEnd = true;

        if (!nodeStack.length) {
          return handleError('missing open tag');
        }

        // verify open <-> close tag match
        x = elementName = nodeStack.pop();
        q = i + 2 + x.length;

        if (xml.substring(i + 2, q) !== x) {
          return handleError('closing tag mismatch');
        }

        // verify chars in close tag
        for (; q < j; q++) {
          w = xml.charCodeAt(q);

          if (w === 32 || (w > 8 && w < 14)) { // \f\n\r\t\v space
            continue;
          }

          return handleError('close tag');
        }

      } else {
        if (xml.charCodeAt(j - 1) === 47) { // .../>
          x = elementName = xml.substring(i + 1, j - 1);

          tagStart = true;
          tagEnd = true;

        } else {
          x = elementName = xml.substring(i + 1, j);

          tagStart = true;
          tagEnd = false;
        }

        if (!(w > 96 && w < 123 || w > 64 && w < 91 || w === 95 || w === 58)) { // char 95"_" 58":"
          return handleError('illegal first char nodeName');
        }

        for (q = 1, y = x.length; q < y; q++) {
          w = x.charCodeAt(q);

          if (w > 96 && w < 123 || w > 64 && w < 91 || w > 47 && w < 59 || w === 45 || w === 95 || w == 46) {
            continue;
          }

          if (w === 32 || (w < 14 && w > 8)) { // \f\n\r\t\v space
            elementName = x.substring(0, q);

            // maybe there are attributes
            cachedAttrs = null;
            break;
          }

          return handleError('invalid nodeName');
        }

        if (!tagEnd) {
          nodeStack.push(elementName);
        }
      }

      if (isNamespace) {

        _nsMatrix = nsMatrix;

        if (tagStart) {

          // remember old namespace
          // unless we're self-closing
          if (!tagEnd) {
            nsMatrixStack.push(_nsMatrix);
          }

          if (cachedAttrs === null) {

            // quick check, whether there may be namespace
            // declarations on the node; if that is the case
            // we need to eagerly parse the node attributes
            if ((maybeNS = x.indexOf('xmlns', q) !== -1)) {
              attrsStart = q;
              attrsString = x;

              getAttrs();

              maybeNS = false;
            }
          }
        }

        _elementName = elementName;

        w = elementName.indexOf(':');
        if (w !== -1) {
          xmlns = nsMatrix[elementName.substring(0, w)];

          // prefix given; namespace must exist
          if (!xmlns) {
            return handleError('missing namespace on <' + _elementName + '>');
          }

          elementName = elementName.substr(w + 1);
        } else {
          xmlns = nsMatrix['xmlns'];

          // if no default namespace is defined,
          // we'll import the element as anonymous.
          //
          // it is up to users to correct that to the document defined
          // targetNamespace, or whatever their undersanding of the
          // XML spec mandates.
        }

        // adjust namespace prefixs as configured
        if (xmlns) {
          elementName = xmlns + ':' + elementName;
        }

      }

      if (tagStart) {
        attrsStart = q;
        attrsString = x;

        if (onOpenTag) {
          if (proxy) {
            onOpenTag(elementProxy, decodeEntities, tagEnd, getContext);
          } else {
            onOpenTag(elementName, getAttrs, decodeEntities, tagEnd, getContext);
          }

          if (parseStop) {
            return;
          }
        }

      }

      if (tagEnd) {

        if (onCloseTag) {
          onCloseTag(proxy ? elementProxy : elementName, decodeEntities, tagStart, getContext);

          if (parseStop) {
            return;
          }
        }

        // restore old namespace
        if (isNamespace) {
          if (!tagStart) {
            nsMatrix = nsMatrixStack.pop();
          } else {
            nsMatrix = _nsMatrix;
          }
        }
      }

      j += 1;
    }
  } /** end parse */

}

exports.Parser = Parser;
exports.decode = decodeEntities;

},{}],85:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Broker", {
  enumerable: true,
  get: function () {
    return _Broker.Broker;
  }
});
Object.defineProperty(exports, "Shovel", {
  enumerable: true,
  get: function () {
    return _Shovel.Shovel;
  }
});
exports.default = void 0;
Object.defineProperty(exports, "getRoutingKeyPattern", {
  enumerable: true,
  get: function () {
    return _shared.getRoutingKeyPattern;
  }
});

var _Broker = require("./src/Broker");

var _Shovel = require("./src/Shovel");

var _shared = require("./src/shared");

var _default = _Broker.Broker;
exports.default = _default;
},{"./src/Broker":86,"./src/Shovel":90,"./src/shared":91}],86:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Broker = Broker;

var _Exchange = require("./Exchange");

var _Queue = require("./Queue");

var _Shovel = require("./Shovel");

const exchangesSymbol = Symbol.for('exchanges');
const queuesSymbol = Symbol.for('queues');
const consumersSymbol = Symbol.for('consumers');
const shovelsSymbol = Symbol.for('shovels');
const eventHandlerSymbol = Symbol.for('eventHandler');

function Broker(owner) {
  if (!(this instanceof Broker)) {
    return new Broker(owner);
  }

  this.owner = owner;
  this.events = new _Exchange.EventExchange('broker__events');
  const exchanges = this[exchangesSymbol] = [];
  const queues = this[queuesSymbol] = [];
  const consumers = this[consumersSymbol] = [];
  const shovels = this[shovelsSymbol] = [];
  this[eventHandlerSymbol] = new EventHandler(this, {
    exchanges,
    queues,
    consumers,
    shovels
  });
}

Object.defineProperty(Broker.prototype, 'exchangeCount', {
  enumerable: true,

  get() {
    return this[exchangesSymbol].length;
  }

});
Object.defineProperty(Broker.prototype, 'queueCount', {
  enumerable: true,

  get() {
    return this[queuesSymbol].length;
  }

});
Object.defineProperty(Broker.prototype, 'consumerCount', {
  enumerable: true,

  get() {
    return this[consumersSymbol].length;
  }

});

Broker.prototype.subscribe = function subscribe(exchangeName, pattern, queueName, onMessage, options = {
  durable: true
}) {
  if (!exchangeName || !pattern || typeof onMessage !== 'function') throw new Error('exchange name, pattern, and message callback are required');
  if (options && options.consumerTag) this.validateConsumerTag(options.consumerTag);
  const exchange = this.assertExchange(exchangeName);
  const queue = this.assertQueue(queueName, options);
  exchange.bind(queue, pattern, options);
  return queue.assertConsumer(onMessage, options, this.owner);
};

Broker.prototype.subscribeTmp = function subscribeTmp(exchangeName, pattern, onMessage, options) {
  return this.subscribe(exchangeName, pattern, null, onMessage, { ...options,
    durable: false
  });
};

Broker.prototype.subscribeOnce = function subscribeOnce(exchangeName, pattern, onMessage, options = {}) {
  if (typeof onMessage !== 'function') throw new Error('message callback is required');
  if (options && options.consumerTag) this.validateConsumerTag(options.consumerTag);
  const exchange = this.assertExchange(exchangeName);
  const onceOptions = {
    autoDelete: true,
    durable: false,
    priority: options.priority || 0
  };
  const onceQueue = this.createQueue(null, onceOptions);
  exchange.bind(onceQueue, pattern, onceOptions);
  return this.consume(onceQueue.name, wrappedOnMessage, {
    noAck: true,
    consumerTag: options.consumerTag
  });

  function wrappedOnMessage(...args) {
    onceQueue.delete();
    onMessage(...args);
  }
};

Broker.prototype.unsubscribe = function unsubscribe(queueName, onMessage) {
  const queue = this.getQueue(queueName);
  if (!queue) return;
  queue.dismiss(onMessage);
};

Broker.prototype.assertExchange = function assertExchange(exchangeName, type, options) {
  let exchange = this.getExchangeByName(exchangeName);

  if (exchange) {
    if (type && exchange.type !== type) throw new Error('Type doesn\'t match');
    return exchange;
  }

  exchange = new _Exchange.Exchange(exchangeName, type || 'topic', options);
  this[eventHandlerSymbol].listen(exchange.events);
  this[exchangesSymbol].push(exchange);
  return exchange;
};

Broker.prototype.getExchangeByName = function getExchangeByName(exchangeName) {
  return this[exchangesSymbol].find(exchange => exchange.name === exchangeName);
};

Broker.prototype.bindQueue = function bindQueue(queueName, exchangeName, pattern, bindOptions) {
  const exchange = this.getExchange(exchangeName);
  const queue = this.getQueue(queueName);
  exchange.bind(queue, pattern, bindOptions);
};

Broker.prototype.unbindQueue = function unbindQueue(queueName, exchangeName, pattern) {
  const exchange = this.getExchange(exchangeName);
  if (!exchange) return;
  const queue = this.getQueue(queueName);
  if (!queue) return;
  exchange.unbind(queue, pattern);
};

Broker.prototype.consume = function consume(queueName, onMessage, options) {
  const queue = this.getQueue(queueName);
  if (!queue) throw new Error(`Queue with name <${queueName}> was not found`);
  if (options) this.validateConsumerTag(options.consumerTag);
  return queue.consume(onMessage, options, this.owner);
};

Broker.prototype.cancel = function cancel(consumerTag) {
  const consumer = this.getConsumer(consumerTag);
  if (!consumer) return false;
  consumer.cancel(false);
  return true;
};

Broker.prototype.getConsumers = function getConsumers() {
  return this[consumersSymbol].map(consumer => {
    return {
      queue: consumer.queue.name,
      consumerTag: consumer.options.consumerTag,
      options: { ...consumer.options
      }
    };
  });
};

Broker.prototype.getConsumer = function getConsumer(consumerTag) {
  return this[consumersSymbol].find(c => c.consumerTag === consumerTag);
};

Broker.prototype.getExchange = function getExchange(exchangeName) {
  return this[exchangesSymbol].find(({
    name
  }) => name === exchangeName);
};

Broker.prototype.deleteExchange = function deleteExchange(exchangeName, {
  ifUnused
} = {}) {
  const exchanges = this[exchangesSymbol];
  const idx = exchanges.findIndex(exchange => exchange.name === exchangeName);
  if (idx === -1) return false;
  const exchange = exchanges[idx];
  if (ifUnused && exchange.bindingCount) return false;
  exchanges.splice(idx, 1);
  exchange.close();
  return true;
};

Broker.prototype.stop = function stop() {
  for (const exchange of this[exchangesSymbol]) exchange.stop();

  for (const queue of this[queuesSymbol]) queue.stop();
};

Broker.prototype.close = function close() {
  for (const shovel of this[shovelsSymbol]) shovel.close();

  for (const exchange of this[exchangesSymbol]) exchange.close();

  for (const queue of this[queuesSymbol]) queue.close();
};

Broker.prototype.reset = function reset() {
  this.stop();
  this.close();
  this[exchangesSymbol].splice(0);
  this[queuesSymbol].splice(0);
  this[consumersSymbol].splice(0);
  this[shovelsSymbol].splice(0);
};

Broker.prototype.getState = function getState(onlyWithContent) {
  const exchanges = this.getExchangeState(onlyWithContent);
  const queues = this.getQueuesState(onlyWithContent);
  if (onlyWithContent && !exchanges && !queues) return;
  return {
    exchanges,
    queues
  };
};

Broker.prototype.recover = function recover(state) {
  const self = this;
  const boundGetQueue = self.getQueue.bind(self);

  if (state) {
    if (state.queues) for (const qState of state.queues) recoverQueue(qState);
    if (state.exchanges) for (const eState of state.exchanges) recoverExchange(eState);
  } else {
    for (const queue of self[queuesSymbol]) {
      if (queue.stopped) queue.recover();
    }

    for (const exchange of self[exchangesSymbol]) {
      if (exchange.stopped) exchange.recover(null, boundGetQueue);
    }
  }

  return self;

  function recoverQueue(qState) {
    const queue = self.assertQueue(qState.name, qState.options);
    queue.recover(qState);
  }

  function recoverExchange(eState) {
    const exchange = self.assertExchange(eState.name, eState.type, eState.options);
    exchange.recover(eState, boundGetQueue);
  }
};

Broker.prototype.bindExchange = function bindExchange(source, destination, pattern = '#', args = {}) {
  const name = `e2e-${source}2${destination}-${pattern}`;
  const {
    priority
  } = args;
  const shovel = this.createShovel(name, {
    broker: this,
    exchange: source,
    pattern,
    priority,
    consumerTag: `smq.ctag-${name}`
  }, {
    broker: this,
    exchange: destination
  }, { ...args
  });
  const {
    consumerTag,
    source: shovelSource
  } = shovel;
  return {
    name,
    source,
    destination,
    queue: shovelSource.queue,
    consumerTag,

    on(...onargs) {
      return shovel.on(...onargs);
    },

    close() {
      return shovel.close();
    }

  };
};

Broker.prototype.unbindExchange = function unbindExchange(source, destination, pattern = '#') {
  const name = `e2e-${source}2${destination}-${pattern}`;
  return this.closeShovel(name);
};

Broker.prototype.publish = function publish(exchangeName, routingKey, content, options) {
  const exchange = this.getExchangeByName(exchangeName);
  if (!exchange) return;
  return exchange.publish(routingKey, content, options);
};

Broker.prototype.purgeQueue = function purgeQueue(queueName) {
  const queue = this.getQueue(queueName);
  if (!queue) return;
  return queue.purge();
};

Broker.prototype.sendToQueue = function sendToQueue(queueName, content, options = {}) {
  const queue = this.getQueue(queueName);
  if (!queue) throw new Error(`Queue named ${queueName} doesn't exists`);
  return queue.queueMessage(null, content, options);
};

Broker.prototype.getQueuesState = function getQueuesState(onlyWithContent) {
  return this[queuesSymbol].reduce((result, queue) => {
    if (!queue.options.durable) return result;
    if (onlyWithContent && !queue.messageCount) return result;
    if (!result) result = [];
    result.push(queue.getState());
    return result;
  }, undefined);
};

Broker.prototype.getExchangeState = function getExchangeState(onlyWithContent) {
  return this[exchangesSymbol].reduce((result, exchange) => {
    if (!exchange.options.durable) return result;
    if (onlyWithContent && !exchange.undeliveredCount) return result;
    if (!result) result = [];
    result.push(exchange.getState());
    return result;
  }, undefined);
};

Broker.prototype.createQueue = function createQueue(queueName, options) {
  const self = this;
  if (self.getQueue(queueName)) throw new Error(`Queue named ${queueName} already exists`);
  const queueEmitter = (0, _Exchange.EventExchange)(queueName + '__events');
  this[eventHandlerSymbol].listen(queueEmitter);
  const queue = new _Queue.Queue(queueName, options, queueEmitter);
  self[queuesSymbol].push(queue);
  return queue;
};

Broker.prototype.getQueue = function getQueue(queueName) {
  if (!queueName) return;
  const queues = this[queuesSymbol];
  const idx = queues.findIndex(queue => queue.name === queueName);
  if (idx > -1) return queues[idx];
};

Broker.prototype.assertQueue = function assertQueue(queueName, options = {}) {
  if (!queueName) return this.createQueue(null, options);
  const queue = this.getQueue(queueName);
  options = {
    durable: true,
    ...options
  };
  if (!queue) return this.createQueue(queueName, options);
  if (queue.options.durable !== options.durable) throw new Error('Durable doesn\'t match');
  return queue;
};

Broker.prototype.deleteQueue = function deleteQueue(queueName, options) {
  if (!queueName) return false;
  const queue = this.getQueue(queueName);
  if (!queue) return false;
  return queue.delete(options);
};

Broker.prototype.get = function getMessageFromQueue(queueName, {
  noAck
} = {}) {
  const queue = this.getQueue(queueName);
  if (!queue) return;
  return queue.get({
    noAck
  });
};

Broker.prototype.ack = function ack(message, allUpTo) {
  message.ack(allUpTo);
};

Broker.prototype.ackAll = function ackAll() {
  for (const queue of this[queuesSymbol]) queue.ackAll();
};

Broker.prototype.nack = function nack(message, allUpTo, requeue) {
  message.nack(allUpTo, requeue);
};

Broker.prototype.nackAll = function nackAll(requeue) {
  for (const queue of this[queuesSymbol]) queue.nackAll(requeue);
};

Broker.prototype.reject = function reject(message, requeue) {
  message.reject(requeue);
};

Broker.prototype.validateConsumerTag = function validateConsumerTag(consumerTag) {
  if (!consumerTag) return true;

  if (this.getConsumer(consumerTag)) {
    throw new Error(`Consumer tag must be unique, ${consumerTag} is occupied`);
  }

  return true;
};

Broker.prototype.createShovel = function createShovel(name, source, destination, options) {
  const shovels = this[shovelsSymbol];
  if (this.getShovel(name)) throw new Error(`Shovel name must be unique, ${name} is occupied`);
  const shovel = new _Shovel.Shovel(name, { ...source,
    broker: this
  }, destination, options);
  this[eventHandlerSymbol].listen(shovel.events);
  shovels.push(shovel);
  return shovel;
};

Broker.prototype.closeShovel = function closeShovel(name) {
  const shovel = this.getShovel(name);

  if (shovel) {
    shovel.close();
    return true;
  }

  return false;
};

Broker.prototype.getShovel = function getShovel(name) {
  return this[shovelsSymbol].find(s => s.name === name);
};

Broker.prototype.on = function on(eventName, callback, options) {
  return this.events.on(eventName, getEventCallback(), { ...options,
    origin: callback
  });

  function getEventCallback() {
    return function eventCallback(name, msg) {
      callback({
        name,
        ...msg.content
      });
    };
  }
};

Broker.prototype.off = function off(eventName, callbackOrObject) {
  const {
    consumerTag
  } = callbackOrObject;

  for (const binding of this.events.bindings) {
    if (binding.pattern === eventName) {
      if (consumerTag) {
        binding.queue.cancel(consumerTag);
        continue;
      }

      for (const consumer of binding.queue.consumers) {
        if (consumer.options && consumer.options.origin === callbackOrObject) {
          consumer.cancel();
        }
      }
    }
  }
};

Broker.prototype.prefetch = function prefetch() {};

function EventHandler(broker, lists) {
  this.broker = broker;
  this.lists = lists;
  this.handler = this.handler.bind(this);
}

EventHandler.prototype.listen = function listen(emitter) {
  emitter.on('#', this.handler);
};

EventHandler.prototype.handler = function eventHandler(eventName, msg) {
  switch (eventName) {
    case 'exchange.delete':
      {
        const idx = this.lists.exchanges.indexOf(msg.content);
        if (idx === -1) return;
        this.lists.exchanges.splice(idx, 1);
        break;
      }

    case 'exchange.return':
      {
        this.broker.events.publish('return', msg.content);
        break;
      }

    case 'exchange.message.undelivered':
      {
        this.broker.events.publish('message.undelivered', msg.content);
        break;
      }

    case 'queue.delete':
      {
        const idx = this.lists.queues.indexOf(msg.content);
        if (idx === -1) return;
        this.lists.queues.splice(idx, 1);
        break;
      }

    case 'queue.dead-letter':
      {
        const exchange = this.broker.getExchange(msg.content.deadLetterExchange);
        if (!exchange) return;
        exchange.publish(msg.content.message.fields.routingKey, msg.content.message.content, msg.content.message.properties);
        break;
      }

    case 'queue.consume':
      {
        this.lists.consumers.push(msg.content);
        break;
      }

    case 'queue.consumer.cancel':
      {
        const idx = this.lists.consumers.indexOf(msg.content);
        if (idx !== -1) this.lists.consumers.splice(idx, 1);
        break;
      }

    case 'queue.message.consumed.ack':
    case 'queue.message.consumed.nack':
      {
        const {
          operation,
          message
        } = msg.content;
        this.broker.events.publish('message.' + operation, message);
        break;
      }

    case 'shovel.close':
      {
        const idx = this.lists.shovels.indexOf(msg.content);
        if (idx > -1) this.lists.shovels.splice(idx, 1);
        break;
      }
  }
};
},{"./Exchange":87,"./Queue":89,"./Shovel":90}],87:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EventExchange = EventExchange;
exports.Exchange = Exchange;

var _Message = require("./Message");

var _Queue = require("./Queue");

var _shared = require("./shared");

const typeSymbol = Symbol.for('type');
const stoppedSymbol = Symbol.for('stopped');
const bindingsSymbol = Symbol.for('bindings');
const deliveryQueueSymbol = Symbol.for('deliveryQueue');
const deliveryConsumerSymbol = Symbol.for('deliveryConsumer');
const onTopicMessageSymbol = Symbol.for('onTopicMessage');
const onDirectMessageSymbol = Symbol.for('onDirectMessage');
const emitReturnSymbol = Symbol.for('emitReturn');

function Exchange(name, type = 'topic', options) {
  if (!name) throw new Error('Exchange name is required');
  if (['topic', 'direct'].indexOf(type) === -1) throw Error('Exchange type must be one of topic or direct');
  const eventExchange = EventExchange(name + '__events');
  return new ExchangeBase(name, type, options, eventExchange);
}

function EventExchange(name) {
  if (!name) name = `smq.ename-${(0, _shared.generateId)()}`;
  return new ExchangeBase(name, 'topic', {
    durable: false,
    autoDelete: true
  });
}

function ExchangeBase(name, type, options, eventExchange) {
  this.name = name;
  this[typeSymbol] = type;
  this[bindingsSymbol] = [];
  this[stoppedSymbol] = false;
  this.options = {
    durable: true,
    autoDelete: true,
    ...options
  };
  this.events = eventExchange;
  const deliveryQueue = this[deliveryQueueSymbol] = new _Queue.Queue('delivery-q');
  const onMessage = (type === 'topic' ? this[onTopicMessageSymbol] : this[onDirectMessageSymbol]).bind(this);
  this[deliveryConsumerSymbol] = deliveryQueue.consume(onMessage);
}

Object.defineProperty(ExchangeBase.prototype, 'bindingCount', {
  get() {
    return this[bindingsSymbol].length;
  }

});
Object.defineProperty(ExchangeBase.prototype, 'bindings', {
  get() {
    return this[bindingsSymbol].slice();
  }

});
Object.defineProperty(ExchangeBase.prototype, 'type', {
  get() {
    return this[typeSymbol];
  }

});
Object.defineProperty(ExchangeBase.prototype, 'stopped', {
  get() {
    return this[stoppedSymbol];
  }

});
Object.defineProperty(ExchangeBase.prototype, 'undeliveredCount', {
  get() {
    return this[deliveryQueueSymbol].messageCount;
  }

});

ExchangeBase.prototype.publish = function publish(routingKey, content, properties) {
  if (this[stoppedSymbol]) return;
  if (!this.bindingCount) return this[emitReturnSymbol](routingKey, content, properties);
  return this[deliveryQueueSymbol].queueMessage({
    routingKey
  }, {
    content,
    properties
  });
};

ExchangeBase.prototype[onTopicMessageSymbol] = function topic(routingKey, message) {
  const publishedMsg = message.content;
  const bindings = this[bindingsSymbol];
  message.ack();
  const deliverTo = bindings.filter(binding => binding.testPattern(routingKey));

  if (!deliverTo.length) {
    this[emitReturnSymbol](routingKey, publishedMsg.content, publishedMsg.properties);
    return 0;
  }

  deliverTo.forEach(binding => this.publishToQueue(binding.queue, routingKey, publishedMsg.content, publishedMsg.properties));
};

ExchangeBase.prototype[onDirectMessageSymbol] = function direct(routingKey, message) {
  const publishedMsg = message.content;
  const bindings = this[bindingsSymbol];
  const deliverTo = bindings.filter(binding => binding.testPattern(routingKey));
  const first = deliverTo[0];

  if (!first) {
    message.ack();
    this[emitReturnSymbol](routingKey, publishedMsg.content, publishedMsg.properties);
    return 0;
  }

  if (deliverTo.length > 1) {
    const idx = bindings.indexOf(first);
    bindings.splice(idx, 1);
    bindings.push(first);
  }

  message.ack();
  this.publishToQueue(first.queue, routingKey, publishedMsg.content, publishedMsg.properties);
};

ExchangeBase.prototype.publishToQueue = function publishToQueue(queue, routingKey, content, properties) {
  queue.queueMessage({
    routingKey,
    exchange: this.name
  }, content, properties);
};

ExchangeBase.prototype[emitReturnSymbol] = function emitReturn(routingKey, content, properties) {
  if (!this.events || !properties) return;

  if (properties.confirm) {
    this.emit('message.undelivered', new _Message.Message({
      routingKey,
      exchange: this.name
    }, content, properties));
  }

  if (properties.mandatory) {
    this.emit('return', new _Message.Message({
      routingKey,
      exchange: this.name
    }, content, properties));
  }
};

ExchangeBase.prototype.bind = function bind(queue, pattern, bindOptions) {
  const bindings = this[bindingsSymbol];
  const bound = bindings.find(bq => bq.queue === queue && bq.pattern === pattern);
  if (bound) return bound;
  const binding = new Binding(this, queue, pattern, bindOptions);
  bindings.push(binding);
  bindings.sort(_shared.sortByPriority);
  this.emit('bind', binding);
  return binding;
};

ExchangeBase.prototype.unbind = function unbind(queue, pattern) {
  const bindings = this[bindingsSymbol];
  const idx = bindings.findIndex(bq => bq.queue === queue && bq.pattern === pattern);
  if (idx === -1) return;
  const [binding] = bindings.splice(idx, 1);
  binding.close();
  this.emit('unbind', binding);
  if (!bindings.length && this.options.autoDelete) this.emit('delete', this);
};

ExchangeBase.prototype.unbindQueueByName = function unbindQueueByName(queueName) {
  for (const binding of this[bindingsSymbol]) {
    if (binding.queue.name !== queueName) continue;
    this.unbind(binding.queue, binding.pattern);
  }
};

ExchangeBase.prototype.close = function close() {
  for (const binding of this[bindingsSymbol].slice()) {
    binding.close();
  }

  const deliveryQueue = this[deliveryQueueSymbol];
  deliveryQueue.unbindConsumer(this[deliveryConsumerSymbol]);
  deliveryQueue.close();
};

ExchangeBase.prototype.getState = function getState() {
  const self = this;
  const deliveryQueue = self[deliveryQueueSymbol];
  return {
    name: self.name,
    type: self[typeSymbol],
    options: { ...self.options
    },
    ...(deliveryQueue.messageCount ? {
      deliveryQueue: deliveryQueue.getState()
    } : undefined),
    bindings: getBoundState()
  };

  function getBoundState() {
    return self[bindingsSymbol].reduce((result, binding) => {
      if (!binding.queue.options.durable) return result;
      if (!result) result = [];
      result.push(binding.getState());
      return result;
    }, undefined);
  }
};

ExchangeBase.prototype.stop = function stop() {
  this[stoppedSymbol] = true;
};

ExchangeBase.prototype.recover = function recover(state, getQueue) {
  const deliveryQueue = this[deliveryQueueSymbol];
  this[stoppedSymbol] = false;

  if (state) {
    this.name = state.name;

    if (state.bindings) {
      state.bindings.forEach(bindingState => {
        const queue = getQueue(bindingState.queueName);
        if (!queue) return;
        this.bind(queue, bindingState.pattern, bindingState.options);
      });
    }

    deliveryQueue.recover(state.deliveryQueue);
    const onMessage = (this[typeSymbol] === 'topic' ? this[onTopicMessageSymbol] : this[onDirectMessageSymbol]).bind(this);
    this[deliveryConsumerSymbol] = deliveryQueue.consume(onMessage);
  }

  return this;
};

ExchangeBase.prototype.getBinding = function getBinding(queueName, pattern) {
  return this[bindingsSymbol].find(binding => binding.queue.name === queueName && binding.pattern === pattern);
};

ExchangeBase.prototype.emit = function emit(eventName, content) {
  if (this.events) return this.events.publish(`exchange.${eventName}`, content);
  return this.publish(eventName, content);
};

ExchangeBase.prototype.on = function on(pattern, handler, consumeOptions = {}) {
  if (this.events) return this.events.on(`exchange.${pattern}`, handler, consumeOptions);
  const eventQueue = new _Queue.Queue(null, {
    durable: false,
    autoDelete: true
  });
  const binding = this.bind(eventQueue, pattern);
  eventQueue.events = {
    emit(eventName) {
      if (eventName === 'queue.delete') binding.close();
    }

  };
  return eventQueue.consume(handler, { ...consumeOptions,
    noAck: true
  }, this);
};

ExchangeBase.prototype.off = function off(pattern, handler) {
  if (this.events) return this.events.off(`exchange.${pattern}`, handler);
  const {
    consumerTag
  } = handler;

  for (const binding of this[bindingsSymbol]) {
    if (binding.pattern === pattern) {
      if (consumerTag) binding.queue.cancel(consumerTag);else binding.queue.dismiss(handler);
    }
  }
};

function Binding(exchange, queue, pattern, bindOptions) {
  this.id = `${queue.name}/${pattern}`;
  this.options = {
    priority: 0,
    ...bindOptions
  };
  this.pattern = pattern;
  this.exchange = exchange;
  this.queue = queue;
  this.compiledPattern = (0, _shared.getRoutingKeyPattern)(pattern);
  queue.on('delete', () => {
    this.close();
  });
}

Binding.prototype.testPattern = function testPattern(routingKey) {
  return this.compiledPattern.test(routingKey);
};

Binding.prototype.close = function closeBinding() {
  this.exchange.unbind(this.queue, this.pattern);
};

Binding.prototype.getState = function getBindingState() {
  return {
    id: this.id,
    options: { ...this.options
    },
    queueName: this.queue.name,
    pattern: this.pattern
  };
};
},{"./Message":88,"./Queue":89,"./shared":91}],88:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Message = Message;

var _shared = require("./shared");

const pendingSymbol = Symbol.for('pending');
const onConsumedSymbol = Symbol.for('onConsumed');
const publicMethods = ['ack', 'nack', 'reject'];

function Message(fields, content, properties, onConsumed) {
  this[onConsumedSymbol] = [null, onConsumed];
  this[pendingSymbol] = false;
  const mproperties = { ...properties,
    messageId: properties && properties.messageId || `smq.mid-${(0, _shared.generateId)()}`
  };
  const timestamp = mproperties.timestamp = mproperties.timestamp || Date.now();

  if (mproperties.expiration) {
    mproperties.ttl = timestamp + parseInt(mproperties.expiration);
  }

  this.fields = { ...fields,
    consumerTag: undefined
  };
  this.content = content;
  this.properties = mproperties;

  for (let i = 0; i < publicMethods.length; i++) {
    const fn = publicMethods[i];
    this[fn] = Message.prototype[fn].bind(this);
  }
}

Object.defineProperty(Message.prototype, 'pending', {
  get() {
    return this[pendingSymbol];
  }

});

Message.prototype.consume = function ({
  consumerTag
} = {}, consumedCb) {
  this[pendingSymbol] = true;
  this.fields.consumerTag = consumerTag;
  this[onConsumedSymbol][0] = consumedCb;
};

Message.prototype.ack = function (allUpTo) {
  if (!this[pendingSymbol]) return;
  this[onConsumedSymbol].forEach(fn => {
    if (fn) fn(this, 'ack', allUpTo);
  });
  this[pendingSymbol] = false;
};

Message.prototype.nack = function (allUpTo, requeue = true) {
  if (!this[pendingSymbol]) return;
  this[onConsumedSymbol].forEach(fn => {
    if (fn) fn(this, 'nack', allUpTo, requeue);
  });
  this[pendingSymbol] = false;
};

Message.prototype.reject = function (requeue = true) {
  this.nack(false, requeue);
};
},{"./shared":91}],89:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Consumer = Consumer;
exports.Queue = Queue;

var _shared = require("./shared");

var _Message = require("./Message");

const consumersSymbol = Symbol.for('consumers');
const consumingSymbol = Symbol.for('consuming');
const exclusiveSymbol = Symbol.for('exclusive');
const internalQueueSymbol = Symbol.for('internalQueue');
const isReadySymbol = Symbol.for('isReady');
const onConsumedSymbol = Symbol.for('onConsumedSymbol');
const onMessageConsumedSymbol = Symbol.for('onMessageConsumed');
const pendingMessageCountSymbol = Symbol.for('pendingMessageCount');
const stoppedSymbol = Symbol.for('stopped');

function Queue(name, options, eventEmitter) {
  if (!name) name = `smq.qname-${(0, _shared.generateId)()}`;
  this.name = name;
  this.options = {
    autoDelete: true,
    ...options
  };
  this.messages = [];
  this.events = eventEmitter;
  this[consumersSymbol] = [];
  this[stoppedSymbol] = false;
  this[pendingMessageCountSymbol] = 0;
  this[exclusiveSymbol] = false;
  this[onConsumedSymbol] = this[onMessageConsumedSymbol].bind(this);
}

Object.defineProperty(Queue.prototype, 'consumerCount', {
  enumerable: true,

  get() {
    return this[consumersSymbol].length;
  }

});
Object.defineProperty(Queue.prototype, 'consumers', {
  get() {
    return this[consumersSymbol].slice();
  }

});
Object.defineProperty(Queue.prototype, 'exclusive', {
  get() {
    return this[exclusiveSymbol];
  }

});
Object.defineProperty(Queue.prototype, 'messageCount', {
  enumerable: true,

  get() {
    return this.messages.length;
  }

});
Object.defineProperty(Queue.prototype, 'stopped', {
  enumerable: true,

  get() {
    return this[stoppedSymbol];
  }

});

Queue.prototype.queueMessage = function queueMessage(fields, content, properties) {
  if (this[stoppedSymbol]) return;
  const messageProperties = { ...properties
  };
  const messageTtl = this.options.messageTtl;
  if (messageTtl) messageProperties.expiration = messageProperties.expiration || messageTtl;
  const message = new _Message.Message(fields, content, messageProperties, this[onConsumedSymbol]);
  const capacity = this.getCapacity();
  this.messages.push(message);
  this[pendingMessageCountSymbol]++;
  let discarded;

  switch (capacity) {
    case 0:
      discarded = this.evictFirst(message);
      break;

    case 1:
      this.emit('saturated', this);
      break;
  }

  this.emit('message', message);
  return discarded ? 0 : this.consumeNext();
};

Queue.prototype.evictFirst = function evictFirst(compareMessage) {
  const evict = this.get();
  if (!evict) return;
  evict.nack(false, false);
  return evict === compareMessage;
};

Queue.prototype.consumeNext = function consumeNext() {
  if (this[stoppedSymbol]) return;
  if (!this[pendingMessageCountSymbol]) return;
  const consumers = this[consumersSymbol];
  let consumed = 0;
  if (!consumers.length) return consumed;

  for (const consumer of consumers) {
    if (!consumer.ready) continue;
    const msgs = this.consumeMessages(consumer.capacity, consumer.options);
    if (!msgs.length) return consumed;
    consumer.push(msgs);
    consumed += msgs.length;
  }

  return consumed;
};

Queue.prototype.consume = function consume(onMessage, consumeOptions = {}, owner) {
  const consumers = this[consumersSymbol];
  const noOfConsumers = consumers.length;

  if (noOfConsumers) {
    if (this[exclusiveSymbol]) throw new Error(`Queue ${this.name} is exclusively consumed by ${consumers[0].consumerTag}`);
    if (consumeOptions.exclusive) throw new Error(`Queue ${this.name} already has consumers and cannot be exclusively consumed`);
  }

  const consumer = new Consumer(this, onMessage, consumeOptions, owner, new ConsumerEmitter(this));
  consumers.push(consumer);
  consumers.sort(_shared.sortByPriority);

  if (consumer.options.exclusive) {
    this[exclusiveSymbol] = true;
  }

  this.emit('consume', consumer);
  const pendingMessages = this.consumeMessages(consumer.capacity, consumer.options);
  if (pendingMessages.length) consumer.push(pendingMessages);
  return consumer;
};

Queue.prototype.assertConsumer = function assertConsumer(onMessage, consumeOptions = {}, owner) {
  const consumers = this[consumersSymbol];
  if (!consumers.length) return this.consume(onMessage, consumeOptions, owner);

  for (const consumer of consumers) {
    if (consumer.onMessage !== onMessage) continue;

    if (consumeOptions.consumerTag && consumeOptions.consumerTag !== consumer.consumerTag) {
      continue;
    } else if ('exclusive' in consumeOptions && consumeOptions.exclusive !== consumer.options.exclusive) {
      continue;
    }

    return consumer;
  }

  return this.consume(onMessage, consumeOptions, owner);
};

Queue.prototype.get = function getMessage({
  noAck,
  consumerTag
} = {}) {
  const message = this.consumeMessages(1, {
    noAck,
    consumerTag
  })[0];
  if (!message) return;
  if (noAck) this.dequeue(message);
  return message;
};

Queue.prototype.consumeMessages = function consumeMessages(n, consumeOptions) {
  if (this[stoppedSymbol] || !this[pendingMessageCountSymbol] || !n) return [];
  if (!this.messages.length) return [];
  const now = Date.now();
  const msgs = [];
  const evict = [];

  for (const message of this.messages) {
    if (message.pending) continue;

    if (message.properties.expiration && message.properties.ttl < now) {
      evict.push(message);
      continue;
    }

    message.consume(consumeOptions);
    this[pendingMessageCountSymbol]--;
    msgs.push(message);
    if (! --n) break;
  }

  if (evict.length) {
    for (const expired of evict) this.nack(expired, false, false);
  }

  return msgs;
};

Queue.prototype.ack = function ack(message, allUpTo) {
  this[onMessageConsumedSymbol](message, 'ack', allUpTo);
};

Queue.prototype.nack = function nack(message, allUpTo, requeue = true) {
  this[onMessageConsumedSymbol](message, 'nack', allUpTo, requeue);
};

Queue.prototype.reject = function reject(message, requeue = true) {
  this[onMessageConsumedSymbol](message, 'nack', false, requeue);
};

Queue.prototype[onMessageConsumedSymbol] = function onMessageConsumed(message, operation, allUpTo, requeue) {
  if (this[stoppedSymbol]) return;
  const pending = allUpTo && this.getPendingMessages(message);
  const {
    properties
  } = message;
  const {
    deadLetterExchange,
    deadLetterRoutingKey
  } = this.options;
  let deadLetter = false;

  switch (operation) {
    case 'ack':
      {
        if (!this.dequeue(message)) return;
        break;
      }

    case 'nack':
      if (requeue) {
        this.requeueMessage(message);
        break;
      }

      if (!this.dequeue(message)) return;
      deadLetter = !!deadLetterExchange;
      break;
  }

  let capacity;
  if (!this.messages.length) this.emit('depleted', this);else if ((capacity = this.getCapacity()) === 1) this.emit('ready', capacity);
  if (!pending || !pending.length) this.consumeNext();

  if (!requeue && properties.confirm) {
    this.emit('message.consumed.' + operation, {
      operation,
      message: { ...message
      }
    });
  }

  if (deadLetter) {
    const deadMessage = new _Message.Message(message.fields, message.content, { ...properties,
      expiration: undefined
    });
    if (deadLetterRoutingKey) deadMessage.fields.routingKey = deadLetterRoutingKey;
    this.emit('dead-letter', {
      deadLetterExchange,
      message: deadMessage
    });
  }

  if (pending && pending.length) {
    for (const msg of pending) {
      msg[operation](false, requeue);
    }
  }
};

Queue.prototype.ackAll = function ackAll() {
  for (const msg of this.getPendingMessages()) {
    msg.ack(false);
  }
};

Queue.prototype.nackAll = function nackAll(requeue = true) {
  for (const msg of this.getPendingMessages()) {
    msg.nack(false, requeue);
  }
};

Queue.prototype.getPendingMessages = function getPendingMessages(fromAndNotIncluding) {
  if (!fromAndNotIncluding) return this.messages.filter(msg => msg.pending);
  const msgIdx = this.messages.indexOf(fromAndNotIncluding);
  if (msgIdx === -1) return [];
  return this.messages.slice(0, msgIdx).filter(msg => msg.pending);
};

Queue.prototype.requeueMessage = function requeueMessage(message) {
  const msgIdx = this.messages.indexOf(message);
  if (msgIdx === -1) return;
  this[pendingMessageCountSymbol]++;
  this.messages.splice(msgIdx, 1, new _Message.Message({ ...message.fields,
    redelivered: true
  }, message.content, message.properties, this[onConsumedSymbol]));
};

Queue.prototype.peek = function peek(ignoreDelivered) {
  const message = this.messages[0];
  if (!message) return;
  if (!ignoreDelivered) return message;
  if (!message.pending) return message;

  for (let idx = 1; idx < this.messages.length; idx++) {
    if (!this.messages[idx].pending) {
      return this.messages[idx];
    }
  }
};

Queue.prototype.cancel = function cancel(consumerTag) {
  const consumers = this[consumersSymbol];
  const idx = consumers.findIndex(c => c.consumerTag === consumerTag);
  if (idx === -1) return;
  return this.unbindConsumer(consumers[idx]);
};

Queue.prototype.dismiss = function dismiss(onMessage) {
  const consumers = this[consumersSymbol];
  const consumer = consumers.find(c => c.onMessage === onMessage);
  if (!consumer) return;
  this.unbindConsumer(consumer);
};

Queue.prototype.unbindConsumer = function unbindConsumer(consumer) {
  const consumers = this[consumersSymbol];
  const idx = consumers.indexOf(consumer);
  if (idx === -1) return;
  consumers.splice(idx, 1);

  if (this[exclusiveSymbol]) {
    this[exclusiveSymbol] = false;
  }

  consumer.stop();
  if (this.options.autoDelete && !consumers.length) return this.delete();
  consumer.nackAll(true);
};

Queue.prototype.emit = function emit(eventName, content) {
  const eventEmitter = this.events;
  if (!eventEmitter) return;
  eventEmitter.emit(`queue.${eventName}`, content);
};

Queue.prototype.on = function on(eventName, handler) {
  const eventEmitter = this.events;
  if (!eventEmitter) return;
  return eventEmitter.on(`queue.${eventName}`, handler);
};

Queue.prototype.off = function off(eventName, handler) {
  const eventEmitter = this.events;
  if (!eventEmitter) return;
  return eventEmitter.off(`queue.${eventName}`, handler);
};

Queue.prototype.purge = function purge() {
  const toDelete = this.messages.filter(({
    pending
  }) => !pending);
  this[pendingMessageCountSymbol] = 0;

  for (const msg of toDelete) {
    this.dequeue(msg);
  }

  if (!this.messages.length) this.emit('depleted', this);
  return toDelete.length;
};

Queue.prototype.dequeue = function dequeue(message) {
  const msgIdx = this.messages.indexOf(message);
  if (msgIdx === -1) return false;
  this.messages.splice(msgIdx, 1);
  return true;
};

Queue.prototype.getState = function getState() {
  const messages = this.cloneMessages();
  return {
    name: this.name,
    options: { ...this.options
    },
    ...(messages.length ? {
      messages
    } : undefined)
  };
};

Queue.prototype.cloneMessages = function cloneMessages() {
  if (!this.messages.length) return [];

  try {
    const messages = JSON.stringify(this.messages);
    return JSON.parse(messages);
  } catch (err) {
    err.code = 'EQUEUE_STATE';
    err.queue = this.name;
    throw err;
  }
};

Queue.prototype.recover = function recover(state) {
  this[stoppedSymbol] = false;
  const consumers = this[consumersSymbol];

  if (!state) {
    consumers.slice().forEach(c => c.recover());
    return this.consumeNext();
  }

  this.name = state.name;
  this.messages.splice(0);
  let continueConsume;

  if (consumers.length) {
    consumers.forEach(c => c.nackAll(false));
    continueConsume = true;
  }

  if (!state.messages) return this;
  state.messages.forEach(({
    fields,
    content,
    properties
  }) => {
    if (properties.persistent === false) return;
    const msg = new _Message.Message({ ...fields,
      redelivered: true
    }, content, properties, this[onConsumedSymbol]);
    this.messages.push(msg);
  });
  this[pendingMessageCountSymbol] = this.messages.length;
  consumers.forEach(c => c.recover());

  if (continueConsume) {
    this.consumeNext();
  }

  return this;
};

Queue.prototype.delete = function deleteQueue({
  ifUnused,
  ifEmpty
} = {}) {
  const consumers = this[consumersSymbol];
  if (ifUnused && consumers.length) return;
  if (ifEmpty && this.messages.length) return;
  const messageCount = this.messages.length;
  this.stop();

  for (const consumer of consumers.splice(0)) {
    consumer.cancel();
  }

  this.messages.splice(0);
  this.emit('delete', this);
  return {
    messageCount
  };
};

Queue.prototype.close = function close() {
  for (const consumer of this[consumersSymbol].splice(0)) {
    consumer.cancel();
  }

  this[exclusiveSymbol] = false;
};

Queue.prototype.stop = function stop() {
  this[stoppedSymbol] = true;

  for (const consumer of this[consumersSymbol].slice()) {
    consumer.stop();
  }
};

Queue.prototype.getCapacity = function getCapacity() {
  if ('maxLength' in this.options) {
    return this.options.maxLength - this.messages.length;
  }

  return Infinity;
};

function Consumer(queue, onMessage, options, owner, eventEmitter) {
  if (typeof onMessage !== 'function') throw new Error('message callback is required and must be a function');
  this.options = {
    prefetch: 1,
    priority: 0,
    noAck: false,
    ...options
  };
  if (!this.options.consumerTag) this.options.consumerTag = 'smq.ctag-' + (0, _shared.generateId)();
  this.queue = queue;
  this.onMessage = onMessage;
  this.owner = owner;
  this.events = eventEmitter;
  this[isReadySymbol] = true;
  this[stoppedSymbol] = false;
  this[consumingSymbol] = false;
  this[internalQueueSymbol] = new Queue(this.options.consumerTag + '-q', {
    autoDelete: false,
    maxLength: this.options.prefetch
  }, new ConsumerQueueEvents(this));
}

Object.defineProperty(Consumer.prototype, 'consumerTag', {
  enumerable: true,

  get() {
    return this.options.consumerTag;
  }

});
Object.defineProperty(Consumer.prototype, 'ready', {
  enumerable: true,

  get() {
    return this[isReadySymbol] && !this[stoppedSymbol];
  }

});
Object.defineProperty(Consumer.prototype, 'stopped', {
  get() {
    return this[stoppedSymbol];
  }

});
Object.defineProperty(Consumer.prototype, 'capacity', {
  get() {
    return this[internalQueueSymbol].getCapacity();
  }

});
Object.defineProperty(Consumer.prototype, 'messageCount', {
  get() {
    return this[internalQueueSymbol].messageCount;
  }

});
Object.defineProperty(Consumer.prototype, 'queueName', {
  get() {
    return this.queue.name;
  }

});

Consumer.prototype.push = function push(messages) {
  const internalQueue = this[internalQueueSymbol];

  for (const message of messages) {
    internalQueue.queueMessage(message.fields, message, message.properties);
  }

  if (!this[consumingSymbol]) {
    this.consume();
  }
};

Consumer.prototype.consume = function consume() {
  if (this[stoppedSymbol]) return;
  this[consumingSymbol] = true;
  const msg = this[internalQueueSymbol].get();

  if (!msg) {
    this[consumingSymbol] = false;
    return;
  }

  msg.consume(this.options);
  const message = msg.content;
  message.consume(this.options, onConsumed);
  if (this.options.noAck) msg.content.ack();
  this.onMessage(msg.fields.routingKey, msg.content, this.owner);
  this[consumingSymbol] = false;
  return this.consume();

  function onConsumed() {
    msg.ack(false);
  }
};

Consumer.prototype.nackAll = function nackAll(requeue) {
  for (const msg of this[internalQueueSymbol].messages.slice()) {
    msg.content.nack(false, requeue);
  }
};

Consumer.prototype.ackAll = function ackAll() {
  for (const msg of this[internalQueueSymbol].messages.slice()) {
    msg.content.ack(false);
  }
};

Consumer.prototype.cancel = function cancel(requeue = true) {
  this.emit('cancel', this);
  this.nackAll(requeue);
};

Consumer.prototype.prefetch = function prefetch(value) {
  this.options.prefetch = this[internalQueueSymbol].options.maxLength = value;
};

Consumer.prototype.emit = function emit(eventName, content) {
  const routingKey = `consumer.${eventName}`;
  this.events.emit(routingKey, content);
};

Consumer.prototype.on = function on(eventName, handler) {
  const pattern = `consumer.${eventName}`;
  return this.events.on(pattern, handler);
};

Consumer.prototype.recover = function recover() {
  this[stoppedSymbol] = false;
};

Consumer.prototype.stop = function stop() {
  this[stoppedSymbol] = true;
};

function ConsumerEmitter(queue) {
  this.queue = queue;
}

ConsumerEmitter.prototype.on = function on(...args) {
  return this.queue.on(...args);
};

ConsumerEmitter.prototype.emit = function emit(eventName, content) {
  if (eventName === 'consumer.cancel') {
    this.queue.unbindConsumer(content);
  }

  this.queue.emit(eventName, content);
};

function ConsumerQueueEvents(consumer) {
  this.consumer = consumer;
}

ConsumerQueueEvents.prototype.emit = function queueHandler(eventName) {
  switch (eventName) {
    case 'queue.saturated':
      {
        this.consumer[isReadySymbol] = false;
        break;
      }

    case 'queue.depleted':
    case 'queue.ready':
      this.consumer[isReadySymbol] = true;
      break;
  }
};
},{"./Message":88,"./shared":91}],90:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Shovel = Shovel;

var _Exchange = require("./Exchange");

const brokerInternalSymbol = Symbol.for('brokerInternal');
const cloneMessageSymbol = Symbol.for('cloneMessage');
const closedSymbol = Symbol.for('closed');
const consumerTagSymbol = Symbol.for('consumerTag');
const destinationExchangeSymbol = Symbol.for('destinationExchange');
const eventHandlersSymbol = Symbol.for('eventHandlers');
const messageHandlerSymbol = Symbol.for('messageHandler');
const onShovelMessageSymbol = Symbol.for('onShovelMessage');
const sourceBrokerSymbol = Symbol.for('sourceBroker');
const sourceExchangeSymbol = Symbol.for('sourceExchange');

function Shovel(name, source, destination, options = {}) {
  const {
    broker: sourceBroker,
    exchange: sourceExchangeName,
    pattern,
    queue,
    priority
  } = source;
  const {
    broker: destinationBroker,
    exchange: destinationExchangeName
  } = destination;
  const sourceExchange = sourceBroker.getExchange(sourceExchangeName);

  if (!sourceExchange) {
    throw new Error(`shovel ${name} source exchange <${sourceExchangeName}> not found`);
  }

  const destinationExchange = destinationBroker.getExchange(destinationExchangeName);

  if (!destinationExchange) {
    throw new Error(`shovel ${name} destination exchange <${destinationExchangeName}> not found`);
  }

  if (!(this instanceof Shovel)) {
    return new Shovel(name, source, destination, options);
  }

  this[brokerInternalSymbol] = sourceBroker === destinationBroker;
  const consumerTag = source.consumerTag || `smq.shoveltag-${name}`;
  const routingKeyPattern = pattern || '#';
  this.name = name;
  this.source = { ...source,
    pattern: routingKeyPattern
  };
  this.destination = { ...destination
  };
  this.events = new _Exchange.EventExchange('shovel__events');
  this[consumerTagSymbol] = consumerTag;
  this[closedSymbol] = false;
  this[sourceBrokerSymbol] = sourceBroker;
  this[sourceExchangeSymbol] = sourceExchange;
  this[destinationExchangeSymbol] = destinationExchange;
  this[cloneMessageSymbol] = options.cloneMessage;
  const boundClose = this.close.bind(this);
  const eventHandlers = [sourceExchange.on('delete', boundClose), destinationExchange.on('delete', boundClose)];
  this[eventHandlersSymbol] = eventHandlers;
  let consumer;
  const shovelHandler = this[onShovelMessageSymbol].bind(this);

  if (queue) {
    consumer = sourceBroker.subscribe(sourceExchangeName, routingKeyPattern, queue, shovelHandler, {
      consumerTag,
      priority
    });
  } else {
    consumer = sourceBroker.subscribeTmp(sourceExchangeName, routingKeyPattern, shovelHandler, {
      consumerTag,
      priority
    });
    this.source.queue = consumer.queue.name;
  }

  eventHandlers.push(consumer.on('cancel', boundClose));
}

Object.defineProperty(Shovel.prototype, 'closed', {
  enumerable: true,

  get() {
    return this[closedSymbol];
  }

});
Object.defineProperty(Shovel.prototype, 'consumerTag', {
  enumerable: true,

  get() {
    return this[consumerTagSymbol];
  }

});

Shovel.prototype.emit = function emit(eventName, content) {
  this.events.emit(`shovel.${eventName}`, content);
};

Shovel.prototype.on = function on(eventName, handler) {
  return this.events.on(`shovel.${eventName}`, handler);
};

Shovel.prototype.off = function off(eventName, handler) {
  return this.events.off(`shovel.${eventName}`, handler);
};

Shovel.prototype.close = function closeShovel() {
  if (this[closedSymbol]) return;
  this[closedSymbol] = true;
  this[eventHandlersSymbol].splice(0).forEach(e => e.cancel());
  const events = this.events;
  this.emit('close', this);
  events.close();
  this[sourceBrokerSymbol].cancel(this[consumerTagSymbol]);
};

Shovel.prototype[messageHandlerSymbol] = function messageHandler(message) {
  const cloneMessage = this[cloneMessageSymbol];
  if (!cloneMessage) return message;
  const {
    fields,
    content,
    properties
  } = message;
  const {
    content: newContent,
    properties: newProperties
  } = cloneMessage({
    fields: { ...fields
    },
    content,
    properties: { ...properties
    }
  });
  return {
    fields,
    content: newContent,
    properties: { ...properties,
      ...newProperties
    }
  };
};

Shovel.prototype[onShovelMessageSymbol] = function onShovelMessage(routingKey, message) {
  const {
    content,
    properties
  } = this[messageHandlerSymbol](message);
  const props = { ...properties,
    ...this.destination.publishProperties,
    'source-exchange': this[sourceExchangeSymbol].name
  };
  if (!this[brokerInternalSymbol]) props['shovel-name'] = this.name;
  this[destinationExchangeSymbol].publish(this.destination.exchangeKey || routingKey, content, props);
  message.ack();
};
},{"./Exchange":87}],91:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generateId = generateId;
exports.getRoutingKeyPattern = getRoutingKeyPattern;
exports.sortByPriority = sortByPriority;
const allDots = /\./g;
const allAstx = /\*/g;
const allHashs = /#/g;

function generateId() {
  return Math.random().toString(16).substring(2, 12);
}

function getRoutingKeyPattern(pattern) {
  const len = pattern.length;
  const hashIdx = pattern.indexOf('#');
  const astxIdx = pattern.indexOf('*');

  if (hashIdx === -1) {
    if (astxIdx === -1) {
      return directMatch();
    }
  } else if (hashIdx === len - 1 && astxIdx === -1) {
    return endMatch();
  }

  const rpattern = pattern.replace(allDots, '\\.').replace(allAstx, '[^.]+?').replace(allHashs, '.*?');
  return new RegExp(`^${rpattern}$`);

  function directMatch() {
    return {
      test
    };

    function test(routingKey) {
      return routingKey === pattern;
    }
  }

  function endMatch() {
    const testString = pattern.replace('#', '');
    return {
      test
    };

    function test(routingKey) {
      return routingKey.indexOf(testString) === 0;
    }
  }
}

function sortByPriority(a, b) {
  return (b.options.priority || 0) - (a.options.priority || 0);
}
},{}],92:[function(require,module,exports){
var indexOf = function (xs, item) {
    if (xs.indexOf) return xs.indexOf(item);
    else for (var i = 0; i < xs.length; i++) {
        if (xs[i] === item) return i;
    }
    return -1;
};
var Object_keys = function (obj) {
    if (Object.keys) return Object.keys(obj)
    else {
        var res = [];
        for (var key in obj) res.push(key)
        return res;
    }
};

var forEach = function (xs, fn) {
    if (xs.forEach) return xs.forEach(fn)
    else for (var i = 0; i < xs.length; i++) {
        fn(xs[i], i, xs);
    }
};

var defineProp = (function() {
    try {
        Object.defineProperty({}, '_', {});
        return function(obj, name, value) {
            Object.defineProperty(obj, name, {
                writable: true,
                enumerable: false,
                configurable: true,
                value: value
            })
        };
    } catch(e) {
        return function(obj, name, value) {
            obj[name] = value;
        };
    }
}());

var globals = ['Array', 'Boolean', 'Date', 'Error', 'EvalError', 'Function',
'Infinity', 'JSON', 'Math', 'NaN', 'Number', 'Object', 'RangeError',
'ReferenceError', 'RegExp', 'String', 'SyntaxError', 'TypeError', 'URIError',
'decodeURI', 'decodeURIComponent', 'encodeURI', 'encodeURIComponent', 'escape',
'eval', 'isFinite', 'isNaN', 'parseFloat', 'parseInt', 'undefined', 'unescape'];

function Context() {}
Context.prototype = {};

var Script = exports.Script = function NodeScript (code) {
    if (!(this instanceof Script)) return new Script(code);
    this.code = code;
};

Script.prototype.runInContext = function (context) {
    if (!(context instanceof Context)) {
        throw new TypeError("needs a 'context' argument.");
    }
    
    var iframe = document.createElement('iframe');
    if (!iframe.style) iframe.style = {};
    iframe.style.display = 'none';
    
    document.body.appendChild(iframe);
    
    var win = iframe.contentWindow;
    var wEval = win.eval, wExecScript = win.execScript;

    if (!wEval && wExecScript) {
        // win.eval() magically appears when this is called in IE:
        wExecScript.call(win, 'null');
        wEval = win.eval;
    }
    
    forEach(Object_keys(context), function (key) {
        win[key] = context[key];
    });
    forEach(globals, function (key) {
        if (context[key]) {
            win[key] = context[key];
        }
    });
    
    var winKeys = Object_keys(win);

    var res = wEval.call(win, this.code);
    
    forEach(Object_keys(win), function (key) {
        // Avoid copying circular objects like `top` and `window` by only
        // updating existing context properties or new properties in the `win`
        // that was only introduced after the eval.
        if (key in context || indexOf(winKeys, key) === -1) {
            context[key] = win[key];
        }
    });

    forEach(globals, function (key) {
        if (!(key in context)) {
            defineProp(context, key, win[key]);
        }
    });
    
    document.body.removeChild(iframe);
    
    return res;
};

Script.prototype.runInThisContext = function () {
    return eval(this.code); // maybe...
};

Script.prototype.runInNewContext = function (context) {
    var ctx = Script.createContext(context);
    var res = this.runInContext(ctx);

    if (context) {
        forEach(Object_keys(ctx), function (key) {
            context[key] = ctx[key];
        });
    }

    return res;
};

forEach(Object_keys(Script.prototype), function (name) {
    exports[name] = Script[name] = function (code) {
        var s = Script(code);
        return s[name].apply(s, [].slice.call(arguments, 1));
    };
});

exports.isContext = function (context) {
    return context instanceof Context;
};

exports.createScript = function (code) {
    return exports.Script(code);
};

exports.createContext = Script.createContext = function (context) {
    var copy = new Context();
    if(typeof context === 'object') {
        forEach(Object_keys(context), function (key) {
            copy[key] = context[key];
        });
    }
    return copy;
};

},{}],93:[function(require,module,exports){
window.console = {
    log: function (str) {
        var node = document.createElement("div");
        node.appendChild(document.createTextNode(str));
        document.getElementById("myLog").appendChild(node);
    }
}

var stop = 0;

//selecting all required elements
const dropArea = document.querySelector(".drag-area"),
    dragText = dropArea.querySelector("header"),
    button = dropArea.querySelector("button"),
    input = dropArea.querySelector("input");
let file; //this is a global variable and we'll use it inside multiple functions

const buttonsArea = document.querySelector(".bottons-area"),
    startbutton = buttonsArea.querySelector(".start"),
    stopbutton = buttonsArea.querySelector(".stop");

stopbutton.onclick = () => {
    stop = 1;
}

startbutton.onclick = () => {
    if (document.getElementById("myFile").textContent != "No file") {
        stop = 0;
        exec();
    } else {
        alert("No BPMN file loaded!");
    }
}

button.onclick = () => {
    input.click(); //if user click on the button then the input also clicked
}

input.addEventListener("change", function () {
    //getting user select file and [0] this means if user select multiple files then we'll select only the first one
    file = this.files[0];
    document.getElementById("myFile").textContent = file.name;
    dropArea.classList.add("active");
});

//If user Drag File Over DropArea
dropArea.addEventListener("dragover", (event) => {
    event.preventDefault(); //preventing from default behaviour
    dropArea.classList.add("active");
    dragText.textContent = "Release to Upload File";
});

//If user leave dragged File from DropArea
dropArea.addEventListener("dragleave", () => {
    dropArea.classList.remove("active");
    dragText.textContent = "Drag & Drop to Upload File";
});

//If user drop File on DropArea
dropArea.addEventListener("drop", (event) => {
    event.preventDefault(); //preventing from default behaviour
    //getting user select file and [0] this means if user select multiple files then we'll select only the first one
    file = event.dataTransfer.files[0];
    document.getElementById("myFile").textContent = file.name;
    dragText.textContent = "Drag & Drop to Upload File";
});

function exec() {
    const extension = file.name.split('.').pop();
    let validExtensions = ["bpmn"]; //adding some valid extensions in array

    if (validExtensions.includes(extension)) {
        console.log("### [ " + JSON.stringify(file.name) + " ] ###");
        const filereader = new FileReader();
        filereader.onload = function (event) {
            executeXmlFile(event.target.result);
        };
        const t = filereader.readAsText(file, "UTF-8");
    } else {
        alert("This is not a BPMN File!");
        dropArea.classList.remove("active");
        dragText.textContent = "Drag & Drop to Upload File";
    }
}

function executeXmlFile(source) {
    'use strict';

    const { Engine } = require('bpmn-engine');
    const { EventEmitter } = require('events');
    const listener = new EventEmitter();

    var tstart = 0;
    var tfinish = 0;

    const engine = Engine({
        name: 'BPMN engine',
        variables: {
            input: 51,
        },
        source
    });

    //Freccie
    listener.on('flow.take', (flow) => {
        console.log(`flow.take <${flow.id}> was taken`);
        if (stop == 1) engine.stop();
    });

    //Inizio attivita'
    listener.on('activity.start', (activity) => {
        if (tstart == 0) tstart = activity.messageProperties.timestamp;
        console.log(`activity.start <${activity.id}> was taken`);
    });

    //Fine attivita'
    listener.on('activity.end', (activity) => {
        tfinish = activity.messageProperties.timestamp;
        console.log(`activity.end <${activity.id}> was released`);
    });

    //User task
    listener.on('activity.wait', (wait) => {
        console.log(`wait <${wait.id}> was taken`);
    });

    listener.on('activity.throw', (throwev) => {
        console.log(`throw <${throwev.id}> was taken`);
    });

    listener.on('activity.error', (errorev) => {
        console.log(`error <${errorev.id}> was taken`);
    });

    engine.on('end', (execution) => {
        console.log("### Execution completed in " + JSON.stringify(tfinish - tstart) + "ms ###");
    });

    engine.on('stop', (execution) => {
        console.log("### Execution stopped in " + JSON.stringify(tfinish - tstart) + "ms ###");
    });

    engine.on('error', (execution) => {
        console.log("### Execution stopped for an error, " + JSON.stringify(tfinish - tstart) + "ms ###");
    });

    engine.execute({
        listener
    }, (err) => {
        if (err) throw err;
    });
}
},{"bpmn-engine":66,"events":75}]},{},[93]);
