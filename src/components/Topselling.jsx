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
// import '../Styles/Topselling.css';

// const topsellingData = [
//   {
//     image: 'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1721109128_2753543.jpg?format=webp&w=480&dpr=1.3',
//     title: 'Bralettes: Yin & Yang (Pack of 2)',
//     description: 'Women Bralette',
//     price: '₹ 638 MRP incl. of all taxes'
//   },
//   {
//     image: 'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1713335418_6272372.jpg?format=webp&w=480&dpr=1.3',
//     title: 'Harry Potter: Back to Hogwarts',
//     description: 'Women Full Sleeves Tops',
//     price: '₹ 999 MRP incl. of all taxes'
//   },
//   {
//     image: 'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1718174248_5226277.jpg?format=webp&w=480&dpr=1.3',
//     title: 'Bralettes: Bubblegum ',
//     description: 'Women Bralette',
//     price: '₹ 638 MRP incl. of all taxes'
//   },
//   // Uncomment and add more products as needed
//   // {
//   //   image: 'path/to/top4-image',
//   //   title: 'Solids: Black (Cropped Fit)',
//   //   description: 'Women Cropped Tops',
//   //   price: '₹ 649 MRP incl. of all taxes'
//   // }
// ];

// const Topselling = () => {
//   return (
//     <div>
//       <Box className="topse">
//         <img src="https://prod-img.thesouledstore.com/public/theSoul/uploads/themes/4540320240803131834.jpg?format=webp&w=1500&dpr=1.3" alt="Slay The Day - All New Tops" className="banner-image" />
//       </Box>
//       <Container>
//         <Grid container spacing={2}> {/* Adjust spacing between grid items */}
//           {topsellingData.map((product, index) => (
//             <Grid item key={index} xs={12} sm={6} md={4}>
//               <Card className="product-card">
//                 <CardMedia
//                   component="img"
//                   image={product.image}
//                   alt={product.title}
//                   className="topse-image"
//                 />
//                 <CardContent>
//                   <Typography variant="h6" className="topse-title">{product.title}</Typography>
//                   <Typography variant="body2" className="topse-description">{product.description}</Typography>
//                   <Typography variant="h6" className="topse-price">{product.price}</Typography>
//                 </CardContent>
//               </Card>
//             </Grid>
//           ))}
//         </Grid>
//       </Container>
//     </div>
//   );
// };

// export default Topselling;


// import React from 'react';
// import {
//   Container,
//   Grid,
//   Card,
//   CardMedia,
//   CardContent,
//   Typography,
//   Box,
//   Button, // Import Button component
// } from '@mui/material';
// import '../Styles/Topselling.css';

// const topsellingData = [
//   {
//     image: 'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1721109128_2753543.jpg?format=webp&w=480&dpr=1.3',
//     title: 'Bralettes: Yin & Yang (Pack of 2)',
//     description: 'Women Bralette',
//     price: '₹ 638 MRP incl. of all taxes'
//   },
//   {
//     image: 'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1713335418_6272372.jpg?format=webp&w=480&dpr=1.3',
//     title: 'Harry Potter: Back to Hogwarts',
//     description: 'Women Full Sleeves Tops',
//     price: '₹ 999 MRP incl. of all taxes'
//   },
//   {
//     image: 'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1718174248_5226277.jpg?format=webp&w=480&dpr=1.3',
//     title: 'Bralettes: Bubblegum ',
//     description: 'Women Bralette',
//     price: '₹ 638 MRP incl. of all taxes'
//   },
//   // Uncomment and add more products as needed
//   // {
//   //   image: 'path/to/top4-image',
//   //   title: 'Solids: Black (Cropped Fit)',
//   //   description: 'Women Cropped Tops',
//   //   price: '₹ 649 MRP incl. of all taxes'
//   // }
// ];

// const Topselling = () => {
//   const handleBuyNow = (title) => {
//     alert(`Buying ${title}`);
//     // Add your purchase logic here
//   };

//   return (
//     <div>
//       <Box className="topse">
//         <img 
//           src="https://prod-img.thesouledstore.com/public/theSoul/uploads/themes/4540320240803131834.jpg?format=webp&w=1500&dpr=1.3" 
//           alt="Slay The Day - All New Tops" 
//           className="banner-image" 
//         />
//       </Box>
//       <Container>
//         <Grid container spacing={2}>
//           {topsellingData.map((product, index) => (
//             <Grid item key={index} xs={12} sm={6} md={4}>
//               <Card className="product-card">
//                 <CardMedia
//                   component="img"
//                   image={product.image}
//                   alt={product.title}
//                   className="topse-image"
//                 />
//                 <CardContent>
//                   <Typography variant="h6" className="topse-title">{product.title}</Typography>
//                   <Typography variant="body2" className="topse-description">{product.description}</Typography>
//                   <Typography variant="h6" className="topse-price">{product.price}</Typography>
//                   <Button
//                     variant="contained"
//                     color="primary"
//                     onClick={() => handleBuyNow(product.title)}
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

// export default Topselling;

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
import '../Styles/Topselling.css';

const topsellingData = [
  {
    image: 'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1721109128_2753543.jpg?format=webp&w=480&dpr=1.3',
    title: 'Fruity Frok',
    description: 'Mini Design',
    price: '₹ 600 MRP incl. of all taxes',
  },
  {
    image: 'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1713335418_6272372.jpg?format=webp&w=480&dpr=1.3',
    title: 'Floral&Dog',
    description: 'Lavender',
    price: '₹ 799 MRP incl. of all taxes',
  },
  {
    image: 'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1722671132_7824735.jpg?format=webp&w=480&dpr=1.3',
    title: 'SuperMan',
    description: 'Girly on Cotton',
    price: '₹ 400 MRP incl. of all taxes',
  },
];

const Topselling = () => {
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
      <Box className="topse-banner">
        <img 
          src="https://prod-img.thesouledstore.com/public/theSoul/uploads/themes/4540320240803131834.jpg?format=webp&w=1500&dpr=1.3" 
          alt="Slay The Day - All New Tops" 
          className="banner-image" 
        />
      </Box>
      <Container>
        <Grid container spacing={2}>
          {topsellingData.map((product, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <Card className="product-card">
                <CardMedia
                  component="img"
                  image={product.image}
                  alt={product.title}
                  className="product-image"
                />
                <CardContent>
                  <Typography variant="h6" className="product-title">{product.title}</Typography>
                  <Typography variant="body2" className="product-description">{product.description}</Typography>
                  <Typography variant="h6" className="product-price">{product.price}</Typography>
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

export default Topselling;



