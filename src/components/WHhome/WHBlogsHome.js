import React from 'react'
import WHnav from './WHnav'
import { Container, Card, Button } from 'react-bootstrap'
import "./WHBlogsHome.css"


export default function WHBlogsHome() {
    return (
        <div className="whblogshome">
            <WHnav />
            <Container>
                <h1>World of Realms 40k Blogs</h1>
                <div className="cards">
                <Card bg="primary" style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="ssm.jpg" />
                        <Card.Body>
                            <Card.Title>Bellz of War</Card.Title>
                            <Card.Text>
                                Warhammer 40k: The Astartes Militarum.
                                An introduction into all things Imperial Guard. Tyler gives solid suggestions for lists to start with.
                            </Card.Text>
                            <Button variant="light" href="/whintrobw">Read</Button>
                        </Card.Body>
                    </Card>
                    <Card bg="primary" style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="ssm.jpg" />
                        <Card.Body>
                            <Card.Title>Bellz of War</Card.Title>
                            <Card.Text>
                                Warhammer 40k: The Adeptus Astartes.
                                An introduction into all things Space Marines and Tyler's take on starting a Space Marine army.
                            </Card.Text>
                            <Button variant="light" href="/whintrobw">Read</Button>
                        </Card.Body>
                    </Card>
                    <Card bg="primary" style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="ssm.jpg" />
                        <Card.Body>
                            <Card.Title>Bellz of War</Card.Title>
                            <Card.Text>
                                Tyler introduces you to the not so wonderful galaxy of Warhammer 40,000. This comprehensive guide will point any novice in the right direction.
                            </Card.Text>
                            <Button variant="light" href="/whintrobw">Read</Button>
                        </Card.Body>
                    </Card>

                </div>
            </Container>
        </div>
    )
}
