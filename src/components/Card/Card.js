import React from 'react';
import classes from './Card.module.css';
import FavouriteButton from '../Header/FavouriteButton';

const Card = (props)=>{
    
    return(
        <div>
     
    <div className={classes.cards}>
              { props.details && props.details.length>0 ? props.details.map((value) =>(
                    <div className={classes.card} key={value.id}>
                    <div className={classes.cardimage} >
                        <img alt="description" src={value.img} />
                    </div>
                    <div>
                        <p className={classes.cardtitle}>{value.amount}</p>
                        <p className={classes.cardvalue}>{value.title}</p>
                        <p className={classes.cardtype}>{value.type}</p>
                    </div>
                    <FavouriteButton/>
                    </div>
                )
                ): <div className={classes.emptystatemessage}>No Data Found, continue clicking Search.</div>
        }
        </div>
    </div>
);
}

export default Card;