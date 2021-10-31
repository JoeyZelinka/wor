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
            <h1 className="rpglogo"><img src="rpglogo.png" alt=""></img></h1>
            <h3 className="head">
                <Badge bg="primary">From our Realm</Badge>
            </h3>
            
            <Container>
             <div className="cards">
             <Card className="card" bg="primary" style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="myersstat.png" />
                        <Card.Body>
                            <Card.Title>Natty Dubs</Card.Title>
                            <Card.Text>
                            We're wrapping up Spooky Saturdays with the "King of Halloween", Michael Myers! October 30th, 2021
                            </Card.Text>
                            
                            <Button variant="light" href="freddynd">Read</Button>
                        </Card.Body>
                    </Card>
                    <Card className="card" bg="primary" style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="40k.png" />
                        <Card.Body>
                            <Card.Title>Natty Dubs</Card.Title>
                            <Card.Text>
                                Ryan converts my favorite Tau rebel...Commander Farsight for D&D play! Full stat sheet and breakdown. October 29th, 2021
                            </Card.Text>
                            <Button variant="light" href="freddynd">Read</Button>
                        </Card.Body>
                    </Card>
             <Card className="card" bg="primary" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="poketrainerscard.png" />
                    <Card.Body>
                        <Card.Title>Pokemon RPG</Card.Title>
                        <Card.Text>
                             Tyler laterals over from 40K to deliver an introductory guide on all thing Pokemon RPG. To call it comprehensive is putting it lightly. October 27th, 2021
                        </Card.Text>
                        <Button variant="light" href="pokerpg">Read</Button>
                    </Card.Body>
                </Card>   
                
            
                
            
                
                </div>
                </Container>
                

                <div className="multiverse">
                    <h3 className="multihead">From Around the Multiverse:</h3>
                    <Container className='multicards'>
                    <Card bg="light" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="rpgdice.png" />
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
