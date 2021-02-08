import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { devToolsEnhancer } from 'redux-devtools-extension';

import MainView from "./components/main-view/main-view";
import moviesApp from "./reducers/reducers";

import "./index.scss";

import Container from "react-bootstrap/Container";

const store = createStore(moviesApp, devToolsEnhancer());

class myFlixApplication extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Container>
          <MainView />
        </Container>
      </Provider>
    );
  }
}

const container = document.getElementsByClassName("app-container")[0];

ReactDOM.render(React.createElement(myFlixApplication), container);
