// src/pages/About.jsx
import React from 'react';

export default function About() {
  return (
    <div className="max-w-2xl mx-auto py-10">
      <h1 className="text-4xl font-bold mb-8">About Me</h1>
      <div className="prose prose-lg text-gray-700">
        <p className="mb-4">
          I am a Graphic, Web, and UX Designer based in Granada, Spain. I specialize in bridging the gap between aesthetic design and functional user experiences.
        </p>
        <p>
          With a strong background in visual communication and front-end principles, I build digital products that are not only beautiful but intuitively solve real-world problems.
        </p>
      </div>
    </div>
  );
}