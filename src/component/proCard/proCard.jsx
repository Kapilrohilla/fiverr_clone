import React from 'react'
import { Link } from 'react-router-dom'
import "./procard.scss";

const ProCard = ({ item }) => {
    return (
        <Link to="/">
            <div className='proCard'>
                <img src={item.img} alt={item.title} />
                <div className="productDetail">
                    <div className="owner-image">
                        <img src={item.img} alt="" />
                    </div>
                    <div className="owner-info">
                        <span className='title'>{item.title}</span>
                        <span className="author">{item.author}</span>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default ProCard;
