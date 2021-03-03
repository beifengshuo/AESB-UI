import React,{useState} from 'react';
import AiCard from '@/baseComponent/AiCard';
import { Tabs } from 'antd';
import './index.less';
const { TabPane } = Tabs;
const Tab = (props) => {

    const { 
            panes=[
                { title: 'Tab 1', content: 'Content of Tab 1', key: '1' },
                { title: 'Tab 2', content: 'Content of Tab 2', key: '2' },
            ],
            activeKey,
            onChange,
            ...restProps 
        } =props;
    const callback =(key)=> {
        if(props.onChange){
            props.onChange(key)
        }else{
            console.log(key);
        }  
    }

 

   
    const defaultActiveKey = panes[0].key;

    return (
        <>
            <Tabs
                type="editable-card"
                defaultActiveKey={defaultActiveKey} 
                onChange={callback}  
                activeKey={ props.activeKey ? props.activeKey : defaultActiveKey }
                {...restProps}
            >
            {
                panes.map(pane => (
                    <TabPane tab={pane.title} key={pane.key} closable={pane.closable} >
                        {pane.content}
                    </TabPane>
                ))
            }
            </Tabs>
        </>
    )
};
export default Tab;