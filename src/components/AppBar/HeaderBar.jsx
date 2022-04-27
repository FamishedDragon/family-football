import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import BrowserLogo from './BrowserLogo';
import AppMenuButton from './AppMenuButton';
import BrowserMenu from './BrowserMenu';
import UserIcon from './UserIcon';

const pages = ['Season Standings', 'My Picks', 'Elimination'];

export const AppBarContext = React.createContext([{}, () => {}]);;

export const HeaderBar = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const logo = "Football Picks";

    return (
        <AppBar position="static">
            <AppBarContext.Provider
                value={{
                    anchorElNav,
                    setAnchorElNav,
                    handleCloseNavMenu
                }}>
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <BrowserLogo logo={logo} />
                        <AppMenuButton
                            pages={pages}
                            logo={logo}
                        />
                        <BrowserMenu pages={pages}/>
                        <UserIcon/>
                    </Toolbar>
                </Container>
            </AppBarContext.Provider>
        </AppBar>
    );
};