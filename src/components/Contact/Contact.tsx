import React from 'react';
import { Navbar } from '../Navbar';
import { makeStyles } from '@material-ui/core';


const useStyles = makeStyles({
    background: {
        backgroundImage: `linear-gradient(#233329,#63D471, black)`,
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
            <h1>We're here for you</h1> <br></br>
            Find us at:  <br></br>
            123 Hana Hwy<br></br>
            Car City, USA <br></br>
            555-555-5555  <br></br>
            Our Phone Lines are open 24/7. Even on Holidays!
            </div>
            </div>

            
        </div>
        </>
    )
}