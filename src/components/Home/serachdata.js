import React, { Fragment } from 'react';

function Serachdata({product,Inc1}) {
    return (
        <div>
            {product.map(x=>
   
              
               
                  <div class="card text-center my-1" style={{display:x.display}} key={x.id}>
              
               <div class="card-body">
                 <h5 class="card-title">{x.item}</h5>
                 <p class="card-text">{x.price}$</p>
                 <button class="btn btn-dark" onClick={()=>Inc1(x)}>Add</button>
               </div>
               </div>
              

             
                )}
        </div>
    );
}

export default Serachdata;