//临时文件
import React from 'react';
import { Button , message} from 'antd';
const DeleteMsg = (props)=>{
    const { gettable , selectedkeys , selectedrows }=props;
    return (
        <>
        <Button
            type="primary"
            onClick={() => { 
                if(selectedkeys.length==0){
                    message.warning('请至少选择一条数据');
                    return false;
                }
                message.warning('等待接口联调');
            }}
        >
            删除
        </Button>
        </>
    )
}
export default DeleteMsg;