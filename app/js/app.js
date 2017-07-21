/**
 * @fileOverview App class file
 * @author Dino Ivankov <dinoivankov@gmail.com>
 * @version 1.1.0
 */

/**
 * @namespace
 * @name app
 * @description app app namespace
 */

/**
 * @namespace
 * @name components
 * @description components components namespace
 */

/**
 * @namespace
 * @name mixins
 * @description mixins mixins namespace
 */

/**
 * @namespace
 * @name mixins.appMethods
 * @description mixins.appMethods mixins.appMethods namespace
 */

/**
 * BaseClass object
 * @external BaseClass
 * @relativelink {"text":"BaseClass","url":"../node_modules/nw-skeleton/doc/appWrapper.BaseClass.html"};
 */

const _ = require('lodash');
const path = require('path');

let BaseClass = require('nw-skeleton').BaseClass;

var _appWrapper;
var appState;

/**
 * App class - main class for nw-skeleton app instances
 *
 * @class
 * @extends BaseClass
 * @memberOf app
 * @property {Object} subFileClasses Object containing subFile classes for this app
 */
class App extends BaseClass {

    /**
     * Creates App instance
     *
     * @constructor
     * @return {App}              Instance of App class
     */
    constructor () {
        super();

        _appWrapper = window.getAppWrapper();
        appState = _appWrapper.getAppState();

        this.forceDebug = false;
        this.forceUserMessages = false;

        this.subFileClasses = {};

        return this;
    }

    /**
     * Initializes app and its dependencies
     *
     * @async
     * @return {App} App class instance
     */
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

    /**
     * Loads sub files using configuration
     *
     * @async
     */
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

    /**
     * Initializes loaded sub files
     *
     * @async
     */
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

    /**
     * Finalizes loaded sub files
     *
     * @async
     */
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

    /**
     * Shuts down loaded sub files
     *
     * @async
     */
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

    /**
     * Finalizes app and its subfiles. This method is called once
     * frontend application is created, so code here has all references that
     * are available to the application
     *
     * @async
     * @return {boolean} Finalization result
     */
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

    /**
     * Shuts down application and all its dependencies, freeing memory,
     * removing references and preparing for app exit
     *
     * @async
     * @return {boolean} Shutdown result
     */
    async shutdown () {
        let returnValue = true;
        this.addUserMessage('Shutting app down...', 'info', [], false,  false);
        await this.shutdownSubFiles();
        this.addUserMessage('App shutdown complete.', 'info', [], false,  false);
        await _appWrapper.wait(appState.config.mediumPauseDuration);
        return returnValue;
    }

    /**
     * Local require for loading app modules from appWrapper
     *
     * @param  {string} moduleName Name of module to require
     * @return {Object}            Required module
     */
    localRequire (moduleName){
        return require(moduleName);
    }
}
exports.App = App;
