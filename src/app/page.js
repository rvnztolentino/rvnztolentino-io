import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { FileText } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen flex justify-center">
      <div className="w-full px-4 md:px-16">
        <main className="flex flex-col space-y-5 py-8 font-noto-sans">
          <Image src="/cube.svg" width={70} height={70} alt="svg" />
          <h1 className="text-4xl text-dark-gray">Renz Tolentino</h1>
          <p className="border-b border-light-gray-2"></p>
          <p className="text-md text-dark-gray">
            i&apos;m currently in the process of building and refining this space, deciding on the best content to
            showcase. updates are on the way, stay tuned! 👋
          </p>

          <img src="jdm.jpg" alt="undermaintenance" className="rounded-xl" />

          <p className="text-lg text-dark-gray pt-4">Blog posts</p>
          <Link href="/blog/5-better-ways-to-create-a-react-app">
            <Button
              variant="outline"
              className="block w-full text-left text-sm text-dark-gray xs:pt-3 lg:pt-5 xs:pb-12 lg:pb-10 rounded-xl bg-white hover:bg-light-gray-3"
            >
              <div className="lg:flex justify-between w-full items-center">
                <span className="flex items-center">
                  <FileText className="mr-2" />5 better ways to create a React app
                </span>
                <span className="text-light-gray">Feb. 16, 2025</span>
              </div>
            </Button>
          </Link>
          <Link href="/blog/7-apps-websites-for-productivity-and-students">
            <Button
              variant="outline"
              className="block w-full text-left text-sm text-dark-gray xs:pt-3 lg:pt-5 xs:pb-12 lg:pb-10 rounded-xl bg-white hover:bg-light-gray-3"
            >
              <div className="lg:flex justify-between w-full items-center">
                <span className="flex items-center">
                  <FileText className="mr-2" />
                  <p className="xs:hidden lg:block">7 apps + websites for productivity and students 💻</p>
                  <p className="block lg:hidden">7 apps + websites for prod... 💻</p>
                </span>
                <span className="text-light-gray">Feb. 10, 2025</span>
              </div>
            </Button>
          </Link>
          <Link href="/blog/becoming-20-years-old">
            <Button
              variant="outline"
              className="block w-full text-left text-sm text-dark-gray xs:pt-3 lg:pt-5 xs:pb-12 lg:pb-10 rounded-xl bg-white hover:bg-light-gray-3"
            >
              <div className="lg:flex justify-between w-full items-center">
                <span className="flex items-center">
                  <FileText className="mr-2" />
                  becoming 20 years old.
                </span>
                <span className="text-light-gray">Jan. 20, 2025</span>
              </div>
            </Button>
          </Link>
        </main>
      </div>
    </div>
  )
}

