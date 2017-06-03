var BaseClass = require('nw-skeleton').BaseClass;

var _appWrapper;
var appUtil;
var appState;

class App extends BaseClass {

    constructor () {
        super();

        _appWrapper = this.getAppWrapper();
        appUtil = this.getAppUtil();
        appState = this.getAppState();

        this.forceDebug = false;
        this.forceUserMessages = false;

        appState.mainLoaderTitle = _appWrapper.appTranslations.translate('Please wait, initializing application...');

        return this;
    }

    async initialize () {

        appUtil.addUserMessage('Initializing app', 'info', [], false,  false, this.forceUserMessages, this.forceDebug);

        await super.initialize();

        if (!appState.isDebugWindow){
            setTimeout(() => {
                _appWrapper.resetAppStatus();
            }, 400);
        }

        this.helpers = await _appWrapper.initializeHelpers(appUtil.getConfig('appConfig.helperDirectories'));
        await appUtil.wait(appState.config.shortPauseDuration);

        appUtil.addUserMessage('Initializing diff', 'info', [], false,  false, this.forceUserMessages, this.forceDebug);
        await appUtil.wait(appState.config.shortPauseDuration);

        return true;
    }

    async finalize() {
        await appUtil.nextTick();
        var returnValue = true;
        if (!appState.isDebugWindow){
            returnValue = true;
        } else {
            returnValue = true;
        }
        if (returnValue){
            appUtil.addUserMessage('App initialized', 'info', [], false,  false, this.forceUserMessages, this.forceDebug);
            await appUtil.wait(appState.config.shortPauseDuration);
        }
        return returnValue;
    }

    async shutdown () {
        var returnValue = true;
        appUtil.addUserMessage('Shutting app down', 'info', [], false,  false, this.forceUserMessages, this.forceDebug);
        await appUtil.wait(appState.config.shortPauseDuration);
        appUtil.addUserMessage('App shutdown complete.', 'info', [], false,  false, this.forceUserMessages, this.forceDebug);
        await appUtil.wait(appState.config.mediumPauseDuration);
        return returnValue;
    }
}
exports.App = App;