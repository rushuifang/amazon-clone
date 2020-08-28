import React from "react";
import Product from "./Product";
import "./Home.css";

function Home() {
    return (
        <div className="home">
            <img
                className="home_image"
                src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                alt=""
            />
            <div className="home_row">
                <Product
                    id="1"
                    title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
                    price={11.96}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_B01,204,203,200_.jpg"
                />
                <Product
                    id="2"
                    title="Dash Mini Toaster Oven Cooker for Bread, Bagels, Cookies, Pizza, Paninis & More with Baking Tray, Rack, Auto Shut Off Feature, Aqua"
                    price={29.99}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/71nm0ZObH-L._AC_SL1500_.jpg"
                />
            </div>
            <div className="home_row">
                <Product
                    id="3"
                    title='Trends International Star Wars Galaxy Wall Poster 22.375" x 34"'
                    price={10.0}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/81bI8dgvIgL._AC_SL1200_.jpg"
                />
                <Product
                    id="4"
                    title="Doritos Flavored Tortilla Chips Variety Pack, 40 Count"
                    price={16.98}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/81HqfpMuDQL._SL1500_.jpg"
                />
                <Product
                    id="5"
                    title="Schwinn High Timber Youth and Adult Mountain Bike, Aluminum and Steel Frame Options, 7-21 Speeds Options, 24-29-Inch Wheels, Multiple Colors"
                    price={299.99}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/91fljfvkIeL._AC_SL1500_.jpg"
                />
            </div>
            <div className="home_row">
                <Product
                    id="6"
                    title="Acer Aspire 5 Slim Laptop, 15.6 inches Full HD IPS Display, AMD Ryzen 3 3200U, Vega 3 Graphics, 4GB DDR4, 128GB SSD, Backlit Keyboard, Windows 10 in S Mode, A515-43-R19L,Silver"
                    price={349.99}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/71vvXGmdKWL._AC_SL1500_.jpg"
                />
            </div>
        </div>
    );
}

export default Home;
