// const _ = require('lodash');

var _appWrapper = window.getAppWrapper();
var appState = _appWrapper.getAppState();

exports.component = {
    name: 'test-modal',

    data: function () {
        return {

        };
    },
    methods: {
        addModalMessage: function(){
            _appWrapper.getHelper('modal').addModalMessage({message: 'test', type: 'info'});
        }
    },
    computed: {
        appState: function(){
            return appState;
        },
    }
};