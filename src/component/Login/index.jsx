import React ,{useEffect, useState}from 'react';
import { Form, Input, Button, Spin,Row, } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { useParams } from "react-router-dom";
import './index.less'
// import {login} from '@/api/login';
// import {getUTCTime} from '@/util';
// import {MessageComp} from '@/baseComponent/PromptComp';
// import {createFromIconfontCN} from '@ant-design/icons';

const Login = (props) => {
    const { }=props;
    const { loginId } = useParams();
    const [loading,setLoading]=useState(false);
   
    const onFinish = values => {
      props.history.push({pathname: `/mainLayout`});
    };

    return (
              <Form
                  initialValues={{ 
                      tenantCode:"admin",
                      username: 'admin',
                      password: 'admin',
                  }}
                  style={{width:'300px',margin:'100px auto'}}
                  onFinish={onFinish}
                  className="apusic-login-form"
              >
                <div className="login-form-title" >
                  AESB监控平台
                  {loginId=="operation-platform" && "运营平台登录"}
                  {loginId=="cloud-integration-personal" && "云集成-个人版登录"}
                  {loginId=="cloud-integration-enterprise" && "云集成-个企业版登录"}
                </div>

                {
                  loginId=="cloud-integration-enterprise" && 
                  <Form.Item
                    name="tenantCode"
                    rules={[{ required: true, message: 'Please input your tenantCode!'}]}
                  >
                    <Input 
                      allowClear 
                      prefix={<UserOutlined className="site-form-item-icon" />} 
                      placeholder="租戶id" 
                    />
                  </Form.Item>
                }
               
                <Form.Item
                  name="username"
                  rules={[{ required: true, message: 'Please input your Username!'}]}
                >
                  <Input 
                    allowClear 
                    prefix={<UserOutlined className="site-form-item-icon" />} 
                    placeholder="Username" 
                  />
                </Form.Item>
                <Form.Item
                  name="password"
                  rules={[{ required: true, message: 'Please input your Password!' }]}
                >
                  <Input
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="password"
                    placeholder="Password"
                    allowClear
                  />
                </Form.Item>
                <Form.Item>
                  <Button  type="primary" block htmlType="submit" className="login-form-button" loading={loading}>  登录 </Button>
                </Form.Item>
              </Form>  
    )
}
export default Login;