module.exports = function (context, input) {
    var message = {
        "personalizations": [
            { "to": [
                { "email": "robert.hanson@solutiondesign.com" }
                ]
            }
            ],
        from: { email: "sender@contoso.com" },
        subject: "Azure news",
        content: [{
            type: 'text/plain',
            value: 'hello there'
        }]
    };
    console.log("we just ran");
    context.done(null, message);
};