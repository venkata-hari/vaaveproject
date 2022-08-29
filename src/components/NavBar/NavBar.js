import React from 'react';
import './sass/navbar.scss'
import {Link} from 'react-router-dom'
function NavBar({handleorder,item}) {
  
 
    return (
        <nav className="navbar navbar-light bg-light justify-content-between">
        <div>
        <i className="fa fa-bars ms-3" style={{fontSize:"25px"}}/>
      <Link to='/'> <span className="navbar-brand ms-3">VenkataHari</span></Link>
      <Link to='/ADDNEWORDER'> <button className='btn btn-danger ms-3 p-1 text-uppercase' onClick={()=>handleorder()}>New Order</button></Link> 
        </div>
        <div>
    <Link to='/ICONFOOD' style={{textDecoration:'none',color:'black',textTransform:"uppercase"}} className='me-3'><button className='btn btn-dark btn-sm rounded-circle py-0 me-2'>{item}</button><i class="fa fa-cutlery"></i>icon-food</Link>
    <button className="btn btn-outline-danger my-2 my-sm-0 me-3" ><i className='fa fa-phone me-2'></i>8247329502</button>
</div>      
</nav>

    );
}

export default NavBar;