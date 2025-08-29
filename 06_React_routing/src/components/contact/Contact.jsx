import React from 'react';
import { Link,NavLink } from 'react-router-dom';


export default function ContactPageBMW() {
  return (
   
    <div className="bg-gray-900 py-20 font-sans text-gray-200">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white tracking-tight">
            Connect with Excellence
          </h1>
          <p className="text-gray-400 mt-4 text-lg max-w-2xl mx-auto">
            Whether you're scheduling a test drive or have a question, our team is ready to assist you.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          
          <div className="bg-gray-800 p-8 rounded-lg shadow-2xl">
            <h2 className="text-3xl font-bold text-white mb-6">Send an Inquiry</h2>
            <form>
              <div className="mb-5">
                <label htmlFor="name" className="block text-gray-400 font-medium mb-2">Full Name</label>
                <input type="text" id="name" placeholder="Harsh Raj" className="w-full px-4 py-3 bg-gray-700 text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-bmw-blue transition-all" />
              </div>
              <div className="mb-5">
                <label htmlFor="email" className="block text-gray-400 font-medium mb-2">Email</label>
                <input type="email" id="email" placeholder="you@example.com" className="w-full px-4 py-3 bg-gray-700 text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-bmw-blue transition-all" />
              </div>
              <div className="mb-5">
                <label htmlFor="message" className="block text-gray-400 font-medium mb-2">Message</label>
                <textarea id="message" rows="5" placeholder="How can we assist you today?" className="w-full px-4 py-3 bg-gray-700 text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-bmw-blue transition-all"></textarea>
              </div>
              <button
                type="submit"
                // The hover and active effects are now handled purely by Tailwind
                className="w-full bg-bmw-blue text-white font-bold py-3 px-6 rounded-md shadow-lg hover:brightness-110 active:scale-98 transition-all duration-150 text-lg"
              >
                Submit Inquiry
              </button>
            </form>
          </div>
          
          <div className="space-y-8">
            <div className="bg-gray-800 p-8 rounded-lg shadow-2xl">
              <h2 className="text-3xl font-bold text-white mb-6">Contact Details</h2>
              <div className="space-y-6">
                
                <div className="flex items-start space-x-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-bmw-blue flex-shrink-0 mt-1"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                  <div>
                    <h3 className="text-lg font-semibold text-white">BMW Patna Showroom</h3>
                    <p className="text-gray-400">Exhibition Rd, Patna, Bihar, 800001, India</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-bmw-blue flex-shrink-0 mt-1"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Sales Inquiries</h3>
                    <p className="text-gray-400 hover:text-bmw-blue transition-colors"><a href="mailto:sales.patna@bmw.in">sales.patna@bmw.in</a></p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-bmw-blue flex-shrink-0 mt-1"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Speak with a Specialist</h3>
                    <p className="text-gray-400">+91 123 456 7890</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}