import React from "react";
import TableTemplate from '@/baseComponent/AiTable/TableTemplate';
const Theme = ()=>{
    const columns=[
        { title: '主题名', dataIndex: 'topicName', key:'topicName',ellipsis:true,render: (text,record) => <a onClick={()=>{console.log('aaaa')}}> { text } </a>},
        { title: '描述', dataIndex: 'description', key:'description',ellipsis:true, },
        { title: '总容量(KB)', dataIndex: 'volume', key:'volume',ellipsis:true},
    ]
    const buttons=[
        { title: '新增', key:"1" },
        { title: '编辑', key:"2" },
        { title: '删除', key:"3" },
        { title: '启动', key:"4" },
        { title: '停止', key:"5" },
    ]
    const dataTable={
        list:[
            {
                id:"1",
                depth: 5000,
                description: "",
                messageCount: 0,
                running: true,
                topicName: "testTopic",
                usedCapacity: 0,
                volume: 512000,
            },
            {
                id:"2",
                depth: 5000,
                description: "",
                messageCount: 0,
                running: true,
                topicName: "xhh1",
                usedCapacity: 0,
                volume: 512000,
            },
            {
                id:"3", 
                depth: 5000,
                description: "",
                messageCount: 0,
                running: true,
                topicName: "xhh",
                usedCapacity: 0,
                volume: 512000,
            }
        ],
        total:2,
    }
    return (
        <>
            <TableTemplate 
                title="主题"
                buttons={buttons}
                // searchs={searchs}
                // searchParams={{approveStatus:1}}
                columns={columns}
                dataTable={dataTable}
                // getTableData={(data)=>getList(data)}
            >
                {/* <AddSystem/>
                <EditSystem/>
                <DeleteSystem/> */}
            </TableTemplate>
          
        </>
    )
}
export default Theme;