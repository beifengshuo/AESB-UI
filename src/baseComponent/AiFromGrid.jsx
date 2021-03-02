//表单item的布局
import React, {  } from 'react';
import {Row, Col} from 'antd';
import FormItem  from '@/baseComponent/AiForm/FormItem';
const AiFromGrid = (props) => {
  const {
    fields_list=[],
    spanNum=24,
  }=props;
  const getFields = (item_list) => {
    const count = item_list.length;
    const children = [];
    for (let i = 0; i < count; i++) {
      children.push(
        <Col span={spanNum} key={i}>
          <FormItem key={i} item = {item_list[i]} style={{width:'90%'}}/>
        </Col>,
      );
    }
    return children;
};
  return (
        
        <Row gutter={24}>{  Array.isArray(fields_list) && getFields(fields_list)}</Row>
  );
};

export default AiFromGrid;