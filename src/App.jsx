import './App.css'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import NavBar from './components/NavBar'
import Home from './components/Home'
import ArticlesList from './components/ArticlesList'
import SingleArticle from './components/SingleArticle'
import UsersList from './components/UsersList'
import TopicsList from './components/TopicsList'
import TopicCard from './components/TopicCard'
import ArticlesByTopic from './components/ArticlesByTopic'


function App() {

  return (
    <div className='container'>
      <Header />
      <NavBar />
      <Routes>
        <Route path ="/" element={<Home/>}/>
        <Route path = "/articles" element={<ArticlesList/>}/>
        <Route path = "/articles/:article_id" element={<SingleArticle/>}/>
        <Route path = "/users" element={<UsersList/>}/>
        <Route path = "/topics" element={<TopicsList/>}/>
        <Route path = "/articles?topic=coding" element={<ArticlesByTopic/>}/>
        <Route path = "/articles?topic=football" element={<ArticlesByTopic/>}/>
        <Route path = "/articles?topic=cooking" element={<ArticlesByTopic/>}/>
      </Routes>
    </div>
  );
};

export default App;
