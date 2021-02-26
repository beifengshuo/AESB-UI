// 租户审批
import React from "react";
import TableTemplate from '@/baseComponent/AiTable/TableTemplate';
import { getTenantApplyList } from '@/api/operate/tenantApproval';
import DefaultPage from './DefaultPage';
import DefaultButton from './DefaultButton';
// approveReason: "通过！"
// approveResult: 1
// approveStatus: 2
// approver: "admin"//最后审批人
// code: "Apple"
// crtId: "21a52601864c42a896c956621e9a1a62"
// crtTime: "2020-12-11 03:38:39"
// description: "申请租户"
// id: "1327aaf0485243dc89bbfc07481a3026"
// isDel: "0"
// linkEmail: "wizdark1230@126.com"
// linkMan: "LSH"
// linkPhone: "15901234567"
// name: "苹果"
// noticeWay: 1
// updId: "21a52601864c42a896c956621e9a1a62"
// updTime: "2020-12-11 03:38:41"
//
const getApproveStatusText = (status)=>{
    // console.log("status",status)
    let text = (status==1)?"未审批":status==2?"已审批":"未开发状态"
    return text;
}

const TenantApproval = (props)=>{
    const { 
        addBreadcrumb,
     }=props;
    const columns=[
        // { title: '序号', dataIndex: '1', key:'1' },
        { title: '租户code', dataIndex: 'code', key:'code' },
        { title: '租户名称', dataIndex: 'name', key:'name' },
        { title: '审批状态', dataIndex: 'approveStatus', key:'approveStatus', render:(text)=>getApproveStatusText(text) },//1未审批，2 已审批
        { title: '申请人', dataIndex: 'linkMan', key:'linkMan' },
        { title: '申请人电话', dataIndex: 'linkPhone', key:'linkPhone' },
        { title: '申请人邮箱', dataIndex: 'linkEmail', key:'linkEmail' },
        { title: '申请时间', dataIndex: 'crtTime', key:'crtTime' },
        { title: '最后审批人', dataIndex: 'approver', key:'approver' },
        { title: '最后审批时间', dataIndex: 'updTime', key:'updTime',sorter: (a, b) => a.updTime - b.updTime, },
    ]
    const buttons=[
        // { title: '查看', key:"1" },
        // { title: '审批', key:"2" },
    ]
    const searchs=[
        {label:'租户code', name:'code' },
        {label:'租户名称', name:'name'},
        {label:'审批状态', name:'approveStatus', 
            type:"select",
            option:[
                {value:1,label:"未审批"},
                {value:2,label:"已审批"},
            ],
            // allowClear:true,
        },
        {label:'申请人', name:'linkMan'},
        {label:'申请人电话', name:'linkPhone'},
        {label:'申请人邮箱', name:'linkEmail'},
        {label:'申请时间', name:'crtTime',type:'rangePicker'},
        {label:'最后审批人', name:'approver'},
        {label:'审批时间', name:'updTime',type:'rangePicker'},
    ]
    return (
        <>
            <TableTemplate 
                title="租户审批"
                buttons={buttons}
                searchs={searchs}
                searchParams={{approveStatus:1}}
                columns={columns}
                // getTableData={(data)=>getTenantApplyList(data)}//1(表示未审批),2(表示已审批)
            >
                <DefaultButton addBreadcrumb={addBreadcrumb} name={"查看"} typeId='view'/>
                <DefaultButton 
                    addBreadcrumb={addBreadcrumb} 
                    name={"审批"} 
                    typeId='approval' 
                />

            </TableTemplate>
        </>
    )
}
TenantApproval.DefaultPage = DefaultPage;
export default TenantApproval;