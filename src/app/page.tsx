'use client';

import { useState } from "react";
import dynamic from "next/dynamic";
import HeroSection from "../../components/HeroSection";
import Navbar from "../../components/Navbar";
import ServicesSection from "../../components/ServicesSection";

// Lazy load modal with animation
const ContactFormModal = dynamic(() => import("../../components/ContactFormModal"), { ssr: false });

const Home = () => {
  const [showContactForm, setShowContactForm] = useState(false);

  return (
    <>
       <Navbar />
      {/* Fixed Navbar */}
     

      <main className="min-h-screen bg-gray-100 pt-24"> {/* 👈 Adds top padding so content is not hidden under navbar */}
        {/* Hero Section */}
        <HeroSection />

        {/* Services Section */}
        <ServicesSection />

        {/* About Section */}
        <section id="about" className="py-16 bg-gray-100">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h3 className="text-3xl font-semibold mb-4">Why Choose Us?</h3>
            <p className="text-gray-700 mb-6">
              With 10+ years of experience and a global client base, we deliver scalable, high-quality solutions
              on time and within budget.
            </p>
          </div>
        </section>

        {/* Contact CTA Section */}
        <section id="contact" className="py-16 text-center bg-white">
          <div className="max-w-xl mx-auto px-4">
            <h3 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h3>
            <p className="mb-6 text-gray-600">Let’s discuss how we can work together.</p>
            <button
              onClick={() => setShowContactForm(true)}
              className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700"
            >
              Contact Us
            </button>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-800 text-white py-6 mt-10">
          <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-sm text-center md:text-left">
            <p className="mb-2 md:mb-0">&copy; {new Date().getFullYear()} TEKMBILICAL SOLUTIONS PRIVATE LIMITED.</p>
            <div className="space-x-4">
              <a href="#" className="hover:text-gray-300">Privacy</a>
              <a href="#" className="hover:text-gray-300">Terms</a>
            </div>
          </div>
        </footer>

      </main>

      {/* Contact Form Modal */}
      {showContactForm && <ContactFormModal onClose={() => setShowContactForm(false)} />}
    </>
  );
};

export default Home;
