'use client'

import { useEffect } from 'react';
import { User } from 'lucide-react'

const About = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    useEffect(() => {
        scrollToTop();
    }, []);

    return (
    <>
        <div className="min-h-screen flex justify-center"> 
            <div className="w-full px-4 md:px-16">
                <main className="flex flex-col space-y-5 py-8 font-noto-sans">
                    {/* Title */}
                    <User width={80} height={80} className="" />
                    <h1 className="text-4xl text-dark-gray">about</h1>
                    {/* Border */}
                    <p className="border-b border-light-gray-2"></p>
                    {/* Content */}
                    <p className="text-md text-dark-gray">
                    Nothing yet! Check back later :)
                    </p>
                </main>
            </div>
        </div>
    </>
    );
}

export default About;
  