import React, {useContext,useState } from 'react';
import {Store} from '../PostsListScreen'
import {nanoid} from 'nanoid'
import axios from 'axios';
function NewPost({userClose}) {
  const{data,setData,setValue}=useContext(Store)
  const[post,setPost]=useState({
    id: "",
    title:"",
    post:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoCna4pql7pnrc_9SK4-oLmDg4ws-CyXNjIg&usqp=CAU",
    photo:"https://media.istockphoto.com/vectors/avatar-5-vector-id1131164548?k=20&m=1131164548&s=170667a&w=0&h=VlwTJ3LpA8Pjzk9u8XYgkII0Vrvrb07e67cHALFX_aY=",
    author:"",
    email:"",
    website:"",
    company:"",
    value:false,
    count:0,
    color:"black",
    dot:"https://miro.medium.com/max/1188/1*HulO5WD-QR5yciOpbwhbRg.png",
    Follow:"Following"

  })
  const inputSubmit=(e)=>{
    e.preventDefault()
    const Name=e.target.getAttribute('name')
    const Value=e.target.value
    const NewIndex={...post}
    NewIndex[Name]=Value
    setPost(NewIndex)
  }
  const formSubmit=async(e)=>{
    e.preventDefault()
    const req={
        id:nanoid() ,
        title:post.title,
        post:post.post,
        photo:post.photo,
        author:post.author,
        email:post.email,
        website:post.website,
        company:post.company,
        value:post.value,
        count:post.count,
        color:post.color,
        dot:post.dot,
        Follow:post.Follow

    }
    const res=await axios.post("http://localhost:5000/posts",req)
    const NewIndexTwo=[...data,res.data]
    setData(NewIndexTwo)
    setValue(true)
  }

    return (
    <div style={{ width:"auto",display:'flex',marginTop:"20%",justifyContent:'center',alignItems:'center',alignContent:'center',marginBottom:'5%'}}>
    <form style={{width:'95%',border:"1px solid grey",overflow:'hidden'}} onSubmit={formSubmit}>
    <input style={{width:'100%',padding:'2%'}} type="text"  required="required" name="title" placeholder='Enter Title'  onChange={inputSubmit}/><br/>
    <input style={{width:'100%',padding:'2%'}} type="text"  required="required" name="author" placeholder='Enter Your Name' onChange={inputSubmit}/><br/>
    <input style={{width:'100%',padding:'2%'}} type="text"  required="required" name="email" placeholder='Enter Your email' onChange={inputSubmit}/><br/>
    <input style={{width:'100%',padding:'2%'}} type="text"  required="required" name="post" placeholder='Copy Your Img Url' onChange={inputSubmit}/><br/>
    <input style={{width:'100%',padding:'2%'}} type="text"  required="required" name="company" placeholder='Enter Post Company Name' onChange={inputSubmit}/><br/>
    <textarea required="required" name="post" onChange={inputSubmit} style={{width:'100%',height:"20vh"}}></textarea><br/>
    <button type="submit" style={{width:'100%',padding:'2%',background:'green',color:'white',border:'none'}}>Publish Post</button>
            </form>
            
        </div>
    );
}

export default NewPost;