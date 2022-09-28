import axios from 'axios';
import React, { useContext ,useState} from 'react';
import {View,TextInput,Button} from 'react-native-web'
import {Store} from '../PostsListScreen'
function Search() {
    const{Value, setValue,data,setData}=useContext(Store)
    const[display,setDisplay]=useState(false)
    const FormDataSearch=(e)=>{
      e.preventDefault()
      setDisplay(true)
      return axios.get(`http://localhost:5000/posts?q=${Value}`).
      then((res)=>{
        setData(res.data)
        
    }).catch(err=>console.log(err))
     
    }

    const FormDataReset=(e)=>{
        e.preventDefault()
        setDisplay(false)
        return axios.get(`http://localhost:5000/posts`).
        then((res)=>{
          setData(res.data)
          
      }).catch(err=>console.log(err))
       
      }
    return (
        <View style={{flexDirection:"row",justifyContent:"center"}}>
        <View style={{background:"white",color:"black",flexDirection:"row",justifyContent:"space-between",width:"96%",border:"1px solid grey"}}>
        <TextInput 
        onChangeText={(Value)=>setValue(Value)} style={{width:"80%",outline:"none"}}/>
        {display?(
       <Button type="submit" title="Reset" style={{width:"20%"}}
       onPress={FormDataReset}/>):
        (<Button type="submit" onPress={FormDataSearch} 
        title="Search" style={{width:"20%"}}/>)}
        </View>
        </View>
    );
}

export default Search;