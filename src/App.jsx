import './App.css'
import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import NavBar from './components/NavBar'
import Home from './components/Home'
import ArticlesList from './components/ArticlesList'
import SingleArticle from './components/SingleArticle'



function App() {

  return (
    <div className='container'>
      <Header />
      <NavBar />
      <Routes>
        <Route path ="/" element={<Home/>}/>
        <Route path = "/articles" element={<ArticlesList/>}/>
        <Route path = "/articles/:article_id" element={<SingleArticle/>}/>
      </Routes>
    </div>
  )
}

export default App;
