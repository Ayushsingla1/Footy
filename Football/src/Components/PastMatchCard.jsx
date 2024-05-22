import { useEffect, useState } from "react";

const PastMatchCard = ({match}) => {

    const [winner, setWinner] = useState('')
    const leftTeamScore = parseInt(match.event_final_result.split('-').at(0));
    const rightTeamScore = parseInt(match.event_final_result.split('-').at(-1));

    useEffect(() => {
        if(leftTeamScore > rightTeamScore){
            setWinner(match.event_home_team);
        }else if(leftTeamScore < rightTeamScore){
            setWinner(match.event_away_team);
        }else{
            setWinner('draw')
        }
    }, [leftTeamScore, rightTeamScore])

    return ( 
    <div className="w-full flex justify-center items-center rounded-md">
        <div className="flex items-center justify-between bg-[#373737] w-10/12 p-[10px] rounded-md">
            <div>
                <img src={match.home_team_logo} alt="Error Loading"/>
            </div>
            <div className="flex flex-col items-center justify-center gap-y-1 w-8/12">
                <div className="flex flex-col justify-center items-center gap-y-4">
                    <div className="flex gap-x-[10px]">
                        <span className=" text-center uppercase font-bold text-3xl text-red-600">{match.event_home_team}</span>
                        <span className=" text-center font-bold text-3xl">VS</span>
                        <span className=" text-center uppercase font-bold text-3xl text-blue-600">{match.event_away_team}</span>
                    </div>
                    <div className="uppercase font-extrabold text-2xl text-[#a9a9aa]">
                        <span>{match.league_name}</span>
                    </div>
                </div>
                <div className="flex justify-center items-center gap-x-10">
                    <div className="text-[50px] font-extrabold text-red-600">{match.event_final_result.split('-').at(0)}</div>
                    <div>
                        <div className="flex justify-center items-center flex-col text-xl text-gray-400">
                            <div>{match.event_date}</div>
                            <div>{match.event_time}</div>
                        </div>
                    </div>
                    <div className="text-[50px] font-extrabold text-blue-600">{match.event_final_result.split('-').at(-1)}</div>
                </div>
                <div className="text-white text-3xl font-extrabold uppercase">
                    winner : {winner}
                </div>
            </div>
            <div>
                <img src={match.away_team_logo} alt="Error Loading"/>
            </div>
        </div>
    </div>
     );
}
 
export default PastMatchCard;