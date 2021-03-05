import React from "react";
import TabTemplate from '@/baseComponent/AiTab/TabTemplate';
import QuieueList from './QuieueList';
const comp_data ={
    QuieueList,
}
const TemplateQueue = ()=>{
    const fixed_tab ={ 
        title: '模板队列', 
        comp:"QuieueList",
    }
    return (
        <>
            <TabTemplate 
                comp_data={comp_data} 
                fixed_tab={fixed_tab} 
                add_pane={{}}
            />  
        </>
    )
}
export default TemplateQueue;