// 租户管理
import React ,{ useEffect , useState }from "react";
import {Space,Button ,Form,Row,Col,Input} from 'antd';
import TableTemplate from '@/baseComponent/AiTable/TableTemplate';
import DefaultPage from './DefaultPage';
import DefaultButton from './DefaultButton';


import { getTenantList,addTenant,deleteTenantBybatch } from '@/api/operate/tenantManagement';

const getStatusText = (status)=>{
    let text = (status==1)?"正常":status==2?"冻结":status==3?"未开发状态":"未开发状态"
    return text;
}

const TenantManagement = (props)=>{
    const { 
        addBreadcrumb,
     }=props;
    const columns=[
        { title: '序号', render:(text, record, index)=>{return index},width:50,},
        { title: '租户code',  dataIndex: 'code', key:'code', ellipsis: true, },
        { title: '租户名称', dataIndex: 'name', key:'name', ellipsis: true, },
        { title: '当前用户数', dataIndex: 'currentUserNum', key:'currentUserNum',width:100, },
        { title: '用户数上限', dataIndex: 'userMaxNum', key:'userMaxNum',width:100,},
        { title: '是否有效', dataIndex: 'status', key:'status',width:80, render:(text, record, index)=>getStatusText(text)},//待开通,2正常,3(冻结)
        { title: '创建人', dataIndex: 'crtId', key:'crtId' ,ellipsis: true,},
        { title: '创建时间', dataIndex: 'crtTime', key:'crtTime',ellipsis: true,sorter:true, },
        { title: '更新人',dataIndex: 'updId', key:'updId',ellipsis: true, },
        { 
            title: '更新时间', dataIndex: 'updTime', key:'updTime',
            sorter:true,
            ellipsis: true,
            // sortOrder:'ascend',
        },
    ]
    const buttons=[
        // { title: '新增', key:"1" },
        // { title: '查看', key:"1" },
        // { title: '编辑', key:"2" },
        // { title: '功能分配', key:"3" },
        // { title: '冻结', key:"4" },
        // { title: '查看用户', key:"5" },
        // { title: '配置内核', key:"6" },
        // { title: '删除',  key:"7"},
    ]
    //搜索需要跟设计师或需求师
    const searchs=[
        {label:'租户code', name:'code', },
        {label:'租户名称', name:'name'},
        {label:'用户数上限', name:'userMaxNum'},
        {label:'是否有效', name:'status',type:"select",option:[
            {value:1,label:"待开通"},
            {value:2,label:"正常"},
            {value:3,label:"冻结"}
        ]},
        {label:'更新时间', name:'updTime',type:'rangePicker'}, 
    ]
 

    return (
        <>
            <TableTemplate 
                title="租户管理"
                columns={columns}
                buttons={buttons}
                searchs={searchs}
                getTableData={getTenantList}
            > 
                <DefaultButton  addBreadcrumb={addBreadcrumb}  name={"新增"}   typeId='add' /> 
                <DefaultButton 
                    name={"删除"}  
                    typeId='delete' 
                    deletefun={deleteTenantBybatch} 
                />

                <DefaultButton addBreadcrumb={addBreadcrumb} name={"编辑"} typeId='edit'/>
                <DefaultButton addBreadcrumb={addBreadcrumb} name={"查看"} typeId='view'/>
                <DefaultButton addBreadcrumb={addBreadcrumb} name={"功能分配"} typeId='funAllocation'/>
                <DefaultButton 
                    // addBreadcrumb={addBreadcrumb} 
                    name={"冻结"} 
                    typeId='frozen'
                    // frozenfun={}
                />
                <DefaultButton 
                    // addBreadcrumb={addBreadcrumb} 
                    name={"解冻"} 
                    typeId='thaw'
                />
                <DefaultButton addBreadcrumb={addBreadcrumb} name={"查看用户"} typeId='viewUser'/>
                <DefaultButton addBreadcrumb={addBreadcrumb} name={"配置内核"} typeId='configureKerne'/>
            </TableTemplate>
        </>
    )
}
TenantManagement.DefaultPage = DefaultPage;
export default TenantManagement;