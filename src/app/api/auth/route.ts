import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, password } = body;

    if (email === "contact@oneheartbd.com" && password === "oneheartbd.com") {
      return Response.json(
        {
          success: true,
        },
        {
          status: 200,
        }
      );
    }
  } catch (error) {
    console.error("Email sending error:", error);
    return Response.json(
      { success: false, error: "Failed to send email" },
      { status: 500 }
    );
  }
}
