import React, { useEffect } from "react";
import TuitListItem from "./TuitListItem";
import { useDispatch, useSelector } from "react-redux";
//import * as service from '../../../services/tuits-service.js';
import { findAllTuits } from "../../../actions/tuits-actions.js";

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
                    <TuitListItem key={tuit._id} tuit={tuit} />)
            }
        </ul>
    );
}

export default TuitList;