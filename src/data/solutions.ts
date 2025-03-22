import { MessageSquare, Calendar, Globe, Mail, Share2, Phone, ShoppingCart, Twitter, Send, BrainCircuit } from 'lucide-react';
import type { Solution } from '../types/services';

export const solutions: Solution[] = [
  {
    icon: BrainCircuit,
    title: 'Lead Capture & CRM Integration',
    description: 'Effortlessly collect and organize leads through forms, chatbots, or landing pages and sync them into your CRM system.',
    features: [
      'Targeted Outreach with AI-driven insights',
      'Efficient Scaling to reach 100s daily',
      'Real-Time Analytics for ROI optimization'
    ],
    metrics: [
      { value: '45%', label: 'Increase in Conversion' },
      { value: '35%', label: 'Reduced Cost per Lead' },
      { value: '3X', label: 'More Qualified Leads' }
    ]
  },
  {
    icon: MessageSquare,
    title: 'Customer Support AI',
    description: 'Manage customer inquiries effectively with an AI-powered ticketing system that organizes, prioritizes, and resolves issues.',
    features: [
      'Instant AI responses for 85% of queries',
      'Smart issue escalation system',
      'Personalized customer interactions'
    ],
    metrics: [
      { value: '70%', label: 'Faster Response Time' },
      { value: '500h', label: 'Saved per Month' },
      { value: '92%', label: 'Customer Satisfaction' }
    ]
  },
  {
    icon: Calendar,
    title: 'Appointment Setting',
    description: 'Automate and streamline appointment scheduling with easy-to-use tools. Allow clients to book directly online.',
    features: [
      'Automated scheduling system',
      'Calendar integrations',
      'Smart reminder system'
    ],
    metrics: [
      { value: '80%', label: 'Less No-Shows' },
      { value: '15h', label: 'Saved Weekly' },
      { value: '95%', label: 'Booking Accuracy' }
    ]
  },
  {
    icon: Globe,
    title: 'Website Creation',
    description: 'Get a professional, fully customized website tailored to your business needs with modern design and integrations.',
    features: [
      'Responsive design',
      'SEO optimization',
      'Analytics integration'
    ],
    metrics: [
      { value: '40%', label: 'Faster Load Times' },
      { value: '65%', label: 'More Traffic' },
      { value: '3X', label: 'Conversion Rate' }
    ]
  },
  {
    icon: Mail,
    title: 'AI Email Outreach',
    description: 'Engage prospects with AI-crafted, personalized email campaigns that deliver highly relevant messages at scale.',
    features: [
      'Smart personalization',
      'A/B testing',
      'Performance analytics'
    ],
    metrics: [
      { value: '55%', label: 'Open Rate' },
      { value: '32%', label: 'Response Rate' },
      { value: '2.5X', label: 'ROI Increase' }
    ]
  },
  {
    icon: Share2,
    title: 'Social Media Automation',
    description: 'Leverage AI to connect with your target audience on social platforms like Instagram, LinkedIn, and Facebook.',
    features: [
      'Multi-platform management',
      'Content scheduling',
      'Engagement automation'
    ],
    metrics: [
      { value: '85%', label: 'Time Saved' },
      { value: '3X', label: 'Engagement Rate' },
      { value: '60%', label: 'Reach Increase' }
    ]
  },
  {
    icon: Phone,
    title: 'AI-Powered Call Centers',
    description: 'Set up virtual call centers with AI that handle customer inquiries and provide assistance with human-like conversational abilities.',
    features: [
      '24/7 availability',
      'Multi-language support',
      'Call analytics & insights'
    ],
    metrics: [
      { value: '75%', label: 'Cost Reduction' },
      { value: '99%', label: 'Call Answer Rate' },
      { value: '4.8/5', label: 'Customer Rating' }
    ]
  },
  {
    icon: ShoppingCart,
    title: 'E-Commerce Automation',
    description: 'Optimize your e-commerce operations with automation for order management, inventory tracking, and customer engagement.',
    features: [
      'Inventory automation',
      'Order processing',
      'Cart recovery'
    ],
    metrics: [
      { value: '45%', label: 'Cart Recovery' },
      { value: '30%', label: 'Cost Reduction' },
      { value: '2X', label: 'Order Volume' }
    ]
  },
  {
    icon: Twitter,
    title: 'Automated X Management',
    description: 'Grow your presence on X (Twitter) with automated posting, audience engagement, and content creation.',
    features: [
      'Content automation',
      'Engagement tracking',
      'Analytics dashboard'
    ],
    metrics: [
      { value: '200%', label: 'Follower Growth' },
      { value: '5X', label: 'Engagement Rate' },
      { value: '80%', label: 'Time Saved' }
    ]
  },
  {
    icon: Send,
    title: 'AI Telegram Bots',
    description: 'Deploy Telegram bots to engage users, answer FAQs, and automate processes such as lead generation and support.',
    features: [
      'Custom commands',
      'User analytics',
      'Integration APIs'
    ],
    metrics: [
      { value: '90%', label: 'Query Resolution' },
      { value: '24/7', label: 'Availability' },
      { value: '50K+', label: 'Users Served' }
    ]
  }
];