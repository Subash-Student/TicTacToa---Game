const StatusMsg = ({winner ,IsNext , squares})=>{

    const nextPlayer = IsNext? "X":"O";
    const noMoveLeft = squares.every(currentSqueares => currentSqueares != null);

    const renderStatusMsg =()=>{

   if(winner){

      return <div>Winner Is <span className={winner ? "text-green":"text-orange"}>{winner}</span></div>

   }
   if(!winner && noMoveLeft){
  
      return <div><span className="text-orange">X</span> And <span className="text-green">O</span> Tied</div>

   }
  if(!winner){
      
      return <div>Next Player Is <span className={IsNext ? "text-orange" : "text-green"}>{nextPlayer}</span></div>

  }

    }

return <div className="status-message">{renderStatusMsg()}</div>

}

export default StatusMsg;