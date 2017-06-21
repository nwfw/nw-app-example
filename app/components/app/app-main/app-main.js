// const _ = require('lodash');

var _appWrapper = window.getAppWrapper();
var appState = _appWrapper.getAppState();

exports.component = {
    name: 'app-main',
    template: '',
    tickInterval: null,
    data: function () {
        return {
            mainData: appState.mainData,
            duration: 800,
            isSimulating: false,
        };
    },
    methods: {
        testMessage: function(e){
            let type = e.target.getAttribute('data-type');
            let messageType = type;
            let types = ['debug', 'info', 'warning','error'];
            let count = e.target.getAttribute('data-count');
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
            let cancelable = e.target.getAttribute('data-cancelable') == '1' ? true : false;
            this.duration = 800;
            _appWrapper.getHelper('appOperation').operationStart('operation', cancelable, true, true, 'progress');
            _appWrapper.getHelper('appOperation').operationUpdate(0, 100);
        },
        simulateProgress: function(e){
            if (e && _appWrapper.getHelper('html').hasClass(e.target, 'button-disabled')){
                return;
            }
            clearInterval(this.tickInterval);
            this.tickInterval = setInterval(this.operationTick.bind(this), this.duration);
            this.isSimulating = true;
        },
        operationTick: function(){
            let appOperationHelper = _appWrapper.getHelper('appOperation');
            if (!appOperationHelper.canOperationContinue()){
                clearInterval(this.tickInterval);
                setTimeout(() => {
                    this.isSimulating = false;
                    appState.status.appStatus = 'offline';
                    appOperationHelper.operationFinish('cancelled');
                }, 1000);
            } else {
                let percentComplete = appState.progressData.percentNumber;
                percentComplete += 1;
                if (percentComplete < 100){
                    appOperationHelper.operationUpdate(percentComplete, 100);
                } else {
                    clearInterval(this.tickInterval);
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
            clearInterval(this.tickInterval);
            this.isSimulating = false;
            this.$forceUpdate();
        },
        increaseSpeed: function(e){
            if (_appWrapper.getHelper('html').hasClass(e.target, 'button-disabled')){
                return;
            }
            this.duration = parseInt(this.duration / 2, 10);
            if (this.duration <= 25){
                this.duration = 25;
            }

            this.simulateProgress();
        },
        decreaseSpeed: function(e){
            if (_appWrapper.getHelper('html').hasClass(e.target, 'button-disabled')){
                return;
            }
            this.duration = this.duration * 2;
            if (this.duration >= 1000){
                this.duration = 1000;
            }
            this.simulateProgress();
        },
        operationIncrement: function(e){
            if (_appWrapper.getHelper('html').hasClass(e.target, 'button-disabled')){
                return;
            }
            let value = parseInt(e.target.getAttribute('data-value'), 10);
            value = appState.progressData.percentNumber + value;
            _appWrapper.getHelper('appOperation').operationUpdate(value, 100);
        },
        operationFinish: function(e){
            if (_appWrapper.getHelper('html').hasClass(e.target, 'button-disabled')){
                return;
            }
            this.isSimulating = false;
            clearInterval(this.tickInterval);
            _appWrapper.getHelper('appOperation').updateProgress(100, 100);
            _appWrapper.getHelper('appOperation').operationFinish('done');
        },
        setStatus: function(e){
            if (_appWrapper.getHelper('html').hasClass(e.target, 'button-disabled')){
                return;
            }
            let status = e.target.getAttribute('data-status');
            appState.status.appStatus = status;
        }
    },
    computed: {
        appState: function(){
            return appState;
        },
        operationInProgress: function() {
            return appState.appOperation.operationActive && appState.appOperation.operationText == 'operation';
        }
    }
};