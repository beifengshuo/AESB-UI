import Mock from 'mockjs';
import {param2Obj} from '../mUtils';
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
    getserviceList: config => {
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
    /** 增加服务信息createService*/
    createService: config => {
      // const { name,code, url,linkEmail,overTime,overTime2,remark,isLog,type,res,target,space,WS} = param2Obj(config.url);
      const newParams = param2Obj(config.url);
      List.push({
        id: Mock.Random.guid(),
        createTime: Mock.Random.now(),
        updateTime:Mock.Random.now(),
        creator:'admin',
        updator:'admin',
        ...newParams,
      })
      return {
        code: 200,
        data: {
          message: '添加成功'
        }
      }
    },
    
    /** 修改服务信息 updateService*/
    updateService: config => { 
      const { id,...rest } = param2Obj(config.url);
      List.some(u => {
        if (u.id === id) {
          for(let key in rest){
            u[key ]= rest[key]
          }
          return true
        }
      })
      return {
        code: 200,
        data: {
          message: '编辑成功'
        }
      }
    },


    /*** 删除用户deleteMoney */
  deleteMoney: config => {
    const { id } = mUtils.param2Obj(config.url)
    if (!id) {
      return {
        code: -999,
        message: '参数不正确'
      }
    } else {
      List = List.filter(u => u.id !== id)
      return {
        code: 200,
        data: {
          message: '删除成功'
        }
      }
    }
  },
  /* 批量删除 */
 
  batchremoveMoney: config => {
    console.log(config);
    // console.log(mUtils.param2Obj(config.url));
    let { ids } = mUtils.param2Obj(config.url)
    console.log(ids);
    ids = ids.split(',')
    List = List.filter(u => !ids.includes(u.id))
    return {
      code: 200,
      data: {
        message: '批量删除成功'
      }
    }
  },
  
}