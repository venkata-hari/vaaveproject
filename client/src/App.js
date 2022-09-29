import React from 'react';
import Screen1 from './components/PostsListScreen';
import Screen2 from './components/IndividualPostScreen';
import {View} from 'react-native-web';
import{NativeRouter,Routes,Route} from 'react-router-native'
function App() {
    return (
        <View>


        <NativeRouter>
        <Routes>          
        <Route exact path='/' element={<Screen1/>}/>  
        <Route path='/:id' element={<Screen2/>}/>  
        </Routes>
        </NativeRouter>
      
        </View>
      
      
    );
}

export default App;