import { NavLink } from "react-router-dom";

function PointsTable_League_Card({league}){
    return(
        <div className="flex flex-col w-3/12 bg-gray-200 items-center justify-center">
            <div><img src={league.Logo}></img></div>
            <div><NavLink to={`/pointsTable/${league.id}`}>{league.name}</NavLink></div>
            <div>`About : ${league.About}`</div>
            <div>Defending Champions : {league.Defending_Champions}</div>
        </div>
    )
}
export default PointsTable_League_Card;