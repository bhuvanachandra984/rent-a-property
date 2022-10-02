import React from "react";
import classes from './FavouriteButton.module.css'
function FavouriteButton(){

    const buttonSubmitted=(event)=>{
event.preventDefault();
    }
return(
    <React.Fragment>
    <form onSubmit={buttonSubmitted} className={classes.form} >
    <button className={classes.formButton}>Add</button>
</form>
</React.Fragment>
);
}
export default FavouriteButton;