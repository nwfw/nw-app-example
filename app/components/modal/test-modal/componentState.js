/**
 * @fileOverview test-modal component state file
 * @author Dino Ivankov <dinoivankov@gmail.com>
 * @version 1.1.0
 * @memberOf components
 */

/**
 * TestModalData Object that contains TestModalData (store) for current app instance
 * @typedef {Object}            TestModalData
 name: 'test-modal',
 * @property {string}   bodyComponent           Test modal body component
 * @property {string}   defaultBodyComponent    Test modal default body component
 * @property {string}   modalClassName          Test modal CSS class
 * @property {Boolean}  preventEscClose         Flag to prevent closing modal on esc
 * @property {Number}   remainingTime           Remaining time in seconds
 */


/**
 * TestModalsAppModals Object that contains TestModalsAppModals (store) for current app instance
 * @typedef {Object}            TestModalsAppModals
 * @property {TestModalData}        testModal         Object for storing test-modal data variables
 */

/**
 * TestModalComponentState Object that contains TestModalComponentState (store) for current app instance
 * @typedef {Object}    TestModalComponentState
 * @property {TestModalsAppModals}  appModals     Object for storing test-modals data object
 */

/**
 * @type {TestModalComponentState}
 * @memberOf components
 * @name testModalComponentState
 *
 * @property {TestModalsAppModals} appModals App data object
 */
exports.appState = {
    appModals: {
        testModal: {
            name: 'test-modal',
            bodyComponent: 'test-modal',
            defaultBodyComponent: 'test-modal',
            modalClassName: 'test-modal',
            preventEscClose: false,
            remainingTime: 0,
        },
    }
};