import React, { useState } from 'react';
import { Button} from 'antd';
import AiDialogCreateForm from '@/baseComponent/AiDialogCreateForm';
import AiFromGrid  from '@/baseComponent/AiFromGrid';
import fields_list  from './data';//表单字段

const SendMsg = ()=>{
    const [visible, setVisible] = useState(false);
    const onCreate = (values) => {
        console.log('onCreate: ', values);
        setVisible(false);
    };
    const initFormData={
        receiveTimes:1,
        deleteOnReceived:true,
        fileBlockSize:512,
        cacheSize:4096,
        maxSize:32768,
        blockTime:10000, 
    } 
    const  add_fields_list=  [
        {
            label:'文件池名称',
            name:'name',text:'',
            rules:[
                { required: true, message: '必填项'},
                { max: 50, message: '不能超过50'}
            ]
        },
        ...fields_list,
    ]
    return (
        <>
        <Button
            type="primary"
            onClick={() => { setVisible(true); }}
        >
            新增
        </Button>

        <AiDialogCreateForm
            title="新增本地文件池"
            visible={visible}
            onCreate={onCreate}
            onCancel={() => {
              setVisible(false);
            }}
            initialValues={initFormData}
        >
            <AiFromGrid fields_list={add_fields_list}/>
        </AiDialogCreateForm>
        </>
    )
}
export default SendMsg;