import './App.css';
import React from 'react';
import logo from './logo.png';
import AutoSuggestContainer from './components/AutoSuggest';
import { Container, Image, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
    render() {
        return (
            <Container className="App">
                <Row className="justify-content-md-center">
                    <Col lg="2">
                        <Image src={logo} height="150" width="150" alt="logo" />
                    </Col>
                </Row>
                <Row>
                    <AutoSuggestContainer />
                </Row>
            </Container>
        );
    }
}

export default App;
