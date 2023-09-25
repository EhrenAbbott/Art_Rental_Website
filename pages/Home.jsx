import React from "react"
import { Link } from "react-router-dom"

export default function Home() {
    return (
        <div className="home-container">
            <h1>You have the vison, we have the art.</h1>
            <p>Give your next soiree some flare with the perfect piece of art. Choose from a wide selection of artists, periods, styles, and media.</p>
            <Link to="vans">Find your perfect piece</Link>
        </div>
    )
};