const _ = require('lodash');
var BaseClass = require('nw-skeleton').BaseClass;

var _appWrapper;
var appState;

class App extends BaseClass {

    constructor () {
        super();

        _appWrapper = window.getAppWrapper();
        appState = _appWrapper.getAppState();

        this.forceDebug = false;
        this.forceUserMessages = false;

        appState.mainLoaderTitle = _appWrapper.appTranslations.translate('Please wait, initializing application...');

        return this;
    }

    async initialize () {
        await super.initialize();
        this.addUserMessage('Initializing app...', 'info', [], false,  false);
        if (!appState.isDebugWindow){
            setTimeout(() => {
                _appWrapper.resetAppStatus();
            }, 400);
        }

        this.helpers = await _appWrapper.initializeHelpers(this.getConfig('appConfig.helperDirectories'));
        await _appWrapper.wait(appState.config.shortPauseDuration);
        let userData = await _appWrapper.getHelper('userData').loadUserData();
        if (userData && _.isObject(userData) && userData.appMainData){
            _.extend(userData.appMainData, appState.appData.defaultAppMainData);
            appState.appData.appMainData = _.cloneDeep(userData.appMainData);
        } else {
            appState.appData.appMainData = _.cloneDeep(appState.appData.defaultAppMainData);
            appState.userData.appMainData = _.cloneDeep(appState.appData.defaultAppMainData);
        }
        this.addUserMessage('App initialized.', 'info', [], false,  false);
        return true;
    }

    async finalize() {
        await _appWrapper.nextTick();
        var returnValue = true;
        if (!appState.isDebugWindow){
            returnValue = true;
        } else {
            returnValue = true;
        }
        if (returnValue){
            await _appWrapper.wait(appState.config.shortPauseDuration);
        }
        return returnValue;
    }

    async shutdown () {
        var returnValue = true;
        this.addUserMessage('Shutting app down...', 'info', [], false,  false);
        await _appWrapper.wait(appState.config.shortPauseDuration);
        this.addUserMessage('App shutdown complete.', 'info', [], false,  false);
        await _appWrapper.wait(appState.config.mediumPauseDuration);
        return returnValue;
    }
}
exports.App = App;