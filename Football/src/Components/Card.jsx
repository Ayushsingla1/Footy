
function Card({item,index}){
    return(
        <div className="flex justify-center mt-4"> 
            <div className="flex justify-between gap-3 w-[902px] h-[51px] bg-siu rounded">
                <div className="flex gap-10 items-center px-5">
                    <div className="flex gap-x-6">
                        <div className="flex justify-center w-[20px] items-center">{index+1}</div>
                        <div className="border border-white w-0 h-[25px] rounded"></div>
                    </div>
                    <div><img className="h-[30px]" src={item.team_logo} alt="Error"/></div>
                    <div className="flex text-white font-extrabold items-center">{item.standing_team}</div>
                </div>

                <div className="flex justify-between gap-7 mr-3 items-center">
                    <div className="flex justify-center w-[20px] items-center">{item.standing_P}</div>
                    <div className="flex justify-center w-[20px] items-center">{item.standing_W}</div>
                    <div className="flex justify-center w-[20px] items-center">{item.standing_L}</div>
                    <div className="flex justify-center w-[20px] items-center">{item.standing_D}</div>
                    <div className="flex justify-center w-[20px] items-center">{item.standing_PTS}</div>
                </div>
            </div>
        </div>
    )
}

export default Card;