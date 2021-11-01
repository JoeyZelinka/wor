import React from 'react'
import WHnav from "./WHnav"
import { Container, Card, Button } from "react-bootstrap"
import './WHMultiverse.css'

export default function WHMultiverse() {
    return (
        <div className="whmultiverse">
            <WHnav />
            <div className="multiverse">
                    
                    <h3 className="multihead">From Around the Multiverse:</h3>
                    <Container className='multicards'>
                    <Card bg="light" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="whprev.jpg" />
                <Card.Body>
                        <Card.Title>Warhammer-Community:</Card.Title>
                        <Card.Text>
                        The Next Battle Box and Codexes for Warhammer 40,000
                        </Card.Text>
                        <p>October 30th, 2021</p>
                        <Button variant="dark" href="https://www.warhammer-community.com/2021/10/30/warhammer-day-2021-take-the-fight-to-terra-itself-with-the-next-battle-box-and-codexes-for-warhammer-40000/" target="_blank">Head to WH-Community!</Button>
                    </Card.Body>
                </Card>
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
            
        
        </div>
    )
}