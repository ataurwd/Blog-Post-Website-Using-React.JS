const SingleBook = ({ bookPost }) => {
    const { title } = bookPost; // Correctly destructure title from bookPost

    return (
        <div className="bg-slate-300 my-4 rounded-xl p-3">
            <h3 className="text-x">{title}</h3> {/* Added "Post:" for clarity */}
        </div>
    );
};

export default SingleBook;
