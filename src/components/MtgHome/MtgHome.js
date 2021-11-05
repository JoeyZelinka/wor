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
                        <Card.Img variant="top" src="oohafter.png" />
                        <Card.Body>
                            <Card.Title>Poetically Aggro</Card.Title>
                            <Card.Text>
                                Ever wonder what your choice of board wipe says about you? We don't care we're going to tell you anyway. October 27th, 2021
                            </Card.Text>
                            <Button variant="light" href="orzhovhumanspa">Read</Button>
                        </Card.Body>
                    </Card>
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
                        <Card.Img variant="top" src="arenalogo.jpg" />
                        <Card.Body>
                            <Card.Title>MTGGoldfish Video:</Card.Title>
                            <Card.Text>
                                Historic 101: Orzhov Zombies
                                TheAsianAvenger gives Zombies a try in Historic!
                            </Card.Text>
                            <p>November 5th, 2021</p>
                            <Button variant="dark" href="https://www.mtggoldfish.com/articles/historic-101-orzhov-zombies" target="_blank">Head to MTGGoldfish!</Button>
                        </Card.Body>
                    </Card>
                    <Card bg="light" style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="scginv.png" />
                        <Card.Body>
                            <Card.Title>Star City Games:</Card.Title>
                            <Card.Text>
                                Deck Lists from the SCG Invitational!
                            </Card.Text>
                            <p>November 1st, 2021</p>
                            <Button variant="dark" href="https://old.starcitygames.com/decks/Star_City_Games_Invitational/2021-10-31_standard_Roanoke_VA_US/1/?_ga=2.174100001.246714356.1635791118-156870451.1635522885" target="_blank">Head to SCG!</Button>
                        </Card.Body>
                    </Card>
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
                    


                </Container>
            </div>

        </motion.div>
    )
}
