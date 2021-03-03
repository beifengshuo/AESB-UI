import React,{useState,useEffect} from "react";
import TableTemplate from '@/baseComponent/AiTable/TableTemplate';
import { getserviceList } from "@/api/serviceManagement/serviceRegistry";
import AddService from './AddService';
import EditService from './EditService';
import DeleteService from './DeleteService';

const ServiceRegistry = ()=>{
    // console.log("EditService.ViewDialog",EditService.ViewDialog);
    // console.log("ViewDiolog",ViewDiolog);
    
    const columns=[
        
        { title: '接口名称', dataIndex: 'name', key:'name', width:160,ellipsis:true,fixed:'left'},
        { title: '接口编码', dataIndex: 'code', key:'code', width:100 },
        { title: '接口地址', dataIndex: 'url', key:'url', width:240},

        { title: '目标格式', dataIndex: 'target', key:'target',width:80, render: text =><EditService.ViewDialog text={text} title="目标格式"/> , align:'center' },
        { title: '响应格式', dataIndex: 'res', key:'res',width:80, render: text =><EditService.ViewDialog text={text} title="响应格式"/> , align:'center'},
        { title: '协议类型', dataIndex: 'type', key:'type',width:120 },
        { title: '连接超时', dataIndex: 'overTime', key:'overTime',width:100 },
        { title: '调用超时', dataIndex: 'overTime2', key:'overTime2',width:100 },
        { title: '命名空间', dataIndex: 'space', key:'space',width:140 ,ellipsis:true},
        { title: 'WS方法', dataIndex: 'WS', key:'WS',width:100 },
        { title: '是否记录日志', dataIndex: 'isLog', key:'isLog',width:120, render: text => <>{text?"是":"否"}</>, align:'center'},
        { title: '备注', dataIndex: 'remark', key:'remark',ellipsis:true},
        
        { title: '修改人', dataIndex: 'updator', key:'updator',width:120,},
        { title: '录入人', dataIndex: 'creator', key:'creator',width:120,},
        { title: '录入日期', dataIndex: 'createTime', key:'createTime',width:160,sorter: (a, b) => a.createTime - b.createTime },
        { title: '修改日期', dataIndex: 'updateTime', key:'updateTime',width:160,sorter: (a, b) => a.updateTime - b.updateTime },   
    ]
    const buttons=[
        // { title: '新增', key:"1"},
        // { title: '编辑', key:"2" },
        // { title: '删除', key:"3" },
    ]
    const searchs=[
        {label:'接口编码', name:'code'},
        {label:'接口名称', name:'name'},
        {label:'协议类型', name:'type',type:"select",
        option:[
            { value:"WEBSERVICE", label:"WEBSERVICE" },
            { value:"HTTP", label:"HTTP" },
        ]},    
    ]

    const dataSource={
        total:1,
        list:[
            {id:'1',code:'code',name:'name'}
        ]
    }

    return (
        <>
            <TableTemplate 
                title="服务注册中心"
                buttons={buttons}
                searchs={searchs}
                // searchParams={{approveStatus:1}}
                columns={columns}
                dataTable={dataSource}
                getTableData={(data)=>getserviceList(data)}
                // tableScrollX={2200}
            >
                <AddService/>
                <EditService/>
                <DeleteService/>
            </TableTemplate>
        </>
    )
}
export default ServiceRegistry;