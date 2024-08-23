import React from 'react'
import { Link } from 'react-router-dom';
// import "./App.css";

export default function Restaurant({restaurant}){
  return (
    // for card and image
    <div className="col-sm-12 col-md-6 col-lg-3 my-3 d-flex justify-content-center">
        <div className="card p-3 rounded">
           <Link to={`/eats/stores/${restaurant._id}/menus`} className="btn btn-block">
           <img src={restaurant.images[0].url}
                 alt={restaurant.name}
                 className="card-img-top mx-auto"/>
           </Link>
            

            {/* for heading and address */}
            <div className="card-body d-flex flex-column">
                <h5 className="card-title">{restaurant.name}</h5>
                <p className="rest_address">{restaurant.address}</p>

            {/* for review and rating */}
            <div className="ratings mt-auto">
                 <div className="rating-outer">
                    <div className="rating-inner" style={{width:`${(restaurant.ratings/5)*100}%`}}></div>

            </div>
            
                    <span id="no_of_reviews">({restaurant.numOfReviews} reviews)</span>
                </div>
            </div>
            </div>
        </div>
  );
}


