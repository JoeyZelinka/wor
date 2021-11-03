import React from 'react'
import RPGnav from './RPGnav'
import { Card, Button, Container } from 'react-bootstrap'
import './RPGBlogsHome.css'

export default function RPGBlogsHome() {
    return (
        <div>
            <RPGnav />
            <Container>
                <h1>World of Realms RPG Blogs</h1>
                <div className="cards">
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
        </div>
    )
}
