import nodemailer from "nodemailer";
import hbs from "nodemailer-express-handlebars";
import path from "path";

const __dir = path.resolve();

class MailService {
  constructor(host, port, user, pass) {
    const options = {
      viewEngine: {
        partialsDir: __dir + "/src/back/services/emails/views/partials",
        layoutsDir: __dir + "/src/back/services/emails/views/layouts",
        extname: ".hbs",
      },
      extName: ".hbs",
      viewPath: "src/back/services/emails/views",
    };

    this._transporter = nodemailer.createTransport({
      host,
      port,
      auth: { user, pass },
    });

    this._transporter.use("compile", hbs(options));
  }
  sendMail({ to, subject, template, context, attachments }) {
    return this._transporter.sendMail({
      to,
      from: this.user,
      subject,
      template,
      context,
      attachments,
    });
  }
}

export default MailService;
