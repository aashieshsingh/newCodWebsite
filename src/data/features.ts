import { 
  CheckCircle2, 
  BarChart3,
  Globe2,
  AlertTriangle,
  Activity,
  Scale 
} from 'lucide-astro';

// Correct Lucide icon type for ANY icon
type LucideIcon = typeof CheckCircle2;

export interface Feature {
    icon: LucideIcon;
    title: string;
    description: string;
}

export interface FeatureList {
    id: string;
    features: Feature[];
}

export const featureLists: Record<string, FeatureList> = {
    main: {
        id: 'main',
        features: [
            {
                icon: BarChart3,
                title: 'Informs national health priorities and disease control programs',
                description: ''
            },
            {
                icon: Globe2,
                title: 'Helps track progress towards SDGs and UHC',
                description: ''
            },
            {
                icon: AlertTriangle,
                title: 'Identifies emerging health threats',
                description: ''
            },
            {
                icon: Activity,
                title: 'Guides allocation of health resources',
                description: ''
            },
            {
                icon: Scale,
                title: 'Strengthens accountability and governance',
                description: ''
            },
            {
                icon: CheckCircle2,
                title: 'Enables faster and evidence-based public health decision-making',
                description: ''
            },
        ]
    },
};
