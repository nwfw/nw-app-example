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
            let messages = ['test', 'testing', 'more testing', 'another test', 'one more test'];
            _appWrapper.getHelper('modal').addModalMessage({message: _.sample(messages), type: _.sample(types)});
        }
    },
    computed: {
        appState: function(){
            return appState;
        },
    }
};