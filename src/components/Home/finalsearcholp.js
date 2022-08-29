import React,{Fragment} from 'react';

const Finalsearcholp = ({product,Dec1,Inc1}) => {
    return (
        <tbody>
            {product.map(x=>
                    <Fragment key={x.id}>
                    {x.value?(
                    <tr>
                    <td>{x.item}</td>
                     <td className='d-flex justify-content-around'>

                      <button className="btn btn-dark" onClick={()=>Dec1(x)}>-</button>  
                      <span className='my-1'>{x.qut}</span>
                      <button className="btn btn-dark" onClick={()=>Inc1(x)}>+</button>
                        
                    </td>
                     <td>{x.count} $</td>
                     </tr>):(<div></div>)}
                    </Fragment>
                    )
            }
            
        </tbody>
    );
};

export default Finalsearcholp;