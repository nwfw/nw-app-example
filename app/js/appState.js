/**
 * @fileOverview AppState app file
 * @author Dino Ivankov <dinoivankov@gmail.com>
 * @version 1.1.0
 * @memberOf app
 */

/**
 * AppState Object that contains appState (store) for current app instance
 * @typedef {Object}    AppState
 * @property {Object}   appData                     Object for storing app data variables
 * @property {Object}   userData                    Object for storing user data variables
 */

/**
 * @type {AppState}
 * @memberOf app
 * @name appState-app
 */
exports.appState = {
    appData: require('../data/appData').appData,
    userData: {}
};