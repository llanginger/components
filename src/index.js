import React from "react";
import { render } from "react-dom";
import styled from "styled-components";

import { ComponentDisplay } from "./ComponentDisplay";
import { ComponentPicker } from "./ComponentPicker";

import { store } from "./store";

import { DISPLAY_COMPONENT } from "./actions/actions";

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

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.unsubscribe = store.subscribe(() => this.forceUpdate());
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    render() {
        return (
            <MainApp>
                <ComponentPicker />
                <ComponentDisplay />
            </MainApp>
        );
    }
}
render(<App />, document.getElementById("root"));
