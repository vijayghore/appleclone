import React from "react";
import "../styles/MacbookAir.css";
import macbookairimage from "../images/macbookair.jpeg";
import processorm2 from "../images/processorm2.jpeg";

const MacbookAir = () => {
    return (
        <div className="mac-container">
            <h2 className="container-heading">MacBook Air</h2>
            <img
                src={macbookairimage}
                className="macbook-air-image"
                alt="Apple Laptop"
            />
            <div className="description">
                <div className="details">
                    <p>All-new strikingly thin design and next-generation</p>
                    <p>M2 chip. Featuring a beautiful Liquid Retina display,</p>
                    <p>1080p FaceTime HD camera, four-speaker sound</p>
                    <p>system and up to 18 hours of battery life.</p>
                </div>
                <div className="processor">
                    <p className="processor-text">Supercharged by</p>
                    <img
                        src={processorm2}
                        className="processor-image"
                        alt="M2 Processor"
                    />
                </div>

                <p className="availability">Available next month</p>

                <div className="description-buttons">
                    <button className="btn-primary">Learn more</button>
                    <button className="btn-primary">View pricing</button>
                </div>
            </div>
        </div>
    );
};

export default MacbookAir;
