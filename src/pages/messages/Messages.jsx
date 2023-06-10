import React from 'react'
import './Messages.scss'
import { Link } from 'react-router-dom'
const Order = () => {

    const message = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque enim sint hic repudiandae beatae eum eveniet ipsam.'
    return (
        <div className="messages">
            <div className="container">
                <div className="title">
                    <h1>Messages</h1>
                </div>
                <table>
                    <tr>
                        <th>Image</th>
                        <th>Last Message</th>
                        <th>Date</th>
                        <th>Action</th>
                    </tr>
                    <tr>
                        <td>
                            John Doe
                        </td>
                        <td><Link to="/message/123" className="link">{message.substring(0, 100)}...</Link></td>
                        <td>1 day ago</td>
                        <td>
                            <button>
                                Mark as read
                            </button>
                        </td>

                    </tr>
                    <tr>
                        <td>
                            John Doe
                        </td>
                        <td><Link to="/message/123" className="link">{message.substring(0, 100)}...</Link></td>
                        <td>1 day ago</td>
                        <td>
                            <button>
                                Mark as read
                            </button>
                        </td>

                    </tr>
                    <tr>
                        <td>
                            John Doe
                        </td>
                        <td><Link to="/message/123" className="link">{message.substring(0, 100)}...</Link></td>
                        <td>1 day ago</td>
                        <td>

                        </td>
                    </tr>
                    <tr>
                        <td>
                            John Doe
                        </td>
                        <td><Link to="/message/123" className="link">{message.substring(0, 100)}...</Link></td>
                        <td>1 day ago</td>
                        <td>

                        </td>

                    </tr>
                    <tr>
                        <td>
                            John Doe
                        </td>
                        <td><Link to="/message/123" className="link">{message.substring(0, 100)}...</Link></td>
                        <td>1 day ago</td>
                        <td>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            John Doe
                        </td>
                        <td><Link to="/message/123" className="link">{message.substring(0, 100)}...</Link></td>
                        <td>1 day ago</td>
                        <td>
                        </td>
                    </tr>
                </table>
            </div>

        </div>
    )
}

export default Order;
