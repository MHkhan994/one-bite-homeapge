// src/app/api/contact/route.ts
import { Resend } from "resend";
import { NextRequest } from "next/server";
import connectDB from "@/lib/mongodb";
import contactModel from "./contact.model";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    // Connect to database
    await connectDB();

    const body = await request.json();
    const { email, phone, message, name } = body;

    // Validate required fields
    if (!email || !name || !phone) {
      return Response.json(
        { success: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Save to database first
    const contact = new contactModel({
      name: name.trim(),
      email: email.trim().toLowerCase(),
      phone: phone.trim(),
      message: message?.trim() || undefined,
    });

    const savedContact = await contact.save();

    // Send email
    await resend.emails.send({
      from: "onboarding@resend.dev", // Use your verified domain or resend's default
      // to: "greenadnan01@gmail.com",
      to: "khanmahmud994@gmail.com",
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
              <p style="margin: 4px 0 0 0; color: #e2e8f0; font-size: 14px; opacity: 0.7;">
                ID: ${savedContact._id}
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

    return Response.json({
      success: true,
      data: {
        id: savedContact._id,
        message: "Contact form submitted successfully",
      },
    });
  } catch (error: any) {
    console.error("Contact form submission error:", error);

    // Return appropriate error message
    if (error.name === "ValidationError") {
      const validationErrors = Object.values(error.errors).map(
        (err: any) => err.message
      );
      return Response.json(
        {
          success: false,
          error: "Validation failed",
          details: validationErrors,
        },
        { status: 400 }
      );
    }

    return Response.json(
      { success: false, error: "Failed to process contact form submission" },
      { status: 500 }
    );
  }
}

// GET method to retrieve contacts with pagination, filtering, and sorting
export async function GET(request: NextRequest) {
  try {
    await connectDB();

    const { searchParams } = new URL(request.url);

    // Pagination parameters
    const page = Math.max(1, parseInt(searchParams.get("page") || "1"));
    const limit = Math.min(
      100,
      Math.max(1, parseInt(searchParams.get("limit") || "10"))
    );
    const skip = (page - 1) * limit;

    // Filter parameters
    const status = searchParams.get("status");
    const search = searchParams.get("search");
    const email = searchParams.get("email");
    const dateFrom = searchParams.get("dateFrom");
    const dateTo = searchParams.get("dateTo");

    // Sort parameters
    const sortBy = searchParams.get("sortBy") || "createdAt";
    const sortOrder = searchParams.get("sortOrder") === "asc" ? 1 : -1;

    // Build query object
    const query: any = {};

    if (
      status &&
      ["pending", "contacted", "ordered", "delivered", "closed"].includes(
        status
      )
    ) {
      query.status = status;
    }

    if (email) {
      query.email = { $regex: email, $options: "i" };
    }

    if (search) {
      query.$or = [
        { name: { $regex: search, $options: "i" } },
        { email: { $regex: search, $options: "i" } },
        { message: { $regex: search, $options: "i" } },
      ];
    }

    if (dateFrom || dateTo) {
      query.createdAt = {};
      if (dateFrom) {
        query.createdAt.$gte = new Date(dateFrom);
      }
      if (dateTo) {
        query.createdAt.$lte = new Date(dateTo);
      }
    }

    // Build sort object
    const sort: any = {};
    const allowedSortFields = [
      "createdAt",
      "updatedAt",
      "name",
      "email",
      "status",
    ];
    if (allowedSortFields.includes(sortBy)) {
      sort[sortBy] = sortOrder;
    } else {
      sort.createdAt = -1; // Default sort
    }

    // Execute queries
    const [contacts, totalCount] = await Promise.all([
      contactModel.find(query).sort(sort).skip(skip).limit(limit).lean(),
      contactModel.countDocuments(query),
    ]);

    // Calculate pagination info
    const totalPages = Math.ceil(totalCount / limit);
    const hasNextPage = page < totalPages;
    const hasPrevPage = page > 1;

    return Response.json({
      success: true,
      data: contacts,
      pagination: {
        currentPage: page,
        totalPages,
        totalCount,
        limit,
        hasNextPage,
        hasPrevPage,
        nextPage: hasNextPage ? page + 1 : null,
        prevPage: hasPrevPage ? page - 1 : null,
      },
      filters: {
        status,
        search,
        email,
        dateFrom,
        dateTo,
        sortBy,
        sortOrder: sortOrder === 1 ? "asc" : "desc",
      },
    });
  } catch (error) {
    console.error("Error fetching contacts:", error);
    return Response.json(
      { success: false, error: "Failed to fetch contacts" },
      { status: 500 }
    );
  }
}
