import localFont from "next/font/local";
import "./globals.css";
import Navbar from './components/Navbar';
import Chat from './components/Chat';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Renz Tolentino",
  description: "Renz' personal website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="flex min-h-screen">
          {/* Left Navigation */}
          <Navbar />
          {/* Left Nav Spacer */}
          <div className="hidden lg:block w-64 flex-shrink-0" />
          {/* Main Content */}
          <main className="flex-1 max-w-[800px] w-full mx-auto px-4 pt-16 lg:border-l lg:border-r lg:border-light-gray-2">
            {children}
          </main>
          {/* Right Sidebar Spacer */}
          <div className="hidden lg:block w-80 flex-shrink-0" />
          {/* Chat Component (usually fixed) */}
          <Chat />
        </div>
      </body>
    </html>
  );
}