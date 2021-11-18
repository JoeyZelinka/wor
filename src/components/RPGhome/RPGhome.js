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
                        <Card.Img variant="top" src="rpgdice.png" />
                        <Card.Body>
                            <Card.Title>We Put the Paign in Campaign</Card.Title>
                            <Card.Text>
                                Chapter 2 of our adventurers in a D&D 2E Campaign in Greyhawk.   
                                <Card.Text>Mr. L</Card.Text> 
                                <Card.Text>November 17th, 2021</Card.Text>
                            </Card.Text>

                            <Button variant="light" href="campaign">Read</Button>
                        </Card.Body>
                    </Card>
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
                    <Card className="card" bg="primary" style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="rpgdice.png" />
                        <Card.Body>
                            <Card.Title>How I Prep for an RPG Campaign</Card.Title>
                            <Card.Text>
                                Our very own Mr. L, a DM with decades of experience, maps out how he preps for an RPG campaign. November 3rd, 2021
                            </Card.Text>

                            <Button variant="light" href="rpgready">Read</Button>
                        </Card.Body>
                    </Card>
                    







                </div>
            </Container>


            <div className="multiverse">
                <h3 className="multihead">From Around the Multiverse:</h3>
                <Container className='multicards'>
                    <Card bg="light" style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="roll20con2021.png" />
                        <Card.Body>
                            <Card.Title>Bell of Lost Souls:</Card.Title>
                            <Card.Text>
                                D&D: Strixhaven Preview Coming Next Week At Roll20 Con
                            </Card.Text>
                            <p>November 5th, 2021</p>
                            <Button variant="dark" href="https://www.belloflostsouls.net/2021/11/dd-strixhaven-preview-coming-next-week-at-roll20-con.html" target="_blank">Head to BoLS!</Button>
                        </Card.Body>
                    </Card>
                    <Card bg="light" style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="gruumsh.jpg" />
                        <Card.Body>
                            <Card.Title>Bell of Lost Souls:</Card.Title>
                            <Card.Text>
                                D&D: An Adventurer’s Guide to Gruums

                            </Card.Text>
                            <p>October 31st, 2021</p>
                            <Button variant="dark" href="https://www.belloflostsouls.net/2021/10/dd-an-adventurers-guide-to-gruumsh.html" target="_blank">Head to BoLS!</Button>
                        </Card.Body>
                    </Card>
                    <Card bg="light" style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="dnd_news.png" />
                        <Card.Body>
                            <Card.Title>En World:</Card.Title>
                            <Card.Text>
                                There’s a TOMB RAIDER RPG Coming!

                            </Card.Text>
                            <p>October 31st, 2021</p>
                            <Button variant="dark" href="https://www.enworld.org/threads/there%E2%80%99s-a-tomb-raider-rpg-coming.683637/" target="_blank">Head to En World!</Button>
                        </Card.Body>
                    </Card>


                </Container>
            </div>

        </motion.div>
    )
}
