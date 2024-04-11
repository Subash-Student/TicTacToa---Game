import Square from "./Square";


const Board = ({squares,onclickHandler})=>{

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