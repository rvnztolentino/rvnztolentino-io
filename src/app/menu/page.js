import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <>
      <main className="fade-in-1 flex flex-col justify-center min-h-screen space-y-4 xs:w-4/5 lg:w-2/5 mx-auto font-noto-sans text-center text-lg">
        <Link href="/">
            <p className="text-black mb-4 font-medium">renz</p>
        </Link>
        <div className="text-gray flex flex-col space-y-4">
            <Link href="/">
                <p className="text-center hover:text-black hover:rounded-md transition-all duration-300 ease-in-out">home</p>
            </Link>
            <Link href="/about">
                <p className="hover:text-black hover:rounded-md transition-all duration-300 ease-in-out">about</p>
            </Link>
            <Link href="/blog">
                <p className="hover:text-black hover:rounded-md transition-all duration-300 ease-in-out">blog</p>
            </Link>
            <Link href="/projects">
                <p className="hover:text-black hover:rounded-md transition-all duration-300 ease-in-out">projects</p>
            </Link>
            <Link href="/contact">
                <p className="hover:text-black hover:rounded-md transition-all duration-300 ease-in-out">contact</p>
            </Link>
            <Link href="/resume">
                <p className="hover:text-black hover:rounded-md transition-all duration-300 ease-in-out">resume</p>
            </Link>
            <Link href="https://linktr.ee/rvnztolentino">
                <Button 
                variant="outline" 
                className="mr-[-5px] mt-2 rounded-md bg-black hover:bg-white text-white hover:text-black transition-all duration-300 ease-in-out">
                linktree
                </Button>
            </Link>
        </div>
      </main>
    </>
  );
}
