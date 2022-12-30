import { useState } from "react";
import { useRef, React } from "react";
import logoImg from '../assests/images/if2.png';
import cartImg from '../assests/images/shopping-cart.jpg';
import '../pages/header.css';
import Dashboard from "./dashboard";
import { Popup } from '@progress/kendo-react-popup';
import { useEffect } from "react";



const Header = () => {

  return (
    //     <>

    //       <nav className="navbar navbar-expand-lg bg-dark">
    //         <div className="container">

    //           <div className="col-md-4">
    //             <a className="navbar-brand" href="#">
    //               <img src={logoImg} alt="" />
    //             </a>
    //           </div>
    //           <div className="col-md-6 ">
    //             <form action="" className="navbar-form">
    //             <div className="input-group ">
    //               <input ref={anchor} onClick={onFocus} type="text" className="form-control form-control-search input-search " id="inpt" placeholder="Search Products" ></input>

    //                 <div className="input-group-btn">
    //                   <button  className="btn btn-header bg-dark form-control  searchIcon" type="button"> <i className="fa fa-search"></i>Search</button>
    //                 </div>
    //               </div>
    //             </form>
    // </div>
    // {/* {
    //                 !show && <Popup anchor={anchor.current} show={!show} popupClass={"popup-content"}>
    //                   <div className="col-md-6 ">
    //             <form action="" className="navbar-form">
    //             <div className="input-group ">
    //               <input  type="text" className="form-control form-control-search input-search " id="inpt" placeholder="Search Products"/>

    //                 <div className="input-group-btn">
    //                   <button  className="btn btn-header bg-dark form-control  searchIcon" type="button"> <i className="fa fa-search"></i>Search</button>
    //                 </div>
    //               </div>
    //             </form>
    // </div>
    //                 </Popup>
    //               } */}


    //           <div class="col-md-2">
    //             <div class="collapse navbar-collapse  header-button justify-content-end">
    //               <a href="#" class="btn btn-header cart-btn"><i class="fa-solid fa-cart-shopping shopcart"></i> Cart
    //                 <span id="cart-total-qty2"></span></a>
    //             </div>
    //           </div>

    //         </div>
    //       </nav>

    //   <nav className="navbar navbar-default">
    //     <ul  className="nav-link">
    //       <li className=" dropdown text-warning" >
    //         <a href="#" className="dropdown-toggle text-white a-tag" data-bs-toggle="dropdown" aria-expanded="false">
    //          <i className="	fas fa-charging-station"></i> Products</a>


    //               <ul className="dropdown-menu">
    // 			<li className="dropdown-item dropdown"><a href="#" className="dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><span class="badge"></span> Embedded Solutions</a>
    //       <ul className="dropdown-menu">
    // 			<li className="dropdown-item"><a href="#"><span class="badge"></span> Connectors</a></li>
    //       </ul>
    //       </li>
    // 			<li className="dropdown-item"><a href="#"><span class="badge"></span> Connectors</a></li>
    //               </ul>
    //          </li>

    //       <li className=" text-white"><a href="#" className="a-tag text-white"> <i className="	fa fa-globe"></i> Ronical</a></li>
    //       <li className=" text-white"><a href="#" className="a-tag text-white"> <i class="fa-solid fa-circle-info"></i> About Us</a></li>
    //       <li className=" text-white"><a href="#" className="a-tag text-white"> <i class="fa fa-envelope"></i> Contact </a></li>
    //     </ul>
    //     <ul className="nav-ulink">
    //       <li className="text-white"><a href="#" className="a-tag text-white"> <i className="fa fa-user"></i> Login </a></li>
    //     </ul>
    //   </nav>

    //     </>
    <>
      <div className="container">
        <nav className="navbar-default d-flex justify-content-end top-links">
          <div className="col-md-2">
            <li className="ul-first">
              <a href="#" className="a-red">Find a Retailer</a>
            </li>
          </div>
          <div className="col-md-1">
            <li className="ul-first">
              <div class="dropdown">
                <a href="#" id="phone_hours" className="dropdown-toggle a-red" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Need Help?
                </a>
                <div class="dropdown-menu" role="menu" aria-labelledby="phone_hours">
                  <h5 className="mx-3">Customer-services</h5>
                  <p className="dropdown-item"><a href="#" className="a-red"> <i className="fa-solid fa-clock"></i> Track My Order</a></p>
                  <p className="dropdown-item"><a href="#"  className="a-red"><i class="fas fa-question-circle"></i> Frequently Asked Questions</a></p>
                  <p className="dropdown-item"><a href="#" className="a-red"><i class="fa-solid fa-earth-americas"></i> International Shipping Info</a></p>
                  <p className="dropdown-item"><a href="#" className="a-red"><i class="fa-solid fa-envelope"></i> Send Email</a></p>
                </div>
              </div>
            </li>
          </div>
        </nav>

        <div>
          <nav className="navbar-default nav-two">
            <div className="row">
              <div className="col-md-9">
                <li className="ul-first">
                  <a href="#"><img className="w-20 h-25" src={logoImg} alt="" /></a>
                </li>
              </div>
              <div className="col-md-2">
                <li className="ul-first">
                  <a href="#"><img className="cart-img mx-3" src={cartImg} alt="" /></a>
                </li>
              </div>
              <div className="col-md-1">
                <li className="ul-first"><a href="#" className="a-red"><h5 className="my-4"><i class="fa-solid fa-user-plus"></i> Login</h5></a></li>
              </div>
            </div>
          </nav>
        </div>
        <div>

          <div className="row align-items-center" id="accordionExample">
            <div className="row accordion-item">
              <div className="col-md-2 mt-1">
                <h2 class="accordion-header " id="headingOne">
                  <button class="btn btn-secondary text-white" style={{paddingLeft:"70px",paddingRight:"70px"}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                   Products
                  </button>
                </h2>
              </div>

              <div className="col-md-5">
                <form action="" className="navbar-form mt-2">
                  <div className="input-group ">
                    <input type="text" className="form-control form-control-search input-search " id="inpt" placeholder="Search Products" />

                    <div className="input-group-btn">
                      <button className="btn  bg-secondary form-control  searchIcon text-white" type="button"> <i className="fa fa-search"></i></button>
                    </div>
                  </div>
                </form>
              </div>
              <div className="col-md-5 mt-2">
                <ul className="ul-first d-flex justify-content-end ul-under">
                  <li><button className="btn btn-white btn-nav-sec">TODAY'S DEALS</button></li>
                  <li><button className="btn btn-white btn-nav-sec">SPARK <i class="fa-solid fa-square-xmark"></i></button></li>
                  <li><button className="btn btn-white btn-nav-sec">
                    <i class="fa-solid fa-f"></i>
                    <i class="fa-solid fa-o"></i>
                    <i class="fa-solid fa-r"></i>
                    <i class="fa-regular fa-u"></i>
                    <i class="fa-regular fa-m"></i>
                  </button></li>
                </ul>
              </div>

              <div className="col-12 border-top">
                <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                  <div class="accordion-body">
                    <div className="card bg-secondary text-white">
                      <div className="card-body">
                        <div className="row">
                          <div className="col-md-3">
                            <h4 class="text-uppercase title-first ">Development</h4>
                            <h6><a href="#" className="text-decoration-none text-white">Arduino</a></h6>
                            <h6><a href="#" className="text-decoration-none text-white">ESP32</a></h6>
                          </div>
                          <div className="col-md-5">
                            <h4 class="text-uppercase title-first "><a href="#" className="text-decoration-none text-white">Components</a></h4>
                            <h5 class="text-uppercase title-second"><a href="#" className="text-decoration-none text-white">Passive Components</a></h5>
                            <h6><a href="#" className="text-decoration-none text-white">Resistors</a></h6>
                            <h6><a href="#" className="text-decoration-none text-white">Inductors</a></h6>
                            <h6><a href="#" className="text-decoration-none text-white">Capacitors</a></h6>
                            <h5 class="text-uppercase title-second"><a href="#" className="text-decoration-none text-white">microcontrollers</a></h5>
                            <h6><a href="#" className="text-decoration-none text-white">Attiny</a></h6>
                            <h6><a href="#" className="text-decoration-none text-white">PIC</a></h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>


    </>

  );
};

export default Header;
