import React from 'react'
import { Link } from 'gatsby'

export default function SinglePizza({ pizza }) {
    return (
        <div>
            <Link to={`/pizza/${pizza.slug.current}`}>
                <h2>
                    <span className='mark'>{pizza.name}</span>
                </h2>
                <p>
                    {
                        pizza.toppings.map((topping) => topping.name)
                    }
                </p>
            </Link>
        </div>
    )
}