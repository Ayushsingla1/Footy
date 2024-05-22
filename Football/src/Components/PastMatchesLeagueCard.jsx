import { Link } from "react-router-dom";

const PastMatchesLeagueCard = ({league}) => {
    return ( 
    <div className="text-white bg-[#89888C] flex flex-col justify-center items-center w-full h-full gap-y-4">
        
            <div>
                <img className="w-[280px] h-[240px]" src={league.Logo} alt={league.name}/>
            </div>
            <div className="text-3xl">
                <Link to={`/pastMatches/${league.id}`}>
                    {league.name}
                </Link>
            </div>
            <div className="text-2xl">
                Defending Champions: {league.Defending_Champions}
            </div>
    </div> 
    );
}
 
export default PastMatchesLeagueCard;