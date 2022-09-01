import React, { useContext } from 'react';
import { Button, Navbar, NavItem } from "react-materialize"
import { Link } from 'react-router-dom';
import { AuthContext } from '../../App';

const MyNavbar = () => {
    const { logout, isAuth } = useContext(AuthContext)
    return (
        <Navbar
            className="teal"
            alignLinks="right"
            brand={<Link className="brand-logo" to="/">Todo</Link>}
            id="mobile-nav"
            // menuIcon={<Icon>menu</Icon>}
            options={{
                draggable: true,
                edge: 'left',
                inDuration: 250,
                onCloseEnd: null,
                onCloseStart: null,
                onOpenEnd: null,
                onOpenStart: null,
                outDuration: 200,
                preventScrolling: true
            }}>
            <div className="container">

                <Button onClick={logout}>Выйти</Button>


            </div>
        </Navbar>
    );
}

export default MyNavbar;
