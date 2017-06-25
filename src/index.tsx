import * as React from "react";
import * as ReactDOM from "react-dom";
import styled from "styled-components";
import { Provider, connect } from "react-redux";

console.log("Provider: ", Provider);
import { ComponentDisplay } from "./ComponentDisplay";
import { ComponentPicker } from "./ComponentPicker";
import { store } from "./store";

const MainApp = styled.div`
  font-family: sans-serif;
  height: 100%;
  display: flex;
  flex-direction: row;
  margin-bottom: 50px;
  padding: 10px;

  *::-webkit-scrollbar-track {
      -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
      background-color: #F5F5F5;
  }

  *::-webkit-scrollbar {
      width: 6px;
      background-color: #F5F5F5;
  }

  *::-webkit-scrollbar-thumb {
      background-color: rgba(0,0,0,0.2);
  }
`;

const App = props => {
    return (
        <MainApp>
            <ComponentPicker />
            <ComponentDisplay />
        </MainApp>
    );
};

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);
