import { CREATE_TUIT, DELETE_TUIT, FIND_ALL_TUITS } from "../../../actions/tuits-actions.js";

const tuitsReducer = (state = [], action) => {
    switch (action.type) {
        case FIND_ALL_TUITS:
            return action.tuits;
        case DELETE_TUIT:
            return state.filter(
                tuit => tuit._id !== action.tuit._id);
        case CREATE_TUIT:
            return [
                newTuit,
                ...state
            ];
        /*case 'like-tuit':
            return state.map(tuit => {
                if (tuit._id === action.tuit._id) {
                    if (tuit.liked === true) {
                        tuit.liked = false;
                        tuit.stats.likes--;
                    } else {
                        tuit.liked = true;
                        tuit.stats.likes++;
                    }
                    return tuit;
                } else {
                    return tuit;
                }
            });
        case 'delete-tuit':
            return state.filter(
                tuit => tuit._id !== action.tuit._id);
        case 'create-tuit':
            const newTuit = {
                tuit: action.tuit,
                _id: (new Date()).getTime() + '',
                handle: "AmongUs",
                postedBy: {
                    "username": "amongus"
                },
                logo: "../../../tuiter/among-us.png",
                avatar: "../../../tuiter/among-us.png",
                stats: {
                    retuits: 111,
                    likes: 222,
                    comments: 333
                }
            }
            return [
                newTuit,
                ...state,
            ];*/
        default:
            return state;
    }
}

export default tuitsReducer;