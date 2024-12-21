import { defineCollection } from 'astro:content';
import { glob, file } from 'astro/loaders';

const blog = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/data/blog" })
});

const project = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/data/projects" })
});

export const collections = { blog, project };