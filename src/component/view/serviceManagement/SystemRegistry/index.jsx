import React from "react";
import TableTemplate from '@/baseComponent/AiTable/TableTemplate';
import { getList } from "@/api/serviceManagement/systemRegistry";

import AddSystem from './AddSystem';
import EditSystem from './EditSystem';
import DeleteSystem from './DeleteSystem';


const SystemRegistry = (props)=>{
    
     const columns=[
        { title: '接口名称', dataIndex: 'name', key:'name', width:160,ellipsis:true,},

        { title: '接口编码', dataIndex: 'code', key:'code', width:100 },
        { title: '所属用户', dataIndex: 'beingUser', key:'beingUser',width:120,align:'center' },
        { title: '是否记录日志', dataIndex: 'log', key:'log',width:120, render: text => <>{text?"是":"否"}</>, align:'center'},
        { title: '是否映射', dataIndex: 'map', key:'map',width:120, render: text => <>{text?"是":"否"}</>, align:'center'}, 
        { title: '请求IP', dataIndex: 'ip', key:'ip',width:240},
        { title: '备注', dataIndex: 'remark', key:'remark',ellipsis:true},

        { title: '修改人', dataIndex: 'updateUser', key:'updateUser',width:120,},
        { title: '录入人', dataIndex: 'createUser', key:'createUser',width:120,},
        { title: '录入日期', dataIndex: 'createTime', key:'createTime',width:160,sorter: (a, b) => a.createTime - b.createTime },
        { title: '修改日期', dataIndex: 'updateTime', key:'updateTime',width:160,sorter: (a, b) => a.updateTime - b.updateTime },  
    ]

    const buttons=[
        // { title: '新增', key:"1" },
        // { title: '编辑', key:"2" },
        // { title: '删除', key:"3" },
    ]
    const searchs=[
        {label:'系统编码', name:'code' },
        {label:'系统名称', name:'name'},
        
    ]
    return (
        <>
            <TableTemplate 
                title="系统注册中心"
                buttons={buttons}
                searchs={searchs}
                // searchParams={{approveStatus:1}}
                columns={columns}
                // dataTable={dataSource}
                getTableData={(data)=>getList(data)}
            >
                <AddSystem/>
                <EditSystem/>
                <DeleteSystem/>
            </TableTemplate>
        </>
    )
}
export default SystemRegistry;