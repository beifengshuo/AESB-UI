import { createStore , applyMiddleware ,compose } from 'redux' ;
import logger from 'redux-logger' ;
import reduxThunk from 'redux-thunk';

import rootReducers from "./reducers";
import {persistStore, persistReducer} from 'redux-persist';
import storageSession from 'redux-persist/lib/storage/session';

 const storageConfig = {
        key: 'root', // 必须有的
        storage:storageSession, // 缓存机制
        blacklist: ['name','age'] // reducer 里不持久化的数据,除此外均为持久化数据
}
const myPersistReducer = persistReducer(storageConfig, rootReducers);
const store = createStore(
    myPersistReducer,
    applyMiddleware(
        reduxThunk , //异步中间件
        logger , //日志中间件
        // laoMiddleware , //测试用中间件
    )
);
 
export const persistor = persistStore(store)
export default store;