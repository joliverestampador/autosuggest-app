import './App.css';
import React from 'react';
import logo from './images/logo.png';
import AutoSuggestContainer from './components/AutoSuggest';
import Watchlist from './components/Watchlist';
import { Container, Image, Row, Col } from 'react-bootstrap';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
    render() {
        return (
            <Container className="app">
                <Row>
                    <Col className="logo">
                        <Image src={logo} height="150" width="150" alt="logo" />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <AutoSuggestContainer />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Watchlist />
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default App;
