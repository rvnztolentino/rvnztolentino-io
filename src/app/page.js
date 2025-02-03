import Image from "next/image"
import Link from "next/link";
import { Button } from "@/components/ui/button"
import { FileText, MousePointerClick, PencilLine } from 'lucide-react';

export default function Home() {
  return (
    <>
      <main className="fade-in-1 flex flex-col justify-center min-h-screen space-y-4 xs:w-4/5 lg:w-2/5 xs:mt-24 lg:mt-20 pb-24 mx-auto font-noto-sans text-left">
        <Image src="/cube.svg" width={70} height={70} alt="svg" className="" />

        {/* Title */}
        <h1 className="text-4xl text-dark-gray mt-20">Renz Tolentino</h1>

        {/* Description */}
        <p className="text-md text-gray mt-2">
          @rvnztolentino
        </p>

        {/* Border */}
        <p className="border-b border-light-gray-2"></p>

        {/* Content */}
        <p className="text-md text-dark-gray mt-2 pb-4">
          i&apos;m currently in the process of building and refining this space, deciding on the best content to showcase.
          updates are on the way, stay tuned! 🚀
        </p>

        <p className="text-lg text-dark-gray mt-2">Projects</p>
        <Link href="https://github.com/rvnztolentino/kaku-app">
          <Button 
            variant="outline" 
            className="block w-full text-left text-sm text-dark-gray xs:pt-[12px] lg:pt-[20px] xs:pb-[50px] lg:pb-[40px] rounded-md bg-white hover:bg-light-gray-3 transition-all duration-300 ease-in-out">
            <div className="lg:flex justify-between w-full items-center">
              <span className="flex items-center">
                <PencilLine className="mr-2" />
                Kaku App
              </span>
              <span className="text-light-gray">
                Dec. 24, 2024
              </span>
            </div>
          </Button>
        </Link>

        <Link href="https://github.com/rvnztolentino/NitroClicker">
          <Button 
            variant="outline" 
            className="block w-full text-left text-sm text-dark-gray xs:pt-[12px] lg:pt-[20px] xs:pb-[50px] lg:pb-[40px] rounded-md bg-white hover:bg-light-gray-3 transition-all duration-300 ease-in-out">
            <div className="lg:flex justify-between w-full items-center">
              <span className="flex items-center">
                <MousePointerClick className="mr-2" />
                NitroClicker
              </span>
              <span className="text-light-gray">
                Oct. 13, 2024
              </span>
            </div>
          </Button>
        </Link>

        <p className="text-lg text-dark-gray mt-2">Blog posts</p>
        <Link href="/blog">
          <Button 
            variant="outline" 
            className="block w-full text-left text-sm text-dark-gray xs:pt-[12px] lg:pt-[20px] xs:pb-[50px] lg:pb-[40px] rounded-md bg-white hover:bg-light-gray-3 transition-all duration-300 ease-in-out">
            <div className="lg:flex justify-between w-full items-center">
              <span className="flex items-center">
                <FileText className="mr-2" />
                7 Ways to Deploy a Node.js App
              </span>
              <span className="text-light-gray">
                Feb. 1, 2025
              </span>
            </div>
          </Button>
        </Link>

        {/*
        <p className="text-lg text-dark-gray mt-2">Blog posts</p>
        <Button 
          variant="outline" 
          className="text-left text-sm text-dark-gray mt-2 py-8 rounded-md bg-white hover:bg-light-gray-3 transition-all duration-300 ease-in-out">
          <div className="lg:flex justify-between w-full items-center">
            <span className="flex items-center">
              <FileText className="mr-2" />
              7 Ways to Deploy a Node.js App
            </span>
            <span className="text-light-gray">
              Feb. 1, 2025
            </span>
          </div>
        </Button>
        */}

      </main>
    </>
  );
}
