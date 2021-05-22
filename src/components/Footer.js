import classes from './Footer.module.css'
import React from 'react'

const Footer = () => {
    return (
        <footer className={classes.footer}>
            <ul>
                <li><h2>Alivio</h2></li>
                <li>Why Alivio</li>
                <li>Solutions</li>
                <li>Community</li>
                <li>Pricing</li>
            </ul>
        </footer>
    )
}

export default Footer
