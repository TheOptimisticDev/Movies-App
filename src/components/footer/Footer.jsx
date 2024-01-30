import React from "react";
import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaLinkedin,
    FaYoutube,
    FaDiscord,
    FaGithub,
} from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.scss";

const Footer = () => {
    return (
        <footer className="footer">
            <ContentWrapper>
                <div className="infoText">
                <p>Welcome to Streamline, your premier destination for a boundless world of entertainment. Immerse yourself in our extensive library that boasts a diverse array of movies and TV shows, ranging from timeless classics to exclusive originals curated just for you. Our cutting-edge platform ensures a seamless streaming experience, guaranteeing uninterrupted high-definition playback across a multitude of devices.
                    Embark on a journey tailored to your preferences with our state-of-the-art personalized recommendation system. Explore genres that perfectly align with your mood, whether it's a thrilling action film, a heartwarming drama, or an adventurous documentary. Our commitment to family-friendly options ensures that every member of your household finds content suitable for their tastes.
                </p>
                <br></br>
                <p>With Streamline's user-friendly features, managing your entertainment has never been easier. Create personalized watchlists to curate your must-watch content and enable notifications to stay effortlessly informed about the latest releases. Our platform goes beyond the ordinary streaming experience; it's a dynamic and interactive cinematic journey.
                    And here's the best part no subscription hassles! At Streamline, we believe in providing access to top-notch entertainment without the burden of a subscription. Enjoy unrestricted streaming, explore exciting content, and elevate your entertainment experience at no cost. Our commitment is to make premium entertainment accessible to everyone.
                </p>
                <br></br>
                </div>
                <div className="socialIcons">
                    <span className="icon">
                        <FaFacebookF />
                    </span>
                    <span className="icon">
                        <FaInstagram />
                    </span>
                    <span className="icon">
                        <FaTwitter />
                    </span>
                    <span className="icon">
                        <FaLinkedin />
                    </span>
                    <span className="icon">
                        <FaYoutube />
                    </span>
                    <span className="icon">
                        <FaDiscord />
                    </span>
                    <span className="icon">
                        <FaGithub />
                    </span>
                </div>
                <div className="infoText" style={{ paddingTop: '30px', margin: '20px 0' }}>
                    © 2024 TheOptimisticDev. All Rights Reserved.
                </div>
            </ContentWrapper>
        </footer>
    );
};

export default Footer;
