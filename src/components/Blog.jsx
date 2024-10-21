/* eslint-disable react/jsx-key */
import { useEffect } from "react";
import { useState } from "react";
import SingleBlog from "./SingleBlog";

const Blog = ({clickData}) => {
    const [blogs, setBlogs] = useState([])
    useEffect(() => {
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])
    
    return (
        <div className="md:w-2/3 mr-5">
            {
                blogs.map(blog => <SingleBlog 
                    key={blog.id} 
                    data={blog}
                    handelBookmark={clickData}
                    />
                )}
        </div>
    );
}
export default Blog;