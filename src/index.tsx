import * as React from "react";
import * as ReactDOM from "react-dom";
import styled from "styled-components";
import { Provider, connect } from "react-redux";

console.log("Provider: ", Provider);
import { ComponentDisplay } from "./displayComponentArea/ComponentDisplay";
import { ComponentPicker } from "./selectComponentArea/ComponentPicker";
import { NavBar } from "./mainComponents/NavBar";
import { store } from "./store";

const MainApp = styled.div`
    font-family: sans-serif;
    height: 100%;
    display: flex;
    flex-direction: row;
    padding: 10px;

    *::-webkit-scrollbar-track {
        -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
        background-color: #f5f5f5;
    }

    *::-webkit-scrollbar {
        width: 6px;
        background-color: #f5f5f5;
    }

    *::-webkit-scrollbar-thumb {
        background-color: rgba(0, 0, 0, 0.2);
    }
`;

const AppContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
`;

const App = props => {
    return (
        <AppContainer>
            <NavBar />
            <MainApp>
                <ComponentPicker />
                <ComponentDisplay />
            </MainApp>
        </AppContainer>
    );
};

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);
