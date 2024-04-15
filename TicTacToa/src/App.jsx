import Board from "./components/Board";
import "./styles.scss";
import { useState } from "react";
import { calculateWinner } from "./components/winner";
import StatusMsg from "./components/StatusMsg";
import History from "./components/History";


const NEW_Game = [{ board:Array(9).fill(null), IsNext:true }];


function App(){

   
    const[history , setHistory] = useState(NEW_Game);
    const [currentMove , setCurrentMove] = useState(0);
;
   
    const current = history[currentMove];

    const { winner,winningSquares} = calculateWinner(current.board);

   
   const onclickHandler = (position) =>{
   
   if(current.board[position] || winner){
       return;
   }
   
   
   setHistory( prev =>{
      
      const isTraversing = currentMove + 1 !== prev.length;
      const lastGamingState = isTraversing ? prev[currentMove] : history[history.length - 1];

 
   const newBoard = lastGamingState.board.map((currentSqueares,pos)=>{
   
   if(position == pos){
       return lastGamingState.IsNext? "X":"O";
   }
   return currentSqueares;
   
   })

   
   const base = isTraversing  ? prev.slice(0, prev.indexOf(lastGamingState) + 1): prev;

 return base.concat({ board: newBoard, IsNext: !lastGamingState.IsNext,
 });

   })
 
   setCurrentMove(move => move + 1);
   
   };
   
   const moveTo = move =>{
      setCurrentMove(move);
   };

   const onNewGame = ()=>{
      setHistory(NEW_Game);
      setCurrentMove(0);
   }
   
return(
<div className="app">
   <h1>TIC <span className="text-green">TAC</span>TOE</h1>

   <StatusMsg winner = {winner} current ={current}/>
   <Board  board={current.board} onclickHandler={onclickHandler} winningSquares ={winningSquares}/>
   <button type="button" onClick={onNewGame} className={`btn-reset ${winner ? 'active':''}`}>Start New Game</button>
   <History history ={history} moveTo ={moveTo} currentMove ={currentMove} />
   <div className="bg-balls" />
</div>


)


}

export default App;