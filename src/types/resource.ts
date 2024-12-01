export type Category =
  | 'API Documentation'
  | 'Getting Started Guides'
  | 'Best Practices'
  | 'Tutorial Collections'
  | 'Reference Documentation'
  | 'Code Examples'
  | 'Video Tutorials'
  | 'Interactive Learning';

export interface QualityMetrics {
  completeness: number;
  accuracy: number;
  readability: number;
  codeExamples: number;
  maintenanceStatus: number;
}

export interface Resource {
  id: string;
  title: string;
  url: string;
  description: string;
  category: Category;
  tags: string[];
  language: string;
  framework: string;
  qualityScore: number;
  qualityMetrics: QualityMetrics;
  lastVerified: Date;
  submissionDate: Date;
  contributor: {
    id: string;
    name: string;
  };
}