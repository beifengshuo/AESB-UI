import React from "react";
import AiCard from '@/baseComponent/AiCard';
import {Button} from 'antd';
const EditTheme = ({changePage})=>{
    return (
        <>
            <AiCard title="编辑主题">
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
export default EditTheme;