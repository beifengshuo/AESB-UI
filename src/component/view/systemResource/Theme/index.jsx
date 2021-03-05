import React from "react";
import TabTemplate from '@/baseComponent/AiTab/TabTemplate';
import EditTheme from './EditTheme';
import AddTheme from './AddTheme';
import ThemeList from './ThemeList';
const comp_data ={
    AddTheme,
    EditTheme,
    ThemeList,
}
const Theme = ()=>{
    const fixed_tab ={ 
        title: '主题', 
        comp:"ThemeList",
    }
    const add_pane= { 
        title_suffix: `详细信息`,
        tab_key: 'queueName', 
        comp:"AddTheme",//必填   
    }
    return (
        <>
          <TabTemplate 
            comp_data={comp_data} 
            fixed_tab={fixed_tab} 
            add_pane={add_pane}
            />  
        </>
    )
}
export default Theme;