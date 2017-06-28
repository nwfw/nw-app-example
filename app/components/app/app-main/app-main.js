// const _ = require('lodash');

var _appWrapper = window.getAppWrapper();
var appState = _appWrapper.getAppState();

exports.component = {
    name: 'app-main',
    template: '',
    tickTimeout: null,
    finishTimeout: null,
    boundMethods: {
        operationTick: null,
    },
    operationId: '',
    created: function () {
        this.boundMethods = {
            operationTick: this.operationTick.bind(this)
        };
    },
    data: function () {
        return {
            mainData: appState.mainData,
            isSimulating: false,
            cancelable: true,
            stepValue: 1,
            maxOperationValue: 1000,
            currentOperationValue: 0,
            messageCount: 10,
            minSpeed: 1,
            maxSpeed: 1001,
            speed: 800,
        };
    },
    methods: {
        testMessage: function(e){
            let type = e.target.getAttribute('data-type');
            let messageType = type;
            let types = ['debug', 'info', 'warning','error','delimiter'];
            let count = this.messageCount;
            for (let i=0; i<count; i++){
                if (type == 'random'){
                    messageType = types[Math.floor(Math.random()*types.length)];
                }
                _appWrapper.getHelper('component').addUserMessage('message', messageType, [], false, true, true, true);
            }
        },
        operationStart: function(e){
            if (_appWrapper.getHelper('html').hasClass(e.target, 'button-disabled')){
                return;
            }
            this.speed = 800;
            this.currentOperationValue = 0;
            this.operationId = _appWrapper.getHelper('appOperation').operationStart('operation', this.cancelable, true, true, 'progress');
            _appWrapper.getHelper('appOperation').operationUpdate(0, this.maxOperationValue);
        },
        simulateProgress: function(e){
            if (e && _appWrapper.getHelper('html').hasClass(e.target, 'button-disabled')){
                return;
            }
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
            if (_appWrapper.getHelper('html').hasClass(e.target, 'button-disabled')){
                return;
            }
            clearTimeout(this.tickTimeout);
            this.isSimulating = false;
            this.$forceUpdate();
        },
        operationIncrement: function(e){
            if (_appWrapper.getHelper('html').hasClass(e.target, 'button-disabled')){
                return;
            }
            let value = parseInt(this.stepValue, 10);
            value = appState.progressData.percentNumber + value;
            this.currentOperationValue = parseInt(value / 100 * this.maxOperationValue, 10);
            _appWrapper.getHelper('appOperation').operationUpdate(this.currentOperationValue, this.maxOperationValue);
        },
        operationDecrement: function(e){
            if (_appWrapper.getHelper('html').hasClass(e.target, 'button-disabled')){
                return;
            }
            let value = 0 - parseInt(this.stepValue, 10);
            value = appState.progressData.percentNumber + value;
            this.currentOperationValue = parseInt(value / 100 * this.maxOperationValue, 10);
            _appWrapper.getHelper('appOperation').operationUpdate(this.currentOperationValue, this.maxOperationValue);
        },
        operationFinish: function(e){
            if (_appWrapper.getHelper('html').hasClass(e.target, 'button-disabled')){
                return;
            }
            this.isSimulating = false;
            clearTimeout(this.tickTimeout);
            _appWrapper.getHelper('appOperation').updateProgress(this.maxOperationValue, this.maxOperationValue);
            _appWrapper.getHelper('appOperation').operationFinish('done');
        }
    },
    computed: {
        appState: function(){
            return appState;
        },
        operationInProgress: function() {
            return appState.appOperation.operationActive && appState.appOperation.operationId == this.operationId;
        }
    }
};