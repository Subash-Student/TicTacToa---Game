import Squre from "./Squre"

const Board = ()=>{

return  <div className="board">

<div className="board-row">
    <Squre value = {0}/>
    <Squre value = {1}/>
    <Squre value = {2}/>
</div>
<div className="board-row">
    <Squre value = {3}/>
    <Squre value = {4} />
    <Squre value = {5}/>
</div>
<div className="board-row">
    <Squre value = {6}/>
    <Squre value = {7}/>
    <Squre value = {8}/>
</div>



</div>

}

export default Board;