const LiveCard = ({match}) => {
    return ( 
        <div className="w-full flex justify-center items-center">
            <div className="flex items-center justify-between bg-[#373737] w-10/12 p-[10px] rounded-md">
                <div>
                    <img src={match.home_team_logo}/>
                </div>
                <div className="flex flex-col items-center justify-center gap-y-4 w-8/12">
                    <div className="flex gap-x-[10px]">
                        <span className=" text-center uppercase font-bold text-3xl text-red-600">{match.event_home_team}</span>
                        <span className=" text-center font-bold text-3xl">VS</span>
                        <span className=" text-center uppercase font-bold text-3xl text-blue-600">{match.event_away_team}</span>
                    </div>
                    <div>
                        <span>Match No</span>
                        
                    </div>
                    <div className="uppercase font-bold text-2xl">
                        <span>{match.league_name}</span>
                    </div>
                    <div><span>{match.event_status}</span></div>
                </div>
                <div>
                    <img src={match.away_team_logo}/>
                </div>
            </div>
        </div>
     );
}
 
export default LiveCard;