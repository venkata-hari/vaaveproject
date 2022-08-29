import React, { Fragment } from 'react';
import {Link} from 'react-router-dom'
import './sass/iconfood.scss'
function IconFood({order,close,toggleform}) {
    return (
        <Fragment>
        {toggleform?
        (<div>
           
    <Link to='/'> <button>Back</button></Link> 
<center>
<table> 
    <thead>
        <tr>
            <th>FullName</th>
            <th>Address</th>
            <th>PhoneNumber</th>
            <th>Action</th>
        </tr>
     </thead>            
    {order.map(x=>
       <Fragment>
        {x.display?(<div></div>):(
       
            <tbody key={x.id}>
                <tr>
                <td> {x.fullName}</td>
           <td>{x.address}</td>
           <td>{x.phonenumber}</td>
      <td><button onClick={()=>close(x)} className='btn btn-danger'>Delete</button></td>
                </tr>
            </tbody>
        )}
        </Fragment>
        )}
</table>
</center>
</div>):(<div></div>)}
        </Fragment>
    );
}

export default IconFood;