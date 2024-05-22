import { obj } from "../Components/data";
import PastMatchesLeagueCard from "../Components/PastMatchesLeagueCard";

const PastMatches = () => {

    return (
    <div className="flex items-center justify-center w-full bg-[#1E1E1E]">
        <div className="flex justify-center items-center flex-wrap gap-5 mt-[50px] mb-[50px]">
                {
                    obj.map((league) => {
                        return(<div className="w-[500px] h-[400px]">
                            <PastMatchesLeagueCard key={league.id} league={league}/>
                            </div>
                        )
                    })
                }
        </div>    
    </div> );
}
 
export default PastMatches;