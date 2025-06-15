import SignInForm from "@/components/login/LoginForm";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import React from "react";

const AdminLayout = async ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const cookieStore = await cookies();

  const token = cookieStore.get("one_bite_token")?.value;

  console.log(token);
  if (!token) {
    redirect("/login"); // Redirects to login page
  }

  return <>{children}</>;
};

export default AdminLayout;
