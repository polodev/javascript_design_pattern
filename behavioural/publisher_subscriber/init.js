define(function (require) {
    return {
        init : function() {
            var moduleA = require('moduleA');
            var moduleB = require('moduleB');
            moduleB.publishEvent();
            moduleB.publishEvent();
        }
    }
})