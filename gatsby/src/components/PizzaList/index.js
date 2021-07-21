import React from 'react';
import SinglePizza from '../SinglePizza';
import { PizzaListStyles } from './styles';

export default function PizzaList({ pizzas }) {
  return (
    <PizzaListStyles>
      {pizzas.map((pizza) => (
        <SinglePizza key={pizza.id} pizza={pizza} />
      ))}
    </PizzaListStyles>
  );
}