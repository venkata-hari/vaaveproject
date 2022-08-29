import React, { Fragment } from 'react';

function filterdataolp({data,Dec,Inc}) {
    return (
        <tbody>
            {data.map(x=>
                    <Fragment key={x.id}>
                    {x.value?(
                    <tr>
                    <td>{x.item}</td>
                     <td className='d-flex justify-content-around'>

                      <button className="btn btn-dark" onClick={()=>Dec(x)}>-</button>  
                      <span className='my-1'>{x.qut}</span>
                      <button className="btn btn-dark" onClick={()=>Inc(x)}>+</button>
                        
                    </td>
                     <td>{x.count} $</td>
                     </tr>):(<div></div>)}
                    </Fragment>
                    )
            }
            
        </tbody>
    );
}

export default filterdataolp;