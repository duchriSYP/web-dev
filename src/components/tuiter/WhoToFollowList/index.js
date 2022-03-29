import WhoToFollowListItem from "./WhoToFollowListItem";
import { useSelector } from "react-redux";

const WhoToFollowList = () => {
    const who = useSelector((state) => state.who);
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
