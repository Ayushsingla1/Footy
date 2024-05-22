import { useEffect, useState } from "react";
import { mainLeaguesArray } from "../Components/data";
import FixtureCard from "../Components/FixtureCard";
import Spinner from "../Components/Spinner";

const FixturePage = () => {
    const [loading, setLoading] = useState(false);
    const [availableLiveLeagues, setAvailableLiveLeagues] = useState([]);
    const baseUrl = `https://apiv2.allsportsapi.com/football/`
    const apiKey = `a3e30b88137690edc2270cabb012c0400f8585227e222b3a6fe83764060c598d`;
    const d = new Date();
    const month  = d.getMonth();
    const day = d.getDate();
    const year = d.getFullYear();
    const today = `${year}-${month+1}-${day}`;
    const exp = `${year}-${month+1}-${day+3}`;

    const url = `${baseUrl}?met=Fixtures&APIkey=${apiKey}&from=${today}&to=${exp}`
    console.log(url);

    useEffect(() => {
        const fetchLiveLeagues = async () => {
            setLoading(true);
            try {
                const res = await fetch(url);
                const output = await res.json();
                setAvailableLiveLeagues(output.result);
    
            } catch (error) {
                console.log('fetchLiveLeages unsuccessful')
                setAvailableLiveLeagues([]);
            }
            setLoading(false);
        }
        fetchLiveLeagues();
    }, [url])  

    return ( 
    <div className="text-white w-full flex justify-center items-center mt-[50px] pb-[50px] bg-[#1E1E1E]">
        {
            loading? (<div className="flex w-[100vw] h-[88vh] justify-center items-center"><Spinner/></div>):
            (
                <div className="flex flex-col w-10/12 justify-center gap-y-5 items-center gap-x-5 bg-[#89888C] py-[20px] min-h-[80vh]">
                 {availableLiveLeagues.filter((match) => mainLeaguesArray.includes(match.league_key)).map((match) => (
            <FixtureCard key={match.event_key} match={match} />
          ))}
                </div>
            )
        }
    </div> 
    );
}
 
export default FixturePage;