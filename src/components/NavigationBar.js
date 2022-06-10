import React from "react";
import "../styles/NavigationBar.css";

const NavigationBar = () => {
    return (
        <nav className="navigation">
            <div className="nav">
                <ul className="nav-list">
                    <li className="nav-item nav-logo">
                        <i className="fa-brands fa-apple"></i>
                    </li>
                    <li className="nav-item">Store</li>
                    <li className="nav-item">Mac</li>
                    <li className="nav-item">iPad</li>
                    <li className="nav-item">iPhone</li>
                    <li className="nav-item">Watch</li>
                    <li className="nav-item">AirPods</li>
                    <li className="nav-item">TV & Home</li>
                    <li className="nav-item">Only on Apple</li>
                    <li className="nav-item">Accessories</li>
                    <li className="nav-item">Support</li>
                    <li className="nav-item">
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </li>
                    <li className="nav-item">
                        <i className="fa-solid fa-bag-shopping"></i>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default NavigationBar;
