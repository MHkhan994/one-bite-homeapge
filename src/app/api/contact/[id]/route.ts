import connectDB from "@/lib/mongodb";
import { NextRequest } from "next/server";
import mongoose from "mongoose";
import contactModel from "../contact.model";

export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await connectDB();

    // Await the params since it's now a Promise
    const { id } = await params;
    const body = await request.json();

    // Validate MongoDB ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return Response.json(
        { success: false, error: "Invalid contact ID" },
        { status: 400 }
      );
    }

    // Only allow updating status
    const allowedUpdates = ["status"];
    const updates = Object.keys(body);
    const isValidUpdate = updates.every((update) =>
      allowedUpdates.includes(update)
    );

    console.log(updates);

    if (!isValidUpdate) {
      return Response.json(
        {
          success: false,
          error: "Invalid update fields. Only 'status' can be updated.",
        },
        { status: 400 }
      );
    }

    const contact = await contactModel.findByIdAndUpdate(id, body, {
      new: true,
      runValidators: true,
    });

    if (!contact) {
      return Response.json(
        { success: false, error: "Contact not found" },
        { status: 404 }
      );
    }

    return Response.json({
      success: true,
      data: contact,
      message: "Contact updated successfully",
    });
  } catch (error: any) {
    console.error("Error updating contact:", error);

    if (error.name === "ValidationError") {
      const validationErrors = Object.values(error.errors).map(
        (err: any) => err.message
      );
      console.log(validationErrors);
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
      { success: false, error: "Failed to update contact" },
      { status: 500 }
    );
  }
}
