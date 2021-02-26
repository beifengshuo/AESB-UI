// import React from 'react';
// const EditTenantPage = (props) => {
//     return (
//         <>编辑页面</>
//     );
// };
// export default EditTenantPage;

import React ,{useState}from 'react';
import { Form} from 'antd';
import { useParams } from "react-router-dom";
import PageForm from '@/baseComponent/AiForm/PageForm';
import { editTenant , viewTenant} from '@/api/operate/tenantManagement';

const item_list=[
    {
        label:'租户code',
        name:'code',
        text:'',
        rules:[
          { required: true, message: '必填项'},
          { max: 25, message: '不能超过25' },
          // { pattern: /^[a-zA-Z]\w*$/,message:'以字母开头,且只能输入字母、数字、下划线'},
          { pattern: /^(?!_)(?!.*?_$)[a-zA-Z0-9_]+$/,message:'只能输入字母、数字和英文下划线,且不能以英文下划线开头和结尾'}
        ], 
    },
    {
        label:'租户名称',
        name:'name',
        text:'',
        rules:[
            { required: true, message: '必填项'},
            { max: 60, message: '不能超过50' },
            { pattern: /^(?!_)(?!.*?_$)[a-zA-Z0-9_\u4e00-\u9fa5]+$/,message:'只能输入汉字、数字、字母、下划线,不能以下划线开头和结尾'}
        ],  
    },
    {
        label:'申请人姓名',
        name:'LinkMan',
        text:'',
        rules:[
            { required: true, message: '必填项'},
            
        ],  
    },
    {
        label:'申请人联系电话',
        name:'linkPhone',
        text:'',
        rules:[],  
    },
    {
        label:'申请人电子邮箱',
        name:'LinkEmail',
        text:'',
        rules:[
            { required: true, message: '必填项'},
            { type: 'email', message: '填写正确的邮箱格式'}, 
        ],  
    },
    {
        label:'申请说明（选填）',
        name:'description', 
        type:'textArea',
        rules:[], text:'', 
    },
]

const EditTenantPage = (props) => {
    const { handleClickBreadcrumb, breadcrumb}=props;
    const {id }=useParams();
    const [form] = Form.useForm();
    const [itemList , setItemList] = useState(item_list);
    // const [itemList , setItemList] = useState(item_list);
    
    const saveFormSuccessFn = (formData)=>{
        //此处的面包屑，不会随路由的改变而改变，所有先用这种面包屑的方法代替，如有时间,待优化
        handleClickBreadcrumb(breadcrumb[0])
    }

    return(
        <PageForm
            title="编辑"
            form={form}
            form_item_list={itemList}
            // colSpan={24} 
            getData={()=>viewTenant(id)}
            // handleChangeFormItemList={handleChangeFormItemList}
            // handleChangeFormValues={handleChangeFormValues}
            saveData = {(data)=>editTenant(data)}
            saveFormSuccessFn={saveFormSuccessFn}
            goback={saveFormSuccessFn}
        /> 
    )
};
export default EditTenantPage;

// editTenant , viewTenant