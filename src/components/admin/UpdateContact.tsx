"use client";
import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import {
  Loader2,
  User,
  Mail,
  Phone,
  MessageSquare,
  Calendar,
} from "lucide-react";
import { format } from "date-fns";
import type { Contact, ContactStatus } from "@/types/contact";
import { toast } from "sonner";

interface UpdateContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  contact: Contact | null;
  onUpdate: (updatedContact: Contact) => void;
}

const statusOptions: {
  value: ContactStatus;
  label: string;
  color: string;
}[] = [
  {
    value: "pending",
    label: "Pending",
    color: "bg-yellow-400 text-yellow-800",
  },
  {
    value: "contacted",
    label: "Contacted",
    color: "bg-blue-400 text-blue-800",
  },
  {
    value: "ordered",
    label: "Ordered",
    color: "bg-green-400 text-green-800",
  },
  {
    value: "delivered",
    label: "Delivered",
    color: "bg-purple-400 text-green-800",
  },
  { value: "closed", label: "Closed", color: "bg-red-400 text-gray-800" },
];

export default function UpdateContactModal({
  isOpen,
  onClose,
  contact,
  onUpdate,
}: UpdateContactModalProps) {
  const [status, setStatus] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (contact) {
      setStatus(contact.status);
    }
  }, [contact]);

  const handleUpdate = async () => {
    if (!contact || !status) return;

    setIsLoading(true);
    try {
      const response = await fetch(`/api/contact/${contact._id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status }),
      });

      console.log(response);

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to update contact");
      }

      if (data.success) {
        toast.success("Contact status updated successfully");
        onUpdate(data.data);
        onClose();
      } else {
        throw new Error(data.error || "Update failed");
      }
    } catch (error) {
      console.error("Error updating contact:", error);
      toast.error(
        error instanceof Error ? error.message : "Failed to update contact"
      );
    } finally {
      setIsLoading(false);
    }
  };

  const getCurrentStatusBadge = (currentStatus: string) => {
    const statusConfig = statusOptions.find(
      (option) => option.value === currentStatus
    );
    return statusConfig ? (
      <Badge className={`${statusConfig.color} text-white`}>
        {statusConfig.label}
      </Badge>
    ) : (
      <Badge variant="secondary">{currentStatus}</Badge>
    );
  };

  const hasChanges = contact && status !== contact.status;

  if (!contact) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 font-vietnam">
            <User className="h-5 w-5" />
            Update Contact Status
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          {/* Contact Information Display */}
          <div className="bg-muted/30 rounded-lg space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label className="text-sm font-medium text-muted-foreground font-vietnam">
                  Name
                </Label>
                <p className="font-semibold font-vietnam">{contact.name}</p>
              </div>
              <div className="space-y-2">
                <Label className="text-sm font-medium text-muted-foreground font-vietnam">
                  Current Status
                </Label>
                <div>{getCurrentStatusBadge(contact.status)}</div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label className="text-sm font-medium text-muted-foreground flex items-center gap-2 font-vietnam">
                  <Mail className="h-4 w-4" />
                  Email
                </Label>
                <p className="text-sm font-mono">{contact.email}</p>
              </div>
              {contact.phone && (
                <div className="space-y-2">
                  <Label className="text-sm font-medium text-muted-foreground flex items-center gap-2 font-vietnam">
                    <Phone className="h-4 w-4" />
                    Phone
                  </Label>
                  <p className="text-sm font-mono">{contact.phone}</p>
                </div>
              )}
            </div>

            <div className="space-y-2">
              <Label className="text-sm font-medium text-muted-foreground flex items-center gap-2 font-vietnam">
                <MessageSquare className="h-4 w-4" />
                Message
              </Label>
              <div className="bg-background rounded-md p-3 border">
                <p className="text-sm whitespace-pre-wrap font-hind">
                  {contact.message}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2 border-t">
              <div className="space-y-1">
                <Label className="text-xs text-muted-foreground flex items-center gap-1 font-vietnam">
                  <Calendar className="h-3 w-3" />
                  Created
                </Label>
                <p className="text-sm font-hind">
                  {format(new Date(contact.createdAt), "PPp")}
                </p>
              </div>
              <div className="space-y-1">
                <Label className="text-xs text-muted-foreground flex items-center gap-1 font-vietnam">
                  <Calendar className="h-3 w-3" />
                  Updated
                </Label>
                <p className="text-sm font-hind">
                  {format(new Date(contact.updatedAt), "PPp")}
                </p>
              </div>
            </div>
          </div>

          {/* Status Update Form */}
          <div className="space-y-4">
            <div className="space-y-2">
              <Label
                htmlFor="status"
                className="text-sm font-medium font-vietnam"
              >
                Update Status
              </Label>
              <Select
                key={status}
                defaultValue={contact.status || status}
                value={status}
                onValueChange={setStatus}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select status" />
                </SelectTrigger>
                <SelectContent>
                  {statusOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      <div className="flex items-center gap-2">
                        <div
                          className={`w-2 h-2 rounded-full ${option.color.split(" ")[0]}`}
                        />
                        <span className="font-hind">{option.label}</span>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {hasChanges && (
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full" />
                  <p className="text-sm text-blue-800 font-hind">
                    Status will be changed from{" "}
                    <span className="font-semibold">{contact.status}</span> to{" "}
                    <span className="font-semibold">{status}</span>
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        <DialogFooter className="gap-2">
          <Button
            variant="outline"
            onClick={onClose}
            disabled={isLoading}
            className="font-vietnam"
          >
            Cancel
          </Button>
          <Button
            onClick={handleUpdate}
            disabled={isLoading || !hasChanges}
            className="font-vietnam"
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Updating...
              </>
            ) : (
              "Update Status"
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
