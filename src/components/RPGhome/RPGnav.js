import React from 'react'
import { Navbar, Container } from "react-bootstrap"

export default function RPGnav() {
    return (
        <div className="rpgnav">
            <Navbar bg="light">
                <Container>
                    <Navbar.Brand href="rpgblogshome">WoR RPG Blogs</Navbar.Brand>
                    <Navbar.Brand href="rpgmultiverse">Around the Multiverse</Navbar.Brand>
                    <Navbar.Brand href="https://flamboyant-poitras-11a987.netlify.app/">CharactSTER(coming soon)</Navbar.Brand>
                    
                </Container>
            </Navbar>
        </div>
    )
}
