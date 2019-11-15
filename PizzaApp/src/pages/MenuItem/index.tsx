import React from 'react';
import { useParams } from "react-router-dom";

const MenuItem = () => {
  let { pizzaId } = useParams();

  return (
    <h3>ID: {pizzaId}</h3>
  )
}

export default MenuItem;