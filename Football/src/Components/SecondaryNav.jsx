import {NavLink} from 'react-router-dom'

const SecondaryNav = () => {
    return ( 
        <div className='w-full flex justify-center items-center py-3 border-b-[1px] border-gray-400'>
            <nav className='w-5/12 flex justify-around items-center text-white text-xl'>
                <div><NavLink to="/fixtures">Fixtures</NavLink></div>
                <div><NavLink to="/liveScores">Live Scores</NavLink></div>
                <div><NavLink to="/pointsTable">Points Table</NavLink></div>
                <div><NavLink to="/pastMatches">Past Matches</NavLink></div>
            </nav>
        </div>
     );
}
 
export default SecondaryNav;