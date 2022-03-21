import who from "./who.json";
import WhoToFollowListItem from "./WhoToFollowListItem";

const WhoToFollowList = () => {
    return (
        <ul className="list-group">
            <li className="list-group-item ">
                <b>Who to follow</b>
            </li>
            {who.map(account => {
                return (
                    <WhoToFollowListItem who={account} />
                );
            })
            }
        </ul>
    );
}

export default WhoToFollowList;
