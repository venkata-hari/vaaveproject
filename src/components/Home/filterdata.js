import React, { Fragment } from 'react';

function Filterdata({filter,Inc}) {
    return (
        <Fragment>
            {filter.map(x=>
                
<div class="card text-center my-1" style={{width: '100%'}}>
  <div class="card-body">
    <h5 class="card-title">{x.item}</h5>
    <p class="card-text">{x.price}$</p>
    <button class="btn btn-dark" onClick={()=>Inc(x)}>Add</button>
  </div>
</div>
                )}
            
        </Fragment>
    );
}

export default Filterdata;