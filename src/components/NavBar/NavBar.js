import React from 'react'
import "bootswatch/dist/cyborg/bootstrap.min.css";
import { motion } from 'framer-motion';
import { Navbar, NavDropdown, Nav } from 'react-bootstrap'
import "../NavBar/NavBar.css"
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
  
  <Navbar.Brand href="/"><img src="pngtiny.png" alt=""></img></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      {/* <Nav.Link href="worblog">WoR Weekly Gaming Blog</Nav.Link> */}
      <NavDropdown title="Realms" id="collasible-nav-dropdown">
        <NavDropdown.Item href="mtghome">Magic: the Gathering</NavDropdown.Item>
        <NavDropdown.Item href="rpghome">RPG's</NavDropdown.Item>
        <NavDropdown.Item href="whhome">Warhammer 40,000</NavDropdown.Item>
        <NavDropdown.Item href="pokemonhome">Pokemon</NavDropdown.Item>
        <NavDropdown.Item href="fabhome">Flesh and Blood TCG</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav>
      <Nav.Link href="about">About</Nav.Link>
      <Nav.Link href="contact">Contact</Nav.Link>
    </Nav>
  </Navbar.Collapse>
  
</Navbar>
                
            </motion.nav>
        </div>
    )
}
