require(['init'], function (pubsub) {
    var examples = {
        pubsub : pubsub
    }
    window.runExample = function (example) {
        examples[example].init();
    }
})