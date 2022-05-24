import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './Pages/Login/Login';
import SignUp from './Pages/Login/SignUp';
import Home from './Pages/Home/Home';
import Navbar from './Pages/Shared/Navbar';
import PurchaseTool from './Pages/Home/PurchaseTool';
import RequireAuth from './Pages/Login/RequireAuth';
import DashBoard from './Pages/DashBoard/DashBoard';
import MyOrder from './Pages/DashBoard/MyOrder';
import ManagesProducts from './Pages/ManagesProducts/ManagesProducts';

function App() {
  return (
    <div  className='max-w-7xl mx-auto'>
      <Navbar></Navbar>
     <Routes>
       <Route path='/' element={<Home></Home>}></Route>
       <Route path='/tools/:id' element={<RequireAuth><PurchaseTool></PurchaseTool></RequireAuth>}></Route>
       <Route path='/login' element={<Login></Login>}></Route>
       <Route path='/signUp' element={<SignUp/>}></Route>
       <Route path='/manageproducts' element={<ManagesProducts></ManagesProducts>}></Route>
       <Route path='/dashboard' element={
         <RequireAuth><DashBoard/></RequireAuth>}>
            <Route index element={<MyOrder></MyOrder>}></Route>
            </Route>
     </Routes>
    </div>
  );
}

export default App;
