import React from 'react'
import RPGnav from './RPGnav'
import { Card, Button, Container } from 'react-bootstrap'
import './RPGBlogsHome.css'

export default function RPGBlogsHome() {
    return (
        <div>
            <RPGnav />
            <Container>
            <h1>World of Realms RPG Blogs</h1> 
            <div className="cards">
            <Card className="card" bg="primary" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="freddy.jpg" />
                    <Card.Body>
                        <Card.Title>Natty Dubs</Card.Title>
                        <Card.Text>
                            Ryan converts Freddy Kreuger to invade your D&D dreams! Full stat sheet and use suggestions! October 16th, 2021
                        </Card.Text>
                        <Button variant="light" href="freddynd">Read</Button>
                    </Card.Body>
                </Card>
                <Card className="card" bg="primary" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="rpgdice.jpeg" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <Button variant="light">Go somewhere</Button>
                    </Card.Body>
                </Card>
                <Card className="card" bg="primary" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="rpgdice.jpeg" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <Button variant="light">Go somewhere</Button>
                    </Card.Body>
                </Card>
                <Card className="card" bg="primary" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="rpgdice.jpeg" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <Button variant="light">Go somewhere</Button>
                    </Card.Body>
                </Card>
                </div>
                </Container>
        </div>
    )
}
