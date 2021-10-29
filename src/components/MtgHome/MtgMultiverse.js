import React from 'react'
import MTGnav from "./MTGnav"
import { Container, Card, Button } from "react-bootstrap"
import './MtgMultiverse.css'

export default function MtgMultiverse() {
    return (
        <div className="mtgmultiverse">
            <MTGnav />
            <div className="multiverse">
                <h3 className="multihead">From Around the Multiverse:</h3>
                <Container className='multicards'>
                    <Card bg="light" style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="rileytreatssite.jpg" />
                        <Card.Body>
                            <Card.Title>Channel Fireball:</Card.Title>
                            <Card.Text>
                                Top 5 Tricks or Treats in MTG– Riley Ranks
                            </Card.Text>
                            <p>October 28th, 2021</p>
                            <Button variant="dark" href="https://strategy.channelfireball.com/all-strategy/home/top-5-tricks-or-treats-in-mtg-riley-ranks/" target="_blank">Head to Channel Fireball!</Button>
                        </Card.Body>
                    </Card>
                    <Card bg="light" style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="cvow.png" />
                        <Card.Body>
                            <Card.Title>MTGGoldfish Video:</Card.Title>
                            <Card.Text>
                                Innistrad: Crimson Vow Spoilers | Dracula, Blood, Cleave, Training!
                            </Card.Text>
                            <p>October 28th, 2021</p>
                            <Button variant="dark" href="https://www.mtggoldfish.com/articles/innistrad-crimson-vow-spoilers-october-28-dracula-blood-cleave-training" target="_blank">Head to MTGGoldfish!</Button>
                        </Card.Body>
                    </Card>
                    <Card bg="light" style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="izzetdragons.jpg" />
                        <Card.Body>
                            <Card.Title>Star City Games:</Card.Title>
                            <Card.Text>
                            Izzet Dragons And Four-Color Blink Are The Decks To Register At The SCG Invitational 
                            </Card.Text>
                            <p>October 27th, 2021</p>
                            <Button variant="dark" href="https://articles.starcitygames.com/premium/izzet-dragons-and-four-color-blink-yorion-are-the-decks-to-register-at-the-scg-invitational-at-scg-con/" target="_blank">Head to SCG!</Button>
                        </Card.Body>
                    </Card>

                </Container>
            </div>


        </div>
    )
}
