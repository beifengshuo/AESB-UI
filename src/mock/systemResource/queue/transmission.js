import Mock from 'mockjs';
import {param2Obj} from '@/mock/mUtils';
//服务注册
let List = []
const count = 60
let typelist = [ "WEBSERVICE", "HTTP" ]	;
for (let i = 0; i < count; i++) {
  List.push(Mock.mock({
    id: Mock.Random.guid(),
    createTime: Mock.Random.datetime(),
    updateTime:Mock.Random.datetime(),
    creator:Mock.Random.cname(),
    updator:Mock.Random.cname(),
    
    url:Mock.Random.url(),
    linkEmail:Mock.Random.email(),
    'overTime|1':[10,30,60,200,1000],
    'overTime2|1':[10,30,60,200,1000],
    // overTime:Mock.Random.float(0, 9999, 2,2),
    // overTime2:Mock.Random.float(-5999, 0, 2,2),
    "remark|1-10": "备注",
    'isLog|1': [false,true],  
    "name|1-10": "名称",
    'code': `${1000+i}`,
    "type|1": typelist,
    "res|1-100": "resabv",
    "target|1-100": "targetabv",
    "space|1-5": "命名空间",
    WS:"",
  }))
}

export default {
    
/* 获取列表getMoneyList*/
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
    }
  }