import './App.css';
import { ToastContainer } from 'react-toastify';
import MainNav from './Components/MainNav';
import {Routes, Route} from "react-router-dom"
import HomePage from './Pages/HomePage';
import ContactPage from './Pages/ContactPage';
import Outlet1 from './Pages/Outlet1';
import NotFoundPage from './Pages/NotFoundPage';
import SecondaryNav from './Components/SecondaryNav';
import PointsTablePage from './Pages/PointsTablePage';
import TableFormat from './Pages/TableFormat';
import LiveFormat from './Pages/LiveFormat';
import FixturePage from './Pages/FixturesPage';
import Stats from './Pages/Stats';
function App() {
  return (
    <div className='w-full h-screen bg-[#1E1E1E]'>
      <MainNav/>

      <SecondaryNav/>

      <Routes>
        <Route path='/' element={<Outlet1/>}>
          <Route index element={<HomePage/>}/>
          <Route path="/contact" element={<ContactPage/>}/>
          <Route exact path="/pointsTable" element={<TableFormat/>}/>
          <Route path="/pointsTable/:pointTable" element={<PointsTablePage/>}/>
          <Route path='/liveScores' element={<LiveFormat/>}/>
          <Route path='/fixtures' element ={<FixturePage/>}/>
          <Route path="//LiveStats/:id" element={<Stats/>}/>
          <Route path='*' element={<NotFoundPage/>}/>
        </Route>
      </Routes>

      <ToastContainer/>
    </div>
    
  );
}
export default App;

