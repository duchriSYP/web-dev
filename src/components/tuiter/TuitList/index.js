import React, { useEffect } from "react";
import TuitListItem from "./TuitListItem";
import { useDispatch, useSelector } from "react-redux";
//import * as service from '../../../services/tuits-service.js';
import { deleteTuit, findAllTuits } from "../../../actions/tuits-actions.js";

const TuitList = () => {
    const tuits = useSelector(state => state.tuits);
    const dispatch = useDispatch();
    useEffect(() =>
        findAllTuits(dispatch),
        []);
    return (
        <ul className="list-group">
            {
                tuits.map && tuits.map(tuit =>
                    <div>
                        <i className="fas fa-remove float-end"
                            onClick={() => deleteTuit(dispatch, tuit)}>
                        </i>
                        <TuitListItem key={tuit._id} tuit={tuit} />
                    </div>
                )
            }
        </ul>
    );
}

export default TuitList;