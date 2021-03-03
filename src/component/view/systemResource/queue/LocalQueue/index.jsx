import React,{useState} from "react";
import TableTemplate from '@/baseComponent/AiTable/TableTemplate';
import AiTab from '@/baseComponent/AiTab';
import { getList } from "@/api/systemResource/queue/local";

const LocalQueue = ()=>{
     
    const columns=[
        { title: '队列名称', dataIndex: 'queueName', key:'queueName',ellipsis:true,render: (text,record) => <a onClick={()=>{clickQueueName(record,panes)}}>{text}</a> },
        { title: '描述', dataIndex: 'description', key:'description',ellipsis:true,},
        { title: '消息数', dataIndex: 'messageCount', key:'messageCount',width : 200,render: (text,record) => <>{`${record.messageCount} / ${record.depth}`}</>,},
        { title: '已用容量(KB)', dataIndex: 'usedCapacity', key:'usedCapacity',width : 200},
        { title: '总容量(KB)', dataIndex: 'volume', key:'volume',width : 200},  
    ]
    const buttons=[
        { title: '新增', key:"1" },
        { title: '编辑', key:"2" },
        { title: '启动', key:"4" },
        { title: '停止', key:"5" },
        { title: '删除', key:"3" },
    ]
    const searchs=[
        {label:'队列名称', name:'queueName' },
    ]

    const columns2=[
        { title: '消息类型', dataIndex: 'queueName', key:'queueName',width:160,ellipsis:true, },
        { title: '发送时间', dataIndex: 'description', key:'description'},
        { title: '消息内容', dataIndex: 'messageCount', key:'messageCount'},
    ]
    const buttons2=[
        { title: '清空', key:"1" },
        { title: '发送消息', key:"2" },
        { title: '删除', key:"3" },
    ]


    const [panes,setPanes]=useState([
        { 
            title: '本地队列', 
            key: '1',
            closable: false,
            content:
                <TableTemplate 
                    buttons={buttons}
                    searchs={searchs}
                    columns={columns}
                    // searchParams={{approveStatus:1}}
                    getTableData={(data)=>getList(data)}
                    // title="本地队列"
                    >
                </TableTemplate>
            ,
        }
    ]);
    const [activeKey,setActiveKey]=useState('1');
    // const [arr,setArr]=useState('1');
    let arr = ['1']


    const clickQueueName = ( row , now_panes )=>{
        let activeKey =  row.id;
        //唯一性检验
        if(panes.find((pane)=>pane.key===row.id)){//切换
            console.log("切换");
            setActiveKey(activeKey);
        }else{//添加 
            const open_panes= { 
                title: `${row.queueName}详细信息`,
                key: row.id, 
                closable: true, 
                content: 
                    <TableTemplate 
                        buttons={ buttons2 }
                        columns={ columns2 }
                        // searchParams={{approveStatus:1}}
                        // getTableData={(data)=>getList(data)}
                        //title="队列详细信息"
                        >
                    </TableTemplate>
                ,   
            }
            now_panes.push(open_panes);
            setPanes(now_panes);
            setActiveKey(activeKey);
        }     
    }

    const onTabEdit = (targetKey, action) => {
        if(action=="remove"){
            remove(targetKey);
        }
    };
    const remove = targetKey => {
        let new_activeKey = activeKey;
        let lastIndex;
        
        panes.forEach((pane, i) => {
          if (pane.key === targetKey) {
            lastIndex = i - 1;
          }
        });
        
        const new_panes = panes.filter(pane => pane.key !== targetKey);
        if (new_panes.length && activeKey === targetKey) {
            // console.log("activeKey",activeKey)
            // console.log("targetKey",targetKey)
          if (lastIndex >= 0) {
            new_activeKey = new_panes[lastIndex].key;
          } else {
            new_activeKey = new_panes[0].key;
          }
        }
        setPanes(new_panes);
        setActiveKey(new_activeKey);
        // this.setState({ new_panes, activeKey });
    };

  
    return (
        <>
            <AiTab 
                panes={panes} 
                activeKey={activeKey}
                onChange={(key)=>{setActiveKey(key)}}
                onEdit={onTabEdit}
                hideAdd
            />
        </>
    )
}
export default LocalQueue;