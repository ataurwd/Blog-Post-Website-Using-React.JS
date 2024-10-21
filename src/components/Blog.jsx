/* eslint-disable react/jsx-key */
import { useEffect } from "react";
import { useState } from "react";

const Blog = () => {
    const [blogs, setBlogs] = useState([])
    useEffect(() => {
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])
    return (
        <div className="md:w-2/3">
            
        </div>
    );
}
export default Blog;