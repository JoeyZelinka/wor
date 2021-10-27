import React from 'react'
import RPGnav from './RPGnav'
import './RPGmultiverse.css'
import {  Card, Container, Button, } from 'react-bootstrap'
export default function RPGMultiverse() {
    return (
        <div className="rpgmultiverse">
            <RPGnav />
            <div className="multiverse">
                    <h3 className="multihead">From Around the Multiverse:</h3>
                    <Container className='multicards'>
                    <Card bg="light" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="rpgdice.png" />
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
