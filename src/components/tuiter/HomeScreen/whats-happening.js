import { useDispatch } from "react-redux";

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
        <div>
            <textarea value={whatsHappening}
                onChange={(event) =>
                    setWhatsHappening(event.target.value)}>
            </textarea>
            <button onClick={tuitClickHandler}>
                Tuit
            </button>
        </div>
    );
}

export default WhatsHappening;