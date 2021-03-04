import Mock from 'mockjs';
import {param2Obj} from '@/mock/mUtils';
//本地队列
let List = []
const count = 60
let typelist = [ "WEBSERVICE", "HTTP" ]	;
for (let i = 0; i < count; i++) {
  List.push(Mock.mock({
    id: Mock.Random.guid(),
    createTime: Mock.Random.datetime(),
    updateTime:Mock.Random.datetime(),
    createUser:Mock.Random.cname(),
    updateUser:Mock.Random.cname(),

   
    // destType: ""
    // remoteDest: ""
    // remoteRouter: ""
    // running: true
    // usedCapacity: 0.391
   

    "description|1-10": "描述",
    "queueName": `${1000+i}`,
    "depth":5000,
    "messageCount":Mock.Random.int(0, 5000),
    "volume": 512000,
    "usedCapacity": 0.391,


    // 'code': `${1000+i}`,
    // "remark|1-10": "备注",
    // "beingUser|1":['admin','李宁','张三丰'],
    // 'log|1': [false,true], 
    // 'map|1': [false,true], 
    //  ip:Mock.Random.ip('http'),
  }))
}
export default {
    /* 获取列表本地队列列表*/
    getList: config => {
        const { name, page = 1, limit = 20 } = param2Obj(config.url)
        // console.log(param2Obj(config.url))
        // console.log(page+"++"+limit)
        const mockList = List.filter(user => {
        if (name && user.username.indexOf(name) === -1) return false
            return true
        })
        const pageList = mockList.filter((item, index) => index < limit * page && index >= limit * (page - 1))
        return {
            code: 200,
            data: {
                total: mockList.length,
                list: pageList
            }
        }
    },
}