import React from "react";

export function NavPar() {
    return (
        <div className='navbar'>
            <div className="Nav-container">
                <div className="row">
                    <div className="col-lg-1 col-2">
                        <a className="navbar-brand" href="_">
                            <img className = "Nav-icon" src='https://html.nkdev.info/monsterplay/assets/images/logo-gamer.svg' alt='Nav-icon'/>
                        </a>
                    </div>


                    <div className="col-lg-9 col-0">
                        <div className="Nav-links">
                            <ul className="navbar-links-ul">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="_">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="_">Features</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="_">Pricing</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link disabled" href="_">Disabled</a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-2 col-sm-8">
                        <ul className="NavIcons">
                            <li>
                                <svg className="icon" width='30' viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg">
                                        <path d="M21 21L16.65 16.65M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z"></path>
                                </svg>
                            </li>

                            <li>
                                <div className="prodcuts-number">0</div>
                                <svg className="icon" width='30' viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 1H5L7.68 14.39M7.68 14.39C7.77144 14.8504 8.02191 15.264 8.38755 15.5583C8.75318 15.8526 9.2107 16.009 9.68 16H19.4C19.8693 16.009 20.3268 15.8526 20.6925 15.5583C21.0581 15.264 21.3086 14.8504 21.4 14.39L23 6H6L7.68 14.39ZM10 21C10 21.5523 9.55228 22 9 22C8.44772 22 8 21.5523 8 21C8 20.4477 8.44772 20 9 20C9.55228 20 10 20.4477 10 21ZM21 21C21 21.5523 20.5523 22 20 22C19.4477 22 19 21.5523 19 21C19 20.4477 19.4477 20 20 20C20.5523 20 21 20.4477 21 21Z"></path>
                                </svg>
                            </li>

                            <li>
                                <svg className="icon"  width='30' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z"></path>
                                </svg>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
    </div>
    )
}


export function Card(props) {
    return (
        <div className="product-card">
            <div className="product-img">
                <img src={props.CardImg} alt = {`${props.productTitle}`} />
                <button className="btn">Buy</button>
            </div>

            <h4 className="product-title">{props.productTitle}</h4>
            <span className="game-rating d-flex">
                <svg className="icon" width= '13' viewBox="0 0 24 24" stroke="currentColor" fill="#fff" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"></path>
                </svg>
                <svg className="icon" width= '13' viewBox="0 0 24 24" stroke="currentColor" fill="#fff" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"></path>
                </svg>
                <svg className="icon" width= '13' viewBox="0 0 24 24" stroke="currentColor" fill="#fff" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"></path>
                </svg>
                <svg className="icon" width= '13' viewBox="0 0 24 24" stroke="currentColor" fill="#fff" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"></path>
                </svg>
                <svg className="icon" width= '13' viewBox="0 0 24 24" stroke="currentColor" fill="#fff" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"></path>
                </svg>
            </span>
            <div className="mt-2 prices">
                <span className="price">{`${props.price}$`}</span> <span className="discount">{`${props.discount}$`}</span>
            </div>
        </div>
    )
}

export function NewsCard(props) {
    return (
            <div className="NewsCard">
                <div className="cardImg">
                    <img src={props.Img} alt="Assassins creed"/>
                </div>

                <div className="cardDetail mt-3">
                    <h3 className="News-card-name">{props.name}</h3>
                    <div className="News-card-information d-flex gap-4">
                        <div className="game-date-container">
                            <span className="icon-date">
                                    <svg width='28' className="icon" viewBox="0 0 24 24" stroke="#9590a8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M16 2V6M8 2V6M3 10H21M5 4H19C20.1046 4 21 4.89543 21 6V20C21 21.1046 20.1046 22 19 22H5C3.89543 22 3 21.1046 3 20V6C3 4.89543 3.89543 4 5 4Z"></path>
                                    </svg>
                            </span>

                            <span className="date">{props.date}</span>
                        </div>

                        <div className="game-genre-container">
                            <span className="icon-genre">
                                <svg width='25' className="icon" viewBox="0 0 24 24" stroke="#9590a8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M21.3933 13.9061L13.9135 21.3879C13.7197 21.582 13.4896 21.7359 13.2363 21.8409C12.983 21.9459 12.7115 22 12.4373 22C12.1631 22 11.8916 21.9459 11.6383 21.8409C11.3851 21.7359 11.155 21.582 10.9612 21.3879L2 12.4348V2H12.4321L21.3933 10.9635C21.7819 11.3545 22 11.8835 22 12.4348C22 12.9862 21.7819 13.5151 21.3933 13.9061V13.9061Z"></path>
                                    <path d="M7.00002 7H6.90002"></path>
                                </svg>
                            </span>
                            <span className="genre">{props.genre}</span>
                        </div>
                    </div>
                    <p className="News-card-des">{props.descrption}</p>
                    <a className="News-card-link" href="_">Read more</a>
                </div>
            </div>
    );
}

export function FeedCard(props) {
    return (
        <div className="Feed-card">
            <div className="Feed-card-img">
                {props.icon}
            </div>

            <div className="Feed-card-title mt-4">
                <h4>{props.title}</h4>
            </div>

            <div className="Feed-card-des">
                <h6>{props.des}</h6>
            </div>
        </div>
    );
}

export function FooterCard(props) {
    return (
        <div className="footer-card">
            <div className="footer-card-icon">
                {props.icon}
            </div>
            <h5>{props.title}</h5>
        </div>
    );
}
