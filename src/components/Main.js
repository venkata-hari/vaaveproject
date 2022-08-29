import React from 'react';
import NavBar from './NavBar/NavBar';
import useForm from './Routes/route'
import Neworder from './neworder/neworder';
import ICONFOOD from './neworder/IconFood';
import Home from './Home/home'
import{Routes,Route} from 'react-router-dom'
function Main() {
    const{handleorder,order,toggleform,inputSubmit,formSubmit,item,close}=useForm()
    return (
        <div>
            <NavBar handleorder={handleorder} item={item}/>

        <Routes>
        <Route path='/ADDNEWORDER' element={<Neworder toggleform={toggleform} inputSubmit={inputSubmit} formSubmit={formSubmit}/>}/>
            <Route path='/ICONFOOD' element={<ICONFOOD order={order}  close={close} toggleform={toggleform}/>}/>
            <Route path='/' element={<Home/>}/> 
        </Routes>
        </div>
    );
}

export default Main;