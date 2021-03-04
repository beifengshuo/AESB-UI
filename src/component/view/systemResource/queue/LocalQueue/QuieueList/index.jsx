import React,{useState} from "react";
import TableTemplate from '@/baseComponent/AiTable/TableTemplate';
import { getList } from "@/api/systemResource/queue/local";

import AddLocalQueue from './AddLocalQueue';
import EditLocalQueue from './EditLocalQueue';
import DefaultDelete from '@/baseComponent/DefaultDelete';

const QuieueList = ({addTab,panes})=>{
    const columns=[
        { title: '队列名称', dataIndex: 'queueName', key:'queueName',ellipsis:true,render: (text,record) => <a onClick={ ()=>addTab(record) }> { text } </a> },
        { title: '描述', dataIndex: 'description', key:'description',ellipsis:true,},
        { title: '消息数', dataIndex: 'messageCount', key:'messageCount',width : 200,render: (text,record) => <>{`${record.messageCount} / ${record.depth}`}</>,},
        { title: '已用容量(KB)', dataIndex: 'usedCapacity', key:'usedCapacity',width : 200},
        { title: '总容量(KB)', dataIndex: 'volume', key:'volume',width : 200},  
    ]
    const buttons=[
        // { title: '新增', key:"1" },
        // { title: '编辑', key:"2" },
        { title: '启动', key:"4" },
        { title: '停止', key:"5" },
        // { title: '删除', key:"3" },
    ]
    const searchs=[
        {label:'队列名称', name:'queueName' },
    ]
    return(
        <TableTemplate 
            buttons={buttons}
            searchs={searchs}
            columns={columns}
            // searchParams={{approveStatus:1}}
            getTableData={(data)=>getList(data)}
            // title="本地队列"
        >
            <AddLocalQueue/>
            <EditLocalQueue/>
            <DefaultDelete/>
        </TableTemplate>
        
    )
}

export default QuieueList;
