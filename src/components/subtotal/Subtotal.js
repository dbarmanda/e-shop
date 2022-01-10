import React, {useState} from 'react'
import { useDispatch } from 'react-redux'

import "./subtotal.css"
import CurrencyFormat from 'react-currency-format'
import { useSelector } from 'react-redux'
function Subtotal() {

    const dispatch = useDispatch();
    const {cartItems} = useSelector(state => state.cart)

    const [total, setTotal] = useState(0);

    const getCartTotal = ()=> {
        let sum = 0;
        cartItems.map((item)=> {
            sum += item.price;
        })
        setTotal(sum);
    }

    return (
        // <div className="subtotal">
        //      hello
        // </div>

        <div className="subtotal">
            <CurrencyFormat
                renderText={(value)=>(
                    <>
                        <p>
                            Subtotal ({cartItems.length} items): <strong>{`Rs. ${value}`}</strong>
                        </p>
                        <small className="subtotal_gift">
                            <input type="checkbox" name="" id="" /> This order contains a gift
                        </small>
                    </>
                )}
                decimalScale={2}
                value={getCartTotal()}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"Rs"}/>
            <button>Proceed To Checkout</button>

        </div>
       
    )
}

export default Subtotal
