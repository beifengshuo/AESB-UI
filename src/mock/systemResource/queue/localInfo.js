import Mock from 'mockjs';
import {param2Obj} from '@/mock/mUtils';
//本地队列
let List = []
const count = 60
let typelist = [ "WEBSERVICE", "HTTP" ]	;
for (let i = 0; i < count; i++) {
  List.push(Mock.mock({
    "messageId": Mock.Random.guid(),
    "messageDestination": "testQueue@AESB",
    "messageType|1":['TextMessage'],
    "sendTime": 1614839855404,
    "messageContent|1-10": "内容",
    //time: Mock.Random.datetime(),

    // messageContent: "1111"
    // messageDestination: "testQueue@AESB"
    // messageId: "ID:922e5074-292e-4475-bfe2-2ff1ce662b1b"
    // messageType: "TextMessage"
    // sendTime: 1614839855404
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