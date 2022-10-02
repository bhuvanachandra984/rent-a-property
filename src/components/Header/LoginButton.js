import React from 'react';
import classes from './LoginButton.module.css'
function LoginButton (){
return(
    <React.Fragment>
    <button className={classes.button}>Login</button>
    </React.Fragment>
);

}
export default LoginButton;