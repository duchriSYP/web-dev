import tuits from "../TuitList/tuits.json";

const tuitsReducer =
    (state = tuits, action) => {
        switch (action.type) {
            case 'like-tuit':
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
                ];
            default:
                return tuits
        }
    }

export default tuitsReducer;