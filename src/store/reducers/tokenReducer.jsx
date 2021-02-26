import{
    SET_TOKEN,
    CLEAR_TOKEN,
    SET_REFRESH_TOKEN,
} from '../actions/tokenAction'
const initState = {
    access_token: "",
    expires_in: 0,
    refresh_expires_in: 0,
    refresh_token: "",
    token_type: "",
    init_token_time:0,//初始时
    start_token_time:0,//有效token开始时

}
const tokenReducer = (state =initState, action) => {
    
    switch (action.type) {
        // case SET_TOKEN :
        //     return  Object.assign({} , state , {
        //         ...action.payload
        //     });
        // case CLEAR_TOKEN :
        //     return  initState;
        // case SET_REFRESH_TOKEN:
        //     return  Object.assign({} , state , {
        //         ...action.payload
        //     });
        default:
            return state;
    }
};

export default tokenReducer;