import React from 'react'
import {Navbar,Nav,Container} from 'react-bootstrap'
import img from '../images/movie.png'

const NavigationBar = () => {
  return (
    <div>
     <Container fluid>
     
      <Navbar expand="lg" bg="light" data-bs-theme="dark" className="bg-body-tertiary">
        <img src={img} style={{width:"40px",height:"30px",marginLeft:"50px"}} alt="imag"></img>
       
        <Navbar.Brand href="/" style={{marginLeft:"20px"}}>Movie App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto" style={{marginRight:"100px"}}>
            <Nav.Link href="/" style={{color:"white"}}>Home</Nav.Link>
            <Nav.Link href="/create" style={{color:"white"}}>Create Movie</Nav.Link>
          </Nav>
        </Navbar.Collapse>

        </Navbar>
      </Container>
    </div>
  )
}
export default NavigationBar
