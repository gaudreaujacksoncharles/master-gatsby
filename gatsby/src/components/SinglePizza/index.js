import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import { PizzaStyles } from './styles'

export default function SinglePizza({ pizza }) {
    return (
        <PizzaStyles>
            <Link to={`/pizza/${pizza.slug.current}`}>
                <>{pizza.name}</>
                <p>
                    {
                        pizza.toppings.map((topping) => topping.name).join(', ')
                    }
                </p>
                <Img fluid={pizza.image.asset.fluid} alt={pizza.name} />
            </Link>
        </PizzaStyles>
    )
}