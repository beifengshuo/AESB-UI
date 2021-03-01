import React from "react";
import TableTemplate from '@/baseComponent/AiTable/TableTemplate';
const ServiceRegistry = ()=>{
    const columns=[
        // { title: '序号', dataIndex: '1', key:'1' },
        { title: '接口编码', dataIndex: 'code', key:'code' },
        { title: '接口名称', dataIndex: 'name', key:'name' },
        { title: '接口地址', dataIndex: 'url', key:'url' },
        { title: '目标格式', dataIndex: 'target', key:'target' },
        { title: '响应格式', dataIndex: 'res', key:'res' },
        { title: '协议类型', dataIndex: 'type', key:'type' },
        { title: '连接超时', dataIndex: 'overTime', key:'overTime' },
        { title: '调用超时', dataIndex: 'overTime2', key:'overTime2' },
        { title: '命名空间', dataIndex: '1', key:'2' },
        { title: 'WS方法', dataIndex: 'WS', key:'WS' },
        { title: '是否记录日志', dataIndex: 'log', key:'log' },
        { title: '备注', dataIndex: 'linkEmail', key:'linkEmail' },


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
        {label:'接口编码', name:'code' },
        {label:'接口名称', name:'name'},
        {label:'协议类型', name:'name'},   
    ]

    return (
        <>
            <TableTemplate 
                title="服务注册中心"
                buttons={buttons}
                searchs={searchs}
                // searchParams={{approveStatus:1}}
                columns={columns}
                // getTableData={(data)=>getTenantApplyList(data)}//1(表示未审批),2(表示已审批)
            >
            </TableTemplate>
        </>
    )
}
export default ServiceRegistry;