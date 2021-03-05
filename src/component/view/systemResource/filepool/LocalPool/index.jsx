import React from "react";
import TabTemplate from '@/baseComponent/AiTab/TabTemplate';
import Detail from './Detail';
import PoolList from './PoolList';
const comp_data ={
    Detail,
    PoolList,
}
const LocalPool = ()=>{
    const fixed_tab ={ 
        title: '本地池', 
        comp:"PoolList",
    }
    const add_pane= { 
        title_suffix: `详细信息`,
        tab_key: 'poolName', 
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
export default LocalPool;