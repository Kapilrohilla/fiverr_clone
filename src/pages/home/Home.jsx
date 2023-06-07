import React from 'react';
import Featured from '../../component/featured/Featured';
import './Home.scss';
import TrustedBy from '../../component/trustedBy/TrustedBy';

const Home = () => {
    return (
        <div>
            <Featured />
            <TrustedBy />
        </div>
    )
}

export default Home;
