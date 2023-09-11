import { error } from "@sveltejs/kit";
import MailService from "../../../back/services/emails/MailService.js";
import config from "../../../../config.json";

/** @type {import('./$types').RequestHandler} */
export async function POST({ request: req }) {
  const email = await req.json();

  const typeContact = email.type;
  let sendTo = "contact@projectiontransition.fr";
  if (typeContact === "dev") {
    sendTo = "jbperidy@hotmail.fr";
  }
  if (typeContact === "presse") {
    sendTo = "presse@projectiontransition.fr";
  }

  const mailInfo = {
    to: sendTo,
    subject: "Contact web // " + email.subject,
    template: "contactEmail",
    context: {
      email: email.email,
      body: email.body.split("\n"),
      subject: email.subject,
      nom: email.nom,
      prenom: email.prenom,
    },
  };
  const mailService = new MailService(
    config.MAIL_HOST,
    config.MAIL_PORT,
    config.MAIL_USER,
    config.MAIL_PASS
  );
  await mailService.sendMail(mailInfo);

  return new Response("Mail envoyé");
}
