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
        from: { email: "SomeSender@contoso.com" },
        subject: "Azure news"
    };
    context.log("we just ran");
    context.done(null, message);
};