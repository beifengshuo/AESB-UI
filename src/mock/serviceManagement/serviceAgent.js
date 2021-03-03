import Mock from 'mockjs';
import {param2Obj} from '../mUtils';
//服务代理
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

    "serviceName|1-10": "名称",
    'code': `${1000+i}`,
    'path|1':['/jindie','/hello'],
    'connectionTimeOut|1':[10,30,60,200,1000],
    'callTimeout|1':[10,30,60,200,1000],
    'applyFlag|1': [false,true],
    'logFlag|1': [false,true],  
    "protocolType|1": typelist,

    url:Mock.Random.url('http'),
    urlAgent:Mock.Random.url('http'),
    port:'8080',
    ip:`http://${Mock.Random.ip()}`,

  }))
}
export default {
    /* 获取列表-服务代理*/
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