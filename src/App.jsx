import './App.css'
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import ArticlesList from './components/ArticlesList'
import SingleArticle from './components/SingleArticle'
import UsersList from './components/UsersList'
import TopicsList from './components/TopicsList'
import ArticlesByTopic from './components/ArticlesByTopic'
import Footer from './components/Footer'


function App() {

  return (
    <>          
    <NavBar />
    <div className='container'>
      <Routes>
        <Route path = "/" element={<ArticlesList/>}/>
        <Route path = "/articles" element={<ArticlesList/>}/>
        <Route path = "/articles/:article_id" element={<SingleArticle/>}/>
        <Route path = "/users" element={<UsersList/>}/>
        <Route path = "/topics" element={<TopicsList/>}/>
        <Route path = "/articles/topic/:slug" element={<ArticlesByTopic />}/>
      </Routes>
      <Footer />
    </div>
    </>
  );
};

export default App;
