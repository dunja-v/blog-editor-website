import { ArticleModel } from ".";

export type AuthorModel = {
    name: string,
    summary: string,
    article: ArticleModel,
};
