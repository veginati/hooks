import React from 'react';
import { useResources } from './useResources';

const ResourceList = ({data}) =>{
    const resources = useResources(data);
    return(<div>
        <ul>
            {resources.map(resource=><li key={resource.id}>{resource.title}</li>)}
        </ul>
    </div>);
}

export default ResourceList;