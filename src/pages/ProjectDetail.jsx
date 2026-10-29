import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { projects } from '../data';

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find(p => p.slug === slug);

  if (!project) return (
    <div className="text-center py-20">
      <h2 className="text-2xl font-bold">Project not found</h2>
      <Link to="/" className="text-blue-600 hover:underline mt-4 inline-block">Return Home</Link>
    </div>
  );

  return (
    <article className="max-w-4xl mx-auto">
      <Link to="/" className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-black mb-10 transition-colors">
        <ArrowLeft size={16} /> Back to Work
      </Link>
      
      <header className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{project.title}</h1>
        <p className="text-lg text-gray-500 mb-8">{project.categories}</p>
        
        <div className="grid md:grid-cols-3 gap-8 py-8 border-y border-gray-200">
          <div className="md:col-span-2">
            <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">About the Project</h3>
            <p className="text-gray-700 leading-relaxed">{project.description}</p>
          </div>
          <div>
            <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">Roles</h3>
            <ul className="text-gray-700 space-y-1">
              {project.roles.map((role, i) => <li key={i}>{role}</li>)}
            </ul>
          </div>
        </div>
      </header>

      <div className="space-y-12">
        {project.gallery && project.gallery.length > 0 ? (
          project.gallery.map((img, i) => (
            <img key={i} src={img} alt={`${project.title} gallery frame`} className="w-full rounded-lg shadow-sm border border-gray-100" />
          ))
        ) : (
          <img src={project.image} alt={project.title} className="w-full rounded-lg shadow-sm border border-gray-100" />
        )}
      </div>
    </article>
  );
}