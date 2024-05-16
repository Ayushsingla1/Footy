import { obj } from "../Components/data";
import League_Card from "../Components/League_Card";
function Format(){
    return(
        <div>
            {
                obj.map((league,index)=>{
                    return <div key={index}>
                        <League_Card league={league}/>
                    </div>
                })
            }
        </div>
    )
}

export default Format;