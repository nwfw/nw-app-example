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
        await super.initialize();
        this.addUserMessage('Initializing app...', 'info', [], false,  false);
        if (!appState.isDebugWindow){
            setTimeout(() => {
                _appWrapper.resetAppStatus();
            }, 400);
        }

        this.helpers = await _appWrapper.initializeHelpers(this.getConfig('appConfig.helperDirectories'));
        await appUtil.wait(appState.config.shortPauseDuration);
        this.addUserMessage('App initialized.', 'info', [], false,  false);
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
            await appUtil.wait(appState.config.shortPauseDuration);
        }
        return returnValue;
    }

    async shutdown () {
        var returnValue = true;
        this.addUserMessage('Shutting app down...', 'info', [], false,  false);
        await appUtil.wait(appState.config.shortPauseDuration);
        this.addUserMessage('App shutdown complete.', 'info', [], false,  false);
        await appUtil.wait(appState.config.mediumPauseDuration);
        return returnValue;
    }
}
exports.App = App;