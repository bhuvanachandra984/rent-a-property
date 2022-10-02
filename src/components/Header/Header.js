import React from 'react';
import classes from './Header.module.css';
import LoginButton from './LoginButton';
import houseImage from '../../assets/house.jpeg'
import Favourites from './Favourites';
function Header(){
    return(
        <React.Fragment>
        <header className={classes.header}>
            <h1>RentProperty</h1>
            <LoginButton/>
            <Favourites/>
        </header>
        <div className={classes['main-image']}>
            <img src={houseImage} alt="A Home"/>
        </div>
        </React.Fragment>
    );
}

export default Header;