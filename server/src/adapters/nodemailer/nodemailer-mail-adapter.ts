import nodemailer from "nodemailer";
import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "0422609fd34f54",
    pass: "302bcfb5c07751"
  }
});

export class NodemailerMailAdapter implements MailAdapter {
 async sendMail({ subject, body}: SendMailData) {
   await transport.sendMail({
     from: 'Equipe Feedget <oi@feedget>',
     to: 'Elisa Andrade <lisa.sandrade@gmail.com>',
     subject,
     html: body,
   });
 };
}