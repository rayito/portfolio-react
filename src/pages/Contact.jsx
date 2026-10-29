// src/pages/Contact.jsx
import React from 'react';

export default function Contact() {
  return (
    <div className="max-w-xl mx-auto py-10 text-center">
      <h1 className="text-4xl font-bold mb-6">Get in Touch</h1>
      <p className="text-lg text-gray-600 mb-10">
        I am always open to discussing product design work or partnership opportunities.
      </p>
      <a href="mailto:your.email@example.com" className="inline-block bg-black text-white px-8 py-4 rounded-lg font-medium hover:bg-gray-800 transition-colors">
        Say Hello 👋
      </a>
    </div>
  );
}