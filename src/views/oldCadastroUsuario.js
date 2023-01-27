import React, { Component } from 'react';
import { Form, FormGroup, Row, Col, FormLabel, Button, FormSelect, Container } from 'react-bootstrap';
import { } from 'react-bootstrap';


class CadastroUsuario extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: '',
            address: '',
            celular: '',
        };
    }

    handleSubmit = (e) => {
        e.preventDefault();
        // Envia os dados do formulário para a API aqui
        console.log(this.state);
    }

    render() {
        return (



            <Container md={12}>
                <Form>
                    <FormGroup className="mb-3">
                        <Row>
                            <Col xs={12} md={6} >
                                <Form.Group controlId="formGridEmail">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" />
                                </Form.Group>
                            </Col>
                            <Col xs={12} md={6}>
                                <Form.Group controlId="formPhone">
                                    <Form.Label>Telefone</Form.Label>
                                    <Form.Control type="tel" placeholder="Seu telefone" />
                                </Form.Group>
                            </Col>
                        </Row>
                    </FormGroup>
                    
                    <FormGroup className="mb-3">
                        <Row>
                            <Col xs={12} md={4}>
                                <FormGroup controlId="formCity">
                                    <FormLabel>Cidade</FormLabel>
                                    <Form.Control type="text" placeholder="Sua cidade" />
                                </FormGroup>
                            </Col>

                            <Col xs={12} md={4}>
                                <FormGroup controlId="formState">
                                    <FormLabel>Estado</FormLabel>
                                    <FormSelect defaultValue="Choose...">
                                        <option>Selecione</option>
                                        <option>AC</option>
                                        <option>AL</option>
                                        <option>AP</option>
                                        <option>AM</option>
                                        <option>BA</option>
                                        <option>CE</option>
                                    </FormSelect>
                                </FormGroup>
                            </Col>

                            <Col xs={12} md={4}>
                                <FormGroup controlId="formZip">
                                    <FormLabel>CEP</FormLabel>
                                    <Form.Control type="text" placeholder="Seu CEP" maxLength={8} />
                                </FormGroup>
                            </Col>
                        </Row>
                    </FormGroup>

                    <FormGroup className="mb-3">
                        <Row>
                            <Col xs={12} md={4}>
                                <FormGroup controlId="formFullName">
                                    <FormLabel>Nome completo</FormLabel>
                                    <Form.Control type="text" placeholder="Seu nome completo" />
                                </FormGroup>
                            </Col>

                            <Col xs={12} md={4}>
                                <FormGroup controlId="formBirthdate">
                                    <FormLabel>Data de nascimento</FormLabel>
                                    <Form.Control type="date" placeholder="Data de nascimento" />
                                </FormGroup>
                            </Col>
                            
                            <Col xs={12} md={4}>
                                <FormGroup controlId="formGender">
                                    <FormLabel>Sexo</FormLabel>
                                    <Form.Control as="select">
                                        <option>Selecione</option>
                                        <option>Masculino</option>
                                        <option>Feminino</option>
                                        <option>Outro</option>
                                    </Form.Control>
                                </FormGroup>
                            </Col>

                            
                        </Row>
                    </FormGroup>

                    <FormGroup className="mb-3">
                            <Row>
                                <Col xs={12} md={4}>
                                    <FormGroup>
                                    <FormLabel for="donor" sm={2}>Cor ou Raça </FormLabel>
                                    <Form.Control as="select" name="donor" id="donor">
                                        <option value="yes">Sim</option>
                                        <option value="no">Não</option>
                                    </Form.Control>
                                    </FormGroup>
                                </Col>

                                <Col xs={12} md={4}>
                                    <FormGroup>
                                    <FormLabel for="donor" sm={2}>Cor ou Raça </FormLabel>
                                    <Form.Control as="select" name="donor" id="donor">
                                        <option value="yes">Sim</option>
                                        <option value="no">Não</option>
                                    </Form.Control>
                                    </FormGroup>
                                </Col>

                            </Row>

                    </FormGroup>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>

                </Form>
            </Container>

        )
    }
}
export default CadastroUsuario;
