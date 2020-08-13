import React from 'react'
import Navbar from './Navbar'
import { makeStyles } from '@material-ui/core/styles'
import { Box, Grid, Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core'
import project1 from '../images/to_do_list.jpg_fit=scale'
import project2 from '../images/mobile_shopping.png'
import project3 from '../images/star_bucks.jpg'

const useStyles = makeStyles({
    mainContainer: {
        background: '#EEE1B4',
        height: '100%'
    },
    cardContainer: {
        maxWidth: 345,
        margin: '3rem  auto'
    }
})

const handleClick = () => {
    window.open('https://net-ninja-marioplan-8066f.web.app/');
}

const Project = () => {
    const classes = useStyles();
    return (
        <Box component='div' className={classes.mainContainer}>
            <Navbar />
            <Grid container justify='center'>
                {/* Project 1 */}
                <Grid item xs={12} sm={8} md={6} >
                    <Card className={classes.cardContainer}>
                        <CardActionArea>
                            <CardMedia
                                component='img'
                                alt='Project 1'
                                height='140'
                                image={project1}
                            />
                            <CardContent>
                                <Typography gutterBottom variant='h5'>
                                    Real-Time To-Do-List Web App
                                    </Typography>
                                <Typography variant='body2' color='textSecondary' compnent='p'>
                                    Built a web-based to-do-list app with real-time database and cross-browser support.<br />
                                    Implemented with <b>React.Js/Redux</b> for responsive UI and reduced rendering time for 30%.<br />
                                    Designed backend logic and architecture with <b>Node.js</b> and <b>Express</b> to handle requests from client.<br />
                                    Connected with <b>Google Firebase (NoSQL)</b> database for data storage and usage to achieve real-time update and offline back-up.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                            <CardActions>
                                <Button size='small' color='primary'>
                                    Share
                                </Button>
                                <Button size='small' color='primary' onClick={handleClick}>
                                    Live Demo
                                </Button>
                            </CardActions>
                    </Card>
                </Grid>
                {/* Project 2 */}
                <Grid item xs={12} sm={8} md={6} >
                    <Card className={classes.cardContainer}>
                        <CardActionArea>
                            <CardMedia
                                component='img'
                                alt='Project 2'
                                height='140'
                                image={project2}
                            />
                            <CardContent>
                                <Typography gutterBottom variant='h5'>
                                    Android Online Shopping App
                                </Typography>
                                <Typography variant='body2' color='textSecondary' compnent='p'>
                                    Implemented an android app for users to browse and purchase products from campus bookstore.<br />
                                    Built <b>responsive UI</b> and rich features (<b>Action Bar, Navigation Drawer, Dialog, Toast, GridView</b>).<br />
                                    Utilized <b>Location Services</b> and <b>Google Map SDK</b> to obtain and display user’s geographical data.<br />
                                    Integrated <b>SQLite</b> database to improve data processing speed for 26%.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                {/* Project 3 */}
                <Grid item xs={12} sm={8} md={6} >
                    <Card className={classes.cardContainer}>
                        <CardActionArea>
                            <CardMedia
                                component='img'
                                alt='Project 3'
                                height='140'
                                image={project3}
                            />
                            <CardContent>
                                <Typography gutterBottom variant='h5'>
                                    Starbucks Mockup Mobile Application
                                </Typography>
                                <Typography variant='body2' color='textSecondary' compnent='p'>
                                    Developed existing code with optimization by <b>Java</b>.<br/>
                                    Applied several <b>Design Patterns</b> in Java to make the mockup app easier to understand for users.<br/>
                                    Design Patterns usage: Singleton, Proxy, Decorator, Template, Strategy, State.<br/>
                                    Designed <b>Unit/Integration/Functional Tests</b> and proactively fixed 17 critical bugs.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Project
