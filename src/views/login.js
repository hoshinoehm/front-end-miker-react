import React, { Component } from 'react';
import { Form, Button, Container, Col, Row, Stack } from 'react-bootstrap';
import { } from 'react-bootstrap';
import { Media } from 'reactstrap';
import login_logo from '../login_logo.png';

class LoginForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    // Faz a verificação do login aqui
    console.log(this.state.username, this.state.password);
  }

  render() {

    return (
      <Container>

        <Row>
          <Col md={6} >
            <Media>

              <img
                width="385"
                height="242"
                //className="mr-3"
                src={login_logo}
                alt="Generic placeholder"
              />
            </Media>
          </Col>

          <Col className='col-md-6 contents'>
            <Form >

              {/* 
              onSubmit={this.handleSubmit}
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter username"
                  value={this.state.username}
                  onChange={e => this.setState({ username: e.target.value })}
                />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={this.state.password}
                  onChange={e => this.setState({ password: e.target.value })}
                />
              </Form.Group>
 */}
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text"
                  placeholder="Enter username"
                  value={this.state.username}
                  onChange={e => this.setState({ username: e.target.value })} />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" 
                  placeholder="Password" 
                  value={this.state.password}
                  onChange={e => this.setState({ password: e.target.value })} />
              </Form.Group>

              <Row>
                <Col>
                  <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                  </Form.Group>
                </Col>


                <Col md={4}>
                  <Form.Group>
                    <Form.Label className="form-check-label">Recuperar senha</Form.Label>
                  </Form.Group>
                </Col>


              </Row>

              <Stack gap={2} className="col-md-5 mx-auto">
                <Button variant="outline-secondary" type="submit" onClick={this.handleSubmit}> Entrar</Button>
              </Stack>

            </Form>
          </Col>
        </Row>
      </Container>


      //<div className='col-md-6' style={{position : 'relative', left: '300px'}}>

    );
  }
}

export default LoginForm;
