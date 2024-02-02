
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import AddStudent from './Components/AddStudent';
import UpdateDetail from './Components/UpdateDetail';
import DeleteDetail from './Components/DeleteDetails';
import GetDetail from './Components/GetDetail';

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/add' element={<AddStudent/>}></Route>
      <Route path='/update/:scholarNo' element={<UpdateDetail/>}></Route>
      <Route path='/delete' element={<DeleteDetail/>}></Route>
      <Route path='/get' element={<GetDetail/>}></Route>
    </Routes>
    </>
    
  );
}

export default App;
