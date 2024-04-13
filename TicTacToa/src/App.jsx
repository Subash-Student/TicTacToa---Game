import Board from "./components/Board";
import "./styles.scss";
import { useState } from "react";
import { calculateWinner } from "./components/winner";
import StatusMsg from "./components/StatusMsg";

function App(){
   const [squares , setSqueares] = useState(Array(9).fill(null));
   const [IsNext , setIsNext] = useState(false);
   

   const winner = calculateWinner(squares);
   

   const onclickHandler = (position) =>{
   
   if(squares[position] || winner){
       return;
   }
   
   
   setSqueares((currentSqueares)=>{
   
   return currentSqueares.map((currentSqueares,pos)=>{
   
   if(position == pos){
       return IsNext? "X":"O";
   }
   return currentSqueares;
   
   })
   });
   setIsNext(currentIsNext => !currentIsNext)
   
   
   };



return(
<div className="app">
   <StatusMsg winner = {winner} IsNext = {IsNext} squares={squares} />
   <Board  squares={squares} onclickHandler={onclickHandler}/>
</div>


)


}

export default App;