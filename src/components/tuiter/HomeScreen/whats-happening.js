import { useState } from "react";
import { useDispatch } from "react-redux";
import '../TuitList/tuit.css';
import { createTuit } from "../../../actions/tuits-actions.js";
/*
    const tuitClickHandler = () => {
        dispatch({
            type: 'create-tuit',
            tuit: whatsHappening
        });
    } 
    */
const WhatsHappening = () => {
    let [whatsHappening, setWhatsHappening] = useState('');
    const dispatch = useDispatch();
    const [newTuit, setNewTuit] =
        useState({ tuit: '' });
    return (
        <div className="row">
            <div className="col-1">
                <img src="../../../tuiter/among-us.png" className="wd-avatar rounded-circle" />
            </div>
            <div className="col-11">
                <div className="row">
                    <textarea
                        className="form-control"
                        placeholder="What's happening?"
                        style={{
                            width: "100%", color: "white",
                            padding: "0px",
                            paddingTop: "15px",
                            backgroundColor: "black"
                        }}
                        value={newTuit}
                        onChange={(e) =>
                            setNewTuit({
                                ...newTuit,
                                tuit: e.target.value
                            })}>
                    </textarea>
                </div>
                <div className="row">
                    <div className="col-4">
                        <span>
                            <i className="far fa-image me-3 wd-highlight-color"></i>
                            <i className="fas fa-chart-line me-3 wd-highlight-color"></i>
                            <i className="far fa-smile me-3 wd-highlight-color"></i>
                            <i className="far fa-calendar me-3 wd-highlight-color"></i>
                        </span>
                    </div>
                    <div className="col-8">
                        <button
                            className="btn btn-primary btn-block rounded-pill fa-pull-right"
                            onClick={() => createTuit(dispatch, newTuit)}>
                            Tweet
                    </button>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default WhatsHappening;