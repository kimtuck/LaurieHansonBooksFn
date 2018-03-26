/*https://sendgrid.com/docs/Classroom/Send/v3_Mail_Send/personalizations.html*/

module.exports = function (context, input) {
    var parameters = input.body;

    var message = {
        "personalizations": [
            {
                "to": [{"email": "robert.hanson@solutiondesign.com"}],
                "substitutions": {
                    "-name-": parameters.name,
                    "-email-": parameters.email,
                    "-books-": parameters.books,
                    "-message-": parameters.message
                }
            }
        ],
        from: { email: "BookSign@LaurieHansonBooks.com" },
        subject: "Book Sign Form",
        template_id: 'fb97c738-150c-40db-ba12-cd0051ddc6c4'
    };
    context.log(message);
    context.done(null, message);
};