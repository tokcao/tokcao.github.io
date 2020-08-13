import React from 'react'
import Particles from 'react-particles-js'
import { makeStyles } from '@material-ui/core/styles'
import Navbar from './Navbar'
import Header from './Header'

const useStyles = makeStyles({
    particlesCanva: {
        position: 'absolute',
        opacity: 0.5
    }
})

const Home = () => {
    const classes = useStyles();
    return (
        <>
            <Navbar />
            <Header />
            <Particles
                canvasClassName={classes.particlesCanva}
                params={{
                    particles: {
                        number: {
                            value: 100,
                            density: false
                        },
                        shape: {
                            type: 'circle',
                            stroke: {
                                width: 1,
                                color: '##FFFED0'
                            }
                        },
                        size: {
                            value: 4,
                            random: true,
                            anim: {
                                enable: true,
                                speed: 5,
                                size_min: 0.1,
                                sync: true
                            }
                        },
                        collisions: {
                            enable: true
                        },
                        line_linked: {
                            enable: true,
                            opacity: 0.4
                        },
                        move: {
                            speed: 1.5
                        },
                        opacity: {
                            value: 0.4,
                            random: true,
                            anim: {
                                enable: true,
                                opacity_min: 0.05,
                                speed: 1,
                                sync: true
                            }
                        }
                    },
                    interactivity: {
                        events: {
                            onhover: {
                                enable: true,
                                mode: 'repulse'
                            }
                        }
                    }
                }}
            />
        </>
    )
}

export default Home;
