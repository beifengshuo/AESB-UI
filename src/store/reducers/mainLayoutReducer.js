import {
    SET_COLLAPSED,
    SET_SELECT_MENU,
}from '../actions/mianLayoutAction';
const initState = {
    slelct_menu:{//设置选中的菜单
        key:"首页",
        comp:"Home",
        breadcrumb:[{name:"首页",comp:"Home"}],
    },
    collapsed:false, //菜单的收缩展开
}
const MainLayoutReducer = (state = initState , action) => {
    const {
        type ,
        payload,
    } = action ;
    
    switch (type) {
        case SET_COLLAPSED ://菜单收缩和展开
            return  Object.assign({} , state , {
                collapsed:action.payload
        });
        case SET_SELECT_MENU ://设置选中的菜单
            return  Object.assign({} , state , {
                slelct_menu:action.payload
        });
        default :
            return state ;
        
    }
}
export default MainLayoutReducer;