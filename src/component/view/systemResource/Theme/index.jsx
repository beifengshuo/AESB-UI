import React, {useContext} from "react";
import TabTemplate from './TabTemplate';
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
        title: `新增`,
        tab_key: 'AddTheme', 
        comp:"AddTheme",//必填   
    }

    const edit_pane= { 
        title: `编辑`,
        tab_key: 'EditTheme', 
        comp:"EditTheme",//必填   
    }
    
    return (
        <>
            <TabTemplate 
                comp_data={comp_data} 
                fixed_tab={fixed_tab} 
                add_pane={add_pane}
                edit_pane={edit_pane}
            />  
        </>
    )
}
export default Theme;