import React from 'react';

function search({formSubmit,inputSubmit}) {
    return (
        <form onSubmit={formSubmit} className="border border-1 p-2 my-1">
        <input type='text' className='w-100 my-2' required='required' placeholder='Enter Item...' name="item" onChange={inputSubmit}/><br/>
        <input type='text' className='w-100 my-2' required='required' placeholder='Enter Price...' name= "price" onChange={inputSubmit}/><br/>
        <button type="submit" className='w-100 btn btn-danger my-2'>AddNewItem</button>
        </form>
    );
}

export default search;