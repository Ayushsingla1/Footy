import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import StatsCard from "../Components/Statscard";
import Spinner from "../Components/Spinner"

const Stats =()=>{
    const location = useLocation();
    const Match_id = location.pathname.split('/').at(-1);
    const baseUrl = `https://apiv2.allsportsapi.com/football/`
    const apiKey = `a3e30b88137690edc2270cabb012c0400f8585227e222b3a6fe83764060c598d`;
    const url = `${baseUrl}?met=Livescore&APIkey=${apiKey}&matchId=${Match_id}`
    const [data,setdata] = useState([]);
    const [loading , setloading]  = useState(false);
    const [allinfo, setAllInfo] = useState({
        league_name: '',
        event_stadium: '',
        country_name: '',
        home_team_logo: '',
        away_team_logo: '',
        event_home_team: '',
        event_away_team: '',
        event_status: '',
        event_final_result: '',
    });

    
    
    useEffect(()=>{
        setloading(true);
        async function fetchdata(){
            try{
                const data = await fetch(url);
                const finaldata = await data.json();
                console.log(finaldata)
                let arr = [];
                arr.push(...finaldata.result[0].lineups.away_team.starting_lineups);
                arr.push(...finaldata.result[0].lineups.home_team.starting_lineups);
                setdata(arr);
                setAllInfo(finaldata.result[0]);
            }
            catch{
                console.error("Failed to load")
            }
            setloading(false);
        }
        fetchdata();
        
    },[Match_id,url])


    return(

        loading ? (<div className="flex w-[100vw] h-[80vh] justify-center items-center"><Spinner/></div>) : (
            <div className="flex w-[100vw] items-center flex-col max-h-full">
            <div>{allinfo.league_name}</div>
            <div>Stadium : {allinfo.event_stadium} , {allinfo.country_name}</div>
            <div className="flex">
                <div><img src={allinfo.away_team_logo} alt = "Error Loading"></img></div>
                <div><img src={allinfo.home_team_logo} alt = "Error Loading"></img></div>
            </div>
            <div className="flex gap-2">
                <div>{allinfo.event_away_team}</div>
                <div>:</div>
                <div>{allinfo.event_home_team}</div>
            </div>
            <div>TimeStamp : {allinfo.event_status}</div>
            <div><h1>{allinfo.event_final_result}</h1></div>
            <div><h2>STARTING XI</h2></div>
            <div className="flex justify-between">
            <div className="grid grid-rows-11 grid-cols-2 grid-flow-col gap-y-3 gap-x-20">
            {
                data.map((player,index)=>{
                     return <div key={index}><StatsCard player={player}/></div>
                })
            }
        </div>
        </div>
        </div>
        )
    )
}

export default Stats;
