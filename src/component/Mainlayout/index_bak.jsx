import React ,{useEffect , useState}from "react";
import { Layout ,Row , Col, Button,Dropdown,Menu,Avatar,Modal, Breadcrumb} from 'antd';
import {MessageComp , ModalComp} from '@/baseComponent/PromptComp';
import classnames from "classnames";
import {ContentRouter} from '@/RootRouter';
import IntegrateHome from '@/component/integrate/Home';//
import AiHeader  from './AiHeader';
import {  createFromIconfontCN } from '@ant-design/icons';
import {loginOut} from '@/api/login';
import {
    Link,
    useParams,
    useRouteMatch,
    Route
} from "react-router-dom";
import './index.less'

const IconFont = createFromIconfontCN({
    scriptUrl: 'ali_font_icon.js',//只需引入js,路径在public下，从阿里图标symbol中js,不是下载之后的，图标可在assets中查看，此方式正在试用中，如不方便使用，可更换其他方式   
});



const { Header, Sider, Content } = Layout;
const { SubMenu } = Menu;


const Topics = (props) => {
    const {
        // realm_list=[],
        // selected_realm="",
        // breadcrumb=[],
        // active_menu=[],
        // sider_menu_list=[],
        // collapsed_menu:collapsed,//重命名


        // getRealmList,//获取头部下拉框
        // getSiderMenuList,//获取菜单

        // setSelectMenu,//设置选中菜单和面包屑
        // setSelectRealm,
        // setBreadcrumb,
        // getWhoAmI,
        // setCollapsed,
        
        // setRememberPageState,
    } = props;

    let { loginId  } = useParams();
    let { url } = useRouteMatch();
    
    //用户登出
    const handelLoginOut = ()=>{
        loginOut().then(()=>{
           props.history.push({pathname: `/cloud-integration-enterprise/login`})
        })
    }
    //点击菜单
    const handleClickMenuItem = (data)=>{
        // const {key,item,keyPath} = data;
        // let keyPathLen = keyPath.length;
        
        // //1.准备新的面包屑,只有末级是英文key,其他是中文key,后期必须改进
        // const new_breadcrumb = keyPath.reverse().map((ele,i)=>{
        //     let obj = {};
        //     if(i == keyPathLen-1){
        //         obj={
        //             key: key,
        //             level: i,//breadcrumb移除最后一个，影响breadcrumb
        //             name:item.props.name,
        //             url: item.props.url
        //         } 
        //     }else{
        //         obj={
        //             key: ele,
        //             level: i,
        //             name:ele,
        //         } 
        //     }
        //     return obj
        // });

       
        // //2.设置选中菜单和面包屑
        // setSelectMenu({
        //     breadcrumb:new_breadcrumb,
        //     active_menu:[key],
        // }); 
        // props.history.push(item.props.url);
    }
    //点击面包屑
    const handleClickBreadcrumb = (data)=>{
        // const {url:itemUrl}=data;
        // console.log("handleClickBreadcrumb",data)
       
        // if(itemUrl && itemUrl != props.location.pathname){
        //     const { key , level , name , url }=data;
        //     let new_breadcrumb = [];
        //     // let new_active_menu = key?key:active_menu;
        //     if(url){
        //         new_breadcrumb =  breadcrumb.filter((ele,i)=>(ele.level <= level));
        //         setSelectMenu({
        //             breadcrumb : new_breadcrumb,
        //             active_menu : [key]
        //         })
        //         props.history.push(url);
        //     }
        // }
    }
    //新增面包屑
    const addBreadcrumb = (data)=>{//data={key,level,name,url}
        // const { key , level , name , url }=data;
        // const new_breadcrumb = [...breadcrumb];
        // new_breadcrumb.push( data );
        // console.log("data",data)
        // setBreadcrumb(new_breadcrumb);
        // props.history.push(data.url);
    }

  
    //渲染菜单列表
    const renderMenu = data => data.map((ele , index)=>{//菜单的icon需要修改传入方式
        if(Array.isArray(ele.children)&& ele.children.length > 0 ){
            return (
                <SubMenu key={ele.name}   title={ele.name}>
                    { renderMenu(ele.children) }  
                </SubMenu>
            )
        }else{
            return <Menu.Item key={ele.key }  url={ele.url}  name={ele.name}>{ele.name}</Menu.Item>
        }
    })
   
    //动态获取菜单
    const getSiderMenu=(realm)=>{
        // getSiderMenuList({type:realm,url}).then((res)=>{
        //     setSelectMenu({
        //         breadcrumb:res.breadcrumb,
        //         active_menu:res.active_menu,
        //     }); 
        //     let len = res['breadcrumb'].length;
        //     props.history.push(res['breadcrumb'][len-1].url);
        // })
    }

    //页面加载
    useEffect(()=>{
        // getRealmList(loginId).then(res=>{
        //     let realm_name =selected_realm ?selected_realm :res[0].realm;
        //     let isManagement = props.location.pathname =="/cloud-integration-enterprise/mainLayout/management/user";
        //     let isIntegrat = props.location.pathname =="/cloud-integration-enterprise/mainLayout/integrat/application";
        //     let isOperate = props.location.pathname =="/cloud-integration-enterprise/mainLayout/operate/home";
        //     let isLoginIn = props.location.pathname =="/cloud-integration-enterprise/mainLayout";

        //     if(isLoginIn || isOperate || isIntegrat || isManagement){
        //         getSiderMenu(realm_name);
        //     }
        // });
    },[]);

    return (
        <>
            <Layout style={{height:'100%',background:"#F5F6F6"}}>
                <Header>
                    <AiHeader
                        
                        now_user_name={"admin"}
                        handelLoginOut={handelLoginOut}

                        // selected_realm={selected_realm} 
                        // handleSelectRealm={(data)=>{
                        //     setSelectRealm(data.realm);
                        //     getSiderMenu(data.realm);
                        // }} 
                    />     
                </Header>
                <Layout>
                    <Sider  
                    // collapsible
                    //  collapsed={collapsed} onCollapse={()=>setCollapsed(!collapsed)} 
                    //             trigger={
                    //                 (!collapsed)
                    //                 ?
                    //                 <><IconFont type="iconshouqitubiao" style={{paddingRight:'5px'}}/>收起</>
                    //                 :
                    //                 <IconFont type="icontubiao"/>  
                    //             }
                            >
                                <Menu 
                                    className="ai-menu"
                                    mode="inline"
                                    theme="dark"
                                    onClick={handleClickMenuItem}
                                    // selectedKeys={active_menu}
                                    // style={{height:'100%',background:"pink"}}
                                >
                                    {/* {
                                        Array.isArray(sider_menu_list) && renderMenu(sider_menu_list)  
                                    }  */}
                                </Menu> 
                                
                        </Sider>
                        {/* <Content className="main-layout-content">
                                <Breadcrumb> 
                                    {
                                        breadcrumb.map((item,index)=>{
                                            const breadcrumbClass = classnames({ 'has-link':!!item.url })
                                            return <Breadcrumb.Item key={index} className={breadcrumbClass} onClick={()=>{handleClickBreadcrumb(item)}}>{item.name}</Breadcrumb.Item>
                                        }) 
                                    }
                                </Breadcrumb>
                                <div className="main-center">
                                    <ContentRouter addBreadcrumb={addBreadcrumb}handleClickBreadcrumb={handleClickBreadcrumb} {...props} />
                                </div>
                            </Content> */}
                    </Layout>
            </Layout>
            
        </>
        
      
    );
}
export default Topics;