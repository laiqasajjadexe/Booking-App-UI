import React from 'react'
import './FeaturedProperties.css'


const FeaturedProperties = () => {
    return (
        <div className="fp">
            <div className="fpItem">
                <img
                    src="https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1"
                    alt=""
                    className="fpImg"
                />
                <span className="fpName">Aparthotel Stare Miasto</span>
                <span className="fpCity">Madrid</span>
                <span className="fpPrice">Starting from $120</span>
                <div className="fpRating">
                    <button>8.9</button>
                    <span>Excellent</span>
                </div>
            </div>
            <div className="fpItem">
                <img
                    src="https://cf.bstatic.com/xdata/images/hotel/square600/44146554.webp?k=2b0fd82f2d6230cc7c3d20f4a19f141da3f14c25fc8402a8f9334e8bc0c98508&o="
                    alt=""
                    className="fpImg"
                />
                <span className="fpName">Comfort Suites Airport</span>
                <span className="fpCity">Austin</span>
                <span className="fpPrice">Starting from $140</span>
                <div className="fpRating">
                    <button>9.3</button>
                    <span>Exceptional</span>
                </div>
            </div>
            <div className="fpItem">
                <img
                    src="https://cf.bstatic.com/xdata/images/hotel/square600/420377357.webp?k=29a0e9879ac8361539c3dae41f047d383e6fa6917f8f47cb50dad001ada0eae6&o="
                    alt=""
                    className="fpImg"
                />
                <span className="fpName">Four Seasons Hotel</span>
                <span className="fpCity">Lisbon</span>
                <span className="fpPrice">Starting from $99</span>
                <div className="fpRating">
                    <button>8.8</button>
                    <span>Excellent</span>
                </div>
            </div>
            <div className="fpItem">
                <img
                    src="https://cf.bstatic.com/xdata/images/hotel/square600/579099936.webp?k=e04cc7f7fe864ce09b7d7d978dbb7db3e558038a2151eb7c4c11e895bafbd8c0&o="
                    alt=""
                    className="fpImg"
                />
                <span className="fpName">Hilton Garden Inn</span>
                <span className="fpCity">Berlin</span>
                <span className="fpPrice">Starting from $105</span>
                <div className="fpRating">
                    <button>8.9</button>
                    <span>Excellent</span>
                </div>
            </div>
        </div>
    );
};

export default FeaturedProperties;