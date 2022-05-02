import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { AppBarContext } from './HeaderBar';

const BrowserMenu = ({pages}) => {
    const { handleCloseNavMenu, navToPage } = React.useContext(AppBarContext);

    return (
        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
                <Button
                    key={page.name}
                    onClick={()=> {
                        navToPage(page.link);
                        handleCloseNavMenu();
                    }}
                    sx={{ my: 2, color: 'white', display: 'block' }}
                >
                    {page.name}
                </Button>
            ))}
        </Box>
    );
};

export default BrowserMenu;