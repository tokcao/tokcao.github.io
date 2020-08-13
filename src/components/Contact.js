import React, { useState } from 'react'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import { TextField, Typography, Button, Grid, Box } from '@material-ui/core'
import SendIcon from '@material-ui/icons/Send'
import Navbar from './Navbar'

const useStyles = makeStyles(theme => ({
    form: {
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        position: 'absolute'
    },
    button: {
        marginTop: '1rem',
        color: '#490307',
        borderColor: '#490307'
    }
}))

const InputField = withStyles({
    root: {
        '& label.Mui-focused': {
            color: '#FFFED0'
        },
        '& label': {
            color: '#FFFED0'
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: '#FFFED0'
            },
            '&:hover fieldset': {
                borderColor: '#FFFED0'
            },
            '&.Mui-focused fieldset': {
                borderColor: '#FFFED0'
            }
        }
    }
})(TextField);


const Contact = () => {

    const handleClick = () => {
        window.open(`mailto:tokcao@gmail.com?subject=New Career Opportunity!&body=${body}`)
    }

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [company, setCompany] = useState('')

    const body = `Hello Tianyu,%20%0A%20%0AThis is ${name}, and I am from ${company}%20%0A%20%0AMessage here...`

    const classes = useStyles();

    return (
        <Box component='div' >
            <Navbar />
            <Grid container justify='center'>
                <Box component='form' className={classes.form}>
                    <Typography variant='h5' style={{ color: '#301301', textAlign: 'center', textTransform: 'uppercase' }}>
                        Shoot me an email!
                    </Typography>
                    <InputField
                        fullWidth={true}
                        label='Name'
                        variant='outlined'
                        margin='dense'
                        size='medium'
                        inputProps={{ style: { color: '#FFFED0' } }}
                        name='name'
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                    <br />
                    <InputField
                        fullWidth={true}
                        label='Email'
                        variant='outlined'
                        margin='dense'
                        size='medium'
                        inputProps={{ style: { color: '#FFFED0' } }}
                        name='email'
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <br />
                    <InputField
                        fullWidth={true}
                        label='Company/Organization'
                        variant='outlined'
                        margin='dense'
                        size='medium'
                        inputProps={{ style: { color: '#FFFED0' } }}
                        name='company'
                        value={company}
                        onChange={e => setCompany(e.target.value)}
                    />
                    <br />
                    <Button
                        variant='outlined'
                        fullWidth={true}
                        endIcon={<SendIcon />}
                        className={classes.button}
                        onClick={handleClick}
                    >
                        Contact me
                    </Button>
                </Box>
            </Grid>
        </Box>
    )
}

export default Contact
