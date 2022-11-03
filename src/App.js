import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import  { Container, Row, Col , Button , Alert, Card, Form}  from 'react-bootstrap';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Container fluid>
        <Form>
         <Row>
          <Col md>
          <Form.Group controlId='formEmail'>
            <Form.Label>E.mail Address</Form.Label>
            <Form.Control type="email" placeholder='Example@email.com'/>
            <Form.Text className='text-muted'>
              Enter vaild email Address
            </Form.Text>
            </Form.Group>
          </Col>
         
         <Col md>
          <Form.Group controlId='Password'>
          <Form.Label>Password</Form.Label>
            <Form.Control type="Password" placeholder="Password"/>
          </Form.Group>
          </Col>
         </Row>
          <Button variant= "secondary" type="submit">Login</Button>
        </Form>

        <Card  style= {{color: "#000"} }>
          <Card.Img src= "990.jpg" />
          <Card.Body>
           <Card.Title>
           Chennakesava Temple
           </Card.Title>
           <Card.Text >
          
            </Card.Text> 
            <Button variant= "primary">Read more</Button>
          </Card.Body>
        </Card>
        
        <Alert variant= "success">This is a button</Alert>
        <Button>Test Button</Button>
        </Container>
      </header>
    </div>
  );
}

export default App;
