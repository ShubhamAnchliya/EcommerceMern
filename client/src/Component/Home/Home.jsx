import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProduct } from '../../actions/productAction';
// import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Loader from '../Loader/Loader';
import MetaData from '../MetaData';
import Navbar from '../Navbar/Navbar';
import Product from '../Product/Product';
// import Navbar from '../Navbar/Navbar';
import "./Home.css";

import  {useAlert} from 'react-alert';


// const product = { 

//   name :"Blue TShirt",
//   images: [{ url: "https://rukminim1.flixcart.com/image/800/960/kzd147k0/t-shirt/q/z/m/m-tsrt-303-reya-original-imagbefyffzh68wj.jpeg?q=50" }],
//   price: "₹450",
//   _id : "shubham",


// };


const Home = () => {

  const alert = useAlert();

  const dispatch = useDispatch();

  const { loading, error, products, productsCount } = useSelector(

    (state) => state.products




  );


  useEffect(() => {

    if(error){
      return alert.error(error);

    }

    dispatch(getProduct());

  }, [dispatch, error ]);
  


  return (

    <>

      {
        loading ? (
          <Loader />
        ) : (
          <>

            <MetaData title="Home Page"/>

            <Navbar/>

      
            <div className="showcase-area" id="showcase">
          
              <div className='showcase-container'>
                      <div className='divB'>
                          <h1 className="main-title" id="home">Welcome to our store</h1>
                          <p>Discover the latest launched product here.</p>
                          <a href="#pageend" className="btns btn-primary">Scroll</a>
                      </div>
              </div>

            </div>


            <h2 className='featureProduct' id='pageend'>Feature Product</h2>

            <div className='productContainer' id='productContainer'  >

              {/* <Product product={product} /> */}

                {  products && products.map((product) => <Product product={product} /> )}

            </div>


            <Footer/>


          </>
        
        )
      }
    

     

    </>
   
  )
}

export default Home;