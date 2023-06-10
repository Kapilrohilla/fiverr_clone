import React from 'react';
import './GigCard.scss';
import { Link } from 'react-router-dom';

const GigCard = ({ item }) => {
    return (
        <Link to="/gig/123">
            <div className="gigCard">
                <img src={item.img} alt={item.desc} />
                <div className="detail">
                    <div className="name">
                        <img src={item.img2} alt={item.name} />
                        <span>{item.name}</span>
                    </div>
                    <p>{item.desc}</p>
                    <div className="rating">
                        <img src="star.svg" alt="rating = 2" />
                        {item.rating}
                    </div>
                    <div className="bottom">
                        <img src="heart.svg" alt="heart" className="like" />
                        <div className="price">
                            <p>${item.price}</p>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default GigCard
