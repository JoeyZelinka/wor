import React from 'react'
import { Badge, Container, Card, Button } from 'react-bootstrap'
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
            <h1 className="whlogo"><img src="whlogo.png" alt=""></img></h1>
            <h3 className="head">
                <Badge bg="primary">From our Realm</Badge>
            </h3>
            
            <Container> 
            <div className="cards">
                <Card bg="primary" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="40k.jpeg" />
                    <Card.Body>
                        <Card.Title></Card.Title>
                        <Card.Text>
                            
                        </Card.Text>
                        <Button variant="light" href="">Read</Button>
                    </Card.Body>
                </Card>
                
                
                
                </div>
                </Container>
                

                <div className="multiverse">
                    <h3 className="multihead">From Around the Multiverse:</h3>
                    <Container className='multicards'>
                    <Card bg="light" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="40k.jpeg" />
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
            
        </motion.div>
        </div>
    )
}
