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
import '../Styles/Tops.css';

const topsData = [
  {
      image: 'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1711545283_7155866.jpg?format=webp&w=480&dpr=0.8',
      title: 'Blacky',
      description: 'Floral',
      price: '₹ 600 MRP incl. of all taxes',
    },
    {
      image: 'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1711539957_1139789.jpg?format=webp&w=480&dpr=0.8',
      title: 'Lavender',
      description: 'Freaky',
      price: '₹ 700 MRP incl. of all taxes',
    },
    {
      image: 'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1721108210_8535752.jpg?format=webp&w=480&dpr=0.8',
      title: 'sleeve less',
      description: 'pinkey',
      price: '₹ 450 MRP incl. of all taxes',
    }
  // Product data...
];

const Tops = () => {
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
        <img
          src="https://prod-img.thesouledstore.com/public/theSoul/uploads/themes/8087220240725134646.jpg?format=webp&w=1500&dpr=0.8"
          alt="Slay The Day - All New Tops"
          className="banner-image"
        />
      </Box>
      <Container>
        <Grid container spacing={2}>
          {topsData.map((product, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <Card className="product-card">
                <CardMedia
                  component="img"
                  image={product.image}
                  alt={product.title}
                  className="tops-image"
                />
                <CardContent>
                  <Typography variant="h6" className="tops-title">
                    {product.title}
                  </Typography>
                  <Typography variant="body2" className="tops-description">
                    {product.description}
                  </Typography>
                  <Typography variant="h6" className="tops-price">
                    {product.price}
                  </Typography>
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

export default Tops;




