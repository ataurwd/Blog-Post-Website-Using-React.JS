import { useState } from 'react'
import Blog from './components/Blog'
import Bookmark from './components/Bookmark'
import Header from './components/Header'

function App() {
  const [bookmark, setBookmark] = useState([])
  const handelBookmark = blog => {
    const newBookmark = [...bookmark, blog]
    setBookmark(newBookmark)
  }
  return (
    <>
    <Header/>
    <div className='md:flex w-[90%] md:mx-auto md:mt-10 p-5'>
    <Blog clickData={handelBookmark}/>
    <Bookmark/>
    </div>
    </>
  )
}

export default App
