import React from 'react';
import { useContext } from 'react';
import {Store} from '../IndividualPostScreen'
function Comment() {
    const{Comment,setComment}=useContext(Store)
    return (
        <div>
            {Comment.map(x=>
                <div>{x.email}</div>
                )}
        </div>
    );
}

export default Comment;