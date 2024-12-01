import React, { useState } from 'react';
import { Library } from 'lucide-react';
import { SearchBar } from './components/SearchBar';
import { CategoryFilter } from './components/CategoryFilter';
import { ResourceCard } from './components/ResourceCard';
import { Resource, Category } from './types/resource';

// Mock data for demonstration
const mockResources: Resource[] = [
  {
    id: '1',
    title: 'React Official Documentation',
    url: 'https://react.dev',
    description: 'The official React documentation with comprehensive guides, API references, and best practices.',
    category: 'Reference Documentation',
    tags: ['React', 'JavaScript', 'Frontend'],
    language: 'JavaScript',
    framework: 'React',
    qualityScore: 4.9,
    qualityMetrics: {
      completeness: 0.95,
      accuracy: 0.98,
      readability: 0.92,
      codeExamples: 0.88,
      maintenanceStatus: 0.96
    },
    lastVerified: new Date('2024-03-01'),
    submissionDate: new Date('2024-01-15'),
    contributor: {
      id: 'meta',
      name: 'Meta Open Source'
    }
  },
  {
    id: '2',
    title: 'TypeScript Handbook',
    url: 'https://www.typescriptlang.org/docs/',
    description: 'Complete guide to TypeScript features and capabilities with practical examples.',
    category: 'Getting Started Guides',
    tags: ['TypeScript', 'JavaScript', 'Static Typing'],
    language: 'TypeScript',
    framework: 'TypeScript',
    qualityScore: 4.8,
    qualityMetrics: {
      completeness: 0.92,
      accuracy: 0.95,
      readability: 0.90,
      codeExamples: 0.85,
      maintenanceStatus: 0.93
    },
    lastVerified: new Date('2024-02-28'),
    submissionDate: new Date('2024-01-10'),
    contributor: {
      id: 'microsoft',
      name: 'Microsoft'
    }
  }
];

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);

  const filteredResources = mockResources.filter((resource) => {
    const matchesSearch = resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = !selectedCategory || resource.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center gap-4">
            <Library className="text-blue-600" size={32} />
            <h1 className="text-2xl font-bold text-gray-900">LibDocsHub</h1>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col items-center gap-8">
          <SearchBar
            onSearch={setSearchQuery}
            onFilter={() => {/* Implement filter dialog */}}
          />
          
          <CategoryFilter
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />

          <div className="w-full grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredResources.map((resource) => (
              <ResourceCard key={resource.id} resource={resource} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;