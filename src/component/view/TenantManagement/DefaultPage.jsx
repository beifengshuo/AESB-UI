import React from 'react';
import { useParams } from "react-router-dom";
import AiCard from '@/baseComponent/AiCard';
import AddTenantPage from './AddTenant/Page';
import ViewTenantPage from './ViewTenant/Page';
import EditTenantPage from './EditTenant/Page';

const DefaultPage = (props) => {
    const { typeId }=useParams();
    switch(typeId){
        case "add":
            return <AddTenantPage {...props}/>
        case "edit":
            return <EditTenantPage {...props}/>
        case "view":
            return <ViewTenantPage {...props}/>
        default:
            return (
                <AiCard 
                    title={typeId} 
                    className="box-flex-grow-1"
                >
                    <div style={{padding:20}}>
                        {typeId}
                    </div>
                    
                </AiCard>
            );

    }
 
};
export default DefaultPage;