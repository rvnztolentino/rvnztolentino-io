"use client"

import { useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { FileText } from "lucide-react"
import ProductGrid from "./components/ProductCard"
import BlogGrid from "./components/BlogCard"

export default function Home() {
  // Auto-scroll to top once page is opened
      const scrollToTop = () => {
          window.scrollTo({ top: 0, behavior: "smooth" });
      }
  
      useEffect(() => {
          scrollToTop();
      }, []);

  return (
    <div className="min-h-screen flex justify-center pb-16"> {/* DEFAULT SETTING */}
      <div className="w-full px-4 md:px-16"> {/* DEFAULT SETTING */}
        <main className="flex flex-col space-y-5 py-8 font-noto-sans"> {/* DEFAULT SETTING */}
          <Image src="/cube.svg" width={70} height={70} alt="svg" /> {/* DEFAULT SETTING */}
          <h1 className="text-4xl text-dark-gray">Renz Tolentino</h1> {/* DEFAULT SETTING */}
          <p className="border-b border-light-gray-2"></p> {/* DEFAULT SETTING */}

          {/* Intro */}
          <p className="text-md text-dark-gray">
            i&apos;m currently in the process of building and refining this space, deciding on the best content to
            showcase. updates are on the way, stay tuned! 👋
          </p>
          <Image src="/thumbnail/jdm.jpg" width={750} height={250} alt="img" className="rounded-xl" />

          <p className="border-b border-light-gray-2 pt-4"></p>
          
          {/* Products */}
          <div className="text-md text-dark-gray space-y-2">
              <p className="text-xl">Digital products</p>
              <p>Showcasing my products, offerings, and digital creations.<br></br></p>
          </div>
          <ProductGrid />

          <p className="border-b border-light-gray-2 pt-4"></p>

          {/* Blogs */}
          <div className="text-md text-dark-gray space-y-2">
              <p className="text-xl">Blog posts</p>
              <p>Documenting my guides, tutorials, personal experiences, and reflections.<br></br></p>
          </div>
          <BlogGrid />
          
        </main>
      </div>
    </div>
  )
}

