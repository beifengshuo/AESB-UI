import React from "react";
import TableTemplate from '@/baseComponent/AiTable/TableTemplate';
import { PaperClipOutlined } from '@ant-design/icons';
import { Button, notification, Divider, Space } from 'antd';

const TestConnect = ({record})=>{
    const openNotification = placement => {
        notification.success({
          message: `提示`,
          description:  `数据源 ${record.dsName}测试连接成功`,
          placement,
        });
      };
    return(
        <Button type="link" onClick={() => openNotification('bottomRight')}>
            <PaperClipOutlined/>
        </Button>
    )
}
const DataSource = ()=>{
    const columns=[ 
        { title: '数据源名', dataIndex: 'dsName', key:'dsName',ellipsis:true, },
        { title: 'JNDI名', dataIndex: 'jndiName', key:'jndiName',ellipsis:true, },
        { title: '数据库类型', dataIndex: 'dbType', key:'dbType',ellipsis:true, },
        { title: 'URL', dataIndex: 'url', key:'url',ellipsis:true, },
        { title: 'Schema', dataIndex: 'schema', key:'schema',ellipsis:true, },
        { title: '测试连接', dataIndex: 'testConnect', key:'testConnect', render:(text,record)=><TestConnect record={record}/>,align:'center'}
    ]
    const searchs=[
        {label:'数据源名称：', name:'dsName' },
        {
            label:'数据库类型', 
            name:'dbType',
            type:'select',
            option:[
                {label:'MYSQL',value:'MYSQL'}
            ],
            // option:'datasource!getDBTypes.action',

        }, //下拉框
    ]
    const dataTable={
        list:[
            {
                id:'2',
                dbType: "MYSQL",
                dsName: "esb_db",
                jndiName: "JNDI/esb_db",
                schema: "root",
                url: "jdbc:mysql://192.168.2.104:3306/test?serverTimezone=UTC",
            }
        ],
        total:1,
    }
  
    return (
        <>
             <TableTemplate 
                title="数据源"
                // buttons={buttons}
                searchs={searchs}
                columns={columns}
                dataTable={dataTable}
                // searchParams={{approveStatus:1}}
                // getTableData={(data)=>getTenantApplyList(data)}//1(表示未审批),2(表示已审批)
            >
            </TableTemplate>
        </>
    )
}
export default DataSource;