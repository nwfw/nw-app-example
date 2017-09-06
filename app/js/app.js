/**
 * @fileOverview App class file
 * @author Dino Ivankov <dinoivankov@gmail.com>
 * @version 1.0.4
 */

const WrapperApp = require('nw-skeleton').App;

var _appWrapper;
var appState;

/**
 * App class - main class for nw-skeleton based app instances
 *
 * This class has three methods that are important for application life cycle:
 * <ul>
 * <li>initialize</li>
 * <li>finalize</li>
 * <li>shutdown</li>
 * </ul>
 * All three methods are async, and called from nw-skeleton appWrapper automatically.
 * <p>[Initialize]{@link app.App#initialize} is called first and it loads application helpers, sets application basic data, and finally loads eventual subFiles from configuration, instantiate their classes and (await) call initialize methods on all classes that contain that method.</p>
 * </p>[Finalize]{@link app.App#finalize} is called once both backend and frontend app have been initialized, and it has complete app structure and appState at its disposal. It will also automatically (await) call 'finalize' method on all sub classes that have it.</p>
 * </p>[Shutdown]{@link app.App#shutdown} is called before application window is closed or unloaded and should perform all necessary cleanup operations, remove any event listeners and free any remaining references left over from application usage. This method will also (await) call 'shutdown' method on any sub classes that have that method.</p>
 *
 * @class
 * @extends {WrapperApp}
 * @memberOf app
 */
class App extends WrapperApp {

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
        this.boundMethods = {
            windowBlur: null,
            windowFocus: null
        };
    }

    /**
     * Initializes app and its dependencies
     *
     * @async
     * @return {App} App class instance
     */
    async initialize () {
        let result = await super.initialize();
        return result;
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
        let result = await super.finalize();
        return result;
    }

    /**
     * Shuts down application and all its dependencies, freeing memory,
     * removing references and preparing for app exit
     *
     * @async
     * @return {boolean} Shutdown result
     */
    async shutdown () {
        let result = await super.shutdown();
        return result;
    }

    addEventListeners () {
        if (!appState.isDebugWindow){
            _appWrapper.on('window:blur', this.boundMethods.windowBlur);
            _appWrapper.on('window:focus', this.boundMethods.windowFocus);
        }
    }

    removeEventListeners () {
        if (!appState.isDebugWindow){
            _appWrapper.removeListener('window:blur', this.boundMethods.windowBlur);
            _appWrapper.removeListener('window:focus', this.boundMethods.windowFocus);
        }
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

    /**
     * Handler for menu item that sets subcomponent view
     *
     * @param {Object} menuItem Menuitem that triggered the handler
     * @return {undefined}
     */
    setMainView (menuItem){
        let componentName = menuItem && menuItem.label ? menuItem.label : false;
        if (componentName){
            appState.userData.mainData.currentComponent = componentName;
        }
    }

    /**
     * Handler for window focus event
     *
     * @return {undefined}
     */
    windowFocus () {
        if (this.initialized){
            _appWrapper.asyncMessage({instruction: 'updateMenuItem', data: {type: 'tray', menuItemIndex: '0', menuItemUpdates: {enabled: false}}});
        }
    }

    /**
     * Handler for window blur event
     *
     * @return {undefined}
     */
    windowBlur () {
        if (this.initialized){
            _appWrapper.asyncMessage({instruction: 'updateMenuItem', data: {type: 'tray', menuItemIndex: '0', menuItemUpdates: {enabled: true}}});
        }
    }

}
exports.App = App;

/**
 * @namespace
 * @name app
 * @description app Main application class namespace
 */

/**
 * @namespace
 * @name components
 * @description components Application Vue components namespace
 */

/**
 * @namespace
 * @name mixins
 * @description mixins Application Vue mixins namespace
 */

/**
 * @namespace
 * @name mixins.appMethods
 * @description mixins.appMethods Application Vue global mixin appMethods namespace
 */