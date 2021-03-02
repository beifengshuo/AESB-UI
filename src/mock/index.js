import Mock from 'mockjs';
import menuAPI from './menu';
import loginAPI from './login';

import serviceRegistryAPI from './serviceManagement/serviceRegistry';

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