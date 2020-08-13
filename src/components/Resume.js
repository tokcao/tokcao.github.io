import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Typography, Box } from '@material-ui/core'
import Navbar from './Navbar'

// CSS Styles
const useStyles = makeStyles(theme => ({
    mainContainer: {
        background: '#EEE1B4'
    },
    timeLine: {
        position: 'relative',
        padding: '1rem',
        margin: '0 auto',
        '&:before': {
            content: '""',
            position: 'absolute',
            height: '100%',
            border: '1px solid #FFFED0',
            right: '40px',
            top: 0
        },
        '&:after': {
            content: '""',
            display: 'table',
            clear: 'both'
        },
        [theme.breakpoints.up('md')]: {
            padding: '2rem',
            '&:before': {
                left: 'calc(50% - 1px)',
                right: 'auto'
            }
        }
    },
    timeLineItem: {
        padding: '1rem',
        borderBottom: '2px solid #FFFED0',
        position: 'relative',
        margin: '1rem 3rem 1rem 1rem',
        clear: 'both',
        '&:after': {
            content: '""',
            position: 'absolute'
        },
        '&:before': {
            content: '""',
            position: 'absolute',
            right: '-0.625rem',
            top: 'calc(50% - 5px)',
            borderStyle: 'solid',
            borderColor: '#490307 #490307 transparent transparent',
            borderWidth: '0.625rem',
            transform: 'rotate(45deg)'
        },
        [theme.breakpoints.up('md')]: {
            width: '44%',
            margin: '1rem',
            '&:nth-of-type(2n)': {
                float: 'right',
                margin: '1rem',
                borderColor: '#FFFED0'
            },
            '&:nth-of-type(2n):before': {
                right: 'auto',
                left: '-0.625rem',
                borderColor: 'transparent transparent #490307 #490307'
            }
        }
    },
    timeLineYear: {
        textAlign: 'center',
        maxWidth: '9.375rem',
        margin: '0 3rem 0 auto',
        fontSize: '1.8rem',
        background: '#3C1321',
        color: 'white',
        lineHeight: 1,
        padding: '0.5rem 0 1rem',
        '&:before': {
            display: 'none'
        },
        [theme.breakpoints.up('md')]: {
            textAlign: 'center',
            margin: '0 auto',
            '&:nth-of-type(2n)': {
                float: 'none',
                margin: '0 auto'
            },
            '&:nth-of-type(2n):before': {
                display: 'none'
            }
        }
    },
    heading: {
        color: '#301301',
        padding: '3rem 0',
        textTransform: 'uppercase',
    },
    subHeading: {
        color: '#490307',
        paddint: '0',
        textTransform: 'uppercase'
    }
}))

const Resume = () => {
    const classes = useStyles();
    return (
        <>
            <Navbar />
            <Box component='header' className={classes.mainContainer}>
                <Typography variant='h4' align='center' className={classes.heading} >
                    Work Experience
                </Typography>
                <Box component='div' className={classes.timeLine}>
                    <Typography className={`${classes.timeLineYear} ${classes.timeLineItem}`} variant='h2'>
                        2019 Summer
                    </Typography>
                    <Box component='div' className={classes.timeLineItem} >
                        <Typography variant='h5' align='inherit' className={classes.subHeading} >
                            Software Engineer Intern
                        </Typography>
                        <Typography variant='body1' align='inherit' style={{ color: '#581D1C' }} >
                            Richgra Inc.
                        </Typography>
                        <Typography variant='subtitle1' align="inherit" style={{ color: '#490307' }} >
                            Implemented the custom responsive web UI components with <b>HTML5, CSS3, React.Js.</b><br />
                            Reimplemented backend architecture using <b>Node.js and RESTful APIs.</b><br />
                            Improved web page response time about 21% by applying <b>AJAX</b> to update partial page.<br />
                            Optimized frontend <b>DOM structure</b> and reduced about 40% of page load time.<br />
                            Designed data schema with <b>MySQL</b> database and reduced data redundancy for about 20%.
                        </Typography>
                    </Box>
                    <Typography className={`${classes.timeLineYear} ${classes.timeLineItem}`} variant='h2'>
                        2019 Spring
                    </Typography>
                    <Box component='div' className={classes.timeLineItem} >
                        <Typography variant='h5' align='inherit' className={classes.subHeading} >
                            Frontend Web Developer Intern
                        </Typography>
                        <Typography variant='body1' align='inherit' style={{ color: '#581D1C' }} >
                            SetPeth LLC.
                        </Typography>
                        <Typography variant='subtitle1' align="inherit" style={{ color: '#490307' }} >
                            Worked as co-leader frontend developer to improve the performance of the company website.<br />
                            Redesigned and rebuilt the structure of the web site as a single page Web App by using <b>React.Js.</b><br />
                            Improved about 50% of client-side by combining images into <b>CSS sprites</b> to
                            reduce HTTP requests, deploying <b>multiple CDNs</b> including <b>Amazon CloutFront</b> and <b>CloudFlare</b>,
                            and applying <b>pre-fetching</b> and <b>pre-rendering</b> techniques to reduce loading time.
                        </Typography>
                    </Box>
                    <Typography className={`${classes.timeLineYear} ${classes.timeLineItem}`} variant='h2'>
                        2018 Summer
                    </Typography>
                    <Box component='div' className={classes.timeLineItem} >
                        <Typography variant='h5' align='inherit' className={classes.subHeading} >
                            Software Engineer Intern
                        </Typography>
                        <Typography variant='body1' align='inherit' style={{ color: '#581D1C' }} >
                            Beijing YWSM Company
                        </Typography>
                        <Typography variant='subtitle1' align="inherit" style={{ color: '#490307' }} >
                            Added features on web-based Human Resources Management System (HRMS).<br/>
                            Designed and implemented easy-to-use signup and login system from scratch.<br/>
                            Techniques including <b>JavaScript ES6, Bootstrap, Spring Boot,</b> and <b>MongoDB.</b><br/>
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default Resume
