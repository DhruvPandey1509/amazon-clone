import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {

    return (

        <div className="home">
            <div className="home__container">
                <div className="home__container">
                    <img className="home__image"
                        src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2021/X-site/SingleTitle/TheLordoftherings-Teaser/3000x1200_Hero-Tall._CB633114331_.jpg"
                        alt=""
                    />
                </div>
                <div className="home__row">
                    <Product
                        title="The Lean Startup : How Constant Innovation Creates Radically Successful Businesses Paperback"
                        price={29.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
                        rating={5}
                    />
                    <Product />
                </div>
                <div className="home__row">
                    <Product />
                    <Product />
                    <Product />
                </div>
                <div className="home__row">
                    <Product />
                </div>
            </div>
        </div>
    )
}

export default Home