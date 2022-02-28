import who from "./who.js";
import WhoToFollowListItem from "./WhoToFollowListItem.js";

const WhoToFollowList = () => {
    return (`
            <ul class="list-group">
                <li class="list-group-item ">
                        <b>Who to follow</b>
                </li>
                ${who.map(account => {
        return (WhoToFollowListItem(account));
    }).join('')
        }
            </ul>
            `);
}

export default WhoToFollowList;
