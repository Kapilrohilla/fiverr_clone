import React from 'react'
import './order.scss'
const Order = () => {
    const currentUser = {
        id: 1,
        username: "John Doe",
        isSeller: true
    };
    return (
        <div className="Order">
            <div className="container">
                <div className="title">
                    <h1>Orders</h1>
                </div>
                <table>
                    <tr>
                        <th>Image</th>
                        <th>Title</th>
                        <th>Price</th>
                        <th>{currentUser.isSeller ? "Buyer" : "Seller"}</th>
                        <th>Contact</th>
                    </tr>
                    <tr>
                        <td>
                            <img className='img' src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/297331964/original/558cd008cedde9b75e2a32a34281b685ff1be962/design-3d-digital-illustrations-and-characters-using-ai.png" alt="" />
                        </td>
                        <td>Gig1</td>
                        <td>88</td>
                        <td>123</td>
                        <td>
                            <img className='delete' src="msg.svg" alt="" />
                        </td>
                    </tr>           <tr>
                        <td>
                            <img className='img' src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/297331964/original/558cd008cedde9b75e2a32a34281b685ff1be962/design-3d-digital-illustrations-and-characters-using-ai.png" alt="" />
                        </td>
                        <td>Gig1</td>
                        <td>88</td>
                        <td>123</td>
                        <td>
                            <img className='delete' src="msg.svg" alt="" />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <img className='img' src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/297331964/original/558cd008cedde9b75e2a32a34281b685ff1be962/design-3d-digital-illustrations-and-characters-using-ai.png" alt="" />
                        </td>
                        <td>Gig1</td>
                        <td>88</td>
                        <td>123</td>
                        <td>
                            <img className='delete' src="msg.svg" alt="" />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <img className='img' src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/297331964/original/558cd008cedde9b75e2a32a34281b685ff1be962/design-3d-digital-illustrations-and-characters-using-ai.png" alt="" />
                        </td>
                        <td>Gig1</td>
                        <td>88</td>
                        <td>123</td>
                        <td>
                            <img className='delete' src="msg.svg" alt="" />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <img className='img' src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/297331964/original/558cd008cedde9b75e2a32a34281b685ff1be962/design-3d-digital-illustrations-and-characters-using-ai.png" alt="" />
                        </td>
                        <td>Gig1</td>
                        <td>88</td>
                        <td>123</td>
                        <td>
                            <img className='delete' src="msg.svg" alt="" />
                        </td>
                    </tr>           <tr>
                        <td>
                            <img className='img' src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/297331964/original/558cd008cedde9b75e2a32a34281b685ff1be962/design-3d-digital-illustrations-and-characters-using-ai.png" alt="" />
                        </td>
                        <td>Gig1</td>
                        <td>88</td>
                        <td>123</td>
                        <td>
                            <img className='delete' src="msg.svg" alt="" />
                        </td>
                    </tr>           <tr>
                        <td>
                            <img className='img' src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/297331964/original/558cd008cedde9b75e2a32a34281b685ff1be962/design-3d-digital-illustrations-and-characters-using-ai.png" alt="" />
                        </td>
                        <td>Gig1</td>
                        <td>88</td>
                        <td>123</td>
                        <td>
                            <img className='delete' src="msg.svg" alt="" />
                        </td>
                    </tr>
                </table>
            </div>

        </div>
    )
}

export default Order;
