import React,{useState} from "react";
import TableTemplate from '@/baseComponent/AiTable/TableTemplate';

import AddLocalPool from './AddLocalPool';
import EditLocalPool from './EditLocalPool';
import DefaultDelete from '@/baseComponent/DefaultDelete';

const PoolList = ({addTab,panes})=>{
    const columns=[
        { title: '文件池名称', dataIndex: 'poolName', key:'poolName',ellipsis:true,render: (text,record) => <a onClick={ ()=>addTab(record) }> { text } </a> },
        { title: '描述', dataIndex: 'description', key:'description',ellipsis:true,},
        { title: '文件数', dataIndex: 'fileCount', key:'fileCount',width : 200},
        { title: '已用容量(MB)', dataIndex: 'usedCapacity', key:'usedCapacity',width : 200},
        { title: '总容量(MB)', dataIndex: 'volume', key:'volume',width : 200},  
    ]
    const buttons=[
        // { title: '新增', key:"1" },
        // { title: '编辑', key:"2" },
        { title: '启动', key:"4" },
        { title: '停止', key:"5" },
        // { title: '删除', key:"3" },
    ]
    const searchs=[
        {label:'文件池名称', name:'poolName' },
    ]
    const dataTable={
        list:[
            {
                id:"1",
                description: "",
                fileCount: 0,
                poolName: "testPool",
                running: true,
                usedCapacity: 0,
                volume: 32768,
            },
            {
                id:"2",
                description: "",
                fileCount: 0,
                poolName: "xhh_l_1",
                running: true,
                usedCapacity: 0,
                volume: 32768,
            },
        ],
        total:2,
    }
    return(
        <TableTemplate 
            buttons={buttons}
            searchs={searchs}
            columns={columns}
            dataTable={dataTable}
            // searchParams={{approveStatus:1}}
            // getTableData={(data)=>getList(data)}
        >
            <AddLocalPool/>
            <EditLocalPool/>
            <DefaultDelete/>
        </TableTemplate>
        
    )
}

export default PoolList;
