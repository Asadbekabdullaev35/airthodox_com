import { Clock, AlertTriangle, PieChart, Target, Calendar, Globe, Mail, Share2, Phone, ShoppingCart, Twitter, Send, MessageSquare, Bot, Database, LineChart, Smartphone, Search, UserX, BellRing, Coins, Shield, Code, TrendingUp, DollarSign, ShoppingBag, Package, UserCog } from 'lucide-react';
import type { ServiceContent } from '../types/services';

export const serviceContent: Record<string, ServiceContent> = {
  'lead-capture-crm-integration': {
    problem: {
      title: 'The Challenge with Manual Lead Management',
      description: 'Traditional lead capture and CRM management methods are inefficient and prone to errors, leading to lost opportunities and reduced conversion rates.',
      problems: [
        {
          icon: UserX,
          title: 'Lost Opportunities',
          description: 'Manual lead tracking results in missed follow-ups and lost sales'
        },
        {
          icon: Clock,
          title: 'Time-Consuming Process',
          description: 'Hours spent on data entry and lead organization'
        },
        {
          icon: AlertTriangle,
          title: 'Data Inconsistency',
          description: 'Manual entry leads to errors and duplicate records'
        }
      ]
    },
    solution: {
      title: 'AI-Powered Lead Capture & CRM Integration',
      description: 'Streamline your lead management process with intelligent automation and seamless CRM integration.',
      features: [
        'Automated lead capture from multiple channels',
        'Real-time CRM synchronization',
        'AI-driven lead scoring and prioritization',
        'Automated follow-up sequences',
        'Advanced analytics and reporting',
        'Smart lead distribution'
      ],
      metrics: [
        { value: '45%', label: 'Increase in Conversion' },
        { value: '35%', label: 'Reduced Cost per Lead' },
        { value: '3X', label: 'More Qualified Leads' }
      ]
    }
  },
  'customer-support-ai': {
    problem: {
      title: 'The Challenge with Traditional Customer Support',
      description: 'Manual customer support struggles to meet modern expectations for instant, 24/7 assistance while maintaining quality and consistency.',
      problems: [
        {
          icon: Clock,
          title: 'Slow Response Times',
          description: 'Customers wait hours or days for responses'
        },
        {
          icon: Database,
          title: 'Limited Knowledge Base',
          description: 'Support agents struggle to access complete information'
        },
        {
          icon: LineChart,
          title: 'Scalability Issues',
          description: 'Cannot handle sudden spikes in support volume'
        }
      ]
    },
    solution: {
      title: 'AI-Powered Customer Support System',
      description: 'Transform your customer support with intelligent automation that provides instant, accurate responses while reducing operational costs.',
      features: [
        'Instant AI responses for common queries',
        'Smart ticket routing and prioritization',
        'Automated follow-ups and resolution tracking',
        'Multi-language support',
        '24/7 availability',
        'Advanced analytics dashboard'
      ],
      metrics: [
        { value: '70%', label: 'Faster Response Time' },
        { value: '500h', label: 'Saved per Month' },
        { value: '92%', label: 'Customer Satisfaction' }
      ]
    }
  },
  'appointment-setting': {
    problem: {
      title: 'The Challenge with Manual Scheduling',
      description: 'Traditional appointment scheduling is inefficient, error-prone, and fails to meet modern business needs.',
      problems: [
        {
          icon: Calendar,
          title: 'Scheduling Conflicts',
          description: 'Double bookings and calendar confusion'
        },
        {
          icon: Clock,
          title: 'Time Zone Issues',
          description: 'Manual coordination across time zones'
        },
        {
          icon: UserX,
          title: 'High No-Show Rates',
          description: 'Missed appointments due to poor follow-up'
        }
      ]
    },
    solution: {
      title: 'AI-Powered Appointment Management',
      description: 'Streamline your scheduling process with intelligent automation that saves time and reduces no-shows.',
      features: [
        'Smart calendar management',
        'Automated reminders and follow-ups',
        'Multi-timezone support',
        'Integration with popular calendar apps',
        'Custom booking rules and availability',
        'Analytics and reporting'
      ],
      metrics: [
        { value: '80%', label: 'Less No-Shows' },
        { value: '15h', label: 'Saved Weekly' },
        { value: '95%', label: 'Booking Accuracy' }
      ]
    }
  },
  'website-creation': {
    problem: {
      title: 'The Challenge with Traditional Web Development',
      description: 'Manual website creation is time-consuming, expensive, and often results in poor performance and user experience.',
      problems: [
        {
          icon: Code,
          title: 'Development Complexity',
          description: 'Long development cycles and technical debt'
        },
        {
          icon: Globe,
          title: 'Poor Performance',
          description: 'Slow loading times and poor SEO'
        },
        {
          icon: Shield,
          title: 'Security Concerns',
          description: 'Vulnerable to attacks and data breaches'
        }
      ]
    },
    solution: {
      title: 'AI-Powered Website Creation',
      description: 'Create professional, high-performance websites quickly with our intelligent website builder.',
      features: [
        'AI-driven design suggestions',
        'Automated SEO optimization',
        'Built-in security features',
        'Performance optimization',
        'Mobile-first approach',
        'Analytics integration'
      ],
      metrics: [
        { value: '40%', label: 'Faster Load Times' },
        { value: '65%', label: 'More Traffic' },
        { value: '3X', label: 'Conversion Rate' }
      ]
    }
  },
  'ai-email-outreach': {
    problem: {
      title: 'The Challenge with Manual Email Marketing',
      description: 'Traditional email outreach is time-consuming and often fails to deliver personalized, engaging content at scale.',
      problems: [
        {
          icon: Mail,
          title: 'Poor Personalization',
          description: 'Generic messages that fail to engage'
        },
        {
          icon: Target,
          title: 'Limited Targeting',
          description: 'Inability to segment effectively'
        },
        {
          icon: PieChart,
          title: 'Weak Analytics',
          description: 'Limited insight into campaign performance'
        }
      ]
    },
    solution: {
      title: 'AI-Powered Email Marketing',
      description: 'Transform your email outreach with intelligent automation that delivers personalized messages at scale.',
      features: [
        'AI-driven content generation',
        'Smart audience segmentation',
        'Automated A/B testing',
        'Personalized send times',
        'Advanced analytics',
        'Campaign optimization'
      ],
      metrics: [
        { value: '55%', label: 'Open Rate' },
        { value: '32%', label: 'Response Rate' },
        { value: '2.5X', label: 'ROI Increase' }
      ]
    }
  },
  'social-media-automation': {
    problem: {
      title: 'The Challenge with Manual Social Media Management',
      description: 'Managing social media manually is time-intensive and lacks the consistency needed for growth.',
      problems: [
        {
          icon: Clock,
          title: 'Time-Consuming',
          description: 'Hours spent on content creation and posting'
        },
        {
          icon: Target,
          title: 'Poor Targeting',
          description: 'Ineffective audience engagement'
        },
        {
          icon: LineChart,
          title: 'Inconsistent Growth',
          description: 'Sporadic posting and engagement'
        }
      ]
    },
    solution: {
      title: 'AI-Powered Social Media Management',
      description: 'Automate your social media presence with intelligent tools that drive engagement and growth.',
      features: [
        'Content scheduling and automation',
        'AI-driven content suggestions',
        'Audience analysis and targeting',
        'Engagement automation',
        'Performance analytics',
        'Multi-platform management'
      ],
      metrics: [
        { value: '85%', label: 'Time Saved' },
        { value: '3X', label: 'Engagement Rate' },
        { value: '60%', label: 'Reach Increase' }
      ]
    }
  },
  'ai-powered-call-centers': {
    problem: {
      title: 'The Challenge with Traditional Call Centers',
      description: 'Traditional call centers struggle with high costs, inconsistent service, and limited availability.',
      problems: [
        {
          icon: Coins,
          title: 'High Operational Costs',
          description: 'Expensive to maintain and scale'
        },
        {
          icon: Phone,
          title: 'Limited Availability',
          description: 'Cannot provide true 24/7 support'
        },
        {
          icon: BellRing,
          title: 'Inconsistent Service',
          description: 'Quality varies with staff availability'
        }
      ]
    },
    solution: {
      title: 'AI-Powered Call Center Solutions',
      description: 'Transform your call center operations with intelligent automation that provides consistent, round-the-clock service.',
      features: [
        'Natural language processing',
        '24/7 availability',
        'Multi-language support',
        'Smart call routing',
        'Real-time analytics',
        'Seamless escalation'
      ],
      metrics: [
        { value: '75%', label: 'Cost Reduction' },
        { value: '99%', label: 'Call Answer Rate' },
        { value: '4.8/5', label: 'Customer Rating' }
      ]
    }
  },
  'e-commerce-automation': {
    problem: {
      title: 'The Challenge with Manual E-Commerce Operations',
      description: 'Manual e-commerce management leads to inefficiencies, missed opportunities, and reduced customer satisfaction.',
      problems: [
        {
          icon: ShoppingBag,
          title: 'Missed Sales Opportunities',
          description: 'Abandoned carts and missed follow-ups'
        },
        {
          icon: Package,
          title: 'Manual Inventory Management',
          description: 'Time-consuming stock tracking'
        },
        {
          icon: UserCog,
          title: 'Limited Personalization',
          description: 'Generic shopping experiences'
        }
      ]
    },
    solution: {
      title: 'AI-Powered E-Commerce Automation',
      description: 'Transform your online store with intelligent automation that streamlines operations and enhances customer experience.',
      features: [
        'Smart cart abandonment recovery',
        'Automated inventory management',
        'AI-driven product recommendations',
        'Dynamic pricing optimization',
        'Automated order processing',
        'Customer behavior analytics'
      ],
      metrics: [
        { value: '25%', label: 'Revenue Increase' },
        { value: '40%', label: 'Customer Retention' },
        { value: '10h+', label: 'Weekly Time Saved' }
      ]
    }
  },
  'automated-x-management': {
    problem: {
      title: 'The Challenge with Manual X (Twitter) Management',
      description: 'Managing X (Twitter) manually limits growth potential and engagement opportunities.',
      problems: [
        {
          icon: Clock,
          title: 'Time-Intensive',
          description: 'Hours spent on content and engagement'
        },
        {
          icon: Target,
          title: 'Limited Reach',
          description: 'Ineffective audience targeting'
        },
        {
          icon: LineChart,
          title: 'Inconsistent Growth',
          description: 'Sporadic posting and engagement'
        }
      ]
    },
    solution: {
      title: 'AI-Powered X Management',
      description: 'Automate your X presence with intelligent tools that drive engagement and growth.',
      features: [
        'Smart content scheduling',
        'Automated engagement',
        'Audience analysis',
        'Trend monitoring',
        'Performance tracking',
        'Growth optimization'
      ],
      metrics: [
        { value: '200%', label: 'Follower Growth' },
        { value: '5X', label: 'Engagement Rate' },
        { value: '80%', label: 'Time Saved' }
      ]
    }
  },
  'ai-telegram-bots': {
    problem: {
      title: 'The Challenge with Manual Telegram Management',
      description: 'Manual Telegram channel management limits scalability and engagement potential.',
      problems: [
        {
          icon: Bot,
          title: 'Limited Automation',
          description: 'Manual responses to common queries'
        },
        {
          icon: Smartphone,
          title: 'Poor User Experience',
          description: 'Slow response times and inconsistent service'
        },
        {
          icon: Search,
          title: 'Missing Analytics',
          description: 'Limited insight into user behavior'
        }
      ]
    },
    solution: {
      title: 'AI-Powered Telegram Bots',
      description: 'Transform your Telegram presence with intelligent bots that provide instant responses and valuable insights.',
      features: [
        'Natural language processing',
        'Custom command handling',
        'User behavior analytics',
        'Automated responses',
        'Integration capabilities',
        'Performance tracking'
      ],
      metrics: [
        { value: '90%', label: 'Query Resolution' },
        { value: '24/7', label: 'Availability' },
        { value: '50K+', label: 'Users Served' }
      ]
    }
  }
};