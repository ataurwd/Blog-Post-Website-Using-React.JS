import { BsFillBookmarkCheckFill } from "react-icons/bs";

const SingleBlog = ({data, handelBookmark}) => {
    const {cover, title, author, author_img, post_data, reading_time, hashtags} = data;
    return (
        <div className="my-10 space-y-3">
            <img className="rounded-xl" src={cover} alt="" />
            <div className="flex justify-between">
                <div className="flex items-center">
                    <img className="w-12 h-12 rounded-full"  src={author_img} alt="" />
                    <h1 className="text-3xl ml-4">{author}</h1>
                </div>
                <div className="flex items-center">
                    <p>{reading_time}</p>
                    <button onClick={ () =>  handelBookmark(data)} className="ml-2">
                        <BsFillBookmarkCheckFill/>
                    </button>
                </div>
            </div>
            <h1 className="text-4xl font-bold">{title}</h1>
            <p className="w-3/4">{post_data}</p>
            <p >{
                    hashtags.map((hash, index) => <a key={index} href="">{hash}</a>)
                }</p>
            <button className="text-[#6047EC]">Mark as read</button>
        </div>
    );
};


export default SingleBlog;