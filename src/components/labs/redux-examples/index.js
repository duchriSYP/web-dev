import React from "react";
import HelloReduxExampleComponent
    from "./hello-redux-example-component";
import hello from "./reducers/hello";
import todos from "./reducers/todos-reducer";
import { Provider } from "react-redux";
import { createStore, combineReducers }
    from "redux";
import Todos from "./todos-component";

const reducers = combineReducers({ hello, todos })

const ReduxExamples = () => {
    return (
        <Provider store={reducers}>
            <div>
                <h2>Redux Examples</h2>
                <Todos />
                <HelloReduxExampleComponent />
            </div>
        </Provider>
    );
};
export default ReduxExamples;