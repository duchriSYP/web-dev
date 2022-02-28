import exploreItems from "./posts.js";
import PostSummaryItem from "./PostSummaryItem.js";

const PostSummaryList = () => {
    return (`
    ${exploreItems.map(post => {
        return (PostSummaryItem(post));
    }).join('')
        }
            `);
}

export default PostSummaryList;