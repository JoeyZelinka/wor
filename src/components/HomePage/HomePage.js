import React from 'react'
import Realms from '../Realms/Realms'
import "bootswatch/dist/cyborg/bootstrap.min.css";
import { Badge } from 'react-bootstrap'


export default function HomePage() {
    return (
        <div>
            <h1 className="head">
            <Badge bg="primary">Realm Navigation</Badge>
            </h1>
            <Realms/>
        </div>
    )
}
