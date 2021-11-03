import React from 'react'
import RPGnav from './RPGnav'
import './RPGmultiverse.css'
import { Card, Container, Button, } from 'react-bootstrap'
export default function RPGMultiverse() {
    return (
        <div className="rpgmultiverse">
            <RPGnav />
            <div className="multiverse">
                <h3 className="multihead">From Around the Multiverse:</h3>
                <Container className='multicards'>
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
                    <Card bg="light" style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="pathfinder.jpg" />
                        <Card.Body>
                            <Card.Title>Wargamer:</Card.Title>
                            <Card.Text>
                                Pathfinder launches its own version of D&D Beyond

                            </Card.Text>
                            <p>October 27th, 2021</p>
                            <Button variant="dark" href="https://www.wargamer.com/pathfinder/nexus-launch-dnd-beyond" target="_blank">Head to Wargamer!</Button>
                        </Card.Body>
                    </Card>


                </Container>
            </div>
        </div>
    )
}
