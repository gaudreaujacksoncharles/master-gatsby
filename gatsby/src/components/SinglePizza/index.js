import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import { SinglePizzaStyles } from './styles'

export default function SinglePizza({ pizza }) {
    return (
        <SinglePizzaStyles>
            <Link to={`/pizza/${pizza.slug.current}`}>
              <h2>
                <span className="mark">{pizza.name}</span>
              </h2>
            </Link>
            <p>{pizza.toppings.map((topping) => topping.name).join(', ')}</p>
            <Img fluid={pizza.image.asset.fluid} alt={pizza.name} />
        </SinglePizzaStyles>
    );
}
  