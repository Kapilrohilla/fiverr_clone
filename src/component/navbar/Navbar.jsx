import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.scss';
const Navbar = () => {
    const [active, setActive] = useState(false);
    const [open, setOpen] = useState(false);

    const { pathname } = useLocation();

    const isActive = () => {
        window.scrollY > 0 ? setActive(true) : setActive(false);
    }
    useEffect(() => {
        window.addEventListener("scroll", isActive);

        return () => {
            window.removeEventListener('scroll', isActive);
        };
    }, []);

    const currentUser = {
        id: 1,
        username: "John Doe",
        isSeller: true
    }

    return (
        <div className={active || pathname !== "/" ? "navbar active" : "navbar"}>
            <div className="container">
                <div className="logo">
                    <Link to='/' className="link">
                        <span className="text">fiverr</span>
                    </Link>
                    <span className="dot">.</span>
                </div>
                <div className="links">
                    <span>Fiverr Business</span>
                    <span>Explore</span>
                    <span>English</span>
                    <span>Sign in</span>
                    {!currentUser.isSeller && <span>Become a Seller</span>}
                    {!currentUser && <button>Join</button>}
                    {currentUser && (
                        <div className="user" onClick={() => setOpen(!open)}>
                            <img src="https://www.svgrepo.com/show/513487/id-card.svg" alt="user" />
                            <span>{currentUser.username}</span>
                            {open && <div className="options">
                                {currentUser.isSeller && (
                                    <>
                                        <Link className="link" to="/gigs">Gigs</Link>
                                        <Link className="link" to="/add">Add New Gig</Link>
                                    </>
                                )}
                                <Link className="link" to="/orders">Orders</Link>
                                <Link className="link" to="messages">Messages</Link>
                                <Link className="link" to="/">Logout</Link>
                            </div>}
                        </div>
                    )}
                </div>
            </div>
            {active && <div >
                <hr />
                <div className="menu">
                    <Link className="link">Graphic and Design</Link>
                    <Link className="link">Video and animation</Link>
                    <Link className="link">Writing and translation</Link>
                    <Link className="link">AI services</Link>
                    <Link className="link">Digital Marketing</Link>
                    <Link className="link">Music and Audio</Link>
                    <Link className="link">Programming and Tech</Link>
                    <Link className="link">Business</Link>
                    <Link className="link">Lifestyle</Link>
                </div>
            </div>}
        </div>
    )
}

export default Navbar;
