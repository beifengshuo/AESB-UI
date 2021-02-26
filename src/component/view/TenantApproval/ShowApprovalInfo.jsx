//申请人信息
import React from 'react';
import { Form,   Row, Col,Button, Space, Collapse,Radio } from 'antd';
import { CaretRightOutlined } from '@ant-design/icons';

const { Panel } = Collapse;

const DefaultPage = (props) => {

    const {
        tenantInfo={}
    }=props;

    const getFields =(obj)=>{
        const children = [];
        for(let key in obj){
            children.push(
                <Col span={8} key={key}>
                    <Row>
                        <Col span={6} style={{textAlign:"right",color:'#999',paddingBottom: '10px'}}>{key}：</Col>
                        <Col span={18}>{obj[key]}</Col>
                    </Row>
                {/* <FormItem key={i} item = {item_list[i]} style={{width:'70%'}}/> */}
                </Col>,
            )
        }
        return children;
    }
    return (
        <Collapse
            bordered={false}
            defaultActiveKey={['1']}
            expandIconPosition={'right'}
            expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
            // {...restProps}
        >

            <Panel header="申请人信息" key="1" >
                <Row gutter={24}>{getFields(tenantInfo)}</Row>
            </Panel>
        </Collapse>
    );
 
};
export default DefaultPage;