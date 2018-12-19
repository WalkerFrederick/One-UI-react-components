import React, { Component } from 'react';
import { Container, Row, Col } from 'react-grid-system';
import './App.css';

import ActionCard from './components/ActionCard';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
                testVar: 'hello'
            };
    }

    consoleCandy = () => {
        console.log(this.state.testVar)
    }

  render() {
    return (
      <div className="App">
          <Container>
              <Row>
                  <Col sm={3}>
                      <ActionCard headline={'Hello, World'}
                                  body={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation'}
                                  buttonText={'VIEW MORE'}
                                  buttonFunction={this.consoleCandy.bind(this)}
                      />
                  </Col>
              </Row>
          </Container>

      </div>
    );
  }
}

export default App;
