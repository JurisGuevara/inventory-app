import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';

import { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const [anchorEl, setAnchorEl] = useState(null);


    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    
    return ( 
        <Box>
            <AppBar position="static">
                <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    ITEM INVENTORY
                </Typography>
                <div>
                    <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleMenu}
                        color="inherit"
                    >
                        <AccountCircle />
                    </IconButton>
                    <Menu
                        id="menu-appbar"
                        anchorEl={anchorEl}
                        anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                        }}
                        keepMounted
                        transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                        }}
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        <Link to="/" className='link'>
                            <MenuItem onClick={handleClose}>My Account</MenuItem>
                        </Link>
                        <Link to="/items" className='link'>
                            <MenuItem onClick={handleClose}>Item List</MenuItem>
                        </Link>
                        <Link to="/login" className='link'>
                            <MenuItem onClick={handleClose}>Logout</MenuItem>
                        </Link>
                    </Menu>
                    </div>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
 
export default Header;