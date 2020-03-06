import React,{useState} from 'react';
import ResourceList from './ResourceList';

const App = () =>{
    const [values,setvalues] = useState('POSTS');
    return (
        <div>
            <div></div>
            <button onClick={()=>setvalues('POSTS')}> POSTS </button>
            <button onClick={()=>setvalues('TODOS')} > TODO </button> <br/>
            <div><ResourceList data={values.toLowerCase()} /></div>
        </div>
    )
}

export default App;