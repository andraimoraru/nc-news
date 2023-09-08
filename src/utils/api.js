import axios from "axios";

const NCNews = axios.create({
    baseURL: 'https://andrasnews.onrender.com/api'
  });

  export const getArticles = () => {
    return NCNews
        .get(`/articles`)
        .then((response) => response.data.articles)
};

export const getArticleById = (article_id) => {
  return NCNews
      .get(`/articles/${article_id}`)
      .then((response) => {
        return response.data})
};

export const getCommentsByArticleId =(article_id) => {
  return NCNews
      .get(`/articles/${article_id}/comments`)
      .then((response)=> {
        return response.data
      })
};

export const increaseVotesByArticleId = (article_id) => {
  return NCNews
  .patch(`/articles/${article_id}`, { inc_votes : 1 })
};

export const decreaseVotesByArticleId = (article_id) => {
  return NCNews
  .patch(`/articles/${article_id}`, { inc_votes : -1 })
};

export const postComment = (article_id, username, comment) => {
  return NCNews
  .post(`/articles/${article_id}/comments`, {username: username, body : comment})
};

export const getUsers = () => {
  return NCNews
  .get(`/users`)
  .then((response) =>  response.data.users)
};