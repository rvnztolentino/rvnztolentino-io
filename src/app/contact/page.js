import { Send } from 'lucide-react'

const Contact = () => {
    return (
    <>
        <main className="fade-in-1 flex flex-col justify-center min-h-screen space-y-4 xs:w-4/5 lg:w-2/5 mt-[60px] pb-2 mx-auto font-noto-sans text-left">
            {/* Title */}
            <Send width={60} height={60} className="" />
            <h1 className="text-4xl text-dark-gray mt-2">contact</h1>
            {/* Description */}
            <p className="fade-in-2 text-md text-gray mt-2">
                ...
            </p>
            {/* Border */}
            <p className="border-b border-light-gray-2"></p>
            {/* Content */}
            <div className="xs:hidden lg:block mt-2">
                <p className="fade-in-2 text-md text-dark-gray">
                    Any questions, feedback, or just want to say hi?
                </p>
                <p className="fade-in-2 text-md text-dark-gray">
                    Feel free to reach out to me using the form below and I will get back to you shortly.
                </p>
            </div>
            <div className="xs:block lg:hidden mt-2">
                <p className="fade-in-2 text-md text-dark-gray">
                    Have questions or feedback? Just reach out using the form below, and I'll get back to you soon.
                </p>
            </div>
            <iframe src="https://tally.so/embed/mRbVWK?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1" width="100%" height="300" frameBorder="0"></iframe>
        </main>
    </>
    );
}

export default Contact;
  