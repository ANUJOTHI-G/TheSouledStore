import React from 'react';
import { Container, Typography, Grid, IconButton, Box } from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

const ConnectUs = () => {
  return (
    <Container maxWidth="sm" style={{ position: 'fixed', bottom: 150, left: 200, width: 'auto' }}>
      <Box textAlign="center" mb={2}>
        <Typography variant="h6" gutterBottom>CONNECT WITH US</Typography>
      </Box>
      <Grid container direction="column" alignItems="flex-start" spacing={2}>
        <Grid item style={{ display: 'flex', alignItems: 'center' }}>
          <IconButton
            component="a"
            href="https://twitter.com/your-twitter-id"
            target="_blank"
            rel="noopener noreferrer"
            color="primary"
          >
            <TwitterIcon style={{ fontSize: 30, color: '#1DA1F2' }} />
          </IconButton>
          <Typography variant="body2" style={{ marginLeft: 8 }}>Follow us on Twitter</Typography>
        </Grid>
        <Grid item style={{ display: 'flex', alignItems: 'center' }}>
          <IconButton
            component="a"
            href="https://pinterest.com/DreamyAngellll"
            target="_blank"
            rel="noopener noreferrer"
            color="secondary"
          >
            <PinterestIcon style={{ fontSize: 30, color: '#E60023' }} />
          </IconButton>
          <Typography variant="body2" style={{ marginLeft: 8 }}>Follow us on Pinterest</Typography>
        </Grid>
        <Grid item style={{ display: 'flex', alignItems: 'center' }}>
          <IconButton
            component="a"
            href="https://facebook.com/your-facebook-id"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#3b5998' }}
          >
            <FacebookIcon style={{ fontSize: 30, color: '#3b5998' }} />
          </IconButton>
          <Typography variant="body2" style={{ marginLeft: 8 }}>Follow us on Facebook</Typography>
        </Grid>
        <Grid item style={{ display: 'flex', alignItems: 'center' }}>
          <IconButton
            component="a"
            href="https://instagram.com/the._.anuxz"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#E1306C' }}
          >
            <InstagramIcon style={{ fontSize: 30, color: '#E1306C' }} />
          </IconButton>
          <Typography variant="body2" style={{ marginLeft: 8 }}>Follow us on Instagram</Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ConnectUs;
