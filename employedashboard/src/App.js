import { BrowserRouter,Routes,Route } from 'react-router-dom'
import './App.css';
import Home from './Home';
import Signup from './Signup';
import 'react-toastify'
import { ToastContainer } from 'react-toastify';
import Login from './login';

function App() {
  return (
    <div className='App'>
      <ToastContainer theme='colored'></ToastContainer>
       <BrowserRouter>
       <Routes>
        <Route path='/' element={<Login/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
       </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;
