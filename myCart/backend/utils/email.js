const nodemailer = require("nodemailer");
const sendEmail = async (email, resetlink) => {
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "shivajitestmail@gmail.com",
            pass: "eznm cmba epfv szmy",
        },
    });

    const mailOptions = {
        from: "shivajitestmail@gmail.com",
        to: `${email}`,
        subject: "Mail for Password Recovery",
        html: `
       ${resetlink}
       `,
    };

    transporter.sendMail(mailOptions, (err, res) => {
        if (err) throw err + "error from here only";
    });
};

module.exports = sendEmail;
