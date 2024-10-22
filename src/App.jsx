import { useState } from 'react';
import Blog from './components/Blog';
import Bookmark from './components/Bookmark';
import Header from './components/Header';

function App() {
  const [bookmarks, setBookmark] = useState([]);
  const [reading, setReading] = useState(0)
  
  // Correct the typo here
  const handleBookmark = (blog) => {
    const newBookmark = [...bookmarks, blog];
    setBookmark(newBookmark);
  };

  const handelMarkAsRead = time => {    
    setReading(reading + Number(time))
  }

  return (
    <>
      <Header />
      <div className='md:flex w-[90%] md:mx-auto md:mt-10 p-5'>
        <Blog clickData={handleBookmark} handelMarkAsRead={handelMarkAsRead} />
        <Bookmark book={bookmarks} reading={reading}/>
      </div>
    </>
  );
}

export default App;
