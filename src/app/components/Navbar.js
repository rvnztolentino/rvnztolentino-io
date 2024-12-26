'use client'

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed lg:flex items-center top-0 left-0 xs:right-0 xs:w-full lg:h-full lg:w-[300px] 2xl:w-[450px] xs:border-b lg:border-r border-slate-300 text-gray">
      <div className="flex justify-between items-center w-full p-4 lg:hidden">
        <div className="font-playfair-display text-dark-gray">
          <Link href="/">renz</Link>
        </div>
        <button onClick={toggleMenu} className="flex flex-col justify-center items-center">
          <Image src="/hamburger-menu.svg" width={30} height={30} alt="gif" />
        </button>
      </div>
      <div className={`lg:flex lg:flex-col lg:items-end lg:space-y-4 xs:space-x-4 xs:justify-between xs:mx-[20px] lg:mx-[-140px] 2xl:mx-[-280px] xs:mt-4 lg:mt-[-180px] ${isOpen ? 'block' : 'hidden'} lg:block`}>
        <ul className="flex flex-col lg:flex lg:flex-col lg:items-end xs:space-x-4 xs:space-y-4 xs:justify-between mb-4 text-right">
          <Link href="/2025">
            <button className="text-left lg:w-0 hover:text-black hover:rounded-md transition-all duration-300 ease-in-out">2025</button>
          </Link>
          <Link href="/about">
            <button className="text-left lg:w-0 hover:text-black hover:rounded-md transition-all duration-300 ease-in-out">about</button>
          </Link>
          <Link href="/blog">
            <button className="text-left lg:w-0 hover:text-black hover:rounded-md transition-all duration-300 ease-in-out">blog</button>
          </Link>
          <Link href="https://linktr.ee/rvnztolentino">
            <button className="text-left lg:w-0 hover:text-black hover:rounded-md transition-all duration-300 ease-in-out">linktree</button>
          </Link>
        </ul>
        <nav className='hidden lg:block'>
          <ul className="flex lg:flex-col lg:items-end xs:space-x-4 lg:space-y-4 xs:justify-between xs:mx-[20px] lg:mx-[-300px] 2xl:mx-[-550px] xs:mt-4 lg:mt-[-180px] text-right">
            <Link href="/">
              <button className="font-playfair-display text-black text-left w-0 mb-4">renz</button>
            </Link>
            <Link href="/2025">
              <button className="text-left lg:w-0 hover:text-black hover:rounded-md transition-all duration-300 ease-in-out">2025</button>
            </Link>
            <Link href="/about">
              <button className="text-left lg:w-0 hover:text-black hover:rounded-md transition-all duration-300 ease-in-out">about</button>
            </Link>
            <Link href="/blog">
              <button className="text-left lg:w-0 hover:text-black hover:rounded-md transition-all duration-300 ease-in-out">blog</button>
            </Link>
            <Link href="https://linktr.ee/rvnztolentino">
              <button className="text-left lg:w-0 hover:text-black hover:rounded-md transition-all duration-300 ease-in-out">linktree</button>
            </Link>
          </ul>
        </nav>
      </div>
    </nav>
  );
};

export default Navbar;
