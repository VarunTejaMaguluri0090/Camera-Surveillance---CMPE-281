import { useEffect, useState } from "react";

import {
    Elements,
    CardElement,
    useStripe,
  useElements,
  getClientSecret
  } from "@stripe/react-stripe-js";
  import { loadStripe } from "@stripe/stripe-js";
  import "./paymentPage.css";
  import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import React from 'react';

const Payment = () => {
    const stripe = loadStripe(
        "pk_test_51N7SusEJkf1S2xWwz2MHXZ8doF4iDSKpvmPKv9j4rznBCSe3YeE0F1hI7gOfvxF8NpnxxXpq9aFgNqpGv82eieIi008EgzFD4y"
      );
      return (
        <Elements stripe={stripe}>
          <CheckoutForm />
        </Elements>
      );
    };

    

    
    function CheckoutForm() {
      const [isPaymentLoading, setPaymentLoading] = useState(false);
      const stripe = useStripe();
      const elements = useElements();
      const [paymentType, setPaymenttype] = React.useState('');
     const handleChange = (e) => {
        setPaymenttype(e.target.value);
        };

      const [billingplan, setBillingPlan] = React.useState('');
     const handleChange1 = (e) => {
        setBillingPlan(e.target.value);
        };
      const payMoney = async (e) => {
        e.preventDefault();
        if (!stripe || !elements) {
          return;
        }
        setPaymentLoading(true);
        const clientSecret = getClientSecret();
        const paymentResult = await stripe.confirmCardPayment(clientSecret, {
          payment_method: {
            card: elements.getElement(CardElement),
            billing_details: {
              name: "Faruq Yusuff",
            },
          },
        });
        setPaymentLoading(false);
        if (paymentResult.error) {
          alert(paymentResult.error.message);
        } else {
          if (paymentResult.paymentIntent.status === "succeeded") {
            alert("Success!");
          }
        }


      };
    
      return (
        <div className="pay-page">
        <h1 className="heading-main-payment">Billing</h1>
        <FormControl  >
           <label class = "paymentHeadings">
      Select Payment Gateway
                </label>
  
  <Select  className="wgtmsr"
   id="filled-hidden-label-normal"
      defaultValue="ffdfd"
      variant="filled"
        type="building"
     
        
        sx={{
          input: {
            color: "black",
            background: "#F8F8F8",
            border: "solid 1px black",
            fontWeight:"bold",
            borderWidth:"2.3px",
           
            
          }
        }}
       
        required
       
        InputLabelProps={{
          shrink: true,
        }}
        margin="normal"
    labelId="demo-simple-select-label"
   
    value={paymentType}
    // label="Building Name"
    onChange={handleChange}
  >
    <MenuItem value={10}>Stripe</MenuItem>
    <MenuItem value={20}>Paypal</MenuItem>
    <MenuItem value={30}>WePay</MenuItem>
    <MenuItem value={40}>Apple Pay</MenuItem>
    
  </Select>

  <label class = "paymentHeadings">
      Select Payment Plan
                </label>
  
  <Select  className="wgtmsr"
   id="filled-hidden-label-normal"
      defaultValue="ffdfd"
      variant="filled"
        type="building"
     
        
        sx={{
          input: {
            color: "black",
            background: "#F8F8F8",
            border: "solid 1px black",
            fontWeight:"bold",
            borderWidth:"2.3px",
           
            
          }
        }}
       
        required
       
        InputLabelProps={{
          shrink: true,
        }}
        margin="normal"
    labelId="demo-simple-select-label"
   
    value={billingplan}
    // label="Building Name"
    onChange={handleChange1}
  >
    <MenuItem value={10}>Monthly</MenuItem>
    <MenuItem value={20}>Quarterly</MenuItem>
    <MenuItem value={30}>Yearly</MenuItem>
    
    
  </Select>
</FormControl>
        <div
          style={{
            padding: "3rem",
          }}
        >
          <div
            style={{
              maxWidth: "1500px",
              margin: "0 auto",
            }}
          >
            <form
              style={{
                display: "block",
                
                width: "100%",
              }}
              onSubmit = {payMoney}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <CardElement
                  className="card"
                  options={{
                    style: {
                      base: {
                        backgroundColor: "white",
                       
                      } 
                    },
                  }}
                />
                <button
                  className="pay-button"
                  disabled={isPaymentLoading}
                >
                  {isPaymentLoading ? "Loading..." : "Pay"}
                </button>
              </div>
            </form>
          </div>
        </div>
        </div>
      );
    }
export default Payment