import React from "react";
// import AiCard from '@/baseComponent/AiCard';
import TableTemplate from '@/baseComponent/AiTable/TableTemplate';
const FlowControl = ()=>{
  
    const columns=[
        // { title: '序号', dataIndex: '1', key:'1' },
        { title: '系统名称', dataIndex: 'code', key:'code' },
        { title: '接口名称', dataIndex: '1', key:'1' },
        { title: '时间范围', dataIndex: '2', key:'2' },
        { title: '开始时间', dataIndex: '3', key:'3' },
        { title: '结束时间', dataIndex: '4', key:'4' },
        { title: '限流模式', dataIndex: '5', key:'5' },
        { title: '流量次数', dataIndex: '6', key:'6' },
        { title: '备注', dataIndex: '7', key:'7' },

        { title: '录入时间', dataIndex: 'crtTime', key:'crtTime' },
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
                title="流量控制"
                buttons={buttons}
                searchs={searchs}
                columns={columns}
                // searchParams={{approveStatus:1}}
                // getTableData={(data)=>getTenantApplyList(data)}//1(表示未审批),2(表示已审批)
            >
            </TableTemplate>
            {/* <AiCard title="流量控制">
                <div style={{padding:20}}>操作区域</div>
            </AiCard>
            <AiCard className="box-flex-grow-1">
                <div style={{padding:10}}>列表区域</div>
            </AiCard> */}
        </>
    )
}
export default FlowControl;