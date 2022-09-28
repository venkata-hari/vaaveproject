import axios from 'axios';
import React, { Fragment, useCallback, useEffect, useState } from 'react';
import {View,Text,Image,Button} from 'react-native-web'
import {Link, useParams} from 'react-router-native'
import Comment from './Childs/Comment'
function IndividualPostScreen() {
    const{id}=useParams()
    const[data,setData]=useState([])
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
    return (
        <View style={{width:"100%",height:"100%"}}>
            <View>
            <Link to='/'><Text>Back</Text></Link>
            </View>
       
       <View style={{width:"100%",flexDirection:'row',justifyContent:'center'}}>   
       <View style={{width:"90%",flexDirection:'row',justifyContent:'center',boxShadow:'0 0 2px grey',background:'white'}}>
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
           
           <View>
            <Text>{data.post}</Text>
           </View>
           <Fragment>
            <Comment/>
           </Fragment>
        </View>
    );
}

export default IndividualPostScreen;