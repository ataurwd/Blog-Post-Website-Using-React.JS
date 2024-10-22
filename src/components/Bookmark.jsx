import SingleBook from "./SingleBook";

const Bookmark = ({ book , reading}) => {
    return (
        <div className="md:w-1/3 ml-5 p-3">
            <div>
                <h3>Reading Time: {reading} Min</h3>
            </div>
            <h1 className="text-xl font-bold">Bookmarked Blogs: {book.length}</h1>
            {
                book.map(bookPost => (
                    <SingleBook key={bookPost.id} bookPost={bookPost} />
                ))
            }
        </div>
    );
};

export default Bookmark;
