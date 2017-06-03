var _appWrapper = window.getAppWrapper();
var appUtil = _appWrapper.getAppUtil();
var appState = appUtil.getAppState();

exports.component = {
    name: 'app-start',
    template: _appWrapper.appTemplates.getTemplateContents('app-start'),
    data: function () {
        return appState.appData;
    },
    computed: {
        appState: function(){
            return appState;
        }
    }
};