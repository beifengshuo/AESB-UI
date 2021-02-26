import React from 'react'
import {message, Modal} from 'antd'
import { ExclamationCircleOutlined } from '@ant-design/icons';

const { confirm } = Modal;

export const MessageComp = {
    success: function (msg) {
        message.success(msg);
    },
    warning: function (msg) {
        message.warning(msg);
    },
    error: function (msg) {
        message.error(msg);
    },
};

export const ModalComp = {
    success: function (msg) {
        Modal.success({
            content: 'some messages...some messages...',
        });
    },
    warning: function (msg) {
        Modal.warning({
            title: 'This is a warning message',
            content: 'some messages...some messages...',
        });
    },
    error: function (msg) {
        Modal.error({
            title: 'This is an error message',
            content: 'some messages...some messages...',
        });
    },
    confirm: function (onOKCallBack,onCancelCallBack,param={}) {
        confirm({
            title: '是否确认删除?',
            icon: <ExclamationCircleOutlined />,
            content: '',
            okText: '确认删除',
            okType: 'danger',
            cancelText: '取消',
            onOk() {
                onOKCallBack && onOKCallBack();
            },
            onCancel() {
                onCancelCallBack && onCancelCallBack();
            },
            ...param,
        });
    },
    jumploginConfirm: function (onOKCallBack,onCancelCallBack) {
        confirm({
            title: '请求错误',
            icon: <ExclamationCircleOutlined />,
            content: '原因:token数据无效,请确认重新登录',
            okText: '确认',
            // okType: 'danger',
            cancelText: '取消',
            onOk() {
                onOKCallBack && onOKCallBack();
            },
            onCancel() {
                onCancelCallBack && onCancelCallBack();
            },
        });
    },
}