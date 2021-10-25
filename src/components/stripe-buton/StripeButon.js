import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeButon = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51JoO56IMmLaL5TBQPoXgjzRfZvrfjeFcNN5b8hUjETvHD2BEA0O7LT43h0Mh3UlO709s3Y2I9lejwUZuTH9PJktV00YtTmr9fy";

  const onToken = (token) => {
    console.log(token);
    alert("Payment Successful");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="Zeeq's Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your Total is ${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    ></StripeCheckout>
  );
};

export default StripeButon;
