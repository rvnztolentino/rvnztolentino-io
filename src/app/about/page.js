import { User } from 'lucide-react'

const About = () => {
    return (
    <>
        <main className="flex flex-col justify-center min-h-screen space-y-4 xs:w-4/5 lg:w-2/5 mx-auto font-noto-sans text-left">
            {/* Title */}
            <User width={80} height={80} className="" />
            <h1 className="text-4xl text-dark-gray mt-2">about</h1>
            {/* Border */}
            <p className="border-b border-light-gray-2"></p>
            {/* Content */}
            <p className="text-md text-dark-gray mt-2 pb-24">
            Nothing yet! Check back later :)
            </p>
        </main>
    </>
    );
}

export default About;
  