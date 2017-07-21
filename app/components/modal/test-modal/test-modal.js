/**
 * @fileOverview test-modal component file
 * @author Dino Ivankov <dinoivankov@gmail.com>
 * @version 1.1.0
 * @memberOf components
 */

const _ = require('lodash');

var _appWrapper = window.getAppWrapper();
var appState = _appWrapper.getAppState();
/**
 * Test modal component
 *
 * @name test-modal
 * @memberOf components
 * @property {string}   name        Name of the component
 * @property {string}   template    Component template contents
 * @property {string[]} props       Component properties
 * @property {Function} data        Data function
 * @property {Object}   methods     Component methods
 * @property {Object}   watch       Component watchers
 * @property {Object}   computed    Computed properties
 * @property {Object}   components  Child components
 */
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