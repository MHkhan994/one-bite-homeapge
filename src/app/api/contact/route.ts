// src/app/api/contact/route.ts
import { Resend } from "resend";
import { NextRequest } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, phone, message, name } = body;

    // Validate required fields
    if (!email || !name || !phone) {
      return Response.json(
        { success: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: "onboarding@resend.dev", // Use your verified domain or resend's default
      to: "khanmahmud994@gmail.com", // Replace with your actual email
      subject: "New Contact Form Submission",
      replyTo: email, // This allows you to reply directly to the user
      html: `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>New Contact Form Submission</title>
        </head>
        <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333333; background-color: #f8fafc;">
          <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
            <!-- Header -->
            <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px 40px; text-align: center;">
              <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: 600; letter-spacing: -0.5px;">
                📧 New Contact Submission
              </h1>
              <p style="margin: 8px 0 0 0; color: #e2e8f0; font-size: 16px; opacity: 0.9;">
                Someone reached out through your contact form
              </p>
            </div>
            
            <!-- Content -->
            <div style="padding: 40px;">
              <!-- Contact Info Cards -->
              <div style="margin-bottom: 30px;">
                <!-- Name Card -->
                <div style="background-color: #f8fafc; border-left: 4px solid #3b82f6; padding: 20px; margin-bottom: 16px; border-radius: 0 8px 8px 0;">
                  <div style="display: flex; align-items: center; margin-bottom: 8px;">
                    <span style="font-size: 18px; margin-right: 8px;">👤</span>
                    <strong style="color: #1e293b; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px;">Full Name</strong>
                  </div>
                  <p style="margin: 0; font-size: 18px; color: #334155; font-weight: 500;">${name}</p>
                </div>
                
                <!-- Email Card -->
                <div style="background-color: #f0fdf4; border-left: 4px solid #10b981; padding: 20px; margin-bottom: 16px; border-radius: 0 8px 8px 0;">
                  <div style="display: flex; align-items: center; margin-bottom: 8px;">
                    <span style="font-size: 18px; margin-right: 8px;">📧</span>
                    <strong style="color: #1e293b; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px;">Email Address</strong>
                  </div>
                  <p style="margin: 0; font-size: 18px; color: #334155; font-weight: 500;">
                    <a href="mailto:${email}" style="color: #10b981; text-decoration: none;">${email}</a>
                  </p>
                </div>
                
                <!-- Phone Card -->
                <div style="background-color: #fef3c7; border-left: 4px solid #f59e0b; padding: 20px; margin-bottom: 16px; border-radius: 0 8px 8px 0;">
                  <div style="display: flex; align-items: center; margin-bottom: 8px;">
                    <span style="font-size: 18px; margin-right: 8px;">📱</span>
                    <strong style="color: #1e293b; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px;">Phone Number</strong>
                  </div>
                  <p style="margin: 0; font-size: 18px; color: #334155; font-weight: 500;">
                    <a href="tel:${phone}" style="color: #f59e0b; text-decoration: none;">${phone}</a>
                  </p>
                </div>
              </div>
              
              <!-- Message Section -->
              ${
                message
                  ? `
                <div style="margin-top: 30px;">
                  <div style="display: flex; align-items: center; margin-bottom: 16px;">
                    <span style="font-size: 20px; margin-right: 8px;">💬</span>
                    <h3 style="margin: 0; color: #1e293b; font-size: 18px; font-weight: 600;">Message</h3>
                  </div>
                  <div style="background-color: #f1f5f9; border-radius: 12px; padding: 24px; border: 1px solid #e2e8f0;">
                    <p style="margin: 0; font-size: 16px; line-height: 1.7; color: #475569; white-space: pre-wrap;">${message}</p>
                  </div>
                </div>
              `
                  : `
                <div style="margin-top: 30px; padding: 20px; background-color: #fef2f2; border-radius: 8px; border-left: 4px solid #ef4444;">
                  <p style="margin: 0; color: #7f1d1d; font-style: italic;">
                    <span style="margin-right: 8px;">ℹ️</span>
                    No message was provided with this submission.
                  </p>
                </div>
              `
              }
              
              <!-- Quick Actions -->
              <div style="margin-top: 40px; padding-top: 30px; border-top: 2px solid #e2e8f0;">
                <h3 style="margin: 0 0 20px 0; color: #1e293b; font-size: 16px; font-weight: 600;">Quick Actions</h3>
                <div style="display: flex; gap: 12px; flex-wrap: wrap;">
                  <a href="mailto:${email}" style="display: inline-block; background-color: #3b82f6; color: #ffffff; padding: 12px 20px; text-decoration: none; border-radius: 6px; font-weight: 500; font-size: 14px; margin-right: 10px;">
                    Reply via Email
                  </a>
                  <a href="tel:${phone}" style="display: inline-block; background-color: #10b981; color: #ffffff; padding: 12px 20px; text-decoration: none; border-radius: 6px; font-weight: 500; font-size: 14px;">
                    Call Now
                  </a>
                </div>
              </div>
            </div>
            
            <!-- Footer -->
            <div style="background-color: #f8fafc; padding: 20px 40px; text-align: center; border-top: 1px solid #e2e8f0;">
              <p style="margin: 0; color: #64748b; font-size: 14px;">
                This email was sent from your contact form on ${new Date().toLocaleDateString(
                  "en-US",
                  {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                  }
                )}
              </p>
            </div>
          </div>
        </body>
        </html>
      `,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error("Email sending error:", error);
    return Response.json(
      { success: false, error: "Failed to send email" },
      { status: 500 }
    );
  }
}
