import React from "react";

const Rating = ({ value, reviews }) => {
    let starsArray = [];
    for (let i = 0; i < 5; i++) {
        starsArray.push(i < Math.floor(value) ? <i className="fas fa-star"></i> : !Number.isInteger(value) && i === Math.floor(value) ? <i class="fas fa-star-half-alt"></i> : <i className="far fa-star"></i>);
    }

    return (
        <div className="rating">
            <span style={{color:"#f8e825"}}>
                {starsArray}
            </span>
            <span>
                {reviews} reviews
            </span>
        </div>
    )
}

export default Rating;