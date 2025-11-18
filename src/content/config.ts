import { defineCollection, z } from "astro:content";

const illustrators = defineCollection({
    type: "content",
    schema: ({ image }) =>
        z.object({
            name: z.string(),
            status: z.enum(["commissioned", "wishlist"]),
            avatar: image(),
            priority: z.enum(["S", "A", "B", "C"]).optional(),
            order: z.number().optional(),
            tags: z.array(z.string()).optional(),
            links: z
                .object({
                    twitter: z.string().url().optional(),
                    pixiv: z.string().url().optional(),
                    skeb: z.string().url().optional(),
                    website: z.string().url().optional(),
                })
                .optional(),
            imageLink: z.string().url().optional(),
        }),
});

export const collections = {
    illustrators,
};
