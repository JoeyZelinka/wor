import React from 'react'
import WHnav from "./WHnav"
import { Container, Card, Button } from "react-bootstrap"
import './WHMultiverse.css'

export default function WHMultiverse() {
    return (
        <div className="whmultiverse">
            <WHnav />
            <div className="multiverse">
                    <h3 className="multihead">From Around the Multiverse:</h3>
                    <Container className='multicards'>
                    <Card bg="light" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="40k.png" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <Button variant="dark">Go somewhere</Button>
                    </Card.Body>
                </Card>
                
                </Container>
                </div>
            
        
        </div>
    )
}