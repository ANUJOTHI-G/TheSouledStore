

// import React, { useState } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom'; // Import useNavigate
// import {
//   Container,
//   Box,
//   Typography,
//   Card,
//   CardMedia,
//   CardContent,
//   FormControl,
//   InputLabel,
//   Select,
//   MenuItem,
//   TextField,
//   Button,
// } from '@mui/material';
// import '../Styles/Cart.css';

// const Cart = () => {
//   const location = useLocation();
//   const navigate = useNavigate(); // Initialize useNavigate
//   const { product } = location.state || {};
//   const [size, setSize] = useState('');
//   const [quantity, setQuantity] = useState(1);

//   const handleSizeChange = (event) => {
//     setSize(event.target.value);
//   };

//   const handleQuantityChange = (event) => {
//     setQuantity(event.target.value);
//   };

//   const handleAddToCart = () => {
//     // Add to cart logic here
//     alert(`Added ${quantity} of ${product.title} to cart`);

//     // Navigate to the Payment page
//     navigate('/payment', { state: { product, size, quantity } });
//   };

//   if (!product) {
//     return <Typography>No product found</Typography>;
//   }

//   return (
//     <Container>
//       <Box className="cart-banner">
//         <Typography variant="h4">Cart</Typography>
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
//           <Typography variant="h6">{product.price}</Typography>
          
//           <FormControl fullWidth>
//             <InputLabel>Size</InputLabel>
//             <Select value={size} onChange={handleSizeChange}>
//               <MenuItem value="XS">XS</MenuItem>
//               <MenuItem value="M">M</MenuItem>
//               <MenuItem value="L">L</MenuItem>
//               <MenuItem value="XL">XL</MenuItem>
//             </Select>
//           </FormControl>

//           <TextField
//             label="Quantity"
//             type="number"
//             value={quantity}
//             onChange={handleQuantityChange}
//             InputProps={{ inputProps: { min: 1 } }}
//             fullWidth
//             style={{ marginTop: '10px' }}
//           />

//           <Button
//             variant="contained"
//             color="primary"
//             onClick={handleAddToCart}
//             style={{ marginTop: '10px' }}
//           >
//             Add to Cart
//           </Button>
//         </CardContent>
//       </Card>
//     </Container>
//   );
// };

// export default Cart;

// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import {
//   Container,
//   Box,
//   Typography,
//   Card,
//   CardMedia,
//   CardContent,
//   FormControl,
//   InputLabel,
//   Select,
//   MenuItem,
//   TextField,
//   Button,
// } from '@mui/material';
// import '../Styles/Cart.css';

// const Cart = () => {
//   const navigate = useNavigate();
//   const [cartItems, setCartItems] = useState([]);
//   const [quantities, setQuantities] = useState([]);
//   const [sizes, setSizes] = useState([]);

//   useEffect(() => {
//     // Retrieve cart items from localStorage
//     const storedItems = JSON.parse(localStorage.getItem('cartItems')) || [];
//     setCartItems(storedItems);
//     setQuantities(storedItems.map(() => 1)); // Initialize quantities to 1
//     setSizes(storedItems.map(() => '')); // Initialize sizes to empty
//   }, []);

//   const handleSizeChange = (index, event) => {
//     const newSizes = [...sizes];
//     newSizes[index] = event.target.value;
//     setSizes(newSizes);
//   };

//   const handleQuantityChange = (index, event) => {
//     const newQuantities = [...quantities];
//     newQuantities[index] = event.target.value;
//     setQuantities(newQuantities);
//   };

//   const handleAddToCart = (index) => {
//     // Add to cart logic here
//     alert(`Added ${quantities[index]} of ${cartItems[index].title} to cart with size ${sizes[index]}`);
//     // Navigate to the Payment page
//     navigate('/payment', {
//       state: {
//         product: cartItems[index],
//         size: sizes[index],
//         quantity: quantities[index],
//       },
//     });
//   };

//   if (cartItems.length === 0) {
//     return <Typography>No products in the cart</Typography>;
//   }

//   return (
//     <Container>
//       <Box className="cart-banner">
//         <Typography variant="h4">Cart</Typography>
//       </Box>
//       {cartItems.map((product, index) => (
//         <Card className="product-card" key={index}>
//           <CardMedia
//             component="img"
//             image={product.image}
//             alt={product.title}
//             className="product-image"
//           />
//           <CardContent>
//             <Typography variant="h5">{product.title}</Typography>
//             <Typography variant="body1">{product.description}</Typography>
//             <Typography variant="h6">{product.price}</Typography>
//             <FormControl fullWidth>
//               <InputLabel>Size</InputLabel>
//               <Select
//                 value={sizes[index]}
//                 onChange={(event) => handleSizeChange(index, event)}
//               >
//                 <MenuItem value="XS">XS</MenuItem>
//                 <MenuItem value="M">M</MenuItem>
//                 <MenuItem value="L">L</MenuItem>
//                 <MenuItem value="XL">XL</MenuItem>
//               </Select>
//             </FormControl>

//             <TextField
//               label="Quantity"
//               type="number"
//               value={quantities[index]}
//               onChange={(event) => handleQuantityChange(index, event)}
//               InputProps={{ inputProps: { min: 1 } }}
//               fullWidth
//               style={{ marginTop: '10px' }}
//             />

//             <Button
//               variant="contained"
//               color="primary"
//               onClick={() => handleAddToCart(index)}
//               style={{ marginTop: '10px' }}
//             >
//               Add to Cart
//             </Button>
//           </CardContent>
//         </Card>
//       ))}
//     </Container>
//   );
// };

// export default Cart;

// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import {
//   Container,
//   Box,
//   Typography,
//   Card,
//   CardMedia,
//   CardContent,
//   FormControl,
//   InputLabel,
//   Select,
//   MenuItem,
//   TextField,
//   Button,
// } from '@mui/material';
// import '../Styles/Cart.css';

// const Cart = () => {
//   const navigate = useNavigate();
//   const [cartItems, setCartItems] = useState([]);
//   const [quantities, setQuantities] = useState([]);
//   const [sizes, setSizes] = useState([]);
//   const [totalPrice, setTotalPrice] = useState(0);

//   useEffect(() => {
//     // Retrieve cart items from localStorage
//     const storedItems = JSON.parse(localStorage.getItem('cartItems')) || [];
//     setCartItems(storedItems);
//     setQuantities(storedItems.map(() => 1)); // Initialize quantities to 1
//     setSizes(storedItems.map(() => '')); // Initialize sizes to empty

//     // Calculate the initial total price
//     const initialTotal = storedItems.reduce((acc, item) => {
//       const price = parseFloat(item.price.replace('₹', '').replace(/,/g, ''));
//       return acc + price;
//     }, 0);
//     setTotalPrice(initialTotal);
//   }, []);

//   const handleSizeChange = (index, event) => {
//     const newSizes = [...sizes];
//     newSizes[index] = event.target.value;
//     setSizes(newSizes);
//   };

//   const handleQuantityChange = (index, event) => {
//     const newQuantities = [...quantities];
//     newQuantities[index] = event.target.value;

//     const newTotalPrice = cartItems.reduce((acc, item, idx) => {
//       const price = parseFloat(item.price.replace('₹', '').replace(/,/g, ''));
//       return acc + price * newQuantities[idx];
//     }, 0);

//     setQuantities(newQuantities);
//     setTotalPrice(newTotalPrice);
//   };

//   const handleRemoveItem = (index) => {
//     const newCartItems = cartItems.filter((_, i) => i !== index);
//     setCartItems(newCartItems);
//     localStorage.setItem('cartItems', JSON.stringify(newCartItems));

//     const newQuantities = quantities.filter((_, i) => i !== index);
//     const newSizes = sizes.filter((_, i) => i !== index);
//     setQuantities(newQuantities);
//     setSizes(newSizes);

//     const newTotalPrice = newCartItems.reduce((acc, item, idx) => {
//       const price = parseFloat(item.price.replace('₹', '').replace(/,/g, ''));
//       return acc + price * newQuantities[idx];
//     }, 0);

//     setTotalPrice(newTotalPrice);
//   };

//   if (cartItems.length === 0) {
//     return <Typography>No products in the cart</Typography>;
//   }

//   return (
//     <Container>
//       <Box className="cart-banner">
//         <Typography variant="h4">Cart</Typography>
//       </Box>
//       {cartItems.map((product, index) => (
//         <Card className="product-card" key={index}>
//           <CardMedia
//             component="img"
//             image={product.image}
//             alt={product.title}
//             className="product-image"
//           />
//           <CardContent>
//             <Typography variant="h5">{product.title}</Typography>
//             <Typography variant="body1">{product.description}</Typography>
//             <Typography variant="h6">{product.price}</Typography>
//             <FormControl fullWidth>
//               <InputLabel>Size</InputLabel>
//               <Select
//                 value={sizes[index]}
//                 onChange={(event) => handleSizeChange(index, event)}
//               >
//                 <MenuItem value="XS">XS</MenuItem>
//                 <MenuItem value="M">M</MenuItem>
//                 <MenuItem value="L">L</MenuItem>
//                 <MenuItem value="XL">XL</MenuItem>
//               </Select>
//             </FormControl>

//             <TextField
//               label="Quantity"
//               type="number"
//               value={quantities[index]}
//               onChange={(event) => handleQuantityChange(index, event)}
//               InputProps={{ inputProps: { min: 1 } }}
//               fullWidth
//               style={{ marginTop: '10px' }}
//             />

//             <Button
//               variant="contained"
//               color="secondary"
//               onClick={() => handleRemoveItem(index)}
//               style={{ marginTop: '10px' }}
//             >
//               Remove Item
//             </Button>
//           </CardContent>
//         </Card>
//       ))}
//       <Box className="total-price">
//         <Typography variant="h5">Total Price: ₹{totalPrice}</Typography>
//       </Box>
//     </Container>
//   );
// };

// export default Cart;
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  Button,
} from '@mui/material';
import '../Styles/Cart.css';

const Cart = () => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);
  const [quantities, setQuantities] = useState([]);
  const [sizes, setSizes] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    setCartItems(storedItems);
    setQuantities(storedItems.map(() => 1));
    setSizes(storedItems.map(() => ''));

    const initialTotal = storedItems.reduce((acc, item) => {
      const price = item?.price ? parseFloat(item.price.replace('₹', '').replace(/,/g, '')) : 0;
      return acc + price;
    }, 0);
    setTotalPrice(initialTotal);
  }, []);

  const handleSizeChange = (index, event) => {
    const newSizes = [...sizes];
    newSizes[index] = event.target.value;
    setSizes(newSizes);
  };

  const handleQuantityChange = (index, event) => {
    const newQuantities = [...quantities];
    newQuantities[index] = event.target.value;

    const newTotalPrice = cartItems.reduce((acc, item, idx) => {
      const price = item?.price ? parseFloat(item.price.replace('₹', '').replace(/,/g, '')) : 0;
      return acc + price * newQuantities[idx];
    }, 0);

    setQuantities(newQuantities);
    setTotalPrice(newTotalPrice);
  };

  const handleRemoveItem = (index) => {
    const newCartItems = cartItems.filter((_, i) => i !== index);
    setCartItems(newCartItems);
    localStorage.setItem('cartItems', JSON.stringify(newCartItems));

    const newQuantities = quantities.filter((_, i) => i !== index);
    const newSizes = sizes.filter((_, i) => i !== index);
    setQuantities(newQuantities);
    setSizes(newSizes);

    const newTotalPrice = newCartItems.reduce((acc, item, idx) => {
      const price = item?.price ? parseFloat(item.price.replace('₹', '').replace(/,/g, '')) : 0;
      return acc + price * newQuantities[idx];
    }, 0);

    setTotalPrice(newTotalPrice);
  };

  if (cartItems.length === 0) {
    return <Typography>No products in the cart</Typography>;
  }

  return (
    <Container>
      <Box className="cart-banner">
        <Typography variant="h4">Cart</Typography>
      </Box>
      {cartItems.map((product, index) => (
        <Card className="product-card" key={index}>
          <CardMedia
            component="img"
            image={product.image}
            alt={product.title}
            className="product-image"
          />
          <CardContent>
            <Typography variant="h5">{product.title}</Typography>
            <Typography variant="body1">{product.description}</Typography>
            <Typography variant="h6">{product.price}</Typography>
            <FormControl fullWidth>
              <InputLabel>Size</InputLabel>
              <Select
                value={sizes[index]}
                onChange={(event) => handleSizeChange(index, event)}
              >
                <MenuItem value="XS">XS</MenuItem>
                <MenuItem value="M">M</MenuItem>
                <MenuItem value="L">L</MenuItem>
                <MenuItem value="XL">XL</MenuItem>
              </Select>
            </FormControl>

            <TextField
              label="Quantity"
              type="number"
              value={quantities[index]}
              onChange={(event) => handleQuantityChange(index, event)}
              InputProps={{ inputProps: { min: 1 } }}
              fullWidth
              style={{ marginTop: '10px' }}
            />

            <Button
              variant="contained"
              color="secondary"
              onClick={() => handleRemoveItem(index)}
              style={{ marginTop: '10px' }}
            >
              Remove Item
            </Button>
          </CardContent>
        </Card>
      ))}
      <Box className="total-price">
        <Typography variant="h5">Total Price: ₹{totalPrice}</Typography>
      </Box>
    </Container>
  );
};

export default Cart;

