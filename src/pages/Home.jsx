import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { projects } from '../data';

export default function Home() {
  return (
    <>
      <section className="max-w-3xl mb-20 space-y-4 animate-fade-in-up">
        <h1 className="text-3xl md:text-4xl lg:text-5xl leading-tight font-light text-gray-800">
          Hi, my name is <strong className="font-bold text-black">Edén Hernández</strong> and I am a <strong className="font-bold text-black">Graphic</strong>, <strong className="font-bold text-black">Web</strong> and <strong className="font-bold text-black">UX Designer</strong> based in Granada, Spain.
        </h1>
        <p className="text-2xl md:text-3xl font-light text-gray-500">
          This is <strong className="font-bold text-black">my work</strong>.
        </p>
      </section>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
        {projects.map((project) => (
          <Link key={project.slug} to={`/project/${project.slug}`} className="group block">
            <div className="relative aspect-[4/3] overflow-hidden bg-gray-100 rounded-lg mb-4">
              <img src={project.image} alt={project.title} className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 bg-white p-3 rounded-full shadow-lg">
                  <ArrowUpRight size={20} className="text-black" />
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors">{project.title}</h2>
              <p className="text-sm font-medium text-gray-500 mt-1">{project.categories}</p>
            </div>
          </Link>
        ))}
      </section>
    </>
  );
}