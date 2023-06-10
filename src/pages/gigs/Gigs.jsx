import React, { useState } from 'react'
import './Gigs.scss'
import { gigData } from '../../data';
import GigCard from '../../component/gigCard/GigCard';
const Gigs = () => {
    const [open, setOpen] = useState(false);
    const [sort, setSort] = useState("sales");
    const reSort = (type) => {
        setSort(type);
        setOpen(false);
    }
    return (
        <div>
            <div className="gigs">
                <div className="container">
                    <span className="breadcrumbs">
                        FIVERR &gt; GRAPHIC & DESIGN &gt;
                    </span>
                    <h1>AI Artists</h1>
                    <p>
                        Explore the boundaries of art and technology with Fiverr's AI artist's
                    </p>
                    <div className="menu">
                        <div className="left">
                            <span>Budged</span>
                            <input type="text" placeholder="min" />
                            <input type="text" placeholder='max' />
                            <button>Apply</button>
                        </div>
                        <div className="right">
                            <div className="sortBy">SortBy</div>
                            <span className="sortType">{sort === "sales" ? "Best Selling" : "Newest"}</span>
                            <img src="./down.svg" alt="sort" onClick={() => setOpen(!open)} />
                            {open && <div className="rightMenu">
                                {sort === "sales" ? <span onClick={() => reSort("created")}>Newest</span> :
                                    <span onClick={() => reSort("sales")}>Best Selling</span>}
                            </div>}
                        </div>
                    </div>
                    <div className="cards">
                        {
                            gigData.map(gig => {
                                return <GigCard item={gig} id={gig.id} />
                            })
                        }
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Gigs
