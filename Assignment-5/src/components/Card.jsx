import React from 'react';

function Card(props) {
    return (
        <>
            <div className="max-w-sm rounded overflow-hidden shadow-lg p-4">
                <h1 className="text-white text-xl align-items-center justify-center flex h-16 text-center"><div>{props.title}</div></h1>
                <img className="w-full" src={props.image} alt={props.title}/>
                <div className="text-white text-xl align-items-center justify-center flex">
                    <div><br/>Price: ${props.price}</div>
                </div>
            </div>
        </>
    );
}

export default Card;