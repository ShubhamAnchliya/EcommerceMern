import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import Product from '../Product/Product';
// import Navbar from '../Navbar/Navbar';
import "./Home.css";

const product = { 

  name :"Blue TShirt",
  images: [{ url: "https://rukminim1.flixcart.com/image/800/960/kzd147k0/t-shirt/q/z/m/m-tsrt-303-reya-original-imagbefyffzh68wj.jpeg?q=50" }],
  price: "₹450",
  _id : "shubham"


}


const Home = () => {


  return (

    <>

      <Navbar/>

      {/* <br /> */}
      <div className="showcase-area" id="showcase">

      {/* <div className="home"> */}
            <div className='showcase-container'>
                    <div className='divB'>
                        <h1 className="main-title" id="home">Welcome to our store</h1>
                        <p>Discover the latest launched product here.</p>
                        <a href="#pageend" className="btns btn-primary">Scroll</a>
                    </div>
            </div>
        
        {/* </div> */}

      </div>



{/* 
      <section id="about">

        <div className="about-wrapper container">
            <div className="about-text">
            <p className="small">About Us</p>
            <h2>We've beem making healthy food last for 10 years</h2>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse ab
                eos omnis, nobis dignissimos perferendis et officia architecto,
                fugiat possimus eaque qui ullam excepturi suscipit aliquid optio,
                maiores praesentium soluta alias asperiores saepe commodi
                consequatur? Perferendis est placeat facere aspernatur!
            </p>
            </div>
            <div className="about-img">
            <img src="https://i.postimg.cc/mgpwzmx9/about-photo.jpg" alt="food" />
            </div>
        </div>

      </section> */}


      <h2 className='featureProduct'>Feature Product</h2>


      <div className='productContainer' id='productContainer'>

      <Product product={product} />

      </div>

      

      <Footer/>
     

    </>
  )
}

export default Home;