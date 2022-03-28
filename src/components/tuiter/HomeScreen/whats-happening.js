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
            <img src={"../../../tuiter/among-us.png"} className="wd-avatar" />
            <textarea
                className="wd-text-area"
                placeholder="What's happening?"
                value={whatsHappening} onChange={(event) => setWhatsHappening(event.target.value)}>
            </textarea>
            <button onClick={tuitClickHandler}>
                Tuit
            </button>
        </div>
    );
}

export default WhatsHappening;