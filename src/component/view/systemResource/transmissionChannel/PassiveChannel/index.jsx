import React from "react";
import TableTemplate from '@/baseComponent/AiTable/TableTemplate';
const PassiveChannel = ()=>{
    const columns=[
        { title: '通道名称', dataIndex: 'linkerName', key:'linkerName', ellipsis:true,},
        { title: '目标通道名', dataIndex: 'targetLinker', key:'targetLinker', ellipsis:true,},
        { title: '目标路由名', dataIndex: 'targetRouter', key:'targetRouter', ellipsis:true,}, 
        // { title: '目标IP', dataIndex: 'targetIP', key:'targetIP',},
        // { title: '目标端口', dataIndex: 'targetPort', key:'targetPort',}, 
    ]
    const buttons=[
        { title: '新增', key:"1" },
        { title: '编辑', key:"2" },
        { title: '删除', key:"3" },
        { title: '启动', key:"4" },
        { title: '停止', key:"5" }, 
    ]
    return (
        <>
            <TableTemplate 
                title="被动通道"
                buttons={buttons}
                // searchs={searchs}
                // searchParams={{approveStatus:1}}
                columns={columns}
                // dataTable={dataSource}
                // getTableData={(data)=>getList(data)}
            >  
            </TableTemplate>
        </>
    )
}
export default PassiveChannel;