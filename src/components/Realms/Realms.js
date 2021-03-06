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
                <Card.Img variant="top" src="thalia.png" />
                <Card.Body>
                    <Card.Title>Magic: the Gathering</Card.Title>
                    <Card.Text>
                        Enter our Magic: the Gathering realm where you can find our deck builder, blog, 
                        strategy and information from around the multiverse!
                    </Card.Text>
                    <Button href="mtghome" variant="primary">Enter</Button>
                </Card.Body>
            </Card>
            <Card className="card" style={{ width: '18rem' }}>
                <Card.Img variant="top" src="rpgdice.png" />
                <Card.Body>
                    <Card.Title>Role Playing Games</Card.Title>
                    <Card.Text>
                        Enter our realm of all things RPG. Our blog covers all the new happenings and orginal content.
                        Stat roller for Dungeons and Dragons coming soon!
                    </Card.Text>
                    <Button href="rpghome" variant="primary">Enter</Button>
                </Card.Body>
            </Card>
            <Card className="card" style={{ width: '18rem' }}>
                <Card.Img variant="top" src="40k.png"/>
                <Card.Body>
                    <Card.Title>Warhammer 40,000</Card.Title>
                    
                    <Card.Text>
                    In the grim darkness of the far future...you know the rest. Our Warhammer 40,000 realm is your final 
                    destination for all things galaxial war!
                    </Card.Text>
                    <Button variant="primary" href="whhome">Enter</Button>
                </Card.Body>
            </Card>
            <Card className="card" style={{ width: '18rem' }}>
                <Card.Img variant="top" src="pokemon.png" />
                <Card.Body>
                    <Card.Title>Pokemon</Card.Title>
                    <Card.Subtitle>(Now Open!!)</Card.Subtitle>
                    <Card.Text>
                        Gotta catch em...once again, you know the rest. The Pokemon 
                        realm is covering all things Pokemon Trading Card Game. 
                    </Card.Text>
                    <Button variant="primary" href="/pokehome">Enter</Button>
                </Card.Body>
            </Card>
        </motion.div>

    )

}
