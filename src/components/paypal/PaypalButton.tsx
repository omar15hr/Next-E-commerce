'use client';

import { PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js";


export function PaypalButton () {

  const [{ isPending }] = usePayPalScriptReducer();

  if ( isPending ) {
    return (
      <div className="animate-pulse mb-10">
        <div className="h-10 bg-gray-300 rounded" />
        <div className="h-10 bg-gray-300 rounded mt-2" />
      </div>
    )
  }

  return (
    <PayPalButtons />
  )
}