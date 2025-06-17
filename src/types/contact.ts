// Type for the status field
export type ContactStatus =
  | "pending"
  | "contacted"
  | "ordered"
  | "delivered"
  | "closed";

// Type for sort order
type SortOrder = "asc" | "desc";

// Type for sort by fields
type SortBy = "createdAt" | "updatedAt" | "name" | "email" | "status";

// Interface for a single contact
export interface Contact {
  _id: string;
  name: string;
  email: string;
  phone: string;
  message: string;
  status: ContactStatus;
  createdAt: string; // ISO date string
  updatedAt: string; // ISO date string
  __v: number; // Mongoose version key
}

// Interface for pagination details
interface Pagination {
  currentPage: number;
  totalPages: number;
  totalCount: number;
  limit: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
  nextPage: number | null;
  prevPage: number | null;
}

// Interface for filters
interface Filters {
  status: ContactStatus | null;
  search: string | null;
  email: string | null;
  dateFrom: string | null; // ISO date string or null
  dateTo: string | null; // ISO date string or null
  sortBy: SortBy;
  sortOrder: SortOrder;
}

// Interface for the full API response
interface ApiResponse {
  success: boolean;
  data: Contact[];
  pagination: Pagination;
  filters: Filters;
}
