import React from "react";
import { AppstoreOutlined } from '@ant-design/icons';
import {
    HomeOutlined,
    AppstoreAddOutlined,
    TeamOutlined,
    PullRequestOutlined,
    SecurityScanOutlined,
    FileProtectOutlined,
    createFromIconfontCN 
} from '@ant-design/icons';


const IconFont = createFromIconfontCN({
    scriptUrl: 'ali_font_icon.js',//只需引入js,路径在public下，从阿里图标symbol中js,不是下载之后的，图标可在assets中查看，此方式正在试用中，如不方便使用，可更换其他方式   
});

export const getMenu = (realmName)=>{
    switch (realmName) {
        case '1':
            return ([
                {
                    name:"首页",
                    key:"首页",
                    icon:<IconFont type="icon1home" />,
                    url:`/home`
                },
                {
                    name:"域设置",
                    key:"域设置",
                    icon:<IconFont type="icon2gongju" />,
                    children:[
                        {name:'通用', key:"realmGeneral", url:`/general`},
                        // {name:'登录' , key:"realmLogin", url:`${realmName}/login`},
                        {name:'缓存' , key:"realmCache", url:`/cache-settings`},
                    ]
                },   
            ]);
            case '2':
                return ([
                    {
                        name:'应用管理',
                        key:"应用管理",
                        icon:<IconFont type="icon3yingyongguanli"/>,
                        url:`/client`
                    }, 
                    {
                        name:'用户管理',
                        key:"用户管理",
                        icon:<IconFont type="icon4yonghu"/>, 
                        url:`/user`,
                    },   
                ])
        default :
            return getMenuData("master") ;
    }
    
}
export const getMenuData = (realmName)=>{
    return ([
        {
            name:"首页",
            key:"首页",
            icon:<IconFont type="icon1home" />,
            url:`${realmName}/home`
        },
        {
            name:"域设置",
            key:"域设置",
            icon:<IconFont type="icon2gongju" />,
            children:[
                {name:'通用', key:"realmGeneral", url:`${realmName}/general`},
                // {name:'登录' , key:"realmLogin", url:`${realmName}/login`},
                {name:'缓存' , key:"realmCache", url:`${realmName}/cache-settings`},
            ]
        },
        {
            name:'应用管理',
            key:"应用管理",
            icon:<IconFont type="icon3yingyongguanli"/>,
            url:`${realmName}/client`
        }, 
        {
            name:'用户管理',
            key:"用户管理",
            icon:<IconFont type="icon4yonghu"/>, 
            url:`${realmName}/user`,
        }, 
        {
            name:'角色管理',
            key:"角色管理",
            icon:<IconFont type="icon5jiaose-5"/>, 

            children:[
                {name:'角色', key:"role", url:`${realmName}/role`},
                {name:'默认角色', key:"defaultRole", url:`${realmName}/defaultRole`},  
            ]
        }, 
        {
            name:'组管理',
            key:"组管理",
            icon:<IconFont type="icon6zuzhi-3"/>,  
            children:[
                {name:'组', key:"group", url:`${realmName}/group`},
                {name:'默认组', key:"defaultGroup", url:`${realmName}/defaultGroup`},  
            ]
        }, 
        {
            name:'安全中心',
            key:"安全中心",
            icon:<IconFont type="icon7anquanshezhi"/>, 
            children:[
                {name:'绑定', key:"securityFlowbings", url:`${realmName}/security-flowbings`, },
                {name:'必需操作', key:"securityRequiredactions" ,url:`${realmName}/security-requiredactions`,},
                {name:'OTP策略', key:"securityOtp",  url:`${realmName}/security-otp`,},
                {name:'安全防御', key:"securityDefense",  url:`${realmName}/security-defense`,},
                {name:'token', key:"securityTokens", url:`${realmName}/security-tokens`,},
                {name:'邮件', key:"securityEmail", url:`${realmName}/security-email`,},
                {name:'会话', key:"securitysessio", url:`${realmName}/security-session`,},
              ]
        },
        {
            name:'日志审计',
            key:"日志审计",
            icon:<IconFont type="icon8liucheng"/>, 
            children:[
                  {name:'登录日志',key:"登录日志",url:`${realmName}/audition/loginEvents`},
                  {name:'操作日志',key:"操作日志",url:`${realmName}/audition/adminEvents`},
              ]
        },
         
    ])
}

