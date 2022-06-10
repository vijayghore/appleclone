import React from "react";
import "../styles/Ventura.css";
import venturaimage from "../images/macos_ventura.jpeg";

const Ventura = () => {
    return (
        <div className="ventura-container">
            <h2 className="container-heading">macOS Ventura</h2>
            <img
                src={venturaimage}
                className="ventura-container-image"
                alt="macOS Ventura"
            />
            <div className="ventura-details">
                <p>Stay focused while moving between tasks with</p>
                <p>Stage Manager. Easily hand off a FaceTime call from one</p>
                <p>device to another. And with Continuity Camera, you can</p>
                <p>seamlessly make your iPhone your Mac webcam.</p>
            </div>
            <button className="btn-primary">See the preview</button>
        </div>
    );
};

export default Ventura;
