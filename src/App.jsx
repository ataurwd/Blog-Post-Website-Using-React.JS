import Blog from './components/Blog'
import Bookmark from './components/Bookmark'
import Header from './components/Header'

function App() {

  return (
    <>
    <Header/>
    <div className='md:flex w-[90%] bg-sky-100 md:mx-auto md:mt-10'>
    <Blog/>
    <Bookmark/>
    </div>
    </>
  )
}

export default App
