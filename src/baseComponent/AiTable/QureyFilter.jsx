import React, { useState,useImperativeHandle ,useEffect } from 'react';
import { Form, Row, Col, Input, Button ,Collapse } from 'antd';
import { DownOutlined, UpOutlined,CaretRightOutlined } from '@ant-design/icons';
import FormItem , { layout as initLayout , colon} from '@/baseComponent/AiForm/FormItem';
import moment from 'moment';

const { Panel } = Collapse;

const QureyFilter = (props) => {
  const {searchs,onFinishFun,initFormData, cRef,...restProps}=props;
  const [form] = Form.useForm();
  const getFields = (item_list) => {

    const count = item_list.length;
    const children = [];
    for (let i = 0; i < count; i++) {
      children.push(
        <Col span={8} key={i}>
          <FormItem key={i} item = {item_list[i]} style={{width:'70%'}}/>
        </Col>,
      );
    }
    return children;
  };

  const onFinish = (values) => {
   
    if(onFinishFun){
      let new_v = {};

      //先暂时按这样做，日后如有更好的方式做改进
      for(let key in values){
        if(values[key]){//需要排除零
          // console.log(key,values[key]);
          if(key==="updTime"){//更新时间范围
            new_v['updStartTime'] = moment(values[key][0]).format('YYYY-MM-DD 00:00:00');
            new_v['updEndTime'] = moment(values[key][1]).format('YYYY-MM-DD 24:00:00');
          }else if( key==="crtTime"){//创建时间范围 
            new_v['crtStartTime'] = moment(values[key][0]).format('YYYY-MM-DD 00:00:00');
            new_v['crtEndTime'] = moment(values[key][1]).format('YYYY-MM-DD 24:00:00');
          }else{//其他
            new_v[key] = values[key]
          }
        }
      }
      onFinishFun(new_v)
    }else{
      console.log("搜索字段",values)
    }
  };


  //将组件的方法暴露给外部组件
  useImperativeHandle(cRef, () => ({
      submit:form.submit,
      reset:form.resetFields
  }));
  // console.log("initFormData",initFormData)
  return (
    <Form
        form={form}
        initialValues={initFormData}
        onFinish={onFinish}
    >
          <Collapse
            bordered={false}
            defaultActiveKey={['1']}
            expandIconPosition={'right'}
            expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
            {...restProps}
          >

          <Panel header="条件查询" key="1" >
            <Row gutter={24}>{  Array.isArray(searchs) && getFields(searchs)}</Row>
          </Panel>
        </Collapse>
    </Form>

  );
};

export default QureyFilter;