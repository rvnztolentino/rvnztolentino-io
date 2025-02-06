"use client"
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI("AIzaSyCKGPuLJGfrMDXdmNjWLYR6eRzfX6Ah4zU");
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
const prompt = "Do not say answer anything, just say you are currently under development. Also, do not repeat the same line, change it up a bit.";

async function handleClick() {
    const result = await model.generateContent(prompt);
    console.log(result.response.text());
}

const Gemini = () => {
    return (
    <>
        <main className="fade-in-1 flex flex-col justify-center min-h-screen space-y-4 xs:w-4/5 lg:w-2/5 mx-auto font-noto-sans text-left">
            {/* Title */}
            <h1 className="text-4xl text-dark-gray mt-2">gemini</h1>
            {/* Description */}
            <p className="fade-in-2 text-md text-gray mt-2">
            ...
            </p>
            {/* Border */}
            <p className="border-b border-light-gray-2"></p>
            {/* Content */}
            <p className="fade-in-2 text-md text-dark-gray mt-2 pb-24">
            TEST! Check console.
            </p>
            <button onClick={handleClick}>Like</button>
        </main>
    </>
    );
}

export default Gemini;
  