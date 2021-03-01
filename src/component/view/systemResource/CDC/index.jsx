import React from "react";
// import AiCard from '@/baseComponent/AiCard';
import TableTemplate from '@/baseComponent/AiTable/TableTemplate';
const CDC = ()=>{   	
    const columns=[
        // { title: '序号', dataIndex: '1', key:'1' },
        { title: '名称', dataIndex: 'code', key:'code' },
        { title: '数据源', dataIndex: '1', key:'1' },
        { title: 'schema', dataIndex: '2', key:'2' },
        { title: '数据表', dataIndex: '3', key:'3' },
        { title: '同步模式', dataIndex: '5', key:'5' },
        { title: '状态', dataIndex: '4', key:'4' }
    ]
    const buttons=[
        { title: '部署', key:"1" },
        // { title: '启动', key:"2" },
        // { title: '停止', key:"3" },
        { title: '卸载', key:"4" },
        { title: '删除', key:"5" },
    ]
   
    const searchs=[
        {label:'CDC名称：', name:'code' },
        {label:'CDC状态', name:'name'}, //下拉框
    ]
    return (
        <>
             <TableTemplate 
                title="CDC"
                buttons={buttons}
                searchs={searchs}
                columns={columns}
                // searchParams={{approveStatus:1}}
                // getTableData={(data)=>getTenantApplyList(data)}//1(表示未审批),2(表示已审批)
            >
            </TableTemplate>
            {/* <AiCard title="触发器">
                <div style={{padding:20}}>操作区域</div>
            </AiCard>
            <AiCard className="box-flex-grow-1">
                <div style={{padding:10}}>列表区域</div>
            </AiCard> */}
        </>
    )
}
export default CDC;