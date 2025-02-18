import Image from "next/image"
import Link from "next/link";
import { Button } from "@/components/ui/button"
import { FileText, MousePointerClick, PencilLine, Construction, Hotel } from 'lucide-react';

export default function Home() {
  return (
    <>
      <main className="flex flex-col justify-center min-h-screen space-y-4 xs:w-4/5 lg:w-2/5 xs:mt-24 lg:mt-20 pb-24 mx-auto font-noto-sans text-left">
        <Image src="/cube.svg" width={70} height={70} alt="svg" className="" />
        <h1 className="text-4xl text-dark-gray mt-20">Renz Tolentino</h1>
        <p className="border-b border-light-gray-2"></p>
        <p className="text-md text-dark-gray mt-2">
          i&apos;m currently in the process of building and refining this space, deciding on the best content to showcase.
          updates are on the way, stay tuned! 👋
        </p>

        {/* featured 
        <div className="text-left flex flex-col justify-center rounded-xl border xs:py-12 lg:py-28 h-14 bg-cover bg-jdm">
          <p className="xs:text-2xl lg:text-4xl font-noto-sans font-bold text-white pl-14">もうすぐ</p>
          <p className="xs:text-xs lg:text-md font-noto-sans text-white pl-14">Website Under Construction</p>
        </div> */}

        <img src="jdm.jpg" alt="undermaintenance" className="rounded-xl"></img>

        {/* 
        <p className="text-lg text-dark-gray mt-2">Projects</p>
        <Link href="https://github.com/ColasRab/Road-Defect-Indexing-System">
          <Button 
            variant="outline" 
            className="block w-full text-left text-sm text-dark-gray xs:pt-[12px] lg:pt-[20px] xs:pb-[50px] lg:pb-[40px] rounded-xl bg-white hover:bg-light-gray-3">
            <div className="lg:flex justify-between w-full items-center">
              <span className="flex items-center">
                <Construction className="mr-2" />
                Road Defect Indexing System
              </span>
              <span className="text-light-gray">
                Jan 24, 2025
              </span>
            </div>
          </Button>
        </Link> 

        <Link href="https://github.com/rvnztolentino/kaku-app">
          <Button 
            variant="outline" 
            className="block w-full text-left text-sm text-dark-gray xs:pt-[12px] lg:pt-[20px] xs:pb-[50px] lg:pb-[40px] rounded-xl bg-white hover:bg-light-gray-3">
            <div className="lg:flex justify-between w-full items-center">
              <span className="flex items-center">
                <PencilLine className="mr-2" />
                Kaku Task & Note Keeper
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
            className="block w-full text-left text-sm text-dark-gray xs:pt-[12px] lg:pt-[20px] xs:pb-[50px] lg:pb-[40px] rounded-xl bg-white hover:bg-light-gray-3">
            <div className="lg:flex justify-between w-full items-center">
              <span className="flex items-center">
                <MousePointerClick className="mr-2" />
                <p className="xs:hidden lg:block">NitroClicker</p>
                <p className="block lg:hidden">NitroClicker</p>
              </span>
              <span className="text-light-gray">
                Oct. 6, 2024
              </span>
            </div>
          </Button>
        </Link>

        <Link href="https://github.com/bntlyr/HOTEL-MANAGEMENT-SYSTEM">
          <Button 
            variant="outline" 
            className="block w-full text-left text-sm text-dark-gray xs:pt-[12px] lg:pt-[20px] xs:pb-[50px] lg:pb-[40px] rounded-xl bg-white hover:bg-light-gray-3">
            <div className="lg:flex justify-between w-full items-center">
              <span className="flex items-center">
                <Hotel className="mr-2" />
                <p className="xs:hidden lg:block">Goodwill Hotel Management System</p>
                <p className="block lg:hidden">Goodwill Hotel Management Sys...</p>
              </span>
              <span className="text-light-gray">
                Jul 10, 2024
              </span>
            </div>
          </Button>
        </Link>
        */}

        <p className="text-lg text-dark-gray pt-4">Blog posts</p>
        <Link href="/blog/7-ways-to-deploy-a-nodejs-app">
          <Button 
            variant="outline" 
            className="block w-full text-left text-sm text-dark-gray xs:pt-[12px] lg:pt-[20px] xs:pb-[50px] lg:pb-[40px] rounded-xl bg-white hover:bg-light-gray-3">
            <div className="lg:flex justify-between w-full items-center">
              <span className="flex items-center">
                <FileText className="mr-2" />
                5 better ways to create a React app
              </span>
              <span className="text-light-gray">
                Feb. 16, 2025
              </span>
            </div>
          </Button>
        </Link>
        <Link href="/blog/10-apps-websites-for-productivity-and-students">
          <Button 
            variant="outline" 
            className="block w-full text-left text-sm text-dark-gray xs:pt-[12px] lg:pt-[20px] xs:pb-[50px] lg:pb-[40px] rounded-xl bg-white hover:bg-light-gray-3">
            <div className="lg:flex justify-between w-full items-center">
              <span className="flex items-center">
                <FileText className="mr-2" />
                <p className="xs:hidden lg:block">7 apps + websites for productivity and students 💻</p>
                <p className="block lg:hidden">7 apps + websites for prod... 💻</p>
              </span>
              <span className="text-light-gray">
                Feb. 10, 2025
              </span>
            </div>
          </Button>
        </Link>
        <Link href="/blog/becoming-20-years-old">
          <Button 
            variant="outline" 
            className="block w-full text-left text-sm text-dark-gray xs:pt-[12px] lg:pt-[20px] xs:pb-[50px] lg:pb-[40px] rounded-xl bg-white hover:bg-light-gray-3">
            <div className="lg:flex justify-between w-full items-center">
              <span className="flex items-center">
                <FileText className="mr-2" />
                becoming 20 years old.
              </span>
              <span className="text-light-gray">
                Jan. 20, 2025
              </span>
            </div>
          </Button>
        </Link>
      </main>
    </>
  );
}
