import React from 'react';
import {Space,Button ,Form,Row,Col,Input} from 'antd';
import AiCard from '@/baseComponent/AiCard';

const AiButton = (props)=>{
    const {
        title,
        buttons,//按钮
        searchs,//搜索条件
        children,
    } = props;
    return(
        <AiCard title={title||"页面标题"}>
            <div className="table-operate-wrap" >
                <Space align="center">
                {
                    children
                    ?
                    {children}
                    :
                    Array.isArray(buttons) && 
                    buttons.map((button)=>{
                        return<Button type="primary" key={button.key} disabled={true}>{button.title}</Button>
                    })
                }                  
                {
                        Array.isArray(searchs) && (searchs.length>0) &&
                    <>
                        <Button type="primary" >查询</Button>
                        <Button type="primary" >重置</Button>
                    </>   
                }   
                </Space>
            </div>
        </AiCard>   
    )
}
export default AiButton;