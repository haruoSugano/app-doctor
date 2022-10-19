const nodemailer = require("nodemailer");
const token = require("../../token.json");

const email = process.env.EMAIL;
const port = process.env.PORT_EMAIL;
const smtp = process.env.SMTP;


module.exports = async (emailContent, cb) => {
  try {

    let transporter = nodemailer.createTransport({
      host: smtp,
      port: port,
      secure: true,
      auth: {
        type: "OAuth2",
        user: email,
        scope: "https://www.googleapis.com/",
        clientId: token.client_id,
        clientSecret: token.client_secret,
        refreshToken: token.refresh_token
      },
    });

    await transporter.verify();

    await transporter.sendMail(emailContent, (error, info) => {
      if (error) {
        console.log(error);
        return cb(true, null);
      }
  
      return cb(false, info.response);
    });

    console.log("sucess");
    return { status: 200 };
    
  } catch (error) {
    console.log(error);
        return {
            status : 500,
            error
        }
  }
}
