/**
 * @fileOverview app-main component file
 * @author Dino Ivankov <dinoivankov@gmail.com>
 * @version 1.2.1
 */

const _ = require('lodash');
var _appWrapper = window.getAppWrapper();
var appState = _appWrapper.getAppState();

/**
 * App main component
 *
 * @name app-main
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
    name: 'app-main',
    template: '',
    props: ['state'],
    data: function () {
        return appState.userData.mainData;
    },
    beforeCreate: async function(){
        if (!appState.userData){
            appState.userData = {};
        }
        if (!appState.userData.mainData){
            appState.userData.mainData = {};
        }
        _.defaultsDeep(appState.userData.mainData, appState.appData.mainData);
    },
    mounted: function(){
        this.saveUserData();
        this.$el.querySelector('select').focus();
    },
    updated: function(){
        this.$nextTick(() => {
            this.saveUserData();
        });
    },
    methods: {
        showInfo: function(){
            let modalHelper = _appWrapper.getHelper('modal');
            let modalOptions = {
                title: 'Sub components info',
                confirmButtonText: _appWrapper.appTranslations.translate('Close'),
                showCancelButton: false
            };
            modalHelper.openModal('subcomponentInfoModal', modalOptions);
        },
        resetAll: function(){
            this.currentComponent = null;
        },
        saveUserData: async function(noNotification) {
            let userDataHelper = _appWrapper.getHelper('userData');
            appState.userData.mainData = _.defaultsDeep(this.$data, appState.appData.mainData);
            let saved = await userDataHelper.saveUserData(appState.userData);
            if (saved && !noNotification){
                // _appWrapper.addUserMessage('User data saved.', 'info', []);
            }
        },
    },
    watch: {},
    computed: {
        appState: function(){
            return appState;
        }
    },
    components: {}
};