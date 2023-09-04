import axios from "axios";

const NCNews = axios.create({
    baseURL: 'https://andrasnews.onrender.com/api'
  });

  export const getArticles = () => {
    return NCNews
        .get(`/articles`)
        .then((response) => response.data.articles)
};
