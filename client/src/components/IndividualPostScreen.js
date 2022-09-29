import axios from 'axios';
import React, { useCallback, useEffect, useState,createContext, Fragment} from 'react';
import {View,Text,Image,Button, TextInput} from 'react-native-web'
import {Link, useParams} from 'react-router-native'
import {nanoid} from 'nanoid'
import Comment from './Childs/Comment'
export const Store=createContext(null)
function IndividualPostScreen() {
    const{id}=useParams()
    const[INC,setINC]=useState(0)
    const[display,setDisplay]=useState(false)
    const[dis,setDis]=useState(false)
    const[DEC,setDEC]=useState(0)
    const[data,setData]=useState([])
    const[NewData,setNewData]=useState([])
    const[UserComment,setUserComment]=useState({
        comment:'',
        name:'unKnown',
        avator:'https://media.istockphoto.com/vectors/avatar-5-vector-id1131164548?k=20&m=1131164548&s=170667a&w=0&h=VlwTJ3LpA8Pjzk9u8XYgkII0Vrvrb07e67cHALFX_aY='
        ,INC: 0,
        DEC: 0,
        display: false,
        dis: false
    })

    const likeThumb=()=>{
        setINC(INC+1)
        setDisplay(true)
    }
    const dislikeThumb=()=>{
        setDEC(DEC-1)
        setDis(true)
    }
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
   try{
    const res=await axios.get("http://localhost:5000/comments")
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
    const NewIndex={...UserComment}
    NewIndex[Name]=Value
    setUserComment(NewIndex)
}
const formSubmit=async(e)=>{
        e.preventDefault()
        const req={
            id:nanoid(),
            comment:UserComment.comment,
            avator:UserComment.avator,
            name:UserComment.name,
            INC: UserComment.INC,
            DEC: UserComment.DEC,
            display:UserComment.display,
            dis: UserComment.dis
        }
        const res=await axios.post(`http://localhost:5000/comments`,req)
        const newIndex=[...NewData,res.data]
        setNewData(newIndex)
    }
    const arraylikeThumb=(e)=>{
        const z=NewData.find(x=>x.id===e.id)
        if(z){
            setNewData(NewData.map(x=>x.id===e.id?{...x,INC:x.INC+1,display:true}:x))
        }
        
        }   
        const arraydislikeThumb=(e)=>{
            setNewData(NewData.map(x=>x.id===e.id?{...x,DEC:x.DEC-1,dis:true}:x))
        } 
return (
<Store.Provider value={{UserComment,setUserComment,formSubmit ,inputSubmit,NewData,setNewData}}>

        <View style={{width:"100%",height:"100%"}}>
        <View><Link to='/'><Text>Back</Text></Link></View>
       <View style={{width:"100%",flexDirection:'row',justifyContent:'center',borderBottom:"1px solid grey"}}>   
       <View style={{width:"90%",flexDirection:'row',justifyContent:'center',background:'white'}}>
        <View style={{flexDirection:'row',justifyContent:'space-around',width:'60%'}}> 
            
            <View>
            <Image source={{uri:data.photo}} style={{width:100,height:100}} alt="Author"/>
            </View>
            
            <View>
            <Text style={{fontSize:"20px",textAlign:"center",fontWeight:500,height:"30%"}}>{data.author}</Text>
            <Text style={{height:"30%",textAlign:"center"}}>{data.title}</Text>
           <Button title="Follow" style={{height:"40%"}}/>
            </View>
            
           </View>
       </View>   
       </View>      
        </View>
<Fragment>
  <Comment/>   
</Fragment>
{NewData.map(x=>
<View style={{flexDirection:'row',height:'100%'}} key={x.id}>
<View>
    <Image source={x.avator} style={{width:50,height:50}} alt=''/>
</View>
<View style={{marginLeft:'2%'}}>
            <Text style={{fontWeight:500}}>{x.name}</Text>
            <Text style={{marginTop:'3px'}}>{x.comment}</Text>

           <View style={{flexDirection:'row'}}>
            <Text onPress={()=>arraylikeThumb(x)}>&#128077;</Text>
           {x.display?(<Text>{x.INC}</Text>):( <Text></Text>)}
            <Text style={{marginLeft:"30%"}} onPress={()=>arraydislikeThumb(x)}>&#128078;</Text>
            {x.dis?(<Text>{x.DEC}</Text>):( <Text></Text>)}
        </View>
        </View>
</View>
    )}
        <View style={{flexDirection:'row',height:'100%'}}>
            <View>
            <Image source={{uri:data.userPhoto}} style={{width:50,height:50}}/>
            </View>
            <View style={{marginLeft:'2%'}}>
            <Text style={{fontWeight:500}}>{data.details}</Text>
            <Text style={{marginTop:'3px'}}>{data.comment}</Text>
            <View style={{flexDirection:'row'}}>
            <Text onPress={likeThumb}>&#128077;</Text>
           {display?(<Text>{INC}</Text>):( <Text></Text>)}
            <Text style={{marginLeft:"30%"}} onPress={dislikeThumb}>&#128078;</Text>
            {dis?(<Text>{DEC}</Text>):( <Text></Text>)}
        </View>
            
            </View>
    </View>
        </Store.Provider>
    );
}

export default IndividualPostScreen;