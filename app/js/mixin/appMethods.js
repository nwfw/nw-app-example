const path = require('path');

var _appWrapper = window.getAppWrapper();
var appState = _appWrapper.getAppState();

var MixinAppMethods  = {
    methods: {
        formatCurrency: function (price) {
            return _appWrapper.getHelper('format').formatCurrency(price);
        },
        formatDuration: function (duration, omitEmpty, omitZeros, secondFractions) {
            return _appWrapper.getHelper('format').formatDuration(duration, omitEmpty, omitZeros, secondFractions);
        },
        formatDurationCustom: function (time, format, returnObj) {
            return _appWrapper.getHelper('format').formatDurationCustom(time, format, returnObj);
        },
        formatDate: function (date, options, includeTime) {
            return _appWrapper.getHelper('format').formatDate(date, options, includeTime);
        },
        formatTime: function (date, options, includeDate) {
            return _appWrapper.getHelper('format').formatTime(date, options, includeDate);
        },
        formatDateNormalize: function (date, options, includeTime, omitSeconds) {
            return _appWrapper.getHelper('format').formatDateNormalize(date, options, includeTime, omitSeconds);
        },
        formatTimeNormalize: function (date, options, includeDate, omitSeconds) {
            return _appWrapper.getHelper('format').formatTimeNormalize(date, options, includeDate, omitSeconds);
        },
        addZeros: function (value, maxLength) {
            return _appWrapper.getHelper('format').addZeros(value, maxLength);
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