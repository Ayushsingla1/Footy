import { useState } from "react";

const ContactPage = () => {

    const [info,setinfo] = useState({
        name : "",
        email : "",
        message : ""
    })

    const dataHandler = (event)=>{
        const {name , value} = event.target;
        setinfo((prev)=>({
            ...prev,
            [name] : value
        }))
    }
    const subHandler = async(event)=>{
        event.preventDefault();
        const {name,email,message} = info;

        const res = await fetch('/api/submit',{
            method : "POST",
            headers : {
                "Content-Type" : "application/json",
            },
            body : JSON.stringify({
                name,email,message
            })
        })

        const data = await res.json();
        console.log(data);
    }
    return ( 
        <div className="flex flex-col justify-evenly items-center h-[80vh]">
            <div className="flex justify-center text-4xl pt-5 text-slate-100">CONTACT US</div>
            <div className="flex justify-center items-center">
                <div className="w-[100vw] flex justify-center">
                    <div className="w-[70vw] h-full">
                    <form  method="POST" className="flex justify-center flex-col items-center gap-y-20">
                        <div className="flex justify-between w-full items-center">
                        <label className="text-2xl text-slate-100" htmlFor="name">NAME :</label>
                        <input className="h-[70px] w-[977px] rounded-lg text-2xl pl-6 bg-siu"  type="text" placeholder="Enter Your Name" value={info.name} name="name" id="name" onChange={dataHandler}></input>
                        </div>
                        <div className="flex justify-between w-full items-center">
                        <label className="text-2xl text-slate-100 " htmlFor="email">EMAIL :</label>
                        <input  className="h-[70px] w-[977px] rounded-lg text-2xl pl-6 bg-siu" type="email" placeholder="Enter Your Email" value={info.email} name="email" id="email" onChange={dataHandler}></input>
                        </div>
                       <div className="flex justify-between w-full items-center">
                       <label className="text-2xl text-slate-100 " htmlFor="message">MESSAGE :</label>
                        <input className="h-[120px] w-[977px] rounded-lg text-2xl pl-6 bg-siu" type="text" placeholder="Enter Your message" value={info.message} name="message" id="message" onChange={dataHandler}></input>
                       </div>
                       <div className="flex w-full justify-end">
                    <div className=" flex justify-center self-end w-[240px] h-[60px] text-2xl bg-siu hover:cursor-pointer rounded-md"><button type="submit" onClick={subHandler}>SUBMIT</button></div>
                    </div>
                    </form>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default ContactPage;