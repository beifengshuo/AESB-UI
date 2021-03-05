import React from "react";
import TableTemplate from '@/baseComponent/AiTable/TableTemplate';
import { getInfoList } from "@/api/systemResource/queue/local";
import DefaultDelete from '@/baseComponent/DefaultDelete';
import { Button} from 'antd';
import moment from 'moment';
import SendMsg from './SendMsg';

const Detail = ({ tab_key })=>{//target 需要改成 对象形式
    const columns=[
        { title: '文件ID', dataIndex: 'fileUuid', key:'fileUuid',ellipsis:true, },
        { title: '文件名', dataIndex: 'fileName', key:'fileName',ellipsis:true, },
        { title: '文件大小(Byte)', dataIndex: 'fileSize', key:'fileSize',ellipsis:true, },
        { title: '总块数', dataIndex: 'totalMsgNum', key:'totalMsgNum',ellipsis:true, },
        { title: '已到达块数', dataIndex: 'receivedMsgNum', key:'receivedMsgNum',ellipsis:true, },
        { title: '块大小(KB)', dataIndex: 'msgSize', key:'msgSize',ellipsis:true, },
        { title: '发送者', dataIndex: 'sender', key:'sender',ellipsis:true, },
        { title: '发送时间', dataIndex: 'startTime', key:'startTime',render:(text)=><>{moment(text).format('YYYY-MM-DD h:mm:ss')}</>},
        { title: '备注', dataIndex: 'remark', key:'remark',ellipsis:true, },
    ]
    const buttons=[
        { title: '清空', key:"1" },
        // { title: '发送消息', key:"2" },
        // { title: '删除', key:"3" },
    ]
    const dataTable={
        list:[
            {
                fileUuid:"1",
                fileName: "名称名称名称名称",
                fileSize: 0,
                totalMsgNum: 512,
                receivedMsgNum: 5,
                msgSize: 1000,
                sender:"admim",
                startTime:1614839855404,
                remark: "备注备注备注",
            },
            {
                fileUuid:"2",
                fileName: "名称名称",
                fileSize: 0,
                totalMsgNum: 512,
                receivedMsgNum: 100,
                msgSize: 1000,
                sender:"admim",
                startTime:1614839855404,
                remark: "备注备注备注",
            },
        ],
        total:2,
    }
    return(
        <TableTemplate 
            buttons={ buttons }
            columns={ columns }
            // searchParams={{approveStatus:1}}
            // getTableData={(data)=>getInfoList(data)}
            // title=""
            dataTable={dataTable}
            rowKey={"fileUuid"}
        >
            <DefaultDelete/>
        </TableTemplate>
    )
}

export default Detail;