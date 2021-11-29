import React from 'react'
import { Navbar, Container } from "react-bootstrap"

export default function MTGnav() {
    return (
        <div className="mtgnav">
            <Navbar bg="light">
                <Container>
                    
                    
                    <Navbar.Brand href="https://wormtgdb.netlify.app/" target="_blank">WoR Deck Builder(beta)</Navbar.Brand>
                    <Navbar.Brand href="mtghome">Meta(coming soon)</Navbar.Brand>
                </Container>
            </Navbar>
        </div>
    )
}
