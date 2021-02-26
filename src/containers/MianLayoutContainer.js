import { connect } from 'react-redux' ;
import {withRouter} from 'react-router-dom';
import MainLayout from '@/component/Mainlayout';

import { 
    //aesb
    setSelectMenu,//选中菜单
    setCollapsed,//菜单收缩
 
} from "@/store/actions/mianLayoutAction";

const mapStateToProps = (state , ownProps) => {
    return {
        ...state.mainLayoutState,
        // tokenState:state.tokenState,
    }
}
// 建立props与store.dispatch的映射关系
const mapDispatchToProps = (dispatch , ownProps) => {
    return {
        setSelectMenu:(info)=>{//选中菜单
            return dispatch(setSelectMenu(info))
        },
        setCollapsed : (info) => {//菜单收缩
            return dispatch(setCollapsed(info));
        },  
    }
}
const MainLayoutContainer = connect (
    mapStateToProps ,
    mapDispatchToProps
) (MainLayout) ;

export default withRouter(MainLayoutContainer);