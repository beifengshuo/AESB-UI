const fields_list=[

    {
        label:'服务描述',
        name:'serviceName',text:'',
        rules:[
          { required: true, message: '必填项'},
          { max: 25, message: '不能超过25' },
        ], 
    },
    {
        label:'原始服务URL',
        name:'url',text:'',
        rules:[],
        rules:[
            { required: true, message: '必填项'},
        ], 
    },
    {
        label:'代理后的服务URL',
        name:'urlAgent',text:'',
        rules:[], 
    },
    {
        label:'服务名称',
        name:'path',text:'',
        rules:[
            { required: true, message: '必填项'},
        ],  
    },
    {
        label:'目标服务IP',
        name:'ip',text:'',
        rules:[], 
    },
    {
        label:'目标服务器端口',
        name:'port',text:'',
        rules:[], 
    },
    {
        label:'是否启用',
        name:'applyFlag',text:'',
        type:"switch",  
    },
    
    {
        label:'是否记录日志',
        name:'logFlag',text:'',
        type:"switch",
    },
    {
        label:'连接超时时间',
        name:'connectionTimeOut',
        type:"select",
        option:[
            { value:10, label:10 },
            { value:30, label:30 },
            { value:60, label:60 },
            { value:200, label:200 },
            { value:1000, label:1000},
        ]   
    },
    {
        label:'调用超时时间',
        name:'callTimeout',
        type:"select",
        option:[
            { value:10, label:10 },
            { value:30, label:30 },
            { value:60, label:60 },
            { value:200, label:200 },
            { value:1000, label:1000},
        ]  
    },
    {
        label:'协议类型',
        name:'protocolType',text:'',
        type:"select",
        option:[
            // { value:"WEBSERVICE", label:"WEBSERVICE" },
            { value:"HTTP", label:"HTTP" },
        ],    
    },
    
  	
    // 协议类型

    // {
    //     label:'接口编码',
    //     name:'code',text:'',
    //     rules:[
    //       { required: true, message: '必填项'},
    //       { max: 25, message: '不能超过25' },
    //       { pattern: /^(?!_)(?!.*?_$)[a-zA-Z0-9_]+$/,message:'只能输入字母、数字和英文下划线,且不能以英文下划线开头和结尾'}
    //     ], 
    // },
    // {
    //     label:'接口名称',
    //     name:'name',text:'',
    //     rules:[
    //         { required: true, message: '必填项'},
    //         { max: 60, message: '不能超过50' },
    //         { pattern: /^(?!_)(?!.*?_$)[a-zA-Z0-9_\u4e00-\u9fa5]+$/,message:'只能输入汉字、数字、字母、下划线,不能以下划线开头和结尾'}
    //     ],  
    // },
    // {
    //     label:'接口地址',
    //     name:'url',text:'',
    //     rules:[{ required: true, message: '必填项'}],  
    // },
    // {
    //     label:'是否记录日志',
    //     name:'isLog',text:'',
    //     type:"switch",     
    // },
    // {
    //     label:'协议类型',
    //     name:'type',text:'',
    //     rules:[{ required: true, message: '必填项'}],
    //     type:"select",
    //     option:[
    //         { value:"WEBSERVICE", label:"WEBSERVICE" },
    //         { value:"HTTP", label:"HTTP" },
    //     ],
    //     rules:[{required: true, message: '必填项'}],    
    // },
    // {
    //     label:'目标格式',
    //     name:'target',   
    // },
    // {
    //     label:'响应格式',
    //     name:'res',  
    // },
    // {
    //     label:'连接超时',
    //     name:'overTime',
    //     rules:[{ required: true, message: '必填项'}],
    //     type:"select",
    //     option:[
    //         { value:10, label:10 },
    //         { value:30, label:30 },
    //         { value:60, label:60 },
    //         { value:200, label:200 },
    //         { value:1000, label:1000},
    //     ]   
    // },
    // {
    //     label:'调用超时',
    //     name:'overTime2',
    //     rules:[{ required: true, message: '必填项'}],
    //     type:"select",
    //     option:[
    //         { value:10, label:10 },
    //         { value:30, label:30 },
    //         { value:60, label:60 },
    //         { value:200, label:200 },
    //         { value:1000, label:1000},
    //     ]  
    // },
    // {
    //     label:'命名空间',
    //     name:'space',  
    // },
    // {
    //     label:'WS方法',
    //     name:'WS',  
    // },
    // {
    //     label:'备注',
    //     name:'remark',
    //     type:"textArea",    
    // },
]
export default fields_list;