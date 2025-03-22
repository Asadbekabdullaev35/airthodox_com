interface Technology {
  name: string;
  logo: string;
  description: string;
  bgColor: string;
}

export const technologies: Technology[] = [
  {
    name: 'Voiceflow',
    logo: 'voiceflow.svg',
    description: 'Conversation design platform',
    bgColor: 'from-gray-900/20 to-gray-800/10'
  },
  {
    name: 'OpenAI',
    logo: 'openai.svg',
    description: 'Advanced AI models and APIs',
    bgColor: 'from-gray-900/20 to-gray-800/10'
  },
  {
    name: 'Instantly',
    logo: 'instantly.svg',
    description: 'Email automation platform',
    bgColor: 'from-blue-900/20 to-blue-800/10'
  },
  {
    name: 'Make',
    logo: 'make.svg',
    description: 'Visual automation platform',
    bgColor: 'from-purple-900/20 to-purple-800/10'
  },
  {
    name: 'Bland.ai',
    logo: 'bland.svg',
    description: 'Voice AI solutions',
    bgColor: 'from-indigo-900/20 to-blue-800/10'
  }
];