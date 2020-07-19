import { handleResponse } from "./apiUtils";

const baseUrl = "http://localhost:3001/articles"

export function getArticles(){
    return fetch(baseUrl)
        .then(handleResponse);
}
