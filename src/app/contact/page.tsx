

import { FaLinkedin, FaWhatsapp, FaEnvelope } from 'react-icons/fa';

export default function Contact() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
    

      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center justify-center px-6 md:px-20 py-10 bg-gray-50">
        {/* Contact Section */}
        <section className="w-full max-w-3xl bg-white p-10 rounded-lg shadow-lg">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-6 text-[#dca735]">
            Get in Touch
          </h1>
          <p className="text-lg md:text-xl text-center mb-8">
            Feel free to connect with me on LinkedIn, WhatsApp, or drop me an email. I am always happy to connect!
          </p>

          {/* Contact Options */}
          <div className="flex flex-col md:flex-row justify-around items-center gap-8 mb-8">
            {/* LinkedIn */}
            <a 
              href="https://www.linkedin.com/in/anila-waqar-806375270/" // Replace with your actual LinkedIn URL
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 px-6 py-4 rounded-lg bg-[#0077b5] text-white hover:bg-[#005582] transition duration-300 ease-in-out w-full md:w-auto"
            >
              <FaLinkedin className="text-3xl" />
              <span className="text-lg md:text-xl font-semibold">LinkedIn</span>
            </a>

            {/* WhatsApp */}
            <a 
              href="https://wa.me/+923112387225" // Replace with your WhatsApp link (e.g., https://wa.me/1234567890)
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 px-6 py-4 rounded-lg bg-[#25D366] text-white hover:bg-[#1aaf4e] transition duration-300 ease-in-out w-full md:w-auto"
            >
              <FaWhatsapp className="text-3xl" />
              <span className="text-lg md:text-xl font-semibold">WhatsApp</span>
            </a>

            {/* Email */}
            <a 
           href="mailto:anilawaqar101@gmail.com" // Replace with your email address
              className="flex items-center gap-4 px-6 py-4 rounded-lg bg-[#dca735] text-white hover:bg-[#b8912e] transition duration-300 ease-in-out w-full md:w-auto"
            >
              <FaEnvelope className="text-3xl" />
              <span className="text-lg md:text-xl font-semibold">Email Me</span>
            </a>
          </div>

          {/* Contact Form (Optional) */}
          <form className="w-full">
            <div className="flex flex-col gap-6">
              <input
                type="text"
                placeholder="Your Name"
                className="p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-[#70b82d]"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-[#70b82d]"
              />
              <textarea
                rows= {4}
                placeholder="Your Message"
                className="p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-[#70b82d]"
              />
              <button
                type="submit"
                className="w-full py-4 mt-4 bg-[#0077b5] text-white font-bold rounded-lg hover:bg-[#005582] transition duration-300 ease-in-out"
              >
                Send Message
              </button>
            </div>
          </form>
        </section>
      </main>

      {/* Footer */}
      
    </div>
  );
}
