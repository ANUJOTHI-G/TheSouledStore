import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import {
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  IconButton,
  Box,
} from '@mui/material';
import { AddShoppingCart } from '@mui/icons-material';

const initialWomenProducts = [
  { id: 1, name: 'Boys', price: 29.99, description: 'Description for women product 1', image: 'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1721466498_9610433.jpg?format=webp&w=480&dpr=1.3' },
  { id: 2, name: 'Girls', price: 49.99, description: 'Description for women product 2', image: 'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1722840858_1836363.jpg?format=webp&w=480&dpr=1.3' },
  { id: 3, name: 'Topselling', price: 39.99, description: 'Description for women product 3', image: 'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1705741059_1932334.jpg?format=webp&w=480&dpr=1.3' },
  // { id: 4, name: 'Women Product 4', price: 59.99, description: 'Description for women product 4', image: 'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1714462523_6662696.jpg?format=webp&w=768&dpr=1.3' },
  // { id: 5, name: 'Women Product 5', price: 44.99, description: 'Description for women product 5', image: 'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1710520262_9523828.jpg?format=webp&w=768&dpr=1.3' },
  // { id: 6, name: 'Women Product 6', price: 24.99, description: 'Description for women product 6', image: 'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1719638723_7835947.jpg?format=webp&w=1080&dpr=1.3' },
];

const Kids = () => {
  const [products] = useState(initialWomenProducts);
  const navigate = useNavigate();

  const handleCardClick = (productId) => {
    switch (productId) {
      case 1:
        navigate('/Boys');
        break;
      case 2:
        navigate('/Girls');
        break;
      case 3:
        navigate('/Topselling');
        break;
      // Add more cases as needed for other products
      default:
        break;
    }
  };

  return (
    <div>
      <Box className="jump">
        <img src="https://prod-img.thesouledstore.com/public/theSoul/uploads/themes/3488320240626152503.png?format=webp&w=1500&dpr=1.3" alt="Slay The Day - All New Tops" className="banner-image" />
      
      </Box>
    <Container>
      <Typography variant="h4" align="center" gutterBottom>
        Slay The Day!
      </Typography>
      <Grid container spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4}>
            <Card
              sx={{ maxWidth: 345, transition: 'transform 0.2s', '&:hover': { transform: 'scale(1.05)' } }}
              onClick={() => handleCardClick(product.id)}
            >
              <CardMedia
                component="img"
                height="500"
                image={product.image}
                alt={product.name}
              />
              <CardContent>
                <Typography variant="h5" component="div">
                  {product.name}
                </Typography>
                </CardContent>
               
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
    </div>
  );
};

export default Kids;


