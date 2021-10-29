import React from 'react'
import { Badge, Container, Card, Button } from 'react-bootstrap'
import { motion } from 'framer-motion';
import WHnav from "./WHnav";
import "./WHhome.css";

export default function WHhome() {
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
        <div>
            <motion.div
        variants={variants}
            initial="hidden"
            animate="show"
        className="whhome">
            <WHnav />
            <h1 className="whlogo"><img src="whlogo.png" alt=""></img></h1>
            <h3 className="head">
                <Badge bg="primary">From our Realm</Badge>
            </h3>
            
            <Container> 
            <div className="cards">
            <Card bg="primary" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="ssm.jpg" />
                    <Card.Body>
                        <Card.Title>Bellz of War</Card.Title>
                        <Card.Text>
                            Tyler introduces you to the not so wonderful galaxy of Warhammer 40,000. This comprehensive guide will point any novice in the right direction.
                        </Card.Text>
                        <Button variant="light" href="/whintrobw">Read</Button>
                    </Card.Body>
                </Card>
                
                
                
                </div>
                </Container>
                

                <div className="multiverse">
                    <h3 className="multihead">From Around the Multiverse:</h3>
                    <Container className='multicards'>
                    <Card bg="light" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="spikebitspic.jpg" />
                <Card.Body>
                        <Card.Title>SpikeyBits:</Card.Title>
                        <Card.Text>
                        Counterfeiting Games Workshop is so Hot Right Now
                        </Card.Text>
                        <p>October 29th, 2021</p>
                        <Button variant="dark" href="https://spikeybits.com/2021/10/counterfeiting-games-workshop-is-so-hot-right-now.html" target="_blank">Head to SpikeyBits!</Button>
                    </Card.Body>
                </Card>
                <Card bg="light" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="sisters.jpg" />
                <Card.Body>
                        <Card.Title>Bell of Lost Souls:</Card.Title>
                        <Card.Text>
                        Warhammer 40K: A Closer Look at Sororitas Novitiates 
                        </Card.Text>
                        <p>October 29th, 2021</p>
                        <Button variant="dark" href="https://www.belloflostsouls.net/2021/10/warhammer-40k-a-closer-look-at-sororitas-novitiates.html" target="_blank">Head to BoLS!</Button>
                    </Card.Body>
                </Card>
                    <Card bg="light" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="heath.jpg" />
                    <Card.Body>
                        <Card.Title>Frontline Gaming:</Card.Title>
                        <Card.Text>
                        This Week in the ITC: Orks Win So Cal Open, Calls for Nerf Immediate.
                        </Card.Text>
                        <Button variant="dark" href="https://www.frontlinegaming.org/2021/10/27/this-week-in-the-itc-orks-win-so-cal-open-calls-for-nerf-immediate/?fbclid=IwAR3hujYqkUA1hhZPt9kixIkaceWjpoik_w8akWpCgx7W2tIi8oM7Z29GjfM" target="_blank">Head to Frontline!</Button>
                    </Card.Body>
                </Card>
                
                </Container>
                </div>
            
        </motion.div>
        </div>
    )
}
