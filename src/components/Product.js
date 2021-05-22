import React from 'react'
import classes from "./Product.module.css";
import product from "../img/product.png"

const Product = () => {
    return (
        <section className={classes.product_section}>
            <div>
                <img src = {product}></img>
            </div>
            <div className={classes.product_text}>
                <h1>You tell us your stress, We make your diary</h1>
                <p>Everyone experiences it, and in different ways.
Let Alivio guide you, in a personalized journal experience, to overcome your stress.</p>
<button>Find your way</button>
            </div>

        </section>
    )
}

export default Product
