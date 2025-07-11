import React from "react";
import { Contact } from "@/types/contact";
import ContactsTable from "@/components/admin/ContactsTable";
import LogoutButton from "@/components/shared/LogoutButton";

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
  const data = await fetchOrders(page, limit);
  const contacts: Contact[] = data?.data || [];
  const pagination = data?.pagination;

  return (
    <div className="my-container min-h-screen py-2">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl text-black py-2 font-semibold">
          Order Messages
        </h2>
        <LogoutButton />
      </div>
      <ContactsTable data={contacts} pagination={pagination} />
    </div>
  );
};

export default AdminPage;
