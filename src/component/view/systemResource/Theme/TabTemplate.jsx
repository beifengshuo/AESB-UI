import React,{useState,useEffect,useContext,createContext} from "react";
import { Tabs } from 'antd';
import './index.less';
const { TabPane } = Tabs;
export const TabContext = React.createContext({});

const TabTemplate = ({comp_data,fixed_tab,add_pane,edit_pane})=>{

    const [panes,setPanes]=useState([
        { 
            title: 'tab1', 
            key: '1',
            closable: false,
        }
    ]);

    const [activeKey,setActiveKey]=useState('1');

    const addTab = (type,row)=>{
        switch(type) {
            case 'add':
                addButton();
               break;
            case 'edit':
                editButton(row);
               break;
            default:
               console.log("默认")
        }  
    }
    const addButton = ()=>{
        let new_pane = [...panes];
        const { title="add", tab_key='add', comp}=add_pane;
        let new_activeKey =  tab_key;
        if(panes.find((pane)=>pane.key=== new_activeKey )){//切换
            setActiveKey(new_activeKey);
        }else{
            const new_add_pane= { 
                title,
                key: new_activeKey, 
                closable: true,
                comp,  
            }
            new_pane.push(new_add_pane);
            setActiveKey(new_activeKey);
            setPanes(new_pane); 
        }
    }
    const editButton = (row)=>{ 
        let new_pane = [...panes];
        const { title="edit", tab_key='id', comp}=edit_pane;
        let new_activeKey =  row[tab_key];
        // let new_activeKey =  tab_key;
        if(panes.find((pane)=>pane.key=== new_activeKey )){//切换
            setActiveKey(new_activeKey);
        }else{
            const new_add_pane= { 
                title:`${new_activeKey}编辑`,
                key: new_activeKey, 
                closable: true,
                comp,  
            }
            new_pane.push(new_add_pane);
            setActiveKey(new_activeKey);
            setPanes(new_pane); 
        }
    }

    const remove = targetKey => {
        console.log('remove',targetKey);
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
            setPanes( [{...panes[0],...fixed_tab}])
        }  
    },[])

    return (
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
                            <CompPage addTab={addTab} colseTab={remove} tab_key={activeKey} />
                        </TabPane>
                    )
                })
            }
        </Tabs>
      
    )
}
export default TabTemplate;