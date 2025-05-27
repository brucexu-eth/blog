import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
    tags: z.array(z.string()).default([]),
    category: z.string().optional(),
    lang: z.enum(['zh', 'en']).default('zh'),
    draft: z.boolean().default(false),
  }),
});

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string().optional(),
    url: z.string().optional(),
    github: z.string().optional(),
    tech: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    lang: z.enum(['zh', 'en']).default('zh'),
  }),
});

const interviews = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    guest: z.string(),
    guestBio: z.string().optional(),
    audioUrl: z.string().optional(),
    videoUrl: z.string().optional(),
    lang: z.enum(['zh', 'en']).default('zh'),
  }),
});

const experiments = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    status: z.enum(['active', 'completed', 'paused']).default('active'),
    tech: z.array(z.string()).default([]),
    url: z.string().optional(),
    lang: z.enum(['zh', 'en']).default('zh'),
  }),
});

export const collections = {
  blog,
  projects,
  interviews,
  experiments,
};
