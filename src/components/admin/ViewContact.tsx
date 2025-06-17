import type React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import type { Contact } from "@/types/contact";
import { Badge } from "@/components/ui/badge";
import { format } from "date-fns";
import { Mail, Phone, Calendar, MessageSquare, User } from "lucide-react";

interface ViewContactProps {
  isModalOpen: boolean;
  setIsModalOpen: (open: boolean) => void;
  selectedContact: Contact | null;
}

const ViewContact: React.FC<ViewContactProps> = ({
  isModalOpen,
  setIsModalOpen,
  selectedContact,
}) => {
  if (!selectedContact) return null;

  const getStatusBadge = (status: string) => {
    const statusConfig = {
      pending: { className: "bg-yellow-100 text-yellow-800" },
      contacted: { className: "bg-blue-100 text-blue-800" },
      resolved: { className: "bg-green-100 text-green-800" },
      closed: { className: "bg-gray-100 text-gray-800" },
    };

    const config =
      statusConfig[status.toLowerCase() as keyof typeof statusConfig] ||
      statusConfig.pending;

    return (
      <Badge className={config.className}>
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </Badge>
    );
  };

  return (
    <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <User className="h-5 w-5" />
            Contact Details
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-muted-foreground">
                Name
              </label>
              <p className="text-lg font-semibold">{selectedContact.name}</p>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-muted-foreground">
                Status
              </label>
              <div>{getStatusBadge(selectedContact.status)}</div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                <Mail className="h-4 w-4" />
                Email
              </label>
              <p className="font-mono text-sm">{selectedContact.email}</p>
            </div>

            {selectedContact.phone && (
              <div className="space-y-2">
                <label className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  Phone
                </label>
                <p className="font-mono text-sm">{selectedContact.phone}</p>
              </div>
            )}
          </div>

          <div className="space-y-2 ">
            <label className="text-sm font-medium text-muted-foreground flex items-center gap-2">
              <MessageSquare className="h-4 w-4" />
              Message
            </label>
            <div className="bg-foreground rounded-lg p-4">
              <p className="text-sm whitespace-pre-wrap">
                {selectedContact.message}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t">
            <div className="space-y-2">
              <label className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                Created At
              </label>
              <p className="text-sm">
                {format(new Date(selectedContact.createdAt), "PPp")}
              </p>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                Updated At
              </label>
              <p className="text-sm">
                {format(new Date(selectedContact.updatedAt), "PPp")}
              </p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ViewContact;
