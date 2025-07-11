"use client";
import { useRouter } from "next/navigation";
import React from "react";

const LimitSelector = ({
  slug,
  currentLimit,
}: {
  slug: string;
  currentLimit: number;
}) => {
  const limits = [10, 20, 30, 50];

  const router = useRouter();

  return (
    <div className="flex items-center gap-2">
      <span className="text-sm text-gray">Items per page:</span>
      <select
        defaultValue={currentLimit}
        onChange={(e) => router.push(`/${slug}?page=1&limit=${e.target.value}`)}
        className="px-3 py-1 border rounded-md bg-background text-dark-gray text-sm"
      >
        {limits.map((limit) => (
          <option key={limit} value={limit}>
            {limit}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LimitSelector;
