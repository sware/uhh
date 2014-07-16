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

var statement = process.argv.splice(2).join(" ");

Wit.process(statement, function(witResult) {
    console.log("WIT RESULT:", JSON.stringify(witResult, null, "\t"))
});