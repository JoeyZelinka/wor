import React from 'react'
import './RPGhome.css'
import { motion } from 'framer-motion'
import { Badge, Card, Container, Button, } from 'react-bootstrap'
import RPGnav from './RPGnav'

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
            <RPGnav />
            <h1 className="rpglogo"><img src="rpglogo.jpeg" alt=""></img></h1>
            <h3 className="head">
                <Badge bg="primary">From our Realm</Badge>
            </h3>
            
            <Container>
             <div className="cards">   
            <Card className="card" bg="primary" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="pirate.png" />
                    <Card.Body>
                        <Card.Title>Natty Dubs</Card.Title>
                        <Card.Text>
                             Ryan brings us D&D on the high seas! Pirates: a D&D One Shot (5e). A complete tutorial with everything you need to run this adventure! October 25th, 2021
                        </Card.Text>
                        <Button variant="light" href="freddynd">Read</Button>
                    </Card.Body>
                </Card>     
            
                <Card className="card" bg="primary" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="jasonvorhees.png" />
                    <Card.Body>
                        <Card.Title>Natty Dubs</Card.Title>
                        <Card.Text>
                            Jason Vorhees gets a D&D makeover! It doesn't matter how fast you run! He's going to get you! October 23rd, 2021
                        </Card.Text>
                        <Button variant="light" href="freddynd">Read</Button>
                    </Card.Body>
                </Card>
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
                
                </div>
                </Container>
                

                <div className="multiverse">
                    <h3 className="multihead">From Around the Multiverse:</h3>
                    <Container className='multicards'>
                    <Card bg="light" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="rpgdice.jpeg" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <Button variant="dark">Go somewhere</Button>
                    </Card.Body>
                </Card>
                <Card bg="light" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="rpgdice.jpeg" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <Button variant="dark">Go somewhere</Button>
                    </Card.Body>
                </Card>
                <Card bg="light" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="rpgdice.jpeg" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <Button variant="dark">Go somewhere</Button>
                    </Card.Body>
                </Card>
                <Card bg="light" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="rpgdice.jpeg" />
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
