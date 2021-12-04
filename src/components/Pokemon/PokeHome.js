import React from 'react'
import './Pokehome.css'
import { motion } from 'framer-motion'
import { Badge, Card, Container, Button, Row, Col } from 'react-bootstrap'
import Pokenav from './Pokenav'

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
            className="pokehome">
            <Pokenav />
            <h1 className="pokelogo"><img src="pokelogo.png" alt=""></img></h1>
            <h3 className="head">
                <Badge bg="primary">From our Realm</Badge>
            </h3>

            <div className="cards">
            <Container>
                <Row className="toprow">
                <Col>
                <Card className="card" bg="primary" style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="pokemon.png" />
                        <Card.Body>
                            <Card.Title>Gotta Catch a Beatdown </Card.Title>
                            <Card.Text>
                                   John is bringing the beatdown with a deck aptly titled Power Outage. Complete breakdown and walk through.
                                <Card.Text>John Kirk @pokehublive5</Card.Text> 
                                <Card.Text>December 4th, 2021</Card.Text>
                            </Card.Text>

                            <Button variant="light" href="beatdown2">Read</Button>
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col>
                <Card className="card" bg="primary" style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="pokemon.png" />
                        <Card.Body>
                            <Card.Title>Gotta Catch a Beatdown </Card.Title>
                            <Card.Text>
                                   Follow John as he guides you through his favorite deck right now...ANT MILL!! Complete breakdown and walk through.
                                <Card.Text>John Kirk @pokehublive5</Card.Text> 
                                <Card.Text>November 27th, 2021</Card.Text>
                            </Card.Text>

                            <Button variant="light" href="beatdown">Read</Button>
                        </Card.Body>
                    </Card>
                    </Col>
                    </Row>


                </Container>
            </div>

        </motion.div>
    )
}
