# yarn run eject 暴露配置文件
    备份初始README.MD和packag.json
    git add .
    commit -m "备份初始README.MD和packag.json"
    yarn run eject
# 配置支持less
    yarn add less@2.7.3 less-loader@5.0.0
    config/webpack.config 中添加less和less-loader
# /@->/src 路径 alias: {...,'@': paths.appSrc}
    config/webpack.config 中添加
    alias: {
        .....,
        '@': paths.appSrc

    }
# 配置支持antd 并在线修改其主题色,并测试
    yarn add antd@^4.9.4 antd-theme-webpack-plugin@^1.3.7 

    config/webpack.config.less.theme.js const AntDesignThemePlugin = require('antd-theme-webpack-plugin');
    根目录/src/styles/variables.less 
    根目录/src/styles/global.less 
    修改 public/index.html
    app.js 引入antd和antd.css
    yarn add react-color || rc-color-picker 颜色拾色器
# 配置支持antd 配置色初始化
    yarn add babel-plugin-import 按需加载,webpack.config.js
# 配置汉化antd
    import { ConfigProvider } from 'antd';
    import zhCN from 'antd/lib/locale/zh_CN';
    import moment from 'moment';
    import 'moment/locale/zh-cn';
    moment.locale('zh-cn'); 
    <ConfigProvider locale={zhCN}>
        <App/>
    </ConfigProvider> 

# 配置支持redux
    yarn add  react-redux redux-logger redux-thunk -D
    yarn add  redux-devtools -S 
    新建 src/store/index.js 
         src/store/reducers =>index.js loginReducer.js mainLayoutReducer.js
         src/store/actions
# 配置支持redux持久化
    yarn add  redux-persist
    src/store/index.js中
        import { createStore, applyMiddleware } from "redux";
        import logger from 'redux-logger';//日志
        import reduxThunk from 'redux-thunk';//异步数据流
        import {persistStore , persistReducer} from 'redux-persist';//持久化
        import storageSession from 'redux-persist/lib/storage/session';//持久化到session

        import rootReducers from "./reducers";//reducer->state
        const storageConfig = {
            key: 'root', // 必须有的
            storage:storageSession, // 缓存机制
            // blacklist: ['name','age'] // reducer 里不持久化的数据,除此外均为持久化数据
        }
        const myPersistReducer = persistReducer(storageConfig,rootReducers);//将rootReducers 装饰一下

        const store = createStore(
            myPersistReducer,
            applyMiddleware(
                reduxThunk,
                logger,
            )
        );
        export const persistor = persistStore(store);
        export default store; 
# 配置支持redux持久化  推 拉 完成之后加载页面
    页面入口处
    //redux-persist 完成推拉之后，在渲染页面，store传递
    import {PersistGate} from 'redux-persist/lib/integration/react';
    import store ,{persistor} from './store';
    import {Provider} from 'react-redux';

    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        ....
      </PersistGate>
    </Provider>       


# 配置支持路由
    yarn add react-router-dom 
# 配置动态路由+布局
    yarn add react-router-config 

 布局 + mock
 # 配置mock,模拟增删该查
    yarn add mockjs axios
    引入 import 'mock'
 # 配置 头部Header
   

    打包 + 瘦身
    表格：按钮+分页+搜索实现增删该查
    表单：按钮+表单
