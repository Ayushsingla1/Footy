import { obj } from "../Components/data";
import PointsTable_League_Card from "../Components/PointsTable_League_Card";
function TableFormat(){
    return(
    <div className="w-full h-[100%] flex justify-center items-center bg-[#1E1E1E]">
        <div className="flex w-9/12 flex-wrap gap-x-[20px] gap-y-[25px] justify-center mt-[40px] mb-[40px]">
            {
                obj.map((league,index)=>{
                    return(<PointsTable_League_Card key={index} league={league}/>)
                })
            }
        </div>
    </div>
    )
}

export default TableFormat;