import React from 'react'
import { Navbar, Container } from "react-bootstrap"

export default function RPGnav() {
    return (
        <div className="rpgnav">
            <Navbar bg="light">
                <Container>
                    <Navbar.Brand href="pokehome">WoR Pokemon Blogs</Navbar.Brand>
                    <Navbar.Brand href="">Pokemon Deck Builder(coming soon)</Navbar.Brand>
                    
                </Container>
            </Navbar>
        </div>
    )
}