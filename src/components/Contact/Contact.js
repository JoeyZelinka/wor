import React from 'react'
import "./Contact.css"
import { Container, Row, Col } from 'react-bootstrap'


export default function Contact() {
    return (
        <div className="contact">
            <Container>
                <Row>

                    <Col>
                        <Row>
                            <Col>
                                <a href="mailto: worldofrealmsmtg@gmail.com"><img src="emailicon.png" alt=""></img>
                                    worldofrealmsmtg@gmail.com
                                </a>

                                <a href="https://www.instagram.com/worldofrealms/" target='_blank' rel="noreferrer"><img src="instalogo.png" alt=""></img>
                                    @worldofrealms
                                </a>
                                <a href="https://www.instagram.com/paid2dominate/" target='_blank' rel="noreferrer"><img src="instalogo.png" alt=""></img>
                                    @paid2dominate (Joey)
                                </a>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <a href="https://www.youtube.com/channel/UCE4YaUDAPxTer0zXK6Volmg" target='_blank' rel="noreferrer"><img src="youtubelogo.png" alt=""></img>
                                    World of Realms YouTube Channel</a>


                                <a href="https://www.facebook.com/worldofrealms/" target='_blank' rel="noreferrer"><img src="fblogo.png" alt=""></img>
                                    Check us out on Facebook!
                                </a>
                                <a href="https://twitter.com/WorldofRealms" target='_blank' rel="noreferrer"><img src="twitterlogo.png" alt=""></img>
                                    Follow us on Twitter!
                                </a>
                            </Col>


                        </Row>


                        <a href="/" target='_blank' rel="noreferrer"><img src="arenalogo.jpeg" alt=""></img>
                            WorldofRealms on Magic Arena!
                        </a>

                        <a href="/" target='_blank' rel="noreferrer"><img src="ptcgologo.png" alt=""></img>
                            WorldofRealms on Pokemon TCG Online!
                        </a>


                    </Col>
                </Row>
            </Container>
        </div>
    )
}
