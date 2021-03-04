import React from "react";
import { Tabs } from 'antd';
import AiTab from '@/baseComponent/AiTab';
import comp_data from "./tabs_comp";
const { TabPane } = Tabs;

const PageTab = ({panes,addTab,...restProps})=>{
    
    return (
        <>
            <Tabs
                type="editable-card"
                {...restProps}
            >
            {
                panes.map(pane =>{
                    let CompPage = ()=>(<>无此页面</>)
                    if(comp_data[pane["comp"]]){
                        CompPage = comp_data[pane["comp"]]
                    }
                    return(
                        <TabPane tab={pane.title} key={pane.key} closable={pane.closable}>
                            <CompPage addTab={addTab}/>
                        </TabPane>
                    )
                })
            }
            </Tabs>
        </>
    )
}
export default PageTab;