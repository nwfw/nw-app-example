var path = require('path');

var _appWrapper = window.getAppWrapper();
var appState = _appWrapper.getAppState();

var MixinAppMethods  = {
    methods: {
        formatCurrency: function (price) {
            return _appWrapper.helpers.htmlHelper.formatCurrency(price);
        },
        formatDuration: function (duration) {
            return _appWrapper.helpers.htmlHelper.formatDuration(duration);
        },
        basename: function(file){
            return path.basename(file);
        },
        isDebugOn: function(){
            return appState.debug && appState.appData.presentationData.debug;
        }
    }
};
exports.mixin = MixinAppMethods;