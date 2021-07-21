import styled from "styled-components";

export const SinglePizzaStyles = styled.div`
    display: grid;
    /* Take your row sizing not from the pizzaStyles div, but from the  PizzaGridStyles grid */
    @supports not (grid-template-rows: subgrid) {
      --rows: auto auto 1fr;
    }
    grid-template-rows: var(--rows, subgrid);
    grid-row: span 3;
    grid-gap: 1rem;
    h2,
    p {
      margin: 0;
    }
`
export const PizzaStyles = styled.div`
    display:grid;
    grid-template-rows: subgrid;
`