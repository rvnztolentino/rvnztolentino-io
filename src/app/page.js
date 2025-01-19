import Image from 'next/image';

export default function Home() {
  return (
    <>
      <main className="fade-in-1 flex flex-col justify-center min-h-screen space-y-4 xs:w-4/5 lg:w-2/5 mx-auto font-noto-sans text-left">
        <Image src="/cube.svg" width={80} height={80} alt="svg" className="mt-2" />
        <h1 className="text-4xl text-dark-gray mt-20">Renz Tolentino</h1>
        <p className="fade-in-2 text-md text-dark-gray mt-2">
        Hi there! Welcome to my website! 🎉
        <br></br><br></br>I’m currently in the process of building and refining this space, deciding on the best content to showcase.
        Updates are on the way, stay tuned – there's more to come soon!
        </p>
      </main>
    </>
  );
}
