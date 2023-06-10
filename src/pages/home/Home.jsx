import React from 'react';
import Featured from '../../component/featured/Featured';
import './Home.scss';
import TrustedBy from '../../component/trustedBy/TrustedBy';
import Slide from '../../component/slide/Slide';
import CatCard from '../../component/catCard/catCard';
import { cards, projects } from '../../data';
import ProCard from '../../component/proCard/proCard';
import GigCard from '../../component/gigCard/GigCard';
import { gigData } from '../../data';
const Home = () => {
    return (
        <div>
            <Featured />
            <TrustedBy />
            <Slide slidesToShow={5} arrowsScroll={2}>
                {
                    cards.map(card => {
                        return <CatCard item={card} key={card.id} />
                    })
                }
            </Slide>
            <div className="features">
                <div className="features-container">
                    <div className="left">
                        <h2 className='title'>A whole world of freelance talent at your fingertips</h2>
                        <div className="item">
                            <div className="itemHeading">                        <img src="check.svg" alt="check" />
                                <h3>The best for every budget</h3></div>
                            <p>Find high quality services at every price point. No hourly rates just project based pricing</p>
                        </div>
                        <div className="item">
                            <div className="itemHeading">
                                <img src="check.svg" alt="check" />
                                <h3>Quality work done quickly</h3>
                            </div>
                            <p>Find the right freelancer to begin working on your project within minutes</p>
                        </div>
                        <div className="item">
                            <div className="itemHeading">
                                <img src="check.svg" alt="check" />
                                <h3>Protected payment, every time</h3>
                            </div>
                            <p>Always know what you'll pay upfrount. Your payment isn't released until you approve the work</p>
                        </div>
                        <div className="item">
                            <div className="itemHeading">
                                <img src="check.svg" alt="check" />
                                <h3>25/7 support</h3>
                            </div>
                            <p>Find high quality services at every price point. No hourly rates just project based pricing</p>
                        </div>
                    </div>
                    <div className="right">
                        <video src="" controls></video>
                    </div>
                </div>
            </div>
            {/* blue features */}
            <div className="features-blue">
                <div className="features-blue-container">
                    <div className="left">
                        <h2 className="title">A solution built for business</h2>
                        <div className="item">
                            <div className="itemHeading">                        <img src="check.svg" alt="check" />
                                <h3>The best for every budget</h3></div>
                            <p>Find high quality services at every price point. No hourly rates just project based pricing</p>
                        </div>
                        <div className="item">
                            <div className="itemHeading">
                                <img src="check.svg" alt="check" />
                                <h3>Quality work done quickly</h3>
                            </div>
                            <p>Find the right freelancer to begin working on your project within minutes</p>
                        </div>
                        <div className="item">
                            <div className="itemHeading">
                                <img src="check.svg" alt="check" />
                                <h3>Protected payment, every time</h3>
                            </div>
                            <p>Always know what you'll pay upfrount. Your payment isn't released until you approve the work</p>
                        </div>
                        <div className="item">
                            <div className="itemHeading">
                                <img src="check.svg" alt="check" />
                                <h3>25/7 support</h3>
                            </div>
                            <p>Find high quality services at every price point. No hourly rates just project based pricing</p>
                        </div>
                        <button className="explore">Explore Fiverr Business</button>
                    </div>
                    <div className="right">
                        <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_450,dpr_1.0/v1/attachments/generic_asset/asset/d532c0ad4feed007b3899cebad595286-1599611560155/guide-create-a-logo-552-x2.png" alt="" />
                    </div>
                </div>
            </div>
            <Slide slidesToShow={4} arrowsScroll={2}>
                {
                    projects.map(project => {
                        return <ProCard item={project} key={project.id} />
                    })
                }
            </Slide>
        </div >
    )
}

export default Home;
