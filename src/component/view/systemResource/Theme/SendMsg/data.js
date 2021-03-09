const fields_list=[
// queueName: xhh
// text: 4444
    {
        label:'主题名称',
        name:'topicName',text:'',
        rules:[
            { max: 50, message: '不能超过50'}
        ],  
        disabled:true,
    },
    {
        label:'消息内容',
        name:'text',text:'',
        rules:[
            { required: true, message: '必填项'},
            { max: 50, message: '不能超过50'}
        ],
        type:"textArea", 
    },
]
export default fields_list;