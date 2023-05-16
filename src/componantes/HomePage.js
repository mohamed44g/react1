import React from "react";
import Video from "../Video/ASSASSIN'S CREED VALHALLA- LAUNCH TRAILER.mp4";
import Img from "../Images/stretched-1920-1080-1077274.jpg";


function HomePage() {
    return (
        <div className="home-page">
            <div className="bg"></div>
            <div className="home-page-content container">
                <div className="game-detail u--fadeInLeft">
                    <h1>Assassin's Creed <span id="title-word">Valhalla</span></h1>
                    <p>Become Eivor, a Viking raider raised to be a fearless warrior, and lead your clan from icy desolation in Norway to a new home amid the lush farmlands of ninth-century England. Find your settlement and conquer this hostile land by any means to earn a place in Valhalla.</p>
                    <span className="game-rating-home d-flex">
                        <svg className="icon" width= '15' viewBox="0 0 24 24" stroke="currentColor" fill="#fff" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"></path>
                        </svg>
                        <svg className="icon" width= '15' viewBox="0 0 24 24" stroke="currentColor" fill="#fff" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"></path>
                        </svg>
                        <svg className="icon" width= '15' viewBox="0 0 24 24" stroke="currentColor" fill="#fff" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"></path>
                        </svg>
                        <svg className="icon" width= '15' viewBox="0 0 24 24" stroke="currentColor" fill="#fff" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"></path>
                        </svg>
                        <svg className="icon" width= '15' viewBox="0 0 24 24" stroke="currentColor" fill="#fff" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"></path>
                        </svg>
                    </span>
                    <button className="btn">Play</button>
                </div>

                <div className="game-promo u--fadeInRight">
                    <video className="vid-promo" controls poster={Img}>
                        <source src = {Video} type="video/mp4"/>
                    </video>
                </div>
            </div>
        </div>
    )
}

export default HomePage;