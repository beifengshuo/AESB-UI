import React,{useRef} from 'react';
import { Form, Input, Button, Select,Switch ,Tooltip ,InputNumber,DatePicker} from 'antd';
import { QuestionCircleOutlined,InfoCircleOutlined } from '@ant-design/icons';
const { Option} = Select;
const { RangePicker } = DatePicker;
// {
//     label:'密码',
//     name:'password',
//     text:'', 
//     rules:[{ required: true, message: '必填项'}], 
//     disabled : true ,
//     hidden:false
// },
//tooltips
export const formItemLable = (item)=>{
    if(item.text){
        return(
            <span>
                {item.label}&nbsp;
                <Tooltip title={item.text}>
                <QuestionCircleOutlined />
                </Tooltip>
            </span>
        )
    }  
    return item.label
}

export const layout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 18 },
}
export const colon = false;

export const timeOption = [
    {label:"秒",value:"Seconds"},
    {label:"分",value:"Minutes"},
    {label:"小时",value:"Hours"},
    {label:"天",value:"Days"}, 
]

export const timeOptionDefault = [
    {label:"分",value:"Minutes"},
    {label:"小时",value:"Hours"},
    {label:"天",value:"Days"}, 
]


const FormItem = (props)=>{
    const {item,style={width:'80%'}} = props;
   
    switch (item.type) {
        case "textArea":
            return(
                <Form.Item  
                    label={ formItemLable(item) }
                    name={item.name}
                    style={style}
                >
                   <Input.TextArea />
                </Form.Item>
            )
            break;
        case "select":
            return(
                <Form.Item  
                    label={ formItemLable(item) }
                    name={item.name}
                    style={style}
                    // allowClear={true}
                    
                >
                    <Select placeholder="请选择" allowClear={true}>
                        {
                            item.option.map((item)=><Option key={item.value} value={item.value}>{item.label}</Option>)
                        }
                    </Select>
                </Form.Item>
            )
            break;
        case "switch":
            const handleSwitch = (value)=>{ 
                if(props.onChange){
                    props.onChange({checked:value,item})
                }
            }
            return(
                <Form.Item 
                  
                    label={ formItemLable(item) }
                    name={ item.name }
                    valuePropName="checked"
                >
                    <Switch onChange={handleSwitch}/>
                </Form.Item>
            )
            break;
        case "timeout":
            return(
                <Form.Item 
                   
                    label={ formItemLable(item) }
                >
                    <Input.Group compact>
                        <Form.Item
                            name={[`${item.name}`, 'time']}
                            noStyle  
                        >
                            <InputNumber  min={item.min} style={{ width: '160px',marginRight:'10px' }} />
                        </Form.Item>
                        <Form.Item
                            name={[`${item.name}`, 'unit']}
                            noStyle
                        >
                            <Select placeholder="请选择" style={{ width: '160px' }}>
                                {
                                    item.timeOption 
                                    ?
                                    item.timeOption.map((item)=><Option key={item.value} value={item.value}>{item.label}</Option>)
                                    :
                                    timeOptionDefault.map((item)=><Option key={item.value} value={item.value}>{item.label}</Option>)
                                }
                            </Select>
                        </Form.Item>
                        
                    </Input.Group>
                </Form.Item>
            )
        break;
        break;
        case "inputNumber":
          
            return(
                <Form.Item  
                    name={item.name} 
                    rules={item.rules?item.rules:[]}
                    label={ formItemLable(item) }
                >
                    <InputNumber  min={item.min} style={{width:'100%'}}/>
                </Form.Item>
            )
            break;            
        case "password":
            return(
                <Form.Item  
                    name={item.name} 
                    rules={item.rules?item.rules:[]}
                    label={ formItemLable(item) }
                >
                    <Input.Password placeholder={item.placeholder} />
                </Form.Item>
            )
        case "rangePicker":
            return(
                <Form.Item  
                    name={item.name} 
                    rules={item.rules?item.rules:[]}
                    label={ formItemLable(item) }
                    
                    style={style}
                >
                    <RangePicker />
                </Form.Item>
            )

            
        default:
            return(
                <Form.Item  
                    name={item.name} 
                    rules={item.rules?item.rules:[]}
                    label={ formItemLable(item) }
                    style={style} 
                >
                    <Input disabled={item.disabled} placeholder={item.placeholder ? item.placeholder : item.disabled ?"" :"请输入"}  />
                </Form.Item>
            )
            break;
    } 
    
}

export default FormItem;