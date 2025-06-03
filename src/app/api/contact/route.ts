// pages/api/contact.ts
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function POST(req: any) {
  const { email, phone, message, name } = req.body;

  try {
    await resend.emails.send({
      from: `${name}`,
      to: "your-email@example.com",
      subject: "New Contact Form Submission",
      html: `<p><strong>Email:</strong> ${email}</p>
             <p><strong>Phone:</strong> ${phone}</p>
             <p><strong>Message:</strong> ${message}</p>`,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error("Email sending error:", error);
    return Response.json({ error: "Email not sent" });
  }
}
