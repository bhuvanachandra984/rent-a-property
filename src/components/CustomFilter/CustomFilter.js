import React, { useState } from 'react';
import classes from './CustomFilter.module.css';
import CardData from '../../data/CardData';
import { useEffect } from 'react';
import Card from '../Card/Card';
import CustomFilterSummary from './CustomFilterSummary';
function CustomFilter (props){

const [homeData,setHomeData] = useState([]);
const [searchHomeData,setSearchHomeData] = useState([]);
const [title,setTitle]=useState('');
const [amount,setAmount]=useState('');
const [type,setType]=useState('');
const [date,setDate]=useState('');

    useEffect(()=>(
        // eslint-disable-next-line
        CardData,
        setHomeData(CardData),
        setSearchHomeData(CardData)
    ),[])

    const searchSubmitted =(event)=>{
        event.preventDefault();
        const newData=
        homeData.filter(val=> val.title ===(title ==='' ? val.title : title)) 
        .filter(val=> val.type ===(type ==='' ? val.type : type));
        setSearchHomeData(newData);
        setTitle('');
        setAmount('');
        setType('');
        setDate('');

    }


    const locationEntered =(event)=>{
        setTitle(event.target.value);
    }

    const amountEntered =(event)=>{
        setAmount(event.target.value);
    }

    const typeEntered =(event)=>{
        setType(event.target.value);
    }
    const dateEntered =(event)=>{
        setDate(event.target.value);
    }

    return(
        <div>
               <div >
        <CustomFilterSummary/>
</div>
        <form onSubmit={searchSubmitted}>
        <div >
             <span><input value={title} className={classes.search} type="text" placeholder="Search Location" onChange={locationEntered} /></span>&nbsp;
            <span ><select onChange={amountEntered} value={amount} className={classes.search}>
            <option value="Select Amount" >--Select Amount--</option>
        <option value="1000-2000">1000-2000</option>
        <option value="2000-5000">2000-5000</option>
        <option value="5000-10000">5000-10000</option>
        <option value="10000-15000">10000-15000</option>
      </select></span>&nbsp;
      <span><select onChange={typeEntered}  value={type}className={classes.search}>
            <option value="Select Type" >--Select Type--</option>
        <option value="house">House</option>
        <option value="villa">Villa</option>
      </select></span>&nbsp; 
      <span >
         <input className={classes.search} value={date} type='date' onChange={dateEntered}/></span> &nbsp;
       <span> <button className={classes.button}>Search</button></span>
        </div>
        </form>
        <div><Card details={searchHomeData}/>
</div>
</div>
);

}
export default CustomFilter