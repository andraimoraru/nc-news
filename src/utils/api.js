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
}
