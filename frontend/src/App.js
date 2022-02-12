import './App.css';
import React, { useState } from "react";
import { Alert, Form, Button ,Spinner } from 'react-bootstrap';
import axios from 'axios';
import CardTable from './CardTable';
function App() 
{
 const [cardsData, setCardsData] = useState([]);
 const [err, setErr] = useState("");
 const [errBool, setErrBool] = useState(false);
 const [loading, setLoading] = useState(false);
 const [playerNumber, setPlayerNumber] = useState(0);
 const fetchCards = (event) => {
   event.preventDefault();
   setErrBool(false);
   setLoading(true);
     setErr('');
   axios
   .get(
     '/api?numberOfPlayers='+playerNumber
   )
   .then(response => {
     console.log(response.data);
     setCardsData(response.data);
     setLoading(false);
   })
   .catch(err => {
     console.log(err.response.data);
     setErr(err.response.data.error);
     setErrBool(true);
     setLoading(false);
   });
 }
const chagePlayerNumber = (event) => {
  event.preventDefault();
  setPlayerNumber(event.target.value)
}


  return (
    <div className="App">
    <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Enter Number of Players</Form.Label>
    <Form.Control type="number" placeholder="Player Number" value={playerNumber} onChange={chagePlayerNumber}  />
    <Form.Text className="text-muted">
     Must be valid number 
    </Form.Text>
  </Form.Group>

  
  <Button variant="primary" type="botton" onClick={fetchCards}>
    Shuffle Cards
  </Button>
</Form>
  {errBool && (
<Alert  variant="danger">
     {err} 
  </Alert>
  )}
  <Spinner animation="border" hidden={!loading} />
      <CardTable playerAndCards={cardsData}></CardTable>
    </div>
  );
}

export default App;
