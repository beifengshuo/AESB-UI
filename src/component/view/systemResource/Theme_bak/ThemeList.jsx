import React from "react";
import AiCard from '@/baseComponent/AiCard';
import {Button} from 'antd';
const ThemeList = (props)=>{
   const {
       changePage
    } = props;

    return (
        <>
            <AiCard title="主题列表">
                <div style={{padding:20}}>
                    <Button onClick={()=>{changePage('add')}}>新增</Button>
                    <Button onClick={()=>{changePage('edit')}}>编辑</Button>  
                </div>
            </AiCard>
            <AiCard className="box-flex-grow-1">
                <div style={{padding:10}}>列表区域</div>
            </AiCard>
        </>
    )
}
export default ThemeList;