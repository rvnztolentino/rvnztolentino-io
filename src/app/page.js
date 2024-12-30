import Image from 'next/image';

export default function Home() {
  return (
    <>
      <main className="fade-in-1 flex flex-col justify-center min-h-screen space-y-4 xs:w-4/5 lg:w-2/5 mx-auto xs:px-0 lg:px-0 2xl:px-20 font-noto-sans text-left">
        <Image src="/cube.svg" width={80} height={80} alt="svg" className="mt-20" />
        <h1 className="text-4xl text-dark-gray font-playfair-display mt-20">renz</h1>
        <p className="fade-in-2 text-md text-dark-gray mt-2">
          hey there! thanks for visiting my website. im currently working on perfecting it
          and deciding what content to showcase here. stay tuned for updates!
        </p>
        <p className="fade-in-2 text-md text-light-gray mt-2 pb-10">Nothing yet! Check back later :)</p>
      </main>
    </>
  );
}
