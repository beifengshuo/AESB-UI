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

export const menu_data=[
    {
        name:"首页",
        key:"首页",
        icon:<HomeOutlined />,
        comp:"Home",
        breadcrumb_path:[
            {name:"首页",comp:"Home"}
        ]
    },
    {
        name:"服务管理",
        key:"服务管理",
        icon:<AppstoreAddOutlined />,
        children:[
            {
                name:'系统注册中心', key:"系统注册中心", url:`/general`,comp:"SystemRegistry", 
                breadcrumb_path:[
                    {name:"服务管理"},
                    {name:"系统注册中心",comp:"SystemRegistry"},
                ]
            },
            {
                name:'服务注册中心' , key:"服务注册中心", url:`/cache-settings`,comp:"ServiceRegistry",
                breadcrumb_path:[
                    {name:"服务管理"},
                    {name:"服务注册中心",comp:"ServiceRegistry"},
                ]
            },
            {
                name:'字段映射配置' , key:"字段映射配置", url:`/cache-settings`,comp:"FieldMapping",
                breadcrumb_path:[
                    {name:"服务管理"},
                    {name:"字段映射配置",comp:"FieldMapping"},
                ]
            },
            {
                name:'服务代理' , key:"服务代理", url:`/cache-settings`,comp:"ServiceAgent",
                breadcrumb_path:[
                    {name:"服务管理"},
                    {name:"服务代理",comp:"ServiceAgent"},
                ]
            },
            {
                name:'黑白名单' , key:"黑白名单", url:`/cache-settings`,comp:"BlackAndWhite",
                breadcrumb_path:[
                    {name:"服务管理"},
                    {name:"黑白名单",comp:"BlackAndWhite"},
                ]
            },
            {
                name:'流量控制' , key:"流量控制", url:`/cache-settings`,comp:"FlowControl",
                breadcrumb_path:[
                    {name:"服务管理"},
                    {name:"流量控制",comp:"FlowControl"},
                ]
            },
            {
                name:'WS服务' , key:"WS服务", url:`/cache-settings`,comp:"WS",
                breadcrumb_path:[
                    {name:"服务管理"},
                    {name:"WS服务",comp:"WS"},
                ]
            },
            {name:'流程' , key:"流程", url:`/cache-settings`},
        ]
    },
    {
        name:"系统资源",
        key:"系统资源",
        icon:<TeamOutlined />,
        children:[
            {
                name:'触发器' , key:"Trigger", url:`/cache-settings`,comp:"Trigger",
                breadcrumb_path:[
                    {name:"系统资源"},
                    {name:"触发器",comp:"Trigger"},
                ]
            },
            {
                name:'闪回' , key:"Flashback", url:`/cache-settings`,comp:"Flashback",
                breadcrumb_path:[
                    {name:"系统资源"},
                    {name:"闪回",comp:"Flashback"},
                ]
            },
            {
                name:'CDC' , key:"CDC", url:`/cache-settings`,comp:"CDC",
                breadcrumb_path:[
                    {name:"系统资源"},
                    {name:"CDC",comp:"CDC"},
                ]
            },
            {
                name:'数据源' , key:"数据源", url:`/cache-settings`,comp:"DataSource",
                breadcrumb_path:[
                    {name:"系统资源"},
                    {name:"数据源",comp:"DataSource"},
                ]
            },
            {
                name:'文件池' , key:"文件池", 
              
                children:[
                    {
                        name:'本地池' , key:"本地池", url:`/cache-settings`,comp:"LocalPool",
                        breadcrumb_path:[ {name:"系统资源"},{name:"文件池"},{name:"本地池",comp:"LocalPool"}]
                    },
                    {
                        name:'远程池' , key:"远程池", url:`/cache-settings`,comp:"RemotePool",
                        breadcrumb_path:[ {name:"系统资源"}, {name:"文件池"}, {name:"远程池",comp:"RemotePool"}]
                },//远程池 考虑跳转
                ]
            },
            {
                name:'队列' , key:"queue", 
                children:[
                    {
                        name:'本地队列' , key:"Local", url:`/cache-settings`,comp:"LocalQueue",
                        breadcrumb_path:[
                            {name:"系统资源"},
                            {name:"队列"}, 
                            {name:"本地队列",comp:"LocalQueue"}
                        ],
                    },
                    {
                        name:'远程队列' , key:"Remote", url:`/cache-settings`,comp:"RemoteQueue",
                        breadcrumb_path:[
                            {name:"系统资源"},
                            {name:"队列"}, 
                            {name:"远程队列",comp:"RemoteQueue"}
                        ],
                    },
                    {
                        name:'模板队列' , key:"Template", url:`/cache-settings`,comp:"TemplateQueue",
                        breadcrumb_path:[
                            {name:"系统资源"},
                            {name:"队列"}, 
                            {name:"模板队列",comp:"TemplateQueue"}
                        ],
                    },
                    {
                        name:'传输队列' , key:"Transmission", url:`/cache-settings`,comp:"TransmissionQueue",
                        breadcrumb_path:[
                            {name:"系统资源"},
                            {name:"队列"}, 
                            {name:"传输队列",comp:"TransmissionQueue"}
                        ],
                    },
                    {
                        name:'死信队列' , key:"DeadLetter", url:`/cache-settings`,comp:"DeadLetterQueue",
                        breadcrumb_path:[
                            {name:"系统资源"},
                            {name:"队列"}, 
                            {name:"死信队列",comp:"DeadLetterQueue"}
                        ],
                    },
                ]
            },

            {
                name:'主题' , key:"主题", url:`/cache-settings`,comp:"Theme",
                breadcrumb_path:[
                    {name:"系统资源"},
                    {name:"主题",comp:"Theme"}
                ],
            },

            {
                name:'传输通道' , key:"传输通道", 
                children:[
                    {
                        name:'主动通道' , key:"主动通道", url:`/cache-settings`,comp:"ActiveChannel",
                        breadcrumb_path:[
                            {name:"系统资源"},
                            {name:"传输通道"}, 
                            {name:"主动通道",comp:"ActiveChannel"}
                        ],
                    },
                    {
                        name:'被动通道' , key:"被动通道", url:`/cache-settings`,comp:"PassiveChannel",
                        breadcrumb_path:[
                            {name:"系统资源"},
                            {name:"传输通道"}, 
                            {name:"被动通道",comp:"PassiveChannel"}
                        ],
                    },
                ],
                
            },
            {
                name:'调度' , key:"调度", url:`/cache-settings`,comp:"Schedule",
                breadcrumb_path:[
                    {name:"系统资源"},
                    {name:"调度",comp:"Schedule"}
                ],
            },
            {
                name:'系统变量' , key:"系统变量", url:`/cache-settings`,comp:"SystemVar",
                breadcrumb_path:[
                    {name:"系统资源"},
                    {name:"系统变量",comp:"SystemVar"}
                ],
            },
        ]
    },
    {
        name:"日志管理",
        key:"日志管理",
        icon:<FileProtectOutlined />,
        children:[
            {name:'业务日志监控', key:"业务日志监控", url:`/general`},
            {name:'系统监控' , key:"系统监控", url:`/cache-settings`},
            {name:'服务日志' , key:"服务日志", url:`/cache-settings`},
            {name:'流程日志' , key:"流程日志", url:`/cache-settings`},
            {name:'调度日志' , key:"调度日志", url:`/cache-settings`},
            {name:'操作日志' , key:"操作日志", url:`/cache-settings`},
            {name:'域操作日志' , key:"域操作日志", url:`/cache-settings`},
            {name:'数据传输统计日志（流程）' , key:"数据传输统计日志（流程）", url:`/cache-settings`},
            {name:'数据传输统计日志（表）' , key:"数据传输统计日志（表）", url:`/cache-settings`},
            {name:'报文处理统计' , key:"报文处理统计", url:`/cache-settings`},
            {name:'报文处理查询' , key:"报文处理查询", url:`/cache-settings`},
            {
                name:'日志清理' , key:"日志清理", 
                children:[
                    {name:'服务' , key:"服务", url:`/cache-settings`},
                    {name:'流程' , key:"流程", url:`/cache-settings`},
                    {name:'调度' , key:"调度", url:`/cache-settings`},
                    {name:'文件传输' , key:"文件传输", url:`/cache-settings`},
                ]
            },
            {
                name:'历史版本清理' , key:"历史版本清理", 
                children:[
                    {name:'服务历史版本清理' , key:"服务历史", url:`/cache-settings`},
                    {name:'流程历史版本清理' , key:"流程历史", url:`/cache-settings`},
                ]
            },
        ]
    },
    {
        name:"系统管理",
        key:"系统管理",
        icon:<SecurityScanOutlined />,
        children:[
            {
                name:'集群服务器管理', key:"集群服务器管理", url:`/general`,comp:"ClusterServer",
                breadcrumb_path:[ {name:"系统管理"},{name:"集群服务器管理",comp:"ClusterServer"}]
            },//页面复杂，需讨论数量和跳转
            {name:'权限菜单管理', key:"权限菜单管理", url:`/general`},
            {name:'组织管理', key:"组织管理", url:`/general`},
            {name:'角色管理', key:"角色管理", url:`/general`},
            {name:'用户管理', key:"用户管理", url:`/general`},
            {name:'系统信息（license信息）', key:"系统信息（license信息）", url:`/general`,comp:"LicenseInfo"},
        ]   
    },
]

