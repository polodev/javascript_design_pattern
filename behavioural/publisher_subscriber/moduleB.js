define(function (require) {
    var pubSub = require('pubsub');
    return {
        publishEvent : function () {
            var data = {
                something : 'something'
            }
            pubSub.publish('atopic', data);
        }
    }
})