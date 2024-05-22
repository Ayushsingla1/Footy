import { obj } from "../Components/data";
import PointsLeague from "../Components/PointsLeague";
function TableFormat(){
    return(
    <div className="w-full h-[100%] flex justify-center items-center bg-[#1E1E1E]">
        <div className="flex w-9/12 flex-wrap gap-x-[20px] gap-y-[25px] justify-center mt-[40px] mb-[40px]">
            {
                obj.map((league,index)=>{
                    return(<PointsLeague key={index} league={league}/>)
                })
            }
        </div>
    </div>
    )
}

export default TableFormat;