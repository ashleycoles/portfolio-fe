export interface PostExcerpt {
    id: number;
    title: string;
    slug: string;
    featuredImage: string;
    excerpt: string;
}

export interface Post extends PostExcerpt {
    content: string;
}
