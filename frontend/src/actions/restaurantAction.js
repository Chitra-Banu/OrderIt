import {
     ALL_RESTAURANTS_FAILS,
     ALL_RESTAURANTS_REQUEST,
     ALL_RESTAURANTS_SUCCESS, 
     SORT_BY_RATINGS,
     SORT_BY_REVIEWS, 
     TOGGLE_VEG_ONLY ,
     ALL_RESTAURANTS_FAIL,
     } from "../constants/restaurantConstant"
import axios from "axios"
export const getRestaurants=()=>{
    return async(dispatch)=>{
        try{
            dispatch({type:ALL_RESTAURANTS_REQUEST});
            let link = `/api/v1/eats/stores`;   //api which has the restaurant data
            const {data} = await axios.get(link); //destructing
            const {restaurants,count} = data;
            console.log(data);
            dispatch({
                type : ALL_RESTAURANTS_SUCCESS,
                payload : {restaurants,count},
            });
        }
        catch(err){
            dispatch({
                type:ALL_RESTAURANTS_FAIL,
                payload:err.response.data.message,
            })
        }  
    } 
}

export const sortByRatings=()=>{
    return{
        type:SORT_BY_RATINGS,
    }
}

export const sortByReviews=()=>{
    return{
        type:SORT_BY_REVIEWS,
    }
}

export const toggleVegOnly=()=>{
    return{
        type:TOGGLE_VEG_ONLY,
    }
}

export const CLEAR_ERROR=()=>{
    return{
        type:CLEAR_ERROR,
    }
}
