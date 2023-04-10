import * as request from "./requester";

const baseUrl = 'http://localhost:3030/jsonstore/books';

export const getAll = async () => {
    const result = await request.get(baseUrl)
    const books = Object.values(result);
    
    return books;
}

export const getOne = async (bookId) => {
    const result = await request.get(`${baseUrl}/${bookId}`);
    console.log(result);
    return result
}

export const create = async (bookData) => {
    const result = request.post(baseUrl, bookData);
    return result
}

export const addComment = async (bookId, data) => {
    const result = await request.post(`${baseUrl}/${bookId}/comments`, data);
    return result 
}
