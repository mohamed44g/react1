import React, { useState } from "react";
import { Swiper, SwiperSlide} from 'swiper/react';
import {FreeMode ,Navigation} from 'swiper';
import { Card } from "./Common-components";
import 'swiper/css/navigation';
import 'swiper/css';
import 'swiper/css/free-mode';
import product1 from "../Images/hat-stock.xyz894975.jpg";
import product2 from "../Images/product-3-1280x820.jpg";
import product3 from "../Images/product-7-1280x820.jpg";
import product4 from "../Images/title.jpg";
import product5 from "../Images/product-8-1280x820.jpg";



function Store() {
    const [data] = useState([
        {id : 1 , title : "Gaming controller", img : product1, price: 25, discount: 50},
        {id : 2 , title : "elden ring", img : product2, price: 25, discount: 40},
        {id : 3 , title : "black ops III", img : product3, price: 50, discount: 60},
        {id : 4 , title : "detroit become human", img : product4, price: 45, discount: 70},
        {id : 5 , title : "detroit become human", img : product5, price: 45, discount: 70}
    ]);
    
    return (
        <div className="our-products">
        <h2>our products</h2>

        <div className="container">
            <div className="cards">
                <Swiper
                    freeMode = {true}
                    grabCursor = {true}
                    spaceBetween={50}
                    modules={[FreeMode , Navigation]}
                    navigation = {{ clickable: true }}
                    className="swiper"
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
    )
}


export default Store;