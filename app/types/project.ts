export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  images: string[];
  technologies: string[];
  githubUrl?: string;
  otherLink?: string;
  category: 'web' | 'mobile' | 'desktop' | 'other' | 'IoT';
  featured: boolean;
  completedAt: Date | '開発中';
}

export interface ProjectCardProps {
  project: Project;
  onClick: (project: Project) => void;
}

export interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}