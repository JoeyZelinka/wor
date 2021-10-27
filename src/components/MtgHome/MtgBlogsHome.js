import React from 'react'
import MTGnav from './MTGnav'
import { Container, Card, Button } from 'react-bootstrap'
import "./MtgBlogsHome.css"


export default function MtgBlogsHome() {
    return (
        <div className="mtgblogshome">
            <MTGnav />
            <Container> 
                <h1>World of Realms MtG Blogs</h1>
            <div className="cards">
            <Card bg="primary" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="bestlineinthedeck.png" />
                    <Card.Body>
                        <Card.Title>Poetically Aggro</Card.Title>
                        <Card.Text>
                            Joey walks through his favorite Historic deck, Orzhov Humans October 18th, 2021
                        </Card.Text>
                        <Button variant="light" href="orzhovhumanspa">Read</Button>
                    </Card.Body>
                </Card>
                
                </div>
                </Container>
        </div>
    )
}
