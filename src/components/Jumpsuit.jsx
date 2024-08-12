// import React from 'react';
// import {
//   Container,
//   Grid,
//   Card,
//   CardMedia,
//   CardContent,
//   Typography,
//   Box,
// } from '@mui/material';
// import '../Styles/Jumpsuit.css';

// const jumpsuitData = [
//   {
//     image: 'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/Solids%20Orange%20&%20Pink%20Set%20(1)2024_03_28-16-53-33.jpg?format=webp&w=480&dpr=0.8',
//     title: 'Bralettes: Yin & Yang (Pack of 2)',
//     description: 'Women Bralette',
//     price: '₹ 638 MRP incl. of all taxes'
//   },
//   {
//     image: 'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1716791099_4253104.png?format=webp&w=480&dpr=0.8',
//     title: 'Harry Potter: Back to Hogwarts',
//     description: 'Women Full Sleeves Tops',
//     price: '₹ 999 MRP incl. of all taxes'
//   },
//   {
//     image: 'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1712818919_6527895.jpg?format=webp&w=480&dpr=0.8',
//     title: 'Bralettes: Bubblegum (Pack of 2)',
//     description: 'Women Bralette',
//     price: '₹ 638 MRP incl. of all taxes'
//   },

// ];

// const Jumpsuit = () => {
//   return (
//     <div>
//       <Box className="jump">
//         <img src="https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/category/catban-520240714104620.jpg?format=webp&w=1536&dpr=0.8" alt="Slay The Day - All New Tops" className="banner-image" />
//       </Box>
//       <Container>
//         <Grid container spacing={2}> {/* Adjust spacing between grid items */}
//           {jumpsuitData.map((product, index) => (
//             <Grid item key={index} xs={12} sm={6} md={4}>
//               <Card className="product-card">
//                 <CardMedia
//                   component="img"
//                   image={product.image}
//                   alt={product.title}
//                   className="jump-image"
//                 />
//                 <CardContent>
//                   <Typography variant="h6" className="jump-title">{product.title}</Typography>
//                   <Typography variant="body2" className="jump-description">{product.description}</Typography>
//                   <Typography variant="h6" className="jump-price">{product.price}</Typography>
//                 </CardContent>
//               </Card>
//             </Grid>
//           ))}
//         </Grid>
//       </Container>
//     </div>
//   );
// };

// export default Jumpsuit;


// import React from 'react';
// import {
//   Container,
//   Grid,
//   Card,
//   CardMedia,
//   CardContent,
//   Typography,
//   Box,
//   Button, // Import the Button component
// } from '@mui/material';
// import { useNavigate } from 'react-router-dom'; 
// import '../Styles/Jumpsuit.css';

// const jumpsuitData = [
//   {
//     image: 'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/Solids%20Orange%20&%20Pink%20Set%20(1)2024_03_28-16-53-33.jpg?format=webp&w=480&dpr=0.8',
//     title: 'Bralettes: Yin & Yang (Pack of 2)',
//     description: 'Women Bralette',
//     price: '₹ 638 MRP incl. of all taxes'
//   },
//   {
//     image: 'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1716791099_4253104.png?format=webp&w=480&dpr=0.8',
//     title: 'Harry Potter: Back to Hogwarts',
//     description: 'Women Full Sleeves Tops',
//     price: '₹ 999 MRP incl. of all taxes'
//   },
//   {
//     image: 'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1712818919_6527895.jpg?format=webp&w=480&dpr=0.8',
//     title: 'Bralettes: Bubblegum (Pack of 2)',
//     description: 'Women Bralette',
//     price: '₹ 638 MRP incl. of all taxes'
//   },
// ];

// const Jumpsuit = () => {
//   const navigate = useNavigate(); // Initialize useNavigate

//   const handleBuyNow = (product) => {
//     navigate('/cart', { state:{ product } }); // Navigate to cart with product details
//   };


//   return (
//     <div>
//       <Box className="jump">
//         <img src="https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/category/catban-520240714104620.jpg?format=webp&w=1536&dpr=0.8" alt="Slay The Day - All New Jumpsuits" className="banner-image" />
//       </Box>
//       <Container>
//         <Grid container spacing={2}>
//           {jumpsuitData.map((product, index) => (
//             <Grid item key={index} xs={12} sm={6} md={4}>
//               <Card className="product-card">
//                 <CardMedia
//                   component="img"
//                   image={product.image}
//                   alt={product.title}
//                   className="jump-image"
//                 />
//                 <CardContent>
//                   <Typography variant="h6" className="jump-title">{product.title}</Typography>
//                   <Typography variant="body2" className="jump-description">{product.description}</Typography>
//                   <Typography variant="h6" className="jump-price">{product.price}</Typography>
//                   <Button
//                     variant="contained"
//                     color="primary"
//                     onClick={() => handleBuyNow(product)}
//                     style={{ marginTop: '10px' }}
//                   >
//                     Buy Now
//                   </Button>
//                 </CardContent>
//               </Card>
//             </Grid>
//           ))}
//         </Grid>
//       </Container>
//     </div>
//   );
// };

// export default Jumpsuit;


import React from 'react';
import {
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
  Button,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import '../Styles/Jumpsuit.css';

const jumpsuitData = [
  {
    image: 'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/Solids%20Orange%20&%20Pink%20Set%20(1)2024_03_28-16-53-33.jpg?format=webp&w=480&dpr=0.8',
    title: 'Orange & Pink',
    description: 'shirt and shorts',
    price: '₹ 1000 MRP incl. of all taxes',
  },
  {
    image: 'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1716791099_4253104.png?format=webp&w=480&dpr=0.8',
    title: 'Pink Micky',
    description: 'on knee',
    price: '₹ 750 MRP incl. of all taxes',
  },
  {
    image: 'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1712818919_6527895.jpg?format=webp&w=480&dpr=0.8',
    title: 'Elegant',
    description: 'top figured',
    price: '₹ 650 MRP incl. of all taxes',
  },
];

const Jumpsuit = () => {
  const navigate = useNavigate();

  const handleBuyNow = (product) => {
    // Retrieve cart items from localStorage
    const existingCart = JSON.parse(localStorage.getItem('cartItems')) || [];

    // Check if the product is already in the cart
    const isProductInCart = existingCart.some(
      (cartItem) => cartItem.title === product.title
    );

    if (!isProductInCart) {
      // Add the product to the cart
      const updatedCart = [...existingCart, product];
      localStorage.setItem('cartItems', JSON.stringify(updatedCart));

      // Navigate to the cart page
      navigate('/cart');
    } else {
      // Navigate to the cart page if the product is already in the cart
      navigate('/cart');
    }
  };

  return (
    <div>
      <Box className="jump">
        <img src="https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/category/catban-520240714104620.jpg?format=webp&w=1536&dpr=0.8" alt="Slay The Day - All New Jumpsuits" className="banner-image" />
      </Box>
      <Container>
        <Grid container spacing={2}>
          {jumpsuitData.map((product, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <Card className="product-card">
                <CardMedia
                  component="img"
                  image={product.image}
                  alt={product.title}
                  className="jump-image"
                />
                <CardContent>
                  <Typography variant="h6" className="jump-title">{product.title}</Typography>
                  <Typography variant="body2" className="jump-description">{product.description}</Typography>
                  <Typography variant="h6" className="jump-price">{product.price}</Typography>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => handleBuyNow(product)}
                    style={{ marginTop: '10px' }}
                  >
                    {JSON.parse(localStorage.getItem('cartItems'))?.some(
                      (cartItem) => cartItem.title === product.title
                    )
                      ? 'In Cart'
                      : 'Buy Now'}
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default Jumpsuit;

