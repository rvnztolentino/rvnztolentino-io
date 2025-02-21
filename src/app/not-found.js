export default function NotFound() {
  return (
    <>
        <div className="min-h-screen flex justify-center"> 
          <div className="w-full px-4 md:px-16">
            <main className="flex flex-col space-y-5 py-8 font-noto-sans">
              <p className="text-md text-center text-dark-gray">
                Oops! The page you are looking cannot be found :(
              </p>
            </main>
          </div>
        </div>
    </>
  );
}
