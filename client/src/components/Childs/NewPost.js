import React, { Fragment,useContext,useState } from 'react';
import {Store} from '../PostsListScreen'
import {nanoid} from 'nanoid'
import axios from 'axios';
function NewPost() {
  const{data,setData,setValue}=useContext(Store)
  const[post,setPost]=useState({
    id: "",
    title:"",
    post:"",
    photo:"https://media.istockphoto.com/vectors/avatar-5-vector-id1131164548?k=20&m=1131164548&s=170667a&w=0&h=VlwTJ3LpA8Pjzk9u8XYgkII0Vrvrb07e67cHALFX_aY=",
    Author:"",
    email:"",
    website:"",
    company:"",
    value:false,
    details:""

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
        Author:post.Author,
        email:post.email,
        website:post.website,
        company:post.company,
        value:post.value,
        details:post.details

    }
    const res=await axios.post("http://localhost:5000/posts",req)
    const NewIndexTwo=[...data,res.data]
    setData(NewIndexTwo)
    setValue(false)
  }
    return (
        <Fragment>
    <form style={{position:"fixed",width:"100%",zIndex:900}} onSubmit={formSubmit}>
    <input type="text"  required="required" name="title" placeholder='Enter Title'  onChange={inputSubmit}/><br/>
    <input type="text"  required="required" name="Author" placeholder='Enter Your Name' onChange={inputSubmit}/><br/>
    <input type="text"  required="required" name="email" placeholder='Enter Your email' onChange={inputSubmit}/><br/>
    <input type="text"  required="required" name="website" placeholder='Enter Your Wesite' onChange={inputSubmit}/><br/>
    <input type="text"  required="required" name="company" placeholder='Enter Post Company Name' onChange={inputSubmit}/><br/>
    <input type="text"  required="required" name="details" placeholder='Enter Your Address' onChange={inputSubmit}/><br/>
    <textarea name="post" onChange={inputSubmit}></textarea><br/>
      <button type="submit">Submit</button>
            </form>
            
        </Fragment>
    );
}

export default NewPost;