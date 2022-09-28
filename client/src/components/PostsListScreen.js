import axios from 'axios';
import React, { useEffect, useState,Fragment, createContext } from 'react';
import {View,Text,Image,TextInput,Button} from 'react-native-web'
import {Link} from 'react-router-native'
import Search from './Childs/Search'
export const Store=createContext(null)
function Screen1() {
    const[data,setData]=useState([])
    const[Value,setValue]=useState('')
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
    setData(data.map(x=>x.id===e.id?{...x,value:true}:x))
}
else if(Find.value===true){
    setData(data.map(x=>x.id===e.id?{...x,value:false}:x))
}
}


    return (
        <Store.Provider value={{Value,setValue,data,setData}}>
             <Search/>
       <View>
        <View style={{flexDirection:"row",justifyContent:"center",width:"100%",marginTop:"5px"}}>
        </View>

        <View style={{width:"100%",flexDirection:"row",justifyContent:"center",flexWrap:"wrap"}}>
          {data.map(x=>
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
                (<Text  style={{background:"green",color:"white",fontSize:"35px",borderBottom:"1px solid grey",textAlign:"center"}}>&#9998;</Text>):
                (<Text style={{background:"red",color:"white",fontSize:"35px",borderBottom:"1px solid grey",textAlign:"center"}}>🗑</Text>)
                }
                </View>
               <Text style={{height:"50%",textAlign:"center",fontSize:"30px",color:"white",background:"black"}} onPress={()=>userView(x)}>&#128065;</Text>
               </View>
           </View>
            )}
        </View>
        <View>
            
        </View>
       </View> 
       </Store.Provider>
    );
}

export default Screen1;