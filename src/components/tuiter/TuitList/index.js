import React from "react";
import tuits from "./tuits.json";
import TuitListItem from "./TuitListItem";
import './tuits.css';

const TuitList = () => {
    return (
        <ul className="ttr-tuits list-group">
            {
                tuits.map && tuits.map(tuit =>
                    <TuitListItem key={tuit._id}
                        tuit={tuit} />)
            }
        </ul>
    );
}

export default TuitList;