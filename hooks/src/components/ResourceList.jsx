import React,{useState,useEffect} from 'react';
import axios from 'axios';

const ResourceList = ({data}) =>{

    const [resources,setResources] = useState([]);

    const fetchResource = async(data) =>{
       const response = await axios.get(`http://jsonplaceholder.typicode.com/${data}`);
       setResources(response.data);
    }

    useEffect(()=>{fetchResource(data);},[data]);

    return(<div>{resources.length}</div>);
}

export default ResourceList;