import React from "react";
// import AiCard from '@/baseComponent/AiCard';
import TableTemplate from '@/baseComponent/AiTable/TableTemplate';
const BlackAndWhite = ()=>{
    const columns=[
        // { title: '序号', dataIndex: '1', key:'1' },
        { title: '系统名称', dataIndex: 'code', key:'code' },
        { title: '匹配规则', dataIndex: '1', key:'1' },
        { title: '接口名称', dataIndex: '2', key:'2' },
        { title: '模糊匹配表达式', dataIndex: '3', key:'3' },
        { title: '黑白名单', dataIndex: '4', key:'4' },
        { title: '备注', dataIndex: '5', key:'5' },

        { title: '录入日期', dataIndex: 'crtTime', key:'crtTime' },
        { title: '修改日期', dataIndex: 'updTime', key:'updTime' },
        { title: '修改人', dataIndex: 'crt1', key:'crt1' },
        { title: '录入人', dataIndex: 'upd2', key:'upd2',sorter: (a, b) => a.upd2 - b.upd2 },
    ]
    const buttons=[
        { title: '新增', key:"1" },
        { title: '编辑', key:"2" },
        { title: '删除', key:"3" },
    ]
    const searchs=[
        {label:'系统名称', name:'code' },
        {label:'黑白名单', name:'2' },   
    ]
    return (
        <>
            <TableTemplate 
                title="黑白名单"
                buttons={buttons}
                searchs={searchs}
                columns={columns}
                // searchParams={{approveStatus:1}}
                // getTableData={(data)=>getTenantApplyList(data)}//1(表示未审批),2(表示已审批)
            >
            </TableTemplate>
            {/* <AiCard title="黑白名单">
                <div style={{padding:20}}>操作区域</div>
            </AiCard>
            <AiCard className="box-flex-grow-1">
                <div style={{padding:10}}>列表区域</div>
            </AiCard> */}
        </>
    )
}
export default BlackAndWhite;