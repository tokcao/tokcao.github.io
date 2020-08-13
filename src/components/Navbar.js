import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import MobileLeftMenuSlider from '@material-ui/core/Drawer'
import { AppBar, Toolbar, ListItem, IconButton, ListItemText, Avatar, Divider, List, Typography, Box, ListItemIcon } from '@material-ui/core'
import { AssignmentInd, Home, Apps, ContactMail } from '@material-ui/icons'
import avatar from '../avatar.jpeg'
import Footer from './Footer'
import Menu from '@material-ui/icons/Menu'

// CSS Styles
const useStyles = makeStyles(theme => ({
    menuSliderContainer: {
        width: 250,
        background: '#490307',
        height: '100%'
    },
    avatar: {
        display: 'block',
        margin: '0.5rem auto',
        width: theme.spacing(13),
        height: theme.spacing(13)
    },
    menuItem: {
        color: '#FFFED0'
    }
}))

const menuItems = [
    {
        listIcon: <Home />,
        listText: 'Home',
        listPath: '/'
    },
    {
        listIcon: <AssignmentInd />,
        listText: 'Resume',
        listPath: '/resume'
    },
    {
        listIcon: <Apps />,
        listText: 'Project ',
        listPath: '/project'
    },
    {
        listIcon: <ContactMail />,
        listText: 'Contact',
        listPath: '/contact'
    }
]

const Navbar = () => {

    const [state, setState] = useState({
        left: false
    });

    const toggleSlider = ((slider, open) => () => {
        setState({ ...state, [slider]: open });
    });

    const classes = useStyles();

    const sideList = slider => (
        <Box
            className={classes.menuSliderContainer}
            component='div'
            onClick={toggleSlider(slider, false)}
        >
            <Avatar className={classes.avatar} src={avatar} alt='Tianyu Cao' />
            <Divider />
            <List>
                {menuItems.map((menuItem, key) => (
                    <ListItem button key={key} component={Link} to={menuItem.listPath} >
                        <ListItemIcon className={classes.menuItem}>{menuItem.listIcon}</ListItemIcon>
                        <ListItemText className={classes.menuItem} primary={menuItem.listText} />
                    </ListItem>
                ))}
            </List>
        </Box>
    )
    return (
        <>
            <Box component='nav'>
                <AppBar position='static' style={{ background: '#490307' }}>
                    <Toolbar>
                        <IconButton onClick={toggleSlider('left', true)}>
                            <Menu style={{ color: '#FFFED0' }} />
                        </IconButton>
                        <Typography variant='h5' style={{ color: '#FFFED0' }}>
                            Portfolio
                        </Typography>
                        <MobileLeftMenuSlider
                            open={state.left}
                            onClose={toggleSlider('left', false)}
                        >
                            {sideList('left')}
                            <Footer />
                        </MobileLeftMenuSlider>
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    )
}

export default Navbar;
