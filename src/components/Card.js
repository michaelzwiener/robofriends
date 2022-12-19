import React from "react";

const Card = (props) => {
    return (   
        <div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 tc'>
            <img src={`https://robohash.org/test${ props.id }?200x200`} alt='robot' />
                <div>
                    <h2>{ props.name }</h2>
                    <p>{ props.email }</p>
                </div>
        </div>
)
}

export default Card;