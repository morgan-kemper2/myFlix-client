import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';

import { MainView } from './components/main-view/main-view';

import Container from 'react-bootstrap/Container';


class myFlixApplication extends React.Component {
    render() {
        return (
            <Container>
                <MainView/>
            </Container>
        );
    }
}

const container = document.getElementsByClassName('app-container')[0];

ReactDOM.render(React.createElement(myFlixApplication), container);