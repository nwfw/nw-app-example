/**
 * @fileOverview subcomponent-info component file
 * @author Dino Ivankov <dinoivankov@gmail.com>
 * @version 1.2.1
 */

var _appWrapper = window.getAppWrapper();
var appState = _appWrapper.getAppState();

/**
 * Subcomponent info modal component
 *
 * @name subcomponent-info
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
    name: 'subcomponent-info',
    template: '',
    props: ['state'],
    data: function () {
        return appState.modalData.currentModal;
    },
    methods: {
        selectComponent: function(e){
            let componentName = e.target.innerHTML;
            appState.modalData.currentModal.onClose = () => {
                appState.mainData.currentComponent = componentName;
            };
            _appWrapper.getHelper('modal').closeCurrentModal();
        }
    },
    watch: {},
    computed: {
        appState: function(){
            return appState;
        }
    },
    components: {}
};