import React from "react";
import  SingleCard   from "./SingleCard";
 
const Cards = props => {

 const { MyCards } = props;
 
 return (
   
       <>
           {MyCards.map((card,i) => {
             return <SingleCard MyCard={card} index={i} key={i} />;
           })} 
      </>
 );
};  
 
export default Cards;