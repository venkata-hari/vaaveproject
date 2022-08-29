import React,{useEffect,useState} from 'react';
import {nanoid} from 'nanoid'
import axios from 'axios'
function Route() {
    const[order,setOrder]=useState([])
    const[addOrder,setAddOrder]=useState({
        fullName:'',
        address:"",
        phonenumber:"",
        display:true
    })
    const[toggleform,setToggleForm]=useState(false)
  const[item,setItem]=useState(0)

    const handleorder=(e)=>{
        setToggleForm(true)
      } 
    const close=(e)=>{
        setItem(item-1)
      setOrder(order.map(x=>x.id===e.id?{...x,display:true}:x))
    }  
 const inputSubmit=(e)=>{
    e.preventDefault()
    const Name=e.target.getAttribute("name")
    const Value=e.target.value
    const newIndex={...addOrder}
    newIndex[Name]=Value
    setAddOrder(newIndex)
        
}
const formSubmit=(e)=>{
    setToggleForm(true)
    setItem(item+1)
    e.preventDefault()
    const newIndex1={
        id:nanoid(),
        fullName:addOrder.fullName,
        address:addOrder.address,
        phonenumber:addOrder.phonenumber
    }
    const newIndex2=[...order,newIndex1]
    setOrder(newIndex2)
}
    useEffect(()=>{
        async function getOrder(){
         try{
            const res=await axios.get('.../data.json')
            setOrder(res.data.orderItems) 
        }
         catch(error){
            console.log(error)
         }
        }
        getOrder()
    },[])
    return (
        {order,toggleform,inputSubmit,formSubmit,handleorder,item,close}
    );
}

export default Route;