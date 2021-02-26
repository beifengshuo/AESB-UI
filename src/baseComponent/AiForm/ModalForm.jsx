import React, { useState } from 'react';
import { Button, Modal, Form, Input, Radio } from 'antd';
import FormItem , { layout as initLayout , colon} from '@/baseComponent/AiForm/FormItem';

const ModalForm = (props) => {

    const {
        title,


        form_item_list,
        form,
        layout,
        initialValues,

        visible, 
        confirmLoading,
        onCreate,
        onCancel,
        children,
    } =props;
    // const [form] = Form.useForm();
    return (
      <Modal
        visible={visible}
        confirmLoading={confirmLoading}
        title={title||"标题"}
        okText="确定"
        width={800}
        cancelText="取消"
        onCancel={onCancel}
        onOk={() => {
          form
            .validateFields()
            .then((values) => {
              form.resetFields();
              onCreate(values);
            })
            .catch((info) => {
              console.log('Validate Failed:', info);
            });
        }}
      >
          <Form  
              form={ form }
              {...initLayout} 
              // colon={colon}
              // onFinish={onFinish}
              // onValuesChange={()=>{setSaveDisabled(false)}}
              initialValues={initialValues}
              {...layout}  
              >
              <div className="page_form_wrap">
                  
                  {
                      children
                      ?
                      children
                      :
                      form_item_list.map((item,index)=>{
                          return <FormItem key={index} item = {item}/>
                      })
                  }
              </div>
          </Form>
      </Modal>
    );
  };

  export default ModalForm;