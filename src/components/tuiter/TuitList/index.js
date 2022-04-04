import React, { useEffect } from "react";
import TuitListItem from "./TuitListItem";
import { useDispatch, useSelector } from "react-redux";
import * as service from '../../services/tuits-service';
import { findAllTuits } from "../../../actions/tuits-actions.js";
//import './tuits.css';

const TuitList = () => {
    const tuits = useSelector(state => state.tuits);
    const dispatch = useDispatch();
    const findAllTuits = async () => {
        const tuits = await service.findAllTuits();
        dispatch({
            type: 'FIND_ALL_TUITS',
            tuits: tuits
        });
    }
    useEffect(findAllTuits, []);
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