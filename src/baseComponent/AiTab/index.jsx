import React from 'react';
import AiCard from '@/baseComponent/AiCard';
import { Tabs } from 'antd';
import './index.less';
const { TabPane } = Tabs;
const Tab = (props) => {
    const callback =(key)=> {
        console.log(key);
    }
    const {
        panes=[
            { title: 'Tab 1', content: 'Content of Tab 1', key: '1' },
            // { title: 'Tab 2', content: 'Content of Tab 2', key: '2' },
        ],
    } = props;
    return (
        <>
            <Tabs defaultActiveKey="1" onChange={callback} type="card">
            {
                panes.map(pane => (
                    <TabPane tab={pane.title} key={pane.key} >
                        <AiCard>
                            <div style={{padding:20}}>操作区域</div>
                        </AiCard>
                        <AiCard className="box-flex-grow-1">
                            <div style={{padding:10}}>列表区域</div>
                        </AiCard>
                    </TabPane>
                ))
            }
                {/* <TabPane tab="首页" key="1">
                    <AiCard>
                        <div style={{padding:20}}>操作区域</div>
                    </AiCard>
                    <AiCard className="box-flex-grow-1">
                        <div style={{padding:10}}>列表区域</div>
                    </AiCard>
                </TabPane> */}
            </Tabs>
        </>
    )
};
export default Tab;