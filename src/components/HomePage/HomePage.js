import React from 'react'
import Realms from '../Realms/Realms'
import "bootswatch/dist/cyborg/bootstrap.min.css";
import { Badge } from 'react-bootstrap'
import { motion } from 'framer-motion';


export default function HomePage() {
    
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
                
            }
        }
        
    }
        return (
            <div>
            
        
            <motion.h1
            variants={variants}
            initial="hidden"
            animate="show"
             className="head">
                <Badge>Realms:</Badge>
            </motion.h1>
            <Realms />
        </div>
    )
}
