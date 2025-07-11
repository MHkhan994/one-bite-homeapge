import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { PopoverClose } from "@radix-ui/react-popover";

const Navbar = () => {
  return (
    <div className="bg-secondary w-full">
      <div className="my-container border-b border-[#0000001A] p-2 pt-6 flex justify-between items-center lg:h-[90px] md:h-[70px] h-[70px]">
        <Link href={"/"}>
          <Image
            src={"/logo.png"}
            className="w-[110px] md:w-[130px] lg:w-[160px] "
            height={60}
            width={160}
            alt="logo"
          />
        </Link>
        <div className="sm:flex hidden items-center gap-5 text-dark text-lg font-medium">
          <Link href={"/#about-us"}>About Us</Link>
          <Link href={"/#about-product"}>Products </Link>
          <Link href={"/#pricing"}>Pricing</Link>
        </div>
        <Popover>
          <PopoverTrigger className="sm:hidden">
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 1.33335C0 0.965164 0.298477 0.666687 0.666667 0.666687H11.3333C11.7015 0.666687 12 0.965164 12 1.33335C12 1.70154 11.7015 2.00002 11.3333 2.00002H0.666667C0.298477 2.00002 0 1.70154 0 1.33335ZM0 6.00002C0 5.63183 0.298477 5.33335 0.666667 5.33335H7.33333C7.70152 5.33335 8 5.63183 8 6.00002C8 6.36821 7.70152 6.66669 7.33333 6.66669H0.666667C0.298477 6.66669 0 6.36821 0 6.00002ZM0 10.6667C0 10.2985 0.298477 10 0.666667 10H11.3333C11.7015 10 12 10.2985 12 10.6667C12 11.0349 11.7015 11.3334 11.3333 11.3334H0.666667C0.298477 11.3334 0 11.0349 0 10.6667Z"
                fill="#011101"
              />
            </svg>
          </PopoverTrigger>
          <PopoverContent className="bg-background max-w-36">
            <div className="text-black space-y-3 flex flex-col text-start justify-start">
              <PopoverClose className="text-start">
                <Link href={"/#about-us"}>About Us</Link>
              </PopoverClose>
              <PopoverClose className="text-start">
                <Link href={"/#about-product"}>Products </Link>
              </PopoverClose>
              <PopoverClose className="text-start">
                <Link href={"/#pricing"}>Pricing</Link>
              </PopoverClose>
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
};

export default Navbar;
