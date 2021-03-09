//临时文件
import React from 'react';
import { Button , message} from 'antd';
const AiButton = (props)=>{
    const { gettable , selectedkeys , selectedrows,children,fun,type="primary", onClick,...restProps }=props;
    
    return (
        <>
            <Button
                type={type}
                onClick={()=>{onClick({selectedkeys , selectedrows})}}
                {...restProps}     
            >
                {children}
            </Button>
        </>
    )
}
export default AiButton;