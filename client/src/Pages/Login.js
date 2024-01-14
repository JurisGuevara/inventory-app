import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const Login = () => {
    return ( 
        <Box>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        ITEM INVENTORY
                    </Typography>
                </Toolbar>
            </AppBar>
            Login
        </Box>
    );
}
 
export default Login;