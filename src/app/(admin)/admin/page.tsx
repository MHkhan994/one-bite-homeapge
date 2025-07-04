import React from "react";

import { Contact } from "@/types/contact";
import ContactsTable from "@/components/admin/ContactsTable";

const AdminPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ page: string; limit: string }>;
}) => {
  const fetchOrders = async (page: string, limit: string) => {
    try {
      // Option 1: Using URL constructor (recommended)
      const url = new URL(`${process.env.NEXT_PUBLIC_DOMAIN}/api/contact`);
      url.searchParams.append("page", page || "1");
      url.searchParams.append("limit", limit || "20");

      // Option 2: Using template literals (alternative)
      // const url = `${process.env.NEXT_PUBLIC_DOMAIN}/api/contact?page=${page}&limit=${limit}`;

      const res = await fetch(url.toString(), {
        method: "GET",
        headers: {
          // Add your headers here
        },
      });
      const data = await res.json();
      return data;
    } catch (err) {
      console.log(err);
    }
  };

  const params = await searchParams;
  console.log(params);

  // Provide default values if not present
  const page = params.page || "1";
  const limit = params.limit || "10";

  const contacts: Contact[] = (await fetchOrders(page, limit))?.data || [];

  return (
    <div className="my-container min-h-screen py-2">
      <h2 className="text-2xl text-black py-2 font-semibold">Order Messages</h2>
      <ContactsTable data={contacts} />
    </div>
  );
};

export default AdminPage;
