import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import LimitSelector from "./LimitSelector";

const Pagination = ({
  currentPage,
  slug,
  limit,
  totalItems,
}: {
  currentPage: number;
  slug: string;
  limit: number;
  totalItems: number;
}) => {
  const prevPage = currentPage - 1;
  const nextPage = currentPage + 1;
  const startItem = (currentPage - 1) * limit + 1;
  const endItem = Math.min(currentPage * limit, totalItems);
  const totalPages = Math.ceil(totalItems / limit);

  return (
    <div className="flex justify-between items-center gap-3 py-4">
      {/* Left: Item Count */}
      <div className="text-sm text-gray">
        Showing {startItem}-{endItem} of {totalItems} products
      </div>

      {/* Middle: Pagination Controls */}
      <div className="flex items-center gap-2">
        {currentPage >= 1 && totalPages !== 1 && (
          <Tooltip>
            <TooltipTrigger disabled={currentPage === 1}>
              <Link
                aria-disabled={currentPage === 1}
                href={`/${slug}?page=${prevPage}&limit=${limit}`}
                className="size-8 flex items-center justify-center bg-foreground rounded-md text-dark-gray"
              >
                <ChevronLeft className="w-5 h-5" />
              </Link>
            </TooltipTrigger>
            <TooltipContent>Previous Page</TooltipContent>
          </Tooltip>
        )}
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <Link
            key={page}
            href={`/${slug}?page=${page}&limit=${limit}`}
            className={`px-3 py-1 rounded-md ${
              page === currentPage
                ? "bg-primary text-white"
                : "bg-foreground hover:bg-primary text-dark-gray hover:text-white"
            }`}
          >
            {page}
          </Link>
        ))}
        {currentPage < totalPages && (
          <Tooltip>
            <TooltipTrigger>
              <Link
                href={`/${slug}?page=${nextPage}&limit=${limit}`}
                className="size-8 flex items-center justify-center bg-foreground rounded-md text-dark-gray"
              >
                <ChevronRight className="w-5 h-5" />
              </Link>
            </TooltipTrigger>
            <TooltipContent>Next Page</TooltipContent>
          </Tooltip>
        )}
      </div>
      <LimitSelector slug={slug} currentLimit={limit} />
    </div>
  );
};

export default Pagination;
