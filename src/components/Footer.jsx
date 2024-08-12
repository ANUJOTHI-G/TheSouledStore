import React from 'react';
import { Box, Typography, IconButton, Card, styled } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PinterestIcon from '@mui/icons-material/Pinterest';
import TwitterIcon from '@mui/icons-material/Twitter';
import DribbbleIcon from '@mui/icons-material/SportsBasketball';
import EmailIcon from '@mui/icons-material/Email';

const ContactSection = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  backgroundColor: '#95a1a7',
  color: '#fff',
  padding: '40px',
  fontFamily: 'Arial, sans-serif',
}));

const ContactText = styled(Box)(({ theme }) => ({
  flex: 1,
  paddingRight: '20px',
}));

const SocialIcons = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: '10px',
}));

const ContactInfo = styled(Box)(({ theme }) => ({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
}));

const ContactCard = styled(Card)(({ theme }) => ({
  backgroundColor: '',
  padding: '20px',
  borderRadius: '8px',
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
}));

const Icon = styled('div')(({ theme }) => ({
  color: '#fff',
  fontSize: '40px',
}));

const Contact = () => {
  return (
    <ContactSection>
      <ContactText>
        <Typography variant="h2" gutterBottom>
          Get in Touch
        </Typography>
        <Typography variant="body1" paragraph>
          Ecosystem bootstrapping learning curve lean startup disruptive.
          Marketing long tail disruptive agile development partner.
        </Typography>
        <SocialIcons>
          <IconButton href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <InstagramIcon className={Icon} />
          </IconButton>
          <IconButton href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <LinkedInIcon className={Icon} />
          </IconButton>
          <IconButton href="https://www.pinterest.com" target="_blank" rel="noopener noreferrer">
            <PinterestIcon className={Icon} />
          </IconButton>
          <IconButton href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <TwitterIcon className={Icon} />
          </IconButton>
        </SocialIcons>
      </ContactText>
      <ContactInfo>
        <ContactCard>
          <DribbbleIcon className={Icon} />
          <Typography>
            dribbble.com/example
          </Typography>
        </ContactCard>
        <ContactCard>
          <EmailIcon className={Icon} />
          <Typography>
            contact@example.com
          </Typography>
        </ContactCard>
      </ContactInfo>
    </ContactSection>
  );
};

export default Contact;
