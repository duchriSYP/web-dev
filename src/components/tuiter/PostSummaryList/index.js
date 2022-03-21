import posts from "./posts";
import PostSummaryItem from "./PostSummaryItem";

const PostSummaryList = () => {
    return (
        <div>
            {
                posts.map(post => {
                    return (<PostSummaryItem post={post} />);
                })
            }
        </div>
    );
}

export default PostSummaryList;