import * as request from "../services/requester";

const baseUrl = 'http://localhost:3030/jsonstore/comments';
export const getAll = async (bookId) => {
    const query = encodeURIComponent(`gameId="${bookId}"`);
    const result = await request.get(`${baseUrl}?where=${query}`);
    const comments = Object.values(result);
    return comments;

}

export const create = async (data) => {
    const result = await request.post(baseUrl, data);
    return result;
}

// export const addComment = async (bookId, data) => {
//     const result = await request.post(`${baseUrl}/${bookId}/comments`, data);
//     return result 
// }
