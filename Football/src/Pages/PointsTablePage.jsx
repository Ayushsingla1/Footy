import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Card from "../Components/Card";
import Spinner from "../Components/Spinner";
function PointsTablePage(){
    console.log("helllo")
    const location = useLocation();
    const [data,setdata] = useState([]);
    const [loading,setloading] = useState([]);
    // const apiKey = process.env.REACT_APP_API_KEY;
    // const apiUrl = process.env.REACT_APP_API_URL;

    const apiKey =`a3e30b88137690edc2270cabb012c0400f8585227e222b3a6fe83764060c598d`
    const apiUrl =  `https://apiv2.allsportsapi.com/football/?&met=Standings`
    

    useEffect(()=>{
        async function fetchtable(){
            setloading(true);
            console.log(apiUrl+`&leagueId=${location.pathname.split('/').at(-1)}&APIkey=${apiKey}`);
            const data = await fetch(apiUrl+`&leagueId=${location.pathname.split('/').at(-1)}&APIkey=${apiKey}`);
            const finaldata = await data.json();
            setdata(finaldata.result.total);
            setloading(false);
        }
        fetchtable();
    },[apiKey,apiUrl,location.pathname]);
    console.log(data);
    return(

        loading ? (<div className="flex w-[100vw] h-[88vh] justify-center items-center"><Spinner/></div>) : (
        <div>
            <div className="flex justify-center">
                <div className="flex gap-3 w-[902px] h-[51px] justify-between items-end text-white">
                    <div></div>
                    <div className="flex gap-7 justify-items-end mr-3">
                        <div className="flex justify-center w-[20px]">M</div>
                        <div className="flex justify-center w-[20px]">W</div>
                        <div className="flex justify-center w-[20px]">L</div>
                        <div className="flex justify-center w-[20px]">D</div>
                        <div className="flex justify-center w-[20px]">P</div>
                    </div>
                </div>
            </div>
            <div className="pb-[30px] bg-[#1E1E1E]">
            {
                data.map((item,index)=>{
                    return <div key={index}>
                        <Card item={item} index={index}></Card>
                 </div>
                })
            }
            </div>
        </div>
        )
        
        
    )
}

export default PointsTablePage;