import React from 'react';
import { Navbar } from '../Navbar';
import { makeStyles } from '@material-ui/core';
import Digits from '../../assets/images/james-wainscoat-yEW23jxVsNI-unsplash (1).jpg'


const useStyles = makeStyles({
    background: {
        backgroundImage: `linear-gradient(#233329,#63D471, white)`,
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
    chicken: {
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
            We carry the widest selection of cars imported from all over the world. <br></br>
            We have all your dreams cars available for purchase in our lots or we can arrange a custom order! <br></br>
            Chicken Tax - No more! <br></br>
            <img  className = {classes.chicken} src={Digits} alt= 'chicken'/>

            
            </div>
            </div>

            
        </div>
        </>
)}