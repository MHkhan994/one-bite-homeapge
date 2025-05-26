import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { CircleArrowRight } from "lucide-react";

const OrderButton = () => {
  return (
    <Link href={"/order"} className="cursor-pointer">
      <Button className="hind-siliguri-medium text-sm text-white cursor-pointer">
        এখনই অর্ডার করুন <CircleArrowRight size={18} />
      </Button>
    </Link>
  );
};

export default OrderButton;
