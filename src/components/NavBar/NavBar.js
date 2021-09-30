import React from 'react'
import "bootswatch/dist/cyborg/bootstrap.min.css";
import { motion } from 'framer-motion';
import { Button } from 'react-bootstrap'
export default function NavBar() {
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
            }
        }
    }
    return (
        <div>
            <motion.nav
                variants={variants}
                initial="hidden"
                animate="show"
                className="navbar navbar-expand-lg navbar-light bg-primary">
                <div
                    class="container-fluid" >
                    <div class="collapse navbar-collapse" id="navbarColor02">
                        <ul class="navbar-nav me-auto">
                            <li class="nav-item">
                                <Button variant="link" class="nav-link" href="#">WoR Weekly Gaming Blog</Button>
                            </li>
                            <li class="nav-item">
                                <Button variant="link" class="nav-link" href="#">Contact</Button>
                            </li>
                            <li class="nav-item">
                                <Button variant="link" class="nav-link" href="#">About</Button>
                            </li>
                            <li class="nav-item dropdown">
                                <Button variant="link" class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button"
                                    aria-haspopup="true" aria-expanded="false">Realms</Button>
                                <div class="dropdown-menu">
                                    <Button variant="link" class="dropdown-item" href="#">Magic: the Gathering</Button>
                                    <Button variant="link" class="dropdown-item" href="#">Role Playing Games</Button>
                                    <Button variant="link" class="dropdown-item" href="#">Warhammer 40,000</Button>
                                    <Button variant="link" class="dropdown-item" href="#">Flesh and Blood TCG</Button>
                                    <Button variant="link" class="dropdown-item" href="#">Pokemon Trading Card Game</Button>
                                </div>
                            </li>
                        </ul>

                    </div>
                </div>
            </motion.nav>
        </div>
    )
}
