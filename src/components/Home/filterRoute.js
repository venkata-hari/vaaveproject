import { useEffect, useState } from 'react';
import axios from 'axios'
import {nanoid} from 'nanoid'
function FilterRoute() {
    const[data,setData]=useState([])
    const[filter,setFilter]=useState(data)
    const newArray=[{"count":0,"value":false,"qut":0}]
    
    
    const[product,setProduct]=useState([])
    const[order,setOrder]=useState({
        item:"",
        price:"",
        count:0,
        qut:0,
        value:false,
        display:"block"
    })
    
    const inputSubmit=(e)=>{
        e.preventDefault()
        const Name=e.target.getAttribute("name")
        const Value=e.target.value
        const newIndex={...order}
        newIndex[Name]=Value
        setOrder(newIndex)
    }
    const formSubmit=(e)=>{
        e.preventDefault()
        const newIndex={
            id:nanoid(),
            item:order.item,
            price:order.price,
            value:order.value,
            qut:order.qut,
            count:order.count,
            display:order.display
        }
        const newIndex2=[...product,newIndex]
        setProduct(newIndex2)
    }
    
    const f1=(e)=>{
        const z=data.filter(x=>{
            return x.tag.includes(e)
        })
        setFilter(z)
    }
    useEffect(()=>{
        async function getData(){
          try{
           const res=await axios.get('../data.json')
           const newProduct=res.data.newitems
           setProduct(newProduct)
           
           
           
           const newIndex=res.data.homedata
           const newIndex2=newIndex.map(myFun)
           function myFun(e){
            const z={...e,...newArray[0]}
            return z
           }
           setData(newIndex2)
           console.log(newIndex2)
          }
          catch(error){
            console.log(error)
          }
        }getData()
    },[])
    const Inc=(e)=>{
        setData(data.map(x=>x.id===e.id?{...x,value:true,
            count:x.count+Number(x.price),
            qut:x.qut+1
        
        }:x))
    }
    const Inc1=(e)=>{
        setProduct(product.map(x=>x.id===e.id?{...x,value:true,
            count:x.count+Number(x.price),
            qut:x.qut+1,
            display:"none"
        
        }:x))
    }
    const Dec=(e)=>{
     const z=data.find(x=>x.id===e.id)
     if(z.qut!==0){
       setData(data.map(x=>x.id===e.id?{...x,
        count:x.count?x.count-Number(x.price):0,
        qut:x.qut?x.qut-1:0
    }:x))
     }
     else if(z.qut===0){
        setData(data.map(x=>x.id===e.id?{...x,value:false}:x))
     }
    }

    const Dec1=(e)=>{
        const z=product.find(x=>x.id===e.id)
        if(z.qut!==0){
          setProduct(product.map(x=>x.id===e.id?{...x,
           count:x.count?x.count-Number(x.price):0,
           qut:x.qut?x.qut-1:0
       }:x))
        }
        else if(z.qut===0){
           setProduct(product.map(x=>x.id===e.id?{...x,value:false}:x))
        }
       }
      
    const total=data.reduce((acc,x)=>x.count+acc,0)
    const total1=product.reduce((acc,x)=>x.count+acc,0)
    const total2=total+total1
    return {data,filter,f1,Inc,Dec,Inc1,Dec1,total2,product,formSubmit,inputSubmit}
}

export default FilterRoute;