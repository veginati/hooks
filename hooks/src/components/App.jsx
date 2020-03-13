import React,{useState} from 'react';
import ResourceList from './ResourceList';
import { UserList } from './UserList';

const App = () =>{
    const [values,setvalues] = useState('POSTS');
    return (
        <div>
            <UserList/>
            <div></div>
            <button onClick={()=>setvalues('POSTS')}> POSTS </button>
            <button onClick={()=>setvalues('TODOS')} > TODO </button> <br/>
            <div><ResourceList data={values.toLowerCase()} /></div>
        </div>
    )
}

export default App;  