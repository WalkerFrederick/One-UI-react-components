import React, { Component } from 'react';
import { Container, Row, Col } from 'react-grid-system';
import './App.css';

import ActionCard from './components/ActionCard';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Container>
              <Row>
                  <Col sm={4}>
                      <ActionCard headline={'Hello, World'}
                                  body={'This is a really coll paragragh for the react component ActionCard, please consider using it your next project.'}
                                  buttonText={'View More.'}
                      />
                  </Col>
                  <Col sm={4}>
                      <ActionCard headline={'Hello, World'}
                                  body={'This is a really coll paragragh for the react component ActionCard, please consider using it your next project.'}
                                  buttonText={'View More.'}
                      />
                  </Col>
                  <Col sm={4}>
                      <ActionCard headline={'Hello, World'}
                                  body={'This is a really coll paragragh for the react component ActionCard, please consider using it your next project.'}
                                  buttonText={'View More.'}
                      />
                  </Col>
                  <Col sm={4}>
                      <ActionCard headline={'Hello, World'}
                                  body={'This is a really coll paragragh for the react component ActionCard, please consider using it your next project.'}
                                  buttonText={'View More.'}
                      />
                  </Col>
                  <Col sm={4}>
                      <ActionCard headline={'Hello, World'}
                                  body={'This is a really coll paragragh for the react component ActionCard, please consider using it your next project.'}
                                  buttonText={'View More.'}
                      />
                  </Col>
                  <Col sm={4}>
                      <ActionCard headline={'Hello, World'}
                                  body={'This is a really coll paragragh for the react component ActionCard, please consider using it your next project.'}
                                  buttonText={'View More.'}
                      />
                  </Col>
              </Row>
          </Container>

      </div>
    );
  }
}

export default App;
