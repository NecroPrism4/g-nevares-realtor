import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const blogsCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blogs" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      pubDate: z.date(),
      author: z.string().optional(),
      tags: z.array(z.string()).optional(),
      draft: z.boolean().optional(),
      image: z
        .object({
          url: image(),
          alt: z.string().optional(),
        })
        .optional(),
    }),
});

const listingsCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/listings" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    price: z.number().int().nonnegative(),
    currency: z.string().default("USD"),
    location: z.string(),
    type: z.enum([
      "house",
      "condo",
      "townhouse",
      "apartment",
      "land",
      "commercial",
    ]),
    bedrooms: z.number().int().nonnegative().default(0),
    bathrooms: z.number().nonnegative().default(0),
    areaSqFt: z.number().int().nonnegative().optional(),
    lotSizeSqFt: z.number().int().nonnegative().optional(),
    address: z.string().optional(),
    city: z.string().optional(),
    state: z.string().optional(),
    postalCode: z.string().optional(),
    country: z.string().default("Mexico"),
    coords: z
      .object({
        lat: z.number(),
        lng: z.number(),
      })
      .optional(),
    features: z.array(z.string()).default([]),
    images: z.array(z.string()).default([]), // allow remote URLs for now
    yearBuilt: z.number().int().optional(),
    parking: z.string().optional(),
    hoaFees: z.number().optional(),
    status: z.enum(["available", "pending", "sold"]).default("available"),
    featured: z.boolean().default(false),
    slug: z.string().optional(),
  }),
});

export const collections = {
  blogs: blogsCollection,
  listings: listingsCollection,
};
