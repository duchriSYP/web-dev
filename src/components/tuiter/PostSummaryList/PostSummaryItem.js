const PostSummaryItem = (
    {
        post = {
            "topic": "Web Development",
            "userName": "ReactJS",
            "time": "2h",
            "title": "React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs",
            "image": "../../../tuiter/reactjs.png"
        }
    }) => {
    return (
        <div>
            <div className="row border border-secondary pb-1">
                <div className="col-10 mt-1">
                    {post.topic ? <div> <span className="wd-subtext">{post.topic}</span> <br /> </div> : ""}
                    <span className="fw-bold wd-title-text">
                        {post.userName}
                        <i className="fa-solid fa-circle-check" />
                        <span className="wd-subtext"> - {post.time}</span>
                    </span> <br />
                    <span className="fw-bold wd-title-text">{post.title}</span>
                </div>
                <div className="col-2 mt-1">
                    <img src={post.image} alt={post.userName} className="img-thumbnail wd-image-icons" />
                </div>
            </div>
        </div>
    );
}

export default PostSummaryItem;