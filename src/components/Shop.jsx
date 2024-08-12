// import React from 'react';
// import {
//   Container,
//   Grid,
//   Card,
//   CardMedia,
//   CardContent,
//   Typography,
//   CardActions,
//   IconButton,
//   Box,
//   Button
// } from '@mui/material';
// import { AddShoppingCart } from '@mui/icons-material';

// const Shop = () => {
//   const initialProducts = [
//     { id: 7, name: 'Product 7', price: 29.99, description: 'Description for product 7', image: 'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1710764223_3190663.jpg?format=webp&w=768&dpr=1.3' },
//     { id: 10, name: 'Product 10', price: 39.99, description: 'Description for product 10', image: 'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1721634164_6910989.jpg?format=webp&w=1080&dpr=1.3' },
//     { id: 11, name: 'Product 11', price: 49.99, description: 'Description for product 11', image: 'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1686894018_9786061.jpg?format=webp&w=768&dpr=1.3' },
    
//   ];

//   return (
//     <Container>
//       <Typography variant="h4" align="center" gutterBottom>
//         Most Loved Products
//       </Typography>
//       <Grid container spacing={4}>
//         {initialProducts.map((product) => (
//           <Grid item key={product.id} xs={12} sm={6} md={4}>
//             <Card sx={{ maxWidth: 345, transition: 'transform 0.2s', '&:hover': { transform: 'scale(1.05)' } }}>
//               <CardMedia
//                 component="img"
//                 height="500"
//                 image={product.image}
//                 alt={product.name}
//               />
//               <CardContent>
//                 <Typography variant="h5" component="div">
//                   {product.name}
//                 </Typography>
//                 <Typography variant="body2" color="text.secondary" paragraph>
//                   {product.description}
//                 </Typography>
//                 <Typography variant="h6" color="text.primary">
//                   ${product.price}
//                 </Typography>
//               </CardContent>
//               <CardActions disableSpacing>
//                 <IconButton aria-label="add to cart">
//                   <AddShoppingCart />
//                 </IconButton>
//                 <Box sx={{ flexGrow: 1 }} />
//                 <Button size="small" color="primary">
//                   Learn More
//                 </Button>
//               </CardActions>
//             </Card>
//           </Grid>
//         ))}
//       </Grid>
//     </Container>
//   );
// };

// export default Shop;


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
//import '../Styles/Shop.css';

const shopData = [
  {
    image: 'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1710764223_3190663.jpg?format=webp&w=768&dpr=1.3',
    title: 'jean Set',
    description: 'Glow Edition',
    price: '₹ 600 MRP incl. of all taxes',
  },
  {
    image: 'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1721634164_6910989.jpg?format=webp&w=1080&dpr=1.3',
    title: 'Multi mustard',
    description: 'Tee Edition',
    price: '₹ 799 MRP incl. of all taxes',
  },
  {
    image: 'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1686894018_9786061.jpg?format=webp&w=768&dpr=1.3',
    title: 'Go flow',
    description: 'multi colour',
    price: '₹ 999 MRP incl. of all taxes',
  },
];

const Shop = () => {
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
      <Box className="shop-banner">
        <img 
          src="https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/Homepage-Banner_1_LXl9UV2.jpg?format=webp&w=1500&dpr=1.3" 
          alt="Most Loved Products" 
          className="banner-image" 
        />
      </Box>
      <Container>
        <Grid container spacing={2}>
          {shopData.map((product, index) => (
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

export default Shop;

