import React from "react";
import TableTemplate from '@/baseComponent/AiTable/TableTemplate';

const ServiceAgent = ()=>{

    const columns=[
        // { title: '序号', dataIndex: '1', key:'1' },
        { title: '服务描述', dataIndex: 'code', key:'code' },
        { title: '原始服务URL', dataIndex: 'name', key:'name' },
        { title: '代理后的服务URL', dataIndex: 'name', key:'name' },
        { title: '服务名称', dataIndex: 'name', key:'name' },
        { title: '目标服务IP', dataIndex: 'name', key:'name' },
        { title: '目标服务端口', dataIndex: 'name', key:'name' },
        { title: '是否启用', dataIndex: 'name', key:'name' },
        { title: '是否记录日志', dataIndex: 'name', key:'name' },
        { title: '连接超时时间', dataIndex: 'name', key:'name' },
        { title: '调用超时时间', dataIndex: 'name', key:'name' },
        { title: '协议类型', dataIndex: 'name', key:'name' },
      
        { title: '录入日期', dataIndex: 'crtTime', key:'crtTime' },
        { title: '修改日期', dataIndex: 'updTime', key:'updTime' },
        { title: '修改人', dataIndex: 'crt1', key:'crt1' },
        { title: '录入人', dataIndex: 'upd2', key:'upd2',sorter: (a, b) => a.upd2 - b.upd2},
    ]
    const buttons=[
        { title: '新增', key:"1" },
        { title: '编辑', key:"2" },
        { title: '删除', key:"3" },
    ]
    const searchs=[
        {label:'原始服务URL', name:'code' },
    ]
    return (
        <>
            <TableTemplate 
                title="服务代理"
                buttons={buttons}
                searchs={searchs}
                columns={columns}
                // searchParams={{approveStatus:1}}
                // getTableData={(data)=>getTenantApplyList(data)}//1(表示未审批),2(表示已审批)
            >
            </TableTemplate>
        
            {/* <AiCard title="服务代理">
                <div style={{padding:20}}>操作区域</div>
            </AiCard>
            <AiCard className="box-flex-grow-1">
                <div style={{padding:10}}>列表区域</div>
            </AiCard> */}
        </>
    )
}
export default ServiceAgent;