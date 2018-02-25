module.exports = function (context, input) {

    var extend = function() {
        var extended = {};

        for(key in arguments) {
            var argument = arguments[key];
            for (prop in argument) {
                if (Object.prototype.hasOwnProperty.call(argument, prop)) {
                    extended[prop] = argument[prop];
                }
            }
        }

        return extended;
    };

    var parameters = input.body;

    var message = {
        "personalizations": [
            { "to": [
                { "email": "robert.hanson@solutiondesign.com" }
                ]
            },
            {
                "sub": [
                    {"-name-": ["john"]}
                ]
            }
        ],
        "sub": {
            "-name-": [
                "John",
                "Jane"
            ],
            "-customerID-": [
                "1234",
                "5678"
            ],
            "-salesContact-": [
                "Jared",
                "Ben"
            ],
            "-contactPhoneNumber-": [
                "555.555.5555",
                "777.777.7777"
            ],
            "-time-": [
                "3:00pm",
                "5:15pm"
            ]
        },
        from: { email: "sender@contoso.com" },
        subject: "Azure news",
        template_id: '2675ca4b-a347-4bd3-8891-54b1270e2ef2'
    };
    message = extend(message, parameters);
    context.log(message);

    context.log("we just ran");
    context.done(null, message);
};