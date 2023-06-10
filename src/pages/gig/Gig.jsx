import React from 'react'
import './Gig.scss';
import { Slider } from 'infinite-react-carousel/lib';
const Gig = () => {
    return (
        <div className="gig">
            <div className="container">
                <div className="left">
                    <span className="breadCrumbs">FIVERR &gt; GRAPHIC &gt; DESIGN</span>
                    <h1>I will create ai generated art for you</h1>

                    <div className="user">
                        <img className='pp' src="https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/0a942eaf07f700413307cb83bcc725db-1679042705998/bb5a591c-bcff-4ee0-9cdd-db64f26eee95.png" alt="" />
                        <span>John Doe</span>
                        <div className="stars">
                            <img src="../star.svg" alt="" />
                            <img src="../star.svg" alt="" />
                            <img src="../star.svg" alt="" />
                            <img src="../star.svg" alt="" />
                            <img src="../star.svg" alt="" />
                            <span>5</span>
                        </div>
                    </div>
                    <Slider slidesToShow={1} arrowsScroll={1} className="slider">
                        <img src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs2/297331964/original/004dff208627c3e60a4e3acd549fd286f6d39a5a/design-3d-digital-illustrations-and-characters-using-ai.png" alt="" />
                        <img src="https://fiverr-res.cloudinary.com/image/upload/t_gig_pdf_gallery_view_ver4,f_jpg/20230329/scents%20AI%20cover_nbg68j.jpg" alt="" />
                        <img src="https://fiverr-res.cloudinary.com/image/upload/t_gig_pdf_gallery_view_ver4,f_jpg/20230329/characters_yo2k7g.jpg" alt="" />
                        <img src="https://fiverr-res.cloudinary.com/images/t_smartwm/t_main1,q_auto,f_auto,q_auto,f_auto/attachments/delivery/asset/204dca334b99eb7bda74dc9a1841269f-1679976251/sample%202/design-3d-digital-illustrations-and-characters-using-ai.png" alt="" />
                    </Slider>
                    <h2>About This Gig</h2>
                    <p>
                        I will create an ilustration using AI with a description or some other image for representation.

                        If you think your idea is more complex, chat me first
                    </p>
                    <div className="seller">
                        <h2>About the seller</h2>
                        <div className="user">
                            <img src="https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/0a942eaf07f700413307cb83bcc725db-1679042705998/bb5a591c-bcff-4ee0-9cdd-db64f26eee95.png" alt="" />
                            <div className="info">
                                <span>John Doe</span>
                                <div className="stars">
                                    <img src="../star.svg" alt="" />
                                    <img src="../star.svg" alt="" />
                                    <img src="../star.svg" alt="" />
                                    <img src="../star.svg" alt="" />
                                    <img src="../star.svg" alt="" />
                                    <span>5</span>
                                </div>
                                <button>Contact Me</button>
                            </div>
                        </div>
                        <div className="box">
                            <div className="items">
                                <div className="item">
                                    <span className="title">From</span>
                                    <span className="desc">USA</span>
                                </div>
                                <div className="item">
                                    <span className="title">Member since</span>
                                    <span className="desc">Aug 2002</span>
                                </div>
                                <div className="item">
                                    <span className="title">Avg. response time</span>
                                    <span className="desc">4 hours</span>
                                </div>
                                <div className="item">
                                    <span className="title">Last delivery</span>
                                    <span className="desc">1 day</span>
                                </div>
                                <div className="item">
                                    <span className="title">Languages</span>
                                    <span className="desc">English</span>
                                </div>
                            </div>
                            <hr />
                            <p>
                                Hi! I'm Lucas, I've been using AI for a while so now I think I can take some requests.
                                I keep studying and learning more about the AI generated images everyday, so I'll do my best!
                            </p>
                        </div>
                    </div>
                    <div className="reviews">
                        <h2>Reviews</h2>
                        <div className="item">
                            <div className="user">
                                <img className="pp" src="https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/0a942eaf07f700413307cb83bcc725db-1679042705998/bb5a591c-bcff-4ee0-9cdd-db64f26eee95.png" alt="" />
                                <div className="info">
                                    <span>John Doe</span>
                                    <div className="country">
                                        <img src="https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/255px-Flag_of_India.svg.png" alt="" />
                                        <span>India</span>
                                    </div>
                                </div>
                            </div>
                            <div className="stars">
                                <img src="../star.svg" alt="" />
                                <img src="../star.svg" alt="" />
                                <img src="../star.svg" alt="" />
                                <img src="../star.svg" alt="" />
                                <img src="../star.svg" alt="" />
                                <span>5</span>
                            </div>
                            <p>
                                Hi! I'm Lucas, I've been using AI for a while so now I think I can take some requests.
                                I keep studying and learning more about the AI generated images everyday, so I'll do my best!
                            </p>
                            <div className="helpful">
                                <span>Helpful?</span>
                                <img src="../like.svg" alt="" />
                                <span>Yes</span>
                                <img src="../dislike.svg" alt="" />
                                <span>No</span>
                            </div>
                        </div>
                        <div className="item">
                            <div className="user">
                                <img className="pp" src="https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/0a942eaf07f700413307cb83bcc725db-1679042705998/bb5a591c-bcff-4ee0-9cdd-db64f26eee95.png" alt="" />
                                <div className="info">
                                    <span>John Doe</span>
                                    <div className="country">
                                        <img src="https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/255px-Flag_of_India.svg.png" alt="" />
                                        <span>India</span>
                                    </div>
                                </div>
                            </div>
                            <div className="stars">
                                <img src="../star.svg" alt="" />
                                <img src="../star.svg" alt="" />
                                <img src="../star.svg" alt="" />
                                <img src="../star.svg" alt="" />
                                <img src="../star.svg" alt="" />
                                <span>5</span>
                            </div>
                            <p>
                                Hi! I'm Lucas, I've been using AI for a while so now I think I can take some requests.
                                I keep studying and learning more about the AI generated images everyday, so I'll do my best!
                            </p>
                            <div className="helpful">
                                <span>Helpful?</span>
                                <img src="../like.svg" alt="" />
                                <span>Yes</span>
                                <img src="../dislike.svg" alt="" />
                                <span>No</span>
                            </div>
                        </div>
                        <div className="item">
                            <div className="user">
                                <img className="pp" src="https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/0a942eaf07f700413307cb83bcc725db-1679042705998/bb5a591c-bcff-4ee0-9cdd-db64f26eee95.png" alt="" />
                                <div className="info">
                                    <span>John Doe</span>
                                    <div className="country">
                                        <img src="https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/255px-Flag_of_India.svg.png" alt="" />
                                        <span>India</span>
                                    </div>
                                </div>
                            </div>
                            <div className="stars">
                                <img src="../star.svg" alt="" />
                                <img src="../star.svg" alt="" />
                                <img src="../star.svg" alt="" />
                                <img src="../star.svg" alt="" />
                                <img src="../star.svg" alt="" />
                                <span>5</span>
                            </div>
                            <p>
                                Hi! I'm Lucas, I've been using AI for a while so now I think I can take some requests.
                                I keep studying and learning more about the AI generated images everyday, so I'll do my best!
                            </p>
                            <div className="helpful">
                                <span>Helpful?</span>
                                <img src="../like.svg" alt="" />
                                <span>Yes</span>
                                <img src="../dislike.svg" alt="" />
                                <span>No</span>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="right">
                    <div className="price">
                        <h3>1 AI Generated Image</h3>
                        <h2>$59.99</h2>
                    </div>
                    <p>I will create a unique high quality AI generated image on the description that you give me</p>
                    <div className="detail">
                        <div className="item">
                            <img src="../clock.svg" alt="" />
                            <span>2 days Delivery</span>
                        </div>
                        <div className="item">
                            <img src="../recycle.svg" alt="" />
                            <span>3 Revision</span>
                        </div>
                    </div>
                    <div className="pro-detail">
                        <p>Prompt Writing</p>
                        <p>Prompt Writing</p>
                        <p>Prompt Writing</p>
                        <p>Prompt Writing</p>
                    </div>
                    <button>Continue</button>
                </div>
            </div>
        </div >
    )
}

export default Gig
