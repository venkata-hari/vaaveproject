import axios from 'axios';
import React, { useCallback, useEffect, useState,createContext, Fragment} from 'react';
import {View,Text,Image,Button} from 'react-native-web'
import {Link, useParams} from 'react-router-native'
import {nanoid} from 'nanoid'
export const Store=createContext(null)
function IndividualPostScreen() {
    const{id}=useParams()
    const[data,setData]=useState([])
    const[NewData,setNewData]=useState([])
    const[Comment,setComment]=useState({
        comments:[]
    })
    const getData=useCallback(async()=>{
     try{
        const res=await axios.get(`http://localhost:5000/posts/${id}`)
        setData(res.data)
     }
     catch(error){
        console.log(error)
     }
    },[id])
    useEffect(()=>{getData()},[getData])
    useEffect(()=>{
    async function getData(){
try{const res=await axios.get("http://localhost:5000/posts")
   setNewData(res.data)}
   catch(error){
    console.log(error)
   }
    }getData()
},[])
const inputSubmit=(e)=>{
    e.preventDefault()
    const Name=e.target.getAttribute('name')
    const Value=e.target.value
    const NewIndex={...Comment,comments:[{...Comment.comments}]}
    NewIndex[Name]=Value
    setComment(NewIndex)
}
const formSubmit=async(e)=>{
        e.preventDefault()
        const req={
            id:nanoid(),
            comments:[{...Comment.comments}],
        }
        const res=await axios.post(`http://localhost:5000/posts`,req)
        const newIndex=[...data,res.data]
        setData(newIndex)
    }

    return (
<Store.Provider value={{Comment,setComment}}>
    <Fragment>
        <form onSubmit={formSubmit}>
            <input type='text' name="comments" onChange={inputSubmit}/>
            <button type="submit">Add</button>
        </form>
        {NewData.map(x=>
        <div key={x.id}>
        {x.comment}          
        </div>)}
            
    </Fragment>
        <View style={{width:"100%",height:"100%"}}>
            <View>
            <Link to='/'><Text>Back</Text></Link>
            </View>
       
       <View style={{width:"100%",flexDirection:'row',justifyContent:'center',boxShadow:'0 0 2px grey'}}>   
       <View style={{width:"90%",flexDirection:'row',justifyContent:'center',background:'white'}}>
        <View style={{flexDirection:'row',justifyContent:'space-around',width:'60%'}}> 
            
            <View>
            <Image source={{uri:data.photo}} style={{width:100,height:100}} alt="Author"/>
            </View>
            
            <View>
            <Text style={{fontSize:"20px",fontWeight:500,height:"30%"}}>{data.Author}</Text>
            <Text style={{height:"30%",textAlign:"center"}}>{data.title}</Text>
           <Button title="UserDetails" style={{height:"40%"}}/>
            </View>
            
           </View>
       </View>   
       </View>      
        </View>

        
        </Store.Provider>
    );
}

export default IndividualPostScreen;