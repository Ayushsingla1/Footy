import './App.css';
import { ToastContainer } from 'react-toastify';
import MainNav from './Components/MainNav';
import {Routes, Route} from "react-router-dom"
import HomePage from './Pages/HomePage';
import ContactPage from './Pages/ContactPage';
import Outlet1 from './Pages/Outlet1';
import NotFoundPage from './Pages/NotFoundPage';
import SecondaryNav from './Components/SecondaryNav';
import Table from './Pages/PointsTablePage';

function App() {
  return (
    <div className='w-full h-screen bg-[#1E1E1E]'>
      <MainNav/>

      <SecondaryNav/>

      <Routes>
        <Route path='/' element={<Outlet1/>}>
          <Route index element={<HomePage/>}/>
          <Route path="/contact" element={<ContactPage/>}/>
          <Route path="/pointsTable/:pointTable" element={<Table/>}/>
          <Route path='*' element={<NotFoundPage/>}/>
        </Route>
      </Routes>

      <ToastContainer/>
    </div>
    
  );
}
export default App;

