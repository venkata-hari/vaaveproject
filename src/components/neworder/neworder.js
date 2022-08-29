import React from 'react';
function neworder({toggleform,inputSubmit,formSubmit}) {
    return (
        <div>
            {toggleform?(
<section className='form-section'>  
<form onSubmit={formSubmit}>
  <div class="form-group">
    <label for="exampleInputEmail1">Full Name</label>
    <input type="text" name="fullName" required="required" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter FullName" onChange={inputSubmit}/>
  </div>

  <div class="form-group">
    <label for="exampleInputPassword1">Address</label>
    <input type="text" name="address" required="required" class="form-control" id="exampleInputPassword1" placeholder="Enter Address" onChange={inputSubmit}/>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Phone Number</label>
    <input type="phonenumber" name="phonenumber" required="required" class="form-control" id="exampleInputPassword1" placeholder="Enter PhoneNumber" onChange={inputSubmit}/>
  </div>
<button type="submit" class="btn btn-danger w-100">Take Order</button>
 
</form>
</section>):(<section></section>)}



        </div>
    );
}

export default neworder;