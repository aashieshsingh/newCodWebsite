import { Zap, Shield, Heart, Coffee, Smile, Type, TabletSmartphone, CodeXml } from 'lucide-astro';

// Define the LucideIcon type based on the structure of Lucide icons
type LucideIcon = typeof Zap;

export interface Feature {
    icon: LucideIcon;
    title: string;
    description: string;
}

export interface FeatureList {
    id: string;
    features: Feature[];
}

// Example feature lists
export const featureLists: Record<string, FeatureList> = {
    main: {
        id: 'main',
        features: [
            {
                icon: Shield,
                title: 'Informs national health priorities and disease control programs',
                description: ''
            },
            {
                icon: Shield,
                title: 'Helps track progress towards SDGs and UHC',
                description: ''
            },
            {
                icon: Shield,
                title: 'Identifies emerging health threats',
                description: ''
            },
            {
                icon: Shield,
                title: 'Guides allocation of health resources',
                description: ''
            },
            {
                icon: Shield,
                title: 'Strengthens accountability and governance',
                description: ''
            },
            
        ]
    },
};
