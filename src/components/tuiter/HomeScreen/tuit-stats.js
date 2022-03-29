import { useDispatch } from "react-redux";

const TuitStats = ({ tuit }) => {
    const dispatch = useDispatch();
    const likeTuit = () => {
        dispatch({ type: 'like-tuit', tuit });
    };
    return (
        <div className="row">
            <span className="col">
                <i className="far fa-comment me-2"></i>{tuit.stats.comments}
                <i className="fas fa-retweet me-2"></i>{tuit.stats.retuits}
            </span>
            <span onClick={likeTuit} >
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
            <span>
                <i className="fas fa-share-square"></i>
            </span>
        </div>
    );
}
export default TuitStats;