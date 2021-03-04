import React, { useState } from 'react';
import { Button} from 'antd';
import AiDialogCreateForm from '@/baseComponent/AiDialogCreateForm';
import AiFromGrid  from '@/baseComponent/AiFromGrid';
import fields_list  from './data';//表单字段

const AddLocalQueue = ()=>{
    const [visible, setVisible] = useState(false);
    const onCreate = (values) => {
        console.log('onCreate: ', values);
        setVisible(false);
    };
    const initFormData={
        destType:'Queue',
        cacheSize:64,//需要注意
        depth:5000,
        volume:512000,
        maxMessageSize:4194304



        // queueConfig.name: xuhuanhuan2
        // queueConfig.description: 描述描述
        // // queueConfig.destType: Queue
        // // queueConfig.remoteDest: xuhuanhuan2
        // // queueConfig.bindingLinker: xhh1
        // // bindingValidator: 
        // queueConfig.cacheSize: 64
        // queueConfig.depth: 5000
        // queueConfig.volume: 512000
        // queueConfig.maxMessageSize: 4194304
    }   
    return (
        <>
        <Button
            type="primary"
            onClick={() => { setVisible(true); }}
        >
            新增
        </Button>

        <AiDialogCreateForm
            title="新增远程队列"
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