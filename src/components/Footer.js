import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core'
import LinkedIn from '@material-ui/icons/LinkedIn'

const useStyles = makeStyles({
    root: {
        '& .MuiBottomNavigationAction-root': {
            minWidth: 0,
            maxWidth: 250
        },
        '& .MuiSvgIcon-root': {
            fill: '#F6AD7B',
            '&:hover': {
                fill: '#490307',
                fontSize: '1.8rem'
            }
        }
    }
})

const handleClick = () => {
    window.open('https://www.linkedin.com/in/tianyu-cao-5105169972/');
}

const Footer = () => {

    const classes = useStyles();

    return (
        <BottomNavigation width='auto' style={{ background: '#FFFED0' }}>
            <BottomNavigationAction
                onClick={handleClick}
                style={{ padding: 0 }}
                icon={<LinkedIn />}
                className={classes.root}
            />
        </BottomNavigation>
    )
}

export default Footer
