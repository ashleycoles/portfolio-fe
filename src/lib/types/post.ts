export interface PostExcerpt {
    id: number;
    title: string;
    slug: string;
    featuredImage: string;
    excerpt: string;
    created_at: string;
}

export interface Post extends PostExcerpt {
    content: string;
}

export interface CreatePostData {
    title: string;
    slug: string;
    excerpt: string;
    content: string;
    featuredImage: File;
}
