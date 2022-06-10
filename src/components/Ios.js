import React from "react";
import "../styles/Ios.css";
import ios16image from "../images/ios16.jpeg";

const Ios = () => {
    return (
        <div className="ios-container">
            <h2 className="container-heading zi-2">iOS 16</h2>
            <img src={ios16image} className="ios-container-image" alt="Ios16" />
            <div className="ios-details">
                <p>Personalise your Lock Screen with photos, customised</p>
                <p>widgets, even the way you get notifications. Create a</p>
                <p>Shared Photo Library to share photos and videos with</p>
                <p>loved ones. Enhance everyday moments with powerful</p>
                <p>new features in Messages and Mail.</p>
            </div>
            <button className="btn-primary">See the preview</button>
        </div>
    );
};

export default Ios;
