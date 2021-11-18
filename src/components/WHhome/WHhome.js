import React from 'react'
import { Badge, Container, Card, Button, Row, Col } from 'react-bootstrap'
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
                    <Badge bg="primary">From our Realm</Badge>
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


                <div className="multiverse">
                    <h3 className="multihead">From Around the Multiverse:</h3>
                    <Container className='multicards'>
                    <Card bg="light" style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="shooter40k.jpg" />
                        <Card.Body>
                            <Card.Title>Wargamer:</Card.Title>
                            <Card.Text>
                            Games Workshop will pay you to be pedantic about Warhammer rules

                            </Card.Text>
                            <p>November 4th, 2021</p>
                            <Button variant="dark" href="https://www.wargamer.com/warhammer-40k/games-workshop-job-rules-editor" target="_blank">Head to Wargamer!</Button>
                        </Card.Body>
                    </Card>
                        <Card bg="light" style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="whprev.jpg" />
                            <Card.Body>
                                <Card.Title>Warhammer-Community:</Card.Title>
                                <Card.Text>
                                    The Next Battle Box and Codexes for Warhammer 40,000
                                </Card.Text>
                                <p>October 30th, 2021</p>
                                <Button variant="dark" href="https://www.warhammer-community.com/2021/10/30/warhammer-day-2021-take-the-fight-to-terra-itself-with-the-next-battle-box-and-codexes-for-warhammer-40000/" target="_blank">Head to WH-Community!</Button>
                            </Card.Body>
                        </Card>
                        <Card bg="light" style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="spikebitspic.jpg" />
                            <Card.Body>
                                <Card.Title>SpikeyBits:</Card.Title>
                                <Card.Text>
                                    Counterfeiting Games Workshop is so Hot Right Now
                                </Card.Text>
                                <p>October 29th, 2021</p>
                                <Button variant="dark" href="https://spikeybits.com/2021/10/counterfeiting-games-workshop-is-so-hot-right-now.html" target="_blank">Head to SpikeyBits!</Button>
                            </Card.Body>
                        </Card>
                        

                    </Container>
                </div>

            </motion.div>
        </div>
    )
}
