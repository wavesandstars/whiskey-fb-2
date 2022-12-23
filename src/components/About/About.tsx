import React from 'react';
import { Navbar } from '../Navbar';
import { makeStyles } from '@material-ui/core';
import Digits from '../../assets/images/adam-jaime-dmkmrNptMpw-unsplash.jpg'


const useStyles = makeStyles({
    background: {
        backgroundImage: `linear-gradient(grey, white)`,
        width: '100%',
        height: '90%',
        backgroundPosition: 'center',
        position: 'absolute',
        zIndex: -1,
    },
    main_text: {
        textAlign: 'center',
        position: 'relative',
        top: '45%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        color: 'white',
        lineHeight: "24px",
    },
    drink: {
        width: '50%',
        marginTop: '50px'
        
    }
    
    
})

export const About = () => {
    const classes =useStyles()
    return (
        <>
        <div>
            <Navbar />
            <div className={`${classes.background}`}>
            <div className={classes.main_text}>
            World's #1 exporter of any whiskey you can imagine! <br></br>
            <img  className = {classes.drink} src={Digits} alt= 'drink'/>

            
            </div>
            </div>

            
        </div>
        </>
)}