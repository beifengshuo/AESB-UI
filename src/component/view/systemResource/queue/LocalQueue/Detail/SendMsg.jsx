import React, { useState } from 'react';
import { Button} from 'antd';
import AiDialogCreateForm from '@/baseComponent/AiDialogCreateForm';
import AiFromGrid  from '@/baseComponent/AiFromGrid';
import fields_list  from './data';//表单字段


const AddLocalQueue = ({queueName})=>{
    // const { gettable , selectedkeys , selectedrows }=props;
    const [visible, setVisible] = useState(false);
    const onCreate = (values) => {
        console.log('onCreate: ', values);
        setVisible(false);
    };
    const initFormData={
        queueName,
        // cacheSize:64,//需要注意
        // depth:5000,
        // volume:512000,
        // maxMessageSize:4194304
    }   
    return (
        <>
        <Button
            type="primary"
            onClick={() => { setVisible(true); }}
        >
            发送消息
        </Button>

        <AiDialogCreateForm
            title="新增本地队列"
            visible={visible}
            onCreate={onCreate}
            onCancel={() => {
              setVisible(false);
            }}
            initialValues={initFormData}
        >
            <AiFromGrid fields_list={fields_list}/>
        </AiDialogCreateForm>
        </>
    )
}
export default AddLocalQueue;