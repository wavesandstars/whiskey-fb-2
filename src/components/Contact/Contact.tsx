import React from 'react';
import { Navbar } from '../Navbar';
import { makeStyles } from '@material-ui/core';


const useStyles = makeStyles({
    background: {
        backgroundImage: `linear-gradient(grey, black)`,
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
       
        
        
       

    }
   
   
})

export const Contact = () => {
    const classes = useStyles()
    return (
        <>
        <div>
            <Navbar />
            <div className={`${classes.background}`}>
            <div className={classes.main_text}>
            <h1>Call us today or stop on by!</h1> <br></br>
            Find us at:  <br></br>
            123  Whiskey Rd<br></br>
            Beverage, USA <br></br>
            555-222-2233  <br></br>
            Our Phone Lines are open 24/7. Even on Holidays!
            </div>
            </div>

            
        </div>
        </>
    )
}