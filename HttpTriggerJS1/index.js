/*https://sendgrid.com/docs/Classroom/Send/v3_Mail_Send/personalizations.html*/

module.exports = function (context, input) {
    var parameters = input.body;

    var message = {
        "personalizations": [
            {
                "to": [{"email": "robert.hanson@solutiondesign.com"}],
                "substitutions": {
                    "-name-": parameters.name,
                    "-school-": paramters.school,
                    "-email-": parameters.email,
                    "-message-": parameters.message
                }
            }
        ],
        from: { email: "TeacherContact@LaurieHansonBooks.com" },
        subject: "Teacher Contact Request",
        template_id: '2675ca4b-a347-4bd3-8891-54b1270e2ef2'
    };
    context.log(message);
    context.done(null, message);
};