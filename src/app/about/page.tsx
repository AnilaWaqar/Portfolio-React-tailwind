// pages/about.js
import Navbar from '../components/navbar';
import Footer from '../components/footer';

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Main content */}
      <main className="flex-grow flex flex-col items-center justify-center px-6 py-10 bg-gray-50">
        <div className="w-full max-w-4xl bg-white p-8 rounded-lg shadow-lg">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6 text-[#02066f]">
            About Me
          </h1>
          <p className="text-lg md:text-xl text-gray-700 text-center mb-6">
            I am Anila Waqar, a passionate <span className="text-[#70b82d] font-semibold">frontend developer</span> specializing in building beautiful, responsive websites. I am also very enthusiastic about teaching and learning new technologies, aiming to make the digital world more accessible and interactive.
          </p>
          <div className="text-lg md:text-xl text-gray-700 mt-8">
            <h2 className="text-3xl font-bold mb-4 text-[#02066f]">Experience</h2>
            <p className="mb-4">I have several years of experience in the IT industry, working on various frontend projects, focusing on creating user-friendly and visually appealing interfaces.</p>
            
            <h2 className="text-3xl font-bold mb-4 text-[#02066f]">Education</h2>
            <p>I hold a Master's degree in Computer Science, which has provided me with a solid foundation in software development, problem-solving, and critical thinking.</p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
