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
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ManagesProducts from './Pages/ManagesProducts/ManagesProducts';
import Footer from './Pages/Footer';
import Myprofile from './Pages/DashBoard/Myprofile';
import AddReview from './Pages/DashBoard/AddReview';
import MakeAdmin from './Pages/DashBoard/MakeAdmin';
import ManageOrder from './Pages/DashBoard/ManageOrder';
import RequireAdmin from './Pages/Login/RequireAdmin';
import AddProducts from './Pages/DashBoard/AddProducts';
import PurchaseForm from './Pages/Home/PurchaseForm';
import OrderPayment from './Pages/DashBoard/OrderPayment';
import NotFound from './Pages/NotFound/NotFound';
import Update from './Pages/DashBoard/Update';
import Protfolion from './Pages/Profolio/Protfolion';
import Blog from './Pages/Bolgs/Blog';

function App() {
  return (
    <div   >
      <Navbar></Navbar>
     <Routes >
       <Route path='/' element={<Home></Home>}></Route>
       <Route path='/tools/:id' element={<RequireAuth><PurchaseTool></PurchaseTool></RequireAuth>}></Route>
       <Route path='/login' element={<Login></Login>}></Route>
       <Route path='/purchaseForm' element={<RequireAuth><PurchaseForm></PurchaseForm></RequireAuth>}></Route>
       <Route path='/signUp' element={<SignUp/>}></Route>
       <Route path='/update' element={<Update></Update>}></Route>
       <Route path='/blog' element={<Blog></Blog>} ></Route>
       <Route path='/profolio' element={<RequireAuth><Protfolion></Protfolion></RequireAuth>}></Route>
       <Route path='/manageproducts' element={<RequireAdmin><ManagesProducts></ManagesProducts></RequireAdmin>}></Route>
       <Route path='/dashboard' element={
         <RequireAuth><DashBoard/></RequireAuth>}>
            <Route index element={<Myprofile></Myprofile>}></Route>
            <Route path='order' element={<MyOrder></MyOrder>}></Route>
            <Route path='payment/:id' element={<OrderPayment></OrderPayment>}></Route>
            <Route path='addReview' element={<AddReview></AddReview>}></Route>
            <Route path='makeAdmin' element={<RequireAdmin><MakeAdmin/></RequireAdmin>}></Route>
            <Route path='allOrders' element={<RequireAdmin><ManageOrder/></RequireAdmin>}></Route>
            <Route path='addProducts' element={<RequireAdmin><AddProducts/></RequireAdmin>}></Route>
            </Route>
            <Route path='*' element={<NotFound/>}></Route>
     </Routes>
     <ToastContainer/>
     <Footer></Footer>
    </div>
  );
}

export default App;
