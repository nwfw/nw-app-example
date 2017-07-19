const _ = require('lodash');
const path = require('path');

let BaseClass = require('nw-skeleton').BaseClass;

var _appWrapper;
var appState;

class App extends BaseClass {

    constructor () {
        super();

        _appWrapper = window.getAppWrapper();
        appState = _appWrapper.getAppState();

        this.forceDebug = false;
        this.forceUserMessages = false;

        this.subFileClasses = {};

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

        appState.mainLoaderTitle = _appWrapper.appTranslations.translate('Please wait, initializing application...');

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

        await this.loadSubFiles();
        await this.initializeSubFiles();

        this.addUserMessage('App initialized.', 'info', [], false,  false);
        return true;
    }

    async loadSubFiles (){
        this.appSubFiles = this.getConfig('appConfig.appSubFiles');
        if (this.appSubFiles && this.appSubFiles.length){
            this.log('Loading app sub files...', 'group', []);
            for(let i=0; i<this.appSubFiles.length;i++){
                let subFileData = this.appSubFiles[i];
                if (subFileData && _.isObject(subFileData) && subFileData.name && subFileData.className && subFileData.file){
                    this.log('Loading app sub file "{1}"', 'info', [subFileData.name]);
                    global[subFileData.className] = require(path.resolve(subFileData.file))[subFileData.className];
                    this[subFileData.name] = new global[subFileData.className]();
                }
            }
            this.log('Loading app sub files...', 'groupend', []);
        }
    }

    async initializeSubFiles(){
        if (this.appSubFiles && this.appSubFiles.length){
            this.log('Initializing app sub files...', 'group', []);
            for(let i=0; i<this.appSubFiles.length;i++){
                let subFileData = this.appSubFiles[i];
                if (this[subFileData.name] && this[subFileData.name].initialize && _.isFunction(this[subFileData.name].initialize)){
                    this.log('Initializing app sub file "{1}"', 'info', [subFileData.name]);
                    await this[subFileData.name].initialize();
                }
            }
            this.log('Initializing app sub files...', 'groupend', []);
        }
    }

    async finalizeSubFiles(){
        if (this.appSubFiles && this.appSubFiles.length){
            this.log('Finalizing app sub files...', 'group', []);
            for(let i=0; i<this.appSubFiles.length;i++){
                let subFileData = this.appSubFiles[i];
                if (this[subFileData.name] && this[subFileData.name].finalize && _.isFunction(this[subFileData.name].finalize)){
                    this.log('Finalizing app sub file "{1}"', 'info', [subFileData.name]);
                    await this[subFileData.name].finalize();
                }
            }
            this.log('Finalizing app sub files...', 'groupend', []);
        }
    }

    async shutdownSubFiles(){
        if (this.appSubFiles && this.appSubFiles.length){
            this.log('Shutting down app sub files...', 'group', []);
            for(let i=0; i<this.appSubFiles.length;i++){
                let subFileData = this.appSubFiles[i];
                if (this[subFileData.name] && this[subFileData.name].shutdown && _.isFunction(this[subFileData.name].shutdown)){
                    this.log('Shutting down app sub file "{1}"', 'info', [subFileData.name]);
                    await this[subFileData.name].shutdown();
                }
            }
            this.log('Shutting down app sub files...', 'groupend', []);
        }
    }

    async finalize() {
        await _appWrapper.nextTick();
        let returnValue = true;
        if (!appState.isDebugWindow){
            await this.finalizeSubFiles();
        } else {
            returnValue = true;
        }
        if (returnValue){
            await _appWrapper.wait(appState.config.shortPauseDuration);
        }
        return returnValue;
    }

    async shutdown () {
        let returnValue = true;
        this.addUserMessage('Shutting app down...', 'info', [], false,  false);
        await this.shutdownSubFiles();
        this.addUserMessage('App shutdown complete.', 'info', [], false,  false);
        await _appWrapper.wait(appState.config.mediumPauseDuration);
        return returnValue;
    }

    localRequire (moduleName){
        return require(moduleName);
    }
}
exports.App = App;
