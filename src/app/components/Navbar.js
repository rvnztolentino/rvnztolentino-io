"use client"

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed lg:flex items-center top-0 left-0 xs:right-0 xs:w-full lg:h-full lg:w-[300px] 2xl:w-[450px] xs:border-b lg:border-r border-slate-300 text-gray">
      <div className="flex justify-between items-center w-full p-4 mb-[-14px] lg:hidden">
        <div className="text-dark-gray">
          <Link href="/"><p className="text-left w-0">renz</p></Link>
        </div>
        <div className="text-dark-gray">
          <Popover>
            <PopoverTrigger><Menu className="mt-2 text-dark-gray"/></PopoverTrigger>
            <PopoverContent className="w-44">
              <ul className="flex flex-col lg:flex lg:flex-col lg:items-end xs:space-x-4 xs:space-y-4 xs:justify-between text-right text-gray">
                <Link href="/">
                  <button onClick={toggleMenu} className="text-left lg:w-0 hover:text-black hover:rounded-md transition-all duration-300 ease-in-out">home</button>
                </Link>
                <Link href="/about">
                  <button onClick={toggleMenu} className="text-left lg:w-0 hover:text-black hover:rounded-md transition-all duration-300 ease-in-out">about</button>
                </Link>
                <Link href="/blog">
                  <button onClick={toggleMenu} className="text-left lg:w-0 hover:text-black hover:rounded-md transition-all duration-300 ease-in-out">blog</button>
                </Link>
                <Link href="/projects">
                  <button onClick={toggleMenu} className="text-left lg:w-0 hover:text-black hover:rounded-md transition-all duration-300 ease-in-out">projects</button>
                </Link>
                <Link href="https://linktr.ee/rvnztolentino">
                  <button className="text-left lg:w-0 hover:text-black hover:rounded-md transition-all duration-300 ease-in-out">linktree</button>
                </Link>
              </ul>
            </PopoverContent>
          </Popover>
        </div>
      </div>
      <div className="fade-in-1 lg:flex lg:flex-col lg:items-end lg:space-y-4 xs:space-x-4 xs:justify-between xs:mx-[20px] lg:mx-[-140px] 2xl:mx-[-280px] xs:mt-4 lg:mt-[-50px] lg:block">
        <nav className="hidden lg:block">
          <ul className="flex lg:flex-col lg:items-end xs:space-x-4 lg:space-y-4 xs:justify-between xs:mx-[20px] lg:mx-[-350px] 2xl:mx-[-600px] xs:mt-4 lg:mt-[-140px] 2xl:mt-[-240px] text-right">
            <Link href="/">
              <p className="text-black mr-20 text-left w-0 mb-4">renz</p>
            </Link>
            <Link href="/">
              <p className="text-left mr-20 lg:w-0 hover:text-black hover:rounded-md transition-all duration-300 ease-in-out">home</p>
            </Link>
            <Link href="/about">
              <p className="text-left mr-20 lg:w-0 hover:text-black hover:rounded-md transition-all duration-300 ease-in-out">about</p>
            </Link>
            <Link href="/blog">
              <p className="text-left mr-20 lg:w-0 hover:text-black hover:rounded-md transition-all duration-300 ease-in-out">blog</p>
            </Link>
            <Link href="/projects">
              <p className="text-left mr-20 lg:w-0 hover:text-black hover:rounded-md transition-all duration-300 ease-in-out">projects</p>
            </Link>
            <Link href="https://linktr.ee/rvnztolentino">
              <Button 
                variant="outline" 
                className="text-left mt-2 rounded-md bg-white hover:bg-black text-black hover:text-white transition-all duration-300 ease-in-out">
                  linktree
                </Button>
            </Link>
          </ul>
        </nav>
      </div>
    </nav>

  );
};

export default Navbar;
