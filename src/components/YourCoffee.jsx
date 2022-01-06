import OneCoffee from "./OneCoffee";
const YourCoffee = ({coffee}) => {
    return (
        <div className="cart-container">
            <h3>Your order is ready. ♥</h3>
            {coffee.map((cof) => (
                 <OneCoffee oneCoffee={cof} key={cof.id} ordered={0}/>
             ))}
        </div>
    )
}

export default YourCoffee