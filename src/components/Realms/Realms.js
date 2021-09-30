import React from 'react'
import "bootswatch/dist/cyborg/bootstrap.min.css";
import { motion } from 'framer-motion';
import { Card, Button } from 'react-bootstrap';
import "./Realms.css";



export default function NewWor() {
    const variants = {
        hidden: {
            opacity: 0,
            x: 0,
            y: -100,
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
            className="cards">
            <Card className="card" style={{ width: '18rem' }}>
                <Card.Img variant="top" src="thalia.jpeg" />
                <Card.Body>
                    <Card.Title>Magic: the Gathering</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
            <Card className="card" style={{ width: '18rem' }}>
                <Card.Img variant="top" src="rpgdice.jpeg" />
                <Card.Body>
                    <Card.Title>Role Playing Games</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
            <Card className="card" style={{ width: '18rem' }}>
                <Card.Img variant="top" src="40k.jpeg" />
                <Card.Body>
                    <Card.Title>Warhammer 40,000</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
            <Card className="card" style={{ width: '18rem' }}>
                <Card.Img variant="top" src="pokemon.jpeg" />
                <Card.Body>
                    <Card.Title>Pokemon</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
            <Card className="card" style={{ width: '18rem' }}>
                <Card.Img variant="top" src="fab.jpeg" />
                <Card.Body>
                    <Card.Title>Flesh and Blood TCG</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>

        </motion.div>

    )

}
