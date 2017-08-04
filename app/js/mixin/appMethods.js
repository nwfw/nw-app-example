/**
 * @fileOverview App class file
 * @author Dino Ivankov <dinoivankov@gmail.com>
 * @version 1.1.0
 * @memberOf mixins
 */

const path = require('path');

var _appWrapper = window.getAppWrapper();
// var appState = _appWrapper.getAppState();

/**
 * App methods mixin
 *
 * Contains userful methods shared by all vue components
 *
 * @memberOf mixins
 * @name MixinAppMethods
 * @type {Object}
 * @property {Object} methods Object with mixin methods
 */
var MixinAppMethods  = {
    methods: {
        /**
         * Formats currency based on current language locale
         *
         * @method
         * @memberOf mixins.appMethods
         * @param  {Number} price Numeric price
         * @return {string}       Formatted currency value
         */
        formatCurrency: function (price) {
            return _appWrapper.getHelper('format').formatCurrency(price);
        },

        /**
         * Formats duration to human-readable format
         *
         * @method
         * @memberOf mixins.appMethods
         * @param  {Number}  duration        Duration in milliseconds
         * @param  {Boolean} omitEmpty       Flag to indicate whether to omit empty values
         * @param  {Boolean} omitZeros       Flag to indicate whether to omit zeros in one-digit values
         * @param  {Boolean} secondFractions Flag to indicate whether to display second fractions
         * @return {string}                  Formatted duration
         */
        formatDuration: function (duration, omitEmpty, omitZeros, secondFractions) {
            return _appWrapper.getHelper('format').formatDuration(duration, omitEmpty, omitZeros, secondFractions);
        },

        /**
         * Formats custom duration based on passed format argument
         *
         * @method
         * @memberOf mixins.appMethods
         * @param  {Number} time        Duration in milliseconds
         * @param  {string} format      Format string
         * @param  {Boolean} returnObj  Flag to indicate whether to return object or string
         * @return {(string|Object)}    Formatted duration string or object with duration members
         */
        formatDurationCustom: function (time, format, returnObj) {
            return _appWrapper.getHelper('format').formatDurationCustom(time, format, returnObj);
        },

        /**
         * Formats date based on options
         *
         * @method
         * @memberOf mixins.appMethods
         * @param  {Date}       date            Date value to format
         * @param  {Object}     options         Date format options
         * @param  {Boolean}    includeTime     Flag to indicate whether to include time
         * @return {string}                     Formatted date string
         */
        formatDate: function (date, options, includeTime) {
            return _appWrapper.getHelper('format').formatDate(date, options, includeTime);
        },

        /**
         * Formats time based on options
         *
         * @method
         * @memberOf mixins.appMethods
         * @param  {Date}       date            Date value to format
         * @param  {Object}     options         Date format options
         * @param  {Boolean}    includeDate     Flag to indicate whether to include date
         * @return {string}                     Formatted time string
         */
        formatTime: function (date, options, includeDate) {
            return _appWrapper.getHelper('format').formatTime(date, options, includeDate);
        },

        /**
         * Format date normalized (Y-m-d H:i:s format)
         *
         * @method
         * @memberOf mixins.appMethods
         * @param  {Date}       date            Date value to format
         * @param  {Object}     options         Date format options
         * @param  {Boolean}    includeTime     Flag to indicate whether to include time
         * @param  {Boolean}    omitSeconds     Flag to indicate whether to omit seconds
         * @return {string}                     Formatted date string
         */
        formatDateNormalize: function (date, options, includeTime, omitSeconds) {
            return _appWrapper.getHelper('format').formatDateNormalize(date, options, includeTime, omitSeconds);
        },

        /**
         * Format time normalized (Y-m-d H:i:s format)
         *
         * @method
         * @memberOf mixins.appMethods
         * @param  {Date}       date            Date value to format
         * @param  {Object}     options         Date format options
         * @param  {Boolean}    includeDate     Flag to indicate whether to include date
         * @param  {Boolean}    omitSeconds     Flag to indicate whether to omit seconds
         * @return {string}                     Formatted time string
         */
        formatTimeNormalize: function (date, options, includeDate, omitSeconds) {
            return _appWrapper.getHelper('format').formatTimeNormalize(date, options, includeDate, omitSeconds);
        },

        /**
         * Adds zeros until value length is equal to maxLength
         *
         * @method
         * @memberOf mixins.appMethods
         * @param {mixed}  value        Starting value
         * @param {string} maxLength    Maximum return value string length
         * @return {string}             Value with added zeros
         */
        addZeros: function (value, maxLength) {
            return _appWrapper.getHelper('format').addZeros(value, maxLength);
        },

        /**
         * Returns base name of the file
         *
         * @method
         * @memberOf mixins.appMethods
         * @param  {string} file File path
         * @return {string}      FIle base name
         */
        basename: function(file){
            return path.basename(file);
        }
    }
};
exports.mixin = MixinAppMethods;