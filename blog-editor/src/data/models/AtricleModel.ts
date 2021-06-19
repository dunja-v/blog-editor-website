export type ArticleModel = {
    id: string;
    title: string,
    summary: string,
    text: string,
    image: string, // TODO rename to imageUrl
    date: Date,
    author: string, // TODO rename to authorId
    authorName?: string,
};
