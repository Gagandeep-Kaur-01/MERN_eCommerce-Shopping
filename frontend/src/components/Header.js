import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'

const Header = () => {
    return (
        <header>
          <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
            <Container>
                <Navbar.Brand href='/'> eCommerce_Shopping </Navbar.Brand>
                <Navbar.Toggle aria-controls='basic-navbar-nav' />
                <Navbar.Collapse className='justify-content-end'>
                    <Nav>
                        <Nav.Link href='/cart'> <i className='fas fa-shopping-cart'></i>Cart </Nav.Link>
                        <Nav.Link href='/login'> <i className='fas fa-user'></i>Sign In </Nav.Link>        
                    </Nav>
                </Navbar.Collapse>
            </Container>
                   
          </Navbar>            
        </header>
    )
}

export default Header
