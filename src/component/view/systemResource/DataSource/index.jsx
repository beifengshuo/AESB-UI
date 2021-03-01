import React from "react";
import AiCard from '@/baseComponent/AiCard';
// import TableTemplate from '@/baseComponent/AiTable/TableTemplate';
const DataSource = ()=>{
    // const columns=[
    //     //{ title: '序号', dataIndex: '1', key:'1' },
    //     { title: '数据源名', dataIndex: 'code', key:'code' },
    //     { title: 'JNDI名', dataIndex: '1', key:'1' },
    //     { title: '数据库类型', dataIndex: '2', key:'2' },
    //     { title: 'URL', dataIndex: '3', key:'3' },
    //     { title: 'Schema', dataIndex: '4', key:'4' },
    //     { title: '测试连接', dataIndex: '5', key:'5' ,}
    // ]

    // const buttons=[
    //     // { title: '部署', key:"1" },
    //     // { title: '启动', key:"2" },
    //     // { title: '停止', key:"3" },
    //     // { title: '卸载', key:"4" },
    //     { title: '测试连接', key:"5" },
    // ]
   
    // const searchs=[
    //     {label:'数据源名称：', name:'code' },
    //     {label:'数据库类型', name:'name'}, //下拉框
    // ]
    return (
        <>
             {/* <TableTemplate 
                title="数据源"
                buttons={buttons}
                searchs={searchs}
                columns={columns}
                // searchParams={{approveStatus:1}}
                // getTableData={(data)=>getTenantApplyList(data)}//1(表示未审批),2(表示已审批)
            >
            </TableTemplate> */}
            <AiCard title="数据源">
                <div style={{padding:20}}>操作区域</div>
            </AiCard>
            <AiCard className="box-flex-grow-1">
                <div style={{padding:10}}>列表区域</div>
            </AiCard>
        </>
    )
}
export default DataSource;