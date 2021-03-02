// 租户审批
import React from "react";
import TableTemplate from '@/baseComponent/AiTable/TableTemplate';
const getApproveStatusText = (status)=>{
  
    let text = (status==1)?"未审批":status==2?"已审批":"未开发状态"
    return text;
}

const SystemRegistry = (props)=>{
   
     const columns=[
        // { title: '序号', dataIndex: '1', key:'1' },
        { title: '系统编码', dataIndex: 'code', key:'code',width:400 },
        { title: '系统名称', dataIndex: 'name', key:'name',width:400 },
        { title: '所属用户', dataIndex: 'linkMan', key:'linkMan',width:400 },
        { title: '是否记录日志', dataIndex: 'approveStatus',width:400, key:'approveStatus', render:(text)=>getApproveStatusText(text) },//1未审批，2 已审批
        { title: '是否映射', dataIndex: 'log', key:'log', width:400,render:(text)=>getApproveStatusText(text) },//1未审批，2 已审批
        { title: '请求IP', dataIndex: 'linkPhone', key:'linkPhone' },
        { title: '备注', dataIndex: 'linkEmail', key:'linkEmail' },
        { title: '录入日期', dataIndex: 'crtTime', key:'crtTime' },
        { title: '修改日期', dataIndex: 'updTime', key:'updTime' },
        { title: '修改人', dataIndex: 'crt1', key:'crt1' },
        { title: '录入人', dataIndex: 'upd2', key:'upd2',sorter: (a, b) => a.upd2 - b.upd2},
    ]
    const dataSource={
        total:1,
        list:[
            {id:'1',code:'code',name:'name'}
        ]
    }
    const buttons=[
        { title: '新增', key:"1" },
        { title: '编辑', key:"2" },
        { title: '删除', key:"3" },
    ]
    const searchs=[
        {label:'系统编码', name:'code' },
        {label:'系统名称', name:'name'},
        
    ]
    return (
        <>
            <TableTemplate 
                title="系统注册中心"
                buttons={buttons}
                searchs={searchs}
                // searchParams={{approveStatus:1}}
                columns={columns}
                dataTable={dataSource}
                // getTableData={(data)=>getTenantApplyList(data)}//1(表示未审批),2(表示已审批)
            >
            </TableTemplate>
        </>
    )
}
export default SystemRegistry;