require("dotenv").config();
const nodemailer = require("nodemailer");
const token = require("../../token.json");
const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;

const email = process.env.EMAIL;
const port = process.env.PORT_EMAIL;
const smtp = process.env.SMTP;

module.exports = async (emailContent, cb) => {
  try {
    const oauth2Client = new OAuth2(
      token.client_id,
      token.client_secret,
      "https://developers.google.com/oauthplayground"
    );

    oauth2Client.setCredentials({
      refresh_token: token.refresh_token,
    });

    const accessToken = await new Promise((resolve, reject) => {
      oauth2Client.getAccessToken((err, token) => {
        if (err) {
          reject("Failed to create access token :(");
        }
        resolve(token);
      });
    });

    let transporter = nodemailer.createTransport({
      service: "gmail.googleapis.com",
      host: smtp,
      port: port,
      secure: true,
      auth: {
        type: "OAuth2",
        user: email,
        scope: "https://mail.google.com/",
        accessToken: accessToken,
        clientId: token.client_id,
        clientSecret: token.client_secret,
        refreshToken: token.refresh_token,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    await transporter.verify();

    transporter.sendMail(emailContent, (error, info) => {
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
      status: 500,
      error,
    };
  }
};
