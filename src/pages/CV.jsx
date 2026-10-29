// src/pages/CV.jsx
import React from 'react';

export default function CV() {
  return (
    <div className="max-w-3xl mx-auto py-10">
      <h1 className="text-4xl font-bold mb-12">Curriculum Vitae</h1>
      
      <section className="mb-12">
        <h2 className="text-2xl font-bold border-b border-gray-200 pb-4 mb-6">Experience</h2>
        <div className="mb-6">
          <h3 className="text-xl font-bold">Freelance Designer</h3>
          <p className="text-gray-500 mb-2">Granada, Spain | Present</p>
          <p className="text-gray-700">Delivering end-to-end UX/UI, branding, and web design solutions for clients globally.</p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold border-b border-gray-200 pb-4 mb-6">Education</h2>
        <div className="mb-6">
          <h3 className="text-xl font-bold">Degree in Design</h3>
          <p className="text-gray-500 mb-2">University / School Name</p>
        </div>
      </section>
    </div>
  );
}