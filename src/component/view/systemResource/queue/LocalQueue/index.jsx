import React,{useState} from "react";
import TabTemplate from '@/baseComponent/AiTab/TabTemplate';
import Detail from './Detail';
import QuieueList from './QuieueList';
const comp_data ={
    Detail,
    QuieueList,
}
const LocalQueue = ()=>{
    const fixed_tab ={ 
        title: '本地队列', 
        comp:"QuieueList",
    }
    const add_pane= { 
        title_suffix: `详细信息`,
        tab_key: 'queueName', 
        comp:"Detail",//必填   
    }
    return (
        <>
          <TabTemplate 
            comp_data={comp_data} 
            fixed_tab={fixed_tab} 
            add_pane={add_pane}/>
            
        </>
    )
}
export default LocalQueue;