import React, { useState } from 'react';
import { Button , message} from 'antd';
import AiDialogCreateForm from '@/baseComponent/AiDialogCreateForm';
import AiDialog from '@/baseComponent/AiDialog';
import AiFromGrid  from '@/baseComponent/AiFromGrid';
import { EyeOutlined } from '@ant-design/icons';

const ViewDialog = (props)=>{
    const {title , text}=props;
    const [visible, setVisible] = useState(false);
    return (
        <>
            <div style={{cursor:'pointer',fontSize:'16px'}} onClick={()=>{setVisible(true);}}>
                <EyeOutlined/>
            </div>
            <AiDialog 
                title={title}
                visible={visible}

                onCreate={() => {
                    setVisible(false);
                }}
                onCancel={() => {
                    setVisible(false);
                }}
            >
                <code>{text}</code>

            </AiDialog>
        </>
    )
}
const EditService = (props)=>{
    const { gettable , selectedkeys , selectedrows }=props;
    const [visible, setVisible] = useState(false);
    const onCreate = (values) => {
        console.log('EditService: ', values);
        setVisible(false);
    };
    const fields_list=[
        {
            label:'接口编码',
            name:'code',text:'',
            rules:[
              { required: true, message: '必填项'},
              { max: 25, message: '不能超过25' },
              { pattern: /^(?!_)(?!.*?_$)[a-zA-Z0-9_]+$/,message:'只能输入字母、数字和英文下划线,且不能以英文下划线开头和结尾'}
            ], 
        },
        {
            label:'接口名称',
            name:'name',text:'',
            rules:[
                { required: true, message: '必填项'},
                { max: 60, message: '不能超过50' },
                { pattern: /^(?!_)(?!.*?_$)[a-zA-Z0-9_\u4e00-\u9fa5]+$/,message:'只能输入汉字、数字、字母、下划线,不能以下划线开头和结尾'}
            ],  
        },
        {
            label:'接口地址',
            name:'url',text:'',
            rules:[{ required: true, message: '必填项'}],  
        },
        {
            label:'是否记录日志',
            name:'isLog',text:'',
            type:"switch",     
        },
        {
            label:'协议类型',
            name:'type',text:'',
            rules:[{ required: true, message: '必填项'}],
            type:"select",
            option:[
                { value:"WEBSERVICE", label:"WEBSERVICE" },
                { value:"HTTP", label:"HTTP" },
            ],
            rules:[{required: true, message: '必填项'}],    
        },
        {
            label:'目标格式',
            name:'target',   
        },
        {
            label:'响应格式',
            name:'res',  
        },
        {
            label:'连接超时',
            name:'overTime',
            rules:[{ required: true, message: '必填项'}],
            type:"select",
            option:[
                { value:10, label:10 },
                { value:30, label:30 },
                { value:60, label:60 },
                { value:200, label:200 },
                { value:1000, label:1000},
            ]   
        },
        {
            label:'调用超时',
            name:'overTime2',
            rules:[{ required: true, message: '必填项'}],
            type:"select",
            option:[
                { value:10, label:10 },
                { value:30, label:30 },
                { value:60, label:60 },
                { value:200, label:200 },
                { value:1000, label:1000},
            ]  
        },
        {
            label:'命名空间',
            name:'space',  
        },
        {
            label:'WS方法',
            name:'WS',  
        },
        {
            label:'备注',
            name:'remark',
            type:"textArea",    
        },
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
            title="编辑服务"
            visible={visible}
            onCreate={onCreate}
            onCancel={() => {
              setVisible(false);
            }}
            initialValues={selectedrows[0]}
        >
            <AiFromGrid fields_list={fields_list}/>
        </AiDialogCreateForm>
        </>
    )
}
EditService.ViewDialog = ViewDialog;
export default EditService;