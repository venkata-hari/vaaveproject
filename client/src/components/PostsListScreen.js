import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';
import {View,Text,Image,TextInput,Button} from 'react-native-web'
import {Link} from 'react-router-native'
import NewPost from './Childs/NewPost'
export const Store=createContext(null)
function Screen1() {
    const[data,setData]=useState([])
    const[query,setQuery]=useState('')
    const[Value,setValue]=useState(false)
    useEffect(()=>{
        async function getData(){
            try{
              const res=await axios.get('http://localhost:5000/posts')
              setData(res.data)
            }
            catch(error){
                console.log(error)
            }

        }getData()
    },[])
const userView=(e)=>{
const Find=data.find(x=>x.id===e.id)
    if(Find.value===false){
    setData(data.map(x=>x.id===e.id?
        {...x,value:true}:x))
}
else if(Find.value===true){
    setData(data.map(x=>x.id===e.id?
        {...x,value:false}:x))
}
}
const setOpen=()=>{
    setValue(true)
}
const userDelete=(id)=>{
    axios.delete(`http://localhost:5000/posts/${id}`)
    
        setData(data.filter(x=>x.id!==id))
        return true
    

}
    return (
        <Store.Provider value={{setValue,data,setData}}>
            {Value?(<NewPost/>):(<View></View>)}
        <View>
    <View style={{flexDirection:"row",justifyContent:"center"}}>
        <View style={{background:"#f5f5ff",borderRadius:"5px",color:"black",flexDirection:"row",justifyContent:"space-between",width:"96%",border:"1px solid #8b797966"}}>
        <TextInput 
        onChangeText={text=>setQuery(text)} style={{width:"80%",outline:"none",padding:"3px"}}/>
       <Text>&#x1F50E;&#xFE0E;</Text>
       
        </View>
        </View>
       <View>
       <View style={{width:'15%',marginTop:"2%"}}>
        <Button title="New +" color="green" onPress={setOpen}/>
       </View>

        <View style={{width:"100%",flexDirection:"row",justifyContent:"center",flexWrap:"wrap"}}>
          {data.map((x)=>{return(
           	<View key={x.id} style={{background:"white",flexDirection:"row",boxShadow:"0 0 3px grey",marginTop:"20px",width:"96%",height:"100%"}}>
               
               <View style={{width:"30%",flexDirection:"row",justifyContent:"center"}}>
               <Link to={{pathname:`${x.id}`}}>
                <Image source={{uri:x.photo}} style={{width:100 ,height:100}}/>
                </Link>
               </View>
              
              
               
               <View style={{borderLeft:"1px solid grey",width:"60%"}}>
               <Link to={{pathname:`/${x.id}`}} style={{textDecoration:'none'}}>
                   <View style={{padding:"10px",borderBottom:"1px solid grey",flexDirection:"row",justifyContent:"space-around"}}>
                    <Text style={{fontWeight:"500",color:"blue",fontSize:"15px"}}>PostTitle:</Text>
                    <Text style={{fontWeight:"500"}}>{x.title}</Text>
                    </View>
                </Link> 
                   <View style={{padding:"10px",height:"50%",flexDirection:"row",justifyContent:"space-around"}}>
                    <Text style={{fontWeight:"500",color:"blue",fontSize:"15px"}}>UserName:</Text>
                   <Text style={{fontWeight:"500"}}>{x.Author}</Text>
                   </View>
                 
               </View>
             
               <View style={{borderLeft:"1px solid grey",width:"10%"}}>
               <View style={{height:"50%"}}>
                {x.value?
                (<Text  style={{background:"green",color:"white",fontSize:"35px",borderBottom:"1px solid grey",textAlign:"center"}}></Text>):
                (<Text style={{background:"red",color:"white",fontSize:"35px",borderBottom:"1px solid grey",textAlign:"center"}} onPress={()=>userDelete(x.id)}>🗑</Text>)
                }
                </View>
               <Text style={{height:"50%",textAlign:"center",fontSize:"30px",color:"white",background:"black"}} onPress={()=>userView(x)}>&#128065;</Text>
               </View>
           </View>
)})}
        </View>
        <View>
            
        </View>
       </View> 
       </View>
       </Store.Provider>
    );
}

export default Screen1;