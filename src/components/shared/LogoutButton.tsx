"use client";
import React from "react";
import Cookies from "js-cookie";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

const LogoutButton = async () => {
  const router = useRouter();
  return (
    <Button
      onClick={() => {
        Cookies.remove("one_bite_token");
        router.push("/");
      }}
    >
      Logout
    </Button>
  );
};

export default LogoutButton;
