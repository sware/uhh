var rest = require('restler');

var Wit = {
    process: function(sentence, callback) {
        rest.get('https://api.wit.ai/message',
            {
                query: {
                    q: sentence
                },
                headers: {
                    Authorization: "Bearer " + process.env['WIT_TOKEN']
                }
            }).on('complete', function(result) {
                if (result instanceof Error) {
                    console.log('Wit Error:', result.message);
                } else {
                    callback(result);
                }
            });
    }
};

Wit.process("get rid of file", function(witResult) {
    console.log("WIT RESULT:", witResult)
});