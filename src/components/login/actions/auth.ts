"use server";

import { cookies } from "next/headers";
import { z } from "zod";
import jwt from "jsonwebtoken";

const signInSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export async function signInAction(formData: {
  email: string;
  password: string;
}) {
  const validatedFields = signInSchema.safeParse({
    email: formData.email,
    password: formData.password,
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { email, password } = validatedFields.data;

  // Here you would typically validate credentials against your database
  // For demo purposes, we'll simulate success/failure
  if (email === "contact@oneheartbd.com" && password === "oneheartbd.com") {
    const token = jwt.sign(
      {
        email,
        password,
      },
      "secret",
      { expiresIn: "2d" }
    );
    (await cookies()).set("one_bite_token", token);
    return {
      success: true,
      message: "Sign in successful!",
    };
  }

  return {
    errors: {
      email: ["Invalid email or password"],
    },
  };
}
