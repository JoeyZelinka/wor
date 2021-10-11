import React from 'react'
import "../About/About.css"
import { Container, Row, Col } from 'react-bootstrap'

export default function About() {
    return (
        <div >
            <Container >
                <Row>
                    <Col>
                        <div className="text">
                            <h1>About Us</h1>
                            <div className="byline">Who We Are</div>
                            <p>Founder and Magic the Gathering enthusiast Joey Zelinka received a call out of the blue last year (2020). A former coworker, Matt Cunnigham, had stumbled across something fantastic at a garage sale: a massive collection of Magic the Gathering cards. For any trading card game fan, this would have been an amazing find. For these two, it presented an opportunity.</p>
                            <p>That one phone call was the catalyst for the inception of World of Realms. A company where the ethos and culture from our Sunday play group is at the core of who we are. World of Realms wants you to know how we feel when we sit down to play every week.</p>
                            <p>We want people to experience the joy and camaraderie of tabletop RPGs. We want people to feel the satisfaction of a well executed combo in their favorite TCG, or a successful last minute maneuver in their preferred miniature based wargame. At the end of the day, we just want people to come to our store, get what they need, and go play.</p>
                            <p>We’re here to get you gaming.</p>
                            <p>Welcome to our World of Realms...</p>
                            <br />
                            <br />
                            <div className="profile">
                                <h2>Player Profiles</h2>
                                <p>Joey Zelinka</p>
                                <p>Ryan Aspinall</p>
                            </div>
                        </div>
                    </Col>

                </Row>
            </Container>
        </div>
    )
}
