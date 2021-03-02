import React, { useState,useEffect } from 'react';
import {  Modal } from 'antd';

const AiDialog = ({ visible, onCreate, onCancel , title,children,}) => {
    
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
            onCreate();
        }}
      >  
        {children}
      </Modal>
    );
  };
  export default AiDialog;

  