import tuits from "../TuitList/tuits.json";

const tuitsReducer =
    (state = tuits, action) => {
        switch (action.type) {
            case 'delete-tuit':
                return state.filter(
                    tuit => tuit._id !== action.tuit._id);
            case 'create-tuit':
                const newTuit = {
                    tuit: action.tuit,
                    _id: (new Date()).getTime() + '',
                    postedBy: {
                        "username": "ReactJS"
                    },
                    stats: {
                        retuits: 111,
                        likes: 222,
                        replies: 333
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