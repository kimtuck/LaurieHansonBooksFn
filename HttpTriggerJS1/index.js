module.exports = function (context, input) {
    context.log("input", input)
    var message = {
        "personalizations": [
            { "to": [
                { "email": "robert.hanson@solutiondesign.com" }
                ]
            }
            ],
        from: { email: "SomeSender@contoso.com" },
        subject: "Azure news",
        content: [{
            type: 'text/plain',
            value: 'hello there'
        }]
    };
    context.log("we just ran");
    context.done(null, message);
};