define(function (require) {
    var pubSub = require('pubsub');
    var subscriptions;
    subscriptions = pubSub.subscribe('atopic', function (data) {
        console.log('a topic was published with data', data.something);
        subscriptions.dispose();
    })
})