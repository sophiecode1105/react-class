import logo from './logo.svg';
import React,{useState} from 'react';
import { Navbar, Container,Nav,NavDropdown} from 'react-bootstrap'
import './App.css';
import Data from './data.js'
import Detail from './detail.js'

import {Route, Switch,Link} from 'react-router-dom'
function App() {
  const [shoes, setShoes] = useState(Data);

  return (
    <>
    <Switch>
    <Route exact path="/">
    <Navbar bg="light" expand="lg">
    <Container>
      <Navbar.Brand href="#home">shoeshop</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link> <Link to="/">Home</Link></Nav.Link>
          <Nav.Link> <Link to="/detail">Detail</Link></Nav.Link>
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
      </Route>

      <Route path="/detail/:id">
          <Detail shoes={shoes}/>
        </Route>
      </Switch>
 </>
  );
}

function Card({shoes,i}){
  return(
    <div className="col-md-4">
    <img src={"https://codingapple1.github.io/shop/shoes"+ (i+1) +".jpg"} width="100%" />
    <h4>{shoes.title}</h4>
    <p>{shoes.content}</p>
  </div>
  )
}



export default App;
