import React from 'react'
import "bootswatch/dist/cyborg/bootstrap.min.css";
import { motion } from 'framer-motion';
import { Container, Navbar, NavDropdown, Nav } from 'react-bootstrap'
export default function NavBar() {
    const variants = {
        hidden: {
            opacity: 0,
            x: 100,
            y: 100,
        },
        show: {
            opacity: 1,
            x: 0,
            y: 0,
            transition: {
                duration: 3,
            }
        }
    }
    return (
        <div>
            <motion.nav
                variants={variants}
                initial="hidden"
                animate="show">
                    <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
  
  <Navbar.Brand href="#home"><img src="pngtiny.png" alt=""></img></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="#features">WoR Weekly Gaming Blog</Nav.Link>
      <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Magic: the Gathering</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">RPG's</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Warhammer 40,000</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.4">Pokemon</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.5">Flesh and Blood TCG</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav>
      <Nav.Link href="#deets">About</Nav.Link>
      <Nav.Link href="#memes">Contact</Nav.Link>
    </Nav>
  </Navbar.Collapse>
  
</Navbar>
                
            </motion.nav>
        </div>
    )
}
