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
// import '../Styles/Girls.css';

// const girlsData = [
//   {
//     image: 'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1722956000_7054018.jpg?format=webp&w=480&dpr=1.3',
//     title: 'Bralettes: Yin & Yang (Pack of 2)',
//     description: 'Women Bralette',
//     price: '₹ 638 MRP incl. of all taxes'
//   },
//   {
//     image: 'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1715002608_4825309.jpg?format=webp&w=480&dpr=1.3',
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
//   //   {
//   //     image: 'path/to/top4-image',
//   //     title: 'Solids: Black (Cropped Fit)',
//   //     description: 'Women Cropped Tops',
//   //     price: '₹ 649 MRP incl. of all taxes'
//   //   }
// ];

// const Girls = () => {
//   return (
//     <div className="girls">
//       <Box className="girls-banner">
//         <img src="https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/category/catban-020240507145341.jpg?format=webp&w=1500&dpr=1.3" alt="Slay The Day - All New Tops" className="banner-image" />
//       </Box>
//       <Container>
//         <Grid container spacing={2}> {/* Adjust spacing between grid items */}
//           {girlsData.map((product, index) => (
//             <Grid item key={index} xs={12} sm={6} md={4}>
//               <Card className="product-card">
//                 <CardMedia
//                   component="img"
//                   image={product.image}
//                   alt={product.title}
//                   className="girls-image"
//                 />
//                 <CardContent>
//                   <Typography variant="h6" className="girls-title">{product.title}</Typography>
//                   <Typography variant="body2" className="girls-description">{product.description}</Typography>
//                   <Typography variant="h6" className="girls-price">{product.price}</Typography>
//                 </CardContent>
//               </Card>
//             </Grid>
//           ))}
//         </Grid>
//       </Container>
//     </div>
//   );
// };

// export default Girls;


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
// import '../Styles/Girls.css';

// const girlsData = [
//   {
//     image: 'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1722956000_7054018.jpg?format=webp&w=480&dpr=1.3',
//     title: 'Bralettes: Yin & Yang (Pack of 2)',
//     description: 'Women Bralette',
//     price: '₹ 638 MRP incl. of all taxes'
//   },
//   {
//     image: 'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1715002608_4825309.jpg?format=webp&w=480&dpr=1.3',
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
//   // {
//   //   image: 'path/to/top4-image',
//   //   title: 'Solids: Black (Cropped Fit)',
//   //   description: 'Women Cropped Tops',
//   //   price: '₹ 649 MRP incl. of all taxes'
//   // }
// ];

// const Girls = () => {
//   const handleBuyNow = (title) => {
//     alert(`Buying ${title}`);
//     // Add your purchase logic here
//   };

//   return (
//     <div className="girls">
//       <Box className="girls-banner">
//         <img 
//           src="https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/category/catban-020240507145341.jpg?format=webp&w=1500&dpr=1.3" 
//           alt="Slay The Day - All New Tops" 
//           className="banner-image" 
//         />
//       </Box>
//       <Container>
//         <Grid container spacing={2}> {/* Adjust spacing between grid items */}
//           {girlsData.map((product, index) => (
//             <Grid item key={index} xs={12} sm={6} md={4}>
//               <Card className="product-card">
//                 <CardMedia
//                   component="img"
//                   image={product.image}
//                   alt={product.title}
//                   className="girls-image"
//                 />
//                 <CardContent>
//                   <Typography variant="h6" className="girls-title">{product.title}</Typography>
//                   <Typography variant="body2" className="girls-description">{product.description}</Typography>
//                   <Typography variant="h6" className="girls-price">{product.price}</Typography>
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

// export default Girls;


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
import '../Styles/Girls.css';

const girlsData = [
  {
    image: 'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1722956000_7054018.jpg?format=webp&w=480&dpr=1.3',
    title: 'Kitty Star',
    description: 'Freaky Fit',
    price: '₹ 600 MRP incl. of all taxes'
  },
  {
    image: 'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1715002608_4825309.jpg?format=webp&w=480&dpr=1.3',
    title: 'Full coated',
    description: 'Full Sleeves Tops',
    price: '₹ 700 MRP incl. of all taxes'
  },
  {
    image: 'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1718174248_5226277.jpg?format=webp&w=480&dpr=1.3',
    title: 'Bubblegum',
    description: 'Full Set Girly',
    price: '₹ 799 MRP incl. of all taxes'
  },
];

const Girls = () => {
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
      <Box className="girls-banner">
        <img 
          src="https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/category/catban-020240507145341.jpg?format=webp&w=1500&dpr=1.3" 
          alt="Slay The Day - All New Tops" 
          className="banner-image" 
        />
      </Box>
      <Container>
        <Grid container spacing={2}>
          {girlsData.map((product, index) => (
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

export default Girls;

