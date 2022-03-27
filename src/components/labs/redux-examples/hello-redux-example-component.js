import { useSelector } from "react-redux";

const HelloReduxExampleComponent = () => {
    const message = useSelector((hello) => hello.message);
    return (
        <h1>{message}</h1>
    );
};

export default HelloReduxExampleComponent;