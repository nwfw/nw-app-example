const _ = require('lodash');

var _appWrapper = window.getAppWrapper();
var appState = _appWrapper.getAppState();

exports.component = {
    name: 'app-main',
    template: '',
    tickTimeout: null,
    finishTimeout: null,
    checkSpeedTimeout: null,
    boundMethods: {
        operationTick: null,
    },
    operationId: '',
    created: function () {
        this.boundMethods = {
            operationTick: this.operationTick.bind(this)
        };
    },
    updated: function(){
        this.saveUserData(null, true);
    },
    data: function () {
        return appState.userData.appMainData;
    },
    methods: {
        clearMessages: function(e){
            if (e && e.target && e.target.hasClass('button-disabled')){
                return;
            }
            _appWrapper.getHelper('debug').clearUserMessages();
            _appWrapper.getHelper('debug').clearDebugMessages();
        },
        testMessage: function(){
            let types = ['debug', 'info', 'warning','error','delimiter'];
            let count = this.messageCount;
            let messageType = this.messageType;
            for (let i=0; i<count; i++){
                if (this.messageType == 'random'){
                    messageType = types[Math.floor(Math.random()*types.length)];
                }
                if (this.logMessage){
                    _appWrapper.getHelper('component').addUserMessage('message', messageType, [], false, true, true, this.logDebug);
                } else if (this.logDebug) {
                    _appWrapper.getHelper('component').log('message', messageType, [], true, true);
                }
            }
        },
        operationStart: function(e){
            if (e.target.hasClass('button-disabled')){
                return;
            }
            this.statusChange('operationStatusChanging');
            this.currentOperationValue = 0;
            this.operationId = _appWrapper.getHelper('appOperation').operationStart('operation', this.cancelable, true, true, 'progress');
            _appWrapper.getHelper('appOperation').operationUpdate(0, this.maxOperationValue);
        },
        simulateProgress: function(e){
            if (e && e.target && e.target.hasClass('button-disabled')){
                return;
            }
            this.statusChange('simulationStatusChanging');
            let duration = this.maxSpeed - this.speed;
            clearTimeout(this.tickTimeout);
            this.tickTimeout = setTimeout(this.boundMethods.operationTick, duration);
            this.isSimulating = true;
        },
        operationTick: async function(){
            let appOperationHelper = _appWrapper.getHelper('appOperation');
            clearTimeout(this.tickTimeout);
            if (!appOperationHelper.canOperationContinue()){
                clearTimeout(this.finishTimeout);
                this.finishTimeout = setTimeout( () => {
                    clearTimeout(this.finishTimeout);
                    this.isSimulating = false;
                    appState.status.appStatus = 'offline';
                    appOperationHelper.operationFinish('cancelled');
                }, 1000);
            } else {
                this.currentOperationValue += 1;
                if (this.currentOperationValue < this.maxOperationValue){
                    appOperationHelper.operationUpdate(this.currentOperationValue, this.maxOperationValue);
                    let duration = this.maxSpeed - this.speed;
                    if (this.logProgress && ((this.currentOperationValue - this.lastLoggedValue) % 10 == 0)){
                        this.lastLoggedValue = this.currentOperationValue;
                        _appWrapper.getHelper('component').addUserMessage('Log progress: {1} / {2}', 'info', [this.currentOperationValue, this.maxOperationValue], false, true, true, true);
                    }
                    await _appWrapper.nextTick();
                    this.tickTimeout = setTimeout(this.boundMethods.operationTick, duration);
                } else {
                    this.isSimulating = false;
                    appState.status.appStatus = 'success';
                    appOperationHelper.operationFinish('done');
                }
            }
        },
        stopSimulating: function (e){
            if (e.target.hasClass('button-disabled')){
                return;
            }
            this.statusChange('simulationStatusChanging');
            clearTimeout(this.tickTimeout);
            this.isSimulating = false;
            this.$forceUpdate();
        },
        operationIncrement: function(e){
            if (e.target.hasClass('button-disabled')){
                return;
            }
            let value = parseInt(this.stepValue, 10);
            value = appState.progressData.percentNumber + value;
            this.currentOperationValue = parseInt(value / 100 * this.maxOperationValue, 10);
            _appWrapper.getHelper('appOperation').operationUpdate(this.currentOperationValue, this.maxOperationValue);
        },
        operationDecrement: function(e){
            if (e.target.hasClass('button-disabled')){
                return;
            }
            let value = 0 - parseInt(this.stepValue, 10);
            value = appState.progressData.percentNumber + value;
            this.currentOperationValue = parseInt(value / 100 * this.maxOperationValue, 10);
            _appWrapper.getHelper('appOperation').operationUpdate(this.currentOperationValue, this.maxOperationValue);
        },
        operationFinish: function(e){
            if (e.target.hasClass('button-disabled')){
                return;
            }
            this.statusChange('operationStatusChanging');
            this.isSimulating = false;
            clearTimeout(this.tickTimeout);
            _appWrapper.getHelper('appOperation').updateProgress(this.maxOperationValue, this.maxOperationValue);
            _appWrapper.getHelper('appOperation').operationFinish('done');
        },
        statusChange: function(property){
            this[property] = 1;
            setTimeout( () => {
                this[property] = 0;
            }, 500);
        },
        checkSpeedInput: function(e) {
            if (this.speed > (this.maxSpeed - 1)){
                this.speed = (this.maxSpeed - 1);
            }
            if (this.speed < this.minSpeed){
                this.speed = this.minSpeed;
            }
            if (e.target.value != this.speed){
                e.target.value = this.speed;
            }
        },
        checkMaxOperationValueInput: function(e) {
            if (this.maxOperationValue > (this.maxOperationValueLimit)){
                this.maxOperationValue = (this.maxOperationValueLimit);
            }
            if (this.maxOperationValue < 1){
                this.maxOperationValue = 1;
            }
            if (e.target.value != this.maxOperationValue){
                e.target.value = this.maxOperationValue;
            }
        },
        openTestModal: function() {
            let modalHelper = _appWrapper.getHelper('modal');
            let modalOptions = {
                title: 'Test modal',
                body: 'This is a test modal'
            };
            if (this.animateTestModal){
                modalOptions.animateSize = true;
            }
            if (this.autoCloseModal){
                modalOptions.autoCloseTime = 5000;
            }

            modalOptions.showConfirmButton = this.showConfirmButton;
            modalOptions.showCancelButton = this.showCancelButton;
            modalOptions.confirmDisabled = this.confirmDisabled;
            modalOptions.cancelDisabled = this.cancelDisabled;
            modalOptions.confirmSelected = this.confirmSelected;
            modalOptions.cancelSelected = this.cancelSelected;
            modalOptions.showCloseLink = this.showCloseLink;

            _appWrapper._confirmModalAction = function() {
                modalHelper.modalBusy('Confirming...');
                setTimeout( () => {
                    modalHelper.emptyModal();
                    modalHelper.modalNotBusy();
                    modalHelper.closeCurrentModal();
                }, 1000);
            };
            _appWrapper._cancelModalAction = function() {
                modalHelper.modalBusy('Cancelling...');
                setTimeout( () => {
                    modalHelper.emptyModal();
                    modalHelper.modalNotBusy();
                    modalHelper.closeCurrentModal();
                }, 1000);
            };

            appState.modalData.currentModal = modalHelper.getModalObject('testModal', modalOptions);
            modalHelper.openCurrentModal();
        },
        modalCheckboxChange: function (e){
            let cb = e.target;
            let prop = cb.getAttribute('name');
            let checked = cb.checked;
            if (prop == 'showCancelButton'){
                if (!checked){
                    this.cancelSelected = false;
                }
            }
            if (prop == 'cancelDisabled'){
                if (checked){
                    this.cancelSelected = false;
                }
            }
            if (prop == 'cancelSelected'){
                if (checked){
                    this.cancelDisabled = false;
                    this.showCancelButton = true;
                    this.confirmSelected = false;
                }
            }

            if (prop == 'showConfirmButton'){
                if (!checked){
                    this.confirmSelected = false;
                }
            }
            if (prop == 'confirmDisabled'){
                if (checked){
                    this.confirmSelected = false;
                }
            }
            if (prop == 'confirmSelected'){
                if (checked){
                    this.confirmDisabled = false;
                    this.showConfirmButton = true;
                    this.cancelSelected = false;
                }
            }
        },
        resetUserData: function(e) {
            if (e && e.target && e.target.hasClass('button-disabled')){
                return;
            }
            let modalHelper = _appWrapper.getHelper('modal');
            modalHelper.confirm('Are you sure?', 'Resetting all user data', 'Yes', 'No', this.doResetUserData);
        },
        doResetUserData: function() {
            _appWrapper.getHelper('userData').clearUserData();
            let keys = Object.keys(this.$data);
            for (let i=0; i<keys.length; i++){
                this[keys[i]] = appState.appData.defaultMainData[keys[i]];
            }
            _appWrapper.getHelper('userData').saveUserData({appMainData: appState.appData.defaultMainData});
            _appWrapper.getHelper('modal').closeCurrentModal();
            _appWrapper.addNotification('User data reset.', []);
        },
        saveUserData: function(e, omitAppState) {
            if (e && e.target && e.target.hasClass('button-disabled')){
                return;
            }
            let userDataHelper = _appWrapper.getHelper('userData');
            let data = _.cloneDeep(this.$data);
            // data.speed = 800;
            // data.isSimulating = false;
            // data.currentOperationValue = 0;
            // data.lastLoggedValue = 0;
            // data.operationStatusChanging = 0;
            // data.simulationStatusChanging = 0;

            userDataHelper.saveUserData({appMainData: data}, omitAppState);
            if (!omitAppState){
                _appWrapper.addNotification('User data saved.', []);
            }
        },
        userDataChanged: function(){
            let utilHelper = _appWrapper.getHelper('util');
            var currentData = _.cloneDeep(this.$data);
            var oldData = _.cloneDeep(appState.userData.appMainData);
            var dataDiff = utilHelper.difference(oldData, currentData);
            return Object.keys(dataDiff).length;
        },
        defaultDataChanged: function(){
            let utilHelper = _appWrapper.getHelper('util');

            var currentDataMap = utilHelper.propertyValuesMap(_.cloneDeep(this.$data));
            let savedData = _.cloneDeep(appState.appData.defaultMainData);
            let oldDataMap = utilHelper.propertyValuesMap(savedData);
            var keyMapDiff = utilHelper.difference(oldDataMap, currentDataMap);
            return Object.keys(keyMapDiff).length;
        }
    },
    computed: {
        appState: function(){
            return appState;
        },
        operationInProgress: function() {
            return appState.appOperation.operationActive && appState.appOperation.operationId == this.operationId;
        },
        appInfoJsonData: function () {
            return {
                appInfo: appState.config.appInfo,
                platformData: appState.platformData
            };
        },
        hasCustomData: function(){
            return this.defaultDataChanged();
        },
        savedDataChanged: function(){
            return this.userDataChanged();
        }
    }
};