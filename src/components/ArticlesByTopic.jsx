import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getArticlesByTopic } from "../utils/api";
import ArticleCard from "./ArticleCard";

export default function ArticlesByTopic() {
  const [articles, setArticles] = useState([]);
  const { slug } = useParams(); 

  useEffect(() => {
    if (slug) {
      getArticlesByTopic(slug)
        .then((articlesFromApi) => {
          setArticles(articlesFromApi);
        })
        .catch(error => {
          console.error("Failed to fetch articles by topic:", error);
        });
    }
  }, [slug]);
  

  return (
    <>
      {articles.map((article) => (
        <ArticleCard key={article.article_id} article={article} />
      ))}
    </>
  );
}
