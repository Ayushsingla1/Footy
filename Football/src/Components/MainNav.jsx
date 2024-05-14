import {NavLink, Link} from 'react-router-dom'

const MainNav = () => {
    return ( 
        <div className="border border-gray-400 w-full flex justify-center py-[15px] bg-[#A4A4A4]">
            <nav className="flex w-11/12 justify-between items-center text-2xl text-[#1E1E1E]">
                <div>
                    <Link to="/">Logo</Link>
                </div>
                <div className="flex gap-x-10">
                    <div><NavLink to="/">Home</NavLink></div>
                    <div><NavLink to="/contact">Contact Us</NavLink></div>
                </div>
            </nav>
        </div> 
    );
}
 
export default MainNav;