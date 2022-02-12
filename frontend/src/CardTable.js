import React from "react";
import { Table } from "react-bootstrap";
import Cards from './Cards'
const CardTable = props => {
 let keys = ["Player", "Cards"];
 const { playerAndCards } = props;
 
 return (
   <div style={{ width: "90%", margin: "0 auto" }}>
     <h2 style={{textAlign: "center", margin: "20px auto auto"}}> Distribution of cards:  { new Date(Date.now()).toLocaleDateString()}</h2>
 
     <Table
       variant="default"
       style={{ width: "100%", margin: "20px auto" }}
       striped
       bordered
       responsive
     >
 
       <thead>
         <tr>
           {keys.map(heading => {
             return <td key={heading}>{heading}</td>;
           })}
         </tr>
       </thead>
       <tbody>
         {playerAndCards.map((cards, index) => {
           return (
             <tr key={index}>
               <td>Player # {index+1}</td>
               <td> <Cards MyCards={cards}/></td>
             </tr>
           );
         })}
       </tbody>
     </Table>
   </div>
 );
};
 
export default CardTable;