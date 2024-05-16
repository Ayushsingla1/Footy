import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Card from "../Components/Card";
import Spinner from "../Components/Spinner";
function Table(){
    console.log("helllo")
    const location = useLocation();
    const [data,setdata] = useState([]);
    const [loading,setloading] = useState([]);
    const apiKey = process.env.REACT_APP_API_KEY;
    const apiUrl = process.env.REACT_APP_API_URL;

    useEffect(()=>{
        setloading(true);
        async function fetchtable(){
            console.log(apiUrl+`&leagueId=${location.pathname.split('/').at(-1)}&APIkey=${apiKey}`);
            const data = await fetch(apiUrl+`&leagueId=${location.pathname.split('/').at(-1)}&APIkey=${apiKey}`);
            const finaldata = await data.json();
            setdata(finaldata.result.total);
        }
        fetchtable();
        setloading(false);
    },[apiKey,apiUrl,location.pathname]);
    console.log(data);
    return(

        loading ? (<div className="flex w-[100vw] h-[90vh] justify-center items-center"><Spinner/></div>) : (
            <div>
            <div className="flex justify-center">
            <div className="flex gap-3 w-[902px] h-[51px] justify-between">
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
            <div>
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

export default Table;