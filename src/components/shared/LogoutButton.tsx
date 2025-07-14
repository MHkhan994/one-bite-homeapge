"use client";
import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

const LogoutButton = () => {
  const router = useRouter();
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  if (!hydrated) {
    return <Button>Logout</Button>;
  }

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
