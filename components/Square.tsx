import Player from "@/app/player";

function Square({
    value, onClick, winner,
}:{
    value: Player;
    onClick: () => void;
    winner: Player;
}){
    if(!value){
        return <button className="square" onClick={onClick} disabled={Boolean(winner)}/>
    }
    return <button className={`square square_${value.toLocaleLowerCase()}`} disabled>
        {value}
        </button>
}

export default Square