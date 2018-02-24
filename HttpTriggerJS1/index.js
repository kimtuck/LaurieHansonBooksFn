module.exports = function (context, input) {
    //context.log("input", input)

    var parameters = input.body;
    context.log(parameters);

    var message = {
        "personalizations": [
            { "to": [
                { "email": "robert.hanson@solutiondesign.com" }
                ]
            }
            ],
        from: { email: "sender@contoso.com" },
        subject: "Azure news",
        template_id: '2675ca4b-a347-4bd3-8891-54b1270e2ef2'
    };
    context.log("we just ran");
    context.done(null, message);
};