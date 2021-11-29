import React from 'react'
import { Container, Card, Button, Row, Col } from 'react-bootstrap'
import { motion } from 'framer-motion';
import WHnav from "./WHnav";
import "./WHhome.css";

export default function WHhome() {
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
        <div>
            <motion.div
                variants={variants}
                initial="hidden"
                animate="show"
                className="whhome">
                <WHnav />
                <h1 className="whlogo"><img src="whlogo.jpg" alt=""></img></h1>
                <h3 className="head">
                    
                </h3>

                <Container>
                    <div className="cards">
                        <Row>
                            <Col>
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
                    </Col>
                    <Col>
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
                        </Col>
                        <Col>
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
</Col>
</Row>
                    </div>
                </Container>

                

            </motion.div>
        </div>
    )
}
