import React from "react";

import { Contact } from "@/types/contact";
import ContactsTable from "@/components/admin/ContactsTable";

const AdminPage = async () => {
  const res = await fetch("http://localhost:3000/api/contact", {
    method: "GET",
  });
  const data = await res.json();

  const contacts: Contact[] = data?.data || [];

  return (
    <div className="my-container min-h-screen py-2">
      <h2 className="text-2xl text-black py-2 font-semibold text-center">
        Order Messages
      </h2>
      <ContactsTable data={contacts} />
    </div>
  );
};

export default AdminPage;
