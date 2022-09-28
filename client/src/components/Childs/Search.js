import axios from 'axios';
import React, { useContext ,useState} from 'react';
import {View,TextInput,Button} from 'react-native-web'
import {Store} from '../PostsListScreen'
function Search() {
    const{Value, setValue,data,setData}=useContext(Store)
    const[display,setDisplay]=useState(false)
    const FormDataSearch=async(e)=>{
      e.preventDefault()
      setDisplay(true)
      return await axios.get(`http://localhost:5000/posts?q=${Value}`).
      then((res)=>{
        setData(res.data)
        
    }).catch(err=>console.log(err))
     
    }

   
    return (
      <form onSubmit={FormDataSearch}>
      <input type='text' value={Value} onChange={(e)=>setValue(e.target.value)}/>
 <button type="button">search</button>
  </form>
    );
}

export default Search;



