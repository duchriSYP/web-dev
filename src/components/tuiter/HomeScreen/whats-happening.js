import { useState } from "react";
import { useDispatch } from "react-redux";
import '../TuitList/tuit.css';

const WhatsHappening = () => {
    let [whatsHappening, setWhatsHappening] = useState('');
    const dispatch = useDispatch();
    const tuitClickHandler = () => {
        dispatch({
            type: 'create-tuit',
            tuit: whatsHappening
        });
    }

    return (
        <div className="row">
            <div className="col-1">
                <img src="../../../tuiter/among-us.png" className="wd-avatar rounded-circle" />
            </div>
            <div className="col-11">
                <div className="row">
                    <textarea
                        className="wd-text-area"
                        placeholder="What's happening?"
                        value={whatsHappening} onChange={(event) => setWhatsHappening(event.target.value)}>
                    </textarea>
                </div>
                <div className="row justify-content-between">
                    <div>
                        <i className="fas fa-image pe-2 wd-highlight-color"></i>
                        <i className="fas fa-chart-line pe-2 wd-highlight-color"></i>
                        <i className="fas fa-smile pe-2 wd-highlight-color"></i>
                        <i className="fas fa-calendar wd-highlight-color"></i>
                    </div>
                    <button className="btn btn-primary btn-block rounded-pill wd-tuit-button" onClick={tuitClickHandler}>
                        Tuit
                    </button>
                </div>
            </div>
        </div>
    );
}

export default WhatsHappening;