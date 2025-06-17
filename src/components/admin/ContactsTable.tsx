"use client";
import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Contact } from "@/types/contact";
import { format } from "date-fns";
import { Button } from "@/components/ui/button";
import { Eye, Pencil } from "lucide-react";
import ViewContact from "./ViewContact";
import UpdateContactModal from "./UpdateContact";

const ContactsTable = ({ data }: { data: Contact[] }) => {
  const [viewContact, setViewContact] = useState<Contact | null>(null);
  const [editContact, setEditContact] = useState<Contact | null>(null);
  return (
    <div>
      <Table>
        <TableHeader className="bg-primary/20">
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Phone</TableHead>
            <TableHead>Message</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Created At</TableHead>
            <TableHead>Updated At</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.length > 0 ? (
            data?.map((contact) => (
              <TableRow key={contact._id} className="bg-foreground">
                <TableCell>{contact.name}</TableCell>
                <TableCell>{contact.email}</TableCell>
                <TableCell>{contact.phone}</TableCell>
                <TableCell>{contact.message}</TableCell>
                <TableCell>{contact.status}</TableCell>
                <TableCell>
                  {format(new Date(contact.createdAt), "PPp")}
                </TableCell>
                <TableCell>
                  {format(new Date(contact.updatedAt), "PPp")}
                </TableCell>
                <TableCell>
                  <div className="flex gap-2">
                    <Button
                      onClick={() => setViewContact(contact)}
                      size={"icon"}
                      variant={"secondary"}
                      className="bg-black text-white"
                    >
                      <Eye />
                    </Button>
                    <Button
                      onClick={() => setEditContact(contact)}
                      size={"icon"}
                      variant={"default"}
                      className="text-white"
                    >
                      <Pencil />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={7} className="text-center">
                No data available
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
      <ViewContact
        isModalOpen={viewContact !== null}
        setIsModalOpen={() => setViewContact(null)}
        selectedContact={viewContact}
      />
      <UpdateContactModal
        isOpen={editContact !== null}
        contact={editContact}
        onClose={() => setEditContact(null)}
        onUpdate={() => console.log("hello")}
      />
    </div>
  );
};

export default ContactsTable;
