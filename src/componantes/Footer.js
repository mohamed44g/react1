import React, { useState } from "react";
import { FooterCard } from "./Common-components";

export default function Footer() {
    const [data] = useState([
        {
            id: 1,
            img :  <svg className="icon icon-fill" fill="currentColor" viewBox="0 0 24 24" width='35' xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.3922 11.4C15.3922 12.132 14.8585 12.732 14.1824 12.732C13.5182 12.732 12.9726 12.132 12.9726 11.4C12.9726 10.668 13.5063 10.068 14.1824 10.068C14.8585 10.068 15.3922 10.668 15.3922 11.4ZM9.85315 10.068C9.17707 10.068 8.64333 10.668 8.64333 11.4C8.64333 12.132 9.18893 12.732 9.85315 12.732C10.5292 12.732 11.063 12.132 11.063 11.4C11.0748 10.668 10.5292 10.068 9.85315 10.068ZM22.3784 2.472V24C19.3902 21.3284 20.3459 22.2128 16.8749 18.948L17.5035 21.168H4.05312C2.71282 21.168 1.62161 20.064 1.62161 18.696V2.472C1.62161 1.104 2.71282 0 4.05312 0H19.9469C21.2872 0 22.3784 1.104 22.3784 2.472ZM18.998 13.848C18.998 9.984 17.29 6.852 17.29 6.852C15.582 5.556 13.9571 5.592 13.9571 5.592L13.791 5.784C15.8074 6.408 16.7444 7.308 16.7444 7.308C13.9269 5.7457 10.6173 5.74542 7.88422 6.96C7.44536 7.164 7.18442 7.308 7.18442 7.308C7.18442 7.308 8.16889 6.36 10.3039 5.736L10.1853 5.592C10.1853 5.592 8.5603 5.556 6.85231 6.852C6.85231 6.852 5.14433 9.984 5.14433 13.848C5.14433 13.848 6.14065 15.588 8.76194 15.672C8.76194 15.672 9.20079 15.132 9.55662 14.676C8.05028 14.22 7.48095 13.26 7.48095 13.26C7.65543 13.3836 7.94316 13.5437 7.96725 13.56C9.96926 14.6943 12.813 15.0659 15.3685 13.98C15.7836 13.824 16.2462 13.596 16.7325 13.272C16.7325 13.272 16.1395 14.256 14.5857 14.7C14.9415 15.156 15.3685 15.672 15.3685 15.672C17.9898 15.588 18.998 13.848 18.998 13.848V13.848Z"></path>
                    </svg>,
            title : "Subscribe to Discord",
        },

        {
            id: 2,
            img :   <svg className="icon icon-fill" fill="currentColor" viewBox="0 0 24 24" width='35' xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.24527 0L0.648651 4.11964V20.9571H6.32433V24H9.51756L12.5304 20.9571H17.1452L23.3514 14.6893V0H2.24527ZM21.2243 13.6125L17.6757 17.1964H12L8.98712 20.2393V17.1964H4.19727V2.14821H21.2243V13.6125V13.6125ZM17.6757 6.26786V12.5304H15.5486V6.26786H17.6757ZM12 6.26786V12.5304H9.87295V6.26786H12Z"></path>
                    </svg>,
            title : "Subscribe to Twitch",
        },

        {
            id: 3,
            img :   <svg className="icon icon-fill" fill="currentColor" viewBox="0 0 24 24" width='35' xmlns="http://www.w3.org/2000/svg">
                        <path d="M23.4985 6.29213C23.2225 5.26881 22.4092 4.46288 21.3766 4.18937C19.505 3.69238 12 3.69238 12 3.69238C12 3.69238 4.49503 3.69238 2.62336 4.18937C1.59077 4.46292 0.777523 5.26881 0.501503 6.29213C0 8.14695 0 12.0169 0 12.0169C0 12.0169 0 15.8868 0.501503 17.7416C0.777523 18.7649 1.59077 19.5373 2.62336 19.8108C4.49503 20.3078 12 20.3078 12 20.3078C12 20.3078 19.505 20.3078 21.3766 19.8108C22.4092 19.5373 23.2225 18.7649 23.4985 17.7416C24 15.8868 24 12.0169 24 12.0169C24 12.0169 24 8.14695 23.4985 6.29213V6.29213ZM9.54544 15.5305V8.50327L15.8181 12.017L9.54544 15.5305V15.5305Z"></path>
                    </svg>,
            title : "Subscribe on Youtube",
        },

        {
            id: 4,
            img :   <svg className="icon icon-fill" fill="currentColor" viewBox="0 0 24 24" width='35' xmlns="http://www.w3.org/2000/svg">
                        <path d="M21.533 7.11175C21.5482 7.32494 21.5482 7.53817 21.5482 7.75136C21.5482 14.2539 16.599 21.7463 7.5533 21.7463C4.76648 21.7463 2.17767 20.9391 0 19.5382C0.395953 19.5838 0.776625 19.5991 1.18781 19.5991C3.48727 19.5991 5.60405 18.8224 7.29441 17.4976C5.13197 17.4519 3.31978 16.0356 2.69541 14.0864C3 14.132 3.30455 14.1625 3.62437 14.1625C4.06598 14.1625 4.50764 14.1016 4.91878 13.995C2.66498 13.5381 0.974578 11.5585 0.974578 9.16759V9.1067C1.62937 9.47219 2.39086 9.70061 3.19791 9.73103C1.87303 8.84777 1.00505 7.34017 1.00505 5.63458C1.00505 4.72089 1.24866 3.88333 1.67508 3.15236C4.09641 6.13712 7.73602 8.08633 11.8172 8.29956C11.7411 7.93408 11.6954 7.55341 11.6954 7.17269C11.6954 4.462 13.8883 2.25391 16.6141 2.25391C18.0304 2.25391 19.3095 2.84781 20.208 3.8072C21.3197 3.59402 22.3857 3.18283 23.3299 2.61939C22.9643 3.76155 22.1877 4.72094 21.1674 5.33003C22.1573 5.22348 23.1167 4.94931 23.9999 4.56864C23.33 5.54322 22.4924 6.4112 21.533 7.11175V7.11175Z"></path>
                    </svg>,
            title : "Subscribe on Twitter",
        }
    ])


    return (
        <div className="footer d-flex align-items-center">
            <div className="footer-cards container mx-auto d-flex justify-content-center flex-wrap gap-5"> 
                {data.map(ele => <FooterCard key = {ele.id} icon = {ele.img} title = {ele.title}/>)}
            </div>
        </div>
    );
}