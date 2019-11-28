
import React from "react";

export default function CurrencyFormatter({ price }: { price: number }) {
  return (
    <React.Fragment>
      {new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(price)}
    </React.Fragment>
  )
}
