
import Image from 'next/image';

export default function Projects() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
    

      {/* Main Content */}
      <main className="flex-grow px-4 md:px-20 py-10 bg-white">
        {/* Projects Section */}
        <section className="w-full max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-[#dca735]">
            My Projects
          </h2>

          <div className="flex flex-col md:flex-row gap-8 mb-12">
            {/* Project 1 */}
            <div className="flex-1 bg-[#f3f3f3] p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out">
              <div className="mb-4">
                <Image
                  src="/images/portfolio.png.webp" // Replace with your project image path
                  alt="Responsive Portfolio Website"
                  width={400}
                  height={250}
                  className="rounded-lg w-full"
                />
              </div>
              <h3 className="text-2xl font-bold mb-4">Project One: Responsive Portfolio Website</h3>
              <p className="text-base md:text-lg">
                A personal portfolio website to showcase my projects and skills, built with <span className="font-semibold text-[#70b82d]">Next.js</span>, <span className="font-semibold text-[#70b82d]">Tailwind CSS</span>, and TypeScript. It is fully responsive and follows the best practices for performance and accessibility.
              </p>
            </div>

            {/* Project 2 */}
            <div className="flex-1 bg-[#f3f3f3] p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out">
              <div className="mb-4">
                <Image
                  src="/images/e-commerce.png.webp" // Replace with your project image path
                  alt="E-Commerce Storefront"
                  width={400}
                  height={250}
                  className="rounded-lg w-full"
                />
              </div>
              <h3 className="text-2xl font-bold mb-4">Project Two: E-Commerce Storefront</h3>
              <p className="text-base md:text-lg">
                A mock e-commerce storefront, built using <span className="font-semibold text-[#70b82d]">React</span>, <span className="font-semibold text-[#70b82d]">Redux</span>, and integrated with a backend API. This project focuses on responsive design, a great user experience, and efficient state management.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
     
    </div>
  );
}
