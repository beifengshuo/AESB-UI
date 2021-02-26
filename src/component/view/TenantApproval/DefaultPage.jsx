import React from 'react';
import { useParams } from "react-router-dom";
import AiCard from '@/baseComponent/AiCard';
import Approval from './Approval';
import ViewApproval from './ViewApproval';
// import ViewTenantPage from './ViewTenant/Page';
// import EditTenantPage from './EditTenant/Page';

const DefaultPage = (props) => {
    const { typeId }=useParams();
    switch(typeId){
        case "approval":
            return <Approval {...props}/>
        // case "edit":
        //     return <EditTenantPage {...props}/>
        case "view":
            return <ViewApproval {...props}/>
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