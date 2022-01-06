import React from 'react'
import OneCoffee from './OneCoffee'

function Coffee({coffee, addCoffee}) {
    return (
        <div className='all-products'>

            {//arrow funkcija, mapirano nas niz i prosledjujemo sve podatke
            }
            {coffee.map((cof) => (
                 <OneCoffee oneCoffee={cof} key={cof.id} addCoffee={addCoffee} ordered={1}/>
             ))}
             {/*{products.map((prod) =>{
                 return <OneProduct product={prod}/>
             })}*/}
            {/*<OneProduct product={products[0]}/>
            <OneProduct product={products[1]}/>
            <OneProduct product={products[2]}/>*/}
        </div>
    );
};

export default Coffee