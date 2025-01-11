import { useState } from "react";
import "./styles/Product.css";

function Product(props) {
    const [quantities, setQuantities] = useState({});

    const machine = props.data;

    const handleQuantityChange = (id, change) => {
        setQuantities(prevQuantities => ({
            ...prevQuantities,
            [id]: Math.max(1, (prevQuantities[id] || 1) + change),
        }));
    };

    const handleBuyNow = (machine) => {
        const quantity = quantities[machine.id] || 1;
        console.log(`Purchased ${quantity} of ${machine.name} for $${(machine.price * quantity).toFixed(2)}`);
        
    };

    function takeEffect(cardEffect) {
        console.log("...CardEffect: ", cardEffect);
        
        if(cardEffect === 'frozen') {
            return 'snow';
        } else if(cardEffect === 'lights') {
            return 'lights';
        } else if(cardEffect === 'pacman') {
            return 'pacman';
        } else if(cardEffect === 'rainbow') {
            return '';
        }
    }

    return (
        <div className={`machine-card ${takeEffect(machine.effect)} `} key={machine.id}>
        
                <img src={machine.image} alt={machine.name} />
                <h2>{machine.name}</h2>
                <p>{machine.description}</p>
                <p className="price">${machine.price.toFixed(2)}</p>
                <div className="quantity-selector">
                    <button onClick={() => handleQuantityChange(machine.id, -1)}>-</button>
                    <span>{quantities[machine.id] || 1}</span>
                    <button onClick={() => handleQuantityChange(machine.id, 1)}>+</button>
                </div>
                <button className="buy-button" onClick={() => handleBuyNow(machine)}>Buy Now</button>
        
            
        </div>
    )
}

export default Product;