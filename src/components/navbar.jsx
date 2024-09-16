"use client";
import { useState } from "react";
import { menuItems } from "@/lib/stats";
import { MdDehaze, MdClose } from "react-icons/md";
import React from "react";
import { Button } from "./ui/button";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="bg-white shadow-sm text-black">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">LOGO</div>
        {/*  Hamburger menu */}
        <div className="md:hidden">
          <Button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            {isOpen ? (
              <MdClose className="h-6 w-6" />
            ) : (
              <MdDehaze className="h-6 w-6" />
            )}
          </Button>
        </div>
        <div className="hidden md:flex space-x-4">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-gray-700 hover:text-gray-900 font-bold"
            >
              {item.name}
            </a>
          ))}
        </div>
        {/*  Mobile menu */}
        {isOpen && (
          <div className="fixed inset-0 z-10 flex items-center justify-center bg-black bg-opacity-50">
            <div className="w-full max-w-md p-4 space-y-4 bg-white">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-gray-900 font-bold"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
