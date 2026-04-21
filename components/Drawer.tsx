"use client"
import React from "react";
import { IoMenuSharp } from "react-icons/io5";
import { X } from "lucide-react";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/drawer";

const DrawerMenu = () => {
  return (
    <Drawer direction="right">
      {/* Menu Button */}
      <DrawerTrigger asChild>
        <button className="text-white">
          <IoMenuSharp size={30} />
        </button>
      </DrawerTrigger>

      {/* Drawer */}
      <DrawerContent className="h-screen w-[300px] ml-auto rounded-l-3xl border-l border-white/10 bg-black/95 text-white backdrop-blur-xl">
        
        {/* Top Section */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
          <h2 className="text-lg font-semibold tracking-wide">
            Menu
          </h2>

          <DrawerClose asChild>
            <button className="rounded-full p-2 hover:bg-white/10 transition">
              <X size={20} />
            </button>
          </DrawerClose>
        </div>

        {/* Nav Links */}
        <div className="flex flex-col px-6 py-6 gap-5 text-lg font-medium">
          <a
            href="#services"
            className="border-b border-white/10 pb-3 hover:text-blue-400 transition"
          >
            Services
          </a>

          <a
            href="#about"
            className="border-b border-white/10 pb-3 hover:text-blue-400 transition"
          >
            About
          </a>

          <a
            href="#why-us"
            className="border-b border-white/10 pb-3 hover:text-blue-400 transition"
          >
            Why Us
          </a>

          <a
            href="#contact"
            className="border-b border-white/10 pb-3 hover:text-blue-400 transition"
          >
            Contact
          </a>
        </div>

        {/* Bottom CTA */}
        <div className="mt-auto px-6 pb-8">
          <a
            href="#contact"
            className="block w-full rounded-full bg-white py-3 text-center font-semibold text-black hover:scale-[1.02] transition"
          >
            Get In Touch
          </a>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default DrawerMenu;
