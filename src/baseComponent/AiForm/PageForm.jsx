import React ,{useEffect,useState}from 'react';
import { Form,  Button, Space, Spin ,Row,Col} from 'antd';
import AiCard from '@/baseComponent/AiCard';
import {MessageComp} from '@/baseComponent/PromptComp';
import FormItem , { layout as initLayout , colon} from '@/baseComponent/AiForm/FormItem';



let realm_data = {}//存储-所有的预设置的数据-页面不必刷新
let pedding = false;
const AiForm = (props)=>{
    const { 
        form,//必传
        title,//标题
        form_item_list,//表单的formItem的数组，和children一样。两者只能渲染一个，二者选其一毕传 ，优先渲染children
        children,//表单的formItem的数组，和children一样。两者只能渲染一个，二者选其一毕传 ，优先渲染children
        layout,//表单的布局
        showResetButton=true,//默认为true
        colSpan=12,
       
        getData,//远程获取表单数据的接口名称，包含参数
        handleChangeFormItemList,//获取完成之后对外层item的处理函数,------语义化的函数待优化
        handleChangeFormValues,//获取完成之后对自定义表单的数据格式函数,------语义化的函数待优化

        saveData,//保存表单数据的接口包括参数;
        saveFormSuccessFn,//保存完成之后 需要对表单数据处理的函数，比如格式化;保存失败的的函数，在拦截器里统一处理
        saveFormBeforeFn,//保存之前 需要对表单数据处理的函数，比如格式化;


        cancelFormFn,//取消按钮
        ButtonComponent,

        goback,//返回按钮
        
    } = props;
    // const [localform] = Form.useForm();
    const [saveDisabled , setSaveDisabled] = useState(true);
    const [loading , setLoading] = useState(false);

   

    const onFinish = values => {  
        if(pedding) return;//阻止连续请求

        //如果存在格式转换，则需要格式转换 
        let new_values = saveFormBeforeFn?saveFormBeforeFn(values):values;
        let data = {...realm_data,...new_values};

        if(saveData){
            setLoading(true);
            pedding = true;//在请求
            saveData(data).then((res)=>{
                //保存完成后，按钮不可点
                setSaveDisabled(true);
                setLoading(false);
                setTimeout(function(){ 
                    pedding = false;//延关闭请求
                }, 1000);
                

                if(saveFormSuccessFn){
                    saveFormSuccessFn(data)
                }else{
                    MessageComp.success('保存成功');
                }

            }).catch(err=>{
                setLoading(false);
                setTimeout(function(){ 
                    pedding = false;//延关闭请求
                }, 1000);
            })
        } 
  
    };
    const initForm = (type) => {  
        if(pedding) return;//阻止连续请求

        form.resetFields();//通过重置,先消除检验的信息
        if(getData){
            setLoading(true);
            pedding = true;//在请求
            getData().then(res=>{
                //1存储所有数据
                realm_data = res;
                //2处理form_item_list的显示逻辑
                if(handleChangeFormItemList){
                    handleChangeFormItemList(res)
                }
                //3处理表单的受控数据
                if(handleChangeFormValues){
                   var obj =  handleChangeFormValues(res);
                   form.setFieldsValue(obj);
                }else{
                    form.setFieldsValue(res);
                }

                if(type && type=="reset"){
                    MessageComp.success("重置完成");
                    setSaveDisabled(true);
                }
                
            }).finally(()=>{
                setLoading(false); 
                setTimeout(function(){ 
                    pedding = false;//延关闭请求
                }, 1000); 
            });
        }else{
            setSaveDisabled(true);
        }
    };

    //取消表单
    const onCancel = ()=>{
        form.resetFields();//通过重置,先消除检验的信息
        if(cancelFormFn){
            cancelFormFn()
        }
    };
    //返回按钮
    // const goback = ()=>{
    //     //此处的面包屑，不会随路由的改变而改变，所有先用这种面包屑的方法代替，如有时间,待优化
    //     if(handleClickBreadcrumb && breadcrumb.length>1){
    //         let breadcrumbLen = breadcrumb.length;
    //         handleClickBreadcrumb(breadcrumb[breadcrumbLen-2])
    //     }
    // };

    useEffect(()=>{
        initForm()
    },[])

    return(
        <>
            <AiCard title={title}>
                <Space align="center" style={{margin:20 }}>
                    <Button type="primary" disabled={saveDisabled} onClick={form.submit}>保存</Button>
                    {
                        showResetButton && 
                        <Button type="primary" disabled={saveDisabled}  onClick={()=>initForm('reset')}>重置</Button>
                    }
                    
                    {
                        ButtonComponent &&
                        <ButtonComponent/>
                    }
                    <Button type="primary" onClick={goback}>返回</Button>
                    
                </Space> 
            </AiCard>
            <AiCard className="box-flex-grow-1">
            <Spin spinning={loading}>
                <Form  
                    form={ form }
                    {...initLayout} 
                    colon={colon}
                    className="apusic-form" 
                    onFinish={onFinish}
                    onValuesChange={()=>{setSaveDisabled(false)}}
                    {...layout}  
                >

                <Row className="page_form_wrap" style={{paddingTop:30}}>
                    
                    {
                        children
                        ?
                        children
                        :
                        form_item_list.map((item,index)=>{
                            return <Col span={colSpan} key={index}><FormItem item = {item}/></Col>
                        })
                    }
                </Row>
                </Form>
            </Spin> 
        </AiCard>
        </> 
    ) 
}
export default AiForm;