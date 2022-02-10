const { createTransporter } = require("../helpers/google_transporter");

exports.sendMail = async (req, res, next) => {
  const sender = req.body.email;
  const mailSubject = req.body.subject;
  const mailBody = req.body.message;

  let mailOptions = {
    from: sender,
    to: process.env.MAIL_EMAIL,
    subject: mailSubject,
    text: mailBody,
  };

  try {
    let emailTransporter = await createTransporter();

    emailTransporter.sendMail(mailOptions, function (err, data) {
      if (err) {
        console.log("Error: " + err);
        res.status(400).json(err);
      } else {
        console.log("Email sent successfully");
        res.status(200).json(mailOptions);
      }
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getMails = (req, res, next) => {
  res.send("get respond with a resource");
};
