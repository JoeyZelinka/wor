import React from 'react'
import "./MtgHome.css";
import "bootswatch/dist/cyborg/bootstrap.min.css";
import { Badge, Container, Card, Button } from 'react-bootstrap'
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
            <h3 className="head">
                <Badge bg="primary">From our Realm</Badge>
            </h3>
            
            <Container> 
            <div className="cards">
                <Card bg="primary" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="bestlineinthedeck.png" />
                    <Card.Body>
                        <Card.Title>Poetically Aggro</Card.Title>
                        <Card.Text>
                            Joey walks through his favorite Historic deck, Orzhov Humans October 18th, 2021
                        </Card.Text>
                        <Button variant="light" href="orzhovhumanspa">Read</Button>
                    </Card.Body>
                </Card>
                
                
                
                </div>
                </Container>
                

                <div className="multiverse">
                    <h3 className="multihead">From Around the Multiverse:</h3>
                    <Container className='multicards'>
                    <Card bg="light" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="" />
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
    )
}
