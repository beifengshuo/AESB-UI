import React from "react";
import AiCard from '@/baseComponent/AiCard';
const SystemVar = ()=>{
    return (
        <>
            <AiCard title="系统变量">
                <div style={{padding:20}}>操作区域</div>
            </AiCard>
            <AiCard className="box-flex-grow-1">
                <div style={{padding:10}}>列表区域</div>
            </AiCard>
        </>
    )
}
export default SystemVar;