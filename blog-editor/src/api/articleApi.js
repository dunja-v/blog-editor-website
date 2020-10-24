import { handleResponse } from "./apiUtils";

const baseUrl = "http://localhost:3001"

export function getArticles(){
    return fetch(baseUrl + "/articles")
        .then(handleResponse);
}

export function getArticle(articleId){
    return fetch(baseUrl  + "/articles/" + articleId)
        .then(handleResponse);
}

export function getAuthors(){
    return fetch(baseUrl + "/authors")
        .then(handleResponse);
}

export function getAuthor(authorId){
    return fetch(baseUrl + "/authors/" + authorId)
        .then(handleResponse);
}

export function getArticlesByAuthor(authorId){
    return fetch(baseUrl + "/articles?author=" + authorId)
        .then(handleResponse);
}

export function getUser(){
    return fetch(baseUrl + "/user")
        .then(handleResponse);
}
