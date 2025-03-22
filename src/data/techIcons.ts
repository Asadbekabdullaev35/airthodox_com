import { MessageSquareMore, Brain, Zap, Library, Infinity } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Technology {
  name: string;
  icon: LucideIcon;
  description: string;
  bgColor: string;
}

export const technologies: Technology[] = [
  {
    name: 'Voiceflow',
    icon: MessageSquareMore,
    description: 'Conversation design platform',
    bgColor: 'from-gray-900/20 to-gray-800/10'
  },
  {
    name: 'OpenAI',
    icon: Brain,
    description: 'Advanced AI models and APIs',
    bgColor: 'from-gray-900/20 to-gray-800/10'
  },
  {
    name: 'Instantly',
    icon: Zap,
    description: 'Email automation platform',
    bgColor: 'from-blue-900/20 to-blue-800/10'
  },
  {
    name: 'Make',
    icon: Library,
    description: 'Visual automation platform',
    bgColor: 'from-purple-900/20 to-purple-800/10'
  },
  {
    name: 'Bland.ai',
    icon: Infinity,
    description: 'Voice AI solutions',
    bgColor: 'from-indigo-900/20 to-blue-800/10'
  }
];