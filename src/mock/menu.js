export default {
    /* 获取列表 geMenuList*/
    getMenuList:(config)=>{
        return({
            code: 200,
            data:{
                "info": {
                    "name": "管理员",
                    "avatar": "https://himg.bdimg.com/sys/portrait/item/pp.1.1a3e55f2.J-hp2UWn4ZTZ4B-boxxaZQ.jpg?tt=1585406576138"
                },
                "menu":[
                    {
                        "id": 1,
                        "name": "首页",
                        "path": "/home",
                        "componentPath": "view/home/home",
                        "exact": true
                    },
                    {
                        "id": 2,
                        "name": "工具页",
                        "path": "/tool",
                        "childs": [
                            {
                                "id": 21,
                                "name": "列表页",
                                "path": "/tool/list",
                                "componentPath": "view/tool/list",
                                "exact": true
                            },
                            {
                                "id": 22,
                                "name": "表单页",
                                "path": "/tool/form",
                                "componentPath": "view/tool/form",
                                "exact": true
                            }
                        ]
                    },
                ]
            }
          
            
        })
    }

}