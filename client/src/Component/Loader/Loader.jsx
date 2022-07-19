import React from 'react'
// import { useState, CSSProperties } from "react";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import "./Loader.css";

// const override = {
//     display: "block",
//     margin: "0 auto",
//     borderColor: "red",
//   };


const Loader = () => {

    // let [loading, setLoading] = useState(true);
    // let [color, setColor] = useState("#ffffff");

  return (

    <>
{/* 
        <div className="sweet-loading">
            <button onClick={() => setLoading(!loading)}>Toggle Loader</button>
            <input value={color} onChange={(input) => setColor(input.target.value)} placeholder="Color of the loader" />

            <ClipLoader color={color} loading={loading} cssOverride={override} size={150} />
        </div>   */}
        <ClimbingBoxLoader color='#4A90E2'  size={30}  speedMultiplier={2} className="loading" />

    </>

  )
}

export default Loader;