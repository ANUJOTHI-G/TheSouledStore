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
// import '../Styles/TShirt.css';

// const tshirtData = [
//   {
//     image: 'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1716033070_5985101.jpg?format=webp&w=480&dpr=0.8',
//     title: 'Bralettes: Yin & Yang (Pack of 2)',
//     description: 'Women Bralette',
//     price: '₹ 638 MRP incl. of all taxes'
//   },
//   {
//     image: 'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1715875120_5706436.gif?format=webp&w=480&dpr=0.8',
//     title: 'Harry Potter: Back to Hogwarts',
//     description: 'Women Full Sleeves Tops',
//     price: '₹ 999 MRP incl. of all taxes'
//   },
//   {
//     image: 'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1716033818_9254411.jpg?format=webp&w=480&dpr=0.8',
//     title: 'Bralettes: Bubblegum (Pack of 2)',
//     description: 'Women Bralette',
//     price: '₹ 638 MRP incl. of all taxes'
//   },

// ];

// const TShirt = () => {
//   return (
//     <div>
//       <Box className="tshirt">
//         <img src="https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/category/catban-520240717121033.jpg?format=webp&w=1536&dpr=0.8" alt="Slay The Day - All New Tops" className="banner-image" />
//       </Box>
//       <Container>
//         <Grid container spacing={2}> {/* Adjust spacing between grid items */}
//           {tshirtData.map((product, index) => (
//             <Grid item key={index} xs={12} sm={6} md={4}>
//               <Card className="product-card">
//                 <CardMedia
//                   component="img"
//                   image={product.image}
//                   alt={product.title}
//                   className="tshirt-image"
//                 />
//                 <CardContent>
//                   <Typography variant="h6" className="tshirt-title">{product.title}</Typography>
//                   <Typography variant="body2" className="tshirt-description">{product.description}</Typography>
//                   <Typography variant="h6" className="tshirt-price">{product.price}</Typography>
//                 </CardContent>
//               </Card>
//             </Grid>
//           ))}
//         </Grid>
//       </Container>
//     </div>
//   );
// };

// export default TShirt;


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
// import '../Styles/TShirt.css';

// const tshirtData = [
//   {
//     image: 'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1716033070_5985101.jpg?format=webp&w=480&dpr=0.8',
//     title: 'Bralettes: Yin & Yang (Pack of 2)',
//     description: 'Women Bralette',
//     price: '₹ 638 MRP incl. of all taxes'
//   },
//   {
//     image: 'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1715875120_5706436.gif?format=webp&w=480&dpr=0.8',
//     title: 'Harry Potter: Back to Hogwarts',
//     description: 'Women Full Sleeves Tops',
//     price: '₹ 999 MRP incl. of all taxes'
//   },
//   {
//     image: 'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1716033818_9254411.jpg?format=webp&w=480&dpr=0.8',
//     title: 'Bralettes: Bubblegum (Pack of 2)',
//     description: 'Women Bralette',
//     price: '₹ 638 MRP incl. of all taxes'
//   }
// ];

// const TShirt = () => {
//   const navigate = useNavigate();

//   const handleBuyNow = (product) => {
//     // Retrieve cart items from localStorage
//     const existingCart = JSON.parse(localStorage.getItem('cartItems')) || [];

//     // Check if the product is already in the cart
//     const isProductInCart = existingCart.some(
//       (cartItem) => cartItem.title === product.title
//     );

//     if (!isProductInCart) {
//       // Add the product to the cart
//       const updatedCart = [...existingCart, product];
//       localStorage.setItem('cartItems', JSON.stringify(updatedCart));

//       // Navigate to the cart page
//       navigate('/cart');
//     } else {
//       // Navigate to the cart page if the product is already in the cart
//       navigate('/cart');
//     }
//   };

//   return (
//     <div>
//       <Box className="tshirt">
//         <img src="https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/category/catban-520240717121033.jpg?format=webp&w=1536&dpr=0.8" alt="Slay The Day - All New Tops" className="banner-image" />
//       </Box>
//       <Container>
//         <Grid container spacing={2}> {/* Adjust spacing between grid items */}
//           {tshirtData.map((product, index) => (
//             <Grid item key={index} xs={12} sm={6} md={4}>
//               <Card className="product-card">
//                 <CardMedia
//                   component="img"
//                   image={product.image}
//                   alt={product.title}
//                   className="tshirt-image"
//                 />
//                 <CardContent>
//                   <Typography variant="h6" className="tshirt-title">{product.title}</Typography>
//                   <Typography variant="body2" className="tshirt-description">{product.description}</Typography>
//                   <Typography variant="h6" className="tshirt-price">{product.price}</Typography>
//                   <Button
//                     variant="contained"
//                     color="primary"
//                     onClick={() => handleBuyNow(product.title)}
//                     style={{ marginTop: '10px' }}
//                   >
//                     {JSON.parse(localStorage.getItem('cartItems'))?.some(
//                       (cartItem) => cartItem.title === product.title
//                     )
//                       ? 'In Cart'
//                       : 'Buy Now'}
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

// export default TShirt;


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
import '../Styles/TShirt.css';

const tshirtData = [
  {
    image: 'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1716033070_5985101.jpg?format=webp&w=480&dpr=0.8',
    title: 'So girly',
    description: 'Yellow Bee',
    price: '₹ 500 MRP incl. of all taxes',
  },
  {
    image: 'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1715875120_5706436.gif?format=webp&w=480&dpr=0.8',
    title: 'kitty Eye',
    description: 'Black Glass',
    price: '₹ 600 MRP incl. of all taxes',
  },
  {
    image: 'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1716033818_9254411.jpg?format=webp&w=480&dpr=0.8',
    title: 'Espresso',
    description: 'Browny',
    price: '₹ 400 MRP incl. of all taxes',
  },
];

const TShirt = () => {
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
      <Box className="tshirt">
        <img src="https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/category/catban-520240717121033.jpg?format=webp&w=1536&dpr=0.8" alt="Slay The Day - All New Tops" className="banner-image" />
      </Box>
      <Container>
        <Grid container spacing={2}>
          {tshirtData.map((product, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <Card className="product-card">
                <CardMedia
                  component="img"
                  image={product.image}
                  alt={product.title}
                  className="tshirt-image"
                />
                <CardContent>
                  <Typography variant="h6" className="tshirt-title">{product.title}</Typography>
                  <Typography variant="body2" className="tshirt-description">{product.description}</Typography>
                  <Typography variant="h6" className="tshirt-price">{product.price}</Typography>
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

export default TShirt;

