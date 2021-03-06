import React from "react";
import AiCard from '@/baseComponent/AiCard';
import {Button,Space,Form} from 'antd';
import AiFromGrid  from '@/baseComponent/AiFromGrid';
import TableTemplate from '@/baseComponent/AiTable/TableTemplate';
import form_fields  from '../form_fields';
import SubscriberDialog from './SubscriberDialog';
const EditTheme = ( { addTab, colseTab,tab_key} )=>{
    const new_form_fields = [
        {
            label:'主题名称',
            name:'name',text:'',
            disabled:true, 
        },
        ...form_fields,
    ]
    const dataTable={
        list:[
            {subName: "testQueue", type: "Queue"},
            {subName: "test", type: "Queue"},
            {subName: "xhh1", type: "Topic"},
            {subName: "xhh", type: "Topic"},
        ],
        total:0,
    }
    const columns=[
        { title: '订阅者名', dataIndex: 'subName', key:'subName',ellipsis:true},
        { title: '订阅者类型', dataIndex: 'type', key:'type',ellipsis:true},
    ]
    return (
        <>
            <AiCard>
                <div style={{padding:20}}>
                    <Space align="center">
                        <SubscriberDialog/>
                        <Button type="primary" onClick={()=>{colseTab(tab_key)}}>确定</Button>
                        <Button type="primary" onClick={()=>{colseTab(tab_key)}}>取消</Button>
                    </Space>  
                </div>
            </AiCard>
            <AiCard className="box-flex-grow-1">
                <div style={{padding:10}}>
                    <Form 
                        // form={form}
                        // initialValues={initFormData}
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
export default EditTheme;