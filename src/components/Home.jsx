import React from 'react';
import '../Styles/Home.css';
import home from './../images/home.jpg';

//import ido from './../images/ido.webp';
//import kove from './../images/'
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    imgPath: 'https://images.bestsellerclothing.in/live/image/catalog/brandstore/bestseller/banners/2400x950px_Only_Banner_Refresh_Homepage_Desktop.jpg',
  },
  {
    imgPath: 'https://beyoung.in/api/catalog/new-bb/desktop/banner/cargo-banner-desktop-view.jpg',
  },
  {
    imgPath: 'https://beyoung.in/api/catalog/new-bb/mobile/banner/bhuvan-banner-desktop-view124357.jpg',
  },
  {
    imgPath: 'https://images.bestsellerclothing.in/live/image/catalog/brandstore/bestseller/banners/Black-on-black-denim-Desktop-Home-Banner-1920x640.jpg',
  },
];

function SwipeableTextMobileStepper() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box sx={{ maxWidth: '100%', flexGrow: 1, margin: 'auto' }}>
      <Paper
        square
        elevation={0}
        sx={{
          display: 'flex',
          alignItems: 'center',
          height: 110,
          pl: 2,
          bgcolor: 'background.default',
        }}
      >
        
        <div className="claim-offers">
      <h2>Most Loved Product</h2>
    </div>
    
        <Typography>{images[activeStep].label}</Typography>
      </Paper>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div key={index}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                sx={{
                  height: 'auto',
                  display: 'block',
                  maxWidth: '100%',
                  overflow: 'hidden',
                  width: '100%',
                }}
                src={step.imgPath}
                alt={step.label}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button
            size="small"
            onClick={handleBack}
            disabled={activeStep === 0}
          >
            
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
          </Button>
        }
      />
    </Box>
  );
}

const Home = () => {
  return (
    <div className="home">
      <div className="banner">
        <img src={home} alt="banner" />
        <div className="banner-text">

          <h1>Welcome modern <br />sanctuary<br /></h1>
          <p> where elegance meets comfort <br />Discover luxury living redefined<br /></p>
          <Link to="/Shop"><button>Shop</button></Link>
        </div>
      </div>
      <SwipeableTextMobileStepper />
      
      {/* <div className="sec">
        <img src={secbanner} alt="secbanner" />
        
      </div> */}
    </div>
  );
}

export default Home;



