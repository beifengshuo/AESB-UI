import Mock from 'mockjs';
import menuAPI from './menu';
import loginAPI from './login';

import serviceRegistryAPI from './serviceManagement/serviceRegistry';
import systemRegistryAPI from './serviceManagement/systemRegistry';
import serviceAgentAPI from './serviceManagement/serviceAgent';

import localQueueAPI from './systemResource/queue/local';
import localQueueInfoAPI from './systemResource/queue/localInfo';

import remoteQueueAPI from './systemResource/queue/remote';
import deadLetterQueueAPI from './systemResource/queue/deadLetter';
import transmissionQueueAPI from './systemResource/queue/transmission';
import templateQueueAPI from './systemResource/queue/template';


// 设置全局延时 没有延时的话有时候会检测不到数据变化 建议保留
Mock.setup({
    timeout: 300
});

//登录相关
Mock.mock(/\/api\/user\/login/,'post',loginAPI.login);

//菜单相关
Mock.mock(/\/menus\/get/, 'get', menuAPI.getMenuList);

//服务注册中心
Mock.mock(/\/api\/serviceRegistry\/getList/, 'get', serviceRegistryAPI.getserviceList);
Mock.mock(/\/api\/serviceRegistry\/createService/, 'get', serviceRegistryAPI.createService);
Mock.mock(/\/api\/serviceRegistry\/updateService/, 'get', serviceRegistryAPI.updateService);

//系统注册中心
Mock.mock(/\/api\/systemRegistry\/getList/, 'get', systemRegistryAPI.getList);
//服务代理
Mock.mock(/\/api\/serviceAgent\/getList/, 'get', serviceAgentAPI.getList);

//队列
Mock.mock(/\/api\/systemResource\/localQueue\/getList/, 'get', localQueueAPI.getList);
Mock.mock(/\/api\/systemResource\/localQueue\/getInfoList/, 'get', localQueueInfoAPI.getList);


Mock.mock(/\/api\/systemResource\/remoteQueue\/getList/, 'get', remoteQueueAPI.getList);
Mock.mock(/\/api\/systemResource\/deadLetterQueue\/getList/, 'get', deadLetterQueueAPI.getList);
Mock.mock(/\/api\/systemResource\/transmissionQueue\/getList/, 'get', transmissionQueueAPI.getList);
Mock.mock(/\/api\/systemResource\/templateQueue\/getList/, 'get', templateQueueAPI.getList);

