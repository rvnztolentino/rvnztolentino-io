import Link from "next/link"
import { Button } from "@/components/ui/button"
import { FileText } from "lucide-react"

const Blog = () => {
    return (
    <>
    <div className="min-h-screen flex justify-center"> 
        <div className="w-full px-4 md:px-16">
            <main className="flex flex-col space-y-5 py-8 font-noto-sans">

                <FileText width={70} height={70} className="" />
                <h1 className="text-4xl text-dark-gray">blog</h1>
                <p className="border-b border-light-gray-2"></p>

                <div className="text-md text-dark-gray space-y-2">
                    <p>Where I keep my guides, tutorials, personal experiences, and thoughts.<br></br></p>
                    <p 
                        className="font-courier-prime text-sm text-red text-opacity-80 bg-light-gray-3 px-2" 
                        style={{ display: 'inline-block', padding: '2px 5px 0px 5px' }}
                    >
                        last update: feb. 16, 2025
                    </p>
                </div>

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
    </>
    );
}

export default Blog;
  