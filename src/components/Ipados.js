import React from "react";
import "../styles/Ipados.css";
import ipados from "../images/ipados.jpeg";
const Ipados = () => {
    return (
        <div className="ipados-container">
            <h2 className="container-heading zi-2">iPadOS 16</h2>
            <img
                src={ipados}
                className="ipados-container-image"
                alt="iPadOS16"
            />
            <div className="ipados-details">
                <p>Switch between multiple overlapping apps and create</p>
                <p>your ideal workspace with Stage Manager. Connect to</p>
                <p>an external display and drag and drop files between</p>
                <p>devices. Explore full maps and rich details in the new</p>
                <p>Weather app for iPad.</p>
            </div>
            <button className="btn-primary">See the preview</button>
        </div>
    );
};

export default Ipados;
