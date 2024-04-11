import Square from "./Square";
import { useState } from "react";

const Board = ()=>{

const [squares , setSqueares] = useState(Array(9).fill(null));

const onclickHandler = (position) =>{
setSqueares(currentSqueares=>{

return currentSqueares.map((currentSqueares,pos)=>{

if(position == pos){
    return "X";
}
return currentSqueares;

})

})



}






const renderOnclick = (position)=>{

    return  <Square 
            value={squares[position]}
            onClick = {()=> onclickHandler(position)} 
            />
}



return  <div className="board">

<div className="board-row">
    {renderOnclick(0)}
    {renderOnclick(1)}
    {renderOnclick(2)}
   
</div>
<div className="board-row">
    {renderOnclick(3)}
    {renderOnclick(4)}
    {renderOnclick(5)}
</div>
<div className="board-row">
    {renderOnclick(6)}
    {renderOnclick(7)}
    {renderOnclick(8)}
</div>
</div>

}

export default Board;