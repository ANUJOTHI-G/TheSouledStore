// import React, { useState } from 'react';
// import '../Styles/Navbar.css';
// import log from './../images/logosouled.gif';
// import { Link } from 'react-router-dom';
// import PersonIcon from '@mui/icons-material/Person';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// import { Drawer, List, ListItem, ListItemText, IconButton, Divider } from '@mui/material';

// const Navbar = ({ favorites = [] }) => {
//   const [drawerOpen, setDrawerOpen] = useState(false);

//   const toggleDrawer = (open) => (event) => {
//     if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
//       return;
//     }
//     setDrawerOpen(open);
//   };

//   const drawerContent = (
//     <div className="drawer-content">
//       <List>
//         <ListItem button component={Link} to="/">
//           <ListItemText primary="Home" />
//         </ListItem>
//         <Divider />
//         <ListItem button component={Link} to="/about">
//           <ListItemText primary="About" />
//         </ListItem>
//         <Divider />
//         <ListItem button component={Link} to="/signup">
//           <ListItemText primary="Signup" />
//         </ListItem>
//         <Divider />
//         <ListItem button component={Link} to="/contactus">
//           <ListItemText primary="Contact Us" />
//         </ListItem>
//       </List>
//     </div>
//   );

//   return (
//     <nav className="navbar">
//       <div className="navbar-logo">
//         <img src={log} alt="log" />
//       </div>
//       <div className="navbar-links">
//         <Link to="/women">Women</Link>
//         <Link to="/men">Men</Link>
//         <Link to="/kids">Kids</Link>
//       </div>
//       <div className="navbar-icons">
//         <ShoppingCartIcon />
//         <Link to="/favorites"></Link>
//         <IconButton onClick={toggleDrawer(true)}>
//           <PersonIcon />
//         </IconButton>
//       </div>
//       <Drawer
//         anchor="right"
//         open={drawerOpen}
//         onClose={toggleDrawer(false)}
//         classes={{ paper: 'drawer-paper' }}
//       >
//         {drawerContent}
//       </Drawer>
//     </nav>
//   );
// };

// export default Navbar;

import React, { useState } from 'react';
import '../Styles/Navbar.css';
import log from './../images/logosouled.gif';
import { Link } from 'react-router-dom';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Drawer, List, ListItem, ListItemText, IconButton, Divider } from '@mui/material';

const Navbar = ({ favorites = [] }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  const drawerContent = (
    <div className="drawer-content">
      <List>
        <ListItem button component={Link} to="/">
          <ListItemText primary="Home" />
        </ListItem>
    
        <ListItem button component={Link} to="/about">
          <ListItemText primary="About" />
        </ListItem>
        
        <ListItem button component={Link} to="/category">
          <ListItemText primary="Category" />
        </ListItem> 
       
        <ListItem button component={Link} to="/signup">
          <ListItemText primary="Signup" />
        </ListItem>
       
        <ListItem button component={Link} to="/admindashboard">
          <ListItemText primary="AdminDashboard" />
        </ListItem>
      </List>
    </div>
  );

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={log} alt="log" />
      </div>

      <div className="navbar-links">
        <Link to="/women">Women</Link>
        <Link to="/men">Men</Link>
        <Link to="/kids">Kids</Link>
      </div>

      <div className="navbar-icons">
          <Link to="/cart" className="icon-link">
        <ShoppingCartIcon />
        </Link>
        <IconButton onClick={toggleDrawer(true)}>
          <PersonIcon />
        </IconButton>
      </div>

      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        classes={{ paper: 'drawer-paper' }}
      >
        {drawerContent}
      </Drawer>
    </nav>
  );
};

export default Navbar;


