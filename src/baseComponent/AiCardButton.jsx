import React from 'react';
import { Space} from 'antd';
import AiCard from '@/baseComponent/AiCard';
const AiCardButton = (props) => {
    const {
        children,
        title,
    }=props;

    return(
        <>
        
        <AiCard title={title}>
            <div className="table-operate-wrap">
                <Space align="center">
                   {children}
                </Space>
            </div> 
        </AiCard>
        </>
       
    )
}
export default AiCardButton;