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