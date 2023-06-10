import React from 'react'
import './MyGigs.scss'
import { Link } from 'react-router-dom'
const MyGigs = () => {
    return (
        <div className="myGigs">
            <div className="container">
                <div className="title">
                    <h1>Gigs</h1>
                    <Link to="/add">
                        <button>Add New Gig</button>
                    </Link>
                </div>
                <table>
                    <tr>
                        <th>Image</th>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Sales</th>
                        <th>Action</th>
                    </tr>
                    <tr>
                        <td>
                            <img className='img' src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/297331964/original/558cd008cedde9b75e2a32a34281b685ff1be962/design-3d-digital-illustrations-and-characters-using-ai.png" alt="" />
                        </td>
                        <td>Gig1</td>
                        <td>88</td>
                        <td>123</td>
                        <td>
                            <img className='delete' src="delete.svg" alt="" />
                        </td>
                    </tr>           <tr>
                        <td>
                            <img className='img' src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/297331964/original/558cd008cedde9b75e2a32a34281b685ff1be962/design-3d-digital-illustrations-and-characters-using-ai.png" alt="" />
                        </td>
                        <td>Gig1</td>
                        <td>88</td>
                        <td>123</td>
                        <td>
                            <img className='delete' src="delete.svg" alt="" />
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
                            <img className='delete' src="delete.svg" alt="" />
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
                            <img className='delete' src="delete.svg" alt="" />
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
                            <img className='delete' src="delete.svg" alt="" />
                        </td>
                    </tr>           <tr>
                        <td>
                            <img className='img' src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/297331964/original/558cd008cedde9b75e2a32a34281b685ff1be962/design-3d-digital-illustrations-and-characters-using-ai.png" alt="" />
                        </td>
                        <td>Gig1</td>
                        <td>88</td>
                        <td>123</td>
                        <td>
                            <img className='delete' src="delete.svg" alt="" />
                        </td>
                    </tr>           <tr>
                        <td>
                            <img className='img' src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/297331964/original/558cd008cedde9b75e2a32a34281b685ff1be962/design-3d-digital-illustrations-and-characters-using-ai.png" alt="" />
                        </td>
                        <td>Gig1</td>
                        <td>88</td>
                        <td>123</td>
                        <td>
                            <img className='delete' src="delete.svg" alt="" />
                        </td>
                    </tr>
                </table>
            </div>

        </div>
    )
}

export default MyGigs
