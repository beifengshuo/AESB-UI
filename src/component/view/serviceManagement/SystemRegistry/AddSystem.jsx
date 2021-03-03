import React, { useState } from 'react';
import { Button, Modal, Form, Input, Radio ,Col,Row} from 'antd';
import AiDialogCreateForm from '@/baseComponent/AiDialogCreateForm';
import AiFromGrid  from '@/baseComponent/AiFromGrid';
import fields_list  from './data';//表单字段

const AddAgent = ()=>{
    const [visible, setVisible] = useState(false);
    const onCreate = (values) => {
        console.log('onCreate: ', values);
        setVisible(false);
    };
    const initFormData={
        beingUser:"admin",//需要注意
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
            title="新增系统"
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
export default AddAgent;