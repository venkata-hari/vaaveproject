import React, { Fragment } from 'react';
import {Text,View,Button,TextInput} from 'react-native-web'
function Comment() {
    return (
      <View style={{width:"100%",position:"relative"}}>
        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
            <Button title="Comment" color="red"/>
            <Text></Text>
           </View>

           <View style={{marginLeft:"2%",background:"white",boxShadow:'0 0 1000px blue',flexDirection:'row',justifyContent:'center',position:'fixed',top:'5%',width:'96%',zIndex:900}}>
            <View style={{width:"100%",boxShadow:'0 0 3px grey',height:"100%",padding:"5%"}}>
                <TextInput style={{border:"1px solid black",padding:'2%'}}/>
                <TextInput placeholder="hari" style={{border:"1px solid black",marginTop:'3%',padding:'2%'}}/>
                <TextInput style={{border:"1px solid black",marginTop:'3%',marginBottom:'3%',padding:'2%'}}/>
                <Button title="Leave Your Comment" color="green" />
            </View>
           </View>
        </View>   
    );
}

export default Comment;