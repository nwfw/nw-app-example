const _ = require('lodash');

var _appWrapper = window.getAppWrapper();
var appState = _appWrapper.getAppState();

exports.component = {
    name: 'test-modal',

    data: function () {
        return appState.modalData;
    },
    methods: {
        addModalMessage: function(){
            let types = ['info', 'warning', 'error'];
            _appWrapper.getHelper('modal').addModalMessage({message: 'test', type: _.sample(types)});
        }
    },
    computed: {
        appState: function(){
            return appState;
        },
    }
};