import React from 'react'
import "./MtgHome.css";
import "bootswatch/dist/cyborg/bootstrap.min.css";
import { Container, Card, Button, Row, Col } from 'react-bootstrap'
import { motion } from 'framer-motion';
import MTGnav from "./MTGnav";


export default function MtgHome() {


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
            className="mtghome">
            <MTGnav />
            <h1 className="mtglogo"><img src="mtglogo.png" alt=""></img></h1>
            

            <Container>
                <div className="cards">
                <Row className="toprow">
                        <Col>
                            <Card className="card" bg="primary" style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="sungold.png" />
                                <Card.Body>
                                    <Card.Title>Poetically Aggro</Card.Title>
                                    <Card.Text>
                                    A primer for the LEAST repressive deck that everyone loves to hate.
                                        <Card.Text>Joey Zelinka</Card.Text>
                                        <Card.Text>December 10th, 2021</Card.Text>
                                    </Card.Text>

                                    <Button variant="light" href="monodub">Read</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                    <Card bg="primary" style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="oohafter.png" />
                        <Card.Body>
                            <Card.Title>Poetically Aggro</Card.Title>
                            <Card.Text>
                                Ever wonder what your choice of board wipe says about you? We don't care we're going to tell you anyway. 
                                <Card.Text>October 27th, 2021</Card.Text>
                            </Card.Text>
                            <Button variant="light" href="boardwipe1">Read</Button>
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col>
                    <Card bg="primary" style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="bestlineinthedeck.png" />
                        <Card.Body>
                            <Card.Title>Poetically Aggro</Card.Title>
                            <Card.Text>
                                Joey walks through his favorite Historic deck, Orzhov Humans 
                                <Card.Text>Joey Zelinka</Card.Text>
                                <Card.Text>October 18th, 2021</Card.Text>
                            </Card.Text>
                            <Button variant="light" href="orzhovhumanspa">Read</Button>
                        </Card.Body>
                    </Card>
                    </Col>
                    </Row>







                </div>
            </Container>
</motion.div>
    )
}
