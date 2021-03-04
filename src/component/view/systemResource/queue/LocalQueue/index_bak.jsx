import React,{useState} from "react";
import PageTab from './PageTab';
const LocalQueue = ()=>{
    const [panes,setPanes]=useState([
        { 
            title: '本地队列', 
            key: '1',
            closable: false,
            comp:"QuieueList",  
        },
    ]);
    const [activeKey,setActiveKey]=useState('1');

    const addTab = (row)=>{
        let new_pane = [...panes];
        let activeKey =  row.id;
        console.log("addTab",row);
        if(panes.find((pane)=>pane.key===row.id)){//切换
            setActiveKey(activeKey);
        }else{//添加
            const add_pane= { 
                title: `${row.queueName}详细信息`,
                key: activeKey, 
                closable: true, 
                comp:"Detail",   
            }
            new_pane.push(add_pane);
            setActiveKey(activeKey);
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

    return (
        <>
            <PageTab 
                panes={panes} 
                addTab={addTab}
                activeKey={activeKey}
                onChange={(key)=>{setActiveKey(key)}}
                onEdit={onTabEdit}
                hideAdd  
            />
        </>
    )
}
export default LocalQueue;