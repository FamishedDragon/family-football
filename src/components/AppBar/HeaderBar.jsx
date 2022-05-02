import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import BrowserLogo from './BrowserLogo';
import AppMenuButton from './AppMenuButton';
import BrowserMenu from './BrowserMenu';
import UserIcon from './UserIcon';
import { useNavigate } from 'react-router-dom';

const pages = [{name: 'Leaderboard', link:'/'}, {name: 'Season Standings', link: '/standings'}, {name: 'My Picks', link: '/picks'}];
const logo = "Football Picks";

export const AppBarContext = React.createContext([{}, () => {}]);;

export const HeaderBar = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const navigate = useNavigate();

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const navToPage = (page) => {
        navigate(page);
    }

    return (
        <AppBar position="static">
            <AppBarContext.Provider
                value={{
                    anchorElNav,
                    setAnchorElNav,
                    handleCloseNavMenu,
                    navToPage
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