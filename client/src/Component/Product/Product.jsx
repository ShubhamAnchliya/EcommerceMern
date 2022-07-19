import React from 'react'
import { Link } from 'react-router-dom';
import ReactStars from "react-rating-stars-component";
import "./Product.css";

// const options = {

//   count:5,
//   // onChange: "ratingChanged",
//   size: 24,
//   activeColor: "#ffd700",
//   onChange: newValue => {
//     console.log(`Example 4: new value is ${newValue}`);
  
//   }

// };



const Product = ({ product }) => {

  const options = {

    count:5,
    // onChange: "ratingChanged",
    size: 24,
    activeColor: "#ffd700",
    // onChange: newValue => {
    //   console.log(`Example 4: new value is ${newValue}`);
    value: product.ratings
    
    }
  



  return (
    <>
        <Link className='productCard' to={`/product/${product._id}`}   >

          <img src={product.images[0].url}  alt={product.name}     />
          <p >{product.name}</p>
          <div>
            <ReactStars {...options} /> <span>({product.numOfReviews} Reviews)</span>
          </div>
          <span>{`₹${product.price}`}</span>


        </Link>

        
    </>
  );
};

export default Product;