import Image from "next/image"

export default function Home() {
  return (
    <>
      <main className="fade-in-1 flex flex-col justify-center min-h-screen space-y-4 xs:w-4/5 lg:w-2/5 mx-auto font-noto-sans text-left">
        <Image src="/cube.svg" width={80} height={80} alt="svg" className="xs:mt-16 lg:mt-20" />
        {/* Title */}
        <h1 className="text-4xl text-dark-gray mt-20">Renz Tolentino</h1>
        {/* Description */}
        <p className="fade-in-2 text-md text-gray mt-2">
          hey, welcome to my website! 
        </p>
        {/* Border */}
        <p className="border-b border-light-gray-2"></p>
        {/* Content */}
        <p className="fade-in-2 text-md text-dark-gray mt-2 pb-24">
          i'm currently in the process of building and refining this space, deciding on the best content to showcase.
          updates are on the way, stay tuned! 🎉 
        </p>
      </main>
    </>
  );
}
