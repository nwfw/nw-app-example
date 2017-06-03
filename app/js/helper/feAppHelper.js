// var _ = require('lodash');

var _appWrapper;
var appUtil;
// var appState;

_appWrapper = window.getAppWrapper();
appUtil = _appWrapper.getAppUtil();
// appState = appUtil.getAppState();

var BaseClass = appUtil.getBaseClass();

class FeAppHelper extends BaseClass {

    constructor(){
        super();

        // _appWrapper = this.getAppWrapper();
        // appUtil = this.getAppUtil();
        // appState = this.getAppState();

        this.forceDebug = appUtil.getConfig('forceDebug.feAppHelper');
        this.forceUserMessages = appUtil.getConfig('forceUserMessages.feAppHelper');

        this.connections = {};

        this.statuses = {};

        this.connecting = {};

    }

    async initialize () {
        await super.initialize();
        return true;
    }

    getComponentByRef (ref, parentComponent) {
        let targetComponent = false;
        let currentComponent;

        if (parentComponent){
            currentComponent = parentComponent;
        } else {
            currentComponent = window.getFeApp();
        }

        console.trace(currentComponent);
        debugger;

        if (currentComponent && currentComponent.$refs){
            if (currentComponent.$refs[ref]){
                targetComponent = currentComponent.$refs[ref];
            } else {
                for (let refName in currentComponent.$refs){
                    targetComponent = this.getComponentByRef(ref, currentComponent.$refs[refName]);
                    if (targetComponent){
                        break;
                    }
                }
            }
        }
        return targetComponent;
    }
}

exports.FeAppHelper = FeAppHelper;