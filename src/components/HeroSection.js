import React from "react";
import "../styles/HeroSection.css";
import heroimage from "../images/hero_image.png";

const HeroSection = () => {
    return (
        <div className="hero-section">
            <div className="hero-section-image-container">
                <img src={heroimage} className="hero-image" alt="Apple Wall" />
            </div>

            <div className="hero-content">
                <div className="hero-content-heading">
                    <i className="fa-brands fa-apple"></i>WWDC22
                </div>
                <div className="hero-content-info">
                    <p>Introducing the all-new MacBook Air and</p>
                    <p>13-inch MacBook Pro, now supercharged with the Apple</p>
                    <p>M2 chip. And preview exciting updates to iOS, iPadOS,</p>
                    <p>macOS and watchOS — packed with all-new features</p>
                    <p>and capabilities.</p>
                </div>
                <div className="hero-content-button">
                    <button>Watch the keynote</button>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
