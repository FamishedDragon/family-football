import * as React from 'react';
import Typography from '@mui/material/Typography';
import PropTypes from "prop-types";

const BrowserLogo = ({ logo }) => (
    <Typography
        variant="h6"
        noWrap
        component="div"
        sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
    >
        {logo}
    </Typography>
);

BrowserLogo.propTypes = {
    logo: PropTypes.string,
};

export default BrowserLogo;