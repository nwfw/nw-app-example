/**
 * @fileOverview subcomponent-info component state file
 * @author Dino Ivankov <dinoivankov@gmail.com>
 * @version 1.1.0
 * @memberOf components
 */

/**
 * SubcomponentInfoModalData Object that contains SubcomponentInfoModalData (store) for current app instance
 * @typedef {Object}            SubcomponentInfoModalData
 name: 'subcomponent-info',
 * @property {string}   bodyComponent           Test modal body component
 * @property {string}   defaultBodyComponent    Test modal default body component
 * @property {string}   modalClassName          Test modal CSS class
 */


/**
 * SubcomponentInfoAppModals Object that contains SubcomponentInfoAppModals (store) for current app instance
 * @typedef {Object}            SubcomponentInfoAppModals
 * @property {SubcomponentInfoModalData}        testModal         Object for storing subcomponent-info data variables
 */

/**
 * TestModalComponentState Object that contains TestModalComponentState (store) for current app instance
 * @typedef {Object}    TestModalComponentState
 * @property {SubcomponentInfoAppModals}  appModals     Object for storing subcomponent-infos data object
 */

/**
 * @type {TestModalComponentState}
 * @memberOf components
 * @name testModalComponentState
 *
 * @property {SubcomponentInfoAppModals} appModals App data object
 */
exports.appState = {
    appModals: {
        subcomponentInfoModal: {
            name: 'subcomponent-info',
            bodyComponent: 'subcomponent-info',
            defaultBodyComponent: 'subcomponent-info',
            modalClassName: 'subcomponent-info-modal'
        },
    }
};