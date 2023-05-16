import React, { useState } from "react";
import { Swiper, SwiperSlide} from 'swiper/react';
import {FreeMode ,Navigation} from 'swiper';
import { Card } from "./Common-components";
import 'swiper/css/navigation';
import 'swiper/css';
import 'swiper/css/free-mode';
import red_game from "../Images/red-dead-redemption-red-gamers-gamer-wallpaper-preview.jpg";
import Elden from "../Images/elden-ring-landscape-game-art-video-game-art-video-games-hd-wallpaper-preview.jpg";
import callof from "../Images/call-of-duty-black-ops-iii-call-of-duty-video-games-call-of-duty-black-ops-wallpaper-preview.jpg";
import detroit from "../Images/detroit-become-human-games-art-detroit-beco.jpg";
import gta from "../Images/grand-theft-auto-v-wallpaper-preview.jpg";
import farCry from "../Images/the-game-ubisoft-game-shooter-far-cry-6-hd-wallpaper-preview.jpg";

function Trending() {
    const [data] = useState([
        {id : 1 , title : "red dead redemption", img : red_game, price: 30, discount: 50},
        {id : 2 , title : "elden ring", img : Elden, price: 25, discount: 40},
        {id : 3 , title : "black ops III", img : callof, price: 50, discount: 60},
        {id : 4 , title : "detroit become human", img : detroit, price: 45, discount: 70},
        {id : 5 , title : "Gta V", img : gta, price: 60, discount: 80},
        {id : 6 , title : "Far cry 6", img : farCry, price: 80, discount: 100},
    ]);

    return (
        <div className="Trending">
            <h2>Trending</h2>

            <div className="container">
                <div className="cards">
                    <Swiper
                        freeMode = {true}
                        grabCursor = {true}
                        spaceBetween={50}
                        modules={[FreeMode , Navigation]}
                        navigation = {{ clickable: true }}
                        slidesPerView={4}
                        breakpoints={{
                            // when window width is >= 640px
                            300: {
                                slidesPerView: 1,
                            },
                            // when window width is >= 768px
                            768: {
                                width: 768,
                                slidesPerView: 2,
                            },
                        }}
                        
                        className="swiper d-flex justify-content-center"
                    >
                        { data.map(ele => 
                        <SwiperSlide key={ele.id}><Card productTitle = {ele.title}
                            CardImg = {ele.img}
                            price = {ele.price}
                            discount = {ele.discount}/>
                            </SwiperSlide>
                        )}
                    </Swiper>
                </div>
            </div>
        </div>
    );
}


export default Trending;