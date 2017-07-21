/**
 * @fileOverview app-main component state file
 * @author Dino Ivankov <dinoivankov@gmail.com>
 * @version 1.1.0
 * @memberOf components
 */

/**
 * AppMainData Object that contains app error data
 * @typedef {Object}    AppMainData
 */

/**
 * OperationData Object that contains app error data
 * @typedef {Object}    OperationData
 * @property {Boolean}  isSimulating                Flag to indicate wheter operation is being simulated
 * @property {Boolean}  operationStatusChanging     Flag to indicate wheter operation status is being changed
 * @property {Boolean}  simulationStatusChanging    Flag to indicate wheter simulation status is being changed
 * @property {Number}   currentOperationValue       Current operation value (percent)
 * @property {Number}   lastLoggedValue             Last logged operation value (percent)
 * @property {string}   operationId                 Operation ID
 */

/**
 * DefaultAppMainData Object that contains app error data
 * @typedef {Object}    DefaultAppMainData
 * @property {Boolean}      cancelable              Flag to indicate wheter operation is cancelable
 * @property {Boolean}      logProgress             Flag to indicate wheter to log operation progress
 * @property {Number}       stepValue               Step value for incremen/decrement
 * @property {array}        stepValues              Array of possible step values
 * @property {array}        appStatuses             Array of possible app statuses
 * @property {Number}       maxOperationValueLimit  Max operation value limit
 * @property {Number}       maxOperationValue       Max operation value
 * @property {Number}       minSpeed                Minimum speed
 * @property {Number}       maxSpeed                Maximum speed
 * @property {Number}       speed                   Current speed
 * @property {Number}       messageCount            Current message count
 * @property {array}        messageCounts           Array of possible message counts
 * @property {array}        messageTypes            Array of possible message types
 * @property {string}       messageType             Current message type
 * @property {Number}       logMessage              Flag to indicate wheter to log user messages
 * @property {Number}       logDebug                Flag to indicate wheter to log debug messages
 * @property {array}        notifications           Possible notification texts
 * @property {string}       notificationText        Current notification text
 * @property {Boolean}      customNotification      Flag to indicate wheter to use custom notification
 * @property {string}       customNotificationText  Custom notification text
 * @property {Boolean}      animateTestModal        Flag to indicate wheter to animate test modal
 * @property {Boolean}      autoCloseModal          Flag to indicate wheter to auto close test modal
 * @property {Number}       autoCloseDuration       Duration in milliseconds for modal auto close
 * @property {Number}       autoCloseDurationMin    Minimum duration in milliseconds for modal auto close
 * @property {Number}       autoCloseDurationMax    Maximum duration in milliseconds for modal auto close
 * @property {Number}       autoCloseDurationStep   Step for changing duration in milliseconds for modal auto close
 * @property {Boolean}      preventEscClose         Flag to indicate wheter to allow modal close on esc
 * @property {Boolean}      showCloseLink           Flag to indicate wheter to show modal close link
 * @property {Boolean}      showConfirmButton       Flag to indicate wheter to show modal confirm button
 * @property {Boolean}      showCancelButton        Flag to indicate wheter to show modal cancel button
 * @property {Boolean}      confirmDisabled         Flag to indicate wheter to disable modal confirm button
 * @property {Boolean}      cancelDisabled          Flag to indicate wheter to disable modal cancel button
 * @property {Boolean}      confirmSelected         Flag to indicate wheter to select modal confirm button
 * @property {Boolean}      cancelSelected          Flag to indicate wheter to select modal cancel button
 */

/**
 * AppData Object that contains AppData (store) for current app instance
 * @typedef {Object}            AppData
 * @property {AppMainData}          appMainData         Object for storing app-main data variables
 * @property {OperationData}        operationData       Object for storing app-main operation data variables
 * @property {DefaultAppMainData}   defaultAppMainData  Object for storing default app-main data variables
 */

/**
 * ComponentState Object that contains ComponentState (store) for current app instance
 * @typedef {Object}    ComponentState
 * @property {AppData}  AppData     Object for storing app-main appData variables
 */

/**
 * @type {ComponentState}
 * @memberOf components
 * @name appMainComponentState
 *
 * @property {AppData} App data object
 */
exports.appState = {
    appData: {
        appMainData: {},
        operationData: {
            isSimulating: false,
            operationStatusChanging: 0,
            simulationStatusChanging: 0,
            currentOperationValue: 0,
            lastLoggedValue: 0,
            operationId: null,
        },
        defaultAppMainData: {
            cancelable: true,
            logProgress: false,
            stepValue: 1,
            stepValues: [
                1,
                10,
                25,
                50,
            ],
            appStatuses: [
                'error',
                'idle',
                'busy',
                'success',
                'working',
                'offline',
            ],
            maxOperationValueLimit: 10000,
            maxOperationValue: 1000,
            minSpeed: 1,
            maxSpeed: 1001,
            speed: 800,

            messageCount: 10,
            messageCounts: [
                1,
                5,
                10,
                25,
                50,
                100,
                250,
            ],
            messageTypes: [
                'debug',
                'info',
                'warning',
                'error',
                'delimiter',
                'random',
            ],
            messageType: 'random',
            logMessage: 1,
            logDebug: 1,

            notifications: [
                'Notification test',
                'App notification',
                'Testing app notifications'
            ],
            notificationText: 'Notification test',
            customNotification: false,
            customNotificationText: 'My notification',

            animateTestModal: false,
            autoCloseModal: false,
            autoCloseDuration: 5000,
            autoCloseDurationMin: 5000,
            autoCloseDurationMax: 120000,
            autoCloseDurationStep: 1000,
            preventEscClose: false,
            showCloseLink: true,
            showConfirmButton: true,
            showCancelButton: true,
            confirmDisabled: false,
            cancelDisabled: false,
            confirmSelected: true,
            cancelSelected: false,
        }
    }
};