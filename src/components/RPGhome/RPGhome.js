import React from 'react'
import './RPGhome.css'
import { motion } from 'framer-motion'
import { Card, Container, Button, Row, Col } from 'react-bootstrap'


export default function RPGhome() {
    const variants = {
        hidden: {
            opacity: 0,
            x: 0,
            y: 500,
        },
        show: {
            opacity: 1,
            x: 0,
            y: 0,
            transition: {
                duration: 3,
                staggerChildren: 0.5
            }
        }
    }
    return (
        <motion.div
            variants={variants}
            initial="hidden"
            animate="show"
            className="rpghome">

            <h1 className="rpglogo"><img src="rpglogo.png" alt=""></img></h1>
            <h3 className="head">

            </h3>

            <Container>
                <div className="cards">
                    <Row className="toprow">
                        <Col>
                            <Card className="card" bg="primary" style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="rpgdice.png" />
                                <Card.Body>
                                    <Card.Title>We Put the Paign in Campaign</Card.Title>
                                    <Card.Text>
                                        Chapter 3 of our adventurers in a D&D 2E Campaign in Greyhawk. Jailbreak!
                                        <Card.Text>Mr. L</Card.Text>
                                        <Card.Text>December 4th, 2021</Card.Text>
                                    </Card.Text>

                                    <Button variant="light" href="campaign3">Read</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="card" bg="primary" style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="rpgdice.png" />
                                <Card.Body>
                                    <Card.Title>We Put the Paign in Campaign</Card.Title>
                                    <Card.Text>
                                        Chapter 2 of our adventurers in a D&D 2E Campaign in Greyhawk. Unwelcome to Orlane.
                                        <Card.Text>Mr. L</Card.Text>
                                        <Card.Text>November 17th, 2021</Card.Text>
                                    </Card.Text>

                                    <Button variant="light" href="campaign">Read</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="card" bg="primary" style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="rpgdice.png" />
                                <Card.Body>
                                    <Card.Title>We Put the Paign in Campaign</Card.Title>
                                    <Card.Text>
                                        This is the narrative that follows our adventurers in a D&D 2E Campaign in Greyhawk.
                                        <Card.Text>Mr. L</Card.Text>
                                        <Card.Text>November 11th, 2021</Card.Text>
                                    </Card.Text>
                                    <Button variant="light" href="campaign">Read</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="card" bg="primary" style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="rpgdice.png" />
                                <Card.Body>
                                    <Card.Title>How I Prep for an RPG Campaign</Card.Title>
                                    <Card.Text>
                                        Our very own Mr. L, a DM with decades of experience, maps out how he preps for a campaign.
                                        <Card.Text>Mr. L</Card.Text>
                                        <Card.Text>November 3rd, 2021</Card.Text>
                                    </Card.Text>

                                    <Button variant="light" href="rpgready">Read</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="card" bg="primary" style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="rpgdice.png" />
                                <Card.Body>
                                    <Card.Title>Natty Dubs: Spooky Saturday</Card.Title>
                                    <Card.Text>
                                        We're wrapping up Spooky Saturdays with the "King of Halloween", Michael Myers!
                                        <Card.Text>Ryan Aspinall</Card.Text>
                                        <Card.Text>October 30th, 2021</Card.Text>
                                    </Card.Text>

                                    <Button variant="light" href="freddynd">Read</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>








                </div>
            </Container>




        </motion.div>
    )
}
