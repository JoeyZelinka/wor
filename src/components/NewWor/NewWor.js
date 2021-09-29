import React from 'react'
import "bootswatch/dist/cyborg/bootstrap.min.css";
import { motion } from 'framer-motion';
import { Container, Row, Col } from 'react-bootstrap';


export default function NewWor() {
    const variants = {
        hidden: {
            opacity: 0,
            x: 100,
            y: 100,
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
        <div></div>
    )

}
