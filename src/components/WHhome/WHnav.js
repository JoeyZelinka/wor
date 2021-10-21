import React from 'react'
import { Navbar, Container } from "react-bootstrap"

export default function WHnav() {
    return (
        <div className="mtgnav">
            <Navbar bg="light">
                <Container>
                    <Navbar.Brand href="whblogshome">WoR Warhammer 40,000 Blogs</Navbar.Brand>
                    <Navbar.Brand href="whmultiverse">Around the Multiverse</Navbar.Brand>
                    <Navbar.Brand href="40kassistant" target="_blank">40k Assistant (coming soon)</Navbar.Brand>
                    <Navbar.Brand href="whhome">Meta(coming soon)</Navbar.Brand>
                </Container>
            </Navbar>
        </div>
    )
}