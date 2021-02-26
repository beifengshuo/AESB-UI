/*---------aesb start---------*/
export const SET_COLLAPSED = "SET_COLLAPSED";//菜单收缩和展开
export const SET_SELECT_MENU = "SET_SELECT_MENU";//设置选中的菜单

//setCollapsed-菜单收缩和展开-aesb
export const setCollapsed =(info)=>{
    return{
        type:SET_COLLAPSED,
        payload:info
    }
}
//setSelectMenu-设置选中的菜单-aesb
export const setSelectMenu =(info)=>{
    return{
        type:SET_SELECT_MENU,
        payload:info
    }
}
/*---------aesb end---------*/
