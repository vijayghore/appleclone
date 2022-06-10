import React from "react";
import "../styles/MacbookPro.css";
import macbookpro from "../images/macbookpro13.jpeg";
import processorm2 from "../images/processorm2.jpeg";

const MacbookPro = () => {
    return (
        <div className="macbookpro-container">
            <h2 className="container-heading">MacBook Pro 13"</h2>
            <img
                src={macbookpro}
                className="macbookpro-container-image"
                alt="MacBook Pro 13"
            />

            <div className="description margin-up">
                <div className="details">
                    <p>Now more capable than ever with the new M2 chip.</p>
                    <p>
                        Featuring a brilliant Retina display, FaceTime HD
                        camera,
                    </p>
                    <p>
                        studio-quality mics and up to 20 hours of battery life.
                    </p>
                </div>

                <div className="processor">
                    <p className="processor-text">Supercharged by</p>
                    <img
                        src={processorm2}
                        className="processor-image color-border"
                        alt="M2 Processor"
                    />
                </div>

                <p className="availability">Available next month</p>

                <div className="description-buttons">
                    <button className="btn-dark">Learn more</button>
                    <button className="btn-dark">View pricing</button>
                </div>
            </div>
        </div>
    );
};

export default MacbookPro;
