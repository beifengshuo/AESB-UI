import React from "react";
import AiCard from '@/baseComponent/AiCard';
const ServiceRegistry = ()=>{
    return (
        <>
            <AiCard title="服务注册中心">
                <div style={{padding:20}}>操作区域</div>
            </AiCard>
            <AiCard className="box-flex-grow-1">
                <div style={{padding:10}}>列表区域</div>
                
            </AiCard>
        </>
    )
}
export default ServiceRegistry;