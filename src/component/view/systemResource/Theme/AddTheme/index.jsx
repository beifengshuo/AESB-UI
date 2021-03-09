import React,{useContext} from "react";
import AiCard from '@/baseComponent/AiCard';
import {Button,Space,Form} from 'antd';
import AiFromGrid  from '@/baseComponent/AiFromGrid';
import AiTable from '@/baseComponent/AiTable';
import TableTemplate from '@/baseComponent/AiTable/TableTemplate';

import form_fields  from '../form_fields';

import SubscriberDialog from './SubscriberDialog';

const AddTheme = ({ addTab, colseTab})=>{
    const new_form_fields = [
        {
            label:'主题名称',
            name:'name',text:'',
            rules:[
                { required: true, message: '必填项'},
                { max: 50, message: '不能超过50'}
            ],  
        },
        ...form_fields,
    ]
    const initFormData={
        cacheSize:64,//需要注意
        depth:5000,
        volume:512000,
        maxMessageSize:4194304
    }  

    const dataTable={
        list:[
            // {subName: "testQueue", type: "Queue"},
            // {subName: "test", type: "Queue"},
            // {subName: "xhh1", type: "Topic"},
            // {subName: "xhh", type: "Topic"},

        ],
        total:0,
    }
    const columns=[
        { title: '订阅者名', dataIndex: 'subName', key:'subName',ellipsis:true,},
        { title: '订阅者类型', dataIndex: 'type', key:'type',ellipsis:true, },
    ]
    return (
        <>
            <AiCard 
                // title="新增主题"
            >
                <div style={{padding:20}}>
                    <Space align="center">
                        <SubscriberDialog/>
                        <Button type="primary" onClick={()=>{colseTab('AddTheme')}}>确定</Button>
                        <Button type="primary" onClick={()=>{colseTab('AddTheme')}}>取消</Button>
                    </Space>  
                </div>
            </AiCard>
            <AiCard className="box-flex-grow-1">
                <div style={{padding:10}}>
                    <Form 
                        // form={form}
                        initialValues={initFormData}
                    >
                        <AiFromGrid fields_list={new_form_fields} spanNum={12}/>
                    </Form>     
                </div>
            </AiCard>
            <TableTemplate
                // title="主题"
                // buttons={[]}
                // searchs={searchs}
                // searchParams={{approveStatus:1}}
                columns={columns}
                dataTable={dataTable}
                // getTableData={(data)=>getList(data)}
                rowKey={"subName"} 
            >      
            </TableTemplate>
        </>
    )
}
export default AddTheme;