import React from "react"
import { Link } from "react-router-dom"

export default function About() {
    return (
        <div className="about-page-container">
            <img src="#" className="about-hero-image" />
            <div className="about-page-content">
                <h1>Don’t pay millions for art when you could rent it for hundreds</h1>
                <p>Our objective is to enrich your life with the perfect piece of art for your next function, party, or gala. Our artwork comes with certificates of authenticty so you know exactly what you're getting.</p>
                <p>We are a passionate collective of docents, curators, and brokers who appreciate the incredible power that art has to add meaning to your experiences</p>
            </div>
            <div className="about-page-cta">
                <h2>Your next piece of art is waiting</h2>
                <Link className="link-button" to="/vans">Explore our artwork</Link>
            </div>
        </div>
    );
}