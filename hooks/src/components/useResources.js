import { useState, useEffect } from "react";
import axios from "axios";

export const useResources = (data)=>{
    const [resources,setResources] = useState([]);

    useEffect(()=>{(async data =>{
        const response = await axios.get(`http://jsonplaceholder.typicode.com/${data}`);
        setResources(response.data);
     })(data)
    },[data]);

    return resources;
}
