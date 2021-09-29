import React from 'react'
import "bootswatch/dist/cyborg/bootstrap.min.css";
import { motion } from 'framer-motion';
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
                                <a class="nav-link" href="#">WoR Weekly Gaming Blog</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Contact</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">About</a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button"
                                    aria-haspopup="true" aria-expanded="false">Realms</a>
                                <div class="dropdown-menu">
                                    <a class="dropdown-item" href="#">Magic: the Gathering</a>
                                    <a class="dropdown-item" href="#">Role Playing Games</a>
                                    <a class="dropdown-item" href="#">Warhammer 40,000</a>
                                    <a class="dropdown-item" href="#">Flesh and Blood TCG</a>
                                    <a class="dropdown-item" href="#">Pokemon Trading Card Game</a>
                                </div>
                            </li>
                        </ul>

                    </div>
                </div>
            </motion.nav>
        </div>
    )
}
