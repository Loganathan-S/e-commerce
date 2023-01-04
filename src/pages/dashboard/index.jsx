import React from 'react'
// import { useNavigate} from "react-router-dom";
import Blur from "react-blur"; 

const Dashboard = () => {
    // let navigate = useNavigate();
  return (
    <>
    <Blur blurRadius={5} enableStyles>
         <div className="container">
                    <div className="row d-flex flex-column min-vh-100 mt-0">
                        <div className="col-12 pb-2 pt-2">
                            <div
                                id="carouselExampleCaptions"
                                className="carousel slide "
                                data-bs-ride="carousel"
                            >
                                <div className="carousel-indicators">
                                    <button
                                        type="button"
                                        data-bs-target="#carouselExampleCaptions"
                                        data-bs-slide-to="0"
                                        className="active"
                                        aria-current="true"
                                        aria-label="Slide 1"
                                    ></button>
                                </div>
                                <div className="carousel-inner ">
                                    <div className="carousel-item active">
                                        <img
                                            src="https://thumbs.dreamstime.com/b/human-resources-customer-care-pool-employees-labor-union-life-insurance-employment-agency-marketing-segmentation-54111238.jpg"
                                            className="d-block w-100 h-65"
                                            alt="..."
                                        />
                                        <div className="carousel-caption d-none d-md-block text-dark">
                                            <div className="text-center">
                                                <label className="Page1_39_modules_20px">
                                                    Welcome to SunRom
                                                </label>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>    

                </Blur>
         {/* <button onClick={() => navigate('/auth/login')}>Back</button>  */}
    </>
  )
}

export default Dashboard