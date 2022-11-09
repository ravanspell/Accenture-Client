import React from 'react';
import { AppBar, Container, Toolbar } from '@material-ui/core';
import HeaderTitle from '../../molecules/HeaderTitle';
import HeaderMenu from '../../molecules/HeaderMenu';

const Header = () => {

    return (
        <AppBar position='static' color="inherit" style={{marginBottom: '30px'}}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <HeaderTitle />
                    <HeaderMenu />
                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default Header;
