module.exports = function (context, input) {
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
            value: input
        }]
    };
    context.log("we just ran");
    context.done(null, message);
};