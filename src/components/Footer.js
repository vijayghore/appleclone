import React from "react";
import "../styles/Footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-top">
                <p>
                    Features are subject to change. Some features, applications
                    and services may not be available in all regions or
                    languages.
                </p>
            </div>

            <hr />

            <div className="footer-mid">
                <ul className="col">
                    <li className="list-heading">Shop and Learn</li>
                    <li>Store</li>
                    <li>Mac</li>
                    <li>iPad</li>
                    <li>iPhone</li>
                    <li>Watch</li>
                    <li>Airpods</li>
                    <li>TV & Home</li>
                    <li>AirTag</li>
                    <li>Accessories</li>
                    <li>Gift Cards</li>
                </ul>
                <ul className="col">
                    <li className="list-heading">Services</li>
                    <li>Apple Music</li>
                    <li>Apple TV+</li>
                    <li>Apple Fitness+</li>
                    <li>Apple News+</li>
                    <li>Apple Arcade</li>
                    <li>iCloud</li>
                    <li>Apple One</li>
                    <li>Apple Card</li>
                    <li>Apple Books</li>
                    <li>Apple Podcasts</li>
                    <li>App Store</li>

                    <br />
                    <li className="list-heading">Account</li>
                    <li>Manage Your Apple ID</li>
                    <li>Apple Store Account</li>
                    <li>iCloud.com</li>
                </ul>
                <ul className="col">
                    <li className="list-heading">Apple Store</li>
                    <li>Find a Store</li>
                    <li>Genius Bar</li>
                    <li>Today at Apple</li>
                    <li>Apple Camp</li>
                    <li>Apple Store App</li>
                    <li>Refurbished and Clearence</li>
                    <li>Financing</li>
                    <li>Apple Trade In</li>
                    <li>Order Status</li>
                    <li>Shopping Help</li>
                    <li></li>
                </ul>
                <ul className="col">
                    <li className="list-heading">For Business</li>
                    <li>Apple and Business</li>
                    <li>Shop for Business</li>

                    <br />
                    <li className="list-heading">For Education</li>
                    <li>Apple and Education</li>
                    <li>Shop for K-12</li>
                    <li>Shop for College</li>

                    <br />
                    <li className="list-heading">For Healthcare</li>
                    <li>Apple in Healthcare</li>
                    <li>Health on Apple Watch</li>
                    <li>Health Records on iPhone</li>

                    <br />
                    <li className="list-heading">For Government</li>
                    <li>Shop for Government</li>
                    <li>Shop for Veterans and Military</li>
                </ul>
                <ul className="col">
                    <li className="list-heading">Apple Values</li>
                    <li>Accessibility</li>
                    <li>Education</li>
                    <li>Environment</li>
                    <li>Inclusion and Diversity</li>
                    <li>Privacy</li>
                    <li>Ratial Equity and Justice</li>
                    <li>Supplier Responsibility</li>

                    <br />
                    <li className="list-heading">About Apple</li>
                    <li>Newsroom</li>
                    <li>Apple Leadership</li>
                    <li>Career Opportunities</li>
                    <li>Investors</li>
                    <li>Ethics and Complience</li>
                    <li>Events</li>
                    <li>Contact Apple</li>
                </ul>
            </div>
            <hr />

            <div className="footer-bottom">
                <div className="bottom-left">
                    <span>
                        Copyright © 2022 Apple Inc. All rights reserved.
                    </span>
                </div>
                <div className="bottom-mid">
                    <span className="bm-item">Privacy Policy </span>
                    &emsp;|&emsp;
                    <span className="bm-item">Terms of Use </span>&emsp;|&emsp;
                    <span className="bm-item">Sales and Refunds </span>
                    &emsp;|&emsp;
                    <span className="bm-item">Legal </span>&emsp;|&emsp;
                    <span className="bm-item">Site Map</span>
                </div>
                <div className="bottom-right">
                    <span>India</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
