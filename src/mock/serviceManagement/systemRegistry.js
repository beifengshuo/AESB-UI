import Mock from 'mockjs';
import {param2Obj} from '../mUtils';
//系统注册
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

    "name|1-10": "名称",
    'code': `${1000+i}`,
    "remark|1-10": "备注",
    "beingUser|1":['admin','李宁','张三丰'],
    'log|1': [false,true], 
    'map|1': [false,true], 
     ip:Mock.Random.ip('http'),
  }))
}
export default {
    /* 获取列表*/
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