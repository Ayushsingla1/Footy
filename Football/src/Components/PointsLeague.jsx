import { NavLink } from "react-router-dom";

function PointsLeague({league}){
    return(
        <div className="flex flex-col w-3/12 bg-gray-200 items-center justify-between px-4 gap-y-2">
            <div><img src={league.Logo} alt="Error Loading" className=" h-56"></img></div>
            <div className="font-semibold text-xl"><NavLink to={`/pointsTable/${league.id}`}>{league.name}</NavLink></div>
            <div className="text-justify">About : {league.About}</div>
            <div className="self-start font-semibold">Defending Champions : {league.Defending_Champions}</div>
        </div>
    )
}
export default PointsLeague;