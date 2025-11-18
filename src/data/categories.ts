interface Category {
  name: string;
  slug: string;
  description: string;
}

export const categories: Category[] = [
  {
    name: 'Announcements',
    slug: 'announcements',
    description: ''
  },
  {
    name: 'Documents',
    slug: 'documents',
    description: ''
  },
  {
    name: 'News',
    slug: 'news',
    description: ''
  },
  {
    name: 'Training',
    slug: 'training',
    description: ''
  },
  {
    name: 'Meeting',
    slug: 'meeting',
    description: ''
  },

];

// Helper function to get category by slug
export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find(category => category.slug === slug);
}