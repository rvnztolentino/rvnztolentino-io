"use client"

import { useEffect } from "react";
import Image from "next/image"
import { Crown } from 'lucide-react';

const LeBron = () => {
    const scrollToTop = () => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    
        useEffect(() => {
            scrollToTop();
        }, []);

    return (
        <div className="min-h-screen flex justify-center pb-16"> {/* DEFAULT SETTING */}
            <div className="w-full px-4 md:px-16"> {/* DEFAULT SETTING */}
                <main className="flex flex-col space-y-7 py-8 font-noto-sans"> {/* DEFAULT SETTING */}
                    <Crown width={80} height={80} />
                    <h1 className="text-4xl text-dark-gray">Boy oh boy where do I even begin...</h1>
                    <p className="border-b border-light-gray-2"></p>
                    
                    <Image src="/thumbnail/lebron-23.png" alt="lebron.jpg" width={700} height={600} className="w-full h-full rounded-xl"/>
                    <p className="text-dark-gray italic">
                    Boy oh boy where do I even begin. Lebron... honey, my pookie bear. I have loved you ever since I first laid eyes on you. The way you drive into the paint and strike fear into your enemies eyes. Your silky smooth touch around the rim, and that gorgeous jumpshot. I would do anything for you. I wish it were possible to freeze time so I would never have to watch you retire. You had a rough childhood, but you never gave up hope. You are even amazing off the court, you're a great husband and father, sometimes I even call you dad. I forvever dread and weep, thinking of the day you will one day retire. I would sacrifice my own life it were the only thing that could put a smile on your beautiful face. You have given me so much joy, and heartbreak over the years. I remember when you first left cleveland and its like my heart got broken into a million pieces. But a tear still fell from my right eye when I watched you win your first ring in miami, because deep down, my glorious king deserved it. I just wanted you to return home. Then allas, you did, my sweet baby boy came home and I rejoiced. 2015 was a hard year for us baby, but in 2016 you made history happen. You came back from 3-1 and I couldn't believe it. I was crying, bawling even, and I heard my glorious king exclaim these words, "CLEVELAND, THIS IS FOR YOU!" Not only have you changed the game of basketball and the world forever, but you've eternally changed my world. And now you're getting older, but still the goat, my goat.<br></br><br></br> I love you pookie bear, my glorious king, Lebron James.☺️♥️🫶🏻
                    </p>
                    <Image src="/thumbnail/lebron-2.jpg" alt="lebron.jpg" width={700} height={600} className="w-full h-full rounded-xl"/>
                    <Image src="/thumbnail/lebron-4.jpg" alt="lebron.jpg" width={700} height={600} className="w-full h-full rounded-xl"/>
                </main>
            </div>
        </div>
    )
}

export default LeBron