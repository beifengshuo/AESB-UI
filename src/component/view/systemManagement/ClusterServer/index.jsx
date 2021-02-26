import React from "react";
import AiCard from '@/baseComponent/AiCard';
import { Tabs } from 'antd';
const { TabPane } = Tabs;
const ClusterServer = ()=>{

    const callback =(key)=> {
        console.log(key);
    }

    return (
        <>
            <Tabs defaultActiveKey="1" onChange={callback} type="card">
                <TabPane tab="集群服务器管理" key="1">
                    <AiCard >
                        <div style={{padding:20}}>操作区域</div>
                    </AiCard>
                    <AiCard className="box-flex-grow-1">
                        <div style={{padding:10}}>列表区域</div>
                    </AiCard>
                </TabPane>
                <TabPane tab="服务器-MBean信息" key="2">
                    服务器-MBean信息
                </TabPane>
                <TabPane tab="服务器-性能图表" key="3">
                    服务器-性能图表
                </TabPane>
            </Tabs>

            {/* 集群服务器管理 */}

        {/* 
            <AiCard title="集群服务器管理">
                <div style={{padding:20}}>操作区域</div>
            </AiCard>
            <AiCard className="box-flex-grow-1">
                <div style={{padding:10}}>列表区域</div>
            </AiCard> */}
        </>
    )
}
export default ClusterServer;