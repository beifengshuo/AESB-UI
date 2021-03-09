import React, { useState , useEffect} from 'react';
import { Button} from 'antd';
import AiDialog from '@/baseComponent/AiDialog';
import AiTree from '@/baseComponent/AiTree';
import tree_data from './subscriber_data';

const SubscriberDialog = ()=>{
    const [visible, setVisible] = useState(false);
    const onCreate = (values) => {
        console.log('onCreate: ', values);
        setVisible(false);
    };

    return (
        <>
        <Button
            type="primary"
            onClick={() => { setVisible(true); }}
        >
            编辑订阅者
        </Button>

        <AiDialog
            title="编辑订阅者"
            visible={visible}
            onCreate={onCreate}
            onCancel={() => {
              setVisible(false);
            }}
        >
           <AiTree treeData={tree_data}/>
        </AiDialog>
        </>
    )
}
export default SubscriberDialog;

