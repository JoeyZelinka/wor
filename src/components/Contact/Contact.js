import React from 'react'
import "./Contact.css"
import { ListGroup } from 'react-bootstrap'


export default function Contact() {
    return (
        <div className="contact">
            <ListGroup.Item><a href="mailto: worldofrealmsmtg@gmail.com"><img src="email.png" alt=""></img>worldofrealmsmtg@gmail.com</a></ListGroup.Item>
            <ListGroup.Item><a href="https://www.instagram.com/worldofrealms/" target='_blank' rel="noreferrer"><img src="insta.png" alt=""></img>@worldofrealms</a></ListGroup.Item>
            <ListGroup.Item><a href="https://www.instagram.com/paid2dominate/" target='_blank' rel="noreferrer"><img src="insta.png" alt=""></img>@paid2dominate (Joey)</a></ListGroup.Item>
            <ListGroup.Item><a href="https://www.youtube.com/channel/UCE4YaUDAPxTer0zXK6Volmg" target='_blank' rel="noreferrer"><img src="youtube.png" alt=""></img>World of Realms YouTube Channel</a></ListGroup.Item>
            <ListGroup.Item><a href="https://www.facebook.com/worldofrealms/" target='_blank' rel="noreferrer"><img src="fb.png" alt=""></img>Check us out on Facebook!</a></ListGroup.Item>
            <ListGroup.Item><a href="https://twitter.com/WorldofRealms" target='_blank' rel="noreferrer"><img src="twitter.png" alt=""></img>Follow us on Twitter!</a></ListGroup.Item>
            <ListGroup.Item><a href="/" target='_blank' rel="noreferrer"><img src="arenalogo.jpeg" alt=""></img>WorldofRealms on Magic Arena!</a></ListGroup.Item>
            <ListGroup.Item><a href="/" target='_blank' rel="noreferrer"><img src="ptcgologo.png" alt=""></img>WorldofRealms on Pokemon TCG Online!</a></ListGroup.Item>
      
        </div>
    )
}
