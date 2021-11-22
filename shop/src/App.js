import logo from './logo.svg';
import React,{useState} from 'react';
import { Navbar, Container,Nav,NavDropdown} from 'react-bootstrap'
import './App.css';
import Data from './data.js'

function App() {
  const [shoes, setShoes] = useState(Data);

  return (
    <>
    <Navbar bg="light" expand="lg">
    <Container>
      <Navbar.Brand href="#home">shoeshop</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Link</Nav.Link>
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  <div className="container">
        <div className="row">
          {
            shoes.map((el,i)=>{
              return  <Card key = {i} i = {i} shoes = {shoes[i]}/>
            })
        }
        </div>
      </div>
 </>
  );
}

function Card(props){
  return(
    <div className="col-md-4">
    <img src={"https://codingapple1.github.io/shop/shoes"+ (props.i+1) +".jpg"} width="100%" />
    <h4>{props.shoes.title}</h4>
    <p>{props.shoes.content}</p>
  </div>
  )
}

export default App;
