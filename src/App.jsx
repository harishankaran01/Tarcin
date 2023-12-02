import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import Blog from './pages/Blog'
import Courses from './pages/Courses'
import About from './pages/About'

export default function App(){
  return(
    <>

    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/blog' element={<Blog/>}/>
      <Route path='/courses' element={<Courses/>}/>
      <Route path='/about' element={<About/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}