import React from 'react';
import { NavLink } from 'react-router-dom';
import "./Navbar.css";

const Navbar = () => {

  return (

    <>

        <nav className="navbar">

            <div className="navbar-container container">

                <input type="checkbox" name="" id="" />

                <div className="hamburger-lines">

                    <span className="line line1"></span>
                    <span className="line line2"></span>
                    <span className="line line3"></span>

                </div>

                <ul className="menu-items">

                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/profile">Profile</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                    <li><NavLink to="/signup">SignUp</NavLink></li>
                    <li><NavLink to="/signin">SignIn</NavLink></li>

                </ul>



                <h1 className="logo">
               
                    PARSHWA STORE
              
              </h1>

            </div>

        </nav>

        {/* <section className="showcase-area" id="showcase">

        <div className="showcase-container">
            <h1 className="main-title" id="home">Welcome to our store</h1>
            <p>Discover the latest launched product here.</p>
            <a href="#food-menu" className="btns btn-primary">Menu</a>
        </div>
        
        </section> */}

     

        {/* <section id="food">
        <h2>Types of food</h2>
        <div className="food-container container">
            <div className="food-type fruite">
            <div className="img-container">
                <img src="https://i.postimg.cc/yxThVPXk/food1.jpg" alt="error" />
                <div className="img-content">
                <h3>fruite</h3>
                <a
                    href="https://en.wikipedia.org/wiki/Fruit"
                    className="btn btn-primary"
                    target="blank"
                    >learn more</a>
                </div>
            </div>
            </div>
            <div className="food-type vegetable">
            <div className="img-container">
                <img src="https://i.postimg.cc/Nffm6Rkk/food2.jpg" alt="error" />
                <div className="img-content">
                <h3>vegetable</h3>
                <a
                    href="https://en.wikipedia.org/wiki/Vegetable"
                    className="btn btn-primary"
                    target="blank"
                    >learn more</a>
                </div>
            </div>
            </div>
            <div className="food-type grin">
            <div className="img-container">
                <img src="https://i.postimg.cc/76ZwsPsd/food3.jpg" alt="error" />
                <div className="img-content">
                <h3>grin</h3>
                <a
                    href="https://en.wikipedia.org/wiki/Grain"
                    className="btn btn-primary"
                    target="blank"
                    >learn more</a>
                </div>
            </div>
            </div>
        </div>
        </section>

        <section id="food-menu">
        <h2 className="food-menu-heading">Food Menu</h2>
        <div className="food-menu-container container">
            <div className="food-menu-item">
            <div className="food-img">
                <img src="https://i.postimg.cc/wTLMsvSQ/food-menu1.jpg" alt="" />
            </div>
            <div className="food-description">
                <h2 className="food-titile">Food Menu Item 1</h2>
                <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Non,
                quae.
                </p>
                <p className="food-price">Price: &#8377; 250</p>
            </div>
            </div>

            <div className="food-menu-item">
            <div className="food-img">
                <img
                src="https://i.postimg.cc/sgzXPzzd/food-menu2.jpg"
                alt="error"
                />
            </div>
            <div className="food-description">
                <h2 className="food-titile">Food Menu Item 2</h2>
                <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Non,
                quae.
                </p>
                <p className="food-price">Price: &#8377; 250</p>
            </div>
            </div>
            <div className="food-menu-item">
            <div className="food-img">
                <img src="https://i.postimg.cc/8zbCtYkF/food-menu3.jpg" alt="" />
            </div>
            <div className="food-description">
                <h2 className="food-titile">Food Menu Item 3</h2>
                <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Non,
                quae.
                </p>
                <p className="food-price">Price: &#8377; 250</p>
            </div>
            </div>
            <div className="food-menu-item">
            <div className="food-img">
                <img src="https://i.postimg.cc/Yq98p5Z7/food-menu4.jpg" alt="" />
            </div>
            <div className="food-description">
                <h2 className="food-titile">Food Menu Item 4</h2>
                <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Non,
                quae.
                </p>
                <p className="food-price">Price: &#8377; 250</p>
            </div>
            </div>
            <div className="food-menu-item">
            <div className="food-img">
                <img src="https://i.postimg.cc/KYnDqxkP/food-menu5.jpg" alt="" />
            </div>
            <div className="food-description">
                <h2 className="food-titile">Food Menu Item 5</h2>
                <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Non,
                quae.
                </p>
                <p className="food-price">Price: &#8377; 250</p>
            </div>
            </div>
            <div className="food-menu-item">
            <div className="food-img">
                <img src="https://i.postimg.cc/Jnxc8xQt/food-menu6.jpg" alt="" />
            </div>
            <div className="food-description">
                <h2 className="food-titile">Food Menu Item 6</h2>
                <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Non,
                quae.
                </p>
                <p className="food-price">Price: &#8377; 250</p>
            </div>
            </div>
        </div>
        </section>
        <section id="testimonials">
        <h2 className="testimonial-title">What Our Customers Say</h2>
        <div className="testimonial-container container">
            <div className="testimonial-box">
            <div className="customer-detail">
                <div className="customer-photo">
                <img src="https://i.postimg.cc/5Nrw360Y/male-photo1.jpg" alt="" />
                <p className="customer-name">Ross Lee</p>
                </div>
            </div>
            <div className="star-rating">
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
            </div>
            <p className="testimonial-text">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit
                voluptas cupiditate aspernatur odit doloribus non.
            </p>
            
            </div>
            <div className="testimonial-box">
            <div className="customer-detail">
                <div className="customer-photo">
                <img
                    src="https://i.postimg.cc/sxd2xCD2/female-photo1.jpg"
                    alt=""
                />
                <p className="customer-name">Amelia Watson</p>
                </div>
            </div>
            <div className="star-rating">
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
            </div>
            <p className="testimonial-text">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit
                voluptas cupiditate aspernatur odit doloribus non.
            </p>
            
            </div>
            <div className="testimonial-box">
            <div className="customer-detail">
                <div className="customer-photo">
                <img src="https://i.postimg.cc/fy90qvkV/male-photo3.jpg" alt="" />
                <p className="customer-name">Ben Roy</p>
                </div>
            </div>
            <div className="star-rating">
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
            </div>
            <p className="testimonial-text">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit
                voluptas cupiditate aspernatur odit doloribus non.
            </p>
            
            </div>
        </div>
        </section>
        <section id="contact">
        <div className="contact-container container">
            <div className="contact-img">
            <img src="https://i.postimg.cc/1XvYM67V/restraunt2.jpg" alt="" />
            </div>

            <div className="form-container">
            <h2>Contact Us</h2>
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="E-Mail" />
            <textarea
                cols="30"
                rows="6"
                placeholder="Type Your Message"
            ></textarea>
            <a href="#" className="btn btn-primary">Submit</a>
            </div>
        </div>
        </section>  */}

       
    </>

  )
}

export default Navbar;