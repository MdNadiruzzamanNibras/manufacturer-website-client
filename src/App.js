import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './Pages/Login/Login';

function App() {
  return (
    <div className="App">
     <Routes>
       <Route path='/login' element={<Login></Login>}></Route>
     </Routes>
    </div>
  );
}

export default App;
