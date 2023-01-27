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
                                <FormGroup controlId="formFullName">
                                    <FormLabel>Nome completo</FormLabel>
                                    <Form.Control type="text" placeholder="Seu nome completo" />
                                </FormGroup>
                            </Col>

                            <Col xs={12} md={2}>
                                <FormGroup controlId="formBirthdate">
                                    <FormLabel>Data de nascimento</FormLabel>
                                    <Form.Control type="date" placeholder="Data de nascimento" />
                                </FormGroup>
                            </Col>
                            
                            <Col xs={12} md={2}>
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

                            <Col xs={12} md={4}>
                                <FormGroup controlId="formCPF">
                                    <FormLabel>CPF</FormLabel>
                                    <Form.Control type="text" placeholder="Seu CPF" maxLength={8} />
                                </FormGroup>
                            </Col>
                        </Row>
                    </FormGroup>
                    
                    <FormGroup className="mb-3">
                        <Row>
                        <Col xs={12} md={6}>
                                <FormGroup controlId="formFullFatherName">
                                    <FormLabel>Nome do Pai</FormLabel>
                                    <Form.Control type="text" placeholder="Nome Completo" />
                                </FormGroup>
                            </Col>

                            <Col xs={12} md={6}>
                                <FormGroup controlId="formFullMotherName">
                                    <FormLabel>Nome da Mãe</FormLabel>
                                    <Form.Control type="text" placeholder="Nome Completo" />
                                </FormGroup>
                            </Col>
                        </Row>
                    </FormGroup>            

                    <FormGroup className="mb-3">
                        <Row>
                            <Col xs={12} md={4}>
                                <FormGroup controlId="formNationality">
                                    <FormLabel>Nacionalidade</FormLabel>
                                    <Form.Control type="text" placeholder="Nacionalidade" />
                                </FormGroup>
                            </Col>

                            <Col xs={12} md={4}>
                                <FormGroup controlId="formBirthCity">
                                    <FormLabel>Naturalidade</FormLabel>
                                    <Form.Control type="text" placeholder="Cidade" />
                                </FormGroup>
                            </Col>

                            <Col xs={12} md={4}>
                                <FormGroup controlId="formBirthState">
                                    <FormLabel>Naturalidade</FormLabel>
                                    <FormSelect defaultValue="Estado...">
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
                        </Row>
                    </FormGroup>

                    <FormGroup className="mb-3">
                        <Row>
                        <Col xs={12} md={6}>
                                <FormGroup controlId="formAddress">
                                    <FormLabel>Endereço</FormLabel>
                                    <Form.Control type="text" placeholder="Seu Endereço" />
                                </FormGroup>
                            </Col>

                            <Col xs={12} md={6}>
                                <FormGroup controlId="formNeighborhood">
                                    <FormLabel>Bairro</FormLabel>
                                    <Form.Control type="text" placeholder="Seu Bairro" />
                                </FormGroup>
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
                            <Col xs={12} md={2}>
                                <FormGroup controlId="formMaritalStatus">
                                    <FormLabel>Estado Civil</FormLabel>
                                    <FormSelect defaultValue="Solteiro">
                                        <option>Selecione</option>
                                        <option>Solteiro</option>
                                        <option>Casado</option>
                                        <option>Divorciado</option>
                                        <option>União Estável</option>                                        
                                    </FormSelect>
                                </FormGroup>
                            </Col>

                            <Col xs={12} md={3}>
                                <FormGroup controlId="formPIS/PASEP">
                                    <FormLabel>PIS/PASEP</FormLabel>
                                    <Form.Control type="text" placeholder="Somente Números" maxLength={15} pattern="[0-9]*"/>
                                </FormGroup>
                            </Col>

                            <Col xs={12} md={3}>
                                <FormGroup controlId="formCNH">
                                    <FormLabel>CNH</FormLabel>
                                    <Form.Control type="text" placeholder="Somente Números" maxLength={8} pattern="[0-9]*"/>
                                </FormGroup>
                            </Col>

                            <Col xs={12} md={2}>
                                <FormGroup controlId="formCategory">
                                    <FormLabel>Categoria</FormLabel>
                                    <FormSelect defaultValue="Choose...">                                        
                                        <option>Selecione</option>
                                        <option>A</option>
                                        <option>B</option>
                                        <option>C</option>
                                        <option>D</option>
                                        <option>E</option>
                                        <option>AB</option>
                                        <option>AD</option>
                                    </FormSelect>
                                </FormGroup>
                            </Col>

                            <Col xs={12} md={2}>
                                <FormGroup controlId="formValidity">
                                    <FormLabel>Validade</FormLabel>
                                    <Form.Control type="date" placeholder="Validade" />
                                </FormGroup>
                            </Col>
                        </Row>
                    </FormGroup>


                    <FormGroup className="mb-3">
                        <Row>
                        <Col xs={12} md={3}>
                                <FormGroup controlId="formBank">
                                    <FormLabel>Banco</FormLabel>
                                    <FormSelect defaultValue="Choose...">
                                        <option>Selecione</option>                                        
                                        <option>Caixa Econômica Federal</option>
                                        <option>Banco do Brasil</option>
                                        <option>Santander</option>
                                        <option>Itaú</option>
                                        <option>NuBank</option>
                                        <option>AB</option>
                                        <option>AD</option>
                                    </FormSelect>
                                </FormGroup>
                            </Col>

                            <Col xs={12} md={2}>
                                <FormGroup controlId="formBankBranch">
                                    <FormLabel>Agência</FormLabel>
                                    <Form.Control type="text" placeholder="Somente Números" maxLength={8} pattern="[0-9]*"/>
                                </FormGroup>
                            </Col>

                            <Col xs={12} md={2}>
                                <FormGroup controlId="formBankAccount">
                                    <FormLabel>Conta</FormLabel>
                                    <Form.Control type="text" placeholder="Somente Números" maxLength={8} pattern="[0-9]*"/>
                                </FormGroup>
                            </Col>                                                 

                            <Col xs={12} md={3}>
                                <FormGroup controlId="formVoterRegistration">
                                    <FormLabel>Título de Eleitor</FormLabel>
                                    <Form.Control type="text" placeholder="Somente Números" maxLength={8} pattern="[0-9]*"/>
                                </FormGroup>
                            </Col>

                            <Col xs={12} md={1}>
                                <FormGroup controlId="formSession">
                                    <FormLabel>Seção</FormLabel>
                                    <Form.Control type="text" placeholder="Número" maxLength={8} pattern="[0-9]*"/>
                                </FormGroup>
                            </Col>

                            <Col xs={12} md={1}>
                                <FormGroup controlId="formZone">
                                    <FormLabel>Zona</FormLabel>
                                    <Form.Control type="text" placeholder="Número" maxLength={8} pattern="[0-9]*"/>
                                </FormGroup>
                            </Col>     
                        </Row>
                    </FormGroup>



                    <FormGroup className="mb-3">                        
                        <Row>                           
                            <FormLabel> 2. FUNCIONAL GERAL  </FormLabel>                          
                        </Row>                        
                    </FormGroup>



                    <FormGroup className="mb-3">                        
                        <Row>                           
                        <Col xs={12} md={2}>
                                <FormGroup controlId="formID">
                                    <FormLabel>ID</FormLabel>
                                    <Form.Control type="text" placeholder="Número" maxLength={8} pattern="[0-9]*"/>
                                </FormGroup>
                            </Col>

                            <Col xs={12} md={3}>
                                <FormGroup controlId="formMatriculation">
                                    <FormLabel>Matrícula</FormLabel>
                                    <Form.Control type="text" placeholder="Número" maxLength={8} pattern="[0-9]*"/>
                                </FormGroup>
                            </Col>

                            <Col xs={12} md={3}>
                                <FormGroup controlId="formRGPMMA">
                                    <FormLabel>RG PMMA</FormLabel>
                                    <Form.Control type="text" placeholder="Número" maxLength={8} pattern="[0-9]*"/>

                                     {/* TESTANDO FUNCINALIDADES */}

                                    <small class="form-text text-muted">Insira o texto aqui fsdfsafdgsfgsdfg
                                    sdfg <html><br></br></html>
                                    {/* sdfgsdfgsdfgsdfgsdfgsdfgsd
                                    fgsdfgsdfg */}
                                    </small>
                                    {/*    //////////////////////////////////  */}

                                </FormGroup>
                            </Col>

                            <Col xs={12} md={2}>
                                <FormGroup controlId="formInclusionDate">
                                    <FormLabel>Data de Inclusão</FormLabel>
                                    <Form.Control type="date" placeholder="Inclusão" />
                                </FormGroup>
                            </Col>

                            <Col xs={12} md={2}>
                                <FormGroup controlId="formGroup">
                                    <FormLabel>Grupo</FormLabel>
                                    <FormSelect defaultValue="Choose...">
                                        <option>Selecione</option>                                        
                                        <option>Oficial</option>
                                        <option>Praça Especial</option>
                                        <option>Praça</option>                                       
                                    </FormSelect>
                                </FormGroup>
                            </Col>                                                     
                        </Row>


                        <Row>
                        
                            <Col xs={12} md={3}>
                                <FormGroup controlId="formGroup">
                                    <FormLabel>Grupo</FormLabel>
                                    <FormSelect defaultValue="Choose...">
                                        <option>Selecione</option>                                        
                                        <option>Oficial</option>
                                        <option>Praça Especial</option>
                                        <option>Praça</option>                                       
                                    </FormSelect>
                                </FormGroup>
                            </Col>

                            <Col xs={12} md={3}>
                                <FormGroup controlId="formGroup">
                                    <FormLabel>Grupo</FormLabel>
                                    <FormSelect defaultValue="Choose...">
                                        <option>Selecione</option>                                        
                                        <option>Oficial</option>
                                        <option>Praça Especial</option>
                                        <option>Praça</option>                                       
                                    </FormSelect>
                                </FormGroup>
                            </Col>

                            <Col xs={12} md={3}>
                                <FormGroup controlId="formRGPMMA">
                                    <FormLabel>RG PMMA</FormLabel>
                                    <Form.Control type="text" placeholder="Número" maxLength={8} pattern="[0-9]*"/>
                                </FormGroup>
                            </Col>

                        
                        </Row>

                    </FormGroup>


                    <html><br></br></html>
                    <FormGroup className="mb-3">                        
                        <Row>
                            <Col xs={12} md={4}>
                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Col>
                            
                        </Row>
                    </FormGroup>                    

                </Form>
            </Container>

        )
    }
}
export default CadastroUsuario;
