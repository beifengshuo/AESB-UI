import React ,{useEffect , useState}from "react";
import { Layout ,Row , Col, Button,Dropdown,Menu,Avatar,Modal, Breadcrumb} from 'antd';
import AiHeader  from './AiHeader';
import {  createFromIconfontCN } from '@ant-design/icons';
import classnames from "classnames";
import {menu_data as sider_menu_list} from './menu_data';
import {menu_comp_data as comp_data} from './menu_comp_data';//页面组件集合
import './index.less'


const IconFont = createFromIconfontCN({
    scriptUrl: 'ali_font_icon.js',//只需引入js,路径在public下，从阿里图标symbol中js,不是下载之后的，图标可在assets中查看，此方式正在试用中，如不方便使用，可更换其他方式   
});

const { Header, Sider, Content } = Layout;
const { SubMenu } = Menu;

const Topics = (props) => {
   
    const {
        slelct_menu={
            key:"首页",
            comp:"Home",
            breadcrumb:[{name:"首页",comp:"Home"}],
        },
        collapsed,

        setSelectMenu,//设置选中菜单
        setCollapsed,//设置菜单收缩

    } = props;

    // const [slelct_menu,setSelectMenu]=useState({
    //     key:"首页",
    //     comp:"Home",
    //     breadcrumb:[{name:"首页",comp:"Home"}],
    // });
    // const [collapsed,setCollapsed]=useState(false);

    
    //页面加载
    // useEffect(()=>{
      
    // },[]);
    //用户登出
    const handelLoginOut = ()=>{
        props.history.push("/login")
    }
    //点击菜单
    const handleClickMenuItem = (data)=>{
        const item_props = data.item.props;
        const { name,comp,eventKey,breadcrumb } = item_props;
        setSelectMenu({
            key:eventKey,
            name,
            comp,
            breadcrumb: breadcrumb || [] ,
        })
        console.log('data',data);   
    }
    //点击面包屑
    const handleClickBreadcrumb = (data)=>{}
    //新增面包屑
    const addBreadcrumb = (data)=>{}

  
    //渲染菜单列表
    const renderMenu = data => data.map((ele , index)=>{//菜单的icon需要修改传入方式 
        if(Array.isArray(ele.children)&& ele.children.length > 0 ){
            return (
                <SubMenu key={ele.name}   title={ele.name}>
                    { renderMenu(ele.children) }  
                </SubMenu>
            )
        }else{
            return <Menu.Item key={ele.key } breadcrumb={ele.breadcrumb_path} comp={ele.comp} name={ele.name}>{ele.name}</Menu.Item>
        }
    })
   
    //动态获取菜单
    const getSiderMenu=(realm)=>{
       
    }

    //可以单独提一个组件
    let CompPage = ()=>(<>无此页面</>)
    if(comp_data[slelct_menu["comp"]]){
        // console.log(comp_data[slelct_menu["comp"]])
        CompPage = comp_data[slelct_menu["comp"]]
    }

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
                    collapsible
                     collapsed={collapsed} onCollapse={()=>setCollapsed(!collapsed)} 
                            trigger={
                                (!collapsed)
                                ?
                                <><IconFont type="iconshouqitubiao" style={{paddingRight:'5px'}}/>收起</>
                                :
                                <IconFont type="icontubiao"/>  
                            }
                            >
                                <Menu 
                                    className="ai-menu"
                                    mode="inline"
                                    theme="dark"
                                    onClick={handleClickMenuItem}
                                    selectedKeys={slelct_menu["key"]}
                                    // style={{height:'100%',background:"pink"}}
                                >
                                    {
                                        Array.isArray(sider_menu_list) && renderMenu(sider_menu_list)  
                                    } 
                                </Menu> 
                                
                        </Sider>
                        <Content className="main-layout-content">
                                <Breadcrumb> 
                                    <Breadcrumb.Item >AESB监控平台</Breadcrumb.Item>
                                    {/* <Breadcrumb.Item >首页</Breadcrumb.Item> */}  
                                    {/* className="has-link" */}
                                    {
                                        slelct_menu.breadcrumb.map((item,index)=>{
                                            const breadcrumbClass = classnames({ 'has-link':!!item.comp })
                                            return <Breadcrumb.Item key={index} className={breadcrumbClass} onClick={()=>{handleClickBreadcrumb(item)}}>{item.name}</Breadcrumb.Item>
                                        }) 
                                    }
                                </Breadcrumb>
                                <div className="main-center">
                                    <CompPage/>
                                    {/* <ContentRouter addBreadcrumb={addBreadcrumb}handleClickBreadcrumb={handleClickBreadcrumb} {...props} /> */}
                                </div>
                            </Content>
                    </Layout>
            </Layout>
            
        </>
        
      
    );
}
export default Topics;