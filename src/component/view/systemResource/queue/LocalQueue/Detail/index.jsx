import React from "react";
import TableTemplate from '@/baseComponent/AiTable/TableTemplate';
import { getInfoList } from "@/api/systemResource/queue/local";
import DefaultDelete from '@/baseComponent/DefaultDelete';
import { Button} from 'antd';
import moment from 'moment';
import SendMsg from './SendMsg';

const Detail = ({ tab_key })=>{//target 需要改成 对象形式
    const columns=[
        { title: '消息类型', dataIndex: 'messageType', key:'messageType',ellipsis:true, },
        { title: '发送时间', dataIndex: 'sendTime', key:'sendTime',render:(text)=><>{moment(text).format('YYYY-MM-DD h:mm:ss')}</>},
        { title: '消息内容', dataIndex: 'messageContent', key:'messageContent'},
    ]
    const buttons=[
        // { title: '清空', key:"1" },
        // { title: '发送消息', key:"2" },
        // { title: '删除', key:"3" },
    ]
    return(
        <TableTemplate 
            buttons={ buttons }
            columns={ columns }
            // searchParams={{approveStatus:1}}
            getTableData={(data)=>getInfoList(data)}
            // title="队列详细信息"
            rowKey={"messageId"}
        >
            <Button type="primary" disabled={true}>清空</Button>
            <SendMsg queueName = { tab_key }/>
            <DefaultDelete/>
        </TableTemplate>
    )
}

export default Detail;