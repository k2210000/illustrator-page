import { defineCollection, z } from "astro:content";

const illustrators = defineCollection({
    type: "content",
    schema: ({ image }) =>
        z.object({
            name: z.string(),                             // 繪師名稱
            status: z.enum(["commissioned", "wishlist"]), // 已委託 / 想委託
            avatar: image(),                              // 代表圖片
            tags: z.array(z.string()).optional(),         // 類型標籤
            links: z
                .object({
                    twitter: z.string().url().optional(),
                    pixiv: z.string().url().optional(),
                    website: z.string().url().optional(),
                    skeb: z.string().url().optional(),
                })
                .optional(),
            imageLink: z.string().url().optional(),

            priority: z.enum(["S", "A", "B", "C"]).optional(),
            order: z.number().optional(),

        }),
});

export const collections = {
    illustrators,
};
