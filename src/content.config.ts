import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
import { categories } from '@data/categories';

// Extract category names for the blog enum
const categoryNames = categories.map((category) => category.name);

/* ===============================
   BLOG
================================ */
const blog = defineCollection({
  loader: glob({ base: './src/content/blog', pattern: '**/*.md' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      excerpt: z.string(),
      featuredImage: image().optional(),
      publishDate: z.string().transform((str) => new Date(str)),
      publish: z.boolean().optional(),

      categories: z.array(z.enum(categoryNames as [string, ...string[]])),

      gallery: z
        .array(
          z.object({
            src: z.string(),
            title: z.string().optional(),
          })
        )
        .optional(),

      activities: z
        .array(
          z.object({
            year: z.string(),
            items: z.array(z.string()),
          })
        )
        .optional(),
        
      subAlbum: z
        .object({
          album: z.string(),
          subalbum: z.string(),
        })
        .optional(),

      seo: z
        .object({
          title: z.string().optional(),
          description: z.string().optional(),
          image: z.string().optional(),
        })
        .optional(),
    }),
});

/* ===============================
   TEAM
================================ */
const team = defineCollection({
  loader: glob({ base: './src/content/team', pattern: '**/*.md' }),
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      headshot: image().optional(),
      jobTitle: z.string(),
      email: z.string().optional(),

      linkedin: z.string().url().optional(),
      linkedinUsername: z.string().optional(),
      xSocial: z.string().url().optional(),
      xSocialUsername: z.string().optional(),
      github: z.string().url().optional(),
      githubUsername: z.string().optional(),

      order: z.number().default(999),
      publish: z.boolean().default(true),
    }),
});

/* ===============================
   LEGAL
   src/content/legal */
const legal = defineCollection({
  loader: glob({ base: './src/content/legal', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(),
    lastUpdated: z.string().transform((str) => new Date(str)),

    seo: z
      .object({
        title: z.string().optional(),
        description: z.string().optional(),
      })
      .optional(),
  }),
});

/* ===============================
   MAIN ALBUMS
   src/content/albums/*.md
================================ */
const albums = defineCollection({
  loader: glob({ base: './src/content/albums', pattern: '*.md' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string().optional(),

      // Main gallery cover
      cover: image(),

      order: z.number().optional(),
      publish: z.boolean().optional(),
    }),
});

/* ===============================
   SUB ALBUMS
   src/content/albums/** */
const subalbums = defineCollection({
  loader: glob({ base: './src/content/albums', pattern: '**/index.md' }),
  schema: ({ image }) =>
    z.object({
      // Sub album title (ex: Day 1, Indoor, etc.)
      title: z.string(),

      // Sub album preview image
      cover: image(),

      order: z.number().optional(),
      publish: z.boolean().optional(),
    }),
});

/* ===============================
   EXPORTS
================================ */
export const collections = {
  blog,
  team,
  legal,
  albums,
  subalbums,
};
