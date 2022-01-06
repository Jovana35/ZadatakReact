import React from "react";
import {GiCoffeeCup} from 'react-icons/gi';

function oneCoffee({oneCoffee, addCoffee, ordered}) {
    return (
      <div className={ordered === 1 ? "" : "card-cart"}>
      <div className="card-body">
          {ordered===1 ? <button className="btn" onClick={()=>addCoffee(oneCoffee.title, oneCoffee.id)}><GiCoffeeCup/></button> : <></>}
          <h3 className="card-title">{oneCoffee.title}</h3>
          <p className="card-text">{oneCoffee.description}</p>
          <img className="card-img-top" src={oneCoffee.img}></img>
      </div>
      </div>
      );
}

export default oneCoffee;