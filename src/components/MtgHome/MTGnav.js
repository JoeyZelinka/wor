import React from 'react'
import { Navbar, Container } from "react-bootstrap"

export default function MTGnav() {
    return (
        <div className="mtgnav">
            <Navbar bg="light">
                <Container>
                    <Navbar.Brand href="mtgblogshome">WoR MtG Blogs</Navbar.Brand>
                    <Navbar.Brand href="mtgmultiverse">Around the Multiverse</Navbar.Brand>
                    <Navbar.Brand href="https://flamboyant-poitras-11a987.netlify.app/" target="_blank">WoR Deck Builder</Navbar.Brand>
                    <Navbar.Brand href="mtghome">Meta(coming soon)</Navbar.Brand>
                </Container>
            </Navbar>
        </div>
    )
}
