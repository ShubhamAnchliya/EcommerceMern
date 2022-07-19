import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getProduct } from '../../actions/productAction';
import Footer from '../Footer/Footer';
import Loader from '../Loader/Loader';
import MetaData from '../MetaData';
import Navbar from '../Navbar/Navbar';

const ProductDetails = () => {


  const dispatch = useDispatch();

  const { loading, error, products, productCount } = useSelector(

    (state) => state.products




  );


  useEffect(() => {

    dispatch(getProduct());

  }, [dispatch]);
  



  return (
    <>
        
        <>

            {
                loading ? (
                <Loader />
                ) : (
                <>

                <MetaData title="Product Detail Page"/>

                <Navbar/>




                <Footer/>


                </>
            
                )
            }

        </>
    
    </>
  )
}

export default ProductDetails;