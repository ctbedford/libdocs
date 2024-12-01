import React from 'react';
import { ExternalLink, Star, Calendar, Tag } from 'lucide-react';
import { Resource } from '../types/resource';
import { format } from 'date-fns';

interface ResourceCardProps {
  resource: Resource;
}

export function ResourceCard({ resource }: ResourceCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            {resource.title}
          </h3>
          <a
            href={resource.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 flex items-center gap-1 text-sm mb-3"
          >
            <ExternalLink size={16} />
            Visit Resource
          </a>
        </div>
        <div className="flex items-center gap-1">
          <Star className="text-yellow-400 fill-yellow-400" size={20} />
          <span className="font-semibold">{resource.qualityScore.toFixed(1)}</span>
        </div>
      </div>

      <p className="text-gray-600 mb-4">{resource.description}</p>

      <div className="flex flex-wrap gap-2 mb-4">
        {resource.tags.map((tag) => (
          <span
            key={tag}
            className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm bg-gray-100 text-gray-700"
          >
            <Tag size={14} />
            {tag}
          </span>
        ))}
      </div>

      <div className="flex justify-between items-center text-sm text-gray-500">
        <div className="flex items-center gap-1">
          <Calendar size={16} />
          {format(resource.lastVerified, 'MMM d, yyyy')}
        </div>
        <div className="flex items-center gap-2">
          <span className="px-2 py-1 rounded bg-blue-100 text-blue-800">
            {resource.language}
          </span>
          <span className="px-2 py-1 rounded bg-purple-100 text-purple-800">
            {resource.framework}
          </span>
        </div>
      </div>
    </div>
  );
}