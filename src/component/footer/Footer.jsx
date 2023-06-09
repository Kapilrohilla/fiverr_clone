import React from 'react'
import './Footer.scss';
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="top">
                    <div className="cat">
                        <h5 className="cat-title">Category</h5>
                        <ul>
                            <li>Graphic and Deisgn</li>
                            <li>Digital Marketing</li>
                            <li>Writing and Translation</li>
                            <li>Video and animation</li>
                            <li>Music and audio</li>
                            <li>Programming and tech</li>
                            <li>Data</li>
                            <li>Business</li>
                            <li>Lifestyle</li>
                            <li>End to End product</li>
                        </ul>
                    </div>
                    <div className="cat">
                        <h5 className="cat-title">About</h5>
                        <ul>
                            <li>Graphic and Deisgn</li>
                            <li>Digital Marketing</li>
                            <li>Writing and Translation</li>
                            <li>Video and animation</li>
                            <li>Music and audio</li>
                            <li>Programming and tech</li>
                            <li>Data</li>
                            <li>Business</li>
                            <li>Lifestyle</li>
                            <li>End to End product</li>
                        </ul>
                    </div>
                    <div className="cat">
                        <h5 className="cat-title">Support</h5>
                        <ul>
                            <li>Graphic and Deisgn</li>
                            <li>Digital Marketing</li>
                            <li>Writing and Translation</li>
                            <li>Video and animation</li>
                            <li>Music and audio</li>
                            <li>Programming and tech</li>
                            <li>Data</li>
                            <li>Business</li>
                            <li>Lifestyle</li>
                            <li>End to End product</li>
                        </ul>
                    </div>
                    <div className="cat">
                        <h5 className="cat-title">Community</h5>
                        <ul>
                            <li>Graphic and Deisgn</li>
                            <li>Digital Marketing</li>
                            <li>Writing and Translation</li>
                            <li>Video and animation</li>
                            <li>Music and audio</li>
                            <li>Programming and tech</li>
                            <li>Data</li>
                            <li>Business</li>
                            <li>Lifestyle</li>
                            <li>End to End product</li>
                        </ul>
                    </div>
                    <div className="cat">
                        <h5 className="cat-title">More on Fiverr</h5>
                        <ul>
                            <li>Graphic and Deisgn</li>
                            <li>Digital Marketing</li>
                            <li>Writing and Translation</li>
                            <li>Video and animation</li>
                            <li>Music and audio</li>
                            <li>Programming and tech</li>
                            <li>Data</li>
                            <li>Business</li>
                            <li>Lifestyle</li>
                            <li>End to End product</li>
                        </ul>
                    </div>
                </div>
                <hr />
                <div className="bottom">
                    <div className="left">
                        <div className="logo">
                            <Link className="link">
                                <span className="text">fiverr</span>
                            </Link>
                            <div className="dot">.</div>
                        </div>
                        <span className="copyright">© Fiverr International Ltd. 2023</span>
                    </div>
                    <div className="right">

                    </div>
                </div>
            </div>
        </div>);
}

export default Footer;
