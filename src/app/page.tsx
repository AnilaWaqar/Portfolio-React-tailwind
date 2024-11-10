import Navbar from './components/navbar';
import Footer from './components/footer';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Main content */}
      <main className="flex-grow">
        <div className="flex flex-col md:flex-row items-center p-10 md:p-20 bg-white">
          {/* Image Section */}
          <div className="flex-1 mb-6 md:mb-0 text-center">
            <Image 
              src="/images/anila.png.png" 
              alt="Anila Waqar" 
              width={300} 
              height={300} 
              className="rounded-full mx-auto"
            />
          </div>

          {/* Text Section */}
          <div className="flex-1 text-center md:text-left md:pl-10">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-[#dca735]">
              Hi, I am Anila Waqar
            </h1>
            <p className="text-base md:text-lg">
              I am a <span className="text-[#70b82d] font-extrabold">Frontend Developer</span> specializing in building beautiful, responsive websites.
              I am passionate about learning Artifical Intelligence Engineering, and I am always eager to learn and explore new technologies.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
