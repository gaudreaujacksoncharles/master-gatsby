import React from 'react'
import SinglePizza from '../SinglePizza'

export default function PizzaList({ pizzas }) {
    return (
        <>
            {
                pizzas.map((pizza) => (
                    <SinglePizza key={pizza.id} pizza={pizza} />
                ))
            }
        </>
    )
}