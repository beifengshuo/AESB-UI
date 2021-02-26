import React,{useState,useContext} from 'react';
import { Row , Col, Button,Dropdown,Menu,Avatar,Modal,message} from 'antd';
import classnames from "classnames";

import logo from '@/assets/images/logo.png';
import avatar from '@/assets/images/avatar.png';
import { Link } from "react-router-dom";

import { 
    DeleteOutlined,
    CaretDownOutlined, 
    ExclamationCircleOutlined,
    PoweroffOutlined,
    UserOutlined,
} from '@ant-design/icons';
const { confirm } = Modal;
const AiHeader = (props)=>{
    const {
        realm_list,
        selected_realm,
        now_user_name,

        // refreshRealm,
        // refreshMenu,
        handelLoginOut,
        // handleDeleterealm,
        handleSelectRealm,
    }= props
    
    return (
        <Row>
                <Col span={12} className="header-left">
                    <div className="logo" ><img src={ logo } /></div>
                    <div className="headline">AESB监控平台</div>
                </Col> 
                <Col span={12} className="header-right">
                    <div className="login-user"> 
                        <UserOutlined />
                        <span>{now_user_name} </span>        
                    </div>
                    <div className="logout" onClick={handelLoginOut}>
                        <PoweroffOutlined />
                        <span>登出</span> 
                    </div>
                </Col>
            </Row>
    )
}
export default AiHeader;
