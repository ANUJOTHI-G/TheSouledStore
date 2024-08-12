// import React, { useState } from 'react';
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
// } from '@mui/material';
// import { AddShoppingCart } from '@mui/icons-material';

// const initialWomenProducts = [
//   { id: 1, name: 'Women Product 1', price: 29.99, description: 'Description for women product 1', image: 'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1713781292_7594978.jpg?format=webp&w=480&dpr=1.3' },
//   { id: 2, name: 'Women Product 2', price: 49.99, description: 'Description for women product 2', image: 'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1721455961_1149734.jpg?format=webp&w=1080&dpr=1.3' },
//   { id: 3, name: 'Women Product 3', price: 39.99, description: 'Description for women product 3', image: 'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1717149388_5569831.jpg?format=webp&w=768&dpr=1.3' },
//   { id: 4, name: 'Women Product 4', price: 59.99, description: 'Description for women product 4', image: 'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1714462523_6662696.jpg?format=webp&w=768&dpr=1.3' },
//   { id: 5, name: 'Women Product 5', price: 44.99, description: 'Description for women product 5', image: 'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1710520262_9523828.jpg?format=webp&w=768&dpr=1.3' },
//   { id: 6, name: 'Women Product 6', price: 24.99, description: 'Description for women product 6', image: 'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1719638723_7835947.jpg?format=webp&w=1080&dpr=1.3' },
// ];

// const Women = () => {
//   const [products] = useState(initialWomenProducts);

//   return (
//     <Container>
//       <Typography variant="h4" align="center" gutterBottom>
//         Women's Products
//       </Typography>
//       <Grid container spacing={4}>
//         {products.map((product) => (
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
//               </CardActions>
//             </Card>
//           </Grid>
//         ))}
//       </Grid>
//     </Container>
//   );
// };

// export default Women;

// Women.jsx


// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

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
// } from '@mui/material';
// import { AddShoppingCart } from '@mui/icons-material';

// const initialWomenProducts = [
//   { id: 1, name: 'Women Product 1', price: 29.99, description: 'Description for women product 1', image: 'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1713781292_7594978.jpg?format=webp&w=480&dpr=1.3' },
//   { id: 2, name: 'Women Product 2', price: 49.99, description: 'Description for women product 2', image: 'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1721455961_1149734.jpg?format=webp&w=1080&dpr=1.3' },
//   { id: 3, name: 'Women Product 3', price: 39.99, description: 'Description for women product 3', image: 'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1717149388_5569831.jpg?format=webp&w=768&dpr=1.3' },
//   { id: 4, name: 'Women Product 4', price: 59.99, description: 'Description for women product 4', image: 'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1714462523_6662696.jpg?format=webp&w=768&dpr=1.3' },
//   { id: 5, name: 'Women Product 5', price: 44.99, description: 'Description for women product 5', image: 'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1710520262_9523828.jpg?format=webp&w=768&dpr=1.3' },
//   { id: 6, name: 'Women Product 6', price: 24.99, description: 'Description for women product 6', image: 'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1719638723_7835947.jpg?format=webp&w=1080&dpr=1.3' },
// ];

// const Women = () => {
//   const [products] = useState(initialWomenProducts);
//   const navigate = useNavigate();

//   const handleCardClick = (productId) => {
//     if (productId === 3) { // Check if the clicked product is Women Product 3
//       navigate('/tShirt');
//     }
//   };

//   return (
//     <Container>
//       <Typography variant="h4" align="center" gutterBottom>
//         Women's Products
//       </Typography>
//       <Grid container spacing={4}>
//         {products.map((product) => (
//           <Grid item key={product.id} xs={12} sm={6} md={4}>
//             <Card
//               sx={{ maxWidth: 345, transition: 'transform 0.2s', '&:hover': { transform: 'scale(1.05)' } }}
//               onClick={() => handleCardClick(product.id)}
//             >
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
//               </CardActions>
//             </Card>
//           </Grid>
//         ))}
//       </Grid>
//     </Container>
//   );
// };

// export default Women;

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
  { id: 1, name: 'Jackets', price: 29.99, description: 'Description for women product 1', image: 'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1671170173_9421378.jpg?format=webp&w=480&dpr=1.3' },
  { id: 2, name: 'Shirt', price: 49.99, description: 'Description for women product 2', image: 'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1700648768_8646421.jpg?format=webp&w=480&dpr=1.3' },
  { id: 3, name: 'Casual', price: 39.99, description: 'Description for women product 3', image: 'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1720246503_9407921.jpg?format=webp&w=480&dpr=1.3' },
  // { id: 4, name: 'Women Product 4', price: 59.99, description: 'Description for women product 4', image: 'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1714462523_6662696.jpg?format=webp&w=768&dpr=1.3' },
  // { id: 5, name: 'Women Product 5', price: 44.99, description: 'Description for women product 5', image: 'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1710520262_9523828.jpg?format=webp&w=768&dpr=1.3' },
  // { id: 6, name: 'Women Product 6', price: 24.99, description: 'Description for women product 6', image: 'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1719638723_7835947.jpg?format=webp&w=1080&dpr=1.3' },
];

const Men = () => {
  const [products] = useState(initialWomenProducts);
  const navigate = useNavigate();

  const handleCardClick = (productId) => {
    switch (productId) {
      case 1:
        navigate('/Jackets');
        break;
      case 2:
        navigate('/Shirt');
        break;
      case 3:
        navigate('/Casual');
        break;
      // Add more cases as needed for other products
      default:
        break;
    }
  };

  return (
    <div>
      <Box className="jump">
        <img src="https://prod-img.thesouledstore.com/public/theSoul/uploads/themes/9530320240721115234.jpg?format=webp&w=1536&dpr=0.8" alt="Slay The Day - All New Tops" className="banner-image" />
      
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
                {/* <Typography variant="body2" color="text.secondary" paragraph>
                  {product.description}
                </Typography>
                <Typography variant="h6" color="text.primary">
                  ${product.price}
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton aria-label="add to cart">
                  <AddShoppingCart />
                </IconButton>
                <Box sx={{ flexGrow: 1 }} />
              </CardActions> */}
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
    </div>
  );
};

export default Men;


