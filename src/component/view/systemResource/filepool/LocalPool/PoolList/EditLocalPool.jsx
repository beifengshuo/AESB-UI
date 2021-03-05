import React, { useState } from 'react';
import { Button , message} from 'antd';
import AiDialogCreateForm from '@/baseComponent/AiDialogCreateForm';
import AiFromGrid  from '@/baseComponent/AiFromGrid';
import fields_list  from './data';//表单字段


const EditLocalQueue = (props)=>{
    const { gettable , selectedkeys , selectedrows }=props;
    const [visible, setVisible] = useState(false);
    const onCreate = (values) => {
        console.log('EditService: ', values);
        setVisible(false);
    };
    const  edit_fields_list=  [
        {
            label:'文件池名称',
            name:'name',text:'',
            disabled:true,
        },
        ...fields_list,
    ]
 
    return (
        <>
        <Button
            type="primary"
            onClick={() => { 
                if(selectedkeys.length==0){
                    message.warning('请选择一条数据编辑');
                    return false;
                }
                if(selectedkeys.length>1){
                    message.warning('只能选择一条数据编辑');
                    return false;
                }
                setVisible(true);
            }}
        >
            编辑
        </Button>
        <AiDialogCreateForm
            title="编辑本地队列"
            visible={visible}
            onCreate={onCreate}
            onCancel={() => {
              setVisible(false);
            }}
            initialValues={selectedrows[0]}
        >
            <AiFromGrid fields_list={edit_fields_list}/>
        </AiDialogCreateForm>
        </>
    )
}
export default EditLocalQueue;