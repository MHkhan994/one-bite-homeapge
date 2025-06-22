"use client";
import Newsletter from "@/components/homepage/Newsletter";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CircleArrowRight, Mail, Phone } from "lucide-react";
import Image from "next/image";
import React from "react";
import { z } from "zod";

const formSchema = z.object({
  email: z.string().min(2).max(50),
  phone: z.string().min(2),
  message: z.string().optional(),
  name: z.string(),
});

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";

const OrderPage = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      name: "",
      phone: "",
      message: "",
    },
  });

  const handleSubmit = async (values: z.infer<typeof formSchema>) => {
    const { email, phone, message, name } = values;

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
        phone,
        name,
        message,
      }),
    });

    const data = await res.json();
    if (data.success) alert("Message sent!");
    else alert("Failed to send message");
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="md:my-10 my-5 grid grid-cols-1 xl:grid-cols-2 gap-8 my-container items-center">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)}>
            <div className="text-black md:space-y-4 space-y-2">
              <h2 className="xl:text-5xl lg:text-4xl md:text-3xl text-2xl font-semibold xl:leading-16 md:pb-4 pb-2">
                আপনি কি আমাদের Onebite Premium ক্রয় করতে চান?
              </h2>
              <div className="flex md:flex-row flex-col md:gap-4 gap-2 w-full">
                <div className="bg-[#078B001A] rounded-lg p-5 gap-3 flex flex-col justify-center w-full py-2 min-h-[100px]">
                  <p className="flex text-gray font-medium text-base items-center gap-2">
                    <Mail /> ইমেইল করুন
                  </p>
                  <h3 className="text-black font-medium lg:text-2xl text-lg">
                    greenadnan01@gmail.com
                  </h3>
                </div>
                <div className="bg-[#FF4A001A] rounded-lg flex flex-col justify-center gap-3 p-5 py-2 w-full min-h-[100px]">
                  <p className="flex text-gray font-medium text-base items-center gap-2">
                    <Phone />
                    কল করুন
                  </p>
                  <h3 className="text-black font-medium lg:text-2xl text-lg">
                    +8801754123456
                  </h3>
                </div>
              </div>
              <div className="flex md:flex-row flex-col gap-4 w-full">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormControl>
                        <Input
                          placeholder="নাম *"
                          {...field}
                          className="w-full"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormControl>
                        <Input
                          placeholder="ইমেইল *"
                          {...field}
                          className="w-full"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="আপনার ফোন নম্বর *" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Textarea
                        {...field}
                        className="min-h-36"
                        placeholder="একটা বার্তা লিখুন..."
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button className="hind-siliguri-semibold rounded-xl justify-center text-sm text-white cursor-pointer h-[46px] flex items-center">
                সাবমিট করুন <CircleArrowRight size={20} />
              </Button>
            </div>
          </form>
        </Form>
        <div>
          <Image
            className="w-full h-full rounded-4xl object-cover"
            src={"/banner/section-1-extra.png"}
            height={550}
            width={521}
            alt="secton-1"
          />
        </div>
        {/* <Image
          className="z-10 absolute h-[550px] top-16 w-[550px] right-[100px] object-cover rounded-l-4xl"
          src={"/banner/section-1-extra.png"}
          height={550}
          width={521}
          alt="secton-1"
        /> */}
      </div>
      <Newsletter />
    </div>
  );
};

export default OrderPage;
