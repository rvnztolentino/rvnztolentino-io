import { CodeXml } from 'lucide-react'
  
const Projects = () => {
    return (
    <>
        <div className="min-h-screen flex justify-center"> 
            <div className="w-full px-4 md:px-16">
                <main className="flex flex-col space-y-5 py-8 font-noto-sans">

                    <CodeXml width={70} height={70} className="" />
                    <h1 className="text-4xl text-dark-gray">projects</h1>
                    <p className="border-b border-light-gray-2"></p>

                    <div className="text-md text-dark-gray space-y-2">
                        <p>Where I showcase my projects, ideas, and things I’ve built.<br></br></p>
                        <p 
                            className="font-courier-prime text-sm text-red text-opacity-80 bg-light-gray-3 px-2" 
                            style={{ display: 'inline-block', padding: '2px 5px 0px 5px' }}
                        >
                            last update: -
                        </p>
                    </div>
                    <p className="text-md text-dark-gray">
                    Nothing yet! Check back later :)
                    </p>
                </main>
            </div>
        </div>
    </>
    );
}

export default Projects;