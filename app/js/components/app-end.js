var _appWrapper = window.getAppWrapper();
var appUtil = _appWrapper.getAppUtil();
var appState = appUtil.getAppState();

exports.component = {
    name: 'app-end',
    template: _appWrapper.appTemplates.getTemplateContents('app-end'),
    data: function () {
        return appState;
    },
    computed: {
        appState: function(){
            return appState;
        }
    }
};