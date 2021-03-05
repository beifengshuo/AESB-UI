//临时文件
import React from 'react';
import { Button , message} from 'antd';
const AiButton = (props)=>{
    const { gettable , selectedkeys , selectedrows,children,type="primary",...restProps }=props;
    return (
        <>
            <Button
                type={type}
                {...restProps}     
            >
                {children}
            </Button>
        </>
    )
}
export default AiButton;