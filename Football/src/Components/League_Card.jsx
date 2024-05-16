import { NavLink } from "react-router-dom";

function League_Card({league}){
    return(
        <div>
            <div><img src={league.Logo}></img></div>
            <div><NavLink to={`/pointsTable/${league.id}`}>{league.name}</NavLink></div>
            <div>`About : ${league.About}`</div>
            <div>Defending Champions : {league.Defending_Champions}</div>
        </div>
    )
}
export default League_Card;