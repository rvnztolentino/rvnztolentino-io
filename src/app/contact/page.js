import { Send } from 'lucide-react'

const Contact = () => {
    return (
    <>
    <div className="min-h-screen flex justify-center"> 
        <div className="w-full px-4 md:px-16">
            <main className="flex flex-col space-y-7 py-8 font-noto-sans">
                <Send width={60} height={60} className="" />
                <h1 className="text-4xl text-dark-gray">contact</h1>
                <p className="border-b border-light-gray-2"></p>
                <div className="xs:hidden lg:block">
                    <p className="text-md text-dark-gray">
                        Any questions, feedback, or just want to say hi?
                    </p>
                    <p className="text-md text-dark-gray">
                        Feel free to reach out to me using the form below and I will get back to you shortly.
                    </p>
                </div>
                <div className="xs:block lg:hidden">
                    <p className="text-md text-dark-gray">
                        Have questions or feedback? Just reach out using the form below, and I&apos;ll get back to you soon.
                    </p>
                </div>
                <div className="text-left">
                    <p className="text-md text-dark-gray">
                        I'll only respond to those proposals that are a good match for my schedule and interests. thank you! 🙏
                    </p>
                </div>
                <iframe src="https://tally.so/embed/mRbVWK?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1" width="100%" height="300" frameBorder="0"></iframe>
            </main>
        </div>
    </div>
    </>
    );
}

export default Contact;
  