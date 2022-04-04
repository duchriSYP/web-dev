import React, { useEffect } from "react";
import TuitListItem from "./TuitListItem";
import { useDispatch, useSelector } from "react-redux";
import { findAllTuits } from "../../actions/tuits-actions";
//import './tuits.css';

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