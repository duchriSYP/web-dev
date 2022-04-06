import { useDispatch } from "react-redux";
import { updateTuit } from "../../../actions/tuits-actions.js";

const TuitStats = ({ tuit }) => {
    const dispatch = useDispatch();
    return (
        <div className="row">
            <span className="col">
                <i className="far fa-comment me-2"></i>{tuit.stats.comments}
            </span>
            <span className="col">
                <i className="fas fa-retweet me-2"></i>{tuit.stats.retuits}
            </span>
            <span className="col"
                onClick={() => updateTuit(dispatch, {
                    ...tuit,
                    likes: tuit.stats.likes + 1,
                    liked: !tuit.liked
                })} >
                {
                    tuit.liked &&
                    <i className="fas fa-heart me-2"
                        style={{ color: 'red' }}></i>
                }
                {
                    !tuit.liked &&
                    <i className="far fa-heart me-2"></i>
                }
                {tuit.stats && tuit.stats.likes}
            </span >
            <span className="col">
                <i className="fas fa-share-square"></i>
            </span>
        </div>
    );
}
export default TuitStats;