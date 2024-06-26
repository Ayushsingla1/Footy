import { useEffect, useState } from "react";
import { mainLeaguesArray } from "../Components/data";
import LiveCard from "../Components/LIveCard";
import Spinner from "../Components/Spinner";

const LiveFormat = () => {
    const [loading, setLoading] = useState(false);
    const [, setLiveLeagues] = useState([]);
    const [availableLiveLeagues, setAvailableLiveLeagues] = useState([]);
    const baseUrl = `https://apiv2.allsportsapi.com/football/`
    const apiKey = `a3e30b88137690edc2270cabb012c0400f8585227e222b3a6fe83764060c598d`;


    const url = `${baseUrl}?met=Livescore&APIkey=${apiKey}`

    useEffect(() => {
        const fetchLiveLeagues = async () => {
            setLoading(true);
            try {
                const res = await fetch(url);
                const output = await res.json();
                if(output.result){
                    setAvailableLiveLeagues(output.result);
                }
                else{
                    console.log("Abhi koi match nhi hai")
                    setAvailableLiveLeagues([]);
                }
                console.log(availableLiveLeagues)
            } catch (error) {
                console.log('fetchLiveLeages unsuccessful')
                setLiveLeagues([]);
            }
            setLoading(false);
        }
        fetchLiveLeagues();
    }, [url])  

    return ( 
    <div className="text-white w-full flex justify-center items-center mt-[50px] pb-[50px] bg-[#1E1E1E]">
        {
            loading? (<div className="flex w-[100vw] h-[88vh] justify-center items-center"><Spinner/></div>):
            ( availableLiveLeagues.length===0 ? (<h1 className="flex text-red-500">No Live Matches</h1>) : (
                <div className="flex flex-col w-10/12 justify-center gap-y-5 items-center gap-x-5 bg-[#89888C] py-[20px] min-h-[80vh]">
                 {availableLiveLeagues.filter((match) => mainLeaguesArray.includes(match.league_key)).map((match) => (
            <LiveCard key={match.event_key} match={match} />
          ))}
                </div>
            )
                
            )
        }
    </div> 
    );
}
 
export default LiveFormat;