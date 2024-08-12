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
// import '../Styles/Jackets.css';

// const jacketsData = [
//   {
//     image: 'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1705648457_6071267.jpg?format=webp&w=480&dpr=0.8',
//     title: 'Bralettes: Yin & Yang (Pack of 2)',
//     description: 'Women Bralette',
//     price: '₹ 638 MRP incl. of all taxes'
//   },
//   {
//     image: 'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1668876519_4889072.jpg?format=webp&w=480&dpr=0.8',
//     title: 'Harry Potter: Back to Hogwarts',
//     description: 'Women Full Sleeves Tops',
//     price: '₹ 999 MRP incl. of all taxes'
//   },
//   {
//     image: 'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1713175403_3124098.jpg?format=webp&w=480&dpr=0.8',
//     title: 'Bralettes: Bubblegum ',
//     description: 'Women Bralette',
//     price: '₹ 638 MRP incl. of all taxes'
//   },
// //   {
// //     image: 'path/to/top4-image',
// //     title: 'Solids: Black (Cropped Fit)',
// //     description: 'Women Cropped Tops',
// //     price: '₹ 649 MRP incl. of all taxes'
// //   }
// ];

// const Jackets = () => {
//   return (
//     <div>
//       <Box className="tops">
//         <img src="https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/category/catban-320240203112716.jpg?format=webp&w=1536&dpr=0.8" alt="Slay The Day - All New Tops" className="banner-image" />
//       </Box>
//       <Container>
//         <Grid container spacing={2}> {/* Adjust spacing between grid items */}
//           {jacketsData.map((product, index) => (
//             <Grid item key={index} xs={12} sm={6} md={4}>
//               <Card className="product-card">
//                 <CardMedia
//                   component="img"
//                   image={product.image}
//                   alt={product.title}
//                   className="tops-image"
//                 />
//                 <CardContent>
//                   <Typography variant="h6" className="tops-title">{product.title}</Typography>
//                   <Typography variant="body2" className="tops-description">{product.description}</Typography>
//                   <Typography variant="h6" className="tops-price">{product.price}</Typography>
//                 </CardContent>
//               </Card>
//             </Grid>
//           ))}
//         </Grid>
//       </Container>
//     </div>
//   );
// };

// export default Jackets;


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
// import '../Styles/Jackets.css';

// const jacketsData = [
//   {
//     image: 'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1705648457_6071267.jpg?format=webp&w=480&dpr=0.8',
//     title: 'Bralettes: Yin & Yang (Pack of 2)',
//     description: 'Women Bralette',
//     price: '₹ 638 MRP incl. of all taxes'
//   },
//   {
//     image: 'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1668876519_4889072.jpg?format=webp&w=480&dpr=0.8',
//     title: 'Harry Potter: Back to Hogwarts',
//     description: 'Women Full Sleeves Tops',
//     price: '₹ 999 MRP incl. of all taxes'
//   },
//   {
//     image: 'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1713175403_3124098.jpg?format=webp&w=480&dpr=0.8',
//     title: 'Bralettes: Bubblegum ',
//     description: 'Women Bralette',
//     price: '₹ 638 MRP incl. of all taxes'
//   },
//   // Uncomment if you want to include the fourth product
//   // {
//   //   image: 'path/to/top4-image',
//   //   title: 'Solids: Black (Cropped Fit)',
//   //   description: 'Women Cropped Tops',
//   //   price: '₹ 649 MRP incl. of all taxes'
//   // }
// ];

// const Jackets = () => {
//   const handleBuyNow = (title) => {
//     alert(`Buying ${title}`);
//     // Add your purchase logic here
//   };

//   return (
//     <div>
//       <Box className="tops">
//         <img src="https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/category/catban-320240203112716.jpg?format=webp&w=1536&dpr=0.8" alt="Slay The Day - All New Jackets" className="banner-image" />
//       </Box>
//       <Container>
//         <Grid container spacing={2}> {/* Adjust spacing between grid items */}
//           {jacketsData.map((product, index) => (
//             <Grid item key={index} xs={12} sm={6} md={4}>
//               <Card className="product-card">
//                 <CardMedia
//                   component="img"
//                   image={product.image}
//                   alt={product.title}
//                   className="tops-image"
//                 />
//                 <CardContent>
//                   <Typography variant="h6" className="tops-title">{product.title}</Typography>
//                   <Typography variant="body2" className="tops-description">{product.description}</Typography>
//                   <Typography variant="h6" className="tops-price">{product.price}</Typography>
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

// export default Jackets;

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
import '../Styles/Jackets.css';

const jacketsData = [
  {
    image: 'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1705648457_6071267.jpg?format=webp&w=480&dpr=0.8',
    title: 'White choco',
    description: 'Elegant Edition',
    price: '₹ 638 MRP incl. of all taxes'
  },
  {
    image: 'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1668876519_4889072.jpg?format=webp&w=480&dpr=0.8',
    title: 'Captain America',
    description: 'jean coat',
    price: '₹ 999 MRP incl. of all taxes'
  },
  {
    image: 'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1713175403_3124098.jpg?format=webp&w=480&dpr=0.8',
    title: 'OuLed',
    description: 'Rider Fire',
    price: '₹ 638 MRP incl. of all taxes'
  },
];

const Jackets = () => {
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
      <Box className="tops">
        <img src="https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/category/catban-320240203112716.jpg?format=webp&w=1536&dpr=0.8" alt="Slay The Day - All New Jackets" className="banner-image" />
      </Box>
      <Container>
        <Grid container spacing={2}>
          {jacketsData.map((product, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <Card className="product-card">
                <CardMedia
                  component="img"
                  image={product.image}
                  alt={product.title}
                  className="tops-image"
                />
                <CardContent>
                  <Typography variant="h6" className="tops-title">{product.title}</Typography>
                  <Typography variant="body2" className="tops-description">{product.description}</Typography>
                  <Typography variant="h6" className="tops-price">{product.price}</Typography>
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

export default Jackets;

