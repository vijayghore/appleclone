import React from "react";
import "../styles/Watchos.css";
import watchos from "../images/watchos.jpeg";

const Watchos = () => {
    return (
        <div className="watchos-container">
            <h2 className="container-heading zi-2">watchOS 9</h2>
            <img
                src={watchos}
                className="watchos-container-image"
                alt="Watch OS"
            />
            <div className="watchos-details">
                <p>The Workout app is packed with more features than</p>
                <p>ever. Track your meds in the new Medications app. Get</p>
                <p>more insights into your sleep health. And enjoy more</p>
                <p>watch faces with more personalisation.</p>
            </div>
            <button className="btn-primary">See the preview</button>
        </div>
    );
};

export default Watchos;
