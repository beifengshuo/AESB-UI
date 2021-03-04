import React,{useState,useEffect} from "react";
import { Tabs } from 'antd';
import './index.less';
const { TabPane } = Tabs;
const TabTemplate = ({comp_data,fixed_tab,add_pane})=>{

    const { title_suffix="详细信息", tab_key='id', comp}=add_pane;

    const [panes,setPanes]=useState([
        { 
            title: 'tab1', 
            key: '1',
            closable: false,
        }
    ]);
    const [activeKey,setActiveKey]=useState('1');

    const addTab = (row)=>{
        

        let new_pane = [...panes];
        let new_activeKey =  row[tab_key];
        console.log("addTab",row);
        if(panes.find((pane)=>pane.key=== new_activeKey )){//切换
            setActiveKey(new_activeKey);
            console.log("new_activeKey",new_activeKey);
        }else{//添加

            const new_add_pane= { 
                title: `${row.queueName}${title_suffix}`,
                key: new_activeKey, 
                closable: true,
                comp,  
            }

            new_pane.push(new_add_pane);
            console.log("new_activeKey",new_activeKey);

            setActiveKey(new_activeKey);
            setPanes(new_pane);
        }  
    }

    const remove = targetKey => {
        let new_activeKey = activeKey;
        let lastIndex;
    
        panes.forEach((pane, i) => {
          if (pane.key === targetKey) {
            lastIndex = i - 1;
          }
        });
        
        const new_panes = panes.filter(pane => pane.key !== targetKey);
        if (new_panes.length && activeKey === targetKey) { 
          if (lastIndex >= 0) {
            new_activeKey = new_panes[lastIndex].key;
          } else {
            new_activeKey = new_panes[0].key;
          }
        }
        setPanes(new_panes);
        setActiveKey(new_activeKey);  
    };

    const onTabEdit = (targetKey, action) => {
       
        if(action=="remove"){
            remove(targetKey);
        }
    };
    useEffect(()=>{
        if(fixed_tab){  
            setPanes( [{...panes[0],...fixed_tab}] )
        }  
    },[])

    return (
        <>
             <Tabs
                type="editable-card"
                activeKey={activeKey}
                onChange={(key)=>{setActiveKey(key)}}
                onEdit={onTabEdit}
                hideAdd
            >
            {
                panes.map(pane =>{
                    let CompPage = ()=>(<>无此页面</>)
                    if(pane["comp"] && comp_data[pane["comp"]]){
                        CompPage = comp_data[pane["comp"]]
                    }
                    return(
                        <TabPane tab={pane.title} key={pane.key} closable={pane.closable}>
                            <CompPage addTab={addTab} tab_key={activeKey}/>
                        </TabPane>
                    )
                })
            }
            </Tabs>
        </>
    )
}
export default TabTemplate;