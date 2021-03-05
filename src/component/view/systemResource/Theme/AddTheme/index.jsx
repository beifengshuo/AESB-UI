import React from "react";
import AiCard from '@/baseComponent/AiCard';
import {Button} from 'antd';
const AddTheme = ({changePage})=>{
    return (
        <>
            <AiCard title="新增主题">
                <div style={{padding:20}}>
                    <Button onClick={()=>{changePage('list')}}>完成</Button>
                </div>
            </AiCard>
            <AiCard className="box-flex-grow-1">
                <div style={{padding:10}}>列表区域</div>
            </AiCard>
        </>
    )
}
export default AddTheme;