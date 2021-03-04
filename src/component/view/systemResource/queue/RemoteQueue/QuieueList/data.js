const fields_list=[
    // * 队列名称 queueConfig.name: xuhuanhuan2 
    // 描述 queueConfig.description: 描述描述
    // *目标类型 queueConfig.destType: Queue
    // queueConfig.remoteDest: xuhuanhuan2
    // queueConfig.bindingLinker: xhh1
    // bindingValidator: 
    // queueConfig.cacheSize: 64
    // queueConfig.depth: 5000
    // queueConfig.volume: 512000
    // queueConfig.maxMessageSize: 4194304

    {
        label:'队列名称',
        name:'name',text:'',
        rules:[
            { required: true, message: '必填项'},
            { max: 50, message: '不能超过50'}
        ],  
    },
    {
        label:'描述',
        name:'description',text:'',
        rules:[{ max: 50, message: '不能超过50'}],
    },

    {
        label:'目标类型',
        name:'destType',text:'',
        type:'select',
        rules:[
            { required: true, message: '必填项'},
        ],
        option:[
            {label:"队列",value:"Queue"},
            {label:"主题",value:"Topic"},
        ]
    },
    {
        label:'目标队列/主题名',
        name:'remoteDest',text:'',
        rules:[
            { required: true, message: '必填项'},
            { max: 50, message: '不能超过50'} 
        ],
        
    },
    {
        label:'绑定通道',
        name:'bindingLinker',text:'',
        type:'select',
        rules:[
            { required: true, message: '必填项'},
        ],
        option:[
            {label:"通道1",value:"1"},
            {label:"通道2",value:"2"},
        ] 
        //rules:[{ max: 50, message: '不能超过50'}],
    },
    {
        label:'缓存大小(KB)',
        name:'cacheSize',text:'',
        rules:[{ required: true, message: '必填项'}],
        type:'inputNumber', 
    },
    {
        label:'消息数：',
        name:'depth',text:'',
        rules:[{ required: true, message: '必填项'}],
        type:'inputNumber',
    },
    {
        label:'队列容量(KB)',
        name:'volume',text:'',
        rules:[{ required: true, message: '必填项'}],
        type:'inputNumber',
    },
    {
        label:'最大消息大小(Byte)',
        name:'maxMessageSize',
        rules:[{ required: true, message: '必填项'}],
        type:'inputNumber',
          
    }
]
export default fields_list;