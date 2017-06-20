const path = require('path');

var _appWrapper = window.getAppWrapper();
var appState = _appWrapper.getAppState();

var MixinAppMethods  = {
    methods: {
        formatCurrency: function (price) {
            return _appWrapper.getHelper('format').formatCurrency(price);
        },
        formatDuration: function (duration) {
            return _appWrapper.getHelper('format').formatDuration(duration);
        },
        formatDate: function (date, options, includeTime) {
            return _appWrapper.getHelper('format').formatDate(date, options, includeTime);
        },
        formatDateNormalize: function (date, options, includeTime, omitSeconds) {
            return _appWrapper.getHelper('format').formatDateNormalize(date, options, includeTime, omitSeconds);
        },
        basename: function(file){
            return path.basename(file);
        },
        isDebugOn: function(){
            return appState.debug;
        }
    }
};
exports.mixin = MixinAppMethods;