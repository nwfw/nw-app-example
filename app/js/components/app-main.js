var _appWrapper = window.getAppWrapper();
var appUtil = _appWrapper.getAppUtil();
var appState = appUtil.getAppState();

exports.component = {
    name: 'app-main',
    template: _appWrapper.appTemplates.getTemplateContents('app-main'),
    props: ['state'],
    data: function () {
        return appState.mainData;
    },
    methods: {
        testMessage: function(e){
            let type = e.target.getAttribute('data-type');
            _appWrapper.getHelper('component').addUserMessage('message', type, [], false, true, true, true);
        }
    },
    computed: {
        appState: function(){
            return appState;
        }
    },
    components: {}
};