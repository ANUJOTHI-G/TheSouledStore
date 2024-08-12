// import React from 'react';
// import { useLocation } from 'react-router-dom';
// import {
//   Container,
//   Box,
//   Typography,
//   Card,
//   CardMedia,
//   CardContent,
//   Button,
// } from '@mui/material';
// import '../Styles/Payment.css';

// const Payment = () => {
//   const location = useLocation();
//   const { product, size, quantity } = location.state || {};

//   if (!product) {
//     return <Typography>No product details found</Typography>;
//   }

//   const handlePlaceOrder = () => {
//     // Handle payment logic here
//     alert('Order placed successfully!');
//   };

//   return (
//     <Container>
//       <Box className="payment-banner">
//         <Typography variant="h4">Payment</Typography>
//       </Box>
//       <Card className="product-card">
//         <CardMedia
//           component="img"
//           image={product.image}
//           alt={product.title}
//           className="product-image"
//         />
//         <CardContent>
//           <Typography variant="h5">{product.title}</Typography>
//           <Typography variant="body1">{product.description}</Typography>
//           <Typography variant="h6">{`Price: $${product.price}`}</Typography>
//           <Typography variant="body1">{`Size: ${size}`}</Typography>
//           <Typography variant="body1">{`Quantity: ${quantity}`}</Typography>
          
//           <Button
//             variant="contained"
//             color="primary"
//             onClick={handlePlaceOrder}
//             style={{ marginTop: '10px' }}
//           >
//             Confirm Payment
//           </Button>
//         </CardContent>
//       </Card>
//     </Container>
//   );
// };

// export default Payment;

import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import {
  Container,
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';
import '../Styles/Payment.css';

const Payment = () => {
  const location = useLocation();
  const { product, size, quantity } = location.state || {};
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');

  const handlePayment = () => {
    // Handle payment logic here
    alert('Order placed successfully!');
  };

  if (!product) {
    return <Typography>No product details found</Typography>;
  }

  return (
    <Container>
      <Box className="payment-banner">
        <Typography variant="h4">Payment</Typography>
      </Box>
      <Card className="product-card">
        <CardMedia
          component="img"
          image={product.image}
          alt={product.title}
          className="product-image"
        />
        <CardContent>
          <Typography variant="h5">{product.title}</Typography>
          <Typography variant="body1">{product.description}</Typography>
          <Typography variant="h6">{`Price: $${product.price}`}</Typography>
          <Typography variant="body1">{`Size: ${size}`}</Typography>
          <Typography variant="body1">{`Quantity: ${quantity}`}</Typography>
          
          <Box className="payment-form">
            <Typography variant="h6">Shipping Information</Typography>
            <TextField
              label="Name"
              fullWidth
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={{ marginTop: '10px' }}
            />
            <TextField
              label="Email"
              type="email"
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ marginTop: '10px' }}
            />
            <TextField
              label="Address"
              fullWidth
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              style={{ marginTop: '10px' }}
            />

            <FormControl fullWidth style={{ marginTop: '10px' }}>
              <InputLabel>Payment Method</InputLabel>
              <Select
                value={paymentMethod}
                onChange={(e) => setPaymentMethod(e.target.value)}
              >
                <MenuItem value="Credit Card">Credit Card</MenuItem>
                <MenuItem value="PayPal">PayPal</MenuItem>
                <MenuItem value="Bank Transfer">Bank Transfer</MenuItem>
              </Select>
            </FormControl>

            <Button
              variant="contained"
              color="primary"
              onClick={handlePayment}
              style={{ marginTop: '20px' }}
            >
              Confirm Payment
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
};

export default Payment;




