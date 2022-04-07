import { useDispatch, useSelector } from "react-redux";
import { updateTuit } from "../../../actions/tuits-actions.js";

const TuitStats = ({ tuit }) => {
    const tuits = useSelector(state => state.tuits);
    const dispatch = useDispatch();
    console.log(tuit.stats);
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
                    likes: tuit.liked === true ? tuit.likes - 1 : tuit.likes + 1,
                    liked: !tuit.liked
                })} >
                {
                    tuit.liked &&
                    <i className="fas fa-heart me-2" style={{ color: 'red' }}></i>
                }
                {
                    !tuit.liked &&
                    <i className="far fa-heart me-2"></i>
                }
                {tuit.stats && tuit.likes}
            </span >
            <span className="col"
                onClick={() => updateTuit(dispatch, {
                    ...tuit,
                    dislikes: tuit.disliked === true ? tuit.dislikes - 1 : tuit.dislikes + 1,
                    disliked: !tuit.disliked
                })} >
                {
                    tuit.disliked &&
                    <i class="fa-solid fa-thumbs-down me-2" style={{ color: 'lightblue' }}></i>
                }
                {
                    !tuit.disliked &&
                    <i className="far fa-thumbs-down me-2"></i>
                }
                {tuit.stats && tuit.dislikes}
            </span>
            <span className="col">
                <i className="fas fa-share-square"></i>
            </span>
        </div >
    );
}
export default TuitStats;