import React from "react";
import TableTemplate from '@/baseComponent/AiTable/TableTemplate';
import { getList } from "@/api/serviceManagement/serviceAgent";

import AddAgent from './AddAgent';
import EditAgent from './EditAgent';
import DeleteAgent from './DeleteAgent';
const ServiceAgent = ()=>{
    
    const columns=[
        { title: '队列名称', dataIndex: 'queueName', key:'queueName',width:160,ellipsis:true, },
        { title: '描述', dataIndex: 'description', key:'description'},
        { title: '消息数', dataIndex: 'messageCount', key:'messageCount'},
        { title: '已用容量(KB)', dataIndex: 'usedCapacity', key:'usedCapacity'},
        { title: '总容量(KB)', dataIndex: 'volume', key:'volume'},  

        // { title: '服务描述', dataIndex: 'serviceName', key:'serviceName',width:160,ellipsis:true,fixed:'left' },
        // { title: '原始服务URL', dataIndex: 'url', key:'url',width:240 },
        // { title: '代理后的服务URL', dataIndex: 'urlAgent', key:'urlAgent',width:240 },
        // { title: '服务名称', dataIndex: 'path', key:'path',width:160, },
        // { title: '目标服务IP', dataIndex: 'ip', key:'ip',width:240 },
        // { title: '目标服务端口', dataIndex: 'port', key:'port',width:120, },
        // { title: '是否启用', dataIndex: 'applyFlag', key:'applyFlag',width:120, render: text => <>{text?"是":"否"}</>, align:'center' },
        // { title: '是否记录日志', dataIndex: 'logFlag', key:'logFlag',width:120, render: text => <>{text?"是":"否"}</>, align:'center' },
        // { title: '连接超时时间', dataIndex: 'connectionTimeOut', key:'connectionTimeOut',width:100 },
        // { title: '调用超时时间', dataIndex: 'callTimeout', key:'callTimeout',width:100},
        // { title: '协议类型', dataIndex: 'protocolType', key:'protocolType',width:100 },
      
        // { title: '修改人', dataIndex: 'updateUser', key:'updateUser',width:120,},
        // { title: '录入人', dataIndex: 'createUser', key:'createUser',width:120,},
        // { title: '录入日期', dataIndex: 'createTime', key:'createTime',width:160,sorter: (a, b) => a.createTime - b.createTime },
        // { title: '修改日期', dataIndex: 'updateTime', key:'updateTime',width:160,sorter: (a, b) => a.updateTime - b.updateTime },
    ]
    const buttons=[
        // { title: '新增', key:"1" },
        // { title: '编辑', key:"2" },
        // { title: '删除', key:"3" },
    ]
    const searchs=[
        {label:'原始服务URL', name:'url' },
    ]
    return (
        <>
            <TableTemplate 
                title="服务代理"
                buttons={buttons}
                searchs={searchs}
                columns={columns}
                // searchParams={{approveStatus:1}}
                getTableData={(data)=>getList(data)}
            >
                <AddAgent/>
                <EditAgent/>
                <DeleteAgent/>
            </TableTemplate>
        </>
    )
}
export default ServiceAgent;