import Image from 'next/image'

export default function NotFound() {
  return (
    <>
      <main className="flex flex-col justify-center items-center min-h-screen xs:w-4/5 lg:w-2/5 mx-auto space-y-4 px-0 lg:px-0 2xl:px-20 font-noto-sans text-center">
        <p className="text-md text-dark-gray">
          Oops! The page you are looking cannot be found :(
        </p>
      </main>
    </>
  );
}
