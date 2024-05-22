import { useLocation } from "react-router-dom";
import { useState,useEffect } from "react";
import Spinner from "./Spinner";
import PastMatchCard from "./PastMatchCard";

const PastMatchesCards = () => {

    const location = useLocation();
    const [matches, setMatches] = useState([]);


    const league_key = parseInt(location.pathname.split('/').at(-1));

    const [loading, setLoading] = useState(false);
    const [pastMatchesUnfiltered, setPastMatchesUnfiltered] = useState([]);
    const baseUrl = `https://apiv2.allsportsapi.com/football/`
    const apiKey = `a3e30b88137690edc2270cabb012c0400f8585227e222b3a6fe83764060c598d`;
    const d = new Date();
    const month  = d.getMonth();
    const day = d.getDate();
    const year = d.getFullYear();
    const yesterday = `${year}-${month+1}-${day-1}`;
    let exp = `${year}-${month+1}-${day-3}`
    const url = `${baseUrl}?met=Fixtures&APIkey=${apiKey}&from=${exp}&to=${yesterday}`

    useEffect(() => {
        const fetchLiveLeagues = async () => {
            setLoading(true);
            try {
                const res = await fetch(url);
                const output = await res.json();
                setPastMatchesUnfiltered(output.result)
                setMatches( pastMatchesUnfiltered.filter((match) => (match.league_key === league_key)).map(match => match) )
    
            } catch (error) {
                console.log('fetchLiveLeages unsuccessful')
                setPastMatchesUnfiltered([]);
            }
            setLoading(false); 
        }
        fetchLiveLeagues();
    }, [url]) 

    useEffect(() => {
        setMatches( pastMatchesUnfiltered.filter((match) => (match.league_key === league_key)).map(match => match) )
    }, [loading, league_key, pastMatchesUnfiltered])

    console.log(matches)
    
    return ( <div className="flex justify-center items-center w-full bg-[#1E1E1E] pb-[60px]">
        {
            loading ? (<div className="flex w-[100vw] h-[88vh] justify-center items-center"><Spinner/></div>):
            ( <div className="bg-[#89888C] w-9/12 mt-[50px] min-h-[80vh] flex justify-center items-center flex-col gap-y-[20px] rounded-sm pt-[50px] pb-[50px]">               
               { 
                matches.length === 0 ? (<h1 className="text-white">No matches in the past 2 days</h1>):   
                    (
                        matches.map((match) => {
                            return(
                                <PastMatchCard key={match.event_key} match={match}/>
                            )
                        })
                    )
                }
            </div>
            )
        }
    </div> );
}
 
export default PastMatchesCards;