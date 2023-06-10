import React from 'react'
import './Message.scss';
import { Link } from 'react-router-dom';
const Message = () => {
    return (
        <div className='message'>
            <div className="container">
                <span className="breadCrumbs">
                    <Link to="/messages" className="link">MESSAGES</Link> &gt; JOHN DOE &gt;
                </span>
                <div className="messages">
                    <div className="item">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQijfqsTdf-ty8sbIgDxT4bwNB4F4dysPDjCddDrd8G36htyueOsSCRS43HltAnNVkz8xE&usqp=CAU" alt="" />
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae natus alias voluptate sapiente? Animi, consequatur!</p>
                    </div>
                    <div className="item owner">
                        <img src="https://www.svgrepo.com/show/513487/id-card.svg" alt="" />
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae natus alias voluptate sapiente? Animi, consequatur!</p>
                    </div>
                    <div className="item">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQijfqsTdf-ty8sbIgDxT4bwNB4F4dysPDjCddDrd8G36htyueOsSCRS43HltAnNVkz8xE&usqp=CAU" alt="" />
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae natus alias voluptate sapiente? Animi, consequatur!</p>
                    </div>
                    <div className="item owner">
                        <img src="https://www.svgrepo.com/show/513487/id-card.svg" alt="" />
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae natus alias voluptate sapiente? Animi, consequatur!</p>
                    </div>
                    <div className="item">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQijfqsTdf-ty8sbIgDxT4bwNB4F4dysPDjCddDrd8G36htyueOsSCRS43HltAnNVkz8xE&usqp=CAU" alt="" />
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae natus alias voluptate sapiente? Animi, consequatur!</p>
                    </div>
                    <div className="item owner">
                        <img src="https://www.svgrepo.com/show/513487/id-card.svg" alt="" />
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae natus alias voluptate sapiente? Animi, consequatur!</p>
                    </div>
                    <div className="item">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQijfqsTdf-ty8sbIgDxT4bwNB4F4dysPDjCddDrd8G36htyueOsSCRS43HltAnNVkz8xE&usqp=CAU" alt="" />
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae natus alias voluptate sapiente? Animi, consequatur!</p>
                    </div>
                    <div className="item owner">
                        <img src="https://www.svgrepo.com/show/513487/id-card.svg" alt="" />
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae natus alias voluptate sapiente? Animi, consequatur!</p>
                    </div>
                    <div className="item">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQijfqsTdf-ty8sbIgDxT4bwNB4F4dysPDjCddDrd8G36htyueOsSCRS43HltAnNVkz8xE&usqp=CAU" alt="" />
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae natus alias voluptate sapiente? Animi, consequatur!</p>
                    </div>
                    <div className="item owner">
                        <img src="https://www.svgrepo.com/show/513487/id-card.svg" alt="" />
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae natus alias voluptate sapiente? Animi, consequatur!</p>
                    </div>
                </div>
                <hr />
                <div className="write">
                    <textarea name="" placeholder='write a message' id="" cols="30" rows="10"></textarea>
                    <button>Send</button>
                </div>
            </div>
        </div>
    )
}

export default Message;
