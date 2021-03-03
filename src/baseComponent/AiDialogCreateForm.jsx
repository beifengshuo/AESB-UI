import React, { useState,useEffect } from 'react';
import { Button, Modal, Form, Input, Radio } from 'antd';
import AiFromGrid from '@/baseComponent/AiFromGrid';

const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 6 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 18 },
    },
  };

const CollectionCreateForm = ({ visible, onCreate, onCancel , title,children,initialValues}) => {
    const [form] = Form.useForm();

    useEffect(()=>{ 
      if( visible && initialValues ){//控制编辑页面下，数据的回显 
        console.log('initialValues',initialValues)
        form.setFieldsValue(initialValues)
      }
    },[visible])
    
    return (
      <Modal
        visible={visible}
        title={title||"Create a new collection"}
        okText="确定"
        cancelText="取消"
        onCancel={onCancel}
        width={800}
        centered={true}//垂直居中展示 Modal
        destroyOnClose={true}//关闭时销毁 Modal 里的子元素
        getContainer={false}
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
          form={form}
          {...formItemLayout}
        >
            {
                children
                ?
                children
                :
                <AiFromGrid/>
            }
        </Form>
      </Modal>
    );
  };
  export default CollectionCreateForm;

  