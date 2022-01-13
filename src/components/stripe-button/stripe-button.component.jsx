import React from "react";
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51KHSnZBUI1gZr66vAOCBary139vaypgoDGpq2NUHDONzMlRTQj3GyHJwpPYN1tY2Z8vRbDztGqy8aV2aBdVfV2SC00nXWYY0W3';

   const onToken = token => {
        console.log(token);
        alert('payment successful')
    }

    return(
        <StripeCheckout
            label='Pay Now'
            name='my ecommerce'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/Cuz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publishableKey}
        />
    )

}

export default StripeCheckoutButton;